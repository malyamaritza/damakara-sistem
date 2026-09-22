// --- 1. CONSISTENT DUMMY DATA ---

// Data Produk (Merge data Merch + Warehouse + Sales Stats)
// --- 1. CONSISTENT DUMMY DATA (SINKRON 6 ITEM) ---

// --- TAMBAHAN DATA: INVENTORY HEALTH (STRUCTURE SAMA PERSIS WAREHOUSE) ---
// Data ini lebih detail daripada 'products' biasa karena memuat sebaran stok fisik
const inventoryData = [
    { 
        sku: 'DMK-001', name: 'Setala Shirt', 
        userType: 'Pria', category_item: 'Shirt', collection: 'Setala', 
        status_product: 'active', price: 269000, max: 200, img: 'setalashirt.jpeg',
        variants: [
            { name: 'Hitam - M', gudang: 8, defect: 1, reserved: 5, event: 1, store: 5 },
            { name: 'Hitam - L', gudang: 10, defect: 0, reserved: 4, event: 2, store: 9 },
            { name: 'Navy - XL', gudang: 0, defect: 0, reserved: 0, event: 0, store: 0 }
        ]
    },
    { 
        sku: 'DMK-002', name: 'Kala Shirt Longsleeve', 
        userType: 'Pria', category_item: 'Shirt', collection: 'Kala', 
        status_product: 'active', price: 289000, max: 150, img: 'kalashirtlongsleeve.png',
        variants: [
            { name: 'Hitam - M', gudang: 30, defect: 0, reserved: 12, event: 5, store: 12 },
            { name: 'Electric Blue - L', gudang: 25, defect: 2, reserved: 0, event: 0, store: 8 }
        ]
    },
    { 
        sku: 'DMK-003', name: 'Arkana Embroidery Vest', 
        userType: 'Wanita', category_item: 'Outer', collection: 'Arkana', 
        status_product: 'active', price: 325000, max: 100, img: 'arkanaembroideryvest.png',
        variants: [
            { name: 'Navy - All Size', gudang: 40, defect: 0, reserved: 10, event: 20, store: 15 },
            { name: 'Cream - All Size', gudang: 35, defect: 1, reserved: 5, event: 10, store: 10 }
        ]
    },
    { 
        sku: 'DMK-004', name: 'Aksata Vest Lace', 
        userType: 'Wanita', category_item: 'Outer', collection: 'Aksata', 
        status_product: 'active', price: 199000, max: 80, img: 'aksatavestlace.png',
        variants: [
            { name: 'Navy - All Size', gudang: 10, defect: 0, reserved: 2, event: 5, store: 4 },
            { name: 'Black - All Size', gudang: 50, defect: 0, reserved: 15, event: 10, store: 25 }
        ]
    },
    { 
        sku: 'DMK-005', name: 'Obi Belt', 
        userType: 'Wanita', category_item: 'Accessories', collection: 'Obi', 
        status_product: 'active', price: 89000, max: 300, img: 'obibelt.jpeg',
        variants: [
            { name: 'Maroon - All Size', gudang: 100, defect: 2, reserved: 0, event: 20, store: 50 },
            { name: 'Black - All Size', gudang: 80, defect: 0, reserved: 0, event: 15, store: 45 }
        ]
    },
    { 
        sku: 'DMK-006', name: 'Suar Bucket Hat', 
        userType: 'Pria', category_item: 'Accessories', collection: 'Suar', 
        status_product: 'active', price: 125000, max: 100, img: 'suarbuckethat.jpeg',
        variants: [
            { name: 'Terracotta - All Size', gudang: 45, defect: 0, reserved: 0, event: 10, store: 18 }
        ]
    },
];

// --- PASTE INI DI BAWAH const inventoryData = [...] ---
// KITA BUTUH DATA INI KARENA FITUR SALES & DASHBOARD MASIH MENGGUNAKAN VARIABEL 'products'
// JIKA INI TIDAK ADA, SCRIPT AKAN CRASH SEBELUM BISA MENAMPILKAN INVENTORY

