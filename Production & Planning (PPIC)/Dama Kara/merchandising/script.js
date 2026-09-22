// --- NAVIGATION LOGIC ---
function showPage(pageId) {
    document.querySelectorAll('.page-section').forEach(el => el.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
    
    const titles = {
        'dashboard': 'Dashboard Merchandising',
        'products': 'Kelola Katalog & Produk',
        'custom-order': 'Custom Order Journey'
    };
    document.getElementById('page-title').innerText = titles[pageId];

    document.querySelectorAll('.nav-links li').forEach(el => el.classList.remove('active'));
    const activeNav = document.getElementById(`nav-${pageId}`);
    if(activeNav) activeNav.classList.add('active');

    if(pageId === 'products') renderProductTable();

    if(pageId === 'custom-order') {
        toggleCoView('monitor');
    }
}

// --- NEW: CUSTOM ORDER MONITORING LOGIC ---

// 1. Fungsi Toggle View (Monitor vs Form)
// BUKA FILE: script.js

// BUKA FILE: script.js

// BUKA FILE: script.js

function toggleCoView(viewName) {
    const monitorView = document.getElementById('co-monitoring-view');
    const formView = document.getElementById('co-form-view');

    if(viewName === 'form') {
        monitorView.classList.add('hidden');
        formView.classList.remove('hidden');
        
        // Reset langkah ke 1
        coNextStep(1); 
        
        // --- LOGIC BARU: CEK & ISI JIKA KOSONG ---
        const container = document.getElementById('co-products-container');
        
        // Jika HTML kosong (karena sudah dihapus tadi), JS akan membuatkan kartu baru
        if(container.innerHTML.trim() === '') {
            addCoProductCard();
        }
        // ------------------------------------------

    } else {
        formView.classList.add('hidden');
        monitorView.classList.remove('hidden');
        renderCoMonitor(); 
    }
}

// 2. Fungsi Render Card Monitoring
// FILE: script.js

function renderCoMonitor() {
    const container = document.getElementById('co-card-grid');
    const emptyState = document.getElementById('co-empty-state');
    const searchVal = document.getElementById('coSearch').value.toLowerCase();
    const filterVal = document.getElementById('coFilterStatus').value;

    container.innerHTML = '';
    let hasData = false;

    customOrdersData.forEach(order => {
        // Logic Filter
        const matchSearch = order.client.project.toLowerCase().includes(searchVal) || 
                            order.client.name.toLowerCase().includes(searchVal) || 
                            order.id.toLowerCase().includes(searchVal);
        
        let matchStatus = true;
        if(filterVal === 'history') {
            matchStatus = order.status === 'Selesai' || order.status === 'Shipped' || order.status === 'Batal';
        } else if (filterVal !== 'all') {
            matchStatus = order.status === filterVal;
        } else {
            matchStatus = order.status !== 'Selesai' && order.status !== 'Shipped' && order.status !== 'Batal';
        }

        if(matchSearch && matchStatus) {
            hasData = true;

            let statusCardClass = '';
            if(order.status === 'Produksi') statusCardClass = 'status-produksi';
            else if(order.status.includes('Kain')) statusCardClass = 'status-kain';
            else if(order.status === 'Selesai') statusCardClass = 'status-selesai';

            // --- HITUNG TOTAL ITEM & TOTAL PCS DARI STRUKTUR BARU ---
            const totalModels = order.items ? order.items.length : 0;
            let totalQty = 0;
            
            if(order.items) {
                order.items.forEach(item => {
                    if(item.variants) {
                        item.variants.forEach(variant => {
                            if(variant.sizes) {
                                variant.sizes.forEach(s => totalQty += s.qty);
                            }
                        });
                    }
                });
            }
            // --------------------------------------------------------

            const html = `
                <div class="co-mon-card ${statusCardClass}">
                    <div class="co-card-body">
                        <div style="display:flex; justify-content:space-between; align-items:flex-start;">
                            <span class="co-card-id">${order.id}</span>
                            <span class="badge ${order.statusClass}" style="font-size:0.7rem;">${order.status}</span>
                        </div>
                        
                        <h4 class="co-card-title">${order.client.project}</h4>
                        <div class="co-card-client">
                            <i class="fas fa-user-circle text-muted"></i> ${order.client.name}
                        </div>

                        <div style="margin-top: 15px; display: flex; gap: 10px;">
                            <span class="badge-purple" style="font-size:0.75rem;"><i class="fas fa-tshirt"></i> ${totalModels} Model</span>
                            <span class="badge-info" style="font-size:0.75rem;"><i class="fas fa-layer-group"></i> ${totalQty} Pcs</span>
                        </div>
                    </div>
                    <div class="co-card-footer">
                        <div class="co-date-info">
                            <div><i class="far fa-calendar-alt"></i> DL: <strong class="${order.status === 'Selesai' ? 'text-success' : 'text-danger'}">${order.deadline}</strong></div>
                        </div>
                        <button class="btn btn-sm btn-outline" onclick="viewOrderDetail('${order.id}')">Detail <i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
            `;
            container.innerHTML += html;
        }
    });

    if(!hasData) {
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
    }
}

// --- DUMMY DATA ---
// Update: Added 'price' field
let products = [
    { 
        id: 1, sku: 'DMK-001', name: 'Setala Shirt', status: 'Aktif',
        collection: "Setala", category: "Shirt", userType: "Men", price: 269000,
        img: "setalashirt.jpeg",
        variants: [
            { color: 'Hitam', size: 'M', stock: 5 },
            { color: 'Hitam', size: 'L', stock: 20 },
            { color: 'Navy', size: 'XL', stock: 0 }
        ]
    },
    { 
        id: 2, sku: 'DMK-002', name: 'Kala Shirt Longsleeve', status: 'Aktif',
        collection: "Kala", category: "Shirt", userType: "Men", price: 289000,
        img: "kalashirtlongsleeve.png",
        variants: [
            { color: 'Hitam', size: 'M', stock: 12 },
            { color: 'Electric Blue', size: 'L', stock: 8 }
        ]
    },
    { 
        id: 3, sku: 'DMK-003', name: 'Arkana Embroidery Vest', status: 'Aktif',
        collection: "Arkana", category: "Outer", userType: "Women", price: 325000,
        img: "arkanaembroideryvest.png",
        variants: [ 
            { color: 'Navy', size: 'All Size', stock: 15 },
            { color: 'Cream', size: 'All Size', stock: 10 }
        ]
    },
    { 
        id: 4, sku: 'DMK-004', name: 'Aksata Vest Lace', status: 'Aktif',
        collection: "Aksata", category: "Outer", userType: "Women", price: 199000,
        img: "aksatavestlace.png",
        variants: [ 
            { color: 'Navy', size: 'All Size', stock: 4 },
            { color: 'Black', size: 'All Size', stock: 25 }
        ]
    },
    { 
        id: 5, sku: 'DMK-005', name: 'Obi Belt', status: 'Waiting Specs',
        collection: "Obi", category: "Accessories", userType: "Women", price: 89000,
        img: "obibelt.jpeg",
        variants: [ 
            { color: 'Maroon', size: 'All Size', stock: 50 }
        ]
    },
    { 
        id: 6, sku: 'DMK-006', name: 'Suar Bucket Hat', status: 'Aktif',
        collection: "Suar", category: "Accessories", userType: "Men", price: 125000,
        img: "suarbuckethat.jpeg",
        variants: [ 
            { color: 'Terracotta', size: 'All Size', stock: 18 }
        ]
    }
];


// FILE: script.js

// --- DUMMY DATA TERBARU (HIERARKIS) ---
const customOrdersData = [
    {
        id: "CUST-091",
        date: "01 Okt 2025",
        deadline: "20 Okt 2025",
        status: "Produksi",
        statusClass: "badge-warning",
        client: {
            name: "PT Telkom Indonesia",
            contact: "0812-3344-5566",
            email: "procurement@telkom.co.id",
            project: "Seragam Batik Event",
            address: "Jl. Japati No. 1, Bandung"
        },
        // ARRAY ITEM (PRODUK)
        items: [
            {
                name: "Kemeja Pria Lengan Pendek",
                category: "Shirt (Men)",
                designImg: "design_telkom_men.jpg", // Hanya nama file simulasi
                // ARRAY VARIAN WARNA
                variants: [
                    {
                        colorName: "Merah Hati (Official)",
                        // ARRAY SIZE
                        sizes: [
                            { size: "M", qty: 10 },
                            { size: "L", qty: 15 },
                            { size: "XL", qty: 5 }
                        ],
                        // INFO MATERIAL (PER WARNA)
                        materialInfo: {
                            fabricName: "Batik Cap Parang Custom",
                            fabricSource: "Stok Gudang",
                            fabricTotal: 45, // Meter
                            accessories: [
                                { name: "Kancing Logo Telkom", qty: 210, unit: "Pcs" },
                                { name: "Furing Cotton", qty: 30, unit: "Meter" }
                            ]
                        }
                    },
                    {
                        colorName: "Putih Kombinasi",
                        sizes: [
                            { size: "L", qty: 5 },
                            { size: "XL", qty: 5 }
                        ],
                        materialInfo: {
                            fabricName: "Katun Toyobo Putih",
                            fabricSource: "Beli Baru",
                            fabricTotal: 15,
                            accessories: [
                                { name: "Kancing Putih Standar", qty: 80, unit: "Pcs" }
                            ]
                        }
                    }
                ]
            },
            {
                name: "Blouse Wanita",
                category: "Blouse (Women)",
                designImg: "design_telkom_women.jpg",
                variants: [
                    {
                        colorName: "Merah Hati (Official)",
                        sizes: [
                            { size: "M", qty: 10 },
                            { size: "L", qty: 10 }
                        ],
                        materialInfo: {
                            fabricName: "Batik Cap Parang Custom",
                            fabricSource: "Stok Gudang",
                            fabricTotal: 30,
                            accessories: [
                                { name: "Resleting Jepang", qty: 20, unit: "Pcs" }
                            ]
                        }
                    }
                ]
            }
        ]
    },
    {
        id: "CUST-092",
        date: "05 Okt 2025",
        deadline: "25 Okt 2025",
        status: "Menunggu Kain",
        statusClass: "badge-info",
        client: {
            name: "Ibu Ani",
            contact: "0811-9988-777",
            email: "ani.family@gmail.com",
            project: "Kebayoran Family Gathering",
            address: "Kebayoran Baru, Jakarta Selatan"
        },
        items: [
            {
                name: "Kemeja Sarimbit Ayah",
                category: "Shirt (Men)",
                designImg: "-",
                variants: [
                    {
                        colorName: "Sage Green Premium",
                        sizes: [
                            { size: "L", qty: 1 },
                            { size: "XL", qty: 1 }
                        ],
                        materialInfo: {
                            fabricName: "Sutra Viscose Sage",
                            fabricSource: "Request Baru",
                            fabricTotal: 5,
                            accessories: [
                                { name: "Kancing Bungkus", qty: 14, unit: "Pcs" }
                            ]
                        }
                    }
                ]
            },
            {
                name: "Dress Anak",
                category: "Dress (Kids)",
                designImg: "-",
                variants: [
                    {
                        colorName: "Sage Green Premium",
                        sizes: [
                            { size: "4 Th", qty: 1 },
                            { size: "6 Th", qty: 1 }
                        ],
                        materialInfo: {
                            fabricName: "Sutra Viscose Sage",
                            fabricSource: "Request Baru",
                            fabricTotal: 3,
                            accessories: [
                                { name: "Renda Import", qty: 2, unit: "Meter" }
                            ]
                        }
                    }
                ]
            }
        ]
    }
];

// --- PRODUCT MANAGEMENT LOGIC ---

// 1. Render Table with 3 Filters & New Actions
function renderProductTable() {
    const tbody = document.getElementById('product-table-body');
    tbody.innerHTML = '';

    // Ambil nilai filter
    const fColl = document.getElementById('filterColl').value;
    const fCat = document.getElementById('filterCat').value;
    const fUser = document.getElementById('filterUser').value;
    
    products.forEach(p => {
        // Logika Filter
        const matchColl = fColl === 'all' || p.collection === fColl;
        const matchCat = fCat === 'all' || p.category === fCat;
        const matchUser = fUser === 'all' || p.userType === fUser;

        if(!matchColl || !matchCat || !matchUser) return;

        let badgeClass = 'badge-success';
        if(p.status === 'Waiting Specs') badgeClass = 'badge-purple';
        else if(p.status === 'Discontinue') badgeClass = 'badge-warning';

        tbody.innerHTML += `
            <tr>
                <td>
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <img src="../gambar/${p.img}" alt="${p.name}" 
                             style="width: 45px; height: 45px; object-fit: cover; border-radius: 6px; border: 1px solid #eee;"
                             onerror="this.src='https://via.placeholder.com/45?text=No+Img'">
                        <div>
                            <strong>${p.name}</strong>
                            <br>
                            <small class="text-muted">${p.sku}</small>
                        </div>
                    </div>
                </td>
                <td>${p.category}</td>
                <td>${p.collection}</td>
                <td>${p.userType}</td>
                <td><span class="badge ${badgeClass}">${p.status}</span></td>
                <td>
                    <button class="btn-icon" onclick="editProduct(${p.id})" title="Edit Produk"><i class="fas fa-edit"></i></button>
                    <button class="btn-icon" onclick="openDetailModal(${p.id})" title="Lihat Detail"><i class="fas fa-eye"></i></button>
                </td>
            </tr>
        `;
    });
}

// 2. View Detail Logic (Pop-up Mata)
function openDetailModal(id) {
    const p = products.find(x => x.id === id);
    if(!p) return;

    document.getElementById('detailName').innerText = p.name;
    document.getElementById('detailSku').innerText = p.sku;
    document.getElementById('detailCat').innerText = p.category;
    document.getElementById('detailColl').innerText = p.collection;
    document.getElementById('detailUser').innerText = p.userType;
    document.getElementById('detailPrice').innerText = 'Rp ' + p.price.toLocaleString('id-ID');
    document.getElementById('detailImg').src = "../gambar/" + p.img;
    document.getElementById('detailImg').onerror = function() { this.src = 'https://via.placeholder.com/100?text=No+Img'; };

    // Render Varian di Modal
    const vList = document.getElementById('detailVariantList');
    vList.innerHTML = '';
    if(p.variants.length > 0) {
        p.variants.forEach(v => {
            vList.innerHTML += `
                <div style="display:flex; justify-content:space-between; padding:5px 0; border-bottom:1px dashed #eee;">
                    <span>${v.color} - ${v.size}</span>
                    <strong>Stok: ${v.stock}</strong>
                </div>
            `;
        });
    } else {
        vList.innerHTML = '<span class="text-muted">Belum ada data varian.</span>';
    }

    document.getElementById('viewDetailModal').classList.remove('hidden');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.add('hidden');
}

// 3. Edit Product Logic (Auto-Fill Form)
// FILE: script.js

// --- REVISI FUNGSI SAVE ---
function saveProduct(isWaiting) {
    const editId = document.getElementById('editProductId').value;
    const name = document.getElementById('inputName').value;
    // const sku = document.getElementById('inputSku').value; // HAPUS INI KARENA INPUTNYA SUDAH HILANG
    
    const variantContainer = document.getElementById('variant-container');
    const variantItems = variantContainer.getElementsByClassName('variant-item');
    
    let newVariantsData = [];

    Array.from(variantItems).forEach(item => {
        const colorInput = item.querySelector('.variant-color-input').value;
        const skuInput = item.querySelector('.variant-sku-input').value; // BARU: Ambil SKU per varian
        const sizeInput = item.querySelector('.variant-size-input').value; // BARU: Ambil String Size
        
        const imgInput = item.querySelector('.variant-img-input');
        const existingImg = item.querySelector('.variant-img-existing').value;

        let variantImgName = existingImg;
        if(imgInput.files.length > 0) {
            variantImgName = imgInput.files[0].name;
        }

        if(colorInput) {
            // Kita simpan size sebagai string mentah saja (ex: "S, M, XL") atau array
            // Di sini saya simpan string agar mudah diedit kembali
            newVariantsData.push({
                color: colorInput,
                skuVariant: skuInput, // Simpan SKU Varian
                sizes: sizeInput,     // Simpan Size String (S, M, L)
                stock: 0,             
                variantImg: variantImgName
            });
        }
    });

    if(editId) {
        // --- LOGIKA UPDATE ---
        const idx = products.findIndex(p => p.id == editId);
        if(idx !== -1) {
            products[idx].name = name;
            // products[idx].sku = sku; // Hapus update global SKU
            products[idx].category = document.getElementById('inputCat').value;
            products[idx].collection = document.getElementById('inputColl').value;
            products[idx].userType = document.getElementById('inputUser').value;
            products[idx].price = parseInt(document.getElementById('inputPrice').value) || 0;
            products[idx].status = isWaiting ? 'Waiting Specs' : 'Aktif';
            
            // Overwrite varian
            products[idx].variants = newVariantsData;

            alert("Produk Berhasil Diperbarui!");
        }
    } else {
        // --- LOGIKA TAMBAH BARU ---
        const newId = products.length + 1;
        products.push({
            id: newId, 
            // sku: sku, // Hapus global SKU
            name: name, 
            status: isWaiting ? 'Waiting Specs' : 'Aktif',
            collection: document.getElementById('inputColl').value, 
            category: document.getElementById('inputCat').value, 
            userType: document.getElementById('inputUser').value, 
            price: parseInt(document.getElementById('inputPrice').value) || 0,
            img: "default.jpg", // Simplifikasi logic gambar utama
            variants: newVariantsData 
        });
        alert("Produk Baru Disimpan!");
    }

    toggleProductMode('list');
    renderProductTable();
}


// --- REVISI FUNGSI EDIT ---
// FILE: script.js

// FILE: script.js

function editProduct(id) {
    const p = products.find(x => x.id === id);
    if(!p) return;

    toggleProductMode('add', true);
    
    document.getElementById('formTitle').innerHTML = `<i class="fas fa-arrow-left" onclick="toggleProductMode('list')" style="cursor:pointer; margin-right:10px;"></i> Edit Produk: ${p.name}`;
    document.getElementById('editProductId').value = p.id;
    document.getElementById('inputName').value = p.name;
    document.getElementById('inputCat').value = p.category; 
    document.getElementById('inputColl').value = p.collection;
    document.getElementById('inputUser').value = p.userType;
    document.getElementById('inputPrice').value = p.price;

    const container = document.getElementById('variant-container');
    container.innerHTML = ''; 

    // Render ulang varian
    if(p.variants && p.variants.length > 0) {
        p.variants.forEach(v => {
            // Pass parameter baru: variantDesign
            addVariantRow(v.color, v.variantImg, v.variantDesign, v.skuVariant, v.sizes);
        });
    } else {
        addVariantRow();
    }
}

// 4. Toggle Views (List vs Form)
function toggleProductMode(mode, isEdit = false) {
    if(mode === 'add') {
        document.getElementById('product-list-view').classList.add('hidden');
        document.getElementById('product-add-view').classList.remove('hidden');
        
        if(!isEdit) {
            // Jika Mode Tambah Baru (Reset Form)
            document.getElementById('formTitle').innerHTML = `<i class="fas fa-arrow-left" onclick="toggleProductMode('list')" style="cursor:pointer; margin-right:10px;"></i> Tambah Produk Baru`;
            document.getElementById('editProductId').value = '';
            document.getElementById('inputSku').value = '';
            document.getElementById('inputName').value = '';
            document.getElementById('inputCat').value = '';  // Reset input text
            document.getElementById('inputColl').value = ''; // Reset input text
            document.getElementById('inputPrice').value = '';
            document.getElementById('inputImg').value = '';  // Reset file input
            document.getElementById('currentImgLabel').style.display = 'none';
            
            document.getElementById('variant-container').innerHTML = '';
            addVariantRow(); 
        }
        switchTab(1);
    } else {
        document.getElementById('product-list-view').classList.remove('hidden');
        document.getElementById('product-add-view').classList.add('hidden');
    }
}

// --- WIZARD LOGIC ---
// Update: Fungsi ini sekarang bisa terima parameter untuk auto-fill warna
// UPDATE FUNGSI: addVariantRow
// FILE: script.js

// --- REVISI FUNGSI WIZARD ---

// FILE: script.js

// FILE: script.js

function addVariantRow(presetColor = '', presetImg = '', presetDesign = '', presetSku = '', presetSizes = '') {
    const container = document.getElementById('variant-container');
    const div = document.createElement('div');
    div.className = 'variant-item';
    div.style.marginTop = '15px';
    div.style.padding = '15px';
    div.style.border = '1px solid #e2e8f0';
    div.style.borderRadius = '8px';
    div.style.background = '#f8fafc';
    
    // Setup Value Awal (Untuk Edit Mode)
    const valColor = presetColor ? `value="${presetColor}"` : '';
    const valSku = presetSku ? `value="${presetSku}"` : '';
    
    // Label file existing
    const imgLabel = presetImg ? `<small class="text-success d-block"><i class="fas fa-check"></i> Katalog: ${presetImg}</small>` : '';
    const designLabel = presetDesign ? `<small class="text-success d-block"><i class="fas fa-check"></i> Desain: ${presetDesign}</small>` : '';

    // Parsing Ukuran untuk Checkbox (Jika Edit Mode)
    // presetSizes bentuknya string "S, M, XL, CustomSize"
    let checkedSizes = [];
    let customSizeVal = '';
    
    if(presetSizes) {
        const arr = presetSizes.split(',').map(s => s.trim());
        const standard = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'All Size'];
        
        arr.forEach(s => {
            if(standard.includes(s)) {
                checkedSizes.push(s);
            } else {
                // Jika tidak ada di standar, masukin ke field custom
                customSizeVal = s; 
            }
        });
    }

    // Helper function untuk ceklis otomatis saat edit
    const isChecked = (val) => checkedSizes.includes(val) ? 'checked' : '';

    div.innerHTML = `
        <div class="row">
            <div class="col-3">
                <label style="font-size:0.85rem;">Warna & SKU</label>
                <input type="text" class="form-control variant-color-input mb-2" placeholder="Warna (cth: Sage)" ${valColor}>
                <input type="text" class="form-control variant-sku-input" placeholder="SKU Varian" ${valSku}>
            </div>

            <div class="col-4">
                <label style="font-size:0.85rem;">Foto katalog varian</label>
                
                <div style="margin-bottom:8px;">
                    <input type="file" class="form-control variant-img-input" accept="image/*" style="font-size:0.8rem;">
                    <input type="hidden" class="variant-img-existing" value="${presetImg}">
                    ${imgLabel}
                </div>

                <div>
                    <input type="file" class="form-control variant-design-input" style="font-size:0.8rem;">
                    <input type="hidden" class="variant-design-existing" value="${presetDesign}">
                    <small class="text-muted" style="font-size:0.7rem;">*Upload Pola/Desain</small>
                    ${designLabel}
                </div>
            </div>

            <div class="col-5">
                 <label style="font-size:0.85rem;">Ketersediaan Ukuran</label>
                 
                 <div class="size-options" style="display:flex; flex-wrap:wrap; gap:10px; margin-bottom:8px;">
                    <label style="font-size:0.85rem; cursor:pointer;"><input type="checkbox" class="size-chk" value="XS" ${isChecked('XS')}> XS</label>
                    <label style="font-size:0.85rem; cursor:pointer;"><input type="checkbox" class="size-chk" value="S" ${isChecked('S')}> S</label>
                    <label style="font-size:0.85rem; cursor:pointer;"><input type="checkbox" class="size-chk" value="M" ${isChecked('M')}> M</label>
                    <label style="font-size:0.85rem; cursor:pointer;"><input type="checkbox" class="size-chk" value="L" ${isChecked('L')}> L</label>
                    <label style="font-size:0.85rem; cursor:pointer;"><input type="checkbox" class="size-chk" value="XL" ${isChecked('XL')}> XL</label>
                    <label style="font-size:0.85rem; cursor:pointer;"><input type="checkbox" class="size-chk" value="XXL" ${isChecked('XXL')}> XXL</label>
                    <label style="font-size:0.85rem; cursor:pointer;"><input type="checkbox" class="size-chk" value="All Size" ${isChecked('All Size')}> All Size</label>
                 </div>

                 <input type="text" class="form-control variant-custom-size" placeholder="Ukuran Custom Lain? (Ketik disini)" value="${customSizeVal}" style="font-size:0.85rem;">
            </div>
        </div>
        
        <div style="text-align:right; margin-top:5px; border-top:1px dashed #ddd; padding-top:5px;">
            <button class="btn-icon delete" style="color:red; font-size:0.8rem;" onclick="this.closest('.variant-item').remove()">
                <i class="fas fa-trash"></i> Hapus Varian Ini
            </button>
        </div>
    `;
    container.appendChild(div);
}

