// --- CLEANED script.js ---

// --- 1. GLOBAL DATA VARIABLES ---
// Inventory Data (Stok Matrix & ATP)
// --- GANTI BAGIAN INI DI SCRIPT.JS ---

// --- script.js (UPDATED DATA) ---

// 1. DATA INVENTORY (GABUNGAN PRODUK JADI & KAIN)
// Mapping Data: Sama Persis dengan Store/PPIC (DMK-001 s/d DMK-006 + Kain)
// Note: Struktur variants disesuaikan untuk kebutuhan gudang (ada field 'gudang', 'reserved')

let inventoryData = [
    // --- PRODUK JADI (FASHION) ---
    { 
        sku: 'DMK-001', name: 'Setala Shirt', 
        userType: 'Pria', category_item: 'Shirt', collection: 'Setala', 
        status_product: 'active', price: 269000, rack: 'Rak A-01', max: 200, 
        img: 'setalashirt.jpeg', // Pastikan file gambar ada
        desc: 'Kemeja basic dengan bahan Katun Primisima yang nyaman.',
        variants: [
            { name: 'Hitam - M', gudang: 8, defect: 1, reserved: 5, event: 1, store: 5 },
            { name: 'Hitam - L', gudang: 10, defect: 0, reserved: 4, event: 2, store: 9 },
            { name: 'Navy - XL', gudang: 0, defect: 0, reserved: 0, event: 0, store: 0 }
        ]
    },
    { 
        sku: 'DMK-002', name: 'Kala Shirt Longsleeve', 
        userType: 'Pria', category_item: 'Shirt', collection: 'Kala', 
        status_product: 'active', price: 289000, rack: 'Rak A-02', max: 150, 
        img: 'kalashirtlongsleeve.png',
        desc: 'Kemeja lengan panjang bahan Toyobo.',
        variants: [
            { name: 'Hitam - M', gudang: 30, defect: 0, reserved: 12, event: 5, store: 12 },
            { name: 'Electric Blue - L', gudang: 25, defect: 2, reserved: 0, event: 0, store: 8 }
        ]
    },
    { 
        sku: 'DMK-003', name: 'Arkana Embroidery Vest', 
        userType: 'Wanita', category_item: 'Outer', collection: 'Arkana', 
        status_product: 'active', price: 325000, rack: 'Rak B-01', max: 100, 
        img: 'arkanaembroideryvest.png',
        desc: 'Vest bordir premium untuk wanita.',
        variants: [
            { name: 'Navy - All Size', gudang: 40, defect: 0, reserved: 10, event: 20, store: 15 },
            { name: 'Cream - All Size', gudang: 35, defect: 1, reserved: 5, event: 10, store: 10 }
        ]
    },
    { 
        sku: 'DMK-004', name: 'Aksata Vest Lace', 
        userType: 'Wanita', category_item: 'Outer', collection: 'Aksata', 
        status_product: 'active', price: 199000, rack: 'Rak B-02', max: 80, 
        img: 'aksatavestlace.png',
        desc: 'Vest dengan aksen lace yang elegan.',
        variants: [
            { name: 'Navy - All Size', gudang: 10, defect: 0, reserved: 2, event: 5, store: 4 },
            { name: 'Black - All Size', gudang: 50, defect: 0, reserved: 15, event: 10, store: 25 }
        ]
    },
    { 
        sku: 'DMK-005', name: 'Obi Belt', 
        userType: 'Wanita', category_item: 'Accessories', collection: 'Obi', 
        status_product: 'active', price: 89000, rack: 'Rak C-01', max: 300, 
        img: 'obibelt.jpeg',
        desc: 'Ikat pinggang obi modern.',
        variants: [
            { name: 'Maroon - All Size', gudang: 100, defect: 2, reserved: 0, event: 20, store: 50 },
            { name: 'Black - All Size', gudang: 80, defect: 0, reserved: 0, event: 15, store: 45 }
        ]
    },
    { 
        sku: 'DMK-006', name: 'Suar Bucket Hat', 
        userType: 'Pria', category_item: 'Accessories', collection: 'Suar', 
        status_product: 'active', price: 125000, rack: 'Rak C-02', max: 100, 
        img: 'suarbuckethat.jpeg',
        desc: 'Topi bucket hat motif batik.',
        variants: [
            { name: 'Terracotta - All Size', gudang: 45, defect: 0, reserved: 0, event: 10, store: 18 }
        ]
    },
];

// 2. DATA RESTOCK ORDERS (SAMA PERSIS DENGAN STORE)
// Ada 2 Order: RO-20251001 (Shipping/Approved) & RO-20251002 (Pending)

const restockOrders = [
    {
        id: 'RO-20251001', 
        store: 'Store Utama (Pusat)', 
        date: '26 Okt 2025', 
        expected: '28 Okt 2025', 
        status: 'Approved', // Di Store statusnya 'Shipping', di Gudang 'Approved' (barang keluar)
        products: [
            { 
                name: 'Setala Shirt', 
                variants: [
                    { color: 'Hitam', size: 'L', qty: 20 }, 
                    { color: 'Hitam', size: 'M', qty: 10 }
                ] 
            }
        ]
    },
    {
        id: 'RO-20251002', 
        store: 'Store Cabang (Mall)', 
        date: '27 Okt 2025', 
        expected: '30 Okt 2025', 
        status: 'Pending',
        products: [
            { 
                name: 'Aksata Vest Lace', 
                variants: [
                    { color: 'Navy', size: 'All Size', qty: 15 } 
                ] 
            }
        ]
    }
];

// 3. DATA PO MASUK (INBOUND DARI PPIC)
const poData = {
    'PO-2025-XII-001': [
        {
            id: 1, name: 'Katun Primisima', sku: 'F-001',
            variants: [
                { color: 'Putih Tulang', size: 'Yard', req: 500 }
            ]
        },
        {
            id: 2, name: 'Sutra Viscose', sku: 'F-999',
            variants: [
                { color: 'Maroon', size: 'Yard', req: 200 }
            ]
        }
    ]
};

// 4. DATA RAK (SHELVES) - DISESUAIKAN DENGAN PRODUK BARU
let shelvesData = [
    { id: 1, code: 'A-01', category: 'Setala', type: 'regular', status: 'active', items: ['Setala Shirt'] },
    { id: 2, code: 'A-02', category: 'Kala', type: 'regular', status: 'active', items: ['Kala Shirt Longsleeve'] },
    { id: 3, code: 'B-01', category: 'Arkana', type: 'regular', status: 'active', items: ['Arkana Embroidery Vest'] },
    { id: 4, code: 'C-01', category: 'Obi', type: 'regular', status: 'active', items: ['Obi Belt'] },
    { id: 5, code: 'K-01', category: 'Setala', type: 'regular', status: 'active', items: ['Katun Primisima'] },
    { id: 6, code: 'Z-99', category: 'Campuran', type: 'defect', status: 'active', items: ['Retur Defect'] },
];

// --- END OF UPDATED DATA ---

// Global State Variables
let tempSelectedProducts = []; 
let editingShelfId = null;
let currentRestockIndex = null;
let activeRoTab = 'Active'; // State global untuk tab