const products = [
    { id: 1, name: 'Setala Shirt', price: 269000, cat: 'Shirt', coll: 'Setala', img: 'setalashirt.jpeg', status: 'Active', variants: [{name: 'M', stock: 20}] },
    { id: 2, name: 'Kala Shirt Longsleeve', price: 289000, cat: 'Shirt', coll: 'Kala', img: 'kalashirtlongsleeve.png', status: 'Active', variants: [{name: 'L', stock: 15}] },
    { id: 3, name: 'Arkana Embroidery Vest', price: 325000, cat: 'Outer', coll: 'Arkana', img: 'arkanaembroideryvest.png', status: 'Active', variants: [{name: 'All Size', stock: 50}] },
    { id: 4, name: 'Aksata Vest Lace', price: 199000, cat: 'Outer', coll: 'Aksata', img: 'aksatavestlace.png', status: 'Active', variants: [{name: 'All Size', stock: 30}] },
    { id: 5, name: 'Obi Belt', price: 89000, cat: 'Accessories', coll: 'Obi', img: 'obibelt.jpeg', status: 'Active', variants: [{name: 'All Size', stock: 100}] },
    { id: 6, name: 'Suar Bucket Hat', price: 125000, cat: 'Accessories', coll: 'Suar', img: 'suarbuckethat.jpeg', status: 'Active', variants: [{name: 'All Size', stock: 45}] }
];

// Data Penjualan Terperinci (Utk Sales Monitor & Chart)
// Channel: online, store_bdg, store_jkt, event
// Type: normal, defect
const salesTransactions = [
    { id: 'TRX-001', prodId: 1, qty: 120, channel: 'online', type: 'normal', date: '2025-10-01' },
    { id: 'TRX-002', prodId: 1, qty: 50, channel: 'store_bdg', type: 'normal', date: '2025-10-02' },
    { id: 'TRX-003', prodId: 2, qty: 80, channel: 'online', type: 'normal', date: '2025-10-03' },
    { id: 'TRX-004', prodId: 3, qty: 200, channel: 'event', type: 'normal', date: '2025-10-05' }, // Bazaar
    { id: 'TRX-005', prodId: 1, qty: 15, channel: 'store_jkt', type: 'defect', date: '2025-10-06' }, // Sale brg defect
    { id: 'TRX-006', prodId: 4, qty: 5, channel: 'store_bdg', type: 'normal', date: '2025-09-28' }, // Bulan lalu
];

// Data Production & Planning
const activePR = [
    { no: 'PR-2025-101', item: 'Kain Katun Primisima', status: 'Approved' },
    { no: 'PR-2025-102', item: 'Kancing Batok Custom', status: 'Pending' }
];

const activeWO = [
    { no: 'WO-25-088', vendor: 'Konveksi Berkah', deadline: '2025-10-30', status: 'In Production' },
    { no: 'WO-25-089', vendor: 'Pak Asep Tailor', deadline: '2025-11-05', status: 'Material Prep' }
];

// Data Vendor Evaluation
const vendors = [
    { name: 'Konveksi Berkah', spec: 'Jahit Kemeja', woCount: 12, onTime: 95, defect: 0.5, grade: 'A' },
    { name: 'Pak Asep Tailor', spec: 'Celana & Rok', woCount: 8, onTime: 85, defect: 2.1, grade: 'B' },
    { name: 'CV Tekstil Maju', spec: 'Supplier Kain', woCount: 20, onTime: 100, defect: 0.0, grade: 'A' }
];

// Global Chart Instance
let revenueChartInstance = null;

// --- 2. NAVIGATION & INIT ---

window.onload = function() {
    showPage('dashboard');
    updateDashboardMetrics();
    initRevenueChart(); // Load Chart awal
    
};

