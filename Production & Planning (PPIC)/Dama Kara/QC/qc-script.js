// --- DATA DUMMY (Realistis Sesuai Konteks) --- //
const workOrders = [
    // 1. WO Jahit (Sedang Proses di Vendor) - Referensi PR-2025-003 (Planning)
    {
        id: 'WO-2025-003',
        type: 'jahit',
        vendor: 'Konveksi Bu Susi',
        address: 'Jl. Melati No. 3, Bandung',
        date: '2025-12-24',
        expected: '2025-01-10',
        status: 'in_process', 
        items: [
            {
                name: 'Setala Shirt (DMK-001)',
                img: '../gambar/setalashirt.jpeg',
                variants: [
                    { color: 'Hitam', size: 'M', qty: 20, received: 0, good: 0, rejected: 0 },
                    { color: 'Hitam', size: 'L', qty: 30, received: 0, good: 0, rejected: 0 },
                    { color: 'Navy', size: 'XL', qty: 10, received: 0, good: 0, rejected: 0 }
                ]
            },
            {
                name: 'Kala Shirt Longsleeve (DMK-002)',
                img: '../gambar/kalashirtlongsleeve.png',
                variants: [
                    { color: 'Putih', size: 'L', qty: 50, received: 0, good: 0, rejected: 0 }
                ]
            }
        ]
    },
    // 2. WO Kain (Sedang Dikirim) - Referensi PR-2025-001 (Planning)
    {
        id: 'WO-2025-001',
        type: 'kain',
        vendor: 'CV Textil Jaya',
        address: 'Kawasan Industri Textil, Bandung',
        date: '2025-12-20',
        expected: '2025-01-05',
        status: 'shipped',
        items: [
            {
                name: 'Katun Primisima (F-001)',
                img: 'https://via.placeholder.com/60/CF5306/FFFFFF?text=Parang', // Placeholder visual motif
                motif: 'Putih Tulang',
                qty_ordered: 500,
                unit: 'Yard',
                received: 0, good: 0, rejected: 0
            },
            {
                name: 'Linen Canvas (F-003)',
                img: 'https://via.placeholder.com/60/F5F5DC/333333?text=Linen', 
                motif: 'Natural Beige',
                qty_ordered: 200,
                unit: 'Yard',
                received: 0, good: 0, rejected: 0
            }
        ]
    },
    // 3. WO Jahit (Tiba & Siap QC) - Referensi PR-2025-005 (Planning)
    {
        id: 'WO-2025-005',
        type: 'jahit',
        vendor: 'Konveksi Bu Susi',
        address: 'Jl. Melati No. 3, Bandung',
        date: '2025-12-28',
        expected: '2026-01-15', // Estimasi awal
        status: 'arrived', // Status sudah tiba, siap input QC
        items: [
            {
                name: 'Arkana Embroidery Vest (DMK-003)',
                img: '../gambar/arkanaembroideryvest.png',
                variants: [
                    { color: 'Navy', size: 'All Size', qty: 25, received: 25, good: 0, rejected: 0 }
                ]
            },
            {
                name: 'Obi Belt (DMK-005)',
                img: '../gambar/obibelt.jpeg',
                variants: [
                    { color: 'Maroon', size: 'All Size', qty: 100, received: 100, good: 0, rejected: 0 }
                ]
            }
        ]
    }
];

// Data Dummy Riwayat (Log History) - Sesuai Data History Production
const historyData = [
    {
        id: 'WO-1001',
        type: 'jahit',
        vendor: 'Konveksi Bu Susi',
        address: 'Jl. Melati No. 3, Bandung',
        date: '2025-11-01',
        expected: '2025-11-15',
        submitDate: '2025-11-14', // Actual Arrival
        status: 'received',
        items: [
             {
                name: 'Setala Shirt (DMK-001) - Batch Awal',
                img: '../gambar/setalashirt.jpeg',
                variants: [
                    { color: 'Hitam', size: 'M', qty: 50, received: 50, good: 48, rejected: 2 },
                    { color: 'Hitam', size: 'L', qty: 50, received: 50, good: 50, rejected: 0 }
                ]
            }
        ]
    },
    {
        id: 'WO-2001',
        type: 'kain',
        vendor: 'CV Textil Jaya',
        address: 'Kawasan Industri Textil, Bandung',
        date: '2025-12-10',
        expected: '2025-12-15',
        submitDate: '2025-12-15', // On Time
        status: 'received',
        items: [
             {
                name: 'Katun Toyobo (F-002)',
                img: 'https://via.placeholder.com/60/000000/FFFFFF?text=Mega',
                motif: 'Hitam Pekat',
                qty_ordered: 500,
                unit: 'Yard',
                received: 500, good: 500, rejected: 0
            }
        ]
    }
];