// Helper Function baru untuk menambahkan size dari dropdown ke input text
function appendSize(selectEl) {
    const val = selectEl.value;
    if(!val) return;
    
    // Cari input text di dekat select ini (sibling)
    const inputContainer = selectEl.parentElement.parentElement;
    const textInput = inputContainer.querySelector('.variant-size-input');
    
    let currentVal = textInput.value;
    
    // Cek apakah sudah ada, kalau belum tambahkan dengan koma
    if(currentVal.trim() === "") {
        textInput.value = val;
    } else {
        // Cek duplikasi sederhana
        if(!currentVal.includes(val)) {
            textInput.value = currentVal + ", " + val;
        }
    }
    
    // Reset dropdown ke default
    selectEl.value = "";
}

function switchTab(step) {
    document.querySelectorAll('.step-content').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(el => el.classList.remove('active'));
    document.getElementById(`p-step-${step}`).classList.add('active');
    document.getElementById(`p-tab-${step}`).classList.add('active');
}

function nextProductStep() {
    // Generate Estimasi Resep (Mockup)
    const recipeContainer = document.getElementById('recipe-container');
    recipeContainer.innerHTML = '';
    
    // Ambil input warna yang sudah diisi
    const colors = document.querySelectorAll('.variant-color-input');
    let hasColor = false;

    colors.forEach(input => {
        if(input.value.trim() !== "") {
            hasColor = true;
            recipeContainer.innerHTML += `
                <div class="card" style="border:1px solid #eee; box-shadow:none; margin-bottom:10px;">
                    <h5>Varian Warna: ${input.value}</h5>
                    <div class="row">
                        <div class="col">
                            <label>Pilih Kain Utama</label>
                            <select class="form-control">
                                <option>Kain Batik Parang (Vendor A)</option>
                                <option>Kain Katun Toyobo (Vendor B)</option>
                            </select>
                        </div>
                        <div class="col">
                            <label>Kebutuhan per Baju (Meter)</label>
                            <input type="number" class="form-control" value="1.5">
                        </div>
                    </div>
                </div>
            `;
        }
    });

    if(!hasColor) {
        alert("Mohon isi minimal satu varian warna di Step 1.");
        return;
    }

    switchTab(2);
}

