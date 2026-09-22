// --- NAVIGASI ---
function showPage(pageId) {
    // Sembunyikan semua section
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => section.classList.add('hidden'));

    // Tampilkan section target
    document.getElementById(pageId).classList.remove('hidden');

    // Update judul
    const titles = {
        'dashboard': 'Dashboard',
        'pos': 'Kasir (POS)',
        'history': 'Riwayat Transaksi',
        'shift': 'Tutup Shift'
    };
    document.getElementById('pageTitle').innerText = titles[pageId];

    // Update Active Sidebar
    const navItems = document.querySelectorAll('.nav-links li');
    navItems.forEach(item => item.classList.remove('active'));
    
    document.getElementById(`nav-${pageId}`).classList.add('active');
}

// --- DATA DUMMY ---
// Menambahkan properti warna dan kategori
const products = [
    { 
        id: 1, 
        name: "Setala Shirt", 
        price: 269000, 
        img: "setalashirt.jpeg", 
        collection: "Setala", 
        category: "Shirt", 
        userType: "Men", 
        colors: ["#000000", "#000080"]
    },
    { 
        id: 2, 
        name: "Kala Shirt Longsleeve", 
        price: 259000, 
        img: "kalashirtlongsleeve.png", 
        collection: "Kala", 
        category: "Shirt", 
        userType: "Men", 
        colors: ["#000000", "#1e48c7ff", "#FFFDD0"] 
    },
    { 
        id: 3, 
        name: "Arkana Embroidery Vest", 
        price: 329000, 
        img: "arkanaembroideryvest.png", 
        collection: "Arkana", 
        category: "Outer", 
        userType: "Women", 
        colors: ["#000000", "#101060ff", "#FFFDD0"] 
    },
    { 
        id: 4, 
        name: "Aksata Vest Lace", 
        price: 449000, 
        img: "aksatavestlace.png", 
        collection: "Aksata", 
        category: "Outer", 
        userType: "Women", 
        colors: ["#000080", "#000000", "#FFFFF0", "#808080"] 
    },
    { 
        id: 5, 
        name: "Obi Belt", 
        price: 79000, 
        img: "obibelt.jpeg", 
        collection: "Obi", 
        category: "Accessories", 
        userType: "Women", 
        colors: ["#000000", "#A52A2A", "#f0e461ff", "#1e48c7ff"] 
    },
    { 
        id: 6, 
        name: "Suar Bucket Hat", 
        price: 149000, 
        img: "suarbuckethat.jpeg", 
        collection: "Suar", 
        category: "Accessories", 
        userType: "Men", 
        colors: ["#000000", "#A52A2A", "#FFFFF0", "#808000"] 
    }
];

// State Variables
let cart = [];
let currentProduct = null;
let currentVariant = { size: 'M', color: '' }; // Default
let customerType = 'Reguler';   
let selectedPaymentMethod = 'Cash';

// --- POS LOGIC ---