// Variable untuk filter history
let histTypeFilter = 'all';
let currentFilter = 'all';

// --- MAIN RENDER FUNCTIONS --- //

function init() {
    renderWOList();
}

function filterWO(type) {
    currentFilter = type;
    
    // Update active tab UI
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    renderWOList();
}

function renderWOList() {
    const grid = document.getElementById('woGrid');
    grid.innerHTML = '';

    const filtered = workOrders.filter(wo => {
        if (currentFilter === 'all') return true;
        return wo.type === currentFilter;
    });

    filtered.forEach(wo => {
        let statusClass = '';
        let statusLabel = '';
        let badgeClass = '';

        switch(wo.status) {
            case 'in_process':
                statusClass = 'status-process';
                statusLabel = 'In Process';
                badgeClass = 'badge-process';
                break;
            case 'shipped':
                statusClass = 'status-shipped';
                statusLabel = 'Shipped';
                badgeClass = 'badge-shipped';
                break;
            case 'arrived':
                statusClass = 'status-arrived';
                statusLabel = 'Arrived';
                badgeClass = 'badge-arrived';
                break;
        }

        const iconType = wo.type === 'jahit' ? '<i class="fas fa-tshirt"></i>' : '<i class="fas fa-scroll"></i>';

        const card = `
            <div class="wo-card ${statusClass}" onclick="openDetail('${wo.id}')">
                <div class="wo-header">
                    <span class="wo-id">${wo.id}</span>
                    <span class="wo-badge ${badgeClass}">${statusLabel}</span>
                </div>
                <div class="wo-body">
                    <p><strong>${wo.vendor}</strong></p>
                    <p><i class="far fa-calendar-alt"></i> Exp: ${wo.expected}</p>
                    <p class="text-muted" style="font-size:11px;">${wo.items.length} Tipe Item</p>
                </div>
                <div class="wo-type" title="Tipe: ${wo.type}">
                    ${iconType}
                </div>
            </div>
        `;
        grid.innerHTML += card;
    });
}

function searchWO() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const cards = document.querySelectorAll('.wo-card');

    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(query) ? 'block' : 'none';
    });
}

// --- DETAIL & MODAL LOGIC --- //

let currentWO = null;

function openDetail(woId, isHistory = false) {
    // Cari di Active list dulu, kalo gak ada cari di History list
    currentWO = workOrders.find(w => w.id === woId);
    if(!currentWO) {
        currentWO = historyData.find(w => w.id === woId);
    }
    
    if(!currentWO) return;

    // ... (Kodingan set text Header Modal BIARKAN SAMA) ...
    document.getElementById('modalWoTitle').innerText = currentWO.id;
    document.getElementById('modalVendor').innerText = `Vendor: ${currentWO.vendor}`;
    document.getElementById('modalDate').innerText = currentWO.date;
    document.getElementById('modalExpected').innerText = currentWO.expected;
    document.getElementById('modalType').innerText = currentWO.type;
    document.getElementById('modalAddress').innerText = currentWO.address;

    // Set Badge
    const badge = document.getElementById('modalStatusBadge');
    badge.className = 'status-badge'; 
    if(currentWO.status === 'received') {
        badge.innerText = 'RECEIVED';
        badge.classList.add('badge-received');
    } else {
        badge.innerText = currentWO.status.replace('_', ' ').toUpperCase();
        if(currentWO.status === 'in_process') badge.classList.add('badge-process');
        else if(currentWO.status === 'shipped') badge.classList.add('badge-shipped');
        else if(currentWO.status === 'arrived') badge.classList.add('badge-arrived');
    }

    renderItems(currentWO);
    renderFooterActions(currentWO);

    document.getElementById('woModal').style.display = 'block';
}

