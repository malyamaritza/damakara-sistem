// --- DUMMY DATA ---
// --- DUMMY DATA ---
// Data Produk disamakan dengan Store Staff
let products = [
    { 
        id: 1, sku: 'DMK-001', name: 'Setala Shirt', status: 'Active',
        collection: "Setala", category: "Shirt", userType: "Men",
        img: "setalashirt.jpeg", // <-- Tambahan nama file gambar
        variants: [
            { color: 'Hitam', size: 'M', stock: 5 },
            { color: 'Hitam', size: 'L', stock: 20 },
            { color: 'Navy', size: 'XL', stock: 0 }
        ]
    },
    { 
        id: 2, sku: 'DMK-002', name: 'Kala Shirt Longsleeve', status: 'Active',
        collection: "Kala", category: "Shirt", userType: "Men",
        img: "kalashirtlongsleeve.png",
        variants: [
            { color: 'Hitam', size: 'M', stock: 12 },
            { color: 'Electric Blue', size: 'L', stock: 8 }
        ]
    },
    { 
        id: 3, sku: 'DMK-003', name: 'Arkana Embroidery Vest', status: 'Active',
        collection: "Arkana", category: "Outer", userType: "Women",
        img: "arkanaembroideryvest.png",
        variants: [ 
            { color: 'Navy', size: 'All Size', stock: 15 },
            { color: 'Cream', size: 'All Size', stock: 10 }
        ]
    },
    { 
        id: 4, sku: 'DMK-004', name: 'Aksata Vest Lace', status: 'Active',
        collection: "Aksata", category: "Outer", userType: "Women",
        img: "aksatavestlace.png",
        variants: [ 
            { color: 'Navy', size: 'All Size', stock: 1 },
            { color: 'Black', size: 'All Size', stock: 3 }
        ]
    },
    { 
        id: 5, sku: 'DMK-005', name: 'Obi Belt', status: 'Active',
        collection: "Obi", category: "Accessories", userType: "Women",
        img: "obibelt.jpeg",
        variants: [ 
            { color: 'Maroon', size: 'All Size', stock: 50 },
            { color: 'Black', size: 'All Size', stock: 45 }
        ]
    },
    { 
        id: 6, sku: 'DMK-006', name: 'Suar Bucket Hat', status: 'Active',
        collection: "Suar", category: "Accessories", userType: "Men",
        img: "suarbuckethat.jpeg",
        variants: [ 
            { color: 'Terracotta', size: 'All Size', stock: 3 }
        ]
    }
];

// Data Restock
// Data Restock (Sedang Berjalan)
let restockOrders = [
    { 
        id: 'RO-20251001', 
        date: '2025-10-26', 
        status: 'Shipping', 
        items: 30, 
        expDate: '2025-10-28', 
        details: [
            { 
                productId: 1,
                name: 'Setala Shirt', 
                variants: [
                    { color: 'Hitam', size: 'L', reqQty: 20 },
                    { color: 'Hitam', size: 'M', reqQty: 10 }
                ]
            }
        ] 
    },
    { 
        id: 'RO-20251002', 
        date: '2025-10-27', 
        status: 'Pending', 
        items: 15, 
        expDate: '2025-10-30', 
        details: [
            { 
                productId: 4,
                name: 'Aksata Vest Lace', 
                variants: [
                    { color: 'Navy', size: 'All Size', reqQty: 15 }
                ]
            }
        ] 
    }
];

// Data Riwayat Restock (Selesai)
let historyRestocks = [
    { 
        id: 'RO-20250920', 
        date: '2025-09-20', 
        items: 50, 
        status: 'Completed',
        details: [
            { name: 'Kala Shirt Longsleeve', variant: 'Hitam - L', req: 20, rec: 20 },
            { name: 'Kala Shirt Longsleeve', variant: 'Hitam - M', req: 10, rec: 10 },
            { name: 'Arkana Embroidery Vest', variant: 'Navy - All Size', req: 20, rec: 20 }
        ]
    },
    { 
        id: 'RO-20250915', 
        date: '2025-09-15', 
        items: 15, 
        status: 'Completed', 
        details: [
            { name: 'Obi Belt', variant: 'Maroon - All Size', req: 15, rec: 15 }
        ]
    }
];


// Data Dummy Laporan
const reportData = {
    daily: [
        { period: '25 Okt 2025', trx: 45, rev: 12500000, disc: 850000, cash: 5000000, digital: 7500000 },
        { period: '24 Okt 2025', trx: 38, rev: 10200000, disc: 500000, cash: 4000000, digital: 6200000 },
        { period: '23 Okt 2025', trx: 50, rev: 15000000, disc: 1000000, cash: 6000000, digital: 9000000 }
    ],
    monthly: [
        { period: 'Oktober 2025', trx: 1200, rev: 350000000, disc: 15000000, cash: 100000000, digital: 250000000 },
        { period: 'September 2025', trx: 1150, rev: 320000000, disc: 12000000, cash: 90000000, digital: 230000000 }
    ],
    yearly: [
        { period: '2025 (YTD)', trx: 12000, rev: 4500000000, disc: 150000000, cash: 1500000000, digital: 3000000000 },
        { period: '2024', trx: 10500, rev: 3800000000, disc: 120000000, cash: 1300000000, digital: 2500000000 }
    ]
};