function prevProductStep() { switchTab(1); }

// FILE: script.js

// FILE: script.js

function saveProduct(isWaiting) {
    const editId = document.getElementById('editProductId').value;
    const name = document.getElementById('inputName').value;
    
    const variantContainer = document.getElementById('variant-container');
    const variantItems = variantContainer.getElementsByClassName('variant-item');
    
    let newVariantsData = [];

    Array.from(variantItems).forEach(item => {
        const colorInput = item.querySelector('.variant-color-input').value;
        const skuInput = item.querySelector('.variant-sku-input').value;
        
        // --- LOGIC BARU: MENGGABUNGKAN SIZE ---
        // 1. Ambil semua checkbox yang dicentang
        const checkedBoxes = item.querySelectorAll('.size-chk:checked');
        let sizeList = Array.from(checkedBoxes).map(cb => cb.value);
        
        // 2. Ambil input custom (jika ada)
        const customSize = item.querySelector('.variant-custom-size').value.trim();
        if(customSize) {
            sizeList.push(customSize);
        }
        
        // 3. Gabungkan jadi string koma
        const finalSizeString = sizeList.join(', ');

        // --- LOGIC GAMBAR ---
        const imgInput = item.querySelector('.variant-img-input');
        const existingImg = item.querySelector('.variant-img-existing').value;
        let variantImgName = (imgInput.files.length > 0) ? imgInput.files[0].name : existingImg;

        // --- LOGIC FILE DESAIN (BARU) ---
        const designInput = item.querySelector('.variant-design-input');
        const existingDesign = item.querySelector('.variant-design-existing').value;
        let variantDesignName = (designInput.files.length > 0) ? designInput.files[0].name : existingDesign;

        if(colorInput) {
            newVariantsData.push({
                color: colorInput,
                skuVariant: skuInput,
                sizes: finalSizeString, // Hasil gabungan checkbox + custom
                variantImg: variantImgName,
                variantDesign: variantDesignName, // Simpan nama file desain
                stock: 0
            });
        }
    });

    // Validasi Sederhana
    if(newVariantsData.length === 0) {
        alert("Minimal isi satu varian warna!");
        return;
    }

    if(editId) {
        // --- UPDATE DATA ---
        const idx = products.findIndex(p => p.id == editId);
        if(idx !== -1) {
            products[idx].name = name;
            products[idx].category = document.getElementById('inputCat').value;
            products[idx].collection = document.getElementById('inputColl').value;
            products[idx].userType = document.getElementById('inputUser').value;
            products[idx].price = parseInt(document.getElementById('inputPrice').value) || 0;
            products[idx].status = isWaiting ? 'Waiting Specs' : 'Aktif';
            products[idx].variants = newVariantsData;

            alert("Produk Berhasil Diperbarui!");
        }
    } else {
        // --- TAMBAH DATA ---
        const newId = products.length + 1;
        products.push({
            id: newId, 
            name: name, 
            sku: newVariantsData[0].skuVariant, // Pakai SKU varian pertama sebagai default SKU display
            status: isWaiting ? 'Waiting Specs' : 'Aktif',
            collection: document.getElementById('inputColl').value, 
            category: document.getElementById('inputCat').value, 
            userType: document.getElementById('inputUser').value, 
            price: parseInt(document.getElementById('inputPrice').value) || 0,
            img: "default.jpg", 
            variants: newVariantsData 
        });
        alert("Produk Baru Disimpan!");
    }

    toggleProductMode('list');
    renderProductTable();
}