function showPage(pageId) {
    document.querySelectorAll('.page-section').forEach(el => el.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
    
    // Update Title
    const titles = {
        'dashboard': 'Executive Overview',
        'sales': 'Sales & Financial Monitor',
        'catalog': 'Product Catalog & Stock',
        'production': 'Production Control Tower',
        'vendor': 'Vendor Performance Review'
    };
    document.getElementById('pageTitle').innerText = titles[pageId];

    // Sidebar Active State
    document.querySelectorAll('.nav-links li').forEach(el => el.classList.remove('active'));
    document.getElementById(`nav-${pageId}`).classList.add('active');

    // Init specific page functions
    if(pageId === 'catalog') renderCatalog();
    if(pageId === 'production') renderProduction();
    if(pageId === 'sales') renderSalesMonitor();
    if(pageId === 'vendor') renderVendor();
    
    // TAMBAHAN WAJIB: Panggil fungsi ini agar tabel Inventory Health dirender
    if(pageId === 'inventory') renderInventory(); 
    if(pageId === 'catalog') renderCatalog();
    if(pageId === 'production') renderProduction();
    if(pageId === 'sales') renderSalesMonitor();
    if(pageId === 'vendor') renderVendor();
    
    // TAMBAHAN WAJIB: Panggil fungsi ini agar tabel Inventory Health dirender
    if(pageId === 'inventory') renderInventory();
    
}


// --- 3. DASHBOARD LOGIC ---

function updateDashboardMetrics() {
    // 1. Hitung Revenue Bulan Ini (Dummy Logic: Filter salesTransactions bulan 10)
    let totalRev = 0;
    let totalSold = 0;
    let totalDisc = 0;

    salesTransactions.forEach(trx => {
        const prod = products.find(p => p.id === trx.prodId);
        if(prod) {
            const gross = prod.price * trx.qty;
            let discount = 0;
            
            // Logika Diskon Dummy
            if(trx.channel === 'event') discount = gross * 0.2; // Diskon 20% pas event
            if(trx.type === 'defect') discount = gross * 0.5; // Diskon 50% barang defect

            totalRev += (gross - discount);
            totalSold += trx.qty;
            totalDisc += discount;
        }
    });

    // Render ke Card
    document.getElementById('dash-revenue').innerText = formatRupiah(totalRev);
    document.getElementById('dash-sold').innerText = totalSold + " Pcs";
    document.getElementById('dash-discount').innerText = formatRupiah(totalDisc);
    document.getElementById('dash-active-wo').innerText = activeWO.length;

    // Render Top 5 (Sederhana berdasarkan Qty di array transactions)
    renderTopProductsWidget();
}

function renderTopProductsWidget() {
    // Agregasi penjualan per produk
    let salesMap = {};
    salesTransactions.forEach(trx => {
        if(!salesMap[trx.prodId]) salesMap[trx.prodId] = 0;
        salesMap[trx.prodId] += trx.qty;
    });

    // Convert ke Array & Sort
    let sortedSales = Object.keys(salesMap).map(key => {
        const prod = products.find(p => p.id == key);
        return { name: prod.name, qty: salesMap[key], img: prod.img };
    }).sort((a,b) => b.qty - a.qty).slice(0, 5);

    // Render HTML
    const container = document.getElementById('top-products-list');
    container.innerHTML = '';
    sortedSales.forEach((item, idx) => {
        container.innerHTML += `
            <div class="top-item">
                <div style="display:flex; align-items:center; gap:10px;">
                    <strong style="width:20px;">${idx+1}</strong>
                    <img src="../gambar/${item.img}" style="width:30px; height:30px; border-radius:4px; object-fit:cover;">
                    <span>${item.name}</span>
                </div>
                <strong>${item.qty} Sold</strong>
            </div>
        `;
    });
}

function initRevenueChart() {
    const ctx = document.getElementById('revenueChart').getContext('2d');
    revenueChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4'],
            datasets: [{
                label: 'Total Omzet (Rp)',
                data: [15000000, 22000000, 18000000, 35000000],
                borderColor: '#CF5306',
                backgroundColor: 'rgba(207, 83, 6, 0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } }
        }
    });
}

function updateMainChart(type) {
    // Simulasi ganti data chart
    let newData = type === 'monthly' ? [15000000, 22000000, 18000000, 35000000] : [2000000, 3000000, 5000000, 4000000, 6000000, 8000000, 7000000];
    let newLabel = type === 'monthly' ? ['M1', 'M2', 'M3', 'M4'] : ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'];
    
    revenueChartInstance.data.labels = newLabel;
    revenueChartInstance.data.datasets[0].data = newData;
    revenueChartInstance.update();
}


