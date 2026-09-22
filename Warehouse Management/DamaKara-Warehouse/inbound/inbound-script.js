// --- DATA DUMMY (UPDATED: NO FABRIC/KAIN) ---
const queueData = [
    { 
        id: 1, 
        sku: 'DMK-001', name: 'Setala Shirt', 
        qtyGood: 45, qtyDefect: 5, 
        img: 'setalashirt.jpeg', category: 'Shirt', collection: 'Setala', userType: 'Pria'
    },
    { 
        id: 2, 
        sku: 'DMK-002', name: 'Kala Shirt Longsleeve', 
        qtyGood: 30, qtyDefect: 0, 
        img: 'kalashirtlongsleeve.png', category: 'Shirt', collection: 'Kala', userType: 'Pria'
    },
    { 
        id: 3, 
        sku: 'DMK-003', name: 'Arkana Embroidery Vest', 
        qtyGood: 15, qtyDefect: 8, 
        img: 'arkanaembroideryvest.png', category: 'Outer', collection: 'Arkana', userType: 'Wanita'
    },
    { 
        id: 4, 
        sku: 'DMK-004', name: 'Aksata Vest Lace', 
        qtyGood: 50, qtyDefect: 0, 
        img: 'aksatavestlace.png', category: 'Outer', collection: 'Aksata', userType: 'Wanita'
    },
    { 
        id: 5, 
        sku: 'DMK-005', name: 'Obi Belt', 
        qtyGood: 100, qtyDefect: 3, 
        img: 'obibelt.jpeg', category: 'Accessories', collection: 'Obi', userType: 'Wanita'
    }
];

let scanHistory = [];