// --- CUSTOM ORDER LOGIC (TETAP SAMA) ---
// Update Fungsi Navigasi Step
function coNextStep(step) {
    // Navigasi Tab UI
    document.querySelectorAll('.co-step').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.step-indicator .step').forEach(el => {
        if(el.dataset.step == step) el.classList.add('active');
        else el.classList.remove('active');
    });
    document.getElementById(`co-step-${step}`).classList.add('active');

    // TRIGGER LOGIC KHUSUS:
    // Jika masuk ke Step 3, generate form material berdasarkan input Step 2
    if(step === 3) {
        renderMaterialStep();
    }
}


// --- LOGIC BARU: GENERATE FORM MATERIAL (STEP 3) ---

function renderMaterialStep() {
    const container = document.getElementById('co-materials-container');
    container.innerHTML = ''; // Reset isi container

    // 1. Ambil semua Produk dari Step 2
    const productCards = document.querySelectorAll('.co-product-card');

    if(productCards.length === 0) {
        container.innerHTML = '<div class="alert-info">Belum ada produk yang diinput di Step 2.</div>';
        return;
    }

    // 2. Loop setiap Produk
    productCards.forEach((card, pIdx) => {
        // Ambil Nama Produk (asumsi input pertama adalah nama)
        const prodNameInput = card.querySelector('input[placeholder="Misal: Kemeja Panitia"]'); 
        const prodName = prodNameInput.value || `Produk #${pIdx + 1}`;

        // 3. Ambil semua Warna di dalam Produk tersebut
        const colorGroups = card.querySelectorAll('.co-color-group');

        colorGroups.forEach((group, cIdx) => {
            // Ambil Nama Warna
            const colorNameInput = group.querySelector('.co-color-header input');
            const colorName = colorNameInput.value || `Warna #${cIdx + 1}`;

            // 4. Buat Kartu Material untuk kombinasi Produk + Warna ini
            const div = document.createElement('div');
            div.className = 'material-variant-card';
            
            div.innerHTML = `
                <div class="material-header">
                    <div class="material-title">
                        <h5>${prodName}</h5>
                        <small><i class="fas fa-palette"></i> Varian: <strong>${colorName}</strong></small>
                    </div>
                    <span class="badge badge-primary">Material Setup</span>
                </div>

                <span class="section-label"><i class="fas fa-scroll"></i> A. Kebutuhan Kain</span>
                <div class="fabric-section">
                    <div class="row">
                        <div class="col-6">
                             <div class="form-group">
                                <label style="font-size:0.8rem;">Nama Kain / Jenis</label>
                                <input type="text" class="form-control" placeholder="Misal: Katun Toyobo Premium">
                            </div>
                        </div>
                         <div class="col-6">
                             <div class="form-group">
                                <label style="font-size:0.8rem;">Upload Motif / Referensi</label>
                                <input type="file" class="form-control" style="font-size:0.8rem;">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4">
                            <label style="font-size:0.8rem;">Estimasi Panjang (m)</label>
                            <input type="number" class="form-control" placeholder="0">
                        </div>
                        <div class="col-4">
                            <label style="font-size:0.8rem;">Lebar Kain (cm)</label>
                            <input type="number" class="form-control" placeholder="115 / 150">
                        </div>
                        <div class="col-4">
                            <label style="font-size:0.8rem;">Sumber</label>
                            <select class="form-control">
                                <option>Stok Gudang</option>
                                <option>Beli Baru</option>
                                <option>Customer Bawa</option>
                            </select>
                        </div>
                    </div>
                </div>

                <span class="section-label"><i class="fas fa-box-open"></i> B. Material Pendukung (Aksesoris)</span>
                <div style="background:#fff; border:1px solid #eee; border-radius:6px; padding:10px;">
                    <table class="acc-table">
                        <thead>
                            <tr>
                                <th width="50%">Nama Material</th>
                                <th width="20%">Qty</th>
                                <th width="20%">Satuan</th>
                                <th width="10%"></th>
                            </tr>
                        </thead>
                        <tbody class="acc-tbody">
                            <tr>
                                <td><input type="text" class="form-control small" placeholder="Cth: Kancing, Resleting"></td>
                                <td><input type="number" class="form-control small" placeholder="0"></td>
                                <td><select class="form-control small"><option>Pcs</option><option>Ls</option><option>Mtr</option></select></td>
                                <td class="text-center"><button class="btn-icon delete" onclick="this.closest('tr').remove()"><i class="fas fa-times"></i></button></td>
                            </tr>
                        </tbody>
                    </table>
                    <button class="btn-add-size-row" style="margin-top:10px;" onclick="addMaterialRowScoped(this)">
                        <i class="fas fa-plus"></i> Tambah Material Lain
                    </button>
                </div>
            `;

            container.appendChild(div);
        });
    });
}

