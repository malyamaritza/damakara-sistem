// --- DATA DUMMY (SINKRON DENGAN MERCH/STORE) ---

// --- UPDATED DATA PRODUCTS (GABUNGAN STRUKTUR PLANNING & WAREHOUSE) ---
let products = [
    { 
        id: 1, name: 'Setala Shirt', sku: 'DMK-001', status: 'Aktif',
        collection: "Setala", category: "Shirt", userType: "Men", price: 269000,
        img: "setalashirt.jpeg",
        max: 200, // Kapasitas Max Gudang (Utk Progress Bar)
        
        // Data Resep (Planning Logic)
        recipe: {
            fabricQty: 1.5, 
            extras: [ { name: "Kancing Kemeja", qty: 6, unit: "Pcs" }, { name: "Label Brand", qty: 1, unit: "Pcs" } ]
        },

        // Data Varian + Stok Detail (Warehouse Logic + Planning Logic)
        variants: [
            { 
                sku: 'DMK-001-BLK-M', color: 'Hitam', size: 'M', fabricName: "Kain Setala (Hitam)",
                // Detail Stok
                gudang: 3, defect: 1, reserved: 5, event: 1, store: 2 
            },
            { 
                sku: 'DMK-001-BLK-L', color: 'Hitam', size: 'L', fabricName: "Kain Setala (Hitam)",
                gudang: 5, defect: 0, reserved: 4, event: 2, store: 5 
            },
            { 
                sku: 'DMK-001-NVY-XL', color: 'Navy', size: 'XL', fabricName: "Kain Setala (Navy)",
                gudang: 1, defect: 0, reserved: 0, event: 0, store: 0 
            }
        ]
    },
    { 
        id: 2, name: 'Kala Shirt Longsleeve', sku: 'DMK-002', status: 'Aktif',
        collection: "Kala", category: "Shirt", userType: "Men", price: 289000,
        img: "kalashirtlongsleeve.png",
        max: 150,
        recipe: {
            fabricQty: 1.8,
            extras: [ { name: "Kancing Kemeja", qty: 8, unit: "Pcs" }, { name: "Furing", qty: 0.5, unit: "Meter" } ]
        },
        variants: [
            { 
                sku: 'DMK-002-BLK-M', color: 'Hitam', size: 'M', fabricName: "Kain Kala (Hitam)",
                gudang: 13, defect: 0, reserved: 12, event: 5, store: 2 
            },
            { 
                sku: 'DMK-002-BLU-L', color: 'Electric Blue', size: 'L', fabricName: "Kain Kala (Electric Blue)",
                gudang: 3, defect: 2, reserved: 0, event: 0, store: 5 
            }
        ]
    },
    { 
        id: 3, name: 'Arkana Embroidery Vest', sku: 'DMK-003', status: 'Aktif',
        collection: "Arkana", category: "Outer", userType: "Women", price: 325000,
        img: "arkanaembroideryvest.png",
        max: 100,
        recipe: {
            fabricQty: 1.2,
            extras: [ { name: "Tali Kur", qty: 2, unit: "Meter" } ]
        },
        variants: [ 
            { 
                sku: 'DMK-003-NVY-ALL', color: 'Navy', size: 'All Size', fabricName: "Kain Arkana (Navy)",
                gudang: 40, defect: 0, reserved: 10, event: 20, store: 15 
            },
            { 
                sku: 'DMK-003-CRM-ALL', color: 'Cream', size: 'All Size', fabricName: "Kain Arkana (Cream)",
                gudang: 35, defect: 1, reserved: 5, event: 10, store: 10 
            }
        ]
    },
    { 
        id: 4, name: 'Aksata Vest Lace', sku: 'DMK-004', status: 'Aktif',
        collection: "Aksata", category: "Outer", userType: "Women", price: 199000,
        img: "aksatavestlace.png",
        max: 80,
        recipe: {
            fabricQty: 1.0,
            extras: [ { name: "Bisban", qty: 3, unit: "Meter" } ]
        },
        variants: [ 
            { 
                sku: 'DMK-004-NVY-ALL', color: 'Navy', size: 'All Size', fabricName: "Kain Aksata (Navy)",
                gudang: 10, defect: 0, reserved: 2, event: 5, store: 4 
            },
            { 
                sku: 'DMK-004-BLK-ALL', color: 'Black', size: 'All Size', fabricName: "Kain Aksata (Hitam)",
                gudang: 50, defect: 0, reserved: 15, event: 10, store: 25 
            }
        ]
    },
    { 
        id: 5, name: 'Obi Belt', sku: 'DMK-005', status: 'Waiting Specs',
        collection: "Obi", category: "Accessories", userType: "Women", price: 89000,
        img: "obibelt.jpeg",
        max: 300,
        recipe: {
            fabricQty: 0.5,
            extras: [ { name: "Ring Besi", qty: 1, unit: "Pcs" } ]
        },
        variants: [ 
            { 
                sku: 'DMK-005-MAR-ALL', color: 'Maroon', size: 'All Size', fabricName: "Kain Obi (Maroon)",
                gudang: 100, defect: 2, reserved: 0, event: 20, store: 50 
            }
        ]
    },
    { 
        id: 6, name: 'Suar Bucket Hat', sku: 'DMK-006', status: 'Aktif',
        collection: "Suar", category: "Accessories", userType: "Men", price: 125000,
        img: "suarbuckethat.jpeg",
        max: 100,
        recipe: {
            fabricQty: 0.3,
            extras: [ { name: "Kain Keras", qty: 0.1, unit: "Meter" } ]
        },
        variants: [ 
            { 
                sku: 'DMK-006-TER-ALL', color: 'Terracotta', size: 'All Size', fabricName: "Kain Suar (Terracotta)",
                gudang: 45, defect: 0, reserved: 0, event: 10, store: 18 
            }
        ]
    }
];