// --- NAVIGATION ---
function showPage(pageId) {
    document.querySelectorAll('.page-section').forEach(p => p.classList.remove('active'));
    document.getElementById(pageId + '-page').classList.add('active');

    document.querySelectorAll('.nav-links li').forEach(li => li.classList.remove('active'));
    if(event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    if(pageId === 'scanning') {
        setTimeout(() => document.getElementById('barcodeInput').focus(), 500);
    }
}

// --- LABELING LOGIC (UPDATED: SHOW ALL PRINT BUTTONS) ---
function renderQueue() {
    const tbody = document.getElementById('queueTableBody');
    tbody.innerHTML = '';

    queueData.forEach(item => {
        // Logic: Tombol Print SELALU MUNCUL, tapi info qty tetap sesuai data
        const btnGood = `<button class="btn-outline-primary" onclick="openPrintModal(${item.id}, 'normal')"><i class="fas fa-print"></i> Print Normal</button>`;
        
        // Update: Tombol Defect selalu muncul (request user)
        const btnDefect = `<button class="btn-outline-danger" onclick="openPrintModal(${item.id}, 'defect')"><i class="fas fa-exclamation-circle"></i> Print Defect</button>`;

        const imgPath = item.img ? `../gambar/${item.img}` : 'https://via.placeholder.com/40?text=No+Img';

        const row = `
            <tr>
                <td>
                    <div style="display:flex; align-items:center; gap:12px;">
                        <img src="${imgPath}" style="width:45px; height:45px; object-fit:cover; border-radius:6px; border:1px solid #eee;" onerror="this.src='https://via.placeholder.com/45?text=Err'">
                        <div>
                            <strong>${item.name}</strong><br>
                            <small class="subtitle" style="font-size:11px;">${item.collection} • ${item.category}</small>
                        </div>
                    </div>
                </td>
                <td style="vertical-align:middle; font-family:monospace; color:#555;">${item.sku}</td>
                <td class="text-center" style="vertical-align:middle;">
                    <span style="font-weight:bold; color:var(--primary); font-size:1.1em;">${item.qtyGood}</span>
                </td>
                <td class="text-center" style="vertical-align:middle;">
                    ${item.qtyDefect > 0 ? `<span style="font-weight:bold; color:var(--danger); font-size:1.1em;">${item.qtyDefect}</span>` : '<span style="color:#ccc;">0</span>'}
                </td>
                <td style="vertical-align:middle;">
                    <div style="display:flex; gap:5px;">
                        ${btnGood}
                        ${btnDefect}
                    </div>
                </td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

// --- MODAL PRINT LOGIC (UPDATED: ALLOW MANUAL OVERRIDE) ---
let selectedItem = null;
let printType = 'normal'; 

function openPrintModal(id, type) {
    selectedItem = queueData.find(i => i.id === id);
    printType = type;

    document.getElementById('modalProdName').innerText = selectedItem.name;
    
    // Logic: Jika qty 0, set default max 100 (biar tetap bisa print manual)
    let maxQty = type === 'normal' ? selectedItem.qtyGood : selectedItem.qtyDefect;
    if (maxQty <= 0) maxQty = 100; // Manual Override Permission

    document.getElementById('modalMaxQty').innerText = (type === 'normal' ? selectedItem.qtyGood : selectedItem.qtyDefect) + " (Sistem)";
    
    const input = document.getElementById('printQty');
    input.value = 1;
    input.max = maxQty;

    const badge = document.getElementById('modalTypeBadge');
    const mockup = document.getElementById('labelMockup');
    const skuPreview = document.getElementById('modalSkuPreview');

    if(type === 'defect') {
        badge.innerText = 'BARANG DEFECT';
        badge.className = 'badge danger';
        mockup.className = 'label-mockup is-defect';
        skuPreview.innerText = selectedItem.sku + '-DF';
    } else {
        badge.innerText = 'BARANG NORMAL';
        badge.className = 'badge';
        mockup.className = 'label-mockup';
        skuPreview.innerText = selectedItem.sku;
    }

    document.getElementById('printModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('printModal').style.display = 'none';
}

function executePrint() {
    const qty = parseInt(document.getElementById('printQty').value);
    
    if(printType === 'normal') {
        selectedItem.qtyGood = Math.max(0, selectedItem.qtyGood - qty);
    } else {
        selectedItem.qtyDefect = Math.max(0, selectedItem.qtyDefect - qty);
    }

    alert(`Mencetak ${qty} label untuk ${selectedItem.name} (${printType.toUpperCase()})`);
    closeModal();
    renderQueue(); 
}

// --- SCANNING LOGIC (UPDATED: WITH QTY) ---
function handleEnter(e) {
    if(e.key === 'Enter') {
        const val = e.target.value;
        if(val) {
            processScan(val);
            e.target.value = ''; 
            // Reset Qty ke 1 setelah scan (opsional, biar aman)
            // document.getElementById('scanQty').value = 1; 
        }
    }
}

function simulateScanInput(code) {
    document.getElementById('barcodeInput').value = code;
    processScan(code);
    document.getElementById('barcodeInput').value = '';
    document.getElementById('barcodeInput').focus();
}

function processScan(code) {
    // Ambil value QTY dari input baru
    const qtyInput = document.getElementById('scanQty');
    const scanQty = parseInt(qtyInput.value) || 1; // Default 1 jika kosong

    const isDefect = code.endsWith('-DF');
    const baseSku = isDefect ? code.replace('-DF', '') : code;
    
    const product = queueData.find(p => p.sku === baseSku);

    if(product) {
        addLog(product.name, code, isDefect, true, scanQty);
    } else {
        addLog('Unknown Product', code, isDefect, false, scanQty);
    }
}

function addLog(name, code, isDefect, found, qty) {
    const logList = document.getElementById('scanLogList');
    
    if(logList.querySelector('.empty-state')) {
        logList.innerHTML = '';
    }

    const time = new Date().toLocaleTimeString();
    let iconClass = found ? (isDefect ? 'defect' : 'success') : 'defect';
    let iconContent = found ? (isDefect ? '<i class="fas fa-exclamation"></i>' : '<i class="fas fa-check"></i>') : '<i class="fas fa-times"></i>';
    
    let badgeHtml = '';
    if(!found) badgeHtml = `<span class="log-badge df">ERROR</span>`;
    else badgeHtml = isDefect 
        ? `<span class="log-badge df">DEFECT IN</span>` 
        : `<span class="log-badge ok">STOCK IN</span>`;

    const item = document.createElement('div');
    item.className = 'log-item';
    item.innerHTML = `
        <div class="log-icon ${iconClass}">
            ${iconContent}
        </div>
        <div class="log-details">
            <h4 style="display:flex; justify-content:space-between; width:100%;">
                ${name} 
                <span style="color:var(--primary); font-weight:bold;">x${qty} Pcs</span>
            </h4>
            <p>Code: ${code} • ${time}</p>
        </div>
        ${badgeHtml}
    `;

    logList.prepend(item); 
}

function clearLog() {
    document.getElementById('scanLogList').innerHTML = '<div class="empty-state">Belum ada barang di-scan</div>';
}

document.addEventListener('DOMContentLoaded', () => {
    renderQueue();
});