// --- 4. SALES MONITOR LOGIC ---

function renderSalesMonitor() {
    const channelFilter = document.getElementById('filter-sales-channel').value;
    const showDefect = document.getElementById('filter-defect').checked;
    
    // Filter Data
    let filteredTrx = salesTransactions.filter(trx => {
        let matchChannel = channelFilter === 'all' || trx.channel === channelFilter;
        let matchDefect = showDefect ? true : trx.type !== 'defect';
        return matchChannel && matchDefect;
    });

    // Populate Table
    const tbody = document.getElementById('sales-table-body');
    tbody.innerHTML = '';
    
    let totalGross = 0;
    let totalDisc = 0;

    filteredTrx.forEach(trx => {
        const prod = products.find(p => p.id === trx.prodId);
        const gross = prod.price * trx.qty;
        
        let discount = 0;
        if(trx.channel === 'event') discount = gross * 0.2;
        if(trx.type === 'defect') discount = gross * 0.5;

        totalGross += gross;
        totalDisc += discount;
        const nett = gross - discount;

        // Badge Channel
        let badgeCh = `<span class="badge info">${trx.channel}</span>`;
        if(trx.channel === 'event') badgeCh = `<span class="badge warning">Event</span>`;
        if(trx.channel.includes('store')) badgeCh = `<span class="badge success">Store</span>`;

        tbody.innerHTML += `
            <tr>
                <td>
                    <div style="display:flex; align-items:center; gap:10px;">
                        <img src="../gambar/${prod.img}" style="width:35px; height:35px; border-radius:4px;">
                        <span>${prod.name}</span>
                    </div>
                </td>
                <td>${prod.cat}</td>
                <td>${badgeCh}</td>
                <td class="text-center">${trx.qty}</td>
                <td class="text-right">${formatRupiah(nett)}</td>
                <td>${trx.type === 'defect' ? '<span class="text-danger">Defect Sale</span>' : 'Normal'}</td>
            </tr>
        `;
    });

    if(filteredTrx.length === 0) tbody.innerHTML = `<tr><td colspan="6" class="text-center">Data tidak ditemukan.</td></tr>`;

    // Update Finance Summary Cards
    document.getElementById('fin-gross').innerText = formatRupiah(totalGross);
    document.getElementById('fin-disc').innerText = formatRupiah(totalDisc);
    document.getElementById('fin-net').innerText = formatRupiah(totalGross - totalDisc);
    
    // Simulasi Margin (Cost of Goods Sold dummy ~ 40%)
    let cogs = totalGross * 0.4;
    let margin = ((totalGross - totalDisc) - cogs) / (totalGross - totalDisc) * 100;
    document.getElementById('fin-margin').innerText = totalGross > 0 ? margin.toFixed(1) + "%" : "0%";
}


// --- 5. CATALOG LOGIC ---

function renderCatalog() {
    const search = document.getElementById('search-catalog').value.toLowerCase();
    const filterColl = document.getElementById('filter-coll-cat').value;
    const filterStat = document.getElementById('filter-status-cat').value;

    const tbody = document.getElementById('catalog-table-body');
    tbody.innerHTML = '';

    products.forEach(p => {
        // Filter Logic
        if(!p.name.toLowerCase().includes(search) && !p.sku.toLowerCase().includes(search)) return;
        if(filterColl !== 'all' && p.coll !== filterColl) return;
        if(filterStat !== 'all' && p.status !== filterStat) return;

        // Hitung Total Stok
        const totalStock = p.variants.reduce((sum, v) => sum + v.stock, 0);
        
        // Buat List Varian HTML
        let varHtml = '';
        p.variants.forEach(v => {
            varHtml += `<div style="font-size:0.85rem; color:#555;">${v.name}: <strong>${v.stock}</strong></div>`;
        });

        tbody.innerHTML += `
            <tr>
                <td>
                    <div style="display:flex; align-items:center; gap:15px;">
                        <img src="../gambar/${p.img}" style="width:50px; height:50px; border-radius:6px; object-fit:cover; border:1px solid #eee;">
                        <div>
                            <strong>${p.name}</strong><br>
                            <small class="text-muted">${p.sku} • ${p.coll}</small>
                        </div>
                    </div>
                </td>
                <td>${formatRupiah(p.price)}</td>
                <td><strong style="font-size:1.1rem;">${totalStock}</strong> Pcs</td>
                <td>${varHtml}</td>
                <td>
                    <span class="badge ${p.status === 'Active' ? 'success' : 'danger'}">${p.status}</span>
                </td>
            </tr>
        `;
    });
}