// 1. Render Produk ke Grid
function renderProducts() {
    // Ambil nilai dari dropdown filter (jika ada)
    const filterColl = document.getElementById('filterCollection') ? document.getElementById('filterCollection').value : 'all';
    const filterCat = document.getElementById('filterCategory') ? document.getElementById('filterCategory').value : 'all';
    const filterUser = document.getElementById('filterUserType') ? document.getElementById('filterUserType').value : 'all';
    
    // Ambil nilai search
    const searchTerm = document.getElementById('skuInput').value.toLowerCase();

    const grid = document.getElementById('productGrid');
    grid.innerHTML = '';
    
    // Logika Filter Baru
    const filtered = products.filter(prod => {
        const matchColl = filterColl === 'all' || prod.collection === filterColl;
        const matchCat = filterCat === 'all' || prod.category === filterCat;
        const matchUser = filterUser === 'all' || prod.userType === filterUser;
        const matchSearch = prod.name.toLowerCase().includes(searchTerm);
        
        return matchColl && matchCat && matchUser && matchSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = '<p class="text-muted" style="grid-column: 1/-1; text-align:center;">Produk tidak ditemukan.</p>';
        return;
    }

    filtered.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.onclick = () => openVariantModal(prod);
        
        card.innerHTML = `
            <img src="../gambar/${prod.img}" alt="${prod.name}" class="product-img" onerror="this.src='https://via.placeholder.com/150?text=No+Image'">

            <div class="product-info">
                <div style="font-size: 0.75rem; color: #888; margin-bottom: 4px;">
                    ${prod.userType} • ${prod.collection}
                </div>
                <h4>${prod.name}</h4>
                <p>Rp ${prod.price.toLocaleString('id-ID')}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

function filterCategory(cat, btn) {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const searchVal = document.getElementById('skuInput').value;
    renderProducts(cat, searchVal);
}

function filterProducts() {
    renderProducts();
}

// 2. Modal Varian (Warna & Size)
function openVariantModal(product) {
    currentProduct = product;
    currentVariant = { size: 'M', color: product.colors[0] }; // Reset default
    document.getElementById('modalQty').value = 1;

    document.getElementById('modalProdName').innerText = product.name;
    document.getElementById('modalProdPrice').innerText = 'Rp ' + product.price.toLocaleString('id-ID');
    
    // Render Warna
    const colorContainer = document.getElementById('colorContainer');
    colorContainer.innerHTML = '';
    product.colors.forEach((col, index) => {
        const btn = document.createElement('div');
        btn.className = `color-btn ${index === 0 ? 'active' : ''}`;
        btn.style.backgroundColor = col;
        btn.onclick = () => selectColor(btn, col);
        colorContainer.appendChild(btn);
    });

    // Reset Size UI
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.size-btn:nth-child(2)').classList.add('active'); // Default M

    document.getElementById('variantModal').classList.remove('hidden');
}

function selectColor(btn, colorHex) {
    document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentVariant.color = colorHex;
}

function selectSize(btn) {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentVariant.size = btn.innerText;
}

function adjustModalQty(delta) {
    const input = document.getElementById('modalQty');
    let val = parseInt(input.value) + delta;
    if(val < 1) val = 1;
    input.value = val;
}

function confirmAddToCart() {
    const qty = parseInt(document.getElementById('modalQty').value);
    
    // Create unique key for cart item based on Product ID + Variant
    const uniqueId = `${currentProduct.id}-${currentVariant.size}-${currentVariant.color}`;
    
    const existing = cart.find(item => item.uniqueId === uniqueId);
    
    if(existing) {
        existing.qty += qty;
    } else {
        cart.push({ 
            ...currentProduct, 
            uniqueId: uniqueId,
            size: currentVariant.size, 
            color: currentVariant.color,
            qty: qty 
        });
    }

    updateCartUI();
    closeModal('variantModal');
}

// 3. UI Keranjang
function updateCartUI() {
    const cartContainer = document.getElementById('cartItems');
    cartContainer.innerHTML = '';
    let subtotal = 0;

    if(cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-shopping-basket fa-3x"></i>
                <p>Belum ada barang</p>
            </div>`;
    } else {
        cart.forEach((item, index) => {
            subtotal += item.price * item.qty;
            
            // Konversi hex warna ke nama sederhana untuk display (simulasi)
            let colorDisplay = `<span style="display:inline-block; width:12px; height:12px; background:${item.color}; border-radius:50%; border:1px solid #ccc;"></span>`;

            const row = document.createElement('div');
            row.className = 'cart-item';
            row.innerHTML = `
                <div>
                    <strong>${item.name}</strong> <br>
                    <small class="text-muted">Size: ${item.size} | Warna: ${colorDisplay}</small><br>
                    <small>@ Rp ${item.price.toLocaleString()}</small>
                </div>
                <div class="item-qty">
                    <button class="btn-qty" onclick="changeCartQty(${index}, -1)">-</button>
                    <span style="font-weight:600; min-width:20px; text-align:center;">${item.qty}</span>
                    <button class="btn-qty" onclick="changeCartQty(${index}, 1)">+</button>
                    <button class="btn-trash" onclick="removeCartItem(${index})"><i class="fas fa-trash"></i></button>
                </div>
            `;
            cartContainer.appendChild(row);
        });
    }

    // Hitung Diskon
    let discount = 0;
    if(customerType.includes('Member')) {
        discount = subtotal * 0.05; // 5% member discount
    }

    const total = subtotal - discount;

    document.getElementById('cartSubtotal').innerText = 'Rp ' + subtotal.toLocaleString('id-ID');
    document.getElementById('cartDiscount').innerText = '- Rp ' + discount.toLocaleString('id-ID');
    document.getElementById('cartTotal').innerText = 'Rp ' + total.toLocaleString('id-ID');
    
    // Simpan total ke variable global untuk modal bayar
    window.currentCartTotal = total;
}

