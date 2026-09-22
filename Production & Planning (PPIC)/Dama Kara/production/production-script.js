/* --- DUMMY DATA --- */

/* --- DUMMY DATA (SINKRONISASI FULL DENGAN PLANNING) --- */

// 1. Master Data Produk (PERSIS PLANNING)
// GANTI BAGIAN: const products = [...]

const products = [
    { 
        id: 1, name: 'Setala Shirt', sku: 'DMK-001', status: 'Aktif',
        collection: "Setala", category: "Shirt", userType: "Men",
        img: "setalashirt.jpeg",
        designFile: "TechPack-Setala-V2.pdf", // <--- Tambahan File
        recipe: {
            fabricQty: 1.5, 
            extras: [ { name: "Kancing Kemeja", qty: 6, unit: "Pcs" }, { name: "Label Brand", qty: 1, unit: "Pcs" } ]
        },
        variants: [
            { sku: 'DMK-001-BLK-M', color: 'Hitam', size: 'M', gudang: 3, defect: 1, reserved: 5, fabricName: "Kain Setala (Hitam)" },
            { sku: 'DMK-001-BLK-L', color: 'Hitam', size: 'L', gudang: 5, defect: 0, reserved: 4, fabricName: "Kain Setala (Hitam)" },
            { sku: 'DMK-001-NVY-XL', color: 'Navy', size: 'XL', gudang: 1, defect: 0, reserved: 0, fabricName: "Kain Setala (Navy)" }
        ]
    },
    { 
        id: 2, name: 'Kala Shirt Longsleeve', sku: 'DMK-002', status: 'Aktif',
        collection: "Kala", category: "Shirt", userType: "Men",
        img: "kalashirtlongsleeve.png",
        recipe: {
            fabricQty: 1.8,
            extras: [ { name: "Kancing Kemeja", qty: 8, unit: "Pcs" }, { name: "Furing", qty: 0.5, unit: "Meter" } ]
        },
        variants: [
            { sku: 'DMK-002-BLK-M', color: 'Hitam', size: 'M', gudang: 13, defect: 0, reserved: 12, fabricName: "Kain Kala (Hitam)" },
            { sku: 'DMK-002-BLU-L', color: 'Electric Blue', size: 'L', gudang: 3, defect: 2, reserved: 0, fabricName: "Kain Kala (Electric Blue)" }
        ]
    },
    { 
        id: 3, name: 'Arkana Embroidery Vest', sku: 'DMK-003', status: 'Aktif',
        collection: "Arkana", category: "Outer", userType: "Women",
        img: "arkanaembroideryvest.png",
        recipe: {
            fabricQty: 1.2,
            extras: [ { name: "Tali Kur", qty: 2, unit: "Meter" } ]
        },
        variants: [ 
            { sku: 'DMK-003-NVY-ALL', color: 'Navy', size: 'All Size', gudang: 40, defect: 0, reserved: 10, fabricName: "Kain Arkana (Navy)" }
        ]
    },
    { 
        id: 4, name: 'Aksata Vest Lace', sku: 'DMK-004', status: 'Aktif',
        collection: "Aksata", category: "Outer", userType: "Women",
        img: "aksatavestlace.png",
        recipe: {
            fabricQty: 1.0,
            extras: [ { name: "Bisban", qty: 3, unit: "Meter" } ]
        },
        variants: [ 
            { sku: 'DMK-004-NVY-ALL', color: 'Navy', size: 'All Size', gudang: 10, defect: 0, reserved: 2, fabricName: "Kain Aksata (Navy)" }
        ]
    },
    { 
        id: 5, name: 'Obi Belt', sku: 'DMK-005', status: 'Waiting Specs',
        collection: "Obi", category: "Accessories", userType: "Women",
        img: "obibelt.jpeg",
        designFile: "Pola-Jahit-Obi.pdf", // <--- Tambahan File
        recipe: { fabricQty: 0.5, extras: [ { name: "Ring Besi", qty: 1, unit: "Pcs" } ] },
        variants: [ { sku: 'DMK-005-MAR-ALL', color: 'Maroon', size: 'All Size', gudang: 100, defect: 2, reserved: 0, fabricName: "Kain Obi (Maroon)" } ]
    },
    { 
        id: 6, name: 'Suar Bucket Hat', sku: 'DMK-006', status: 'Aktif',
        collection: "Suar", category: "Accessories", userType: "Men",
        img: "suarbuckethat.jpeg",
        recipe: {
            fabricQty: 0.3,
            extras: [ { name: "Kain Keras", qty: 0.1, unit: "Meter" } ]
        },
        variants: [ 
            { sku: 'DMK-006-TER-ALL', color: 'Terracotta', size: 'All Size', gudang: 45, defect: 0, reserved: 0, fabricName: "Kain Suar (Terracotta)" }
        ]
    }
];



// 2. Data Inventory Kain (Mendukung 6 Produk di atas)
// 2. Data Inventory Kain (Updated dengan Status & Material)
const fabrics = [
    { 
        id: 'F-SET-BLK', name: 'Kain Setala (Hitam)', motif: 'Setala Signature', material: 'Katun Primisima', 
        vendor: 'CV Textil Jaya', stock: 1500, minStock: 200, unit: 'Yard', status: 'Active', patternClass: 'pattern-parang', product: 'Setala Shirt' 
    },
    { 
        id: 'F-SET-NVY', name: 'Kain Setala (Navy)', motif: 'Setala Signature', material: 'Katun Primisima', 
        vendor: 'CV Textil Jaya',stock: 400, minStock: 100, unit: 'Yard', status: 'Active', patternClass: 'pattern-parang', product: 'Setala Shirt' 
    },
    { 
        id: 'F-KAL-BLU', name: 'Kain Kala (Electric Blue)', motif: 'Kala Pattern', material: 'Katun Toyobo', 
        vendor: 'CV Textil Jaya', vendor: 'CV Textil Jaya', stock: 300, minStock: 50, unit: 'Yard', status: 'Active', patternClass: 'pattern-mega', product: 'Kala Shirt',
        designFile: "Kala-Warna-ElectricBlue.pdf" // <--- File Desain Kain
    },
    { 
        id: 'F-KAL-BLK', name: 'Kain Kala (Hitam)', motif: 'Kala Pattern', material: 'Katun Toyobo', 
        vendor: 'CV Textil Jaya', stock: 800, minStock: 100, unit: 'Yard', status: 'Active', patternClass: 'pattern-mega', product: 'Kala Shirt',
        designFile: "Kala-Warna-Hitam.pdf"
    },
    { 
        id: 'F-ARK-NVY', name: 'Kain Arkana (Navy)', motif: 'Embroidery Arkana', material: 'Cotton Blend', 
        vendor: 'CV Textil Jaya', stock: 500, minStock: 100, unit: 'Yard', status: 'Active', patternClass: 'pattern-parang', product: 'Arkana Vest' 
    },
    { 
        id: 'F-ARK-CRM', name: 'Kain Arkana (Cream)', motif: 'Embroidery Arkana', material: 'Cotton Blend',
        vendor: 'CV Textil Jaya', stock: 200, minStock: 50, unit: 'Yard', 
        status: 'Active', patternClass: 'pattern-parang', product: 'Arkana Vest'
    },
    { 
        id: 'F-AKS-BLK', name: 'Kain Aksata (Hitam)', motif: 'Lace Aksata', material: 'Polyester Lace',
        vendor: 'Toko Renda Maju', stock: 120, minStock: 20, unit: 'Meter', 
        status: 'Active', patternClass: 'pattern-mega', product: 'Aksata Vest Lace'
    },
    { 
        id: 'F-AKS-NVY', name: 'Kain Aksata (Navy)', motif: 'Lace Aksata', material: 'Polyester Lace',
        vendor: 'Toko Renda Maju', stock: 100, minStock: 20, unit: 'Meter', 
        status: 'Active', patternClass: 'pattern-mega', product: 'Aksata Vest Lace' 
    },
    { 
        id: 'F-OBI-MAR', name: 'Kain Obi (Maroon)', motif: 'Polos Texture', material: 'Katun Drill',
        vendor: 'CV Textil Jaya', stock: 250, minStock: 50, unit: 'Yard', 
        status: 'Active', patternClass: 'pattern-parang', product: 'Obi Vest'
    },
    { 
        id: 'F-SUA-TER', name: 'Kain Suar (Terracotta)', motif: 'Canvas Solid', material: 'Linen Canvas', 
        vendor: 'PT Sandang', stock: 45, minStock: 50, unit: 'Yard', status: 'Active', patternClass: 'pattern-mega', product: 'Suar Hat' 
    }
];

    // 3. Data Vendor (Sesuai Planning)
    const vendors = [
        { 
        id: 'V-001', name: 'Konveksi Bu Susi', type: 'Jahit', 
        address: 'Jl. Melati No. 3, Bandung', contact: '0855-7777-6666', email: 'bususi.prod@gmail.com', 
        maxCapacity: 500 
    },
    { 
        id: 'V-002', name: 'CV Textil Jaya', type: 'Kain', 
        address: 'Kawasan Industri Textil, Bandung', contact: '0818-9999-8888', email: 'sales@textiljaya.co.id', 
        maxCapacity: 2000 
    },
    { 
        id: 'V-003', name: 'PT Sandang Makmur', type: 'Kain', 
        address: 'Jl. Soekarno Hatta No. 10', contact: '0812-3344-5566', email: 'admin@sandangmakmur.com', 
        maxCapacity: 5000 
    },
    { 
        id: 'V-005', name: 'Toko Renda Maju', type: 'Kain', 
        address: 'Pasar Baru Trade Center Lt. 2', contact: '0813-1122-3344', email: 'rendamaju@yahoo.com', 
        maxCapacity: 500 
    },
    { 
        id: 'V-006', name: 'PT Sandang', type: 'Kain', 
        address: 'Kawasan Industri Cimahi', contact: '022-6655-4433', email: 'marketing@ptsandang.co.id', 
        maxCapacity: 3000 
    }
    ];