// DATA DUMMY (SINKRON DENGAN MERCHANDISING)
// Note: fabricPrDone adalah kunci logika gembok Planning
const customOrdersData = [
    {
        id: "CUST-091",
        date: "01 Okt 2025",
        deadline: "20 Okt 2025",
        status: "Pending", // Status Awal
        fabricPrDone: false, // Kain belum diurus
        
        client: {
            name: "PT Telkom Indonesia",
            contact: "0812-3344-5566",
            email: "procurement@telkom.co.id",
            project: "Seragam Batik Event",
            address: "Jl. Japati No. 1, Bandung"
        },
        // STRUKTUR BARU (HIERARKIS)
        items: [
            {
                name: "Kemeja Pria Lengan Pendek",
                category: "Shirt (Men)",
                designImg: "design_telkom_men.jpg",
                variants: [
                    {
                        colorName: "Merah Hati (Official)",
                        sizes: [
                            { size: "M", qty: 10 },
                            { size: "L", qty: 15 },
                            { size: "XL", qty: 5 }
                        ],
                        // INFO MATERIAL (PER WARNA)
                        materialInfo: {
                            fabricName: "Batik Cap Parang Custom",
                            fabricSource: "Request Baru",
                            fabricTotal: 45, // Meter
                            accessories: [
                                { name: "Kancing Logo Telkom", qty: 210, unit: "Pcs" },
                                { name: "Furing Cotton", qty: 30, unit: "Meter" }
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
                            fabricSource: "Request Baru",
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
        id: "CUST-093",
        date: "10 Okt 2025",
        deadline: "30 Nov 2025",
        status: "In Process", // Sudah masuk jahit
        fabricPrDone: true, // Kain sudah beres
        
        client: {
            name: "Bank Mandiri",
            contact: "021-555-9999",
            email: "hr@bankmandiri.co.id",
            project: "Seragam Frontliner",
            address: "Jakarta Pusat"
        },
        items: [
            {
                name: "Blouse Batik Modern",
                category: "Blouse (Women)",
                designImg: "design_mandiri.jpg",
                variants: [
                    {
                        colorName: "Navy Gold",
                        sizes: [{ size: "All Size", qty: 50 }],
                        materialInfo: {
                            fabricName: "Katun Primisima Navy",
                            fabricSource: "Stok Gudang", // Pakai Stok
                            fabricTotal: 100,
                            accessories: [{ name: "Resleting", qty: 50, unit: "Pcs" }]
                        }
                    }
                ]
            }
        ]
    },

    {
        id: "CUST-094",
        date: "12 Okt 2025",
        deadline: "05 Nov 2025",
        status: "PR Fabric Sent", // Status khusus tracking
        fabricPrDone: false, // Kunci: Kain belum masuk gudang
        
        client: {
            name: "Kementerian Kesehatan",
            contact: "0811-2233-4455",
            project: "Seragam Batik Seminar Nasional",
            address: "Jakarta Selatan"
        },
        items: [
            {
                name: "Kemeja Batik Formal",
                category: "Shirt (Men)",
                designImg: "design_kemenkes.jpg",
                variants: [
                    {
                        colorName: "Biru Elektrik",
                        sizes: [ { size: "L", qty: 20 }, { size: "XL", qty: 20 }, { size: "XXL", qty: 10 } ],
                        materialInfo: {
                            fabricName: "Batik Cap Custom Logo",
                            fabricSource: "Request Baru (Vendor)", // Perlu beli
                            fabricTotal: 90, 
                            accessories: [ { name: "Kancing Logo Custom", qty: 350, unit: "Pcs" } ]
                        }
                    }
                ]
            }
        ]
    },

    // SKENARIO 2: WO KAIN SUDAH DATANG/SELESAI (Siap Bikin PR Jahit)
    // Status: fabricPrDone = true (Gembok Jahit Terbuka)
    {
        id: "CUST-095",
        date: "10 Okt 2025",
        deadline: "01 Nov 2025",
        status: "Material Ready", // Status siap produksi
        fabricPrDone: true, // Kunci: Kain SUDAH diinput warehouse
        
        client: {
            name: "Ibu Ratna Sarumpaet",
            contact: "0819-8877-6655",
            project: "Seragam Keluarga Besar",
            address: "Bandung Wetan"
        },
        items: [
            {
                name: "Tunik Ibu & Nenek",
                category: "Tunik (Women)",
                designImg: "design_ratna_tunik.jpg",
                variants: [
                    {
                        colorName: "Sage Green",
                        sizes: [ { size: "L", qty: 2 }, { size: "XL", qty: 3 } ],
                        materialInfo: {
                            fabricName: "Sutra Viscose Premium",
                            fabricSource: "Request Baru", // Awalnya request, sekarang sdh datang
                            fabricTotal: 15,
                            accessories: [ { name: "Renda Vintage", qty: 10, unit: "Meter" } ]
                        }
                    },
                    {
                        colorName: "Dusty Pink",
                        sizes: [ { size: "M", qty: 2 }, { size: "L", qty: 2 } ],
                        materialInfo: {
                            fabricName: "Sutra Viscose Premium",
                            fabricSource: "Request Baru",
                            fabricTotal: 12,
                            accessories: [ { name: "Payet Mutiara", qty: 1, unit: "Pack" } ]
                        }
                    }
                ]
            },
            {
                name: "Kemeja Koko Anak",
                category: "Shirt (Kids)",
                designImg: "design_ratna_kids.jpg",
                variants: [
                    {
                        colorName: "Sage Green",
                        sizes: [ { size: "4 Th", qty: 2 }, { size: "6 Th", qty: 1 } ],
                        materialInfo: {
                            fabricName: "Katun Toyobo Fodu",
                            fabricSource: "Stok Gudang", // Campuran, ada yg stok
                            fabricTotal: 5,
                            accessories: [ { name: "Kancing Batok", qty: 20, unit: "Pcs" } ]
                        }
                    }
                ]
            }
        ]
    },

    // SKENARIO 3: SUMBER KAIN DARI GUDANG (Auto Ready)
    // Status: fabricPrDone = true (Karena stok ada, jadi bisa langsung jahit)
    {
        id: "CUST-096",
        date: "14 Okt 2025",
        deadline: "10 Nov 2025",
        status: "Pending", // Status Order Masih Pending
        fabricPrDone: true, // KUNCI: True karena pakai Stok Gudang
        
        client: {
            name: "Ibu Dewi (Butik Kenanga)",
            contact: "0813-9988-7766",
            project: "Restock Koleksi Butik",
            address: "Jakarta Barat"
        },
        items: [
            {
                name: "Outer Kimono Batik",
                category: "Outer (Women)",
                designImg: "design_kimono_dewi.jpg",
                variants: [
                    {
                        colorName: "Coklat Sogor",
                        sizes: [ { size: "All Size", qty: 30 } ],
                        materialInfo: {
                            fabricName: "Katun Primisima (Sogor)",
                            fabricSource: "Stok Gudang", // LOGIC: Ini men-trigger fabricPrDone: true
                            fabricTotal: 60, 
                            accessories: [ { name: "Label Brand", qty: 30, unit: "Pcs" } ]
                        }
                    }
                ]
            }
        ]
    },

    // SKENARIO 4: MIXED SOURCE (Ada Stok Gudang + Ada Beli Baru)
    // HASIL: Tombol PR Jahit TERKUNCI karena masih ada yg harus dibeli
    {
        id: "CUST-097",
        date: "15 Okt 2025",
        deadline: "15 Nov 2025",
        status: "Pending", 
        fabricPrDone: false, // Belum selesai karena ada yg harus dibeli
        
        client: {
            name: "Ibu Siska (Arisan Pondok Indah)",
            contact: "0818-7766-5544",
            project: "Seragam Arisan Campur",
            address: "Jakarta Selatan"
        },
        items: [
            {
                name: "Dress Batik (Ibu)",
                category: "Dress (Women)",
                designImg: "design_siska_dress.jpg",
                variants: [
                    {
                        colorName: "Maroon Gold",
                        sizes: [ { size: "L", qty: 10 } ],
                        materialInfo: {
                            fabricName: "Sutra Viscose Maroon",
                            fabricSource: "Stok Gudang", // INI STOK ADA
                            fabricTotal: 25, 
                            accessories: [{ name: "Resleting", qty: 10, unit: "Pcs" }]
                        }
                    }
                ]
            },
            {
                name: "Kemeja Batik (Suami)",
                category: "Shirt (Men)",
                designImg: "design_siska_shirt.jpg",
                variants: [
                    {
                        colorName: "Maroon Gold",
                        sizes: [ { size: "XL", qty: 10 } ],
                        materialInfo: {
                            fabricName: "Katun Toyobo Maroon",
                            fabricSource: "Request Baru (Vendor)", // INI HARUS BELI
                            fabricTotal: 20, 
                            accessories: [{ name: "Kancing", qty: 80, unit: "Pcs" }]
                        }
                    }
                ]
            }
        ]
    },

    // SKENARIO 5: SEDANG PROSES BELI KAIN (PR Fabric Sent)
    // HASIL: Tombol PR Kain DISABLED (Info: Sedang Dipesan), PR Jahit TERKUNCI
    {
        id: "CUST-098",
        date: "16 Okt 2025",
        deadline: "20 Nov 2025",
        status: "PR Fabric Sent", // Status kuncian
        fabricPrDone: false, 
        
        client: {
            name: "Hotel Hyatt Bandung",
            contact: "022-2000-1000",
            project: "Seragam Resepsionis",
            address: "Bandung"
        },
        items: [
            {
                name: "Blouse Front Office",
                category: "Blouse",
                designImg: "design_hyatt.jpg",
                variants: [
                    {
                        colorName: "Cream Hyatt",
                        sizes: [ { size: "M", qty: 5 }, { size: "L", qty: 5 } ],
                        materialInfo: {
                            fabricName: "Linen Premium Cream",
                            fabricSource: "Request Baru",
                            fabricTotal: 20, 
                            accessories: [{ name: "Kancing Emas", qty: 60, unit: "Pcs" }]
                        }
                    }
                ]
            }
        ]
    }
];

// --- DUMMY DATA PERFORMA PENJUALAN ---
const salesPerfData = [
    // Produk Ori
    { id: 1, name: 'Setala Shirt', sku: 'DMK-001', coll: 'Setala', cat: 'Shirt', user: 'Men', cond: 'Ori', online: 150, offline: 80, event: 45 },
    { id: 2, name: 'Kala Shirt Longsleeve', sku: 'DMK-002', coll: 'Kala', cat: 'Shirt', user: 'Men', cond: 'Ori', online: 120, offline: 60, event: 30 },
    { id: 3, name: 'Arkana Embroidery Vest', sku: 'DMK-003', coll: 'Arkana', cat: 'Outer', user: 'Women', cond: 'Ori', online: 200, offline: 150, event: 80 },
    { id: 4, name: 'Obi Belt', sku: 'DMK-005', coll: 'Obi', cat: 'Accessories', user: 'Women', cond: 'Ori', online: 300, offline: 100, event: 120 },
    
    // Produk Defect (SKU biasanya sama atau ada kode khusus, disini kita samakan nama)
    { id: 5, name: 'Setala Shirt', sku: 'DMK-001', coll: 'Setala', cat: 'Shirt', user: 'Men', cond: 'Defect', online: 10, offline: 0, event: 25 }, // Defect laku di event
    { id: 6, name: 'Arkana Embroidery Vest', sku: 'DMK-003', coll: 'Arkana', cat: 'Outer', user: 'Women', cond: 'Defect', online: 15, offline: 2, event: 10 },
    { id: 7, name: 'Kala Shirt Longsleeve', sku: 'DMK-002', coll: 'Kala', cat: 'Shirt', user: 'Men', cond: 'Defect', online: 5, offline: 0, event: 0 },
];



// --- UPDATE DATA DUMMY PR (planning-script.js) ---
let dummyPRs = [
    { 
        id: 'PR-2025-009', 
        date: '2025-10-26', 
        type: 'Jasa Jahit', 
        // vendor: dihapus sesuai request
        itemsCount: 2, // Total model baju
        deadline: '2025-11-10', 
        status: 'Pending',
        // ITEM LIST (Multi Produk)
        items: [
            { 
                name: "Kemeja Setala", 
                sku: "DMK-001",
                category: "Shirt",
                totalQty: 45,
                // VARIAN (Warna & Size)
                variants: [
                    { color: "Hitam", size: "M", qty: 10, fabric: "Kain Setala Hitam" },
                    { color: "Hitam", size: "L", qty: 20, fabric: "Kain Setala Hitam" },
                    { color: "Navy", size: "XL", qty: 15, fabric: "Kain Setala Navy" }
                ],
                // KEBUTUHAN MATERIAL (Per Warna)
                materialSummary: [
                    { name: "Kain Setala Hitam", qty: 45, unit: "Meter" },
                    { name: "Kain Setala Navy", qty: 23, unit: "Meter" },
                    { name: "Kancing Kemeja", qty: 270, unit: "Pcs" }
                ]
            },
            { 
                name: "Obi Belt", 
                sku: "DMK-005",
                category: "Accessories",
                totalQty: 50,
                variants: [
                    { color: "Maroon", size: "All Size", qty: 50, fabric: "Kain Obi Maroon" }
                ],
                materialSummary: [
                    { name: "Kain Obi Maroon", qty: 25, unit: "Meter" },
                    { name: "Ring Besi", qty: 50, unit: "Pcs" }
                ]
            }
        ]
    },
    { 
        id: 'PR-2025-010', 
        date: '2025-10-27', 
        type: 'Beli Kain', 
        itemsCount: 1, 
        deadline: '2025-11-01', 
        status: 'Approved',
        // Contoh PR Material (Simple)
        items: [
            { 
                name: "Kain Katun Toyobo (Restock)", 
                sku: "MAT-KAIN-002",
                category: "Raw Material",
                totalQty: 500,
                variants: [], // Kosong karena ini beli kain gulungan
                materialSummary: [
                    { name: "Warna: Hitam Pekat", qty: 200, unit: "Yard" },
                    { name: "Warna: Electric Blue", qty: 300, unit: "Yard" }
                ]
            }
        ]
    },
    { 
        id: 'PR-2025-009', 
        date: '2025-10-26', 
        type: 'Jasa Jahit', 
        itemsCount: 1, 
        deadline: '2025-11-10', 
        status: 'In Process', // Status berjalan
        items: [
            { 
                // Pastikan nama ini SAMA PERSIS dengan produk yang Low Stock di inventory
                name: "Setala Shirt", 
                sku: "DMK-001",
                category: "Shirt",
                totalQty: 50, // Jumlah Incoming
                variants: [] 
            }
        ]
    },
];

let dummyFabrics = [
    { 
        id: 'F-SET-BLK', name: 'Kain Setala (Hitam)', motif: 'Setala Signature', material: 'Katun Primisima',
        vendor: 'CV Textil Jaya', stock: 1500, minStock: 200, unit: 'Yard', 
        status: 'Active', patternClass: 'pattern-parang' 
    },
    { 
        id: 'F-SET-NVY', name: 'Kain Setala (Navy)', motif: 'Setala Signature', material: 'Katun Primisima',
        vendor: 'CV Textil Jaya', stock: 400, minStock: 100, unit: 'Yard', 
        status: 'Active', patternClass: 'pattern-parang' 
    },

    // KOLEKSI KALA
    { 
        id: 'F-KAL-BLK', name: 'Kain Kala (Hitam)', motif: 'Kala Pattern', material: 'Katun Toyobo',
        vendor: 'Import China', stock: 800, minStock: 100, unit: 'Yard', 
        status: 'Active', patternClass: 'pattern-mega' 
    },
    { 
        id: 'F-KAL-BLU', name: 'Kain Kala (Electric Blue)', motif: 'Kala Pattern', material: 'Katun Toyobo',
        vendor: 'Import China', stock: 300, minStock: 50, unit: 'Yard', 
        status: 'Active', patternClass: 'pattern-mega' 
    },

    // KOLEKSI ARKANA
    { 
        id: 'F-ARK-NVY', name: 'Kain Arkana (Navy)', motif: 'Embroidery Arkana', material: 'Cotton Blend',
        vendor: 'CV Textil Jaya', stock: 500, minStock: 100, unit: 'Yard', 
        status: 'Active', patternClass: 'pattern-parang' 
    },
    { 
        id: 'F-ARK-CRM', name: 'Kain Arkana (Cream)', motif: 'Embroidery Arkana', material: 'Cotton Blend',
        vendor: 'CV Textil Jaya', stock: 200, minStock: 50, unit: 'Yard', 
        status: 'Active', patternClass: 'pattern-parang' 
    },

    // KOLEKSI AKSATA
    { 
        id: 'F-AKS-BLK', name: 'Kain Aksata (Hitam)', motif: 'Lace Aksata', material: 'Polyester Lace',
        vendor: 'Toko Renda Maju', stock: 120, minStock: 20, unit: 'Meter', 
        status: 'Active', patternClass: 'pattern-mega' 
    },
    { 
        id: 'F-AKS-NVY', name: 'Kain Aksata (Navy)', motif: 'Lace Aksata', material: 'Polyester Lace',
        vendor: 'Toko Renda Maju', stock: 100, minStock: 20, unit: 'Meter', 
        status: 'Active', patternClass: 'pattern-mega' 
    },

    // KOLEKSI OBI
    { 
        id: 'F-OBI-MAR', name: 'Kain Obi (Maroon)', motif: 'Polos Texture', material: 'Katun Drill',
        vendor: 'CV Textil Jaya', stock: 250, minStock: 50, unit: 'Yard', 
        status: 'Active', patternClass: 'pattern-parang' 
    },

    // KOLEKSI SUAR
    { 
        id: 'F-SUA-TER', name: 'Kain Suar (Terracotta)', motif: 'Canvas Solid', material: 'Linen Canvas',
        vendor: 'PT Sandang', stock: 45, minStock: 50, unit: 'Yard', 
        status: 'Active', patternClass: 'pattern-mega' 
    }
];

let currentRecipeSku = null;
let currentPrMode = 'sewing'; 
let prItems = []; 
let selectedRestockSkus = [];

let coFilterState = {
    tab: 'Active', // Active (Pending/Process) vs History (Finished)
    search: '',
    date: ''
};

let prFilterState = {
    tab: 'Active', // Active vs History
};

// --- CORE SYSTEM ---
document.addEventListener("DOMContentLoaded", function() {
    initApp();
});

function initApp() {
    renderDashboard();
    renderMasterProd();
    renderCoTable();
    renderPrTable();
    renderFabricTable();
    renderInventory(); // <--- TAMBAHAN PENTING: Agar data dimuat saat start
}

function logout() { location.href='planning-login.html'; }

function showPage(pageId) {
    document.querySelectorAll('.page-section').forEach(el => el.classList.add('hidden'));
    document.getElementById(pageId).classList.remove('hidden');
    
    document.querySelectorAll('.nav-links li').forEach(el => el.classList.remove('active'));
    // Handle nav active state safely
    const navItem = document.getElementById('nav-' + pageId);
    if(navItem) navItem.classList.add('active');

    const titles = {
        'dashboard': 'Dashboard', 
        'master-prod': 'Master Data Produk', 
        'view-co': 'Daftar Custom Order', 
        'purchase-req': 'Purchase Request', 
        'fabric-mgmt': 'Kelola Data Kain',
        'sales-perf': 'Analisa Performa Penjualan',
        'inventory': 'Monitoring Stok' // <-- TAMBAHAN INI
    };
    document.getElementById('page-title').innerText = titles[pageId] || 'Sistem Planning';

    // Init Render jika halaman performa dibuka
    if(pageId === 'sales-perf') filterSalesPerf();
}

// --- MODULE: DASHBOARD ---
// --- MODULE: DASHBOARD (UPDATED) ---
function renderDashboard() {
    // 1. HITUNG STATISTIK UTAMA
    // CO Berjalan: Status selain Finished
    const activeCoCount = customOrdersData.filter(c => c.status !== 'Finished').length;
    // PR Berjalan: Status selain Approved (asumsi Approved = Selesai di dummy awal, atau sesuaikan logika)
    // Kita pakai logika: Status 'Pending' atau 'In Process' dianggap berjalan
    const activePrCount = dummyPRs.filter(p => p.status === 'Pending' || p.status === 'In Process').length;
    // Produk Butuh Resep
    const missingRecipeCount = products.filter(p => p.status === 'Waiting Specs').length;
    // Stok Kritis
    const critStockCount = dummyFabrics.filter(f => f.stock <= f.minStock).length;

    // Render Angka ke HTML
    document.getElementById('dash-co-active').innerText = activeCoCount;
    document.getElementById('dash-pr-active').innerText = activePrCount;
    document.getElementById('dash-missing-recipe').innerText = missingRecipeCount;
    document.getElementById('dash-stock-crit').innerText = critStockCount;

    // 2. RENDER TABEL AKTIVITAS PR TERBARU (Ambil 3 Teratas)
    const prTable = document.getElementById('dash-pr-table');
    prTable.innerHTML = '';
    dummyPRs.slice(0, 3).forEach(pr => {
        let badge = pr.status === 'In Process' ? 'badge-info' : (pr.status === 'Pending' ? 'badge-warning' : 'badge-success');
        prTable.innerHTML += `
            <tr>
                <td><strong>${pr.id}</strong></td>
                <td>${pr.type}</td>
                <td>${pr.date}</td>
                <td><span class="badge ${badge}">${pr.status}</span></td>
            </tr>
        `;
    });

    // 3. GENERATE NOTIFIKASI PINTAR (GABUNGAN DARI BERBAGAI SUMBER)
    const notifContainer = document.getElementById('dash-notif-container');
    notifContainer.innerHTML = '';
    let notifications = [];

    // A. Cek Deadline PR (Simulasi: PR yang statusnya In Process)
    dummyPRs.forEach(pr => {
        if(pr.status === 'In Process') {
            notifications.push({
                type: 'deadline',
                title: `PR Mendekati Deadline`,
                desc: `PR <b>${pr.id}</b> (${pr.type}) harus selesai pada ${pr.deadline}.`,
                time: '1 Jam yang lalu',
                icon: 'fa-clock',
                colorBg: '#fee2e2', colorIcon: '#e74c3c' // Merah
            });
        }
    });

    // B. Cek Stok Menipis
    dummyFabrics.forEach(f => {
        if(f.stock <= f.minStock) {
            notifications.push({
                type: 'stock',
                title: `Stok Kain Menipis`,
                desc: `Kain <b>${f.name}</b> tersisa ${f.stock} ${f.unit}. Segera restock!`,
                time: '2 Jam yang lalu',
                icon: 'fa-boxes-stacked',
                colorBg: '#fff7ed', colorIcon: '#c2410c' // Orange
            });
        }
    });

    // C. Cek Produk Butuh Specs
    products.forEach(p => {
        if(p.status === 'Waiting Specs') {
            notifications.push({
                type: 'specs',
                title: `Produk Belum Ada Resep`,
                desc: `SKU <b>${p.sku}</b> (${p.name}) menunggu input spesifikasi BOM.`,
                time: 'Hari ini',
                icon: 'fa-clipboard-list',
                colorBg: '#fef9c3', colorIcon: '#b45309' // Kuning
            });
        }
    });

    // D. Cek Custom Order Baru (Pending)
    customOrdersData.forEach(co => {
        if(co.status === 'Pending') {
            notifications.push({
                type: 'new_co',
                title: `Custom Order Baru`,
                desc: `Order <b>#${co.id}</b> dari ${co.client.name} perlu diproses menjadi PR.`,
                time: 'Baru saja',
                icon: 'fa-plus-circle',
                colorBg: '#e0f2fe', colorIcon: '#0284c7' // Biru
            });
        }
    });

    // Ambil maksimal 4 notifikasi (Acak/Urut biar variatif untuk demo)
    // Di real app, ini diurutkan by timestamp. Disini kita ambil variasi.
    const displayNotifs = notifications.slice(0, 4);

    if(displayNotifs.length === 0) {
        notifContainer.innerHTML = `<div style="padding:20px; text-align:center; color:#999;">Tidak ada notifikasi baru.</div>`;
    } else {
        displayNotifs.forEach(n => {
            notifContainer.innerHTML += `
                <div class="notif-item">
                    <div class="notif-icon-box" style="background:${n.colorBg}; color:${n.colorIcon};">
                        <i class="fas ${n.icon}"></i>
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
}

// --- MODULE: MASTER PRODUK (DYNAMIC RECIPE PER VARIANT) ---
// --- MODULE: MASTER PRODUK (UPDATED WITH FILTERS & IMAGE) ---

// --- MODULE: MASTER PRODUK (UPDATED TABLE STRUCTURE) ---
function renderMasterProd() {
    const tbody = document.getElementById('mp-table-body');
    tbody.innerHTML = '';

    // 1. Ambil nilai dari semua filter
    const filterTxt = document.getElementById('mp-search').value.toLowerCase();
    const filterStatus = document.getElementById('mp-filter-status').value;
    const filterColl = document.getElementById('mp-filter-coll').value;
    const filterCat = document.getElementById('mp-filter-cat').value;
    const filterUser = document.getElementById('mp-filter-user').value;
    
    products.forEach(p => {
        // 2. Logika Pencocokan Filter
        const matchTxt = p.name.toLowerCase().includes(filterTxt); // Hapus filter SKU di pencarian teks jika tidak ingin dicari
        const matchStatus = filterStatus === 'all' || p.status === filterStatus;
        const matchColl = filterColl === 'all' || p.collection === filterColl;
        const matchCat = filterCat === 'all' || p.category === filterCat;
        const matchUser = filterUser === 'all' || p.userType === filterUser;
        
        // Hanya render jika semua kondisi terpenuhi
        if(matchTxt && matchStatus && matchColl && matchCat && matchUser) {
            
            let badge = p.status === 'Aktif' ? 'badge-success' : 'badge-purple';
            let btnText = p.status === 'Waiting Specs' ? 'Lengkapi Specs' : 'Edit Specs';
            
            // 3. Render Baris (SKU dihapus, Koleksi & User dipisah)
            tbody.innerHTML += `
            <tr>
                <td>
                    <div style="display: flex; align-items: center; gap: 15px;">
                        <img src="../gambar/${p.img}" alt="${p.name}" 
                             style="width: 45px; height: 45px; object-fit: cover; border-radius: 6px; border: 1px solid #eee;"
                             onerror="this.src='https://via.placeholder.com/45?text=No+Img'">
                        <div>
                            <strong style="font-size: 0.95rem;">${p.name}</strong>
                        </div>
                    </div>
                </td>
                <td style="vertical-align: middle;">${p.category}</td>
                <td style="vertical-align: middle;">
                    <span style="background:#f4f4f4; padding:4px 8px; border-radius:4px; font-weight:500; font-size:0.85rem;">
                        ${p.collection}
                    </span>
                </td>
                <td style="vertical-align: middle;">${p.userType}</td>
                <td style="vertical-align: middle;"><span class="badge ${badge}">${p.status}</span></td>
                
                <td style="vertical-align: middle;">
                    <button class="btn-sm btn-outline" onclick="openRecipeForm(${p.id})">
                        <i class="fas fa-edit"></i> ${btnText}
                    </button>
                </td>
            </tr>
        `;
        }
    });

    // Tampilkan pesan jika tidak ada data
    if(tbody.innerHTML === '') {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:20px; color:#999;">Produk tidak ditemukan dengan filter tersebut.</td></tr>`;
    }
}

// Fungsi filter dipanggil saat dropdown berubah
function filterMasterProd() { 
    renderMasterProd(); 
}

// --- TIMPA FUNGSI INI DI planning-script.js ---

// FILE: planning-script.js (Timpa fungsi ini)

let currentProductId = null;

function openRecipeForm(id) {
    currentProductId = id;
    const p = products.find(x => x.id === id);
    if(!p) return;
    
    document.getElementById('mp-list-view').classList.add('hidden');
    document.getElementById('mp-form-view').classList.remove('hidden');
    
    document.getElementById('rec-header-name').innerText = p.name;
    document.getElementById('rec-header-sku').innerText = `Kategori: ${p.category} • Status: ${p.status}`;
    
    const container = document.getElementById('recipe-variants-container');
    container.innerHTML = '';

    // 1. SIAPKAN DROPDOWN OPSI KAIN DARI GUDANG (dummyFabrics)
    let fabricOptionsHtml = `<option value="">-- Pilih Kain dari Gudang --</option>`;
    dummyFabrics.forEach(f => {
        fabricOptionsHtml += `<option value="${f.name}">${f.name} (Stok: ${f.stock})</option>`;
    });

    // Ambil Warna Unik
    const uniqueColors = [...new Set(p.variants.map(v => v.color))];

    uniqueColors.forEach((color, vIdx) => {
        let rows = '';
        
        // --- LOGIKA PENENTUAN ISI FORM ---
        let currentFabric = '';
        let fabricQty = 0;
        let extras = [];

        if (p.status === 'Waiting Specs') {
            // KASUS 1: WAITING SPECS (Data Kosong / Manual Input)
            // Biarkan default nilai-nilai di atas (kosong/0)
            // Kita kasih 1 baris dummy material kosong
            extras = [{name: '', qty: 0, unit: 'Pcs'}]; 
        } else {
            // KASUS 2: SUDAH AKTIF / EDIT (Isi Data Existing)
            const sampleVariant = p.variants.find(v => v.color === color);
            currentFabric = sampleVariant ? sampleVariant.fabricName : '';
            fabricQty = p.recipe ? p.recipe.fabricQty : 0; 
            extras = p.recipe && p.recipe.extras ? p.recipe.extras : [];
        }

        // A. Baris KAIN UTAMA (Dropdown)
        rows += createRecipeRow(vIdx, 0, 'Kain', currentFabric, fabricQty, true, 'Meter', fabricOptionsHtml); 

        // B. Baris MATERIAL LAIN
        if(extras.length > 0) {
            extras.forEach((ext, rIdx) => {
                rows += createRecipeRow(vIdx, rIdx + 1, 'Material', ext.name, ext.qty, false, ext.unit, '');
            });
        }

        // Render Card
        container.innerHTML += `
            <div class="variant-card" id="variant-card-${vIdx}">
                <div class="variant-header">
                    <span class="variant-title" style="color:var(--primary);">
                        <i class="fas fa-palette"></i> Varian Warna: <strong>${color}</strong>
                        <input type="hidden" class="hidden-color-val" value="${color}"> 
                    </span>
                    <button class="btn-sm btn-outline" onclick="addRecipeRow(${vIdx})">
                        <i class="fas fa-plus"></i> Tambah Material
                    </button>
                </div>
                <table class="spec-table">
                    <thead>
                        <tr>
                            <th style="width:20%">Tipe Item</th>
                            <th style="width:45%">Nama Kain (Gudang) / Material</th>
                            <th style="width:15%">Keb. per Pcs</th>
                            <th style="width:10%">Satuan</th>
                            <th style="width:10%">Aksi</th>
                        </tr>
                    </thead>
                    <tbody id="recipe-body-${vIdx}">
                        ${rows}
                    </tbody>
                </table>
            </div>
        `;
    });
}

// Fungsi Helper Baris Tabel (Updated dengan Dropdown Support)
function createRecipeRow(vIdx, rIdx, typeVal, nameVal, qtyVal, isLockedType = false, unitVal = 'Pcs', fabricOpts = '') {
    
    // 1. Kolom Tipe
    let typeInput = isLockedType 
        ? `<input type="text" class="form-control row-type" value="Kain Utama" readonly style="background:#f0f0f0; font-weight:bold; font-size:0.85rem;">`
        : `<select class="form-control row-type"><option value="Material" ${typeVal==='Material'?'selected':''}>Material Tambahan</option></select>`;

    // 2. Kolom Nama (Input Text vs Dropdown Select)
    let nameInput = '';
    if (typeVal === 'Kain' && fabricOpts !== '') {
        // Inject logic 'selected' ke dalam string option HTML
        // Kita replace string agar value yang tersimpan terpilih
        let finalOpts = fabricOpts.replace(`value="${nameVal}"`, `value="${nameVal}" selected`);
        nameInput = `<select class="form-control row-name select-fabric">${finalOpts}</select>`;
    } else {
        nameInput = `<input type="text" class="form-control row-name" value="${nameVal}" placeholder="Cth: Kancing, Resleting...">`;
    }

    // 3. Kolom Unit
    let unitOpts = `
        <option value="Meter" ${unitVal==='Meter'?'selected':''}>Meter</option>
        <option value="Yard" ${unitVal==='Yard'?'selected':''}>Yard</option>
        <option value="Pcs" ${unitVal==='Pcs'?'selected':''}>Pcs</option>
        <option value="Roll" ${unitVal==='Roll'?'selected':''}>Roll</option>
    `;

    // 4. Tombol Hapus
    let deleteBtn = isLockedType 
        ? `<span class="text-muted" style="font-size:0.8rem;">Wajib</span>` 
        : `<button class="btn-icon" style="color:red" onclick="this.closest('tr').remove()"><i class="fas fa-trash"></i></button>`;

    return `
    <tr id="row-${vIdx}-${rIdx}" class="recipe-row-item">
        <td>${typeInput}</td>
        <td>${nameInput}</td>
        <td><input type="number" step="0.01" class="form-control row-qty" value="${qtyVal}" placeholder="0"></td>
        <td><select class="form-control row-unit" style="min-width:80px;">${unitOpts}</select></td>
        <td style="text-align:center;">${deleteBtn}</td>
    </tr>`;
}

function addRecipeRow(vIdx) {
    const tbody = document.getElementById(`recipe-body-${vIdx}`);
    const newIdx = new Date().getTime(); 
    tbody.innerHTML += createRecipeRow(vIdx, newIdx, 'Material', '', 0, false, 'Pcs', '');
}

function closeRecipeForm() {
    document.getElementById('mp-form-view').classList.add('hidden');
    document.getElementById('mp-list-view').classList.remove('hidden');
}

// --- TIMPA FUNGSI INI DI planning-script.js ---

// FILE: planning-script.js (Timpa fungsi ini)

function saveRecipe() {
    const p = products.find(x => x.id === currentProductId);
    if(!p) return;

    let globalFabricQty = 0;
    let globalExtras = [];
    let isFirstColor = true;

    // Loop setiap kartu warna
    const variantCards = document.querySelectorAll('.variant-card');
    
    variantCards.forEach(card => {
        const colorVal = card.querySelector('.hidden-color-val').value;
        const rows = card.querySelectorAll('.recipe-row-item');
        
        let colorFabricName = '';

        rows.forEach(row => {
            // Ambil value tipe (bisa input text atau select)
            let typeEl = row.querySelector('.row-type');
            let type = typeEl.tagName === 'INPUT' ? typeEl.value : typeEl.options[typeEl.selectedIndex].value;

            // Ambil value nama (bisa input text atau select)
            let nameEl = row.querySelector('.row-name');
            let name = nameEl.value; 

            const qty = parseFloat(row.querySelector('.row-qty').value) || 0;
            const unit = row.querySelector('.row-unit').value;

            // Validasi sederhana: jangan simpan jika nama kosong
            if (!name || name.trim() === '') return;

            if (type === 'Kain Utama' || type === 'Kain') {
                colorFabricName = name;
                // Ambil rate qty dari warna pertama sebagai default global
                if(isFirstColor) globalFabricQty = qty;
            } else {
                // Kumpulkan material tambahan dari warna pertama saja (Global Extras)
                if(isFirstColor) {
                    globalExtras.push({ name: name, qty: qty, unit: unit });
                }
            }
        });

        // UPDATE VARIAN: Simpan nama kain spesifik ke varian warna ini
        p.variants.forEach(v => {
            if(v.color === colorVal) {
                v.fabricName = colorFabricName;
            }
        });

        isFirstColor = false;
    });

    // UPDATE DATA RECIPE GLOBAL
    p.recipe = {
        fabricQty: globalFabricQty,
        extras: globalExtras
    };

    // UBAH STATUS JADI AKTIF
    p.status = 'Aktif';

    alert(`Spesifikasi & Resep untuk ${p.name} berhasil disimpan!`);
    closeRecipeForm();
    renderMasterProd(); 
    renderDashboard();  
}

// --- MODULE: VIEW CUSTOM ORDER ---
function switchCoTab(mode) {
    coFilterState.tab = mode;
    
    // Update UI Tab
    document.querySelectorAll('#co-list-view .tab-btn').forEach(btn => btn.classList.remove('active'));
    if(mode === 'Active') document.getElementById('tab-co-active').classList.add('active');
    else document.getElementById('tab-co-history').classList.add('active');

    renderCoTable();
}

// Helper untuk mengubah tanggal "20 Okt 2025" menjadi Date Object
function parseIndoDate(dateStr) {
    if(!dateStr) return new Date('2100-01-01'); // Fallback jauh
    // Mapping bulan Indo ke Inggris
    const mapBulan = {
        'Jan': 'Jan', 'Feb': 'Feb', 'Mar': 'Mar', 'Apr': 'Apr', 'Mei': 'May', 'Jun': 'Jun',
        'Jul': 'Jul', 'Ags': 'Aug', 'Sep': 'Sep', 'Okt': 'Oct', 'Nov': 'Nov', 'Des': 'Dec'
    };
    let engDate = dateStr.replace(/([A-Za-z]{3})/g, (match) => mapBulan[match] || match);
    return new Date(engDate);
}

// FILE: planning-script.js

// FILE: planning-script.js (Timpa fungsi renderCoTable)

// FILE: planning-script.js (Timpa fungsi renderCoTable)

function renderCoTable() {
    const tbody = document.getElementById('co-table-body');
    tbody.innerHTML = '';
    
    const searchVal = document.getElementById('co-search').value.toLowerCase();
    const statusVal = document.getElementById('co-status-filter').value;
    const dateVal = document.getElementById('co-date-filter').value; 
    const today = new Date();

    let filtered = customOrdersData.filter(co => {
        const isFinished = co.status === 'Finished';
        if (coFilterState.tab === 'Active' && isFinished) return false;
        if (coFilterState.tab === 'History' && !isFinished) return false;

        const matchSearch = co.client.project.toLowerCase().includes(searchVal) || 
                            co.client.name.toLowerCase().includes(searchVal) ||
                            co.id.toLowerCase().includes(searchVal);
        const matchStatus = statusVal === 'all' || co.status === statusVal;
        
        let matchDate = true;
        if (dateVal) {
            const dDate = parseIndoDate(co.deadline);
            const selectedDate = new Date(dateVal);
            matchDate = dDate.toDateString() === selectedDate.toDateString();
        }

        return matchSearch && matchStatus && matchDate;
    });

    filtered.sort((a, b) => parseIndoDate(a.deadline) - parseIndoDate(b.deadline));

    if(filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="7" class="text-center text-muted" style="padding:30px;">Tidak ada data ditemukan.</td></tr>`;
        return;
    }

    filtered.forEach(co => {
        // Hitung Total Qty
        let totalQty = 0;
        if (co.items) {
            co.items.forEach(item => {
                if (item.variants) {
                    item.variants.forEach(v => {
                        if (v.sizes && Array.isArray(v.sizes)) v.sizes.forEach(s => totalQty += (parseInt(s.qty) || 0));
                        else totalQty += (parseInt(v.qty) || 0);
                    });
                }
            });
        }

        // --- LOGIC PROGRESS BAR VISUAL (UPDATED) ---
        let step1 = 'done'; 
        let step2 = '';     
        let step3 = '';     
        let statusText = co.status;
        let textClass = '';

        if (co.status === 'Finished') {
            step2 = 'done'; step3 = 'done';
            textClass = 'text-success';
        } else if (co.status === 'In Process') {
            step2 = 'done'; step3 = 'active'; 
            textClass = 'text-process';
            statusText = 'Sedang Jahit';
        } else if (co.fabricPrDone) {
            step2 = 'done'; step3 = ''; 
            textClass = 'text-ready';
            statusText = 'Material Ready'; 
        } else if (co.status === 'PR Fabric Sent') {
            // Sedang beli kain
            step2 = 'warn'; step3 = ''; 
            textClass = 'text-pending';
            statusText = 'Order Kain...';
        } else {
            // Pending Awal (Cek apakah Mixed/Butuh Beli)
            // Kita scan cepat items nya
            let needsBuy = false;
            if(co.items) {
                co.items.forEach(i => i.variants.forEach(v => {
                    let s = v.materialInfo ? v.materialInfo.fabricSource.toLowerCase() : '';
                    if(s.includes('beli') || s.includes('request')) needsBuy = true;
                }));
            }

            if(needsBuy) {
                step2 = ''; // Kosong karena belum request
                textClass = 'text-muted';
                statusText = 'Butuh PR Kain';
            } else {
                // Kalau stok semua, visualnya langsung ijo (Ready)
                step2 = 'done';
                textClass = 'text-ready';
                statusText = 'Stok Ready';
            }
        }

        const progressHtml = `
            <div style="display:flex; flex-direction:column; justify-content:center;">
                <div class="tbl-progress" title="Order -> Kain -> Jahit">
                    <div class="tbl-step ${step1}"></div>
                    <div class="tbl-step ${step2}"></div>
                    <div class="tbl-step ${step3}"></div>
                </div>
                <span class="tbl-status-text ${textClass}">${statusText}</span>
            </div>
        `;

        let deadlineHtml = `<span>${co.deadline}</span>`;
        if (coFilterState.tab === 'Active') {
            const dDate = parseIndoDate(co.deadline);
            const diffDays = Math.ceil((dDate - today) / (1000 * 60 * 60 * 24));
            if (diffDays < 0) deadlineHtml = `<span class="badge badge-danger"><i class="fas fa-exclamation-circle"></i> ${co.deadline}</span>`;
            else if (diffDays <= 7) deadlineHtml = `<span class="badge badge-warning"><i class="fas fa-clock"></i> ${co.deadline}</span>`;
            else deadlineHtml = `<span class="badge badge-success-soft"><i class="fas fa-calendar-check"></i> ${co.deadline}</span>`;
        }

        tbody.innerHTML += `
            <tr>
                <td><strong>${co.id}</strong></td>
                <td><div style="font-weight:600; color:var(--text-dark);">${co.client.project}</div></td>
                <td>${co.client.name}</td>
                <td><strong>${totalQty}</strong> pcs</td>
                <td>${deadlineHtml}</td>
                <td class="col-progress">${progressHtml}</td>
                <td>
                    <button class="btn-sm btn-outline" onclick="viewCoDetail('${co.id}')">
                        <i class="fas fa-eye"></i> Detail
                    </button>
                </td>
            </tr>
        `;
    });
}

function toggleCoView(mode) {
    document.getElementById('co-list-view').classList.toggle('hidden', mode !== 'list');
    document.getElementById('co-detail-view').classList.toggle('hidden', mode !== 'detail');
}

// --- FUNGSI RENDER DETAIL DENGAN LOGIKA GEMBOK & DATA BARU ---

// FILE: planning-script.js (Timpa fungsi viewCoDetail)

// FILE: planning-script.js (Timpa fungsi viewCoDetail)

function viewCoDetail(id) {
    const co = customOrdersData.find(c => c.id === id);
    if(!co) return;

    currentActiveCoId = id; 

    // 1. Render Header
    document.getElementById('d-co-id').innerText = '#' + co.id;
    document.getElementById('d-co-date').innerText = co.date;
    document.getElementById('d-co-status').innerText = co.status;
    document.getElementById('d-co-cust').innerText = co.client.name;
    document.getElementById('d-co-contact').innerText = co.client.contact || '-';
    document.getElementById('d-co-project').innerText = co.client.project;
    document.getElementById('d-co-deadline').innerText = co.deadline;

    // 2. Render Progress Bar
    renderCoProgress(co);

    // 3. Render Items & Cek Sumber Kain
    const container = document.getElementById('d-co-items-container');
    container.innerHTML = '';

    // Variabel Penentu Logika Tombol
    let hasExternalSource = false; // Apakah ada minimal 1 item yg harus beli?
    let allInternalSource = true;  // Apakah SEMUA item dari gudang?

    co.items.forEach((item, idx) => {
        let variantsHtml = '';

        item.variants.forEach(v => {
            // Cek Source Kain
            const src = v.materialInfo ? v.materialInfo.fabricSource.toLowerCase() : '';
            
            // Logic Deteksi: Jika ada kata 'beli', 'request', 'vendor', atau 'baru' -> External
            if (src.includes('beli') || src.includes('request') || src.includes('vendor') || src.includes('baru')) {
                hasExternalSource = true;
                allInternalSource = false;
            } else if (src.includes('gudang') || src.includes('stok')) {
                // Internal/Stok
            } else {
                // Fallback jika kosong, anggap butuh beli agar aman
                if(src !== '') hasExternalSource = true; 
            }

            // Build Table Size
            let sizeRows = '';
            let totalQtyVar = 0;
            if(v.sizes) {
                v.sizes.forEach(s => {
                    sizeRows += `<tr><td>${s.size}</td><td><strong>${s.qty}</strong></td></tr>`;
                    totalQtyVar += s.qty;
                });
            }

            let fabName = v.materialInfo ? v.materialInfo.fabricName : '-';
            let fabSource = v.materialInfo ? v.materialInfo.fabricSource : '-';
            let fabTotal = v.materialInfo ? v.materialInfo.fabricTotal : 0;
            
            // Badge Visual di Tabel
            let sourceBadge = (src.includes('gudang') || src.includes('stok'))
                ? `<span class="badge badge-success" style="font-size:0.7rem"><i class="fas fa-warehouse"></i> Stok Gudang</span>` 
                : `<span class="badge badge-warning" style="font-size:0.7rem"><i class="fas fa-shopping-cart"></i> Beli Baru</span>`;

            variantsHtml += `
                <div class="det-variant-block">
                    <div class="det-left">
                        <div style="font-weight:600; color:var(--primary); margin-bottom:5px;">
                            <i class="fas fa-palette"></i> ${v.colorName}
                        </div>
                        <table class="mini-table">
                            <thead><tr><th>Size</th><th>Qty</th></tr></thead>
                            <tbody>${sizeRows}</tbody>
                            <tfoot><tr><td style="border-top:1px solid #ddd;">Total</td><td style="border-top:1px solid #ddd;"><strong>${totalQtyVar}</strong></td></tr></tfoot>
                        </table>
                    </div>
                    <div class="det-right">
                        <div style="font-size:0.8rem; font-weight:bold; color:#555; margin-bottom:5px;">Kebutuhan Kain:</div>
                        <div style="background:#f8f9fa; padding:10px; border-radius:6px; font-size:0.9rem; border:1px solid #eee;">
                            <div style="margin-bottom:5px;"><strong>${fabName}</strong></div>
                            <div style="display:flex; justify-content:space-between; align-items:center;">
                                ${sourceBadge}
                                <span style="color:var(--text-dark); font-weight:bold;">${fabTotal} Meter</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        });

        container.innerHTML += `
            <div class="det-item-card">
                <div class="det-item-header">
                    <strong>${idx + 1}. ${item.name}</strong>
                    <span class="text-muted" style="font-size:0.85rem;">${item.category}</span>
                </div>
                ${variantsHtml}
            </div>
        `;
    });

    // 4. LOGIKA TOMBOL AKSI (STRICT MODE)
    const btnKain = document.getElementById('btn-wo-kain');
    const btnJahit = document.getElementById('btn-wo-jahit');

    // Reset Default
    btnKain.disabled = false; btnJahit.disabled = false;
    btnKain.style.opacity = '1'; btnKain.style.cursor = 'pointer';
    btnJahit.style.opacity = '1'; btnJahit.style.cursor = 'pointer';
    btnKain.onclick = function() { prosesWOKain(); }; // Bind fungsi default
    btnJahit.onclick = function() { prosesWOJahit(); };

    // --- LOGIC TREE ---

    // KASUS A: SUDAH MASUK JAHIT / SELESAI
    if (co.status === 'In Process' || co.status === 'Finished') {
        btnKain.className = 'btn-success';
        btnKain.innerHTML = `<i class="fas fa-check-double"></i> Kain Siap`;
        btnKain.disabled = true;
        
        btnJahit.className = 'btn-purple';
        btnJahit.innerHTML = `<i class="fas fa-cog fa-spin"></i> Sedang Diproses`;
        btnJahit.disabled = true;
    } 
    
    // KASUS B: KAIN SUDAH READY (Flag fabricPrDone = true)
    // (Bisa karena sudah beli dan datang, ATAU memang semua stok gudang dari awal)
    else if (co.fabricPrDone) {
        btnKain.className = 'btn-success';
        btnKain.style.opacity = '0.8';
        btnKain.innerHTML = `<i class="fas fa-check"></i> Kain Siap (Tersedia)`;
        btnKain.disabled = true; // Tidak perlu klik lagi

        // Buka Gembok Jahit
        btnJahit.className = 'btn-primary';
        btnJahit.innerHTML = `<i class="fas fa-cut"></i> 2. Request Jahit (PR)`;
    } 
    
    // KASUS C: SEDANG PROSES BELI KAIN (Status = PR Fabric Sent)
    // KONDISI INI YG KAMU MINTA: Tombol Kain GABISA DIPENCET
    else if (co.status === 'PR Fabric Sent') {
        btnKain.className = 'btn-warning'; // Kuning warning
        btnKain.innerHTML = `<i class="fas fa-clock"></i> Sedang Dipesan...`;
        btnKain.disabled = true; // Disable biar gak double order
        btnKain.style.cursor = 'not-allowed';

        // Gembok Jahit
        btnJahit.className = 'btn-secondary';
        btnJahit.style.opacity = '0.5';
        btnJahit.innerHTML = `<i class="fas fa-lock"></i> 2. Request Jahit (PR)`;
        btnJahit.disabled = true;
    }

    // KASUS D: ADA YANG PERLU DIBELI (Mixed atau Full Beli) & BELUM DIPROSES
    else if (hasExternalSource) {
        // Tombol Kain AKTIF (Wajib Klik)
        btnKain.className = 'btn-outline';
        btnKain.innerHTML = `<i class="fas fa-scroll"></i> 1. Request Kain (PR)`;
        
        // Gembok Jahit (Karena ada yg harus dibeli dulu)
        btnJahit.className = 'btn-secondary';
        btnJahit.style.opacity = '0.5';
        btnJahit.style.cursor = 'not-allowed';
        btnJahit.innerHTML = `<i class="fas fa-lock"></i> 2. Request Jahit (PR)`;
        btnJahit.disabled = true;
        btnJahit.onclick = function() { alert("Terdapat material yang harus dibeli/restock (Status Mixed). Harap selesaikan PR Kain terlebih dahulu."); };
    }

    // KASUS E: SEMUA STOK GUDANG (Tapi status belum fabricPrDone = true)
    // Logic: Jika semua internal source, kita anggap Ready to Go.
    else {
        // Tombol Kain: Info Siap
        btnKain.className = 'btn-success';
        btnKain.innerHTML = `<i class="fas fa-check"></i> Kain Siap (Gudang)`;
        btnKain.disabled = true; // Tidak perlu PR Kain

        // Buka Gembok Jahit
        btnJahit.className = 'btn-primary';
        btnJahit.innerHTML = `<i class="fas fa-cut"></i> 2. Request Jahit (PR)`;
    }

    toggleCoView('detail');
}

// Fungsi Render Progress Bar
function renderCoProgress(co) {
    // Reset Kelas
    for(let i=1; i<=4; i++) {
        const el = document.getElementById(`step-${i}`);
        el.className = 'step-item';
        el.querySelector('.step-circle').innerHTML = i;
    }

    let step = 1;
    if(co.status === 'Pending') step = 2; // Menunggu Kain
    if(co.fabricPrDone) step = 3; // Kain beres, siap jahit
    if(co.status === 'In Process') step = 3; 
    if(co.status === 'Finished') step = 4;

    // Apply Style
    for(let i=1; i<=4; i++) {
        const el = document.getElementById(`step-${i}`);
        if(i < step) {
            el.className = 'step-item finished';
            el.querySelector('.step-circle').innerHTML = '<i class="fas fa-check"></i>';
        } else if (i === step) {
            el.className = 'step-item active';
        }
    }
}

function printCoDetail() {
    alert("Mencetak Work Order (WO) ke PDF...");
}

function convertCoToPr() {
    showPage('purchase-req');
    // Ambil ID dari tampilan detail
    const currentId = document.getElementById('d-co-id').innerText;
    initPr('co', currentId);
}

// --- MODULE: PURCHASE REQUEST ---
function switchPrTab(mode) {
    prFilterState.tab = mode;
    
    // Update UI Tab
    document.querySelectorAll('#pr-list-view .tab-btn').forEach(btn => btn.classList.remove('active'));
    if(mode === 'Active') document.getElementById('tab-pr-active').classList.add('active');
    else document.getElementById('tab-pr-history').classList.add('active');

    renderPrTable();
}

// FILE: planning-script.js (Timpa fungsi renderPrTable)

function renderPrTable() {
    const tbody = document.getElementById('pr-table-body');
    tbody.innerHTML = '';
    
    const searchVal = document.getElementById('pr-search').value.toLowerCase();
    const statusVal = document.getElementById('pr-filter-status').value;
    const typeVal = document.getElementById('pr-filter-type').value;
    const dateVal = document.getElementById('pr-date-filter').value;

    let filtered = dummyPRs.filter(pr => {
        // Filter Tab (Active vs History)
        const isHistory = ['Approved', 'Finished', 'Rejected'].includes(pr.status);
        if (prFilterState.tab === 'Active' && isHistory) return false;
        if (prFilterState.tab === 'History' && !isHistory) return false;

        // Filter Search
        const firstItemName = pr.items[0] ? pr.items[0].name.toLowerCase() : '';
        const matchSearch = pr.id.toLowerCase().includes(searchVal) || firstItemName.includes(searchVal);

        const matchStatus = statusVal === 'all' || pr.status === statusVal;
        const matchType = typeVal === 'all' || pr.type === typeVal;
        
        let matchDate = true;
        if (dateVal) matchDate = pr.deadline === dateVal;

        return matchSearch && matchStatus && matchType && matchDate;
    });

    filtered.sort((a, b) => new Date(a.deadline) - new Date(b.deadline));

    if(filtered.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" class="text-center text-muted" style="padding:30px;">Tidak ada data PR ditemukan.</td></tr>`;
        return;
    }

    filtered.forEach(pr => {
        let typeBadge = pr.type === 'Beli Kain' ? 'badge-purple' : 'badge-info';
        
        let statusBadge = 'badge-secondary';
        if (pr.status === 'Pending') statusBadge = 'badge-warning';
        else if (pr.status === 'Approved') statusBadge = 'badge-success';

        // Item Summary (Ambil nama produk pertama + count sisanya)
        let itemSummary = pr.items[0] ? `<strong>${pr.items[0].name}</strong>` : '-';
        if (pr.items.length > 1) itemSummary += `<br><small class="text-muted">+${pr.items.length - 1} produk lainnya</small>`;

        // Deadline
        let deadlineHtml = `<span>${pr.deadline}</span>`;
        // (Logic deadline warning sama seperti sebelumnya, dipersingkat disini)

        // RENDER ROW (TANPA KOLOM VENDOR)
        tbody.innerHTML += `
            <tr>
                <td><strong>${pr.id}</strong></td>
                <td>${pr.date}</td>
                <td><span class="badge ${typeBadge}">${pr.type}</span></td>
                <td>${itemSummary}</td>
                <td>${deadlineHtml}</td>
                <td><span class="badge ${statusBadge}">${pr.status}</span></td>
                <td>
                    <button class="btn-sm btn-outline" onclick="viewPrDetail('${pr.id}')" title="Lihat Detail">
                        <i class="fas fa-eye"></i>
                    </button>
                </td>
            </tr>
        `;
    });
}

// Hapus fungsi filterPrList yang lama, ganti panggilannya di HTML jika masih ada
function filterPrList() { renderPrTable(); }

// FILE: planning-script.js (Timpa fungsi viewPrDetail)

function viewPrDetail(id) {
    const pr = dummyPRs.find(p => p.id === id);
    if (!pr) return alert("Data PR tidak ditemukan");

    // 1. Isi Header Info (Tanpa Vendor)
    document.getElementById('detail-pr-id').innerText = pr.id;
    document.getElementById('detail-pr-date').innerText = 'Tanggal Terbit: ' + pr.date;
    
    // Sembunyikan atau Kosongkan Element Vendor di HTML (karena sudah dihapus)
    const vendorEl = document.getElementById('detail-pr-vendor');
    if(vendorEl) {
        vendorEl.parentElement.style.display = 'none'; // Hide kolom vendor di modal
    }

    document.getElementById('detail-pr-deadline').innerText = pr.deadline;
    document.getElementById('detail-pr-total-item').innerText = pr.itemsCount + ' SKU Produk';
    document.getElementById('detail-pr-type').innerText = pr.type;
    
    const statusBadge = document.getElementById('detail-pr-status');
    statusBadge.innerText = pr.status;
    let badgeClass = 'badge-secondary';
    if(pr.status === 'Pending') badgeClass = 'badge-warning';
    if(pr.status === 'Approved') badgeClass = 'badge-success';
    statusBadge.className = `badge ${badgeClass}`;

    // 2. Render Items Container (Looping Produk)
    const container = document.getElementById('detail-pr-items-container');
    container.innerHTML = '';

    pr.items.forEach((item, idx) => {
        
        // A. Generate Tabel Varian (Jika ada varian)
        let variantHtml = '';
        if(item.variants && item.variants.length > 0) {
            let rows = '';
            item.variants.forEach(v => {
                rows += `
                    <tr>
                        <td style="padding:5px; border-bottom:1px solid #eee;">
                            <span style="font-weight:500;">${v.color}</span>
                            <br><small class="text-muted" style="font-size:0.75rem;">Bahan: ${v.fabric}</small>
                        </td>
                        <td style="padding:5px; border-bottom:1px solid #eee;">${v.size}</td>
                        <td style="padding:5px; border-bottom:1px solid #eee; text-align:right;"><strong>${v.qty}</strong></td>
                    </tr>
                `;
            });
            
            variantHtml = `
                <div style="background:#fff; border:1px solid #eee; border-radius:6px; overflow:hidden;">
                    <table style="width:100%; font-size:0.85rem; border-collapse:collapse;">
                        <thead style="background:#f9f9f9;">
                            <tr><th style="padding:8px; text-align:left;">Warna & Kain</th><th style="padding:8px; text-align:left;">Size</th><th style="padding:8px; text-align:right;">Qty</th></tr>
                        </thead>
                        <tbody>${rows}</tbody>
                    </table>
                </div>
            `;
        } else {
            variantHtml = `<div class="text-muted" style="font-size:0.85rem; padding:10px; font-style:italic;">Tidak ada rincian varian (Item tunggal/Material).</div>`;
        }

        // B. Generate Material Summary (List Kebutuhan)
        let materialHtml = '';
        if(item.materialSummary && item.materialSummary.length > 0) {
            item.materialSummary.forEach(m => {
                // Style beda dikit kalo dia Kain atau Material lain
                let icon = m.name.toLowerCase().includes('kain') ? 'fa-scroll' : 'fa-box-open';
                materialHtml += `
                    <div style="display:flex; justify-content:space-between; font-size:0.85rem; margin-bottom:4px; border-bottom:1px dashed #eee; padding-bottom:2px;">
                        <span><i class="fas ${icon}" style="color:#aaa; margin-right:5px;"></i> ${m.name}</span>
                        <strong style="color:var(--primary);">${m.qty} ${m.unit}</strong>
                    </div>
                `;
            });
        }

        // C. Render Kartu Item
        container.innerHTML += `
            <div class="pr-item-card" style="border:1px solid #e0e0e0; border-radius:8px; padding:15px; margin-bottom:15px; background:white;">
                
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; padding-bottom:10px; border-bottom:2px solid #f5f5f5;">
                    <div>
                        <h5 style="margin:0; color:var(--text-dark); font-size:1rem;">${idx+1}. ${item.name}</h5>
                        <span class="text-muted" style="font-size:0.8rem;">SKU: ${item.sku} • Kategori: ${item.category}</span>
                    </div>
                    <span class="badge badge-info" style="font-size:0.85rem;">Total: ${item.totalQty} Pcs</span>
                </div>

                <div class="row">
                    <div class="col-7">
                        <h6 style="color:#777; margin-bottom:8px; font-size:0.8rem; text-transform:uppercase;">Rincian Order:</h6>
                        ${variantHtml}
                    </div>

                    <div class="col-5" style="border-left:1px dashed #ddd; padding-left:15px;">
                        <h6 style="color:#777; margin-bottom:8px; font-size:0.8rem; text-transform:uppercase;">Kebutuhan Material:</h6>
                        <div style="background:#fcfcfc; padding:10px; border-radius:6px; border:1px solid #eee;">
                            ${materialHtml}
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    // 3. Switch View
    document.getElementById('pr-list-view').classList.add('hidden');
    document.getElementById('pr-form-view').classList.add('hidden');
    document.getElementById('pr-detail-view').classList.remove('hidden');
}

function closePrDetail() {
    document.getElementById('pr-detail-view').classList.add('hidden');
    document.getElementById('pr-list-view').classList.remove('hidden');
}

function filterPrList() { renderPrTable(); }

function openPrModal() { document.getElementById('pr-source-modal').classList.remove('hidden'); }
function closePrModal() { document.getElementById('pr-source-modal').classList.add('hidden'); }

// --- UPDATE LOGIC INIT PR (planning-script.js) ---

// --- TIMPA FUNGSI INI DI planning-script.js ---
// --- REVISI: initPr ---
// --- REVISI: initPr (Fix Navigasi Otomatis) ---
function initPr(sourceType, param = null) {
    closePrModal();
    
    // --- STEP 1: LOGIKA KHUSUS NAVIGASI ---
    // Jika ini dari Inventory (Restock), kita harus paksa pindah halaman dulu ke PR
    if (sourceType === 'restock_sku') {
        showPage('purchase-req'); // <--- INI KUNCI PERBAIKANNYA
    }

    // Reset Form UI
    document.getElementById('pr-list-view').classList.add('hidden');
    document.getElementById('pr-form-view').classList.remove('hidden');
    
    prItems = []; 
    document.getElementById('pr-items-body-sewing').innerHTML = '';
    document.getElementById('pr-items-body-fabric').innerHTML = '';
    document.getElementById('pr-deadline').value = '';
    document.getElementById('pr-notes').value = '';
    document.getElementById('material-summary-box').innerHTML = 'Belum ada item.';
    
    const typeLabel = document.getElementById('form-pr-type-label');
    document.getElementById('pr-view-sewing').classList.add('hidden');
    document.getElementById('pr-view-fabric').classList.add('hidden');

    // MODE 1: FABRIC
    if (sourceType === 'fabric') {
        currentPrMode = 'fabric';
        typeLabel.innerText = "Beli Kain";
        typeLabel.className = "badge badge-purple";
        document.getElementById('pr-view-fabric').classList.remove('hidden');
    } 
    // MODE 2 & 3: SEWING / RESTOCK
    else {
        currentPrMode = 'sewing';
        typeLabel.innerText = "Jasa Jahit (Restock)";
        typeLabel.className = "badge badge-info";
        document.getElementById('pr-view-sewing').classList.remove('hidden');

        // CASE A: DARI CUSTOM ORDER (Existing Logic)
        if(sourceType === 'co' && param) {
            const coId = param;
            const co = customOrdersData.find(c => c.id === coId);
            if(co) {
                document.getElementById('pr-notes').value = `Ref: Custom Order ${co.id}`;
                
                // Logic Load Items dari CO
                co.items.forEach(item => {
                    let rawVariants = [];
                    let initialTotalQty = 0;

                    item.variants.forEach(v => {
                        if(v.sizes && Array.isArray(v.sizes)) {
                            v.sizes.forEach(sizeObj => {
                                let qtyVal = parseInt(sizeObj.qty) || 0;
                                rawVariants.push({
                                    color: v.colorName,
                                    size: sizeObj.size,
                                    qty: qtyVal,
                                    fabricName: v.materialInfo ? v.materialInfo.fabricName : 'Kain Custom'
                                });
                                initialTotalQty += qtyVal;
                            });
                        }
                    });

                    // Dummy Recipe logic for CO
                    let derivedRecipe = { fabricName: 'Multi Kain', fabricQty: 1.5, extras: [] };

                    let newItem = {
                        sku: 'CUSTOM-CO', 
                        name: item.name, 
                        rawVariants: rawVariants, 
                        totalQty: initialTotalQty, 
                        type: 'sewing',
                        recipe: derivedRecipe, 
                        materialNeeds: [] 
                    };
                    calculateItemMaterials(newItem);
                    prItems.push(newItem);
                });
                renderPrItems();
            }
        }
        
        // CASE B: DARI MENU RESTOCK (NEW LOGIC)
        else if(sourceType === 'restock_sku') {
            
            const skuList = selectedRestockSkus;

            if(skuList.length === 0) {
                alert("Pilih minimal satu produk untuk di-restock.");
                showPage('inventory'); // Balik ke inventory kalau kosong
                return;
            }

            // Auto-fill Notes
            document.getElementById('pr-notes').value = `Restock Produk Regular (${skuList.length} SKU)`;

            // Loop setiap SKU yang dipilih
            skuList.forEach(parentSku => {
                const product = products.find(p => p.sku === parentSku);
                
                if(product) {
                    let rawVariants = [];
                    
                    // Masukkan semua varian produk tersebut ke list input
                    product.variants.forEach(v => {
                        // Hitung Stok Saat Ini (Available / ATP)
                        const currentStock = (v.gudang || 0) - (v.reserved || 0);

                        rawVariants.push({
                            sku: v.sku,     
                            color: v.color,
                            size: v.size,
                            qty: 0,         // Default 0, user harus isi
                            fabricName: v.fabricName,
                            currentStock: currentStock // Simpan info stok
                        });
                    });

                    // Push ke prItems
                    let newItem = {
                        name: product.name,
                        sku: product.sku,
                        rawVariants: rawVariants,
                        totalQty: 0,
                        type: 'sewing',
                        recipe: product.recipe, 
                        materialNeeds: []
                    };
                    // Hitung material awal (walaupun qty 0)
                    calculateItemMaterials(newItem);
                    prItems.push(newItem);
                }
            });

            renderPrItems();
            // Bersihkan seleksi setelah masuk form
            clearSelection();
        }
    }
}

// --- TIMPA FUNGSI INI DI planning-script.js ---
function calculateItemMaterials(item) {
    let mats = [];
    let aggregator = {}; // Helper untuk grouping material yang sama

    if(item.recipe) {
        // 1. HITUNG KAIN (Spesifik per Warna)
        item.rawVariants.forEach(v => {
            // Gunakan fabricName dari varian jika ada, jika tidak fallback ke recipe global
            let fabricName = v.fabricName || item.recipe.fabricName || "Kain Default";
            let usageRate = item.recipe.fabricQty || 0;
            let totalUsage = v.qty * usageRate;

            if(totalUsage > 0) {
                if(!aggregator[fabricName]) aggregator[fabricName] = 0;
                aggregator[fabricName] += totalUsage;
            }
        });

        // Masukkan hasil hitungan kain ke array mats
        for (const [fname, fqty] of Object.entries(aggregator)) {
            mats.push({
                name: fname,
                totalQty: fqty,
                unit: 'Meter'
            });
        }
        
        // 2. HITUNG MATERIAL LAIN (Extras - Kancing, Label, dll)
        // Ini biasanya sama untuk semua warna, jadi dikalikan totalQty produk
        if(item.recipe.extras) {
            item.recipe.extras.forEach(ext => {
                let rate = ext.qtyRate !== undefined ? ext.qtyRate : ext.qty;
                mats.push({
                    name: ext.name,
                    totalQty: item.totalQty * rate,
                    unit: ext.unit
                });
            });
        }
    }
    item.materialNeeds = mats;
}

// --- UPDATE FUNGSI RENDER PICKER (planning-script.js) ---
// --- REVISI: renderCoPicker ---
function renderCoPicker() {
    const tbody = document.getElementById('co-picker-body');
    tbody.innerHTML = '';
    
    // REVISI LOGIC:
    // Hanya tampilkan CO yang:
    // 1. fabricPrDone === true (Kain sudah siap/diklaim)
    // 2. Status belum 'Finished' (Supaya tidak double)
    // 3. Opsional: Status belum 'In Process' jika ingin mencegah double PR Jahit (tergantung kebijakan)
    
    const readyToSewList = customOrdersData.filter(c => c.fabricPrDone === true && c.status !== 'Finished');

    readyToSewList.forEach(co => {
        // Hitung total qty untuk info sekilas
        let totalQty = 0;
        if(co.items) co.items.forEach(i => i.variants.forEach(v => {
            if(v.sizes) v.sizes.forEach(s => totalQty += s.qty);
        }));

        tbody.innerHTML += `
            <tr>
                <td><strong>${co.id}</strong></td>
                <td>
                    <div style="font-weight:600;">${co.client.project}</div>
                    <small class="text-muted">${co.client.name}</small>
                </td>
                <td>
                    <span class="badge badge-success" style="font-size:0.7rem;">
                        <i class="fas fa-check"></i> Kain Ready
                    </span>
                    <div style="font-size:0.8rem; margin-top:2px;">Total: ${totalQty} Pcs</div>
                </td>
                <td class="text-right">
                    <button class="btn-sm btn-primary" onclick="pickCo('${co.id}')">
                        <i class="fas fa-arrow-right"></i> Proses
                    </button>
                </td>
            </tr>`;
    });

    if(tbody.innerHTML === '') {
        tbody.innerHTML = '<tr><td colspan="4" class="text-center text-muted" style="padding:20px;">Tidak ada Order yang siap jahit (Kain belum ready).</td></tr>';
    }
}

function pickCo(id) {
    document.getElementById('co-picker-modal').classList.add('hidden');
    initPr('co', id);
}

function closePrForm() {
    document.getElementById('pr-form-view').classList.add('hidden');
    document.getElementById('pr-list-view').classList.remove('hidden');
}

// --- ADD ITEM LOGIC ---
let tempSelectedRes = null;

function openAddItemModal(mode) { 
    document.getElementById('add-item-modal').classList.remove('hidden');
    document.getElementById('modal-search-input').value = '';
    document.getElementById('modal-item-result').classList.add('hidden');
    
    const title = document.getElementById('modal-add-title');
    const label = document.getElementById('modal-search-label');
    
    if(mode === 'fabric') {
        title.innerText = "Tambah Kain dari Master Data";
        label.innerText = "Cari Nama Kain / ID";
    } else {
        title.innerText = "Tambah Item Produk (SKU)";
        label.innerText = "Cari SKU / Nama Produk";
    }
}
function closeAddItemModal() { document.getElementById('add-item-modal').classList.add('hidden'); }

// --- TIMPA FUNGSI INI DI planning-script.js ---
// --- TIMPA FUNGSI INI DI planning-script.js ---
function searchItemForModal() {
    const keyword = document.getElementById('modal-search-input').value.toLowerCase();
    
    if (currentPrMode === 'fabric') {
        const fabric = dummyFabrics.find(f => f.name.toLowerCase().includes(keyword) || f.id.toLowerCase() === keyword);
        if(fabric) {
            tempSelectedRes = fabric;
            showModalResult(fabric.name, fabric.id, `
                <div style="display:flex; gap:15px; align-items:center;">
                    <div style="width:60px; height:60px; background:#ddd; display:flex; align-items:center; justify-content:center;">IMG</div>
                    <div>
                        <p>Stok Tersedia: ${fabric.stock} Yard</p>
                        <label>Panjang Order (Yard):</label>
                        <input type="number" id="modal-qty-single" class="form-control" value="100">
                    </div>
                </div>
            `);
        } else { alert("Kain tidak ditemukan"); }

    } else {
        // SEWING MODE (REVISI: SKU Spesifik per Varian)
        // Cari berdasarkan Nama Produk (Keyword cocok dengan Nama)
        const p = products.find(s => s.name.toLowerCase().includes(keyword));
        
        if(p) {
            tempSelectedRes = p;
            let inputs = '';
            
            // Kelompokkan varian berdasarkan warna agar tampilan rapi
            const uniqueColors = [...new Set(p.variants.map(v => v.color))];
            
            uniqueColors.forEach(color => {
                // Filter varian milik warna ini
                const sizes = p.variants.filter(v => v.color === color);
                
                let sizeInputs = '';
                sizes.forEach(v => {
                    // Tampilkan SKU Spesifik di tooltip atau text kecil
                    sizeInputs += `
                    <div style="display:inline-block; margin-right:8px; margin-bottom:5px; width:90px; text-align:center;">
                        <div style="font-size:0.75rem; font-weight:bold; color:#555;">${v.size}</div>
                        <input type="number" class="form-control variant-qty-input" 
                               data-sku="${v.sku}" 
                               data-size="${v.size}"
                               data-color="${v.color}"
                               data-fabric="${v.fabricName}" 
                               style="padding:4px; text-align:center;" value="0" min="0">
                        <div style="font-size:0.65rem; color:#999;">${v.sku}</div>
                    </div>`;
                });
                
                inputs += `
                <div class="variant-row-wrapper" style="margin-bottom:15px; border-bottom:1px dashed #eee; padding-bottom:10px;">
                    <div style="font-weight:600; color:var(--primary); margin-bottom:5px;">
                        <i class="fas fa-palette"></i> ${color} 
                        <span style="font-size:0.8rem; color:#666; font-weight:normal;">(Kain: ${sizes[0].fabricName})</span>
                    </div>
                    <div style="display:flex; flex-wrap:wrap;">${sizeInputs}</div>
                </div>`;
            });
            showModalResult(p.name, "Multi-SKU", `<div id="modal-qty-inputs">${inputs}</div>`);
        } else { alert("Produk tidak ditemukan. Coba cari dengan nama produk."); }
    }
}

function showModalResult(name, id, htmlContent) {
    document.getElementById('modal-item-result').classList.remove('hidden');
    document.getElementById('modal-res-name').innerText = name;
    document.getElementById('modal-res-id').innerText = id;
    document.getElementById('modal-res-content').innerHTML = htmlContent;
}

// --- TIMPA FUNGSI INI DI planning-script.js ---
// --- TIMPA FUNGSI INI DI planning-script.js ---
function confirmAddItem() {
    if(!tempSelectedRes) return;
    
    if(currentPrMode === 'fabric') {
        const qty = document.getElementById('modal-qty-single').value;
        if(qty <= 0) { alert("Jumlah harus > 0"); return; }
        prItems.push({
            id: tempSelectedRes.id, name: tempSelectedRes.name, stock: tempSelectedRes.stock, 
            orderQty: qty, type: 'fabric'
        });
        renderPrItems();
        closeAddItemModal();

    } else {
        // SEWING MODE (REVISI: Handle Specific SKU)
        let newVariants = [];
        let total = 0;
        
        // Ambil semua input qty
        const inputs = document.querySelectorAll('.variant-qty-input');
        
        inputs.forEach(inp => {
            const val = parseInt(inp.value);
            if(val > 0) {
                // Ambil data detail dari attribut HTML yang kita set di searchItemForModal
                newVariants.push({ 
                    sku: inp.dataset.sku, // SKU Spesifik (Contoh: DMK-001-BLK-M)
                    color: inp.dataset.color, 
                    size: inp.dataset.size, 
                    qty: val,
                    fabricName: inp.dataset.fabric // Kain spesifik warna ini
                });
                total += val;
            }
        });

        if(total > 0) {
            let newItem = {
                // Kita pakai nama produk sebagai parent, tapi di dalamnya ada varian dengan SKU beda-beda
                name: tempSelectedRes.name, 
                sku: "Multi-SKU", // Placeholder parent
                rawVariants: newVariants, 
                totalQty: total, 
                type: 'sewing',
                recipe: tempSelectedRes.recipe, // Resep global (kancing dll)
                materialNeeds: []
            };
            
            // Hitung material otomatis
            calculateItemMaterials(newItem);
            
            prItems.push(newItem);
            renderPrItems();
            closeAddItemModal();
        } else {
            alert("Mohon isi minimal satu jumlah Qty.");
        }
    }
}

// --- UPDATE RENDER PR ITEMS (AGREGASI MATERIAL) ---

function renderPrItems() {
    if (currentPrMode === 'fabric') {
        // ... (Logic Fabric render tetap sama) ...
        const tbody = document.getElementById('pr-items-body-fabric');
        tbody.innerHTML = '';
        prItems.forEach((item, index) => {
            tbody.innerHTML += `<tr><td><div style="width:30px; height:30px; background:#ddd;"></div></td><td><strong>${item.name}</strong><br><small>${item.id}</small></td><td>${item.stock} Yard</td><td><input type="number" class="form-control" value="${item.orderQty}" style="width:80px"></td><td><button class="btn-icon" onclick="removePrItem(${index})"><i class="fas fa-trash"></i></button></td></tr>`;
        });

    } else {
        // RENDER SEWING MODE (UPDATED WITH STOCK INFO)
        const tbody = document.getElementById('pr-items-body-sewing');
        tbody.innerHTML = '';
        
        prItems.forEach((item, index) => {
            let variantInputsHtml = '<div style="display:flex; flex-wrap:wrap; gap:8px;">';
            
            item.rawVariants.forEach((v, vIdx) => {
                // Style untuk stok kritis (misal <= 5 warnanya merah)
                const isCrit = v.currentStock <= 5;
                const stockClass = isCrit ? 'stock-info-pill crit' : 'stock-info-pill';
                const stockText = (v.currentStock !== undefined) ? `Stok: ${v.currentStock}` : '-';

                variantInputsHtml += `
                    <div style="background:#fff; border:1px solid #ddd; border-radius:6px; text-align:center; min-width:70px; padding:5px;">
                        <div style="font-size:0.75rem; font-weight:bold; color:#444; margin-bottom:2px;">
                            ${v.color} - ${v.size}
                        </div>
                        
                        <span class="${stockClass}">${stockText}</span>

                        <input type="number" class="form-control" 
                               style="padding:4px; height:30px; text-align:center; font-size:0.95rem; font-weight:bold; border-color:${isCrit ? '#fecaca': '#ddd'}"
                               value="${v.qty}" min="0" placeholder="0"
                               onchange="updatePrItemQty(${index}, ${vIdx}, this.value)">
                    </div>
                `;
            });
            variantInputsHtml += '</div>';

            tbody.innerHTML += `
                <tr>
                    <td style="vertical-align:top; width: 25%;">
                        <strong>${item.name}</strong><br>
                        <span class="text-muted" style="font-size:0.8rem;">SKU: ${item.sku}</span>
                        ${item.sku === 'CUSTOM' ? '<br><span class="badge badge-warning" style="font-size:0.7rem">Custom Order</span>' : ''}
                    </td>
                    <td>${variantInputsHtml}</td>
                    <td style="vertical-align:middle; text-align:center;">
                        <strong style="font-size:1.2rem; color:var(--primary);" id="total-qty-${index}">${item.totalQty}</strong>
                    </td>
                    <td style="vertical-align:middle;">
                        <button class="btn-icon text-danger" onclick="removePrItem(${index})"><i class="fas fa-trash"></i></button>
                    </td>
                </tr>
            `;
        });

        renderPrSummary(); 
    }
}

function updatePrItemQty(itemIdx, variantIdx, newQty) {
    let item = prItems[itemIdx];
    let val = parseInt(newQty);
    
    // Validasi input agar tidak NaN
    if (isNaN(val) || val < 0) val = 0;

    // 1. Update qty varian spesifik di dalam memori
    item.rawVariants[variantIdx].qty = val;

    // 2. Hitung ulang Total Qty untuk item tersebut
    item.totalQty = item.rawVariants.reduce((sum, v) => sum + v.qty, 0);
    
    // Update tampilan angka total di tabel (Real-time feedback)
    const totalEl = document.getElementById(`total-qty-${itemIdx}`);
    if(totalEl) totalEl.innerText = item.totalQty;

    // 3. PENTING: Hitung ulang estimasi material berdasarkan Qty baru
    calculateItemMaterials(item);

    // 4. Render ulang kotak "Estimasi Material" di bawah
    renderPrSummary();
}

function renderPrSummary() {
    const sumBox = document.getElementById('material-summary-box');
    
    // Gabungkan material dari semua item
    let aggregator = {}; 

    prItems.forEach(item => {
        if(item.materialNeeds) {
            item.materialNeeds.forEach(mat => {
                if(!aggregator[mat.name]) {
                    aggregator[mat.name] = { qty: 0, unit: mat.unit };
                }
                aggregator[mat.name].qty += mat.totalQty;
            });
        }
    });

    if (Object.keys(aggregator).length > 0) {
        let listHtml = '<ul style="column-count: 2; column-gap: 30px; padding-left: 20px; margin: 0;">';
        
        for (const [name, data] of Object.entries(aggregator)) {
            // Format angka desimal maks 1 digit
            let displayQty = data.qty % 1 !== 0 ? data.qty.toFixed(1) : data.qty;
            
            // Style beda untuk Kain vs Material Lain
            let isFabric = name.toLowerCase().includes('kain') || name.toLowerCase().includes('katun') || name.toLowerCase().includes('sutra') || name.toLowerCase().includes('batik');
            let icon = isFabric ? 'fa-scroll' : 'fa-box-open';
            let colorStyle = isFabric ? 'color:#CF5306; font-weight:600;' : 'color:#555;';
            
            listHtml += `<li style="margin-bottom:6px; ${colorStyle} border-bottom:1px dashed #eee; padding-bottom:2px;">
                <i class="fas ${icon}" style="width:20px; text-align:center;"></i> 
                ${name}: <span style="float:right;">${displayQty} ${data.unit}</span>
            </li>`;
        }
        listHtml += '</ul>';
        sumBox.innerHTML = listHtml;
    } else {
        sumBox.innerHTML = '<span class="text-muted">Belum ada item untuk dihitung.</span>';
    }
}

function removePrItem(idx) { prItems.splice(idx, 1); renderPrItems(); }

// --- REVISI: submitPr (Notif & Redirect Dashboard) ---
function submitPr() {
    if(prItems.length === 0) { alert("Daftar item masih kosong."); return; }
    
    // Generate ID Baru
    const newId = 'PR-2025-' + (Math.floor(Math.random() * 900) + 100);
    
    // Cek element vendor (jika sudah dihapus di HTML, pakai dash)
    const vendorSelect = document.getElementById('pr-vendor-select');
    const vendor = vendorSelect ? vendorSelect.value : '-';
    
    const date = new Date().toISOString().split('T')[0];
    const type = currentPrMode === 'fabric' ? 'Beli Kain' : 'Jasa Jahit';

    // Masukkan ke Data Dummy
    dummyPRs.unshift({
        id: newId, 
        date: date, 
        type: type, 
        vendor: vendor, 
        itemsCount: prItems.length, 
        deadline: document.getElementById('pr-deadline').value, 
        status: 'Pending'
    });

    // 1. Notifikasi User (Sesuai Request)
    alert(`Sukses! Purchase Request ${newId} berhasil diterbitkan.\nNotifikasi telah dikirim ke Tim Produksi.`);

    // 2. Tutup Form & Reset UI
    closePrForm();
    
    // 3. Update Data di Background (Table & Dashboard Stats)
    renderPrTable();
    renderDashboard();

    // 4. Redirect Otomatis ke Halaman Dashboard
    showPage('dashboard');
}

// --- MODULE: KELOLA KAIN ---
function renderFabricTable(data = dummyFabrics) { // Nama fungsi tetap biar kompatibel
    const grid = document.getElementById('fabric-grid-container');
    grid.innerHTML = '';
    
    if(data.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding:30px; color:#888;">Tidak ada data kain ditemukan.</div>';
        return;
    }

    data.forEach(f => {
        // Logika Visual Status
        let statusHtml = f.status === 'Active' 
            ? `<span class="card-badge-status status-active"><i class="fas fa-check-circle"></i> Aktif</span>`
            : `<span class="card-badge-status status-inactive"><i class="fas fa-ban"></i> Non-Aktif</span>`;

        // Logika Low Stock
        let isLowStock = f.stock <= f.minStock;
        let cardClass = isLowStock ? 'inv-card stock-warning' : 'inv-card';
        let stockColor = isLowStock ? '#dc2626' : '#166534';
        let stockAlert = isLowStock ? `<span class="stock-badge-low"><i class="fas fa-exclamation-triangle"></i> Low</span>` : '';

        grid.innerHTML += `
            <div class="${cardClass}" onclick="openFabricEditModal('${f.id}')">
                ${statusHtml}
                <div class="inv-img ${f.patternClass}"></div>
                <div class="inv-body">
                    <h4 style="margin-bottom:5px; font-size:1rem;">${f.name}</h4>
                    <p class="text-muted" style="font-size:0.85rem; margin-bottom:10px;">
                        ${f.motif} • ${f.material}
                    </p>
                    <div style="border-top:1px solid #eee; padding-top:10px; display:flex; justify-content:space-between; align-items:center;">
                        <div>
                            <span style="color:${stockColor}; font-weight:bold; font-size:1.1rem;">${f.stock}</span> 
                            <span style="font-size:0.8rem; color:#666;">${f.unit}</span>
                            ${stockAlert}
                        </div>
                        <small class="text-muted" style="font-size:0.7rem;">${f.id}</small>
                    </div>
                </div>
            </div>
        `;
    });
}

// 2. Filter Logic
function filterFabric() {
    const text = document.getElementById('fabric-search').value.toLowerCase();
    const fStatus = document.getElementById('fabric-filter-status').value;
    const fStock = document.getElementById('fabric-filter-stock').value;

    const filtered = dummyFabrics.filter(f => {
        const matchText = f.name.toLowerCase().includes(text) || f.id.toLowerCase().includes(text);
        const matchStatus = fStatus === 'all' || f.status === fStatus;
        
        let matchStock = true;
        if (fStock === 'low') matchStock = f.stock <= f.minStock;
        if (fStock === 'safe') matchStock = f.stock > f.minStock;

        return matchText && matchStatus && matchStock;
    });

    renderFabricTable(filtered);
}

// 3. Form Tambah Kain Baru
function openFabricForm(mode) { 
    document.getElementById('fabric-list-view').classList.add('hidden');
    document.getElementById('fabric-form-view').classList.remove('hidden');
    
    // Reset Form
    document.getElementById('f-name').value = '';
    document.getElementById('f-vendor').value = '';
    document.getElementById('f-motif').value = '';
    document.getElementById('f-material').value = '';
    document.getElementById('f-stock').value = '';
    document.getElementById('f-min-stock').value = 100;
}

function closeFabricForm() {
    document.getElementById('fabric-form-view').classList.add('hidden');
    document.getElementById('fabric-list-view').classList.remove('hidden');
}

function saveNewFabric() {
    const newId = 'F-00' + (dummyFabrics.length + 1);
    const name = document.getElementById('f-name').value;
    const motif = document.getElementById('f-motif').value;
    const pattern = document.getElementById('f-pattern-class').value;
    const fileInput = document.getElementById('f-design-file');
    
    if(!name) { alert("Nama kain wajib diisi!"); return; }

    // Simulasi Nama File
    let fileName = "default.jpg";
    if(fileInput.files.length > 0) {
        fileName = fileInput.files[0].name;
    }

    dummyFabrics.push({
        id: newId,
        name: name,
        motif: motif || 'Custom',
        material: document.getElementById('f-material').value || 'Standard',
        vendor: document.getElementById('f-vendor').value || 'Umum',
        stock: parseInt(document.getElementById('f-stock').value) || 0,
        minStock: parseInt(document.getElementById('f-min-stock').value) || 50,
        unit: 'Yard',
        status: 'Active',
        patternClass: pattern,
        designFile: fileName // Simpan nama file
    });

    alert(`Master Kain Berhasil Ditambahkan!\nFile Desain: ${fileName}`);
    closeFabricForm();
    filterFabric();
}

// 4. Modal Edit / Detail (Saat Card Diklik)
// --- TIMPA FUNGSI INI DI planning-script.js ---

function openFabricEditModal(id) {
    const f = dummyFabrics.find(item => item.id === id);
    if(!f) return;

    document.getElementById('modal-fabric-edit').classList.remove('hidden');
    
    // Fill Data Kain
    document.getElementById('edit-f-id').value = f.id;
    document.getElementById('edit-f-name').value = f.name;
    document.getElementById('edit-f-stock').value = f.stock;
    document.getElementById('edit-f-status').value = f.status;
    
    // Preview Img
    document.getElementById('modal-f-img').className = `inv-img full-width ${f.patternClass}`;

    // --- LOGIKA MENCARI PRODUK TERKAIT (DIPERBAIKI) ---
    const relatedList = document.getElementById('related-products-list');
    relatedList.innerHTML = '';

    // Filter produk yang MEMILIKI VARIAN dengan nama kain yang sama
    const linkedProducts = products.filter(p => {
        // Cek apakah ada SATU SAJA varian yang pakai kain ini
        return p.variants && p.variants.some(v => v.fabricName === f.name);
    });

    if (linkedProducts.length > 0) {
        linkedProducts.forEach(p => {
            // Ambil varian spesifik yang pakai kain ini untuk ditampilkan infonya
            const specificVariants = p.variants.filter(v => v.fabricName === f.name);
            const variantLabels = specificVariants.map(v => v.color).join(', ');
            // Ambil rate kebutuhan dari recipe global
            const usageRate = p.recipe ? p.recipe.fabricQty : 0;

            relatedList.innerHTML += `
                <div style="display:flex; align-items:center; gap:12px; background:#f8f9fa; padding:10px; border-radius:8px; border:1px solid #eee;">
                    <img src="../gambar/${p.img}" alt="${p.name}" 
                         style="width:40px; height:40px; object-fit:cover; border-radius:6px; border:1px solid #ddd;"
                         onerror="this.src='https://via.placeholder.com/40'">
                    <div style="flex:1;">
                        <div style="font-size:0.9rem; font-weight:600; color:#333;">${p.name}</div>
                        <div style="font-size:0.75rem; color:#777;">
                            Varian: ${variantLabels} • Keb: ${usageRate} m/pcs
                        </div>
                    </div>
                    <a href="#" onclick="closeFabricEditModal(); showPage('master-prod');" style="font-size:0.8rem; color:var(--primary);">Lihat</a>
                </div>
            `;
        });
    } else {
        relatedList.innerHTML = `
            <div style="text-align:center; padding:15px; color:#999; font-size:0.9rem; border:1px dashed #eee; border-radius:6px;">
                <i class="fas fa-info-circle"></i> Belum ada produk yang menggunakan kain ini.
            </div>
        `;
    }
}

function closeFabricEditModal() {
    document.getElementById('modal-fabric-edit').classList.add('hidden');
}

function saveFabricUpdate() {
    const id = document.getElementById('edit-f-id').value;
    const newStock = parseInt(document.getElementById('edit-f-stock').value);
    const newStatus = document.getElementById('edit-f-status').value;

    const idx = dummyFabrics.findIndex(f => f.id === id);
    if(idx !== -1) {
        dummyFabrics[idx].stock = newStock;
        dummyFabrics[idx].status = newStatus;
        alert(`Data ${dummyFabrics[idx].name} berhasil diupdate.`);
        closeFabricEditModal();
        filterFabric(); // Re-render grid
    }
}



// --- MODULE: SALES PERFORMANCE LOGIC ---

function filterSalesPerf() {
    const tbody = document.getElementById('sales-perf-body');
    tbody.innerHTML = '';

    // 1. Ambil Value Filter
    const fColl = document.getElementById('perf-coll').value;
    const fCat = document.getElementById('perf-cat').value;
    const fUser = document.getElementById('perf-user').value;
    const fCond = document.getElementById('perf-cond').value;
    const fSort = document.getElementById('perf-sort').value; // top / low

    // (Note: Filter Tanggal hanya visual di dummy data ini, 
    // real implementasi akan query backend based on date range)

    // 2. Filter Data
    let filteredData = salesPerfData.filter(item => {
        return (fColl === 'all' || item.coll === fColl) &&
               (fCat === 'all' || item.cat === fCat) &&
               (fUser === 'all' || item.user === fUser) &&
               (fCond === 'all' || item.cond === fCond);
    });

    // 3. Hitung Total per Item untuk Sorting
    filteredData = filteredData.map(item => {
        item.total = item.online + item.offline + item.event;
        return item;
    });

    // 4. Sorting
    filteredData.sort((a, b) => {
        return fSort === 'top' ? b.total - a.total : a.total - b.total;
    });

    // 5. Render
    if (filteredData.length === 0) {
        tbody.innerHTML = '<tr><td colspan="7" class="text-center text-muted">Data tidak ditemukan sesuai filter.</td></tr>';
        return;
    }

    filteredData.forEach(item => {
        const badgeClass = item.cond === 'Ori' ? 'badge-ori' : 'badge-defect';
        
        tbody.innerHTML += `
            <tr>
                <td>
                    <strong>${item.name}</strong><br>
                    <small class="text-muted">${item.sku}</small>
                </td>
                <td>
                    <span style="font-size:0.85rem;">${item.cat} • ${item.user}</span><br>
                    <small class="text-muted">${item.coll}</small>
                </td>
                <td><span class="badge ${badgeClass}">${item.cond}</span></td>
                <td class="num-col">${item.online}</td>
                <td class="num-col">${item.offline}</td>
                <td class="num-col">${item.event}</td>
                <td class="num-col total-col">${item.total}</td>
            </tr>
        `;
    });
}

// Logic Klik Tombol 1 (Kain)
function prosesWOKain() {
    const co = customOrdersData.find(c => c.id === currentActiveCoId);
    
    // Jika sudah selesai, konfirmasi ulang
    if(co.fabricPrDone) {
        if(!confirm("Kain sudah ditandai selesai. Ingin membuat PR tambahan?")) return;
    }

    alert(`Membuat PR Kain untuk Project: ${co.client.project}`);
    showPage('purchase-req');
    initPr('fabric'); // Mode Kain
    
    // Autofill Notes
    setTimeout(() => {
        document.getElementById('pr-notes').value = `[AUTO] Request Kain untuk CO #${co.id}`;
    }, 100);
}

// Logic Klik Tombol 2 (Jahit)
function prosesWOJahit() {
    const co = customOrdersData.find(c => c.id === currentActiveCoId);

    // STRICT CHECK
    if (!co.fabricPrDone) {
        alert("AKSES DITOLAK!\n\nMaterial kain belum tersedia/belum diproses.\nSilakan selesaikan Langkah 1 (Request Kain) terlebih dahulu.");
        return;
    }

    // Lanjut ke PR Jahit
    showPage('purchase-req');
    initPr('co', co.id); // Mode Jahit by CO
}



// --- FUNGSI BARU: Hitung Stok yang Akan Datang (Incoming) ---
function getIncomingStock(productName) {
    let totalIncoming = 0;
    
    // Loop semua PR
    dummyPRs.forEach(pr => {
        // Hanya hitung PR yang statusnya masih berjalan (Pending / In Process)
        // Approved dianggap sudah masuk gudang (tergantung alur, di sini asumsi approved = otw)
        if (pr.status === 'Pending' || pr.status === 'In Process' || pr.status === 'Approved') {
            
            // Cek item di dalam PR tersebut
            if (pr.items) {
                pr.items.forEach(item => {
                    // Jika nama produk cocok, tambahkan totalQty requestnya
                    if (item.name === productName) {
                        totalIncoming += item.totalQty;
                    }
                });
            }
        }
    });
    
    return totalIncoming;
}

// --- MODULE: MONITORING STOK (INVENTORY) ---

function renderInventory() {
    const tbody = document.getElementById('inventoryTableBody');
    const thead = document.getElementById('inventoryHead');
    
    // 1. Ambil Nilai Filter
    const filterLoc = document.getElementById('filterLocation').value;
    const filterColl = document.getElementById('filterCollection').value; 
    const filterCat = document.getElementById('filterCategory').value;   
    const filterUser = document.getElementById('filterUserType').value; 
    const searchText = document.getElementById('searchInventory').value.toLowerCase();

    if (!tbody || !thead) return;
    tbody.innerHTML = '';
    thead.innerHTML = '';

    // 2. Header Row (Dinamis + Checkbox)
    // Kita tambahkan kolom checkbox di paling kiri
    let headerRow = '';
    if (filterLoc === 'gudang') {
        headerRow = `<tr><th width="40">#</th><th>Produk Info</th><th>Kategori</th><th>Stok Fisik (Good)</th><th style="color:red">Fisik (Defect)</th><th style="color:orange">Booked Online</th><th style="color:var(--primary)">Siap Kirim (ATP)</th><th>Aksi</th></tr>`;
    } else if (filterLoc === 'store') {
        headerRow = `<tr><th width="40">#</th><th>Produk Info</th><th>Stok di Store</th><th>Stok di Event</th><th>Total Sebaran Luar</th><th>Aksi</th></tr>`;
    } else {
        // Default View
        headerRow = `<tr><th width="40">#</th><th>Produk Info</th><th>Kategori</th><th width="180">Total Aset</th><th>Fisik Gudang</th><th>Siap Kirim (ATP)</th><th>Sebaran Luar</th><th>Status & Incoming</th></tr>`;
    }
    thead.innerHTML = headerRow;

    // 3. Filter Data
    const filteredData = products.filter(item => {
        const searchMatch = item.name.toLowerCase().includes(searchText) || item.sku.toLowerCase().includes(searchText);
        const collMatch = (filterColl === 'all') || (item.collection === filterColl);
        const catMatch = (filterCat === 'all') || (item.category === filterCat); 
        const userMatch = (filterUser === 'all') || (item.userType === filterUser);

        return searchMatch && collMatch && catMatch && userMatch;
    });

    if (filteredData.length === 0) {
        tbody.innerHTML = `<tr><td colspan="8" style="text-align:center; padding:20px;">Tidak ada data ditemukan.</td></tr>`;
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
        const percent = Math.min((totalAsset / (item.max || 100)) * 100, 100);
        
        // Incoming Logic
        const incomingQty = getIncomingStock(item.name);
        const isLow = totalAvailable < 10;
        const barColor = isLow ? '#dc3545' : '#28a745';
        
        // Status Badge Logic
        let statusBadge = '';
        let incomingHtml = '';

        if (item.status === 'discontinued') {
            statusBadge = `<span class="status-badge out">Discontinued</span>`;
        } else if (isLow) {
            if (incomingQty > 0) {
                statusBadge = `<span class="status-badge incoming"><i class="fas fa-clock"></i> Restocking</span>`;
                incomingHtml = `<div style="font-size:10px; color:#0284c7; margin-top:3px; font-weight:600;">+${incomingQty} on PR</div>`;
            } else {
                statusBadge = `<span class="status-badge low">Low Stock</span>`;
            }
        } else {
            statusBadge = `<span class="status-badge ok">Available</span>`;
            if(incomingQty > 0) incomingHtml = `<div style="font-size:10px; color:#888; margin-top:3px;">(+${incomingQty} incoming)</div>`;
        }

        const imgPath = item.img ? `../gambar/${item.img}` : 'https://via.placeholder.com/48?text=Img';

        const productInfoCol = `
            <div style="display:flex; align-items:center; gap:12px;">
                <img src="${imgPath}" class="product-thumb-small" onerror="this.src='https://via.placeholder.com/48?text=No+Img'">
                <div>
                    <strong>${item.name}</strong><br>
                    <small style="color:#888;">${item.sku}</small>
                </div>
            </div>
        `;

        // Checkbox Logic
        const isChecked = selectedRestockSkus.includes(item.sku) ? 'checked' : '';
        const checkboxHtml = `<td><input type="checkbox" class="chk-select" onclick="toggleProductSelection('${item.sku}')" ${isChecked}></td>`;

        let rowHtml = checkboxHtml; // Start with Checkbox

        // ... (Logic Kolom Berdasarkan Filter Lokasi Sama seperti sebelumnya) ...
        if (filterLoc === 'gudang') {
            rowHtml += `
                <td>${productInfoCol}</td>
                <td>${item.category} <small>(${item.userType})</small></td>
                <td style="font-weight:600;">${totalGudangGood} Pcs</td>
                <td style="color:red; font-weight:bold;">${totalGudangDefect > 0 ? totalGudangDefect : '-'}</td>
                <td style="color:orange;">${totalReserved > 0 ? totalReserved : '-'}</td>
                <td><span style="font-weight:700; color:var(--primary); font-size:16px;">${totalAvailable}</span></td>
                <td><button class="btn-sm btn-outline" onclick="viewProductDetail('${item.sku}')"><i class="fas fa-eye"></i></button></td>
            `;
        } else if (filterLoc === 'store') {
            rowHtml += `
                <td>${productInfoCol}</td>
                <td>${totalStore > 0 ? totalStore + ' Pcs' : '-'}</td>
                <td>${totalEvent > 0 ? totalEvent + ' Pcs' : '-'}</td>
                <td style="font-weight:bold;">${totalLuar} Pcs</td>
                <td><button class="btn-sm btn-outline" onclick="viewProductDetail('${item.sku}')"><i class="fas fa-eye"></i></button></td>
            `;
        } else {
            rowHtml += `
                <td>${productInfoCol}</td>
                <td>${item.category}<br><small class="text-muted">${item.collection}</small></td>
                <td>
                    <div class="stock-val">${totalAsset} Pcs</div>
                    <div class="stock-bar-container"><div class="stock-bar-fill" style="width: ${percent}%; background: ${barColor}"></div></div>
                </td>
                <td>
                    <div style="font-weight:600; color:#333;">${totalGudangGood} Good</div>
                    ${totalGudangDefect > 0 ? `<div style="font-size:10px; color:red;">${totalGudangDefect} Defect</div>` : ''}
                </td>
                <td>
                    <span style="font-weight:700; color:var(--primary); font-size:16px;">${totalAvailable}</span>
                    <div style="font-size:10px; color:#888;">(Booked: ${totalReserved})</div>
                </td>
                <td>${totalLuar > 0 ? totalLuar : '-'} <br> <small style="font-size:10px; color:#888;">(Store + Event)</small></td>
                <td>
                    <div style="display:flex; flex-direction:column; align-items:flex-start; gap:2px;">
                        ${statusBadge}
                        ${incomingHtml}
                    </div>
                    <div style="margin-top:5px;">
                         <button class="btn-sm btn-outline" style="padding:2px 8px; font-size:10px;" onclick="viewProductDetail('${item.sku}')">Detail</button>
                    </div>
                </td>
            `;
        }
        tbody.innerHTML += `<tr>${rowHtml}</tr>`;
    });
}

function viewProductDetail(sku) {
    const product = products.find(p => p.sku === sku);
    if (!product) return;

    let grandTotal = 0;
    product.variants.forEach(v => grandTotal += ((v.gudang||0) + (v.defect || 0) + (v.store||0) + (v.event||0)));

    // Update Text Detail
    document.getElementById('detailSku').innerText = product.sku;
    document.getElementById('detailName').innerText = product.name;
    document.getElementById('detailCategory').innerText = product.category + ' - ' + product.userType;
    document.getElementById('detailCollection').innerText = product.collection; 
    document.getElementById('detailTotal').innerText = grandTotal + " Pcs";

    // Update Image
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
                <td><strong>${v.color} - ${v.size}</strong></td>
                <td style="background:#fff8f5; font-weight:600; color:var(--primary);">${fisikGood}</td>
                <td style="color:red; font-weight:bold;">${fisikDefect > 0 ? fisikDefect : '-'}</td>
                <td style="color:orange; font-weight:500;">${reserved > 0 ? reserved : '-'}</td>
                <td><span style="color:var(--primary); font-weight:800; font-size:14px;">${available}</span></td>
                <td>${v.store > 0 ? v.store : '<span style="color:#ccc;">-</span>'}</td>
                <td>${v.event > 0 ? v.event : '<span style="color:#ccc;">-</span>'}</td>
                <td><strong>${fisikGood + fisikDefect + (v.store||0) + (v.event||0)}</strong></td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });

    document.getElementById('productDetailModal').classList.remove('hidden');
}


function toggleProductSelection(sku) {
    const idx = selectedRestockSkus.indexOf(sku);
    if (idx > -1) {
        selectedRestockSkus.splice(idx, 1); // Hapus jika sudah ada
    } else {
        selectedRestockSkus.push(sku); // Tambah jika belum
    }
    updateActionBar();
}

function clearSelection() {
    selectedRestockSkus = [];
    // Uncheck semua checkbox visual
    document.querySelectorAll('.chk-select').forEach(el => el.checked = false);
    updateActionBar();
}

function updateActionBar() {
    const bar = document.getElementById('restockActionBar');
    const countSpan = document.getElementById('selectedCount');
    
    if (selectedRestockSkus.length > 0) {
        bar.classList.remove('hidden');
        countSpan.innerText = selectedRestockSkus.length;
    } else {
        bar.classList.add('hidden');
    }
}

// --- FUNGSI BARU: Navigasi dari Menu PR ke Monitoring Stok ---
function goToInventoryForRestock() {
    // 1. Tutup Modal Pilihan PR
    closePrModal();
    
    // 2. Pindah ke Halaman Monitoring Stok
    showPage('inventory');
    
    // 3. (Opsional) Reset filter inventory ke default agar semua produk terlihat
    document.getElementById('filterLocation').value = 'all';
    renderInventory();

    // 4. Beri feedback ke user
    setTimeout(() => {
        alert("Mode Restock Aktif:\nSilakan centang (checklist) produk yang ingin di-restock pada tabel, lalu klik tombol 'Buat PR Restock' yang muncul di bawah.");
    }, 300);
}