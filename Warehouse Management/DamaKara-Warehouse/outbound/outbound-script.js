// --- DUMMY DATA (DATABASE PRODUK & ORDER) --- //

// 1. DATA PRODUK (DATABASE SKU VARIAN)
const productDatabase = [
    { sku: 'DMK-001-M', parentSku: 'DMK-001', name: 'Setala Shirt', variant: 'Hitam - Size M', img: 'setalashirt.jpeg' },
    { sku: 'DMK-001-L', parentSku: 'DMK-001', name: 'Setala Shirt', variant: 'Hitam - Size L', img: 'setalashirt.jpeg' },
    { sku: 'DMK-002-M', parentSku: 'DMK-002', name: 'Kala Shirt Longsleeve', variant: 'Hitam - Size M', img: 'kalashirtlongsleeve.png' },
    { sku: 'DMK-002-BL-L', parentSku: 'DMK-002', name: 'Kala Shirt Longsleeve', variant: 'Electric Blue - Size L', img: 'kalashirtlongsleeve.png' },
    { sku: 'DMK-003-NV', parentSku: 'DMK-003', name: 'Arkana Embroidery Vest', variant: 'Navy - All Size', img: 'arkanaembroideryvest.png' },
    { sku: 'DMK-004-NV', parentSku: 'DMK-004', name: 'Aksata Vest Lace', variant: 'Navy - All Size', img: 'aksatavestlace.png' },
    { sku: 'DMK-005-MR', parentSku: 'DMK-005', name: 'Obi Belt', variant: 'Maroon - All Size', img: 'obibelt.jpeg' }
];

// 2. DATA RESTOCK ORDER
const restockOrders = [
    {
        id: 'RO-20251001',
        store: 'Store Utama (Pusat)',
        date: '26 Okt 2025',
        expected: '28 Okt 2025',
        status: 'Need to Pick',
        totalItems: 30,
        items: [
            { sku: 'DMK-001-L', name: 'Setala Shirt', variant: 'Hitam - Size L', rack: 'Rak A-01', qty: 20, picked: 0 },
            { sku: 'DMK-001-M', name: 'Setala Shirt', variant: 'Hitam - Size M', rack: 'Rak A-01', qty: 10, picked: 0 }
        ]
    },
    {
        id: 'RO-20251002',
        store: 'Store Cabang (Mall)',
        date: '27 Okt 2025',
        expected: '30 Okt 2025',
        status: 'Need to Pick',
        totalItems: 15,
        items: [
            { sku: 'DMK-004-NV', name: 'Aksata Vest Lace', variant: 'Navy - All Size', rack: 'Rak B-02', qty: 15, picked: 0 }
        ]
    }
];

// --- GLOBAL VARIABLES --- //
let scanLog = [];
let currentScanType = ''; // 'free_scan' atau 'picking_mode'
let scanCountToday = 0;
let currentRestockFilter = 'Need to Pick'; 
let activePickingOrderIdx = null; 
let sessionSummaryData = {}; // Variabel baru untuk Summary Session

// --- NAVIGATION LOGIC --- //
function showPage(pageId) {
    document.querySelectorAll('.page-section').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId + '-page').classList.add('active');
    
    document.querySelectorAll('.nav-links li').forEach(li => li.classList.remove('active'));
    const activeNav = Array.from(document.querySelectorAll('.nav-links li')).find(li => li.getAttribute('onclick') && li.getAttribute('onclick').includes(pageId));
    if(activeNav) activeNav.classList.add('active');

    if(pageId === 'restock') renderRestockList();
}

// --- RESTOCK ORDER LOGIC --- //
function setRestockFilter(status) {
    currentRestockFilter = status;
    const btns = document.querySelectorAll('.filter-tabs button');
    btns.forEach(btn => {
        if(btn.innerText === status) btn.classList.add('active');
        else btn.classList.remove('active');
    });
    renderRestockList();
}