// Fungsi Membuka Modal
window.openAddVendorModal = function() {
    document.getElementById('modal-add-vendor').classList.remove('hidden');
}

// Fungsi Menutup Modal
window.closeModal = function(id) {
    document.getElementById(id).classList.add('hidden');
}

// Fungsi Simpan Vendor Baru
window.saveNewVendor = function(e) {
    e.preventDefault();
    
    const newVendor = {
        id: 'V-00' + (vendors.length + 1),
        name: document.getElementById('add-v-name').value,
        type: document.getElementById('add-v-type').value,
        address: document.getElementById('add-v-address').value,
        contact: document.getElementById('add-v-contact').value,
        email: document.getElementById('add-v-email').value, // <--- Ambil data email
        maxCapacity: parseInt(document.getElementById('add-v-capacity').value) || 0
    };

    vendors.push(newVendor);
    alert('Vendor ' + newVendor.name + ' berhasil didaftarkan!');
    
    e.target.reset();
    closeModal('modal-add-vendor');
    renderVendor();
}
window.renderVendor = function() {
    const tbody = document.getElementById('vendor-table');
    if(!tbody) return;
    tbody.innerHTML = '';
    
    vendors.forEach(v => {
        tbody.innerHTML += `
            <tr>
                <td><b>${v.name}</b></td>
                <td><span class="badge info">${v.type}</span></td>
                <td>${v.address}</td>
                <td>
                    <div>${v.contact}</div>
                    <small style="color:var(--primary);">${v.email || '-'}</small>
                </td>
                <td><strong>${v.maxCapacity || 0}</strong> <small class="text-muted">Unit</small></td>
                <td>
                    <button class="btn-text" onclick="showVendorDetail('${v.id}')">
                        <i class="fa-solid fa-chart-line"></i> Detail
                    </button>
                    <button class="btn-text" onclick="deleteVendor('${v.id}')" style="color:#e74c3c; margin-left:10px;">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            </tr>
        `;
    });
}
// Fungsi untuk menghapus vendor
window.deleteVendor = function(vid) {
    // Cari nama vendor untuk konfirmasi
    const vendor = vendors.find(v => v.id === vid);
    if (!vendor) return;

    // Konfirmasi penghapusan
    const konfirmasi = confirm(`Apakah Anda yakin ingin menghapus vendor "${vendor.name}"?\nData yang sudah dihapus tidak bisa dikembalikan.`);

    if (konfirmasi) {
        // Filter array untuk membuang vendor dengan ID tersebut
        vendors = vendors.filter(v => v.id !== vid);
        
        alert(`Vendor ${vendor.name} berhasil dihapus.`);
        
        // Render ulang tabel agar perubahan terlihat
        renderVendor();
        
        // Opsional: Jika sedang di halaman detail vendor yang dihapus, pindah ke list
        navigate('vendor-page');
    }
}
window.submitWO = function(e) {
    e.preventDefault();

    const vid = document.getElementById('wo-vendor-select').value;
    const vendor = vendors.find(v => v.id === vid);
    
    if(!vendor) {
        alert("Pilih vendor terlebih dahulu!");
        return;
    }

    // Hitung total Qty dari input Qty di tabel WO
    const qtyInputs = document.querySelectorAll('#wo-items-container input[type="number"]');
    let totalQtyRequested = 0;
    qtyInputs.forEach(input => {
        totalQtyRequested += parseInt(input.value || 0);
    });

    // 1. Hitung beban vendor saat ini dari WO yang statusnya belum 'Selesai'
    const currentBeban = woData
        .filter(w => w.vendor === vendor.name && w.status !== 'Selesai')
        .reduce((sum, w) => sum + (typeof w.qty === 'number' ? w.qty : 0), 0);

    const totalEstimatedLoad = currentBeban + totalQtyRequested;

    // 2. VALIDASI KAPASITAS
    if (totalEstimatedLoad > vendor.maxCapacity) {
        // NOTIFIKASI SESUAI PERINTAH
        alert(`PERINGATAN KUALITAS: Vendor ${vendor.name} tidak bisa mencapai kualitas produksi yang baik!\n\n` +
              `Sebab: Total beban (${totalEstimatedLoad} Unit) melebihi kapasitas maksimalnya (${vendor.maxCapacity} Unit/Bulan).`);
        return; // Hentikan proses pengerjaan WO
    }

    // 3. JIKA AMAN, BUAT WO
    const newWo = {
        id: 'WO-' + Math.floor(Math.random() * 9000 + 1000),
        prRef: document.getElementById('wo-ref-pr').value,
        vendor: vendor.name,
        type: document.getElementById('wo-type').value,
        qty: totalQtyRequested, // Simpan total qty
        deadline: document.getElementById('wo-date').value,
        status: 'Sent to Vendor'
    };
    
    woData.unshift(newWo);
    alert('Sukses! Work Order telah diterbitkan dan dikirim ke Vendor.');
    
    navigate('wo-page');
    renderWO('all');
}
// 4. Master Data BOM (Resep untuk 6 Produk)
// Digunakan untuk auto-fill material tambahan di form WO
const bomMaster = {
    'Setala Shirt': {
        kainUtama: 'Kain Setala (Sesuai Varian)', // Dinamis
        materials: [
            { name: 'Kancing Kemeja', qtyPerPcs: 6, unit: 'Pcs' }, // Sesuai Planning
            { name: 'Label Brand', qtyPerPcs: 1, unit: 'Pcs' }
        ]
    },
    'Kala Shirt Longsleeve': {
        kainUtama: 'Kain Kala (Sesuai Varian)',
        materials: [
            { name: 'Kancing Kemeja', qtyPerPcs: 8, unit: 'Pcs' }, // Sesuai Planning
            { name: 'Furing', qtyPerPcs: 0.5, unit: 'Meter' }
        ]
    },
    'Arkana Embroidery Vest': {
        kainUtama: 'Kain Arkana (Sesuai Varian)',
        materials: [
            { name: 'Tali Kur', qtyPerPcs: 2, unit: 'Meter' } // Sesuai Planning
        ]
    },
    'Aksata Vest Lace': {
        kainUtama: 'Kain Aksata (Sesuai Varian)',
        materials: [
            { name: 'Bisban', qtyPerPcs: 3, unit: 'Meter' } // Sesuai Planning
        ]
    },
    'Obi Belt': {
        kainUtama: 'Kain Obi (Sesuai Varian)',
        materials: [
            { name: 'Ring Besi', qtyPerPcs: 1, unit: 'Pcs' } // Sesuai Planning
        ]
    },
    'Suar Bucket Hat': {
        kainUtama: 'Kain Suar (Sesuai Varian)',
        materials: [
            { name: 'Kain Keras', qtyPerPcs: 0.1, unit: 'Meter' } // Sesuai Planning
        ]
    }
};

// 5. Data PR (Menggunakan Produk di atas)
// GANTI BAGIAN: const prData = [...]

// --- UPDATE DATA PR (REVISI AGAR MUNCUL DI LIST) ---
const prData = [
    // 1. PR JAHIT REGULER (Setala Shirt & Obi Belt)
    { 
        id: 'PR-2025-009', 
        date: '2025-10-26', 
        type: 'Jahit', 
        status: 'Open', 
        isCustom: false, 
        deadline: '2025-11-10',
        items: [
            { 
                name: "Setala Shirt", 
                sku: "DMK-001",
                variants: [
                    { color: "Hitam", size: "M", qty: 10, fabric: "Kain Setala (Hitam)" },
                    { color: "Hitam", size: "L", qty: 20, fabric: "Kain Setala (Hitam)" },
                    { color: "Navy", size: "XL", qty: 15, fabric: "Kain Setala (Navy)" }
                ]
            },
            { 
                name: "Obi Belt", 
                sku: "DMK-005",
                variants: [
                    { color: "Maroon", size: "All Size", qty: 50, fabric: "Kain Obi (Maroon)" }
                ]
            }
        ]
    },

    // 2. PR DARI CUSTOM ORDER
    { 
        id: 'PR-2025-CUST-95', 
        date: '2025-10-28', 
        type: 'Jahit', 
        status: 'Open', 
        isCustom: true, 
        deadline: '2025-11-01',
        customNote: 'Ref: CUST-095 (Ibu Ratna Sarumpaet) - Seragam Keluarga [Material Sudah Ready]',
        items: [
            { 
                name: "Tunik Ibu & Nenek (Custom)", 
                sku: "CUST-095-A",
                variants: [
                    { color: "Sage Green", size: "L", qty: 2, fabric: "Sutra Viscose Premium" },
                    { color: "Sage Green", size: "XL", qty: 3, fabric: "Sutra Viscose Premium" },
                    { color: "Dusty Pink", size: "M", qty: 2, fabric: "Sutra Viscose Premium" }
                ] 
            },
            { 
                name: "Kemeja Koko Anak (Custom)", 
                sku: "CUST-095-B",
                variants: [
                    { color: "Sage Green", size: "4 Th", qty: 2, fabric: "Katun Toyobo Fodu" },
                    { color: "Sage Green", size: "6 Th", qty: 1, fabric: "Katun Toyobo Fodu" }
                ] 
            }
        ]
    },

    // 3. PR PEMBELIAN KAIN (DIPERBAIKI AGAR MUNCUL)
    { 
        id: 'PR-2025-010', 
        date: '2025-10-27', 
        type: 'Kain', 
        status: 'Open', 
        isCustom: false, 
        deadline: '2025-11-01',
        items: [
            { 
                name: "Kain Kala (Series)", 
                sku: "MAT-KAL-SERIES",
                variants: [ 
                    // Size di sini diabaikan atau diset 'Yard'
                    { color: "Hitam", size: "Yard", qty: 200, fabric: "F-KAL-BLK" },
                    { color: "Electric Blue", size: "Yard", qty: 300, fabric: "F-KAL-BLU" }
                ]
            }
        ]
    }
];