function changeCartQty(index, delta) {
    cart[index].qty += delta;
    if(cart[index].qty <= 0) cart.splice(index, 1);
    updateCartUI();
}

function removeCartItem(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function resetCart() {
    cart = [];
    customerType = 'Reguler';
    document.getElementById('customerTypeBadge').innerText = customerType;
    document.getElementById('customerTypeBadge').style.background = '#eee';
    document.getElementById('customerTypeBadge').style.color = '#555';
    // Munculkan modal customer lagi
    document.getElementById('customerModal').classList.remove('hidden');
    // Hide member input just in case
    document.getElementById('memberInputArea').classList.add('hidden');
    updateCartUI();
}

// --- MANAJEMEN CUSTOMER ---
function setCustomer(type) {
    customerType = type;
    document.getElementById('customerTypeBadge').innerText = type;
    if(type.includes('Member')) {
        document.getElementById('customerTypeBadge').style.background = '#CF5306'; // Primary
        document.getElementById('customerTypeBadge').style.color = 'white';
    }
    closeModal('customerModal');
    updateCartUI();
}

function showMemberInput() {
    document.getElementById('memberInputArea').classList.remove('hidden');
}

function validateMember() {
    const val = document.getElementById('memberField').value;
    if(val.length > 3) {
        setCustomer('Member (Budi)');
    } else {
        alert('ID Member tidak valid!');
    }
}

// --- LOGIKA PEMBAYARAN ---
function openPaymentModal() {
    if(cart.length === 0) return alert('Keranjang masih kosong!');
    
    // Reset modal state
    selectPaymentMethod('Cash');
    document.getElementById('cashReceived').value = '';
    document.getElementById('cashChangeDisplay').innerText = 'Rp 0';
    document.getElementById('payModalTotal').innerText = document.getElementById('cartTotal').innerText;
    
    document.getElementById('paymentModal').classList.remove('hidden');
}

function selectPaymentMethod(method) {
    selectedPaymentMethod = method;
    document.querySelectorAll('.method-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(`btn${method}`).classList.add('active');

    // Show/Hide Cash Input Area
    if(method === 'Cash') {
        document.getElementById('cashLogicArea').classList.remove('hidden');
    } else {
        document.getElementById('cashLogicArea').classList.add('hidden');
    }
}

function calculateChange() {
    const received = parseFloat(document.getElementById('cashReceived').value) || 0;
    const total = window.currentCartTotal;
    const change = received - total;

    const display = document.getElementById('cashChangeDisplay');
    if(change >= 0) {
        display.innerText = 'Rp ' + change.toLocaleString('id-ID');
        display.style.color = '#27ae60';
    } else {
        display.innerText = 'Kurang Rp ' + Math.abs(change).toLocaleString('id-ID');
        display.style.color = '#e74c3c';
    }
}

function setCashAmount(amount) {
    if(amount === 'exact') {
        document.getElementById('cashReceived').value = window.currentCartTotal;
    } else {
        document.getElementById('cashReceived').value = amount;
    }
    calculateChange();
}

function finalizePayment() {
    if(selectedPaymentMethod === 'Cash') {
        const received = parseFloat(document.getElementById('cashReceived').value) || 0;
        if(received < window.currentCartTotal) {
            return alert('Uang tunai kurang!');
        }
    }

    // Simulasi Berhasil
    alert(`Pembayaran ${selectedPaymentMethod} Berhasil! \nStruk sedang dicetak...`);
    
    // Tambahkan ke History Dummy (Hanya di memory browser)
    addDummyHistory();

    closeModal('paymentModal');
    resetCart(); // Kembali ke transaksi baru
    showPage('dashboard'); // Opsional: Balik ke dashboard atau stay di POS
}

// --- RIWAYAT TRANSAKSI (DUMMY DATA & LOGIC) ---
// Kita simpan dummy data di variabel global agar bisa ditambah
let transactionHistory = [
    {
        time: '10:15', trxId: 'TRX-9981',
        // Total item tetap 2
        totalItem: 2,
        method: 'Tunai',
        // Total Baru: 269.000 (Setala) + 329.000 (Arkana) = 598.000
        totalBayar: 598000,
        // Kita sesuaikan uang yang diterima agar logis
        cashReceived: 600000,
        change: 2000, // 600.000 - 598.000
        items: [
            // GANTI PRODUK LAMA DENGAN PRODUK BARU
            {
                name: 'Setala Shirt', // Produk ID 1
                variant: 'L - #000000 (Hitam)', // Varian contoh
                qty: 1,
                sub: 269000 // Harga sesuai data produk baru
            },
            {
                name: 'Arkana Embroidery Vest', // Produk ID 3
                variant: 'M - #101060ff (Navy)', // Varian contoh
                qty: 1,
                sub: 329000 // Harga sesuai data produk baru
            }
        ]
    },
    {
        time: '10:45', trxId: 'TRX-9982',
        totalItem: 1,
        method: 'QRIS',
        // Total Baru: Harga Obi Belt
        totalBayar: 79000,
        // QRIS tidak ada cash/change
        items: [
            // GANTI PRODUK LAMA DENGAN PRODUK BARU
            {
                name: 'Obi Belt', // Produk ID 5
                variant: 'All Size - #A52A2A (Coklat)', // Varian contoh
                qty: 1,
                sub: 79000 // Harga sesuai data produk baru
            }
        ]
    }
];

function addDummyHistory() {
    // Convert current cart to history format
    const now = new Date();
    const timeString = `${now.getHours()}:${now.getMinutes()}`;
    const newTrxId = `TRX-${Math.floor(1000 + Math.random() * 9000)}`;
    
    const itemsDetail = cart.map(c => ({
        name: c.name,
        variant: `${c.size}`, // Simplifikasi
        qty: c.qty,
        sub: c.price * c.qty
    }));

    let cashRec = 0;
    let change = 0;
    if(selectedPaymentMethod === 'Cash') {
        cashRec = parseFloat(document.getElementById('cashReceived').value);
        change = cashRec - window.currentCartTotal;
    }

    transactionHistory.unshift({
        time: timeString,
        trxId: newTrxId,
        totalItem: cart.reduce((a,b)=>a+b.qty,0),
        method: selectedPaymentMethod,
        totalBayar: window.currentCartTotal,
        cashReceived: cashRec,
        change: change,
        items: itemsDetail
    });
}

function renderHistoryDummy() {
    const tbody = document.getElementById('historyTableBody');
    tbody.innerHTML = '';
    
    transactionHistory.forEach(d => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${d.time}</td>
            <td><strong>${d.trxId}</strong></td>
            <td>${d.totalItem} Item</td>
            <td><span class="badge ${d.method === 'Tunai' ? 'success' : 'warning'}">${d.method}</span></td>
            <td>Rp ${d.totalBayar.toLocaleString()}</td>
            <td><button class="btn-outline" style="padding:5px 10px; font-size:0.8rem;" onclick="openTransactionDetail('${d.trxId}')">View</button></td>
        `;
        tbody.appendChild(tr);
    });
}

function openTransactionDetail(trxId) {
    const trx = transactionHistory.find(t => t.trxId === trxId);
    if(!trx) return;

    // 1. Set Header Modal
    const headerHTML = `
        <div class="modal-header">
            <div>
                <h3>Detail Transaksi</h3>
                <span class="trx-id">#${trx.trxId}</span>
            </div>
            <span class="badge ${trx.method === 'Tunai' ? 'success' : 'warning'}" 
                  style="font-size: 0.9rem; padding: 6px 12px;">
                  Selesai
            </span>
        </div>
    `;

    // 2. Generate Item List (Tabel)
    let itemsHTML = '';
    trx.items.forEach(item => {
        itemsHTML += `
            <tr>
                <td>
                    <strong>${item.name}</strong>
                    <span class="detail-variant">${item.variant}</span>
                </td>
                <td>x${item.qty}</td>
                <td>Rp ${item.sub.toLocaleString('id-ID')}</td>
            </tr>
        `;
    });

    // 3. Generate Summary Section
    // Cek apakah Tunai untuk menampilkan kembalian
    let cashDetails = '';
    if(trx.method === 'Tunai') {
        cashDetails = `
            <div class="math-row text-muted"><span>Tunai Diterima</span> <span>Rp ${(trx.cashReceived || 0).toLocaleString()}</span></div>
            <div class="math-row text-muted"><span>Kembalian</span> <span class="text-success">Rp ${(trx.change || 0).toLocaleString()}</span></div>
        `;
    }

    const summaryHTML = `
        <div class="bill-summary">
            <div class="bill-info">
                <div>Waktu: <strong>${trx.time}</strong></div>
                <div>Metode Bayar: <strong>${trx.method}</strong></div>
                <div>Kasir: <strong>Budi Santoso</strong></div>
            </div>
            <div class="bill-math">
                <div class="math-row"><span>Total Item</span> <strong>${trx.totalItem}</strong></div>
                <div class="math-row"><span>Subtotal</span> <strong>Rp ${trx.totalBayar.toLocaleString()}</strong></div>
                <div class="math-row total">
                    <span>Total Bayar</span>
                    <span>Rp ${trx.totalBayar.toLocaleString()}</span>
                </div>
                ${cashDetails}
            </div>
        </div>
    `;

    // 4. Masukkan ke dalam Modal Content
    const modalBody = document.querySelector('#transactionDetailModal .modal-content');
    
    // Kita replace isi modal kecuali tombol close dan tombol aksi di bawah
    // Tips: Agar tombol close fungsi, kita tetap pertahankan strukturnya
    modalBody.innerHTML = `
        <span class="close-btn" onclick="closeModal('transactionDetailModal')">&times;</span>
        ${headerHTML}
        
        <div class="detail-table-wrapper">
            <table class="detail-table">
                <thead>
                    <tr>
                        <th style="width: 50%">Item & Varian</th>
                        <th style="width: 15%">Qty</th>
                        <th style="width: 35%">Subtotal</th>
                    </tr>
                </thead>
                <tbody>
                    ${itemsHTML}
                </tbody>
            </table>
        </div>

        ${summaryHTML}

        <button class="btn-danger full-width mt-3" onclick="openReturnForm()">
            <i class="fas fa-undo"></i> Proses Retur Barang
        </button>
        
        <span id="returnTrxId" class="hidden">${trxId}</span>
    `;

    document.getElementById('transactionDetailModal').classList.remove('hidden');
}

// --- FITUR RETUR ---
function openReturnForm() {
    // 1. Ambil data transaksi saat ini
    const trxId = document.getElementById('returnTrxId').innerText;
    const trx = transactionHistory.find(t => t.trxId === trxId);
    
    // 2. Target container list
    const listContainer = document.getElementById('returnItemsList');
    listContainer.innerHTML = ''; // Kosongkan dulu
    
    if(!trx) return;

    // 3. Loop setiap item dalam transaksi & buat baris HTML
    trx.items.forEach((item, index) => {
        const itemRow = document.createElement('div');
        itemRow.className = 'return-item-row';
        
        // Buat ID unik untuk checkbox agar logicnya mudah
        const checkId = `retur-check-${index}`;
        const detailId = `retur-detail-${index}`;

        itemRow.innerHTML = `
            <div class="return-item-header">
                <input type="checkbox" class="return-checkbox" id="${checkId}" onchange="toggleReturnDetail('${detailId}', this)">
                <label for="${checkId}" class="return-item-name pointer">
                    ${item.name} <span style="font-size:0.85rem; color:#666">(${item.variant})</span>
                </label>
                <span class="return-item-qty">Qty: ${item.qty}</span>
            </div>

            <div id="${detailId}" class="return-item-details">
                <label class="small-label">Jumlah Retur:</label>
                <input type="number" class="input-field retur-qty-input" value="${item.qty}" max="${item.qty}" min="1" style="padding: 5px;">
                
                <label class="small-label">Alasan:</label>
                <select class="input-field retur-reason" style="padding: 8px;">
                    <option>Cacat Produk (Noda/Sobek)</option>
                    <option>Salah Ukuran (Tukar Size)</option>
                    <option>Warna Luntur</option>
                    <option>Salah Kirim Barang</option>
                    <option>Lainnya</option>
                </select>

                <label class="small-label">Solusi:</label>
                <select class="input-field retur-solution" style="padding: 8px;">
                    <option>Tukar Barang Baru</option>
                    <option>Refund Uang</option>
                </select>
            </div>
        `;
        listContainer.appendChild(itemRow);
    });

    closeModal('transactionDetailModal'); 
    document.getElementById('returnFormModal').classList.remove('hidden');
}

// Fungsi helper untuk Show/Hide detail saat checkbox diklik
function toggleReturnDetail(elementId, checkbox) {
    const detailBox = document.getElementById(elementId);
    if (checkbox.checked) {
        detailBox.classList.add('active');
    } else {
        detailBox.classList.remove('active');
    }
}

function confirmReturn() {
    // 1. Cari semua barang yang dicentang
    const checkedItems = document.querySelectorAll('.return-checkbox:checked');
    
    if (checkedItems.length === 0) {
        return alert('Pilih setidaknya satu barang untuk diretur!');
    }

    // 2. Kumpulkan datanya (Simulasi)
    let summaryText = "Konfirmasi Retur:\n";
    
    checkedItems.forEach(box => {
        // Naik ke parent row untuk mencari input reason & solution
        const row = box.closest('.return-item-row');
        const name = row.querySelector('.return-item-name').innerText;
        const reason = row.querySelector('.retur-reason').value;
        const solution = row.querySelector('.retur-solution').value;
        const qty = row.querySelector('.retur-qty-input').value;

        summaryText += `- ${name} (x${qty})\n  Alasan: ${reason}\n  Solusi: ${solution}\n\n`;
    });

    // 3. Eksekusi
    if(confirm(summaryText + "Proses sekarang?")) {
        alert('Retur berhasil diproses & Stok telah diperbarui!');
        closeModal('returnFormModal');
        // Di sini nanti bisa tambahkan logic update stok ke backend
    }
}

// --- UTILITIES ---
function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}

function openCloseShiftModal() {
    document.getElementById('closeShiftModal').classList.remove('hidden');
}

// --- INIT ---
window.onload = function() {
    // Setup awal
    showPage('dashboard');
    renderProducts();
    renderHistoryDummy();
};