// --- 6. PRODUCTION & VENDOR LOGIC ---

function renderProduction() {
    // Render PR
    const prBody = document.getElementById('pr-table-body');
    prBody.innerHTML = '';
    activePR.forEach(pr => {
        prBody.innerHTML += `<tr><td><strong>${pr.no}</strong></td><td>${pr.item}</td><td><span class="badge info">${pr.status}</span></td></tr>`;
    });

    // Render WO
    const woBody = document.getElementById('wo-table-body');
    woBody.innerHTML = '';
    activeWO.forEach(wo => {
        woBody.innerHTML += `<tr><td><strong>${wo.no}</strong></td><td>${wo.vendor}</td><td>${wo.deadline}</td><td><span class="badge warning">${wo.status}</span></td></tr>`;
    });
}

function renderVendor() {
    const tbody = document.getElementById('vendor-table-body');
    tbody.innerHTML = '';
    vendors.forEach(v => {
        let gradeClass = v.grade === 'A' ? 'success' : (v.grade === 'B' ? 'info' : 'danger');
        
        tbody.innerHTML += `
            <tr>
                <td><strong>${v.name}</strong></td>
                <td>${v.spec}</td>
                <td class="text-center">${v.woCount}</td>
                <td class="text-center text-success">${v.onTime}%</td>
                <td class="text-center text-danger">${v.defect}%</td>
                <td class="text-center"><span class="badge ${gradeClass}" style="font-size:1rem;">${v.grade}</span></td>
            </tr>
        `;
    });
}

// --- UTILS ---
function formatRupiah(num) {
    return 'Rp ' + num.toLocaleString('id-ID');
}
function closeModal() {
    document.querySelector('.modal').classList.add('hidden');
}

// --- FUNGSI INVENTORY UPDATE (LOGIKA WAREHOUSE) ---