function renderRestockList() {
    const container = document.getElementById('restockGrid');
    container.innerHTML = '';

    const filteredOrders = restockOrders.filter(order => order.status === currentRestockFilter);

    if(filteredOrders.length === 0) {
        container.innerHTML = `<p style="grid-column:1/-1; text-align:center; color:#888; margin-top:20px;">Tidak ada data restock dengan status <strong>${currentRestockFilter}</strong>.</p>`;
        return;
    }

    filteredOrders.forEach((order) => {
        const originalIndex = restockOrders.indexOf(order);
        let badgeColor = 'warning'; 
        if (order.status === 'Need to Pick') badgeColor = 'warning';
        if (order.status === 'Shipped') badgeColor = 'info';

        const iconStatus = order.status === 'Shipped' ? '<i class="fas fa-check-double"></i>' : '<i class="fas fa-box-open"></i>';

        const card = `
            <div class="order-card" onclick="openDetail(${originalIndex})">
                <div class="card-header">
                    <h4 style="color:var(--primary); margin:0;">${order.id}</h4>
                    <span class="badge ${badgeColor}">${iconStatus} ${order.status}</span>
                </div>
                <div class="card-body">
                    <h3 style="margin-bottom:5px;">${order.store}</h3>
                    <p style="color:#888; font-size:12px;">
                        <i class="far fa-calendar-alt"></i> Exp: <span style="color:#333; font-weight:500;">${order.expected}</span>
                    </p>
                    <div class="card-footer-info">
                        <span class="item-count-badge"><i class="fas fa-tshirt"></i> ${order.totalItems} Pcs</span>
                        <span class="link-detail">Detail & Picking <i class="fas fa-arrow-right"></i></span>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// --- DETAIL MODAL LOGIC --- //
let selectedDetailIdx = null;

function openDetail(index) {
    selectedDetailIdx = index;
    const order = restockOrders[index];
    
    document.getElementById('modalId').innerText = order.id;
    document.getElementById('modalStore').innerText = order.store;
    document.getElementById('modalDate').innerText = order.date;
    document.getElementById('modalExpected').innerText = order.expected;
    document.getElementById('modalTotal').innerText = order.totalItems + ' Pcs';

    const container = document.getElementById('modalItemsContainer');
    container.innerHTML = '';

    const modalActionContainer = document.querySelector('.modal-footer .action-buttons');
    
    if (order.status === 'Need to Pick') {
        modalActionContainer.innerHTML = `
            <button class="btn-secondary" onclick="closeModal()">Tutup</button>
            <button class="btn-primary" onclick="startPicking(${index})">
                <i class="fas fa-barcode"></i> Mulai Scan Picking
            </button>
        `;
    } else {
        modalActionContainer.innerHTML = `
            <button class="btn-secondary" onclick="closeModal()">Tutup</button>
            <button class="btn-primary" disabled style="background:#ccc; cursor:default;">
                <i class="fas fa-check-double"></i> Sudah Dikirim
            </button>
        `;
    }

    order.items.forEach(item => {
        const prodData = productDatabase.find(p => p.sku === item.sku); 
        const imgPath = prodData ? `../gambar/${prodData.img}` : 'https://via.placeholder.com/40';

        const row = `
            <div class="item-group" style="display:flex; justify-content:space-between; align-items:center; padding:10px;">
                <div style="display:flex; align-items:center; gap:10px;">
                    <img src="${imgPath}" style="width:40px; height:40px; object-fit:cover; border-radius:4px; border:1px solid #ddd;">
                    <div>
                        <span style="display:block; font-weight:600; font-size:13px;">${item.name}</span>
                        <small style="color:#666;">${item.variant}</small>
                    </div>
                </div>
                <div style="text-align:right;">
                    <span class="rack-badge" style="margin-bottom:2px; display:inline-block;">${item.rack}</span>
                    <div style="font-size:12px; font-weight:bold;">Qty: ${item.qty}</div>
                </div>
            </div>
        `;
        container.innerHTML += row;
    });

    document.getElementById('detailModal').style.display = 'block';
}

function closeModal() { document.getElementById('detailModal').style.display = 'none'; }


// --- PICKING & SCANNING LOGIC (UPDATED WITH SUMMARY & QTY) --- //

function selectDestination(type) {
    currentScanType = 'free_scan'; 
    let label = '';
    switch(type) {
        case 'store': label = 'DISTRIBUSI STORE (BEBAS)'; break;
        case 'online': label = 'PENJUALAN ONLINE'; break;
        case 'event': label = 'EVENT / BAZAR'; break;
        case 'other': label = 'KEPERLUAN LAIN'; break;
    }
    
    setupScanUI(label, 'free');
}

function startPicking(index) {
    activePickingOrderIdx = index;
    const order = restockOrders[index];
    closeModal();
    showPage('scan');

    currentScanType = 'picking_mode';
    setupScanUI('PICKING: ' + order.store, 'picking');
    
    renderPickingStatus(); // Render awal list picking
}

function setupScanUI(labelText, mode) {
    document.getElementById('scanStep1').style.display = 'none';
    document.getElementById('scanStep2').style.display = 'block';
    
    const badge = document.getElementById('activeModeBadge');
    badge.innerText = labelText;
    
    // Toggle Picking Panel vs Normal Log
    if(mode === 'picking') {
        badge.style.background = 'var(--primary)';
        document.getElementById('normalLogHeader').style.display = 'none';
        document.getElementById('scanLogList').style.display = 'none';
        document.getElementById('pickingPanel').style.display = 'flex'; // Tampilkan Picking Panel
    } else {
        badge.style.background = '#2c3e50';
        document.getElementById('normalLogHeader').style.display = 'flex';
        document.getElementById('scanLogList').style.display = 'block';
        document.getElementById('pickingPanel').style.display = 'none';
    }

    // Reset Summary & Input
    sessionSummaryData = {};
    renderSessionSummary();
    document.getElementById('scanQty').value = 1;
    setTimeout(() => document.getElementById('barcodeInput').focus(), 100);
}

function resetScanMode() {
    document.getElementById('scanStep2').style.display = 'none';
    document.getElementById('scanStep1').style.display = 'block';
    currentScanType = '';
    activePickingOrderIdx = null;
    
    // Reset Summary
    sessionSummaryData = {};
    renderSessionSummary();
}

function handleEnter(e) {
    if(e.key === 'Enter') {
        const val = e.target.value;
        if(val) { processScan(val); e.target.value = ''; }
    }
}

function simulateScanInput(code) {
    const input = document.getElementById('barcodeInput');
    input.value = code;
    processScan(code);
    input.value = '';
    input.focus();
}

// --- CORE FUNCTION: PROCESS SCAN & UPDATE SUMMARY ---
function processScan(code) {
    // 1. Ambil Input Qty
    const qtyInput = document.getElementById('scanQty');
    const scanQty = parseInt(qtyInput.value) || 1; 

    // 2. Bersihkan kode (handle defect suffix)
    const isDefect = code.endsWith('-DF');
    const cleanSku = isDefect ? code.replace('-DF', '') : code;

    // 3. Logic Berdasarkan Mode
    if (currentScanType === 'picking_mode') {
        // --- LOGIKA PICKING ---
        const order = restockOrders[activePickingOrderIdx];
        const targetItem = order.items.find(i => i.sku === cleanSku);

        if (targetItem) {
            const needed = targetItem.qty - targetItem.picked;
            
            if (needed <= 0) {
                 alert(`⚠️ Barang '${targetItem.name}' SUDAH LENGKAP!`);
                 return;
            }

            const qtyToProcess = Math.min(scanQty, needed);
            
            if (scanQty > needed) {
                alert(`⚠️ Input Qty (${scanQty}) melebihi sisa kebutuhan (${needed}). Hanya ${needed} yang dicatat.`);
            }

            targetItem.picked += qtyToProcess;
            scanCountToday += qtyToProcess;
            
            // UPDATE SUMMARY (Picking Mode)
            updateSessionSummary(cleanSku, targetItem.name, qtyToProcess, isDefect);
            
            // RENDER ULANG PICKING LIST (Agar progress bar nambah)
            renderPickingStatus();
        } else {
            alert(`❌ Barang dengan SKU ${cleanSku} TIDAK ADA dalam daftar permintaan ini!`);
        }

    } else {
        // --- LOGIKA FREE SCAN ---
        const time = new Date().toLocaleTimeString();
        const product = productDatabase.find(p => p.sku === cleanSku);
        
        let displayName = product ? `<strong>${product.name}</strong> <small>${product.variant}</small>` : `Unknown Item (${code})`;
        let summaryName = product ? `${product.name} (${product.variant})` : code;
        let imgHtml = (product && product.img) ? `<img src="../gambar/${product.img}" style="width:35px; height:35px; object-fit:cover;">` : '<i class="fas fa-box"></i>';

        if(isDefect) {
            displayName += ` <span style="color:red; font-weight:bold;">(DEFECT)</span>`;
            summaryName += " [DEFECT]";
        }

        const logContainer = document.getElementById('scanLogList');
        if(logContainer.querySelector('.empty-state')) logContainer.innerHTML = '';

        const itemHtml = `
            <div class="log-item">
                <div class="log-icon">${imgHtml}</div>
                <div class="log-info">
                    <h5>${displayName} <span style="color:var(--primary);">x${scanQty}</span></h5>
                    <p>${code} • ${time}</p>
                </div>
                <div class="log-badge-out" style="background:${isDefect?'red':'#27ae60'}">${isDefect?'DEFECT':'STOCK -1'}</div>
            </div>
        `;
        logContainer.insertAdjacentHTML('afterbegin', itemHtml);
        
        scanCountToday += scanQty;
        
        // UPDATE SUMMARY (Free Scan Mode)
        updateSessionSummary(cleanSku, summaryName, scanQty, isDefect);
    }

    document.getElementById('statTotalScan').innerText = scanCountToday + ' Pcs';
}

// --- FUNGSI PICKING LIST RENDER (Ini yang kemarin hilang) ---
function renderPickingStatus() {
    const order = restockOrders[activePickingOrderIdx];
    const listContainer = document.getElementById('pickingItemsList');
    listContainer.innerHTML = '';

    let allDone = true;

    order.items.forEach(item => {
        const isComplete = item.picked >= item.qty;
        if(!isComplete) allDone = false;

        const progressPercent = (item.picked / item.qty) * 100;
        
        const itemHtml = `
            <div class="pick-item-card ${isComplete ? 'done' : ''}" style="border-left: 4px solid ${isComplete ? 'var(--success)' : 'var(--warning)'}; background: #fff; padding: 10px; margin-bottom: 8px; border-radius: 4px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                <div style="display:flex; justify-content:space-between; margin-bottom:5px;">
                    <div style="font-weight:600; font-size:13px;">${item.name} <br><small style="font-weight:normal; color:#666;">${item.variant}</small></div>
                    <div style="text-align:right;">
                        <span style="font-family:monospace; font-weight:bold; font-size:14px; color:var(--primary);">${item.picked}/${item.qty}</span>
                    </div>
                </div>
                <div style="width:100%; height:6px; background:#eee; border-radius:3px; overflow:hidden;">
                    <div style="width:${progressPercent}%; height:100%; background:${isComplete ? 'var(--success)' : 'var(--warning)'}; transition:width 0.3s;"></div>
                </div>
                <div style="font-size:10px; color:#888; margin-top:4px;">SKU: ${item.sku} • Lokasi: <strong>${item.rack}</strong></div>
            </div>
        `;
        listContainer.innerHTML += itemHtml;
    });

    const btnFinish = document.getElementById('btnFinishPicking');
    if(allDone) {
        btnFinish.disabled = false;
        btnFinish.style.background = 'var(--success)';
        btnFinish.innerHTML = '<i class="fas fa-check-circle"></i> Selesai & Kirim (Shipped)';
    } else {
        btnFinish.disabled = true;
        btnFinish.style.background = '#ccc';
        btnFinish.innerHTML = 'Scan Semua Barang...';
    }
}

function finishPicking() {
    if(!activePickingOrderIdx && activePickingOrderIdx !== 0) return;
    
    if(confirm('Semua barang telah discan. Update status order menjadi SHIPPED?')) {
        restockOrders[activePickingOrderIdx].status = 'Shipped';
        activePickingOrderIdx = null;
        currentScanType = '';
        alert('Order berhasil diproses! Status berubah menjadi Shipped.');
        resetScanMode();
        setRestockFilter('Shipped');
        showPage('restock');
        const statEl = document.querySelector('.stat-card.primary h3');
        if(statEl) statEl.innerText = '0 Order'; 
    }
}

function clearLog() {
    document.getElementById('scanLogList').innerHTML = '<div class="empty-state">Belum ada barang di-scan</div>';
    scanCountToday = 0;
    document.getElementById('statTotalScan').innerText = '0 Pcs';
}

// --- FUNGSI SESSION SUMMARY (Tabel Rekap di Kiri Bawah) ---

function updateSessionSummary(sku, name, qty, isDefect) {
    const key = isDefect ? sku + '-DF' : sku;
    
    if (!sessionSummaryData[key]) {
        sessionSummaryData[key] = {
            name: name,
            qty: 0,
            isDefect: isDefect
        };
    }
    
    sessionSummaryData[key].qty += qty;
    renderSessionSummary();
}

function renderSessionSummary() {
    const tbody = document.getElementById('summaryTableBody');
    const grandTotalEl = document.getElementById('summaryGrandTotal');
    if(!tbody || !grandTotalEl) return;

    tbody.innerHTML = '';
    
    let grandTotal = 0;
    const keys = Object.keys(sessionSummaryData);

    if (keys.length === 0) {
        tbody.innerHTML = '<tr><td colspan="2" style="text-align:center; padding:15px; color:#94a3b8; font-style:italic;">Belum ada item di-scan</td></tr>';
        grandTotalEl.innerText = '0 Pcs';
        return;
    }

    keys.forEach(key => {
        const item = sessionSummaryData[key];
        grandTotal += item.qty;
        
        const styleText = item.isDefect ? 'color:red;' : 'color:#2c3e50;';
        const bgRow = item.isDefect ? 'background:#fff5f5;' : '';
        
        const row = `
            <tr style="${bgRow}">
                <td style="${styleText}">
                    <div style="font-weight:600; font-size:12px; line-height:1.3;">${item.name}</div>
                    <div style="font-size:10px; color:#94a3b8; font-family:monospace;">${key}</div>
                </td>
                <td class="summary-qty-col" style="${styleText}; font-size:14px;">
                    x${item.qty}
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });

    grandTotalEl.innerText = grandTotal + ' Pcs';
}

function clearSummary() {
    if(confirm('Hapus ringkasan sesi ini? Data log di kanan tidak akan hilang.')) {
        sessionSummaryData = {};
        renderSessionSummary();
    }
}

document.addEventListener('DOMContentLoaded', () => { 
    setRestockFilter('Need to Pick'); 
});