// --- 2. NAVIGATION & INIT ---

function handleLogin() {
    window.location.href = 'dashboard.html';
}

function showPage(pageId) {
    const pages = document.querySelectorAll('.page-section');
    pages.forEach(p => p.classList.remove('active'));

    const target = document.getElementById(pageId + '-page');
    if(target) target.classList.add('active');

    const navs = document.querySelectorAll('.nav-links li');
    navs.forEach(n => n.classList.remove('active'));
    
    // Cari elemen nav yang onclick-nya mengandung nama pageId
    const activeNav = Array.from(navs).find(n => n.getAttribute('onclick') && n.getAttribute('onclick').includes(pageId));
    if(activeNav) activeNav.classList.add('active');

    const titles = {
        'dashboard': 'Overview Dashboard',
        'inventory': 'Monitoring Stok Akumulatif',
        'receipt': 'Penerimaan Barang (Inbound)',
        'shelves': 'Pengelolaan Rak Gudang',
        'products': 'Katalog Produk',
        'restock': 'Daftar Permintaan Restock'
    };
    document.getElementById('pageTitle').innerText = titles[pageId] || 'Dashboard';
    
    if(pageId === 'receipt') {
        document.getElementById('receiptDate').valueAsDate = new Date();
    }
}


document.addEventListener('DOMContentLoaded', () => {
    // Initial Render
    renderInventory();
    renderShelves();
    filterCatalog(); // Panggil filterCatalog agar status default 'active' langsung jalan
    renderRestock();
    renderDashboardData();
});


// --- 3. RENDER FUNCTIONS ---
// --- LOGIC UNTUK MENGISI DASHBOARD (TAMBAHKAN DI SCRIPT.JS) ---

function renderDashboardData() {
    // 1. Hitung Statistik Otomatis
    const lowStockCount = inventoryData.filter(item => 
        item.variants.some(v => v.gudang < 10)
    ).length;

    const pendingRO = restockOrders.filter(ro => ro.status === 'Pending').length;
    
    // Update ke UI
    document.getElementById('stat-low-stock').innerText = lowStockCount + " SKU";
    document.getElementById('stat-ro-pending').innerText = pendingRO + " Order";
    // Data dummy lainnya bisa diupdate manual atau dikoneksikan ke variabel data Anda
    document.getElementById('stat-stock-in').innerText = "150 Pcs"; 
    document.getElementById('stat-stock-out').innerText = "85 Pcs";
    document.getElementById('stat-unassigned').innerText = "24 Item";

    // 2. Render 4 Notifikasi Terakhir
    const notifContainer = document.getElementById('dashboard-notif-list');
    const notifications = [
        { msg: "Store Utama request stock in with req id #834878", time: "5 Menit lalu" },
        { msg: "Produk Setala Shirt (Hitam-M) low stock!", time: "12 Menit lalu" },
        { msg: "Restock order #3482 diterima lengkap oleh Store Cabang", time: "1 Jam lalu" },
        { msg: "Kain Katun Primisima stok menipis (< 200 Yard)", time: "3 Jam lalu" }
    ];

    notifContainer.innerHTML = notifications.map(n => `
        <div class="notif-box">
            <i class="fas fa-info-circle"></i>
            <div>
                <p>${n.msg}</p>
                <small>${n.time}</small>
            </div>
        </div>
    `).join('');

    // 3. Render Aktivitas Logistik (Sesuai format yang diminta)
    const activityContainer = document.getElementById('dashboard-activity-list');
    const activities = [
        { text: "<b>50 pcs</b> Produk Setala Shirt stock in", time: "10m lalu" },
        { text: "<b>20 pcs</b> Produk Arkana Vest stock out for distribution to <b>Store Bandung</b>", time: "1j lalu" },
        { text: "Produk DMK-005 assigned to <b>Rak C-01</b> by staff picker due to overload capacity", time: "3j lalu" },
        { text: "<b>100 pcs</b> Produk Aksata Vest Lace stock out for distribution to <b>Store Bandung</b>", time: "5j lalu" }
    ];

    activityContainer.innerHTML = activities.map(a => `
        <li>
            <div class="act-content-v2">
                <div class="act-dot"></div>
                <span class="act-text">${a.text}</span>
            </div>
            <span class="act-time-v2">${a.time}</span>
        </li>
    `).join('');
}