// Fungsi Tambah Baris Material (Scoped per Kartu)
function addMaterialRowScoped(btn) {
    // btn -> div -> table(sibling prev) -> tbody ?? 
    // Struktur: btn ada di dalam div pembungkus, table ada di atasnya
    const wrapper = btn.parentElement; 
    const tbody = wrapper.querySelector('.acc-tbody');

    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td><input type="text" class="form-control small" placeholder="Nama Material"></td>
        <td><input type="number" class="form-control small" placeholder="0"></td>
        <td><select class="form-control small"><option>Pcs</option><option>Ls</option><option>Mtr</option></select></td>
        <td class="text-center"><button class="btn-icon delete" onclick="this.closest('tr').remove()"><i class="fas fa-times"></i></button></td>
    `;
    tbody.appendChild(tr);
}

// Fungsi Menambah Kartu Produk Baru (Multi-Produk)
// --- REVISI LOGIC CUSTOM ORDER STEP 2 (HIERARKI YANG BENAR) ---

// 1. Fungsi Tambah KARTU PRODUK (Level Teratas)
function addCoProductCard() {
    const container = document.getElementById('co-products-container');
    const div = document.createElement('div');
    div.className = 'co-product-card';
    div.style.position = 'relative';
    div.style.marginBottom = '30px'; 
    div.style.borderTop = '4px solid var(--primary)'; // Penanda visual antar produk
    
    div.innerHTML = `
        <div style="position: absolute; top: 15px; right: 15px;">
            <button class="btn-icon delete" onclick="this.closest('.co-product-card').remove()" title="Hapus Produk">
                <i class="fas fa-times"></i>
            </button>
        </div>
        
        <h5 style="color:var(--text-dark); margin-bottom:20px; font-weight:700;">
            <i class="fas fa-tshirt"></i> Informasi Produk
        </h5>

        <div class="row">
            <div class="col-4">
                <label>Nama Produk</label>
                <input type="text" class="form-control" placeholder="Misal: Kemeja Panitia">
            </div>
            <div class="col-3">
                <label>Kategori</label>
                <input list="catOptionsCo" class="form-control" placeholder="Pilih/Ketik...">
                <datalist id="catOptionsCo">
                    <option value="Shirt"><option value="Tunik"><option value="Outer"><option value="Accessories">
                </datalist>
            </div>
            <div class="col-2">
                <label>User Type</label>
                <select class="form-control">
                    <option>Men</option><option>Women</option><option>Kids</option><option>Unisex</option>
                </select>
            </div>
            <div class="col-3">
                <label>Upload Desain</label>
                <input type="file" class="form-control" style="font-size:0.8rem;">
            </div>
        </div>

        <div class="color-groups-container">
            </div>

        <button type="button" class="btn-add-color-group" onclick="addCoColorGroup(this)">
            <i class="fas fa-palette"></i> + Tambah Varian Warna Baru
        </button>
    `;
    
    container.appendChild(div);
    
    // Opsional: Langsung tambahkan 1 input warna kosong agar user langsung paham
    const btnAddColor = div.querySelector('.btn-add-color-group');
    addCoColorGroup(btnAddColor);
}

// 2. Fungsi Tambah GRUP WARNA (Level Tengah - Input Warna Cuma Sekali)
function addCoColorGroup(btn) {
    // Cari container tempat menampung warna (sibling sebelum tombol)
    const colorContainer = btn.previousElementSibling;
    
    const div = document.createElement('div');
    div.className = 'co-color-group';
    
    div.innerHTML = `
        <div class="co-color-header">
            <div style="flex: 1;">
                <label style="font-size:0.85rem; color:#64748b; font-weight:600;">Nama Warna / Motif</label>
                <input type="text" class="form-control" placeholder="Contoh: Merah Hati" style="font-weight:bold; font-size:1rem;">
            </div>
            <div style="margin-left: 15px; padding-top: 25px;">
                <button class="btn-icon delete" style="color:#ef4444;" onclick="this.closest('.co-color-group').remove()" title="Hapus Grup Warna Ini">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        </div>

        <label style="font-size:0.8rem; color:#64748b; margin-bottom:5px; display:block;">Daftar Ukuran & Kuantitas</label>
        <table class="co-size-table">
            <thead>
                <tr>
                    <th width="45%">Ukuran</th>
                    <th width="40%">Qty (Pcs)</th>
                    <th width="15%" class="text-center">Aksi</th>
                </tr>
            </thead>
            <tbody class="size-tbody">
                </tbody>
        </table>

        <div style="margin-top: 10px;">
            <button type="button" class="btn-add-size-row" onclick="addCoSizeRow(this)">
                <i class="fas fa-plus-circle"></i> Tambah Ukuran Lain
            </button>
        </div>
    `;

    colorContainer.appendChild(div);

    // Opsional: Langsung tambah 1 baris size default (misal S)
    const btnAddSize = div.querySelector('.btn-add-size-row');
    addCoSizeRow(btnAddSize);
}

// 3. Fungsi Tambah BARIS SIZE (Level Bawah)
function addCoSizeRow(btn) {
    // Cari tbody (sibling parent dari tombol)
    // btn -> div -> div(parent) -> table -> tbody ?? Agak tricky cari elemennya
    // Cara aman: cari .size-tbody terdekat di dalam grup warna yang sama
    const groupDiv = btn.closest('.co-color-group');
    const tbody = groupDiv.querySelector('.size-tbody');
    
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>
            <select class="form-control small" style="background:#fff;">
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
                <option value="All Size">All Size</option>
                <option value="Custom">Custom</option>
            </select>
        </td>
        <td>
            <input type="number" class="form-control small" value="0" min="0" placeholder="0">
        </td>
        <td class="text-center">
            <button class="btn-icon delete" onclick="this.closest('tr').remove()" title="Hapus Baris">
                <i class="fas fa-times" style="color:#ccc;"></i>
            </button>
        </td>
    `;
    
    tbody.appendChild(tr);
}