// 6. Data WO Existing
let woData = [
    { 
        id: 'WO-2025-001', 
        prRef: 'PR-2025-009', 
        vendor: 'Konveksi Bu Susi', 
        type: 'Jahit', 
        status: 'In Production', 
        date: '2025-10-28', 
        deadline: '2025-11-15',
        docFile: 'WO-001-Signed_Contract.pdf', // Lampiran File
        items: [
            { 
                name: "Setala Shirt", 
                sku: "DMK-001",
                img: "setalashirt.jpeg", // Referensi gambar
                variants: [
                    { color: "Hitam", size: "M", qty: 10, fabric: "Kain Setala (Hitam)" },
                    { color: "Hitam", size: "L", qty: 20, fabric: "Kain Setala (Hitam)" },
                    { color: "Navy", size: "XL", qty: 15, fabric: "Kain Setala (Navy)" }
                ]
            },
            { 
                name: "Obi Belt", 
                sku: "DMK-005",
                img: "obibelt.jpeg",
                variants: [
                    { color: "Maroon", size: "All Size", qty: 50, fabric: "Kain Obi (Maroon)" }
                ]
            }
        ]
    },

    // 2. WO JAHIT CUSTOM (Dari Custom Order CUST-095)
    { 
        id: 'WO-2025-CUST-95', 
        prRef: 'PR-2025-CUST-95', 
        vendor: 'Konveksi Bu Susi', // Vendor sama, tapi WO terpisah karena project
        type: 'Jahit', 
        status: 'Pending', 
        date: '2025-10-29', 
        deadline: '2025-11-05',
        docFile: 'Spec-Custom-Ratna.pdf',
        isCustom: true,
        items: [
            { 
                name: "Tunik Ibu & Nenek (Custom)", 
                sku: "CUST-095-A",
                img: null, // Custom tidak ada foto master
                variants: [
                    { color: "Sage Green", size: "L, XL", qty: 5, fabric: "Sutra Viscose Premium" },
                    { color: "Dusty Pink", size: "M", qty: 2, fabric: "Sutra Viscose Premium" }
                ] 
            },
            { 
                name: "Kemeja Koko Anak (Custom)", 
                sku: "CUST-095-B",
                img: null,
                variants: [
                    { color: "Sage Green", size: "4 Th, 6 Th", qty: 3, fabric: "Katun Toyobo Fodu" }
                ] 
            }
        ]
    },

    // 3. WO PEMBELIAN KAIN (Vendor: CV Textil Jaya)
    { 
        id: 'WO-2025-MAT-02', 
        prRef: 'PR-2025-010', 
        vendor: 'CV Textil Jaya', 
        type: 'Kain', 
        status: 'Completed', 
        date: '2025-10-27', 
        deadline: '2025-11-01',
        docFile: 'PO-Kain-TextilJaya.pdf',
        items: [
            { 
                name: "Kain Kala (Series)", 
                sku: "MAT-KAIN-002",
                variants: [ 
                    { color: "Hitam Pekat", size: "Yard", qty: 200, fabric: "F-KAL-BLK" },
                    { color: "Electric Blue", size: "Yard", qty: 300, fabric: "F-KAL-BLU" }
                ]
            }
        ]
    },
    { 
        id: 'WO-2025-MAT-MIX', prRef: 'PR-2025-012', vendor: 'CV Textil Jaya', 
        type: 'Kain', status: 'Pending', date: '2025-10-30', deadline: '2025-11-05',
        isCustom: false,
        items: [
            { 
                name: "Kain Kala (Series)", sku: "MAT-KAL-SERIES",
                variants: [ 
                    // File desain akan diambil dari Master Kain berdasarkan ID Fabric
                    { color: "Hitam Pekat", size: "Yard", qty: 200, fabric: "F-KAL-BLK" },
                    { color: "Electric Blue", size: "Yard", qty: 300, fabric: "F-KAL-BLU" }
                ]
            },
            { 
                name: "Kain Arkana (Series)", sku: "MAT-ARK-SERIES",
                variants: [ 
                    { color: "Navy", size: "Yard", qty: 150, fabric: "F-ARK-NVY" }
                ]
            }
        ]
    }
];

// Data Riwayat Transaksi Vendor (Untuk Evaluasi)
const vendorHistoryData = [
    { 
        id: 'WO-1001', vendorId: 'V-001', date: '2025-11-01', item: 'Jahit Kemeja Setala', 
        deadline: '2025-11-15', actualDate: '2025-11-14', // On Time
        qtyOrder: 100, qtyReceived: 100, qtyDefect: 2, 
        status: 'Selesai' 
    },
    { 
        id: 'WO-1002', vendorId: 'V-001', date: '2025-11-20', item: 'Jahit Blouse Kala', 
        deadline: '2025-12-01', actualDate: '2025-12-03', // Telat
        qtyOrder: 50, qtyReceived: 50, qtyDefect: 0, 
        status: 'Selesai' 
    },
    { 
        id: 'WO-1003', vendorId: 'V-001', date: '2025-12-05', item: 'Jahit Vest Arkana', 
        deadline: '2025-12-20', actualDate: '2025-12-18', // On Time
        qtyOrder: 200, qtyReceived: 195, qtyDefect: 5, // Ada Defect
        status: 'Selesai' 
    },
    // Vendor Lain
    { 
        id: 'WO-2001', vendorId: 'V-002', date: '2025-12-10', item: 'Supply Kain Toyobo', 
        deadline: '2025-12-15', actualDate: '2025-12-15', 
        qtyOrder: 500, qtyReceived: 500, qtyDefect: 0, 
        status: 'Selesai' 
    }
];

let prFilterState = {
    status: 'Open', 
    type: 'all',    // <--- JANGAN ubah jadi 'Kain' atau 'Jahit'
    search: '',
    date: ''
};

/* --- LOGIC APP --- */

// Auth & Navigation
document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    document.getElementById('login-section').classList.add('hidden');
    document.getElementById('main-app').classList.remove('hidden');
    initDashboard();
});

function logout() { location.reload(); }