function renderInventory() {
    const tbody = document.getElementById('inventory-table-body');
    const thead = document.getElementById('inventoryHead');
    
    // 1. Ambil Nilai Filter
    const filterLoc = document.getElementById('filterLocation').value;
    const filterStatus = document.getElementById('filterProductStatus').value;
    const filterColl = document.getElementById('filterCollection').value;
    const filterCat = document.getElementById('filterCategory').value;
    const searchText = document.getElementById('searchInventory').value.toLowerCase();

    // 2. Header Row Sesuai Konteks Warehouse
    let headerRow = '';
    if (filterLoc === 'gudang') {
        headerRow = `<tr><th>Produk Info</th><th>Kategori</th><th>Stok Fisik (Good)</th><th style="color:var(--danger)">Fisik (Defect)</th><th style="color:var(--warning)">Booked Online</th><th style="color:var(--primary)">Siap Kirim (ATP)</th><th>Aksi</th></tr>`;
    } else if (filterLoc === 'store') {
        headerRow = `<tr><th>Produk Info</th><th>Stok di Store</th><th>Stok di Event</th><th>Total Sebaran Luar</th><th>Aksi</th></tr>`;
    } else {
        // Default View (General)
        headerRow = `<tr><th>Produk Info</th><th>Kategori</th><th width="180">Total Aset</th><th>Fisik Gudang</th><th>Siap Kirim (ATP)</th><th>Sebaran Luar</th><th>Status</th></tr>`;
    }
    thead.innerHTML = headerRow;
    tbody.innerHTML = '';

    // 3. Variables untuk Kartu Statistik Atas
    let grandTotalAsset = 0;
    let grandTotalQty = 0;
    let healthyCount = 0;
    let lowCount = 0;

    // 4. Filter & Render Data
    const filteredData = inventoryData.filter(item => {
        const statusMatch = (filterStatus === 'all') || (item.status_product === filterStatus);
        const searchMatch = item.name.toLowerCase().includes(searchText) || item.sku.toLowerCase().includes(searchText);
        const collMatch = (filterColl === 'all') || (item.collection === filterColl);
        const catMatch = (filterCat === 'all') || (item.category_item === filterCat);
        return statusMatch && searchMatch && collMatch && catMatch;
    });

    if (filteredData.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:20px;">Tidak ada data ditemukan.</td></tr>`;
        return;
    }

    filteredData.forEach(item => {
        // Kalkulasi Detail Stok (Logika Warehouse)
        let totalAsset = 0, totalGudangGood = 0, totalGudangDefect = 0, totalReserved = 0, totalAvailable = 0, totalStore = 0, totalEvent = 0;

        item.variants.forEach(v => {
            const fisikGood = v.gudang || 0;
            const reserved = v.reserved || 0;
            
            totalGudangGood += fisikGood;
            totalGudangDefect += (v.defect || 0);
            totalReserved += reserved;
            totalAvailable += (fisikGood - reserved); // Rumus ATP
            totalStore += (v.store || 0);
            totalEvent += (v.event || 0);
        });

        totalAsset = totalGudangGood + totalGudangDefect + totalStore + totalEvent; // Total Aset Fisik
        const totalLuar = totalStore + totalEvent;
        const percent = Math.min((totalAsset / item.max) * 100, 100);
        const isLow = totalAvailable < 10; // Threshold Low Stock
        const barColor = isLow ? 'var(--danger)' : 'var(--success)';
        
        // Update Statistik Global
        grandTotalQty += totalAsset;
        grandTotalAsset += (totalAsset * item.price);
        if(isLow) lowCount++; else healthyCount++;

        // Status Badge UI
        const statusBadge = item.status_product === 'discontinued' 
            ? `<span class="status-badge out">Discontinued</span>`
            : (isLow ? `<span class="status-badge low">Low Stock</span>` : `<span class="status-badge ok">Available</span>`);

        const imgPath = `../gambar/${item.img}`;
        
        // HTML Kolom Produk
        const productInfoCol = `
            <div style="display:flex; align-items:center; gap:12px;">
                <img src="${imgPath}" class="product-thumb-small" onerror="this.src='https://via.placeholder.com/48?text=Img'">
                <div>
                    <strong>${item.name}</strong><br>
                    <small style="color:#888;">${item.sku}</small>
                </div>
            </div>
        `;

        // Render Baris sesuai Filter Lokasi
        let rowHtml = '';
        if (filterLoc === 'gudang') {
            rowHtml = `
                <td>${productInfoCol}</td>
                <td>${item.category_item}</td>
                <td style="font-weight:600;">${totalGudangGood} Pcs</td>
                <td style="color:var(--danger); font-weight:bold;">${totalGudangDefect > 0 ? totalGudangDefect : '-'}</td>
                <td style="color:var(--warning);">${totalReserved > 0 ? totalReserved : '-'}</td>
                <td><span style="font-weight:700; color:var(--primary); font-size:15px;">${totalAvailable}</span></td>
                <td><button class="btn-outline" onclick="viewInventoryDetail('${item.sku}')"><i class="fas fa-eye"></i></button></td>
            `;
        } else if (filterLoc === 'store') {
            rowHtml = `
                <td>${productInfoCol}</td>
                <td>${totalStore > 0 ? totalStore + ' Pcs' : '-'}</td>
                <td>${totalEvent > 0 ? totalEvent + ' Pcs' : '-'}</td>
                <td style="font-weight:bold;">${totalLuar} Pcs</td>
                <td><button class="btn-outline" onclick="viewInventoryDetail('${item.sku}')"><i class="fas fa-eye"></i></button></td>
            `;
        } else {
            // General View (Default)
            rowHtml = `
                <td>${productInfoCol}</td>
                <td>${item.category_item}<br><small class="text-muted">${item.collection}</small></td>
                <td>
                    <div class="stock-val">${totalAsset} Pcs</div>
                    <div class="stock-bar-container"><div class="stock-bar-fill" style="width: ${percent}%; background: ${barColor}"></div></div>
                </td>
                <td>
                    <div style="font-weight:600; color:#333;">${totalGudangGood} Good</div>
                    ${totalGudangDefect > 0 ? `<div style="font-size:10px; color:var(--danger);">${totalGudangDefect} Defect</div>` : ''}
                </td>
                <td>
                    <span style="font-weight:700; color:var(--primary); font-size:15px;">${totalAvailable}</span>
                    <div style="font-size:10px; color:#888;">(Booked: ${totalReserved})</div>
                </td>
                <td>${totalLuar > 0 ? totalLuar : '-'} <br> <small style="font-size:10px; color:#888;">(Store + Event)</small></td>
                <td>
                    <div style="display:flex; align-items:center; gap:10px;">
                        ${statusBadge}
                        <button class="btn-outline" style="padding: 5px 10px;" onclick="viewInventoryDetail('${item.sku}')"><i class="fas fa-eye"></i></button>
                    </div>
                </td>
            `;
        }
        tbody.innerHTML += `<tr>${rowHtml}</tr>`;
    });

    // Update Kartu Statistik
    document.getElementById('inv-total-asset').innerText = 'Rp ' + grandTotalAsset.toLocaleString('id-ID');
    document.getElementById('inv-total-qty').innerText = grandTotalQty + ' Pcs';
    document.getElementById('inv-healthy-count').innerText = healthyCount + ' Aman';
    document.getElementById('inv-low-count').innerText = lowCount + ' Kritis';
}

