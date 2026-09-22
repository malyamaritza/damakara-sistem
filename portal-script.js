/**
 * DAMA KARA PORTAL - SCRIPT RINGKAS & CEPAT
 * Pengendali Tampilan Modul & Role
 */

function showView(viewId) {
    // Sembunyikan beranda dan semua sub-portal
    const views = document.querySelectorAll('.view-panel');
    views.forEach(v => v.classList.remove('active'));

    // Tampilkan target view
    const target = document.getElementById('view-' + viewId);
    if (target) {
        target.classList.add('active');
        window.location.hash = viewId;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Deteksi Hash saat load / tombol back browser
window.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.replace('#', '') || 'overview';
    showView(hash);
});

window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '') || 'overview';
    showView(hash);
});