function renderInventory() {
    const tbody = document.getElementById('inventoryTableBody');
    const thead = document.getElementById('inventoryHead');
    
    // 1. Ambil Nilai Filter
    const filterLoc = document.getElementById('filterLocation').value;
    const filterStatus = document.getElementById('filterProductStatus').value;
    const filterColl = document.getElementById('filterCollection').value; // Baru
    const filterCat = document.getElementById('filterCategory').value;   // Baru
    const filterUser = document.getElementById('filterUserType').value;  // Baru
    const searchText = document.getElementById('searchInventory').value.toLowerCase();

    if (!tbody || !thead) return;
    tbody.innerHTML = '';
    thead.innerHTML = '';

    // 2. Header Row
    let headerRow = '';
    if (filterLoc === 'gudang') {
        headerRow = `<tr><th>Produk Info</th><th>Kategori</th><th>Stok Fisik (Good)</th><th style="color:var(--danger)">Fisik (Defect)</th><th style="color:var(--warning)">Booked Online</th><th style="color:var(--primary-color)">Siap Kirim (ATP)</th><th>Aksi</th></tr>`;
    } else if (filterLoc === 'store') {
        headerRow = `<tr><th>Produk Info</th><th>Stok di Store</th><th>Stok di Event</th><th>Total Sebaran Luar</th><th>Aksi</th></tr>`;
    } else {
        headerRow = `<tr><th>Produk Info</th><th>Kategori</th><th width="180">Total Aset</th><th>Fisik Gudang</th><th>Siap Kirim (ATP)</th><th>Sebaran Luar</th><th>Status</th></tr>`;
    }
    thead.innerHTML = headerRow;

    // 3. Filter Data
    const filteredData = inventoryData.filter(item => {
        const statusMatch = (filterStatus === 'all') || (item.status_product === filterStatus);
        const searchMatch = item.name.toLowerCase().includes(searchText) || item.sku.toLowerCase().includes(searchText);
        
        // Logika Filter Baru
        const collMatch = (filterColl === 'all') || (item.collection === filterColl);
        const catMatch = (filterCat === 'all') || (item.category_item === filterCat);
        const userMatch = (filterUser === 'all') || (item.userType === filterUser);

        return statusMatch && searchMatch && collMatch && catMatch && userMatch;
    });

    if (filteredData.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:20px;">Tidak ada data ditemukan dengan filter tersebut.</td></tr>`;
        return;
    }

    // 4. Render Row
    filteredData.forEach(item => {
        let totalAsset = 0, totalGudangGood = 0, totalGudangDefect = 0, totalReserved = 0, totalAvailable = 0, totalStore = 0, totalEvent = 0;

        item.variants.forEach(v => {
            const fisikGood = v.gudang || 0;
            const reserved = v.reserved || 0;
            
            totalGudangGood += fisikGood;
            totalGudangDefect += (v.defect || 0);
            totalReserved += reserved;
            totalAvailable += (fisikGood - reserved);
            totalStore += (v.store || 0);
            totalEvent += (v.event || 0);
        });

        totalAsset = totalGudangGood + totalGudangDefect + totalStore + totalEvent;
        const totalLuar = totalStore + totalEvent;
        const percent = Math.min((totalAsset / item.max) * 100, 100);
        const isLow = totalAvailable < 10;
        const barColor = isLow ? 'var(--danger)' : 'var(--success)';
        
        // Badge
        const statusBadge = item.status_product === 'discontinued' 
            ? `<span class="status-badge out">Discontinued</span>`
            : (isLow ? `<span class="status-badge low">Low Stock</span>` : `<span class="status-badge ok">Available</span>`);

        // Image Path (Fallback jika kosong)
        const imgPath = item.img ? `../gambar/${item.img}` : 'https://via.placeholder.com/48?text=Img';

        // Kolom Info Produk (Dengan Gambar)
        const productInfoCol = `
            <div style="display:flex; align-items:center; gap:12px;">
                <img src="${imgPath}" class="product-thumb-small" onerror="this.src='https://via.placeholder.com/48?text=No+Img'">
                <div>
                    <strong>${item.name}</strong><br>
                    <small style="color:#888;">${item.sku}</small>
                </div>
            </div>
        `;

        let rowHtml = '';
        if (filterLoc === 'gudang') {
            rowHtml = `
                <td>${productInfoCol}</td>
                <td>${item.category_item} <small>(${item.userType})</small></td>
                <td style="font-weight:600;">${totalGudangGood} Pcs</td>
                <td style="color:var(--danger); font-weight:bold;">${totalGudangDefect > 0 ? totalGudangDefect : '-'}</td>
                <td style="color:var(--warning);">${totalReserved > 0 ? totalReserved : '-'}</td>
                <td><span style="font-weight:700; color:var(--primary-color); font-size:16px;">${totalAvailable}</span></td>
                <td><button class="btn-secondary" onclick="viewProductDetail('${item.sku}')"><i class="fas fa-eye"></i></button></td>
            `;
        } else if (filterLoc === 'store') {
            rowHtml = `
                <td>${productInfoCol}</td>
                <td>${totalStore > 0 ? totalStore + ' Pcs' : '-'}</td>
                <td>${totalEvent > 0 ? totalEvent + ' Pcs' : '-'}</td>
                <td style="font-weight:bold;">${totalLuar} Pcs</td>
                <td><button class="btn-secondary" onclick="viewProductDetail('${item.sku}')"><i class="fas fa-eye"></i></button></td>
            `;
        } else {
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
                    <span style="font-weight:700; color:var(--primary-color); font-size:16px;">${totalAvailable}</span>
                    <div style="font-size:10px; color:#888;">(Booked: ${totalReserved})</div>
                </td>
                <td>${totalLuar > 0 ? totalLuar : '-'} <br> <small style="font-size:10px; color:#888;">(Store + Event)</small></td>
                <td>
                    <div style="display:flex; align-items:center; gap:10px;">
                        ${statusBadge}
                        <button class="btn-secondary" style="padding: 5px 10px;" onclick="viewProductDetail('${item.sku}')"><i class="fas fa-eye"></i></button>
                    </div>
                </td>
            `;
        }
        tbody.innerHTML += `<tr>${rowHtml}</tr>`;
    });
}

function renderShelves() {
    const container = document.getElementById('shelvesGrid');
    const filterType = document.getElementById('filterShelfType').value;
    const filterColl = document.getElementById('filterShelfColl').value; // Ambil filter koleksi
    const searchText = document.getElementById('searchShelf').value.toLowerCase();
    
    container.innerHTML = '';

    const filteredShelves = shelvesData.filter(shelf => {
        const matchType = (filterType === 'all') || (shelf.type === filterType);
        const matchColl = (filterColl === 'all') || (shelf.category === filterColl); // Logika filter koleksi
        const matchSearch = shelf.code.toLowerCase().includes(searchText);
        return matchType && matchColl && matchSearch;
    });

    if(filteredShelves.length === 0) {
        container.innerHTML = `<div class="empty-state" style="grid-column: 1/-1;"><p>Tidak ada rak ditemukan untuk kriteria ini.</p></div>`;
        return;
    }

    filteredShelves.forEach(shelf => {
        const isDefect = shelf.type === 'defect';
        const typeBadge = isDefect 
            ? `<span class="status-badge out" style="margin-right:5px;">DEFECT</span>` 
            : `<span class="status-badge ok" style="margin-right:5px;">REGULER</span>`;

        let itemsHtml = shelf.items.map(item => 
            `<span class="shelf-item-tag" style="background:#f0f4f8; padding:4px 8px; border-radius:4px; margin-right:5px; font-size:11px; display:inline-block; margin-bottom:5px;">${item}</span>`
        ).join('') || '<em style="color:#aaa; font-size:12px;">Rak Kosong</em>';

        const card = `
            <div class="shelf-card" style="${isDefect ? 'border-left:4px solid var(--danger);' : 'border-left:4px solid var(--success);'}">
                <div class="shelf-header" style="display:flex; justify-content:space-between; margin-bottom:10px; align-items: center;">
                    <h4 style="color:var(--text-dark); margin:0; font-size: 1.1rem;">Rak ${shelf.code}</h4>
                    <div>${typeBadge}</div>
                </div>
                <div class="meta" style="margin-bottom:12px; color:#555; font-size:12px; font-weight: 600;">
                    <i class="fas fa-layer-group" style="color:var(--primary-color)"></i> Koleksi: ${shelf.category}
                </div>
                <div class="shelf-items-list" style="margin-bottom:15px; min-height:50px;">
                    <div style="margin-top:5px;">${itemsHtml}</div>
                </div>
                <div style="margin-top: auto; border-top: 1px solid #f0f0f0; padding-top: 15px;">
                    <button class="btn-outline full-width" onclick="editShelf(${shelf.id})" style="margin-bottom:0; font-size: 12px; padding: 8px;">
                        <i class="fas fa-cog"></i> Konfigurasi Rak
                    </button>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// --- UPDATE FUNGSI renderProducts (Layout 4 Kolom & Gambar Persegi) ---

function renderProducts(dataToRender = inventoryData) {
    const container = document.getElementById('productGrid');
    if(!container) return;
    
    container.innerHTML = '';
    
    // Jika data kosong
    if(dataToRender.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px; color: #888; background:white; border-radius:12px; border:1px dashed #ddd;">
                <i class="fas fa-search" style="font-size:30px; margin-bottom:10px;"></i>
                <p>Produk tidak ditemukan dengan filter tersebut.</p>
            </div>`;
        return;
    }

    dataToRender.forEach(item => {
        const priceFormatted = (item.price || 0).toLocaleString('id-ID');
        
        // Status Badge Logic
        const isActive = item.status_product === 'active';
        const badgeClass = isActive ? 'ok' : 'out'; 
        const badgeText = isActive ? 'Aktif' : 'Non-Aktif';
        const cardOpacity = isActive ? '1' : '0.7'; // Card agak transparan kalau non-aktif

        // LOGIKA GAMBAR
        let imageHtml = '';
        if(item.img && item.img !== '') {
            imageHtml = `<img src="../gambar/${item.img}" class="catalog-card-img" onerror="this.onerror=null; this.parentElement.innerHTML='<i class=\\'fas fa-tshirt fa-3x\\'></i>';">`;
        } else {
            imageHtml = `<i class="fas fa-tshirt fa-3x" style="color:#ccc;"></i>`;
        }

        const card = `
            <div class="product-card" style="opacity: ${cardOpacity}; display:flex; flex-direction:column;">
                
                <div class="catalog-img-square">
                    ${imageHtml}
                    <span class="status-badge ${badgeClass}" style="position:absolute; top:10px; right:10px; z-index:2; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                        ${badgeText}
                    </span>
                </div>
                
                <h4 style="font-size:15px; margin-bottom:5px; line-height: 1.4; flex-grow:1;">${item.name}</h4>
                <p style="font-size: 12px; color: #888; font-family: monospace; margin-bottom: 8px;">${item.sku}</p>
                
                <div style="display: flex; justify-content: space-between; align-items:center; margin-top: auto;">
                    <span style="font-weight: 700; color: var(--primary-color); font-size: 16px;">Rp ${priceFormatted}</span>
                </div>

                <div class="card-actions" style="margin-top:15px;">
                    <button class="btn-detail-full" onclick="openCatalogModal('${item.sku}')">
                        Lihat Detail <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

function switchRoTab(tab) {
    activeRoTab = tab;
    // Update UI Tab
    document.getElementById('tab-ro-active').classList.toggle('active', tab === 'Active');
    document.getElementById('tab-ro-history').classList.toggle('active', tab === 'History');
    
    // Tampilkan filter status hanya di tab history
    document.getElementById('ro-status-filter-container').style.display = (tab === 'History') ? 'block' : 'none';
    
    renderRestock();
}

function resetRoFilters() {
    document.getElementById('ro-search-input').value = '';
    document.getElementById('ro-filter-store').value = 'all';
    document.getElementById('ro-filter-status').value = 'all';
    document.getElementById('ro-date-start').value = '';
    document.getElementById('ro-date-end').value = '';
    renderRestock();
}

function renderRestock() {
    const container = document.getElementById('restockList');
    if(!container) return;

    // Ambil Nilai Filter
    const searchVal = document.getElementById('ro-search-input').value.toLowerCase();
    const storeVal = document.getElementById('ro-filter-store').value;
    const statusVal = document.getElementById('ro-filter-status').value;
    const dateStart = document.getElementById('ro-date-start').value;
    const dateEnd = document.getElementById('ro-date-end').value;

    container.innerHTML = '';
    
    document.getElementById('restock-list-view').style.display = 'block';
    document.getElementById('restock-detail-view').style.display = 'none';

    // Logika Filtering
    const filteredOrders = restockOrders.filter(order => {
        // 1. Filter Berdasarkan Tab (Active: Pending | History: Approved/Rejected)
        const isHistory = order.status === 'Approved' || order.status === 'Rejected';
        if (activeRoTab === 'Active' && isHistory) return false;
        if (activeRoTab === 'History' && !isHistory) return false;

        // 2. Filter Search ID
        const matchSearch = order.id.toLowerCase().includes(searchVal);
        
        // 3. Filter Toko
        const matchStore = (storeVal === 'all') || (order.store === storeVal);

        // 4. Filter Status (Hanya berlaku di tab History)
        const matchStatus = (activeRoTab === 'Active') || (statusVal === 'all') || (order.status === statusVal);

        // 5. Filter Range Tanggal (Asumsi format order.date: "26 Okt 2025")
        // Untuk akurasi, kita gunakan helper parseIndoDate yang sudah Anda miliki (atau konversi manual)
        let matchDate = true;
        if (dateStart || dateEnd) {
            const orderDateObj = new Date(order.date.replace('Okt', 'Oct')); // Contoh konversi bulan
            if (dateStart && orderDateObj < new Date(dateStart)) matchDate = false;
            if (dateEnd && orderDateObj > new Date(dateEnd)) matchDate = false;
        }

        return matchSearch && matchStore && matchStatus && matchDate;
    });

    if (filteredOrders.length === 0) {
        container.innerHTML = `<div class="empty-state" style="padding: 40px;"><p>Tidak ada riwayat restock ditemukan.</p></div>`;
        return;
    }

    filteredOrders.forEach((order) => {
        // Cari index asli dari restockOrders untuk dikirim ke viewRestockDetail
        const originalIndex = restockOrders.findIndex(o => o.id === order.id);
        
        let badgeClass = 'low'; 
        if (order.status === 'Approved') badgeClass = 'ok';
        else if (order.status === 'Rejected') badgeClass = 'out';

        const item = `
            <div class="restock-item" onclick="viewRestockDetail(${originalIndex})">
                <div style="display:flex; gap:15px; align-items:center;">
                    <div style="background:var(--primary-light); width:50px; height:50px; border-radius:10px; display:flex; align-items:center; justify-content:center; color:var(--primary-color);">
                        <i class="fas fa-store"></i>
                    </div>
                    <div>
                        <h4 style="color: var(--text-dark); margin-bottom: 3px;">${order.store}</h4>
                        <p style="font-size: 12px; color: #888;">Req ID: ${order.id} &bull; Tgl: ${order.date}</p>
                    </div>
                </div>
                <div style="text-align: right;">
                    <span class="status-badge ${badgeClass}" style="margin-bottom: 5px; display: inline-block;">${order.status}</span>
                    <div style="font-size:11px; color:#888;">Klik untuk Detail <i class="fas fa-chevron-right"></i></div>
                </div>
            </div>
        `;
        container.innerHTML += item;
    });
}

// Global variable untuk menyimpan index yang sedang dibuka
let activeRestockIdx = null;
// --- 4. MODAL & DETAIL LOGIC ---

function openModal(modalId) { document.getElementById(modalId).style.display = 'block'; }
function closeModal(modalId) { document.getElementById(modalId).style.display = 'none'; }

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}

function viewProductDetail(sku) {
    const product = inventoryData.find(p => p.sku === sku);
    if (!product) return;

    let grandTotal = 0;
    product.variants.forEach(v => grandTotal += (v.gudang + (v.defect || 0) + v.store + v.event));

    // Update Text Detail
    document.getElementById('detailSku').innerText = product.sku;
    document.getElementById('detailName').innerText = product.name;
    document.getElementById('detailCategory').innerText = product.category_item + ' - ' + product.userType;
    document.getElementById('detailCollection').innerText = product.collection; 
    document.getElementById('detailTotal').innerText = grandTotal + " Pcs";

    // Update Image di Modal (NEW)
    const imgElem = document.getElementById('detailImg');
    if(imgElem) {
        imgElem.src = product.img ? `../gambar/${product.img}` : 'https://via.placeholder.com/90?text=No+Img';
    }

    // Render Matrix Table
    const tableBody = document.getElementById('matrixDetailTable');
    tableBody.innerHTML = '';

    product.variants.forEach(v => {
        const fisikGood = v.gudang || 0;
        const fisikDefect = v.defect || 0;
        const reserved = v.reserved || 0;
        const available = fisikGood - reserved; 

        const row = `
            <tr>
                <td><strong>${v.name}</strong></td>
                <td class="bg-gudang-light" style="font-weight:600;">${fisikGood}</td>
                <td style="color:var(--danger); font-weight:bold;">${fisikDefect > 0 ? fisikDefect : '-'}</td>
                <td style="color:#f39c12; font-weight:500;">${reserved > 0 ? reserved : '-'}</td>
                <td><span style="color:var(--primary-color); font-weight:800; font-size:14px;">${available}</span></td>
                <td>${v.store > 0 ? v.store : '<span style="color:#ccc;">-</span>'}</td>
                <td>${v.event > 0 ? v.event : '<span style="color:#ccc;">-</span>'}</td>
                <td><strong>${fisikGood + fisikDefect + v.store + v.event}</strong></td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
    openModal('productDetailModal');
}

// --- CARI FUNGSI INI DI SCRIPT.JS DAN GANTI ISINYA ---

function openCatalogModal(sku) {
    const product = inventoryData.find(p => p.sku === sku);
    if (!product) return;

    // Isi Text Dasar
    document.getElementById('catModalName').innerText = product.name;
    document.getElementById('catModalSku').innerText = product.sku;
    document.getElementById('catModalPrice').innerText = 'Rp ' + (product.price || 0).toLocaleString('id-ID');
    document.getElementById('catModalRack').innerText = product.rack || 'Belum di-assign';
    document.getElementById('catModalDesc').innerText = product.desc || 'Tidak ada deskripsi produk.';

    // --- UPDATE GAMBAR DI MODAL ---
    const imgEl = document.getElementById('catModalImg');
    if(imgEl) {
        // Jika ada gambar pakai gambar, jika tidak pakai placeholder
        imgEl.src = product.img ? `../gambar/${product.img}` : 'https://via.placeholder.com/200?text=No+Image';
    }

    // Isi Tabel Varian
    const tbody = document.getElementById('catModalVariants');
    tbody.innerHTML = '';

    product.variants.forEach(v => {
        let totalStore = 0;
        // Hitung total store (support format baru dan lama)
        totalStore = v.store || 0; 

        // Hitung Total Aset (Gudang + Defect + Store + Event)
        const totalStock = (v.gudang || 0) + (v.defect || 0) + totalStore + (v.event || 0);

        const row = `
            <tr>
                <td style="padding:10px; border-bottom:1px solid #eee;">${v.name}</td>
                <td style="padding:10px; border-bottom:1px solid #eee; text-align:right; font-weight:bold;">
                    ${totalStock} Pcs
                </td>
            </tr>`;
        tbody.innerHTML += row;
    });
    
    // Tampilkan Modal
    openModal('catalogModal'); 
}

function filterCatalog() {
    // 1. Ambil Value dari Semua Input Filter
    const searchInput = document.getElementById('catalogSearchInput').value.toLowerCase();
    const collectionInput = document.getElementById('catalogCollectionFilter').value;
    const categoryInput = document.getElementById('catalogCategoryFilter').value;
    const userInput = document.getElementById('catalogUserFilter').value; // <--- INI FILTER BARU
    const statusInput = document.getElementById('catalogStatusFilter').value;

    // 2. Lakukan Filtering
    const filtered = inventoryData.filter(item => {
        // Cek Nama / SKU
        const matchName = item.name.toLowerCase().includes(searchInput) || item.sku.toLowerCase().includes(searchInput);
        
        // Cek Koleksi
        const matchCollection = collectionInput === 'all' || item.collection === collectionInput;

        // Cek Kategori
        const matchCategory = categoryInput === 'all' || item.category_item === categoryInput;

        // Cek User Type (BARU)
        const matchUser = userInput === 'all' || item.userType === userInput;
        
        // Cek Status
        const matchStatus = statusInput === 'all' || item.status_product === statusInput;

        // Semua harus TRUE agar lolos filter
        return matchName && matchCollection && matchCategory && matchUser && matchStatus;
    });

    // 3. Render Ulang Grid
    renderProducts(filtered);
}

// --- 5. RECEIPT (INBOUND) LOGIC ---

function loadPODetails() {
    const poSelect = document.getElementById('poSelect');
    const container = document.getElementById('receiptItemsContainer');
    const footer = document.getElementById('receiptFooter');
    const selectedPO = poSelect.value;

    if(!selectedPO || !poData[selectedPO]) {
        container.innerHTML = `<div class="empty-state"><i class="fas fa-truck-loading"></i><p>Silakan pilih Nomor PO.</p></div>`;
        footer.style.display = 'none';
        return;
    }

    footer.style.display = 'flex';
    container.innerHTML = '';

    poData[selectedPO].forEach((prod, idx) => {
        let variantRows = '';
        prod.variants.forEach((v, vIdx) => {
            variantRows += `
                <tr>
                    <td>${v.color} / ${v.size}</td>
                    <td class="text-center">${v.req}</td>
                    <td><input type="number" class="input-modern receipt-qty-input group-${idx}" data-req="${v.req}" value="0" min="0"></td>
                </tr>
            `;
        });

        const card = `
            <div class="receipt-product-card">
                <div class="receipt-prod-header">
                    <div><h4>${prod.name}</h4><small style="color:#888;">SKU: ${prod.sku}</small></div>
                    <label class="auto-fill-toggle">
                        <input type="checkbox" style="display:none;" onchange="toggleAutoFill(this, 'group-${idx}')">
                        <span class="toggle-switch"></span> Terima Semua
                    </label>
                </div>
                <table class="variant-table">
                    <thead><tr style="background:#f9f9f9; color:#666;"><th>Varian</th><th width="100" class="text-center">Req Qty</th><th width="120" class="text-center">Received</th></tr></thead>
                    <tbody>${variantRows}</tbody>
                </table>
            </div>
        `;
        container.innerHTML += card;
    });
}

function toggleAutoFill(checkbox, groupClass) {
    const inputs = document.querySelectorAll('.' + groupClass);
    inputs.forEach(input => {
        input.value = checkbox.checked ? input.getAttribute('data-req') : 0;
        input.style.backgroundColor = checkbox.checked ? '#e0ffe9' : '#fbfbfb';
    });
}

function submitReceipt() {
    if(!document.getElementById('receiptDate').value) { alert('Harap isi tanggal penerimaan'); return; }
    
    // Simulate Logic
    alert('Sukses! Penerimaan Barang telah disimpan.\nStok gudang akan bertambah secara otomatis.');
    inventoryData[0].variants[0].gudang += 50; // Demo effect
    
    renderInventory();
    document.getElementById('poSelect').value = '';
    loadPODetails();
    showPage('inventory');
}

function resetReceiptForm() {
    if(confirm('Yakin ingin membatalkan? Data input akan hilang.')) {
        document.getElementById('poSelect').value = '';
        loadPODetails();
    }
}

// --- 6. RESTOCK & SHELF MANAGEMENT LOGIC ---

function openRestockModal(index) {
    currentRestockIndex = index;
    const order = restockOrders[index];

    // Update Header Modal
    document.getElementById('modalStoreName').innerText = order.store;
    document.getElementById('modalDate').innerText = order.date;
    document.getElementById('modalExpected').innerText = order.expected;
    
    // Update Badge Status di Modal Header
    const statusBadge = document.getElementById('modalStatus');
    statusBadge.innerText = order.status;
    statusBadge.className = 'badge'; // Reset class
    // Set warna badge modal
    if(order.status === 'Approved') {
        statusBadge.classList.add('ok'); // class .ok (hijau) perlu didefinisikan di CSS untuk badge ini, atau pakai style manual
        statusBadge.style.background = 'var(--success-light)';
        statusBadge.style.color = 'var(--success)';
    } else if(order.status === 'Rejected') {
        statusBadge.style.background = 'var(--danger-light)';
        statusBadge.style.color = 'var(--danger)';
    } else {
        statusBadge.classList.add('warning');
    }

    const itemsContainer = document.getElementById('modalItems');
    itemsContainer.innerHTML = '';

    let tableHtml = `
        <table class="restock-matrix-table">
            <thead><tr><th>Produk / Varian</th><th class="text-center">Req Qty</th><th class="text-center">Stok ATP (Gudang)</th><th class="text-center">Approve Qty</th></tr></thead>
            <tbody>
    `;

    order.products.forEach((prod, pIdx) => {
        prod.variants.forEach((v, vIdx) => {
            let realStock = 0;
            // 1. Cari Produk (Pastikan nama sama persis)
            const inventoryItem = inventoryData.find(i => i.name === prod.name);
            
            if (inventoryItem) {
                // 2. Cari Varian (Logic: Nama varian mengandung Warna DAN Ukuran)
                const variantItem = inventoryItem.variants.find(vari => 
                    vari.name.toLowerCase().includes(v.color.toLowerCase()) && 
                    vari.name.toLowerCase().includes(v.size.toLowerCase())
                );
                
                if(variantItem) {
                    realStock = (variantItem.gudang || 0) - (variantItem.reserved || 0);
                }
            }

            const isStockEnough = realStock >= v.qty;
            // Jika status sudah Approved, tampilkan Approve Qty dari data (disini simulasi pakai qty request)
            // Jika Pending, tawarkan suggestQty
            const suggestQty = (order.status === 'Approved') ? v.qty : (isStockEnough ? v.qty : (realStock > 0 ? realStock : 0));
            
            const stockClass = realStock === 0 ? 'stock-warning' : (isStockEnough ? 'stock-safe' : 'stock-warning');
            
            // Disable input jika sudah approved
            const disabledAttr = order.status !== 'Pending' ? 'disabled style="background:#eee; color:#888;"' : '';

            tableHtml += `
                <tr>
                    <td><strong>${prod.name}</strong><br><small class="text-muted">${v.color} - ${v.size}</small></td>
                    <td class="text-center" style="font-size:14px;">${v.qty}</td>
                    <td class="text-center"><span class="${stockClass}">${realStock} Pcs</span></td>
                    <td class="text-center">
                        <input type="number" class="qty-approve-input" id="approve-qty-${pIdx}-${vIdx}" 
                        data-product="${prod.name}" data-variant="${v.color}-${v.size}" data-max="${realStock}" 
                        value="${suggestQty}" min="0" ${disabledAttr}>
                    </td>
                </tr>
            `;
        });
    });
    tableHtml += `</tbody></table>`;
    itemsContainer.innerHTML = tableHtml;

    // Ganti tombol berdasarkan status
    const btnApprove = document.querySelector('#restockModal .btn-primary');
    const btnReject = document.querySelector('#restockModal .btn-danger');
    
    // Cloning untuk menghapus event listener lama
    const newBtnApprove = btnApprove.cloneNode(true);
    const newBtnReject = btnReject.cloneNode(true);
    
    btnApprove.parentNode.replaceChild(newBtnApprove, btnApprove);
    btnReject.parentNode.replaceChild(newBtnReject, btnReject);

    if (order.status === 'Pending') {
        newBtnApprove.style.display = 'inline-block';
        newBtnReject.style.display = 'inline-block';
        newBtnApprove.innerText = "Konfirmasi & Kirim";
        newBtnApprove.addEventListener('click', processApproval);
        newBtnReject.addEventListener('click', () => {
             if(confirm('Tolak permintaan restock ini?')) {
                 restockOrders[currentRestockIndex].status = "Rejected";
                 closeModal('restockModal');
                 renderRestock();
             }
        });
    } else {
        // Jika sudah Approved/Rejected, sembunyikan tombol aksi
        newBtnApprove.style.display = 'none';
        newBtnReject.style.display = 'none';
    }

    openModal('restockModal');
}


function viewRestockDetail(index) {
    activeRestockIdx = index;
    const order = restockOrders[index];

    // 1. Switch View
    document.getElementById('restock-list-view').style.display = 'none';
    document.getElementById('restock-detail-view').style.display = 'block';

    // 2. Populate Header
    document.getElementById('detailStoreName').innerText = order.store;
    document.getElementById('detailOrderId').innerText = '#' + order.id;
    document.getElementById('detailDateRequest').innerText = order.date;
    document.getElementById('detailDateExp').innerText = order.expected;
    
    // --- LOGIKA WARNA BADGE DETAIL ---
    const badgeContainer = document.getElementById('detailStatusBadge');
    let badgeClass = 'low'; 
    
    if(order.status === 'Approved') badgeClass = 'ok';
    else if(order.status === 'Rejected') badgeClass = 'out';
    
    badgeContainer.innerHTML = `<span class="status-badge ${badgeClass}" style="font-size: 1rem; padding: 8px 15px;">${order.status}</span>`;

    // 3. Populate Items Table
    const tbody = document.getElementById('detailItemsBody');
    tbody.innerHTML = '';
    let totalItemsSKU = 0;

    order.products.forEach((prod, pIdx) => {
        prod.variants.forEach((v, vIdx) => {
            totalItemsSKU++;
            let realStock = 0;
            
            const inventoryItem = inventoryData.find(i => i.name === prod.name);
            if (inventoryItem) {
                const variantItem = inventoryItem.variants.find(vari => 
                    vari.name.toLowerCase().includes(v.color.toLowerCase()) && 
                    vari.name.toLowerCase().includes(v.size.toLowerCase())
                );
                if(variantItem) realStock = (variantItem.gudang || 0) - (variantItem.reserved || 0);
            }

            const isEnough = realStock >= v.qty;
            const stockColor = isEnough ? '#166534' : '#991b1b'; 
            const stockIcon = isEnough ? '<i class="fas fa-check-circle"></i>' : '<i class="fas fa-exclamation-circle"></i>';
            
            let inputValue = (order.status === 'Approved') ? v.qty : (isEnough ? v.qty : realStock);
            if(realStock < 0) inputValue = 0;

            const isDisabled = order.status !== 'Pending' ? 'disabled' : '';

            const row = `
                <tr>
                    <td>
                        <strong>${prod.name}</strong><br>
                        <span style="background:#f0f4f8; padding:2px 8px; border-radius:4px; font-size:0.85rem; color:#666;">
                            ${v.color} - ${v.size}
                        </span>
                    </td>
                    <td class="text-center" style="font-size:1.1rem; font-weight:600;">${v.qty}</td>
                    <td class="text-center" style="color:${stockColor}; font-weight:bold;">
                        ${stockIcon} ${realStock} Pcs
                    </td>
                    <td class="text-center">
                        <input type="number" class="input-approve detail-approve-input" 
                            id="app-qty-${pIdx}-${vIdx}" 
                            data-product="${prod.name}" 
                            data-variant="${v.color}-${v.size}" 
                            data-max="${realStock}" 
                            value="${inputValue}" min="0" ${isDisabled}>
                    </td>
                    <td style="font-size:0.85rem; color:#888;">
                        ${isEnough ? 'Ready' : 'Shortage'}
                    </td>
                </tr>
            `;
            tbody.innerHTML += row;
        });
    });

    document.getElementById('detailTotalItem').innerText = totalItemsSKU + " SKU Varian";

    // 4. Action Buttons (Updated Logic for Reject)
    const actionContainer = document.getElementById('detailActionBar');
    
    if (order.status === 'Pending') {
        // Tampilkan tombol normal
        actionContainer.innerHTML = `
            <button class="btn-danger" style="padding: 12px 25px;" onclick="triggerRejectMode()">
                <i class="fas fa-times"></i> Tolak Permintaan
            </button>
            <button class="btn-primary" style="padding: 12px 25px;" onclick="processPageApproval()">
                <i class="fas fa-check-double"></i> Konfirmasi & Kirim Barang
            </button>
        `;
    } else if (order.status === 'Rejected') {
        // Tampilkan alasan jika ada
        const reason = order.rejectReason || "Tidak ada alasan spesifik.";
        actionContainer.innerHTML = `
            <div style="background:#fff5f5; border:1px solid #fed7d7; padding:15px; width:100%; border-radius:8px;">
                <strong style="color:#c53030;">Permintaan Ditolak</strong>
                <p style="margin:5px 0 0 0; color:#555;">Alasan: "${reason}"</p>
            </div>`;
    } else {
        actionContainer.innerHTML = `<span class="text-muted">Order ini telah diproses (${order.status}).</span>`;
    }
}

// FUNGSI BARU: MENAMPILKAN FIELD INPUT ALASAN REJECT
function triggerRejectMode() {
    const actionContainer = document.getElementById('detailActionBar');
    
    actionContainer.innerHTML = `
        <div class="reject-action-area">
            <h4><i class="fas fa-exclamation-circle"></i> Konfirmasi Penolakan Restock</h4>
            <textarea id="rejectReasonInput" class="input-modern" rows="3" placeholder="Wajib isi: Alasan penolakan permintaan ini..."></textarea>
            <div style="text-align:right; margin-top:10px;">
                <button class="btn-secondary" onclick="viewRestockDetail(activeRestockIdx)">Batal</button>
                <button class="btn-danger" onclick="confirmReject()">Kirim Penolakan</button>
            </div>
        </div>
    `;
    
    // Focus ke textarea
    setTimeout(() => document.getElementById('rejectReasonInput').focus(), 100);
}

// FUNGSI BARU: SIMPAN REJECT
function confirmReject() {
    const reason = document.getElementById('rejectReasonInput').value;
    
    if(!reason.trim()) {
        alert("Harap isi alasan penolakan!");
        document.getElementById('rejectReasonInput').focus();
        return;
    }

    if(confirm('Yakin ingin menolak permintaan ini?')) {
        restockOrders[activeRestockIdx].status = "Rejected";
        restockOrders[activeRestockIdx].rejectReason = reason; // Simpan alasannya
        
        alert("Permintaan berhasil ditolak.");
        closeRestockDetail();
        renderRestock();
    }
}


function closeRestockDetail() {
    document.getElementById('restock-detail-view').style.display = 'none';
    document.getElementById('restock-list-view').style.display = 'block';
    activeRestockIdx = null;
}

function rejectRestock() {
    if(confirm('Tolak permintaan restock ini? Status akan menjadi Rejected.')) {
        restockOrders[activeRestockIdx].status = "Rejected";
        closeRestockDetail();
        renderRestock();
    }
}

function processPageApproval() {
    if (activeRestockIdx === null) return;
    
    const inputs = document.querySelectorAll('.detail-approve-input');
    let isValid = true;
    let summaryMsg = "Konfirmasi Pengiriman:\n------------------\n";
    let hasItem = false;

    for (let input of inputs) {
        const approveQty = parseInt(input.value) || 0;
        const maxStock = parseInt(input.getAttribute('data-max'));
        const prodName = input.getAttribute('data-product');
        const varName = input.getAttribute('data-variant');

        if (approveQty > maxStock) {
            alert(`⛔ ERROR: Stok tidak cukup untuk ${prodName} (${varName}).\nStok Gudang: ${maxStock} pcs.\nInput Anda: ${approveQty} pcs.`);
            input.style.borderColor = "red";
            input.focus();
            isValid = false;
            return;
        }
        if(approveQty > 0) {
            summaryMsg += `• ${prodName} (${varName}): ${approveQty} pcs\n`;
            hasItem = true;
        }
    }

    if (!hasItem) {
        alert("Harap masukkan jumlah approve minimal untuk 1 barang.");
        return;
    }

    if (isValid && confirm(summaryMsg + "\nLanjutkan proses pengiriman barang?")) {
        restockOrders[activeRestockIdx].status = "Approved";
        
        // Simulasi update stok di inventoryData (Opsional)
        // Disini bisa ditambahkan logika pengurangan stok inventoryData
        
        alert("✅ Berhasil! Dokumen pengiriman telah dibuat dan stok gudang dikurangi.");
        closeRestockDetail();
        renderRestock();
    }
}




function processApproval() {
    if (currentRestockIndex === null) return;
    
    const inputs = document.querySelectorAll('.qty-approve-input');
    let isValid = true;
    let summaryMsg = "Konfirmasi Pengiriman:\n";

    for (let input of inputs) {
        const approveQty = parseInt(input.value) || 0;
        const maxStock = parseInt(input.getAttribute('data-max'));
        const prodName = input.getAttribute('data-product');
        const varName = input.getAttribute('data-variant');

        if (approveQty > maxStock) {
            alert(`⛔ ERROR: Stok tidak cukup untuk ${prodName} (${varName}).\nMaksimal kirim: ${maxStock} pcs.`);
            input.style.borderColor = "red";
            input.focus();
            isValid = false;
            return;
        }
        if(approveQty > 0) summaryMsg += `- ${prodName} (${varName}): ${approveQty} pcs\n`;
    }

    if (isValid && confirm(summaryMsg + "\nProses restock ini?")) {
        restockOrders[currentRestockIndex].status = "Approved";
        closeModal('restockModal');
        renderRestock();
        alert("✅ Restock berhasil diproses. Stok gudang dikurangi.");
    }
}

// --- Shelf CRUD ---

function openShelfModal() {
    editingShelfId = null; 
    tempSelectedProducts = [];
    
    // Reset Form Values
    document.getElementById('shelfModalTitle').innerText = "Tambah Rak Baru";
    document.getElementById('shelfCode').value = '';
    document.getElementById('shelfType').value = 'regular'; 
    document.getElementById('shelfCategory').value = 'Pria';
    document.getElementById('shelfStatus').value = 'active';
    
    // Reset Filters & Search
    document.getElementById('shelfFilterColl').value = 'all';
    document.getElementById('shelfFilterCat').value = 'all';
    document.getElementById('shelfFilterUser').value = 'all';
    document.getElementById('productSearchInput').value = '';
    document.getElementById('productSearchResults').style.display = 'none';

    document.getElementById('btnDeleteShelf').style.display = 'none';
    
    renderSelectedProducts();
    openModal('shelfModal');
}

function editShelf(id) {
    const shelf = shelvesData.find(s => s.id === id);
    if(!shelf) return;
    editingShelfId = id;
    tempSelectedProducts = [...shelf.items]; 
    
    document.getElementById('shelfModalTitle').innerText = "Edit Konfigurasi Rak " + shelf.code;
    document.getElementById('shelfCode').value = shelf.code;
    document.getElementById('shelfType').value = shelf.type || 'regular';
    document.getElementById('shelfCategory').value = shelf.category;
    document.getElementById('shelfStatus').value = shelf.status;
    
    // Reset Filters
    document.getElementById('shelfFilterColl').value = 'all';
    document.getElementById('shelfFilterCat').value = 'all';
    document.getElementById('shelfFilterUser').value = 'all';
    document.getElementById('productSearchInput').value = '';
    document.getElementById('productSearchResults').style.display = 'none';

    document.getElementById('btnDeleteShelf').style.display = 'block';

    renderSelectedProducts();
    openModal('shelfModal');
}


function saveShelf() {
    const code = document.getElementById('shelfCode').value;
    const category = document.getElementById('shelfCategory').value;
    const status = document.getElementById('shelfStatus').value;
    const type = document.getElementById('shelfType').value; 

    if(!code) { alert("Kode Rak wajib diisi!"); return; }

    if (editingShelfId) {
        const index = shelvesData.findIndex(s => s.id === editingShelfId);
        if(index !== -1) {
            shelvesData[index] = { ...shelvesData[index], code, category, status, type, items: [...tempSelectedProducts] };
            alert(`Rak ${code} berhasil diperbarui.`);
        }
    } else {
        const newId = shelvesData.length > 0 ? shelvesData[shelvesData.length - 1].id + 1 : 1;
        shelvesData.push({ id: newId, code, category, status, type, items: [...tempSelectedProducts] });
        alert(`Rak baru ${code} berhasil dibuat.`);
    }
    closeModal('shelfModal');
    renderShelves();
}

function deleteShelf() {
    if(!editingShelfId) return;
    if(confirm("Hapus rak ini permanen?")) {
        shelvesData = shelvesData.filter(s => s.id !== editingShelfId);
        closeModal('shelfModal');
        renderShelves();
    }
}

// Shelf Product Search
function searchProductForShelf() {
    const input = document.getElementById('productSearchInput').value.toLowerCase();
    const resultBox = document.getElementById('productSearchResults');
    
    // Ambil value dari 3 dropdown filter baru
    const fColl = document.getElementById('shelfFilterColl').value;
    const fCat = document.getElementById('shelfFilterCat').value;
    const fUser = document.getElementById('shelfFilterUser').value;

    // Filter Logic
    const matches = inventoryData.filter(p => {
        // 1. Text Match (Search bar)
        // Jika input kosong, anggap match true (biar bisa browse pakai filter aja)
        const textMatch = input === '' || p.name.toLowerCase().includes(input) || p.sku.toLowerCase().includes(input);
        
        // 2. Filter Match
        const collMatch = fColl === 'all' || p.collection === fColl;
        const catMatch = fCat === 'all' || p.category_item === fCat;
        const userMatch = fUser === 'all' || p.userType === fUser;

        return textMatch && collMatch && catMatch && userMatch;
    });

    resultBox.innerHTML = '';
    
    // Tampilkan hasil jika ada match ATAU jika user sedang pakai filter (walau text kosong)
    const isFiltering = fColl !== 'all' || fCat !== 'all' || fUser !== 'all' || input.length > 0;

    if(isFiltering && matches.length > 0) {
        resultBox.style.display = 'block';
        matches.forEach(p => {
            const div = document.createElement('div');
            div.className = 'dropdown-item-rich'; // Pakai class baru
            
            // Gambar produk (fallback placeholder)
            const imgSrc = p.img ? `../gambar/${p.img}` : 'https://via.placeholder.com/35?text=Img';
            
            div.innerHTML = `
                <img src="${imgSrc}" onerror="this.src='https://via.placeholder.com/35?text=Err'">
                <div>
                    <div style="font-weight:600; font-size:0.9rem;">${p.name}</div>
                    <div style="font-size:0.75rem; color:#666;">${p.sku} • ${p.collection}</div>
                </div>
                <div style="margin-left:auto; font-size:0.8rem; color:var(--primary-color);">
                    <i class="fas fa-plus-circle"></i>
                </div>
            `;
            
            div.onclick = () => addProductToShelf(p.name);
            resultBox.appendChild(div);
        });
    } else if (isFiltering && matches.length === 0) {
        resultBox.style.display = 'block';
        resultBox.innerHTML = '<div style="padding:10px; color:#888; text-align:center;">Tidak ada produk ditemukan.</div>';
    } else {
        resultBox.style.display = 'none'; 
    }
}

function addProductToShelf(productName) {
    if(!tempSelectedProducts.includes(productName)) {
        tempSelectedProducts.push(productName);
        renderSelectedProducts();
    }
    document.getElementById('productSearchInput').value = '';
    document.getElementById('productSearchResults').style.display = 'none';
}

function renderSelectedProducts() {
    const container = document.getElementById('selectedShelfProducts');
    container.innerHTML = '';
    
    if(tempSelectedProducts.length === 0) {
        container.innerHTML = '<span class="placeholder-text text-muted" style="font-size: 0.9rem; margin-top: 10px; display: block; font-style:italic;">Belum ada produk yang dimasukkan ke rak ini.</span>';
        return;
    }
    
    tempSelectedProducts.forEach((itemName, index) => {
        // Cari data asli untuk dapat gambar (opsional, tapi bagus visualnya)
        const prodData = inventoryData.find(p => p.name === itemName);
        let iconHtml = '<i class="fas fa-box"></i>'; // Default icon
        
        // Chip style baru
        const tag = document.createElement('div');
        tag.className = 'shelf-chip';
        tag.innerHTML = `
            ${iconHtml}
            <span>${itemName}</span>
            <i class="fas fa-times-circle" onclick="removeProductFromShelf(${index})"></i>
        `;
        container.appendChild(tag);
    });
}

function removeProductFromShelf(index) {
    tempSelectedProducts.splice(index, 1);
    renderSelectedProducts();
}