function renderItems(wo) {
    const container = document.getElementById('modalItemsContainer');
    container.innerHTML = '';
    const isEditable = wo.status === 'arrived';

    wo.items.forEach((item, index) => {
        let contentHtml = '';

        if(wo.type === 'jahit') {
            // LOGIC FOR WO JAHIT (VARIANTS)
            let totalQty = item.variants.reduce((acc, v) => acc + v.qty, 0);
            
            let variantRows = '';
            item.variants.forEach((v, vIndex) => {
                variantRows += `
                    <tr>
                        <td>${v.color} - ${v.size}</td>
                        <td style="font-weight:bold;">${v.qty}</td>
                        <td>
                            <input type="number" class="qc-input" value="${v.received}" 
                            ${isEditable ? '' : 'disabled'} onchange="updateQC('jahit', ${index}, ${vIndex}, 'received', this.value)">
                        </td>
                        <td>
                            <input type="number" class="qc-input input-good" value="${v.good}" 
                            ${isEditable ? '' : 'disabled'} onchange="updateQC('jahit', ${index}, ${vIndex}, 'good', this.value)">
                        </td>
                        <td>
                            <input type="number" class="qc-input input-rejected" value="${v.rejected}" 
                            ${isEditable ? '' : 'disabled'} onchange="updateQC('jahit', ${index}, ${vIndex}, 'rejected', this.value)">
                        </td>
                    </tr>
                `;
            });

            contentHtml = `
                <div class="item-section">
                    <div class="product-header">
                        <img src="${item.img}" class="product-img" alt="Produk">
                        <div class="product-info">
                            <h4>${item.name}</h4>
                            <p class="text-muted">Total Order: ${totalQty} Pcs</p>
                        </div>
                    </div>
                    <table class="qc-table">
                        <thead>
                            <tr>
                                <th width="30%">Varian</th>
                                <th width="10%">Ord</th>
                                <th width="20%">Rcvd</th>
                                <th width="20%">Good</th>
                                <th width="20%">Reject</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${variantRows}
                        </tbody>
                    </table>
                </div>
            `;
        } else {
            // LOGIC FOR WO KAIN (BAHAN BAKU)
            contentHtml = `
                <div class="item-section">
                    <div class="product-header">
                        <img src="${item.img}" class="product-img" alt="Kain">
                        <div class="product-info">
                            <h4>${item.name}</h4>
                            <p class="text-muted">Motif: ${item.motif}</p>
                        </div>
                    </div>
                    <table class="qc-table">
                        <thead>
                            <tr>
                                <th width="30%">Satuan</th>
                                <th width="10%">Ord</th>
                                <th width="20%">Rcvd</th>
                                <th width="20%">Good</th>
                                <th width="20%">Reject</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${item.unit}</td>
                                <td style="font-weight:bold;">${item.qty_ordered}</td>
                                <td>
                                    <input type="number" class="qc-input" value="${item.received}" 
                                    ${isEditable ? '' : 'disabled'} onchange="updateQC('kain', ${index}, 0, 'received', this.value)">
                                </td>
                                <td>
                                    <input type="number" class="qc-input input-good" value="${item.good}" 
                                    ${isEditable ? '' : 'disabled'} onchange="updateQC('kain', ${index}, 0, 'good', this.value)">
                                </td>
                                <td>
                                    <input type="number" class="qc-input input-rejected" value="${item.rejected}" 
                                    ${isEditable ? '' : 'disabled'} onchange="updateQC('kain', ${index}, 0, 'rejected', this.value)">
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            `;
        }

        container.innerHTML += contentHtml;
    });
}

function renderFooterActions(wo) {
    const footer = document.getElementById('modalFooter');
    footer.innerHTML = '';

    if (wo.status === 'in_process') {
        footer.innerHTML = '<span class="text-muted" style="font-size:12px;">Menunggu Vendor mengirim barang...</span>';
    } else if (wo.status === 'shipped') {
        footer.innerHTML = `
            <button class="btn-secondary" onclick="closeModal()">Tutup</button>
            <button class="btn-primary" onclick="confirmArrival('${wo.id}')">Konfirmasi Tiba</button>
        `;
    } else if (wo.status === 'arrived') {
        footer.innerHTML = `
            <button class="btn-secondary" onclick="closeModal()">Batal</button>
            <button class="btn-primary" onclick="submitQC('${wo.id}')">Simpan & Selesai</button>
        `;
    } else if (wo.status === 'received') {
        // INI TAMBAHAN UNTUK HISTORY
        footer.innerHTML = `
            <button class="btn-secondary" onclick="closeModal()">Tutup</button>
            <button class="btn-primary" onclick="alert('Print PDF...')"><i class="fas fa-print"></i> Cetak Laporan</button>
        `;
    }
}

// --- ACTION HANDLERS --- //

function confirmArrival(woId) {
    if(confirm('Apakah fisik barang sudah sampai di gudang? Status akan berubah menjadi Arrived.')) {
        // Update data dummy
        const wo = workOrders.find(w => w.id === woId);
        wo.status = 'arrived';
        
        // Refresh UI
        alert('Status berhasil diupdate! Silakan input hasil QC.');
        openDetail(woId); // Re-render modal to show input fields
        renderWOList(); // Refresh background list
    }
}