// Current State
let currentReportType = 'daily';

// --- NAVIGATION ---
function showPage(pageId) {
    document.querySelectorAll('.page-section').forEach(p => p.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
    
    // Update Title logic
    const titles = {
        'dashboard': 'Dashboard Ringkasan',
        'inventory': 'Monitoring Stock Store',
        'restock': 'Manajemen Restock Order',
        'discount': 'Input Event Diskon',
        'reports': 'Laporan & Riwayat Transaksi'
    };
    document.getElementById('pageTitle').innerText = titles[pageId];

    // Sidebar Active State
    document.querySelectorAll('.nav-links li').forEach(li => li.classList.remove('active'));
    document.querySelector(`[data-label="${pageId === 'inventory' ? 'Stok Store' : (pageId === 'reports' ? 'Laporan' : titles[pageId].split(' ')[0])}"]`)?.parentNode.classList.add('active');
    
    // Init page specific functions
    if(pageId === 'inventory') renderInventory();
    if(pageId === 'restock') renderRestock();
    if(pageId === 'reports') renderReports();
}

// --- INVENTORY LOGIC ---
function renderInventory() {
    const tbody = document.getElementById('inventoryTableBody');
    tbody.innerHTML = '';

    const filterTxt = document.getElementById('searchStock').value.toLowerCase();
    const filterStat = document.getElementById('filterStatus').value;
    
    // Filter Baru
    const filterColl = document.getElementById('filterInvCollection') ? document.getElementById('filterInvCollection').value : 'all';
    const filterCat = document.getElementById('filterInvCategory') ? document.getElementById('filterInvCategory').value : 'all';
    const filterUser = document.getElementById('filterInvUser') ? document.getElementById('filterInvUser').value : 'all';

    let sortedProducts = [...products].sort((a, b) => getTotalStock(a) - getTotalStock(b));

    sortedProducts.forEach(p => {
        const totalStock = getTotalStock(p);
        
        let stockStatus = 'safe';
        if(totalStock === 0) stockStatus = 'empty';
        else if(totalStock < 10) stockStatus = 'low';

        // Logika Filter
        const matchSearch = p.name.toLowerCase().includes(filterTxt) || p.sku.toLowerCase().includes(filterTxt);
        
        let matchStat = true;
        if(filterStat === 'low' && stockStatus !== 'low') matchStat = false;
        if(filterStat === 'empty' && stockStatus !== 'empty') matchStat = false;
        if(filterStat === 'safe' && (stockStatus === 'low' || stockStatus === 'empty')) matchStat = false;

        const matchColl = filterColl === 'all' || p.collection === filterColl;
        const matchCat = filterCat === 'all' || p.category === filterCat;
        const matchUser = filterUser === 'all' || p.userType === filterUser;

        if(!matchSearch || !matchStat || !matchColl || !matchCat || !matchUser) return;

        let badgeClass = 'success';
        let statusText = 'Aman';
        if(stockStatus === 'low') { badgeClass = 'warning'; statusText = 'Menipis'; }
        if(stockStatus === 'empty') { badgeClass = 'danger'; statusText = 'Habis'; }

        const tr = document.createElement('tr');
        
        // --- UPDATE TAMPILAN DISINI ---
        // Kita gunakan Flexbox agar Gambar dan Teks bersampingan rapi
        tr.innerHTML = `
            <td><input type="checkbox" class="inv-check" value="${p.id}"></td>
            <td>
                <div style="display: flex; align-items: center; gap: 15px;">
                    <img src="../gambar/${p.img}" alt="${p.name}" 
                         style="width: 45px; height: 45px; object-fit: cover; border-radius: 6px; border: 1px solid #eee;"
                         onerror="this.src='https://via.placeholder.com/45?text=No+Img'">
                    
                    <div>
                        <strong>${p.name}</strong>
                        <br>
                        <small class="text-muted">${p.sku}</small>
                        <br>
                        <span style="font-size:0.75rem; color:#888; background:#f4f4f4; padding:2px 5px; border-radius:4px;">
                            ${p.userType} • ${p.collection}
                        </span>
                    </div>
                </div>
            </td>
            <td><strong>${totalStock} pcs</strong></td>
            <td><span class="badge ${badgeClass}">${statusText}</span></td>
            <td><span class="badge ${p.status === 'Active' ? 'success' : 'danger'}">${p.status}</span></td>
            <td>
                <button class="btn-outline" style="padding: 5px 10px; font-size: 0.8rem;" onclick="openProductDetail(${p.id})">Detail / Edit</button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function getTotalStock(product) {
    return product.variants.reduce((sum, v) => sum + v.stock, 0);
}

function filterStock() { renderInventory(); }

function openProductDetail(id) {
    const p = products.find(x => x.id === id);
    document.getElementById('detailProdName').innerText = p.name;
    document.getElementById('detailProdSku').innerText = 'SKU: ' + p.sku;
    document.getElementById('editProdStatus').value = p.status;

    const vTable = document.getElementById('detailVariantTable');
    vTable.innerHTML = '';
    p.variants.forEach(v => {
        const colorClass = v.stock < 5 ? 'text-danger' : (v.stock < 10 ? 'text-warning' : 'text-success');
        vTable.innerHTML += `
            <tr>
                <td>${v.color} - ${v.size}</td>
                <td class="${colorClass}"><strong>${v.stock}</strong></td>
                <td>${v.stock > 0 ? 'Tersedia' : 'Kosong'}</td>
            </tr>
        `;
    });
    document.getElementById('productDetailModal').classList.remove('hidden');
}

function saveProductStatus() {
    alert('Status produk berhasil diperbarui!');
    closeModal('productDetailModal');
    renderInventory();
}

function openAddProductModal() { document.getElementById('addItemModal').classList.remove('hidden'); }

function addNewVariantRow() {
    const div = document.createElement('div');
    div.className = 'row mt-2 variant-row';
    div.innerHTML = `
        <input type="text" placeholder="Warna" class="input-field quarter">
        <input type="text" placeholder="Size" class="input-field quarter">
        <input type="number" placeholder="Qty Awal" class="input-field quarter">
        <button class="btn-text text-danger" onclick="this.parentElement.remove()"><i class="fas fa-trash"></i></button>
    `;
    document.getElementById('newVariantInputs').appendChild(div);
}

function submitNewItem() {
    const name = document.getElementById('newItemName').value;
    const sku = document.getElementById('newItemSku').value;
    if(!name || !sku) return alert('Nama dan SKU wajib diisi');
    
    // Simulate adding
    products.push({
        id: products.length + 1, sku: sku, name: name, status: 'Active',
        variants: [{color: 'Default', size: 'All', stock: 10}]
    });
    alert('Item Berhasil Ditambahkan ke Katalog!');
    closeModal('addItemModal');
    renderInventory();
}

function toggleSelectAllInv() {
    const master = document.getElementById('selectAllInv');
    document.querySelectorAll('.inv-check').forEach(c => c.checked = master.checked);
}

// --- RESTOCK LOGIC (REVISI SESUAI REQUEST) ---

// 1. HELPER: Generate HTML Section per Produk untuk Form Restock
function renderRestockItemHTML(prod) {
    let html = `
        <div class="restock-product-section" data-id="${prod.id}">
            <div class="prod-header" style="border-bottom:1px solid #eee; margin-bottom:10px; padding-bottom:5px; display:flex; justify-content:space-between; align-items:center;">
                <div>
                    <h4 style="margin:0; color:#CF5306; font-size:1rem;">${prod.name}</h4>
                    <span class="text-muted" style="font-size:0.8rem;">${prod.sku}</span>
                </div>
                <button class="btn-text text-danger" onclick="this.closest('.restock-product-section').remove()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <table class="simple-table variant-table" style="width:100%; font-size:0.9rem;">
                <thead>
                    <tr>
                        <th width="40%">Varian</th>
                        <th width="25%">Stok Toko</th>
                        <th width="35%">Req Qty</th>
                    </tr>
                </thead>
                <tbody>
    `;
    
    prod.variants.forEach(v => {
        let stockColor = v.stock === 0 ? 'text-danger' : (v.stock < 10 ? 'text-warning' : '');
        html += `
            <tr>
                <td><span style="background:#f4f4f4; padding:2px 6px; border-radius:4px; font-weight:500;">${v.color} - ${v.size}</span></td>
                <td><strong class="${stockColor}">${v.stock}</strong></td>
                <td><input type="number" class="input-field" style="padding:6px;" placeholder="0" min="0"></td>
            </tr>
        `;
    });
    
    html += `</tbody></table></div>`;
    return html;
}

// 2. Fungsi Tombol "Buat Restock Order" dari Page Inventory
function createRestockFromSelection() {
    const checkedBoxes = document.querySelectorAll('.inv-check:checked');
    
    if(checkedBoxes.length === 0) {
        return alert('Pilih minimal satu produk dari tabel stok dulu!');
    }

    const selectedIds = Array.from(checkedBoxes).map(cb => parseInt(cb.value));
    const selectedProducts = products.filter(p => selectedIds.includes(p.id));

    // Buka modal restock utama dengan produk yang sudah dipilih
    openCreateRestockModal(selectedProducts);
}

// 3. Fungsi Membuka Modal Restock Utama
function openCreateRestockModal(initialProducts = []) {
    const container = document.getElementById('restockFormContainer');
    container.innerHTML = ''; // Bersihkan container

    if(initialProducts.length > 0) {
        initialProducts.forEach(prod => {
            container.innerHTML += renderRestockItemHTML(prod);
        });
    } else {
        container.innerHTML = '<p class="text-muted text-center mt-3 mb-3">Belum ada produk dipilih. Silakan klik tombol tambah (+) diatas.</p>';
    }

    document.getElementById('createRestockModal').classList.remove('hidden');
}

// 4. Fungsi Membuka Modal Tambahan (Katalog Pop-up)
function openAddMoreModal() {
    renderAddRestockTable(); // Render isi tabel di modal tambahan
    document.getElementById('addProductRestockModal').classList.remove('hidden');
}

// 5. Render Tabel di Modal Tambahan
function renderAddRestockTable() {
    const tbody = document.getElementById('addRestockTableBody');
    tbody.innerHTML = '';
    const searchVal = document.getElementById('searchAddRestock').value.toLowerCase();

    products.forEach(p => {
        if(!p.name.toLowerCase().includes(searchVal) && !p.sku.toLowerCase().includes(searchVal)) return;

        const total = getTotalStock(p);
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><input type="checkbox" class="add-restock-check" value="${p.id}"></td>
            <td><strong>${p.name}</strong><br><small>${p.sku}</small></td>
            <td>${total}</td>
            <td><span class="badge ${p.status==='Active'?'success':'danger'}">${p.status}</span></td>
        `;
        tbody.appendChild(tr);
    });
}

// 6. Konfirmasi Penambahan Produk dari Pop-up ke Form Utama
function confirmAddProducts() {
    const checked = document.querySelectorAll('.add-restock-check:checked');
    if(checked.length === 0) return alert('Pilih produk dulu!');

    const ids = Array.from(checked).map(c => parseInt(c.value));
    const container = document.getElementById('restockFormContainer');

    // Hapus pesan kosong jika ada
    if(container.innerHTML.includes('Belum ada produk')) {
        container.innerHTML = '';
    }

    ids.forEach(id => {
        // Cek duplikasi: Jika produk sudah ada di form, jangan tambah lagi
        if(container.querySelector(`.restock-product-section[data-id="${id}"]`)) return;

        const prod = products.find(p => p.id === id);
        if(prod) {
            container.innerHTML += renderRestockItemHTML(prod);
        }
    });

    closeModal('addProductRestockModal');
}

// --- RESTOCK NAVIGATION & HISTORY ---
function renderRestock() {
    // Render Active (Tetap sama)
    const activeContainer = document.getElementById('activeRestockList');
    activeContainer.innerHTML = '';
    restockOrders.forEach(order => {
        const card = document.createElement('div');
        card.className = 'restock-card';
        card.innerHTML = `
            <div class="restock-header">
                <strong>${order.id}</strong>
                <span class="badge warning">${order.status}</span>
            </div>
            <div style="font-size: 0.9rem; color: #555;">
                <p><i class="far fa-calendar-alt"></i> Exp: ${order.expDate}</p>
                <p><i class="fas fa-box"></i> ${order.items} Items Diminta</p>
            </div>
            <button class="btn-primary full-width mt-3" onclick="openReceiveModal('${order.id}')">Detail / Terima Barang</button>
        `;
        activeContainer.appendChild(card);
    });
    
    // Render History (UPDATE DISINI: Tambahkan onclick ke openHistoryDetail)
    const hBody = document.getElementById('historyRestockTable');
    hBody.innerHTML = '';
    historyRestocks.forEach(h => {
        hBody.innerHTML += `
            <tr>
                <td>${h.id}</td>
                <td>${h.date}</td>
                <td>${h.items} pcs</td>
                <td><span class="badge success">${h.status}</span></td>
                <td>
                    <button class="btn-outline" style="padding:4px 10px;" onclick="openHistoryDetail('${h.id}')">
                        Detail
                    </button>
                </td>
            </tr>
        `;
    });
}

function openHistoryDetail(id) {
    const data = historyRestocks.find(h => h.id === id);
    if (!data) return;

    // Isi Header Modal
    document.getElementById('histOrderId').innerText = '#' + data.id;
    document.getElementById('histStatusBadge').innerText = data.status;
    document.getElementById('histDateReceived').innerText = data.date;
    document.getElementById('histTotalItems').innerText = data.items + ' Pcs';

    // Render Tabel Detail
    const tbody = document.getElementById('histDetailTableBody');
    tbody.innerHTML = '';

    if (data.details && data.details.length > 0) {
        data.details.forEach(item => {
            // Cek kesesuaian (Jika Req != Rec, beri warna merah/warning)
            let matchClass = (item.req === item.rec) ? 'text-success' : 'text-danger';
            let matchIcon = (item.req === item.rec) ? '<i class="fas fa-check"></i> OK' : '<i class="fas fa-exclamation-circle"></i> Selisih';

            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${item.name}</strong></td>
                <td><span style="background:#eee; padding:2px 8px; border-radius:4px;">${item.variant}</span></td>
                <td class="text-center">${item.req}</td>
                <td class="text-center"><strong>${item.rec}</strong></td>
                <td><span class="${matchClass}" style="font-size:0.85rem;">${matchIcon}</span></td>
            `;
            tbody.appendChild(tr);
        });
    } else {
        tbody.innerHTML = '<tr><td colspan="5" class="text-center text-muted">Tidak ada detail item.</td></tr>';
    }

    document.getElementById('historyDetailModal').classList.remove('hidden');
}


function switchRestockTab(tab, e) {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    if(e) e.target.classList.add('active');
    
    if(tab === 'active') {
        document.getElementById('restockActiveContent').classList.remove('hidden');
        document.getElementById('restockHistoryContent').classList.add('hidden');
    } else {
        document.getElementById('restockActiveContent').classList.add('hidden');
        document.getElementById('restockHistoryContent').classList.remove('hidden');
    }
}

function submitRestock() {
    alert('Permintaan Restock Dikirim ke Gudang Pusat!');
    closeModal('createRestockModal');
    // Add dummy data logic
    restockOrders.push({id: 'RO-NEW-001', date: '2025-10-26', status: 'Pending', items: 10, expDate: '2025-10-30'});
    renderRestock();
}

function openReceiveModal(id) {
    const order = restockOrders.find(r => r.id === id);
    if(!order) return;
    
    // Set Header Info
    document.getElementById('receiveOrderId').innerText = '#' + order.id;
    document.getElementById('receiveStatusBadge').innerText = order.status;
    
    // Auto-fill Tanggal Hari Ini
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('receiveDateInput').value = today;

    // Render Container Item
    const container = document.getElementById('receiveItemsContainer');
    container.innerHTML = '';

    if(order.details && order.details.length > 0) {
        order.details.forEach(prod => {
            // Buat Section Wrapper per Produk
            const section = document.createElement('div');
            section.className = 'restock-product-section'; // Reuse style CSS yang sama
            
            let html = `
                <div class="prod-header" style="border-bottom:1px solid #eee; margin-bottom:10px; padding-bottom:5px;">
                    <h4 style="margin:0; color:#CF5306; font-size:1rem;">${prod.name}</h4>
                </div>
                <table class="simple-table variant-table" style="width:100%; font-size:0.9rem;">
                    <thead>
                        <tr>
                            <th width="40%">Varian</th>
                            <th width="20%" class="text-center">Req Qty</th>
                            <th width="30%">Received Qty</th>
                            <th width="10%" class="text-center">All</th>
                        </tr>
                    </thead>
                    <tbody>
            `;

            prod.variants.forEach((v, idx) => {
                // ID unik untuk checkbox autofill
                const inputId = `rec-qty-${order.id}-${prod.productId}-${idx}`;
                
                html += `
                    <tr>
                        <td>
                            <span style="background:#f4f4f4; padding:2px 6px; border-radius:4px; font-weight:500;">
                                ${v.color} - ${v.size}
                            </span>
                        </td>
                        <td class="text-center"><strong>${v.reqQty}</strong></td>
                        <td>
                            <input type="number" id="${inputId}" class="input-field receive-qty-input" 
                                   placeholder="0" min="0" data-req="${v.reqQty}" 
                                   style="padding:6px;">
                        </td>
                        <td class="text-center">
                            <input type="checkbox" onclick="autofillReceive('${inputId}', ${v.reqQty}, this)" 
                                   title="Terima Semua">
                        </td>
                    </tr>
                `;
            });

            html += `</tbody></table>`;
            section.innerHTML = html;
            container.appendChild(section);
        });
        
        document.getElementById('receiveActionArea').classList.remove('hidden');
    } else {
        container.innerHTML = '<p class="text-muted text-center">Data detail item tidak tersedia.</p>';
        document.getElementById('receiveActionArea').classList.add('hidden');
    }

    document.getElementById('receiveRestockModal').classList.remove('hidden');
}

function autofillReceive(inputId, qty, checkbox) {
    const inputField = document.getElementById(inputId);
    if(checkbox.checked) {
        inputField.value = qty;
        inputField.style.borderColor = '#2ecc71'; // Visual feedback hijau
        inputField.style.backgroundColor = '#f0fff4';
    } else {
        inputField.value = '';
        inputField.style.borderColor = '#e2e8f0'; // Reset border
        inputField.style.backgroundColor = 'white';
    }
}

function confirmReceive() {
    // Simulasi Validasi & Update Stok
    const inputs = document.querySelectorAll('.receive-qty-input');
    let totalReceived = 0;
    
    // Hitung total cuma buat demo alert
    inputs.forEach(inp => {
        totalReceived += parseInt(inp.value || 0);
    });

    if(totalReceived === 0) {
        if(!confirm('Anda belum mengisi jumlah diterima. Yakin ingin menyimpan sebagai 0 barang diterima?')) return;
    }

    const notes = document.getElementById('receiveNotes').value;
    const date = document.getElementById('receiveDateInput').value;

    alert(`Penerimaan Berhasil!\n\nTanggal: ${date}\nTotal Item Diterima: ${totalReceived}\nCatatan: ${notes || '-'}\n\nStok gudang telah diperbarui otomatis.`);
    
    closeModal('receiveRestockModal');
    
    // (Opsional) Di sini nanti logika real untuk mindahin data dari Restock Active -> Restock History
    // dan update stok di array 'products'.
}


// --- DISCOUNT LOGIC (DENGAN PENYIMPANAN MULTIPLE PRODUK) ---

let currentEditingRuleId = null; 
// Object untuk menyimpan ID checkbox yang dipilih per aturan
// Format: { 'rule-123': ['child-1-0', 'child-2-1'] }
let ruleSelections = {}; 

// 1. Fungsi Tambah Aturan Baru
function addDiscountRule() {
    const container = document.getElementById('discountRulesContainer'); 
    
    const uniqueId = 'rule-' + Date.now(); 
    const ruleCount = container.children.length + 1;

    // Inisialisasi array kosong untuk aturan ini
    ruleSelections[uniqueId] = [];

    const ruleDiv = document.createElement('div');
    ruleDiv.className = 'rule-box mt-2';
    ruleDiv.id = uniqueId; 
    
    ruleDiv.innerHTML = `
        <div class="rule-header" style="display:flex; justify-content:space-between; align-items:center;">
            <h4>Aturan #${ruleCount}</h4>
            <button class="btn-text text-danger" onclick="removeRule('${uniqueId}')"><i class="fas fa-trash"></i> Hapus</button>
        </div>
        <div class="row">
            <div class="form-group quarter">
                <label>Tipe Potongan</label>
                <select class="input-field">
                    <option>Persentase (%)</option>
                    <option>Nominal (Rp)</option>
                </select>
            </div>
            <div class="form-group quarter">
                <label>Nilai Diskon</label>
                <input type="number" class="input-field" placeholder="Contoh: 10">
            </div>
            <div class="form-group half">
                <label>Target Produk</label>
                <button type="button" class="btn-outline full-width" 
                        style="justify-content:space-between; text-align:left; border-color:#ccc; color:#555;" 
                        onclick="openDiscountProductModal('${uniqueId}')">
                    <span><i class="fas fa-search"></i> Pilih / Tambah Produk...</span>
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>
        </div>
        
        <div class="selected-items-container" id="selected-container-${uniqueId}">
            <span class="text-muted" style="font-size:0.85rem; padding:5px;">Belum ada produk dipilih.</span>
        </div>
    `;
    
    container.appendChild(ruleDiv);
}

function removeRule(id) {
    document.getElementById(id).remove();
    delete ruleSelections[id]; // Hapus data simpanan agar hemat memori
}

// 2. Buka Modal & Restore Pilihan Sebelumnya
function openDiscountProductModal(ruleId) {
    currentEditingRuleId = ruleId;
    
    // 1. Render ulang list produk (masih kosongan/unchecked)
    renderDiscountProductList(); 
    
    // 2. AMBIL DATA LAMA: Cek checkbox yang sudah tersimpan di memori
    const savedIds = ruleSelections[ruleId] || [];
    
    savedIds.forEach(checkboxId => {
        const checkbox = document.getElementById(checkboxId);
        if (checkbox) {
            checkbox.checked = true;
            
            // Opsional: Buka accordion produknya supaya user lihat
            // Format ID child: child-PRODID-VARIANID (contoh: child-1-0)
            const prodId = checkboxId.split('-')[1]; 
            const variantList = document.getElementById(`variant-list-${prodId}`);
            const icon = document.getElementById(`icon-${prodId}`);
            
            if(variantList) variantList.classList.add('show');
            if(icon) icon.classList.add('rotated');
        }
    });

    // 3. Update status checkbox Parent (Produk) berdasarkan Child yang baru dicentang
    products.forEach(p => checkParentState(p.id));

    document.getElementById('selectProductDiscountModal').classList.remove('hidden');
}

// 3. Render List Produk (Tree View)
function renderDiscountProductList() {
    const container = document.getElementById('discountProductListContainer');
    container.innerHTML = '';
    
    // Ambil Value Search & Filter
    const searchVal = document.getElementById('searchDiscountProduct').value.toLowerCase();
    const filterUser = document.getElementById('discFilterUser').value;
    const filterColl = document.getElementById('discFilterColl').value;
    const filterCat = document.getElementById('discFilterCat').value;

    products.forEach(prod => {
        // 1. Cek Pencarian Teks
        const matchSearch = prod.name.toLowerCase().includes(searchVal) || prod.sku.toLowerCase().includes(searchVal);
        
        // 2. Cek Filter Dropdown
        const matchUser = filterUser === 'all' || prod.userType === filterUser;
        const matchColl = filterColl === 'all' || prod.collection === filterColl;
        const matchCat = filterCat === 'all' || prod.category === filterCat;

        // Jika salah satu tidak cocok, skip produk ini
        if(!matchSearch || !matchUser || !matchColl || !matchCat) return;

        const itemDiv = document.createElement('div');
        itemDiv.className = 'discount-prod-item';

        // HEADER PRODUK (PARENT) - UPDATE DENGAN GAMBAR
        const headerHTML = `
            <div class="discount-prod-header">
                <input type="checkbox" class="check-parent" id="parent-${prod.id}" onchange="toggleAllVariants(${prod.id}, this)">
                
                <img src="../gambar/${prod.img}" alt="${prod.name}" 
                     style="width: 40px; height: 40px; object-fit: cover; border-radius: 4px; border: 1px solid #ddd; margin-left: 10px;"
                     onerror="this.src='https://via.placeholder.com/40?text=IMG'">

                <div style="flex:1; margin-left:12px;" onclick="toggleCollapse(${prod.id})">
                    <strong style="font-size: 0.95rem;">${prod.name}</strong> 
                    <br>
                    <small class="text-muted" style="font-size: 0.8rem;">${prod.sku} • ${prod.collection}</small>
                </div>
                
                <i class="fas fa-chevron-down toggle-icon" id="icon-${prod.id}" onclick="toggleCollapse(${prod.id})"></i>
            </div>
        `;

        let variantsHTML = `<div class="discount-variant-list" id="variant-list-${prod.id}">`;
        prod.variants.forEach((v, idx) => {
            const varId = `child-${prod.id}-${idx}`; 
            const varValue = `${prod.name} (${v.color} - ${v.size})`; 

            variantsHTML += `
                <div class="discount-variant-item">
                    <input type="checkbox" class="check-child child-of-${prod.id}" id="${varId}" value="${varValue}" onchange="checkParentState(${prod.id})">
                    <label for="${varId}" style="cursor:pointer; width:100%; margin-left: 10px;">
                        ${v.color} - ${v.size} 
                        <span class="text-muted" style="font-size: 0.8rem;">(Stok: ${v.stock})</span>
                    </label>
                </div>
            `;
        });
        variantsHTML += `</div>`;

        itemDiv.innerHTML = headerHTML + variantsHTML;
        container.appendChild(itemDiv);
    });

    // Pesan jika hasil filter kosong
    if(container.innerHTML === '') {
        container.innerHTML = `
            <div style="padding: 20px; text-align: center; color: #999;">
                <i class="fas fa-search" style="font-size: 2rem; margin-bottom: 10px;"></i>
                <p>Tidak ada produk yang cocok dengan filter.</p>
            </div>
        `;
    }
}

// --- HELPER CHECKBOX HIERARKI ---
function toggleCollapse(prodId) {
    document.getElementById(`variant-list-${prodId}`).classList.toggle('show');
    document.getElementById(`icon-${prodId}`).classList.toggle('rotated');
}

function toggleAllVariants(prodId, parentCheckbox) {
    const children = document.querySelectorAll(`.child-of-${prodId}`);
    children.forEach(child => child.checked = parentCheckbox.checked);
    
    if(parentCheckbox.checked) {
        document.getElementById(`variant-list-${prodId}`).classList.add('show');
        document.getElementById(`icon-${prodId}`).classList.add('rotated');
    }
}

function checkParentState(prodId) {
    const children = document.querySelectorAll(`.child-of-${prodId}`);
    const parent = document.getElementById(`parent-${prodId}`);
    // Jika semua child tercentang, parent ikut tercentang
    if(children.length > 0 && parent) {
        const allChecked = Array.from(children).every(c => c.checked);
        parent.checked = allChecked;
    }
}

// 4. Konfirmasi & Simpan Pilihan (LOGIC BARU)
function confirmDiscountProductSelection() {
    if(!currentEditingRuleId) return;

    // A. Ambil semua checkbox varian yang sedang tercentang di modal
    const checkedBoxes = document.querySelectorAll('.check-child:checked');
    
    // B. Simpan ID checkbox ke dalam variabel global agar state tersimpan (Restore nanti)
    const checkedIds = Array.from(checkedBoxes).map(cb => cb.id);
    ruleSelections[currentEditingRuleId] = checkedIds;

    // C. Render Tampilan Chips di Form
    const selectedContainer = document.getElementById(`selected-container-${currentEditingRuleId}`);
    selectedContainer.innerHTML = ''; 

    if (checkedBoxes.length === 0) {
        selectedContainer.innerHTML = '<span class="text-muted" style="font-size:0.85rem;">Belum ada produk dipilih.</span>';
        closeModal('selectProductDiscountModal');
        return;
    }

    // Logic Grouping untuk Tampilan "Semua Varian"
    let productGroups = {}; 

    checkedBoxes.forEach(child => {
        // ID format: child-PRODID-VARID
        const prodId = child.id.split('-')[1];
        if (!productGroups[prodId]) productGroups[prodId] = [];
        productGroups[prodId].push(child.value); // child.value berisi nama produk + varian
    });

    Object.keys(productGroups).forEach(prodId => {
        const originalProd = products.find(p => p.id == prodId);
        const totalVariants = originalProd.variants.length;
        const selectedCount = productGroups[prodId].length;

        // Jika semua varian produk tsb dipilih, tampilkan ringkas
        if (selectedCount === totalVariants) {
            createChip(selectedContainer, `<strong>${originalProd.name}</strong> (Semua Varian)`);
        } else {
            // Jika parsial, tampilkan satu per satu
            productGroups[prodId].forEach(val => createChip(selectedContainer, val));
        }
    });

    closeModal('selectProductDiscountModal');
}

function createChip(container, text) {
    const chip = document.createElement('div');
    chip.className = 'prod-chip';
    chip.innerHTML = `${text}`; // Hapus tombol remove individual di chip agar tidak rancu dengan state modal
    container.appendChild(chip);
}

// --- REPORT LOGIC ---
function switchReportTab(type, e) {
    currentReportType = type;
    document.querySelectorAll('#reports .tab-btn').forEach(b => b.classList.remove('active'));
    if(e) e.target.classList.add('active');
    renderReports();
}

function renderReports() {
    const tbody = document.getElementById('reportTableBody');
    tbody.innerHTML = '';
    
    const data = reportData[currentReportType]; // daily, monthly, yearly
    
    data.forEach(d => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${d.period}</strong></td>
            <td>${d.trx.toLocaleString()} Trx</td>
            <td class="text-primary" style="font-weight:600;">Rp ${d.rev.toLocaleString()}</td>
            <td class="text-danger">Rp ${d.disc.toLocaleString()}</td>
            <td>
                <button class="btn-outline" style="padding: 6px 12px; font-size:0.8rem;" onclick="openReportDetail('${d.period}')">
                    <i class="fas fa-chart-bar"></i> Detail
                </button>
            </td>
        `;
        tbody.appendChild(tr);
    });
}

function openReportDetail(period) {
    const data = reportData[currentReportType].find(d => d.period === period);
    if(!data) return;

    document.getElementById('reportPeriodTitle').innerText = currentReportType === 'daily' ? 'Harian' : (currentReportType === 'monthly' ? 'Bulanan' : 'Tahunan');
    document.getElementById('reportDateSubtitle').innerText = 'Periode: ' + period;

    document.getElementById('repTotalRev').innerText = 'Rp ' + data.rev.toLocaleString();
    document.getElementById('repCash').innerText = 'Rp ' + data.cash.toLocaleString();
    document.getElementById('repDigital').innerText = 'Rp ' + data.digital.toLocaleString();
    document.getElementById('repDiscount').innerText = 'Rp ' + data.disc.toLocaleString();

    // Mock Top Products
    const topLimit = currentReportType === 'daily' ? 3 : 5;
    const topProdsMock = [
        {name: 'Setala Shirt', qty: 120},
        {name: 'Arkana Embroidery Vest', qty: 95},
        {name: 'Obi Belt', qty: 50},
        {name: 'Suar Bucket Hat', qty: 30},
        {name: 'Kala Shirt Longsleeve', qty: 25}
    ];

    const topTable = document.getElementById('topProductsTable');
    topTable.innerHTML = '';
    
    for(let i=0; i<topLimit; i++) {
        topTable.innerHTML += `
            <tr>
                <td>${i+1}. ${topProdsMock[i].name}</td>
                <td class="text-right"><strong>${topProdsMock[i].qty} Pcs</strong></td>
            </tr>
        `;
    }

    document.getElementById('reportDetailModal').classList.remove('hidden');
}

function exportReportPDF() {
    alert('Sedang men-generate PDF Laporan ' + currentReportType + '... \nDownload akan dimulai otomatis.');
}

// --- UTILS ---
function closeModal(id) { document.getElementById(id).classList.add('hidden'); }


function renderTopProducts() {
    const filter = document.getElementById('filterTopProd').value;
    const container = document.getElementById('topProductsList');
    container.innerHTML = '';

    // 1. Generate Data Dummy Random berdasarkan Filter
    // Kita clone array products biar database asli gak keganggu
    let dummySalesData = products.map(p => {
        let baseSales = 0;
        // Logic random biar angkanya masuk akal sesuai periode
        if (filter === 'daily') baseSales = Math.floor(Math.random() * 20) + 1;      // 1-20 pcs
        if (filter === 'weekly') baseSales = Math.floor(Math.random() * 150) + 20;   // 20-170 pcs
        if (filter === 'monthly') baseSales = Math.floor(Math.random() * 500) + 100; // 100-600 pcs
        
        return {
            ...p,
            soldQty: baseSales,
            revenue: baseSales * 150000 // Simulasi harga rata2
        };
    });

    // 2. Sorting dari Terbesar ke Terkecil
    dummySalesData.sort((a, b) => b.soldQty - a.soldQty);

    // 3. Ambil Top 5
    const top5 = dummySalesData.slice(0, 5);
    const maxSales = top5[0].soldQty; // Untuk menghitung persentase bar

    // 4. Render ke HTML
    top5.forEach((item, index) => {
        const rank = index + 1;
        let rankClass = 'rank-other';
        if (rank === 1) rankClass = 'rank-1';
        if (rank === 2) rankClass = 'rank-2';
        if (rank === 3) rankClass = 'rank-3';

        // Hitung lebar progress bar
        const percentage = (item.soldQty / maxSales) * 100;

        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td class="text-center">
                <div class="rank-badge ${rankClass}">${rank}</div>
            </td>
            <td>
                <div style="display: flex; align-items: center; gap: 10px;">
                    <img src="../gambar/${item.img}" alt="${item.name}" 
                         style="width: 40px; height: 40px; object-fit: cover; border-radius: 6px; border: 1px solid #eee;"
                         onerror="this.src='https://via.placeholder.com/40'">
                    <div>
                        <strong style="font-size: 0.95rem;">${item.name}</strong>
                        <br>
                        <small class="text-muted">${item.collection}</small>
                    </div>
                </div>
            </td>
            <td>
                <div style="display:flex; justify-content:space-between; font-size:0.8rem; margin-bottom:2px;">
                    <span class="text-muted">Kontribusi</span>
                    <span class="text-primary">${Math.round(percentage)}%</span>
                </div>
                <div class="sales-progress-bg">
                    <div class="sales-progress-fill" style="width: ${percentage}%"></div>
                </div>
            </td>
            <td class="text-right">
                <strong style="font-size: 1rem;">${item.soldQty} Pcs</strong>
                <br>
                <small class="text-success">+Rp ${(item.revenue / 1000000).toFixed(1)} Jt</small>
            </td>
        `;
        container.appendChild(tr);
    });
}

// --- INIT ---
// --- INIT ---
window.onload = function() {
    showPage('dashboard');
    
    // Init Chart Penjualan
    const ctx = document.getElementById('salesChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['M1', 'M2', 'M3', 'M4'],
            datasets: [{
                label: 'Penjualan (Juta Rp)',
                data: [12, 19, 15, 22],
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

    // INIT TOP PRODUCTS (BARU)
    renderTopProducts(); 
};