// Fungsi Tambah Baris Qty (Warna/Ukuran)
function addQtyRow(btn) {
    const tbody = btn.previousElementSibling.querySelector('tbody');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td><input type="text" class="form-control small" placeholder="Warna"></td>
        <td>
            <select class="form-control small">
                <option>S</option><option>M</option><option>L</option><option>XL</option><option>Custom</option>
            </select>
        </td>
        <td><input type="number" class="form-control small" value="0"></td>
        <td><button class="btn-icon delete" onclick="this.closest('tr').remove()"><i class="fas fa-trash"></i></button></td>
    `;
    tbody.appendChild(tr);
}

// Fungsi Toggle Radio Button Kain (Tersedia vs Baru)
function toggleFabricSource(radio) {
    const stockArea = document.getElementById('fabricStockArea');
    const newArea = document.getElementById('fabricNewArea');
    
    if (radio.value === 'stock') {
        stockArea.classList.remove('hidden');
        newArea.classList.add('hidden');
    } else {
        stockArea.classList.add('hidden');
        newArea.classList.remove('hidden');
    }
}

// Fungsi Tambah Baris Material Pendukung
function addMaterialRow() {
    const tbody = document.getElementById('materialTableBody');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td><input type="text" class="form-control" placeholder="Nama Material Lain"></td>
        <td><input type="number" class="form-control" placeholder="Qty"></td>
        <td><button class="btn-icon delete" onclick="this.closest('tr').remove()"><i class="fas fa-trash"></i></button></td>
    `;
    tbody.appendChild(tr);
}