// Fungsi Modal Detail (Populasi Data Matrix)
function viewInventoryDetail(sku) {
    const product = inventoryData.find(p => p.sku === sku);
    if (!product) return;

    // Hitung Total
    let grandTotal = 0;
    product.variants.forEach(v => grandTotal += (v.gudang + (v.defect || 0) + v.store + v.event));

    // Siapkan HTML untuk Modal
    const modalContent = document.getElementById('modal-content-body');
    
    // Header Modal
    let html = `
        <div style="display:flex; gap:20px; align-items:center; margin-bottom:20px;">
            <img src="../gambar/${product.img}" style="width:80px; height:80px; border-radius:10px; object-fit:cover; border:1px solid #ddd;" onerror="this.src='https://via.placeholder.com/80'">
            <div>
                <h3 style="color:var(--primary); margin-bottom:5px;">${product.name}</h3>
                <span class="badge info">${product.sku}</span>
                <span class="badge warning">${product.collection}</span>
            </div>
            <div style="margin-left:auto; text-align:right;">
                <small class="text-muted">Total Aset</small>
                <h2 style="margin:0;">${grandTotal} Pcs</h2>
            </div>
        </div>
        <hr style="border:0; border-top:1px solid #eee; margin:15px 0;">
        <h4 style="margin-bottom:10px;">Sebaran Stok per Varian</h4>
        <table class="matrix-table">
            <thead>
                <tr>
                    <th width="25%">Varian</th>
                    <th class="bg-gudang-light">Fisik Gudang</th>
                    <th style="color:var(--danger)">Defect</th>
                    <th style="color:var(--warning)">Booked</th>
                    <th style="color:var(--primary)">ATP (Ready)</th>
                    <th>Store</th>
                    <th>Event</th>
                </tr>
            </thead>
            <tbody>
    `;

    // Loop Varian untuk Tabel
    product.variants.forEach(v => {
        const available = v.gudang - (v.reserved || 0);
        html += `
            <tr>
                <td style="text-align:left; font-weight:600;">${v.name}</td>
                <td class="bg-gudang-light"><b>${v.gudang}</b></td>
                <td style="color:var(--danger)">${v.defect || '-'}</td>
                <td style="color:var(--warning)">${v.reserved || '-'}</td>
                <td><b style="color:var(--primary); font-size:1.1em;">${available}</b></td>
                <td>${v.store || '-'}</td>
                <td>${v.event || '-'}</td>
            </tr>
        `;
    });

    html += `</tbody></table>`;
    
    modalContent.innerHTML = html;
    document.getElementById('detailModal').classList.remove('hidden');
}