function updateQC(type, itemIndex, variantIndex, field, value) {
    if(!currentWO) return;
    const val = parseInt(value) || 0;

    if(type === 'jahit') {
        currentWO.items[itemIndex].variants[variantIndex][field] = val;
    } else {
        currentWO.items[itemIndex][field] = val;
    }
}

function submitQC(woId) {
    if(confirm(`Simpan laporan QC untuk ${woId}? Data akan dipindahkan ke Riwayat Log.`)) {
        
        // 1. Cari index data di workOrders
        const index = workOrders.findIndex(w => w.id === woId);
        
        if (index > -1) {
            // 2. Ambil datanya
            const completedWO = workOrders[index];
            
            // 3. Update status & tambah tanggal selesai
            completedWO.status = 'received';
            completedWO.submitDate = new Date().toISOString().split('T')[0]; // Format YYYY-MM-DD
            
            // 4. Pindahkan ke Array History
            historyData.push(completedWO);
            
            // 5. Hapus dari Array Active
            workOrders.splice(index, 1);
            
            // 6. Refresh Tampilan
            renderWOList(); // Refresh halaman aktif
            closeModal();
            
            // Opsional: Langsung lempar user ke halaman history
            switchPage('history');
            
            alert('Sukses! WO telah diproses dan masuk ke Log.');
        }
    }
}

function closeModal() {
    document.getElementById('woModal').style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == document.getElementById('woModal')) {
        closeModal();
    }
}

// Init
init();

// --- LOGIC SPA & HISTORY --- //

function switchPage(page) {
    // 1. Ganti Tampilan Konten
    if(page === 'active') {
        document.getElementById('view-active').style.display = 'block';
        document.getElementById('view-history').style.display = 'none';
        document.getElementById('pageTitle').innerText = 'Inbound & QC Portal';
    } else {
        document.getElementById('view-active').style.display = 'none';
        document.getElementById('view-history').style.display = 'block';
        document.getElementById('pageTitle').innerText = 'Riwayat Log Penerimaan';
        renderHistory(); // Render data saat buka halaman
    }

    // 2. Ganti Active State di Sidebar
    document.querySelectorAll('.nav-links li').forEach(li => li.classList.remove('active'));
    document.getElementById('nav-' + page).classList.add('active');
}

function filterHistory(type, btnElement) {
    histTypeFilter = type;
    
    // UI Button Active
    if(btnElement) {
        const buttons = btnElement.parentElement.querySelectorAll('.filter-btn');
        buttons.forEach(b => b.classList.remove('active'));
        btnElement.classList.add('active');
    }
    
    renderHistory();
}

function renderHistory() {
    const grid = document.getElementById('historyGrid');
    const startDate = document.getElementById('histStart').value;
    const endDate = document.getElementById('histEnd').value;
    
    grid.innerHTML = '';

    const filtered = historyData.filter(item => {
        // Filter Type
        const matchType = (histTypeFilter === 'all') || (item.type === histTypeFilter);
        
        // Filter Date (Berdasarkan submitDate)
        let matchDate = true;
        if (startDate && item.submitDate < startDate) matchDate = false;
        if (endDate && item.submitDate > endDate) matchDate = false;

        return matchType && matchDate;
    });

    if(filtered.length === 0) {
        grid.innerHTML = '<p style="color:#aaa; width:100%; text-align:center;">Tidak ada data riwayat.</p>';
        return;
    }

    filtered.forEach(wo => {
        const iconType = wo.type === 'jahit' ? '<i class="fas fa-tshirt"></i>' : '<i class="fas fa-scroll"></i>';
        
        // Kita pakai openDetail yg lama, tapi nanti kita adjust isinya dikit biar read-only
        const card = `
            <div class="wo-card status-received" onclick="openDetail('${wo.id}', true)"> 
                <div class="wo-header">
                    <span class="wo-id">${wo.id}</span>
                    <span class="wo-badge badge-received">Selesai</span>
                </div>
                <div class="wo-body">
                    <p><strong>${wo.vendor}</strong></p>
                    <p style="font-size:12px; color:var(--success); font-weight:500;">
                        <i class="fas fa-check-double"></i> Selesai: ${wo.submitDate}
                    </p>
                </div>
                <div class="wo-type" style="color:#eee;">${iconType}</div>
            </div>
        `;
        grid.innerHTML += card;
    });
}