function navigate(pageId) {
    document.querySelectorAll('.page-content').forEach(p => p.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
    
    // Active Menu Highlight (UPDATED SELECTOR TO MATCH NEW STYLE)
    document.querySelectorAll('.nav-links li').forEach(li => li.classList.remove('active'));
    const menuMap = { 'dashboard':0, 'pr-page':1, 'wo-page':2, 'inventory-page':3, 'vendor-page':4 };
    const idx = menuMap[pageId];
    if(idx !== undefined) document.querySelectorAll('.nav-links li')[idx].classList.add('active');

    // Init Page Specific Logic
    if(pageId === 'dashboard') initDashboard();
    if(pageId === 'pr-page') renderPR('all');
    if(pageId === 'wo-page') renderWO('all');
    if(pageId === 'inventory-page') renderInventory();
    if(pageId === 'vendor-page') renderVendor();
}

// --- DASHBOARD ---
// --- DASHBOARD ---
function initDashboard() {
    // 1. Render Table (Existing Logic)
    const tbody = document.getElementById('dashboard-wo-table');
    tbody.innerHTML = '';
    // Ambil hanya 5 WO terakhir agar tidak kepanjangan
    woData.slice(0, 5).forEach(wo => {
        // Tentukan warna badge
        let badgeClass = 'info';
        if(wo.status === 'Selesai') badgeClass = 'success';
        if(wo.status === 'Sent to Vendor') badgeClass = 'warning';

        tbody.innerHTML += `
            <tr>
                <td><b>${wo.id}</b></td>
                <td>${wo.vendor}</td>
                <td>${wo.type}</td>
                <td style="color:${wo.status !== 'Selesai' ? 'var(--danger)' : 'inherit'}">${wo.deadline}</td>
                <td><span class="badge ${badgeClass}">${wo.status}</span></td>
            </tr>
        `;
    });

    // 2. Render Widgets (NEW)
    renderCalendar();
    renderNotifications();
}

function renderCalendar() {
    const grid = document.getElementById('calendar-grid');
    grid.innerHTML = '';

    // Konteks Waktu: Desember 2025
    const currentDate = new Date(2025, 11, 27); // 27 Des 2025
    const year = 2025;
    const month = 11; // 11 = Desember

    // Setup tanggal
    const firstDay = new Date(year, month, 1).getDay(); // Hari apa tgl 1 dimulai (0=Minggu, 1=Senin...)
    const daysInMonth = new Date(year, month + 1, 0).getDate(); // Total hari di bulan ini

    // Render kotak kosong sebelum tanggal 1
    for (let i = 0; i < firstDay; i++) {
        grid.innerHTML += `<div class="cal-date empty"></div>`;
    }

    // Render tanggal 1 s/d 31
    for (let day = 1; day <= daysInMonth; day++) {
        let classes = 'cal-date';
        let tooltipHtml = ''; // Default kosong

        // 1. Highlight Hari Ini
        if (day === currentDate.getDate()) classes += ' today';
        
        // 2. Cek Deadline WO
        // Format tanggal saat ini menjadi YYYY-MM-DD agar sama dengan format di woData
        const currentCheckDate = `${year}-${String(month+1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        
        // Cari WO yang deadlinenya sama dengan tanggal ini
        const activeWOs = woData.filter(w => w.deadline === currentCheckDate);

        if (activeWOs.length > 0) {
            classes += ' has-deadline';
            
            // Ambil ID WO-nya saja untuk ditampilkan di tooltip
            const woIds = activeWOs.map(w => w.id).join(', ');
            
            // Buat HTML Tooltip
            tooltipHtml = `<span class="cal-tooltip">Deadline: ${woIds}</span>`;
        }

        // Render HTML
        // Tooltip dimasukkan ke dalam div cal-date
        grid.innerHTML += `
            <div class="${classes}">
                ${day}
                ${tooltipHtml}
            </div>
        `;
    }
}

function renderNotifications() {
    const notifContainer = document.getElementById('dashboard-notifs');
    
    // Data Dummy Notifikasi (Sesuai request)
    const notifications = [
        { 
            icon: 'fa-file-invoice', color: '#e0f2fe', iconColor: '#0284c7', 
            title: 'New PR #12729 Suggested', 
            desc: 'Permintaan kain baru perlu approval.', time: '20 Menit lalu' 
        },
        { 
            icon: 'fa-triangle-exclamation', color: '#fee2e2', iconColor: '#dc2626', 
            title: 'Stok Kritis: Kain Parang', 
            desc: 'Stok fisik di bawah safety level (45 Yard).', time: '1 Jam lalu' 
        },
        { 
            icon: 'fa-clock', color: '#ffedd5', iconColor: '#c2410c', 
            title: 'Approaching Deadline', 
            desc: '3 Hari lagi untuk WO #38928 (Jahit).', time: '3 Jam lalu' 
        },
        { 
            icon: 'fa-box-open', color: '#dcfce7', iconColor: '#166534', 
            title: 'Barang Diterima', 
            desc: 'Vendor CV Textil Jaya mengirimkan pesanan.', time: 'Kemarin' 
        }
    ];

    notifContainer.innerHTML = '';
    notifications.forEach(n => {
        notifContainer.innerHTML += `
            <div class="notif-item">
                <div class="notif-icon" style="background:${n.color}; color:${n.iconColor};">
                    <i class="fa-solid ${n.icon}"></i>
                </div>
                <div class="notif-content">
                    <h4>${n.title}</h4>
                    <p>${n.desc}</p>
                    <span class="notif-time">${n.time}</span>
                </div>
            </div>
        `;
    });
}

// --- PR VIEW ---
function renderPR() {
    applyPRFilters();
}

// 2. Fungsi Logika Filter & Sorting
function applyPRFilters() {
    prFilterState.search = document.getElementById('pr-search-input').value.toLowerCase();
    prFilterState.date = document.getElementById('pr-date-filter').value;
    prFilterState.type = document.getElementById('pr-type-filter').value;

    const tbody = document.getElementById('pr-table-body');
    const emptyState = document.getElementById('pr-empty-state');
    tbody.innerHTML = '';

    let filtered = prData.filter(p => {
        const statusMatch = (prFilterState.status === 'Open') ? (p.status === 'Open') : (p.status === 'Selesai');
        const typeMatch = (prFilterState.type === 'all') || (p.type === prFilterState.type);
        // Cek nama item pertama
        const firstItem = p.items[0] ? p.items[0].name.toLowerCase() : '';
        const searchMatch = p.id.toLowerCase().includes(prFilterState.search) || firstItem.includes(prFilterState.search);
        let dateMatch = true;
        if(prFilterState.date) dateMatch = p.deadline === prFilterState.date;
        return statusMatch && typeMatch && searchMatch && dateMatch;
    });

    if (filtered.length === 0) {
        emptyState.classList.remove('hidden');
    } else {
        emptyState.classList.add('hidden');
        filtered.forEach(pr => {
            let badgeClass = pr.type === 'Jahit' ? 'type-jahit' : 'type-kain';
            
            // Hitung total item dari varian
            let totalItemCount = 0;
            let itemName = pr.items[0] ? pr.items[0].name : 'Unknown';
            let variantInfo = '';

            pr.items.forEach(i => {
                if(i.variants) i.variants.forEach(v => totalItemCount += v.qty);
            });

            if(pr.items.length > 0 && pr.items[0].variants && pr.items[0].variants.length > 0) {
                 variantInfo = pr.items[0].variants[0].color + ' ' + pr.items[0].variants[0].size;
            }

            let actionBtn = pr.status === 'Open' 
                ? `<button class="btn-icon" onclick="openPRDetail('${pr.id}')" title="Lihat Detail"><i class="fa-solid fa-eye"></i></button>` 
                : `<button class="btn-icon" title="History"><i class="fa-solid fa-check-double"></i></button>`;

            tbody.innerHTML += `
                <tr>
                    <td><b>${pr.id}</b></td>
                    <td>${pr.date}</td>
                    <td><span class="badge ${badgeClass}">${pr.type}</span></td>
                    <td>
                        <div style="font-weight:500;">${itemName}</div>
                        <div style="font-size:11px; color:#888;">${pr.items.length > 1 ? `(+${pr.items.length - 1} SKU lainnya)` : variantInfo}</div> 
                    </td>
                    <td>${pr.deadline}</td>
                    <td>${actionBtn}</td>
                </tr>
            `;
        });
    }
}

// 3. Helper Switch Tab (Active vs History)
function switchPRTab(status) {
    prFilterState.status = status;
    updatePRTabUI();
    applyPRFilters();
}

function updatePRTabUI() {
    // Reset kelas active
    document.getElementById('tab-pr-open').className = 'tab-btn';
    document.getElementById('tab-pr-history').className = 'tab-btn';
    
    // Set active sesuai state
    if(prFilterState.status === 'Open') {
        document.getElementById('tab-pr-open').classList.add('active');
    } else {
        document.getElementById('tab-pr-history').classList.add('active');
    }
}

// PR DETAIL MODAL
// --- REVISI FUNGSI DETAIL PR (HIERARKI: PRODUK > WARNA > MATERIAL) ---
// --- REVISI FINAL FUNGSI DETAIL PR (ADAPTIF: JAHIT VS KAIN) ---
// --- REVISI FINAL FUNGSI DETAIL PR (DENGAN LAMPIRAN DESAIN) ---
// --- REVISI FINAL: FIX ELECTRIC BLUE & ADD FILE PDF ATTACHMENT ---
// --- REVISI FINAL FUNGSI DETAIL PR (HAPUS ROLL -> YARD ONLY) ---
// --- REVISI: DETAIL PR (LEBIH DETAIL MATERIAL & KAIN PER WARNA) ---
function openPRDetail(id) {
    const pr = prData.find(p => p.id === id);
    if(!pr) return;

    // ... (Bagian Header & Navigasi tetap sama) ...
    document.querySelectorAll('.page-content').forEach(p => p.classList.add('hidden'));
    document.getElementById('pr-detail-page').classList.remove('hidden');
    document.getElementById('view-pr-id').innerText = pr.id;
    document.getElementById('view-pr-date').innerText = pr.date;
    document.getElementById('view-pr-deadline').innerText = pr.deadline;
    document.getElementById('view-pr-type').innerText = pr.type;
    document.getElementById('btn-detail-generate-wo').onclick = () => setupCreateWO(pr.id);

    const container = document.getElementById('view-pr-items-container');
    container.innerHTML = ''; 

    pr.items.forEach(item => {
        const productMaster = products.find(p => p.name === item.name) || {};
        const hasRecipe = productMaster && productMaster.recipe;

        // Grouping Varian
        const variantsByColor = {};
        let totalProductQty = 0;
        if(item.variants) {
            item.variants.forEach(v => {
                const colorKey = v.color || 'General';
                if(!variantsByColor[colorKey]) {
                    // Simpan nama kain spesifik dari data varian
                    variantsByColor[colorKey] = { 
                        items: [], totalQty: 0, 
                        fabricName: v.fabric || 'Kain Utama' 
                    };
                }
                variantsByColor[colorKey].items.push(v);
                variantsByColor[colorKey].totalQty += v.qty;
                totalProductQty += v.qty;
            });
        }

        // Render Varian
        let colorSectionsHtml = '';
        for (const [colorName, data] of Object.entries(variantsByColor)) {
            let tableHeader = pr.type === 'Kain' ? `<thead><tr><th>Satuan</th><th style="text-align:right;">Jml</th></tr></thead>` : `<thead><tr><th>Size</th><th style="text-align:right;">Qty</th></tr></thead>`;
            let sizeRows = '';
            data.items.forEach(v => {
                let unitLabel = pr.type === 'Kain' ? 'Yard' : v.size;
                sizeRows += `<tr><td>${unitLabel}</td><td style="text-align:right;"><strong>${v.qty}</strong></td></tr>`;
            });

            // LOGIC KANAN: Detail Kain Spesifik
            let rightColumnHtml = '';
            if (pr.type === 'Jahit') {
                let fabricRate = hasRecipe ? productMaster.recipe.fabricQty : 1.5;
                let totalFab = (data.totalQty * fabricRate).toFixed(1);
                
                rightColumnHtml = `
                    <div class="mat-box-specific">
                        <span class="mat-title"><i class="fa-solid fa-scroll"></i> Spesifikasi Kain</span>
                        
                        <div style="font-weight:600; color:#333; margin-bottom:5px; border-bottom:1px solid #eee; padding-bottom:5px;">
                            ${data.fabricName}
                        </div>

                        <div class="mat-row" style="padding-top:5px;">
                            <span class="text-muted">Kebutuhan (${fabricRate}m x ${data.totalQty}):</span>
                            <strong style="color:var(--primary); font-size:1.1rem;">${totalFab} Meter</strong>
                        </div>
                    </div>
                `;
            } else {
                // (Logic PR Kain tetap sama -> Info Gudang)
                rightColumnHtml = `<div class="mat-box-specific" style="background:#f0f9ff;"><span class="mat-title">Info Gudang</span><div>Stok Masuk: <b>Gudang Kain A</b></div></div>`;
            }

            colorSectionsHtml += `
                <div class="color-section">
                    <div class="color-header-title"><i class="fa-solid fa-palette"></i> ${colorName}</div>
                    <div class="variant-layout-grid">
                        <div class="size-col"><table class="size-table-clean">${tableHeader}<tbody>${sizeRows}</tbody></table></div>
                        <div class="mat-col">${rightColumnHtml}</div>
                    </div>
                </div>
            `;
        }

        // UPDATE: Footer Material per Produk
        let commonMaterialHtml = '';
        if (pr.type === 'Jahit' && hasRecipe && productMaster.recipe.extras) {
            let commonItems = '';
            productMaster.recipe.extras.forEach(ext => {
                let totalNeed = Math.ceil(totalProductQty * ext.qty);
                commonItems += `
                    <div class="common-item">
                        <span>${ext.name}</span>
                        <strong style="color:var(--text-dark);">${totalNeed} ${ext.unit}</strong>
                    </div>`;
            });
            commonMaterialHtml = `
                <div class="common-mat-footer">
                    <div style="font-size:0.85rem; font-weight:700; color:#64748b; margin-bottom:10px;">
                        <i class="fa-solid fa-box-open"></i> MATERIAL PENDUKUNG (PER PRODUK)
                    </div>
                    <div class="common-grid">${commonItems}</div>
                </div>`;
        }

        container.innerHTML += `
            <div class="prod-group-card">
                <div class="prod-header">
                    <div class="prod-title">${item.name}</div>
                    <span class="badge info">Total: ${totalProductQty}</span>
                </div>
                ${colorSectionsHtml}
                ${commonMaterialHtml}
            </div>`;
    });
}

function closeModal(id) { document.getElementById(id).classList.add('hidden'); }

// --- WO LIST ---
// --- UPDATE: WO VIEW (Ganti Button jadi Icon Mata) ---
// --- REVISI FUNGSI RENDER WO (FIX FILTER & DATA BARU) ---
let woFilterState = { 
    tab: 'active', // Default: Sedang Berjalan
    status: 'all', 
    type: 'all', 
    search: '', 
    date: '' 
};

// --- PERBAIKAN FUNGSI RENDER WO ---
// --- REVISI FUNGSI RENDER WO (VISUAL STATUS & DEADLINE ALERT) ---
// --- REVISI FUNGSI RENDER WO (DENGAN LOGIC TAB) ---
function renderWO() {
    // Safety check elemen HTML
    const searchEl = document.getElementById('wo-search-input');
    const statusEl = document.getElementById('wo-status-filter');
    const typeEl = document.getElementById('wo-type-filter');
    if (!searchEl) return;

    // Update state dari input user
    woFilterState.search = searchEl.value.toLowerCase();
    woFilterState.status = statusEl.value;
    woFilterState.type = typeEl.value; 

    const tbody = document.getElementById('wo-table-body');
    tbody.innerHTML = '';

    // LOGIC FILTERING
    let filtered = woData.filter(w => {
        // 1. Filter TAB (Pemisahan Active vs History)
        let tabMatch = false;
        if (woFilterState.tab === 'active') {
            // Tab Active: Tampilkan yang BELUM Completed
            tabMatch = (w.status !== 'Completed');
        } else {
            // Tab History: Tampilkan HANYA yang Completed
            tabMatch = (w.status === 'Completed');
        }

        // 2. Filter Dropdown Status (Optional)
        // Jika user memilih status spesifik di dropdown
        const matchStatus = (woFilterState.status === 'all') || (w.status === woFilterState.status);
        
        // 3. Filter Tipe & Search
        const matchType = (woFilterState.type === 'all') || (w.type === woFilterState.type);
        const firstItem = w.items[0] ? w.items[0].name.toLowerCase() : '';
        const matchSearch = w.id.toLowerCase().includes(woFilterState.search) || 
                            w.vendor.toLowerCase().includes(woFilterState.search) ||
                            firstItem.includes(woFilterState.search);

        return tabMatch && matchStatus && matchType && matchSearch;
    });

    // EMPTY STATE
    if (filtered.length === 0) {
        let msg = woFilterState.tab === 'active' 
            ? 'Tidak ada Work Order yang sedang berjalan.' 
            : 'Belum ada riwayat Work Order yang selesai.';
        
        tbody.innerHTML = `<tr><td colspan="8" class="text-center text-muted" style="padding:30px;">${msg}</td></tr>`;
        return;
    }

    const today = new Date(); 

    // RENDER BARIS TABEL
    filtered.forEach(wo => {
        // Badge Status
        let badgeClass = 'badge-secondary';
        if (wo.status === 'Pending') badgeClass = 'badge-warning';
        else if (wo.status === 'In Production') badgeClass = 'badge-info';
        else if (wo.status === 'Completed') badgeClass = 'badge-success';

        let typeBadgeClass = wo.type === 'Kain' ? 'type-kain' : 'type-jahit';

        // Indikator Deadline (Hanya di Tab Active)
        let deadlineHtml = wo.deadline;
        if (wo.status !== 'Completed') {
            const deadlineDate = new Date(wo.deadline);
            const diffDays = Math.ceil((deadlineDate - today) / (1000 * 60 * 60 * 24)); 
            if (diffDays <= 3) {
                let tooltip = diffDays < 0 ? `Telat ${Math.abs(diffDays)} hari!` : `Sisa ${diffDays} hari!`;
                deadlineHtml += ` <span class="deadline-alert" title="${tooltip}"><i class="fa-solid fa-circle-exclamation"></i></span>`;
            }
        }

        // Summary Item
        let itemInfo = wo.items[0].name;
        if (wo.items.length > 1) itemInfo += ` <small class="text-muted">(+${wo.items.length - 1} lainnya)</small>`;

        // Tombol Aksi
        // Jika Tab History -> Tombolnya mungkin hanya lihat detail, tidak perlu edit
        let actionBtn = `<button class="btn-icon" onclick="openWODetail('${wo.id}')" title="Lihat Detail">
                            <i class="fa-solid fa-file-contract"></i>
                         </button>`;

        tbody.innerHTML += `
            <tr>
                <td><b>${wo.id}</b></td>
                <td>${wo.date}</td>
                <td><span style="font-weight:600; color:#444;">${wo.vendor}</span></td>
                <td>${itemInfo}</td>
                <td><span class="badge ${typeBadgeClass}">${wo.type}</span></td>
                <td><span class="badge ${badgeClass}">${wo.status}</span></td>
                <td>${deadlineHtml}</td>
                <td>${actionBtn}</td>
            </tr>
        `;
    });
}

// --- BARU: LOGIKA DETAIL WO (Halaman Baru + Matriks) ---
// --- REVISI FUNGSI DETAIL WO (LAYOUT PR + FILE ATTACHMENT) ---
// --- REVISI FINAL FUNGSI DETAIL WO (VISUALISASI RAPI & TERSTRUKTUR) ---
// --- REVISI FINAL: WO DETAIL (EMAIL, BUTTON SUBMIT, FILE LOGIC FIX) ---
// --- REVISI FINAL: WO DETAIL (LENGKAP DENGAN MATERIAL TAMBAHAN/AKSESORIS) ---
function openWODetail(id) {
    const wo = woData.find(w => w.id === id);
    if(!wo) return;

    // 1. Setup Navigasi
    document.querySelectorAll('.page-content').forEach(p => p.classList.add('hidden'));
    document.getElementById('wo-detail-page').classList.remove('hidden');

    // 2. Render Header
    document.getElementById('view-wo-id').innerText = wo.id;
    document.getElementById('view-wo-date').innerText = wo.date;
    document.getElementById('view-wo-deadline').innerText = wo.deadline;
    
    const statusEl = document.getElementById('view-wo-status');
    statusEl.innerText = wo.status;
    statusEl.className = `badge ${wo.status === 'Completed' ? 'badge-success' : (wo.status === 'Pending' ? 'badge-warning' : 'badge-info')}`;

    // Inject Tombol Submit & Print
    const navBtnContainer = document.querySelector('#wo-detail-page .form-header-nav div[style*="display:flex"]');
    if(navBtnContainer) {
        navBtnContainer.innerHTML = `
            <button class="btn btn-secondary" onclick="window.print()">
                <i class="fa-solid fa-print"></i> Print
            </button>
        `;
    }

    const container = document.getElementById('view-wo-items-container');
    container.innerHTML = ''; 

    // 3. Render Info Transaksi (Email & Alur)
    const vendorDetail = vendors.find(v => v.name === wo.vendor) || { address: 'Alamat tidak tersedia', contact: '-', email: 'no-email@vendor.com' };
    
    const transactionHeaderHtml = `
        <div class="wo-transaction-card">
            <div class="wo-party sender">
                <div class="party-icon"><i class="fa-solid fa-building"></i></div>
                <div class="wo-party-info">
                    <span class="party-label">Pengirim</span>
                    <span class="party-name">Dama Kara HQ</span>
                    <span class="party-detail">Jl. Batik No. 1, Bandung</span>
                    <span class="party-detail" style="color:var(--primary); font-size:0.8rem;"><i class="fa-solid fa-envelope"></i> procurement@damakara.com</span>
                </div>
            </div>
            <div class="wo-route-line"><div class="wo-route-icon"><i class="fa-solid fa-arrow-right"></i></div></div>
            <div class="wo-party receiver">
                <div class="wo-party-info">
                    <span class="party-label">Penerima</span>
                    <span class="party-name">${wo.vendor}</span>
                    <span class="party-detail">${vendorDetail.address}</span>
                    <span class="party-detail" style="color:#3b82f6; font-size:0.8rem;"><i class="fa-solid fa-envelope"></i> ${vendorDetail.email}</span>
                </div>
                <div class="party-icon"><i class="fa-solid fa-industry"></i></div>
            </div>
        </div>
    `;
    container.innerHTML += transactionHeaderHtml;

    // 4. Render Items (Produk Loop)
    wo.items.forEach(item => {
        const productMaster = products.find(p => p.name === item.name) || {};
        const hasRecipe = productMaster && productMaster.recipe;

        // A. File Lampiran (Techpack)
        let productFileHtml = '';
        let displayImg = item.img ? item.img : (productMaster.img || '');
        let displayFile = item.isCustom ? 'Custom-Spec.pdf' : (productMaster.designFile || '');

        if (wo.type === 'Jahit' && displayFile) {
            productFileHtml = `
                <div style="padding: 0 20px 15px 20px;">
                    <div class="file-attach-box" style="border:1px dashed #cbd5e1; background:#f8fafc;">
                        <div class="file-icon-wrapper" style="width:32px; height:32px; font-size:1rem;"><i class="fa-solid fa-swatchbook"></i></div>
                        <div class="file-info">
                            <span class="file-name" style="font-size:0.85rem;">${displayFile}</span>
                            <span class="file-meta">Techpack / Pola Potong</span>
                        </div>
                        <button class="btn-download" style="padding:4px 8px; font-size:0.8rem;">Lihat PDF</button>
                    </div>
                </div>
            `;
        }

        // Grouping Varian
        const variantsByColor = {};
        let totalProductQty = 0;
        if(item.variants) {
            item.variants.forEach(v => {
                const colorKey = v.color || 'General';
                if(!variantsByColor[colorKey]) {
                    variantsByColor[colorKey] = { items: [], totalQty: 0, fabricId: v.fabric, fabricName: v.fabric };
                }
                variantsByColor[colorKey].items.push(v);
                variantsByColor[colorKey].totalQty += v.qty;
                totalProductQty += v.qty;
            });
        }

        // B. HTML Varian (Size & Kain)
        let colorSectionsHtml = '';
        for (const [colorName, data] of Object.entries(variantsByColor)) {
            // Tabel Size
            let tableHeader = wo.type === 'Kain' ? `<thead><tr><th style="color:#888;">Satuan</th><th style="text-align:right;">Jml</th></tr></thead>` : `<thead><tr><th>Size</th><th style="text-align:right;">Qty</th></tr></thead>`;
            let sizeRows = '';
            data.items.forEach(v => {
                let unitLabel = wo.type === 'Kain' ? 'Yard' : v.size;
                sizeRows += `<tr><td>${unitLabel}</td><td style="text-align:right;"><strong>${v.qty}</strong></td></tr>`;
            });

            // Kolom Kanan (Kain / Gudang)
            let rightColumnHtml = '';
            if (wo.type === 'Jahit') {
                let fabricRate = hasRecipe ? productMaster.recipe.fabricQty : 1.5; 
                let totalFab = (data.totalQty * fabricRate).toFixed(1);
                rightColumnHtml = `
                    <div class="mat-box-specific">
                        <span class="mat-title"><i class="fa-solid fa-layer-group"></i> Material Kain</span>
                        <div class="mat-row" style="margin-bottom:5px;">
                            <span style="font-size:0.9rem; font-weight:500; color:#333;">${data.fabricName}</span>
                        </div>
                        <div class="mat-row" style="border-top:1px dashed #fed7aa; padding-top:5px;">
                            <span class="text-muted" style="font-size:0.85rem;">Butuh: ${data.totalQty} x ${fabricRate}m</span>
                            <strong style="color:var(--primary);">${totalFab} Meter</strong>
                        </div>
                    </div>
                `;
            } else {
                let fabricInfo = fabrics.find(f => f.id === data.fabricId);
                let fabricFileHtml = (fabricInfo && fabricInfo.designFile) ? `
                    <div class="file-attach-box" style="margin-top:10px; padding:8px; border:1px dashed #bae6fd; background:#f0f9ff;">
                        <div class="file-icon-wrapper" style="width:30px; height:30px; font-size:1rem;"><i class="fa-solid fa-file-pdf"></i></div>
                        <div class="file-info"><span class="file-name" style="font-size:0.8rem;">${fabricInfo.designFile}</span></div>
                    </div>` : '';

                rightColumnHtml = `
                    <div class="mat-box-specific" style="background:#f0f9ff; border-color:#bae6fd;">
                        <span class="mat-title" style="color:#0369a1;">Penerimaan Gudang</span>
                        <div style="font-size:0.85rem; color:#555;">Tujuan:</div>
                        <div style="font-weight:600; color:#0284c7;">Gudang Utama (Rak A-01)</div>
                        ${fabricFileHtml}
                    </div>
                `;
            }

            colorSectionsHtml += `
                <div class="color-section">
                    <div class="color-header-title"><i class="fa-solid fa-palette"></i> ${colorName}</div>
                    <div class="variant-layout-grid">
                        <div class="size-col"><table class="size-table-clean">${tableHeader}<tbody>${sizeRows}</tbody></table></div>
                        <div class="mat-col">${rightColumnHtml}</div>
                    </div>
                </div>
            `;
        }

        // --- C. LOGIC MATERIAL TAMBAHAN (FOOTER WO JAHIT) ---
        let commonMaterialHtml = '';
        if (wo.type === 'Jahit' && hasRecipe && productMaster.recipe.extras) {
            let commonItems = '';
            productMaster.recipe.extras.forEach(ext => {
                const totalNeed = Math.ceil(totalProductQty * ext.qty);
                commonItems += `
                    <div class="common-item">
                        <span>${ext.name}</span>
                        <strong style="color:var(--text-dark);">${totalNeed} ${ext.unit}</strong>
                    </div>
                `;
            });

            commonMaterialHtml = `
                <div class="common-mat-footer">
                    <div style="font-size:0.85rem; font-weight:700; color:#64748b; margin-bottom:10px; text-transform:uppercase;">
                        <i class="fa-solid fa-box-open"></i> Kebutuhan Aksesoris (Total ${totalProductQty} Pcs)
                    </div>
                    <div class="common-grid">${commonItems}</div>
                </div>
            `;
        } else if (wo.type === 'Jahit') {
            commonMaterialHtml = `<div class="common-mat-footer" style="color:#999; font-style:italic; font-size:0.9rem;">Tidak ada material tambahan di resep.</div>`;
        }

        // D. Render Final Card
        let imgHtml = displayImg ? `<img src="../gambar/${displayImg}" style="width:50px; height:50px; object-fit:cover; border-radius:6px; border:1px solid #eee; margin-right:12px;">` : '';
        
        container.innerHTML += `
            <div class="prod-group-card">
                <div class="prod-header">
                    <div class="prod-title" style="display:flex; align-items:center;">
                        ${imgHtml}
                        <div>
                            <div style="font-weight:700;">${item.name}</div>
                            <div style="font-size:0.8rem; font-weight:400; color:#64748b;">${item.sku}</div>
                        </div>
                    </div>
                    <span class="badge info" style="font-size:0.9rem;">Total: ${totalProductQty} ${wo.type==='Kain'?'Yard':'Pcs'}</span>
                </div>
                ${productFileHtml}
                ${colorSectionsHtml}
                ${commonMaterialHtml} </div>
        `;
    });
}

function filterWO(t) { renderWO(t); }

// --- CREATE WO FORM (COMPLEX LOGIC) ---
// --- REVISI FINAL: FORM WO (CLEAN LAYOUT, AUTO-FILL, & SMART CALC) ---
// --- REVISI FINAL: SETUP FORM WO (LAYOUT DETAIL & RAPI) ---
// --- REVISI: FORM WO (DENGAN NOTES SUMBER MATERIAL) ---
function setupCreateWO(prId) {
    const pr = prData.find(p => p.id === prId);
    if(!pr) return;

    navigate('wo-form-page');

    // ... (Bagian Auto Fill Header tetap sama) ...
    document.getElementById('wo-ref-pr').value = pr.id;
    document.getElementById('wo-type').value = pr.type;
    document.getElementById('wo-date').value = pr.deadline;
    
    const vSelect = document.getElementById('wo-vendor-select');
    vSelect.innerHTML = '<option value="">-- Pilih Vendor --</option>';
    vendors.filter(v => v.type === pr.type).forEach(v => {
        vSelect.innerHTML += `<option value="${v.id}">${v.name}</option>`;
    });
    document.getElementById('wo-vendor-details').value = '';

    const container = document.getElementById('wo-items-container');
    container.innerHTML = '';

    pr.items.forEach((item, index) => {
        const productMaster = products.find(p => p.name === item.name) || {};
        const hasRecipe = productMaster && productMaster.recipe;

        // ... (Bagian File Attachment & Input Varian Grid tetap sama) ...
        let fileAttachmentHtml = ''; // (Copy logika file dari sebelumnya)
        let fileSource = item.isCustom ? 'Custom-Spec.pdf' : (productMaster.designFile || '');
        if (pr.type === 'Jahit' && fileSource) {
            fileAttachmentHtml = `<div class="file-attach-box" style="margin:0 0 15px 0; background:#f0f9ff; border-color:#bae6fd;"><div class="file-icon-wrapper" style="background:#fff; color:#0284c7;"><i class="fa-solid fa-paperclip"></i></div><div class="file-info"><span class="file-name">${fileSource}</span><span class="file-meta">Auto-attached</span></div></div>`;
        }

        let variantInputsHtml = '';
        let totalQtyItem = 0;
        let fabricNeedsByColor = {}; 

        if (item.variants) {
            item.variants.forEach(v => {
                totalQtyItem += v.qty;
                let label = pr.type === 'Kain' ? `${v.color}` : `${v.color} - ${v.size}`;
                let unitLabel = pr.type === 'Kain' ? 'Yard' : 'Pcs';
                
                variantInputsHtml += `
                    <div><span class="variant-input-label">${label}</span>
                    <div class="input-group" style="display:flex; gap:5px;"><input type="number" value="${v.qty}" class="form-control" style="font-weight:bold;"><span class="input-group-text" style="background:#eee; padding:8px; border-radius:4px; font-size:0.8rem;">${unitLabel}</span></div></div>`;

                if (pr.type === 'Jahit') {
                    let fabName = v.fabric || "Kain Utama";
                    if(!fabricNeedsByColor[fabName]) fabricNeedsByColor[fabName] = 0;
                    fabricNeedsByColor[fabName] += v.qty;
                }
            });
        }

        // --- UPDATE: LOGIC KALKULASI DENGAN NOTES SUMBER ---
        let calculationHtml = '';

        if (pr.type === 'Jahit') {
            // KIRI: KAIN (DISEDIAKAN PERUSAHAAN)
            let fabricRows = '';
            let fabricRate = hasRecipe ? productMaster.recipe.fabricQty : 1.5; 
            for (const [fabName, totalQtyColor] of Object.entries(fabricNeedsByColor)) {
                let totalMeters = (totalQtyColor * fabricRate).toFixed(1);
                fabricRows += `
                    <div class="calc-item-row">
                        <span><i class="fa-solid fa-scroll" style="color:#aaa;"></i> ${fabName}</span>
                        <span class="calc-total">${totalMeters} m</span>
                    </div>`;
            }

            // KANAN: AKSESORIS (DISEDIAKAN VENDOR)
            let accRows = '';
            if (hasRecipe && productMaster.recipe.extras) {
                productMaster.recipe.extras.forEach(ext => {
                    let totalAcc = Math.ceil(totalQtyItem * ext.qty);
                    accRows += `
                        <div class="calc-item-row">
                            <span><i class="fa-solid fa-box-open" style="color:#aaa;"></i> ${ext.name}</span>
                            <span class="calc-total">${totalAcc} ${ext.unit}</span>
                        </div>`;
                });
            } else {
                accRows = '<small class="text-muted">Tidak ada.</small>';
            }

            calculationHtml = `
                <div class="wo-calc-container">
                    <div style="border-right:1px solid #e2e8f0; padding-right:15px;">
                        <span class="calc-section-title">
                            Kebutuhan Kain
                            <span class="source-tag source-company">Dari Perusahaan</span>
                        </span>
                        <div style="font-size:0.75rem; color:#15803d; margin-bottom:10px; background:#dcfce7; padding:5px; border-radius:4px;">
                            <i class="fa-solid fa-check"></i> Dikirim dari Gudang Pusat
                        </div>
                        ${fabricRows}
                    </div>

                    <div style="padding-left:15px;">
                        <span class="calc-section-title">
                            Material Pendukung
                            <span class="source-tag source-vendor">Dari Vendor</span>
                        </span>
                        <div style="font-size:0.75rem; color:#c2410c; margin-bottom:10px; background:#ffedd5; padding:5px; border-radius:4px;">
                            <i class="fa-solid fa-info-circle"></i> Vendor wajib menyediakan
                        </div>
                        ${accRows}
                    </div>
                </div>
            `;
        } else {
            // WO Kain
            calculationHtml = `<div class="wo-calc-container" style="grid-template-columns:1fr;"><div><span class="calc-section-title">Catatan Gudang</span><p class="text-muted">Cek kualitas kain (Handfeel & Warna) saat barang tiba.</p></div></div>`;
        }

        let imgHtml = (productMaster.img) ? `<img src="../gambar/${productMaster.img}" style="width:50px; height:50px; border-radius:6px; object-fit:cover;">` : '';
        
        container.innerHTML += `
            <div class="wo-form-card">
                <div class="wo-card-header">
                    <div style="display:flex; gap:15px; align-items:center;">
                        ${imgHtml}
                        <div><h4 style="margin:0; font-size:1.1rem; color:#1e293b;">${item.name}</h4></div>
                    </div>
                    <span class="badge info">Total Order: ${totalQtyItem}</span>
                </div>
                ${fileAttachmentHtml}
                <div class="wo-variant-grid">${variantInputsHtml}</div>
                ${calculationHtml} </div>`;
    });
}

// --- REVISI: fillVendorDetails (Tampilkan Email di Textarea) ---
function fillVendorDetails() {
    const vid = document.getElementById('wo-vendor-select').value;
    const v = vendors.find(x => x.id === vid);
    if(v) {
        document.getElementById('wo-vendor-details').value = 
            `Alamat: ${v.address}\nKontak: ${v.contact}\nEmail: ${v.email || '-'}`;
    } else {
        document.getElementById('wo-vendor-details').value = '';
    }
}

function submitWO(e) {
    e.preventDefault();
    const vid = document.getElementById('wo-vendor-select').value;
    const vendor = vendors.find(v => v.id === vid);
    const deadline = document.getElementById('wo-date').value;

    if (!vendor) return alert("Silakan pilih vendor!");

    // Hitung total Qty dari form WO
    const qtyInputs = document.querySelectorAll('#wo-items-container input[type="number"]');
    let totalOrderQty = 0;
    qtyInputs.forEach(input => totalOrderQty += parseInt(input.value || 0));

    // VALIDASI KAPASITAS
    // (Simulasi: kita asumsikan vendor sudah punya beban 80% dari pesanan lain bulan ini)
    const simulasiBebanSaatIni = vendor.maxCapacity * 0.8; 
    
    if ((simulasiBebanSaatIni + totalOrderQty) > vendor.maxCapacity) {
        // NOTIFIKASI PERINGATAN (Sesuai Permintaan Anda)
        const pesan = `PERINGATAN: Kapasitas produksi ${vendor.name} hampir penuh!\n\n` +
                      `Batas Maksimal: ${vendor.maxCapacity} unit/bulan\n` +
                      `Beban bulan ini: ${simulasiBebanSaatIni} unit\n` +
                      `Pesanan Baru: ${totalOrderQty} unit\n\n` +
                      `Sistem mendeteksi vendor tidak bisa mencapai kualitas produksi yang baik jika dipaksakan. Tetap terbitkan WO?`;
        
        if (!confirm(pesan)) return; // Berhenti jika user klik Cancel
    }

    // Jika aman atau user setuju, buat WO
    const newWo = {
        id: 'WO-' + Math.floor(Math.random()*9000+1000),
        prRef: document.getElementById('wo-ref-pr').value,
        vendor: vendor.name,
        type: document.getElementById('wo-type').value,
        qty: totalOrderQty,
        deadline: deadline,
        status: 'Sent to Vendor'
    };
    
    woData.unshift(newWo);
    alert('Work Order Berhasil Diterbitkan!');
    navigate('wo-page');
    renderWO('all');
}

// --- INVENTORY ---
function renderInventory() {
    const grid = document.getElementById('inventory-grid');
    grid.innerHTML = '';
    
    fabrics.forEach(f => {
        // Logika Status Badge
        let statusHtml = f.status === 'Active' 
            ? `<span class="card-badge-status status-active"><i class="fa-solid fa-circle-check"></i> Aktif</span>`
            : `<span class="card-badge-status status-inactive"><i class="fa-solid fa-ban"></i> Non-Aktif</span>`;

        // Logika Low Stock
        let isLowStock = f.stock <= f.minStock;
        let cardClass = isLowStock ? 'inv-card stock-warning' : 'inv-card';
        let stockColor = isLowStock ? '#dc2626' : '#166534';
        let stockAlert = isLowStock ? `<span class="stock-badge-low"><i class="fa-solid fa-triangle-exclamation"></i> Menipis</span>` : '';

        grid.innerHTML += `
            <div class="${cardClass}" onclick="openFabricDetail('${f.id}')">
                ${statusHtml}
                <div class="inv-img ${f.patternClass}"></div>
                <div class="inv-body">
                    <h4 style="margin-bottom:5px;">${f.name}</h4>
                    <p class="text-muted" style="font-size:12px">Motif: ${f.motif}</p>
                    <div style="margin-top:10px; display:flex; justify-content:space-between; align-items:center;">
                        <div>
                            <span style="color:${stockColor}; font-weight:bold; font-size:1.1rem;">${f.stock}</span> 
                            <span style="font-size:0.8rem; color:#666;">${f.unit}</span>
                            ${stockAlert}
                        </div>
                        <small class="text-muted" style="font-size:0.7rem;">Ref: ${f.product.split('/')[0]}</small>
                    </div>
                </div>
            </div>
        `;
    });
}

function openFabricDetail(id) {
    const f = fabrics.find(item => item.id === id);
    if(!f) return;

    // Buka Modal
    const modal = document.getElementById('modal-fabric');
    modal.classList.remove('hidden');

    // Isi Data ke Form
    document.getElementById('edit-fabric-id').value = f.id;
    document.getElementById('detail-f-id').value = f.id;
    document.getElementById('detail-f-name').value = f.name;
    document.getElementById('detail-f-motif').value = f.motif;
    document.getElementById('detail-f-mat').value = f.material || '-';
    document.getElementById('detail-f-stock').value = f.stock;
    document.getElementById('detail-f-unit').innerText = f.unit;
    
    // Set Status Color
    const statEl = document.getElementById('detail-f-status');
    statEl.value = f.status;
    statEl.style.color = f.status === 'Active' ? 'green' : 'red';

    // Set Image Preview (Pake Class Pattern yg sama)
    const imgDiv = document.getElementById('modal-fabric-img');
    imgDiv.className = `inv-img full-width ${f.patternClass}`;
}

function saveFabricStock(e) {
    e.preventDefault();
    const id = document.getElementById('edit-fabric-id').value;
    const newStock = parseFloat(document.getElementById('detail-f-stock').value);

    // Update Data Array
    const fIndex = fabrics.findIndex(item => item.id === id);
    if(fIndex !== -1) {
        fabrics[fIndex].stock = newStock;
        alert(`Stok ${fabrics[fIndex].name} berhasil diperbarui menjadi ${newStock} ${fabrics[fIndex].unit}`);
        
        closeModal('modal-fabric');
        renderInventory(); // Re-render untuk update tampilan kartu
    }
}

// --- VENDOR ---
function renderVendor() {
    const tbody = document.getElementById('vendor-table');
    if (!tbody) return; // Keamanan agar tidak error jika elemen tidak ada
    
    tbody.innerHTML = '';
    vendors.forEach(v => {
        tbody.innerHTML += `
            <tr>
                <td><b>${v.name}</b></td>
                <td>${v.type}</td>
                <td>${v.address}</td>
                <td>${v.contact}</td>
                <td><strong>${v.maxCapacity || 0}</strong> <small class="text-muted">Unit</small></td>
                <td>
                    <button class="btn-text" onclick="showVendorDetail('${v.id}')">
                        <i class="fa-solid fa-chart-line"></i> Detail
                    </button>
                </td>
            </tr>
        `;
    });
}
// Fungsi membuka modal
function openAddVendorModal() {
    document.getElementById('modal-add-vendor').classList.remove('hidden');
}

// Fungsi menyimpan vendor baru
function saveNewVendor(e) {
    e.preventDefault();
    
    const newVendor = {
        id: 'V-00' + (vendors.length + 1),
        name: document.getElementById('v-new-name').value,
        type: document.getElementById('v-new-type').value,
        address: document.getElementById('v-new-address').value,
        contact: document.getElementById('v-new-contact').value,
        maxCapacity: parseInt(document.getElementById('v-new-capacity').value) || 0
    };

    vendors.push(newVendor); // Masukkan ke database sementara
    alert('Vendor ' + newVendor.name + ' berhasil didaftarkan!');
    
    // Reset form dan tutup modal
    e.target.reset();
    closeModal('modal-add-vendor');
    
    // Render ulang tabel agar data baru muncul
    renderVendor();
}
// --- UPDATE: VENDOR DETAIL WITH EVALUATION LOGIC ---
// --- REVISI: showVendorDetail (Tampilkan Email di Header) ---
function showVendorDetail(vid) {
    navigate('vendor-detail-view');
    const v = vendors.find(x => x.id === vid);
    if (!v) return;

    // 1. Render Info Dasar
    document.getElementById('detail-vendor-name').innerText = v.name;
    document.getElementById('detail-vendor-type').innerText = v.type;
    
    // Update bagian Kontak & Email
    const infoHtml = `
        <div style="margin-top:10px; color:#555;">
            <div style="margin-bottom:5px;"><i class="fa-solid fa-location-dot" style="color:var(--primary); width:20px;"></i> ${v.address}</div>
            <div style="margin-bottom:5px;"><i class="fa-solid fa-phone" style="color:var(--primary); width:20px;"></i> ${v.contact}</div>
            <div><i class="fa-solid fa-envelope" style="color:var(--primary); width:20px;"></i> ${v.email || '-'}</div>
        </div>
    `;
    
    // Cari elemen parent alamat/kontak (karena id detail-vendor-address & detail-vendor-contact terpisah di HTML lama, kita inject ulang parentnya atau update isinya)
    // Sederhananya, kita update manual element ID yang ada dan tambahkan email di bawahnya secara manual via JS jika struktur HTML statis
    document.getElementById('detail-vendor-address').innerText = v.address;
    document.getElementById('detail-vendor-contact').innerHTML = `${v.contact} <br> <i class="fa-solid fa-envelope" style="color:var(--primary); margin-right:5px;"></i> ${v.email || '-'}`;

    // ... (Sisa logika evaluasi history biarkan sama) ...
    // Copy paste sisa fungsi showVendorDetail yang lama di bawah ini:
    const history = vendorHistoryData.filter(h => h.vendorId === vid);
    const totalWO = history.length;
    
    let lateCount = 0;
    let totalDefect = 0;
    let totalQtyReceived = 0;

    const tbody = document.getElementById('vendor-history-table');
    tbody.innerHTML = '';

    if (totalWO === 0) {
        tbody.innerHTML = '<tr><td colspan="5" class="text-center text-muted">Belum ada riwayat transaksi selesai.</td></tr>';
        document.getElementById('eval-ontime-pct').innerText = '-';
        document.getElementById('eval-defect-pct').innerText = '-';
        document.getElementById('eval-total-wo').innerText = '0';
        return;
    }

    history.forEach(h => {
        const dDeadline = new Date(h.deadline);
        const dActual = new Date(h.actualDate);
        const isLate = dActual > dDeadline;
        if (isLate) lateCount++;
        totalDefect += h.qtyDefect;
        totalQtyReceived += h.qtyReceived;

        let dateBadge = isLate 
            ? `<div class="text-late"><i class="fa-solid fa-circle-exclamation"></i> Telat (${h.actualDate})</div>`
            : `<div class="text-ontime"><i class="fa-solid fa-check"></i> On-Time (${h.actualDate})</div>`;

        let qcBadge = h.qtyDefect > 0 
            ? `<span class="qc-defect">${h.qtyDefect} Defect</span>` 
            : `<span style="color:#166534">Perfect</span>`;

        tbody.innerHTML += `
            <tr>
                <td><b>${h.id}</b><br><span class="date-row">${h.date}</span></td>
                <td>${h.item}</td>
                <td><small class="text-muted">Target: ${h.deadline}</small><br>${dateBadge}</td>
                <td><div class="qc-box">Total: <b>${h.qtyReceived}</b><br>QC: ${qcBadge}</div></td>
                <td><span class="badge success">${h.status}</span></td>
            </tr>
        `;
    });

    const onTimePct = Math.round(((totalWO - lateCount) / totalWO) * 100);
    document.getElementById('eval-ontime-pct').innerText = `${onTimePct}%`;
    document.getElementById('eval-ontime-pct').style.color = onTimePct < 80 ? 'red' : 'green';
    document.getElementById('eval-ontime-desc').innerText = `${lateCount} Terlambat dari ${totalWO} WO`;

    const defectPct = totalQtyReceived > 0 ? ((totalDefect / totalQtyReceived) * 100).toFixed(1) : 0;
    document.getElementById('eval-defect-pct').innerText = `${defectPct}%`;
    document.getElementById('eval-defect-pct').style.color = defectPct > 2 ? 'red' : 'green';
    document.getElementById('eval-defect-desc').innerText = `${totalDefect} Pcs Reject Total`;

    document.getElementById('eval-total-wo').innerText = totalWO;

    const scoreEl = document.getElementById('vendor-score-badge');
    if (onTimePct >= 90 && defectPct < 1) {
        scoreEl.innerText = 'A'; scoreEl.style.background = '#166534';
    } else if (onTimePct >= 75 && defectPct < 3) {
        scoreEl.innerText = 'B'; scoreEl.style.background = '#ca8a04';
    } else {
        scoreEl.innerText = 'C'; scoreEl.style.background = '#dc2626';
    }
}



// --- LOGIC ALUR BARU: CREATE WO VIA PR ---
function goToPRForCreateWO() {
    // 1. Arahkan ke Halaman PR
    navigate('pr-page');
    
    // 2. Tampilkan pesan instruksi ke user
    // Opsional: Bisa pakai alert atau toast notification
    alert("Silakan PILIH salah satu PR yang berstatus 'Open' untuk diproses menjadi Work Order.");
    
    // 3. (Opsional) Filter PR jadi 'Open' saja biar memudahkan
    const statusFilter = document.getElementById('pr-status-filter');
    if(statusFilter) {
        statusFilter.value = 'Open'; // Set filter ke Open
        // Reset filter lain
        document.getElementById('pr-type-filter').value = 'all'; 
        renderPR(); // Render ulang tabel PR
    }
}

function switchWOTab(tabName) {
    woFilterState.tab = tabName;

    // Update UI Tab (Garis Bawah Aktif)
    document.getElementById('tab-wo-active').className = tabName === 'active' ? 'tab-btn active' : 'tab-btn';
    document.getElementById('tab-wo-history').className = tabName === 'history' ? 'tab-btn active' : 'tab-btn';

    // Reset filter status biar tidak bingung
    document.getElementById('wo-status-filter').value = 'all'; 
    
    // Render ulang tabel
    renderWO();
}