function finishCustomOrder() {
    alert("Custom Order berhasil disubmit! Data telah dikirim ke Tim PPIC & Gudang.");
    toggleCoView('monitor');
}

// FILE: script.js

function viewOrderDetail(id) {
    const data = customOrdersData.find(o => o.id === id);
    if (!data) return alert("Data order tidak ditemukan!");

    // 1. Isi Header & Info Klien (Sama seperti sebelumnya)
    document.getElementById('detId').innerText = '#' + data.id;
    document.getElementById('detDate').innerText = 'Tgl Order: ' + data.date;
    
    const badge = document.getElementById('detStatus');
    badge.innerText = data.status;
    badge.className = `badge ${data.statusClass}`; 

    document.getElementById('detClientName').innerText = data.client.name;
    document.getElementById('detContact').innerText = data.client.contact;
    document.getElementById('detEmail').innerText = data.client.email;
    document.getElementById('detProject').innerText = data.client.project;
    document.getElementById('detDeadline').innerText = data.deadline;
    document.getElementById('detAddress').innerText = data.client.address;

    // 2. Render LIST ITEM (Produk -> Varian -> Size/Material)
    const itemContainer = document.getElementById('detProductList');
    itemContainer.innerHTML = ''; // Clear container

    // Hide section material global lama jika ada, karena sekarang material ada di per warna
    const oldMaterialSection = document.getElementById('detFabricInfo')?.closest('.card');
    if(oldMaterialSection) oldMaterialSection.style.display = 'none';

    // Loop Setiap Produk
    data.items.forEach((item, idx) => {
        let variantsHtml = '';

        // Loop Setiap Warna dalam Produk
        item.variants.forEach(v => {
            
            // Generate Baris Tabel Size
            let sizeRows = '';
            let totalQtyVar = 0;
            v.sizes.forEach(s => {
                sizeRows += `<tr><td style="padding:4px 8px;">${s.size}</td><td style="padding:4px 8px;"><strong>${s.qty}</strong></td></tr>`;
                totalQtyVar += s.qty;
            });

            // Generate List Accessories
            let accRows = '';
            if(v.materialInfo.accessories && v.materialInfo.accessories.length > 0){
                v.materialInfo.accessories.forEach(acc => {
                    accRows += `
                        <div class="mat-list-item">
                            <span>${acc.name}</span>
                            <strong>${acc.qty} ${acc.unit}</strong>
                        </div>
                    `;
                });
            } else {
                accRows = '<small class="text-muted">- Tidak ada aksesoris -</small>';
            }

            // HTML Blok Warna
            variantsHtml += `
                <div class="detail-color-block">
                    <div class="detail-color-header">
                        <span><i class="fas fa-palette"></i> ${v.colorName}</span>
                        <span class="badge badge-primary" style="font-size:0.7rem;">Total: ${totalQtyVar} Pcs</span>
                    </div>
                    <div class="detail-content-grid">
                        <div class="detail-col left">
                            <span class="section-sub-title">Breakdown Size</span>
                            <table class="mini-table" style="font-size:0.8rem;">
                                <thead style="background:#f1f5f9;"><tr><th>Size</th><th>Qty</th></tr></thead>
                                <tbody>${sizeRows}</tbody>
                            </table>
                        </div>
                        
                        <div class="detail-col">
                            <span class="section-sub-title">Kebutuhan Material</span>
                            <div style="margin-bottom:10px;">
                                <div style="font-size:0.85rem; font-weight:600; color:#333;">${v.materialInfo.fabricName}</div>
                                <div style="display:flex; justify-content:space-between; margin-top:2px;">
                                    <small class="text-muted">Sumber: ${v.materialInfo.fabricSource}</small>
                                    <small style="color:var(--primary); font-weight:bold;">Est: ${v.materialInfo.fabricTotal} m</small>
                                </div>
                            </div>
                            <div style="border-top:1px solid #eee; padding-top:5px;">
                                <span class="section-sub-title" style="margin-bottom:5px;">Aksesoris</span>
                                ${accRows}
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        // Gabungkan ke Kartu Produk
        itemContainer.innerHTML += `
            <div class="detail-item-card" style="margin-bottom: 25px;">
                <div class="detail-item-header">
                    <div>
                        <strong style="font-size:1.05rem;">${idx + 1}. ${item.name}</strong>
                        <br><small class="text-muted">${item.category}</small>
                    </div>
                </div>
                <div style="padding: 15px; background:#fcfcfc;">
                    ${variantsHtml}
                </div>
            </div>
        `;
    });

    // 3. Tampilkan Modal
    document.getElementById('orderDetailModal').classList.remove('hidden');
}

// Fungsi Helper Close Modal (sudah ada di kode sebelumnya, tapi pastikan ada)
function closeModal(id) {
    document.getElementById(id).classList.add('hidden');
}

function renderCoTable() {
    const tbody = document.getElementById('co-table-body');
    tbody.innerHTML = '';
    
    customOrdersData.forEach(co => {
        // Hitung Qty Total secara otomatis
        let totalQty = 0;
        co.items.forEach(item => {
            item.variants.forEach(v => totalQty += v.qty);
        });

        tbody.innerHTML += `
            <tr>
                <td><strong>${co.id}</strong></td>
                <td>${co.client.project}</td>
                <td>${co.client.name}</td>
                <td><span class="badge badge-info">${totalQty} Pcs</span></td>
                <td>${co.deadline}</td>
                <td><span class="badge ${co.status === 'Pending' ? 'badge-warning' : 'badge-purple'}">${co.status}</span></td>
                <td><button class="btn-sm btn-outline" onclick="viewCoDetail('${co.id}')"><i class="fas fa-eye"></i> Detail</button></td>
            </tr>
        `;
    });
}

function viewCoDetail(id) {
    const co = customOrdersData.find(c => c.id === id);
    if(!co) return;
    currentActiveCoId = id;

    // Mapping Data Header
    document.getElementById('d-co-id').innerText = '#' + co.id;
    document.getElementById('d-co-cust').innerText = co.client.name;
    document.getElementById('d-co-project').innerText = co.client.project;
    document.getElementById('d-co-deadline').innerText = co.deadline;

    // RENDERING KEBUTUHAN MATERIAL (Matriks Warna, Kain, Qty, Model)
    const fabricContainer = document.getElementById('d-co-fabric-info');
    fabricContainer.innerHTML = `
        <table class="table" style="font-size: 13px; background: white; border-radius: 8px;">
            <thead style="background: #f1f5f9;">
                <tr>
                    <th>Warna</th>
                    <th>Nama Produk (Model)</th>
                    <th>Jenis Kain</th>
                    <th class="text-right">Estimasi Kain (m)</th>
                </tr>
            </thead>
            <tbody id="bom-detail-body"></tbody>
        </table>
    `;

    const bomBody = document.getElementById('bom-detail-body');
    let fabricRows = '';
    
    co.items.forEach(item => {
        item.variants.forEach(v => {
            // Asumsi sederhana: 1 Pcs butuh 2 meter (bisa disesuaikan dengan resep)
            const estimasiKain = v.qty * 2; 
            fabricRows += `
                <tr>
                    <td><span class="badge badge-outline">${v.color || 'Custom'}</span></td>
                    <td>${item.name}</td>
                    <td>${co.fabric.name}</td>
                    <td class="text-right fw-bold">${estimasiKain} m</td>
                </tr>
            `;
        });
    });
    bomBody.innerHTML = fabricRows;

    // Atur Status Tombol Jahit (Hanya Aktif jika PR Kain sudah diklik/diproses)
    const btnJahit = document.getElementById('btn-pr-jahit');
    if(co.status === 'PR Sent' || co.status === 'In Process') {
        btnJahit.classList.replace('btn-secondary', 'btn-success');
    }

    toggleCoView('detail');
}


function handlePrKainClick() {
    const co = customOrdersData.find(c => c.id === currentActiveCoId);
    
    alert(`Sistem akan mengalihkan Anda ke form PR Kain untuk Project: ${co.client.project}`);
    
    showPage('purchase-req');
    initPr('fabric'); // Masuk ke mode beli kain

    // Auto-fill form PR
    setTimeout(() => {
        document.getElementById('pr-notes').value = `PEMESANAN KAIN UNTUK CO: ${co.id} (${co.client.project})`;
    }, 200);
}

function handlePrJahitClick() {
    const co = customOrdersData.find(c => c.id === currentActiveCoId);

    // VALIDASI: Cek apakah status masih Pending (berarti kain belum diurus)
    if (co.status === 'Pending') {
        const confirmSwitch = confirm(
            "NOTIFIKASI: Anda belum bisa mengakses WO Jahit.\n\n" +
            "Harap selesaikan terlebih dahulu WO Kain agar bahan baku tersedia.\n\n" +
            "Klik 'OK' untuk pindah ke pengisian WO Kain sekarang, atau 'Cancel' untuk batal."
        );

        if (confirmSwitch) {
            handlePrKainClick();
        }
    } else {
        // Jika sudah urus kain, boleh lanjut jahit
        showPage('purchase-req');
        initPr('co', currentActiveCoId);
    }
}


