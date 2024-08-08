function beli(produk, harga) {
    localStorage.removeItem('selectedProduk');
    localStorage.setItem('selectedProduk', JSON.stringify({ produk, harga }));
    window.location.href = 'transaksi.html';
}

function buatPesanan() {
    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const alamat = document.getElementById('alamat').value.trim();

    if (!nama || !alamat || !email) {
        alert('Tolong Isi Semua Kolom!');
        return;
    }
    
    let joki = '';
    let price = 0;
    
    if (document.getElementById('paketa').checked) {
        joki = 'paketa';
        price = document.getElementById('paketa').getAttribute('data-price');
    } else if (document.getElementById('paketb').checked) {
        joki = 'paketb';
        price = document.getElementById('paketb').getAttribute('data-price');
    } else {
        alert('Pilih paket yang tersedia.');
        return;
    }


    const params = new URLSearchParams({
        nama,
        email,
        alamat,
        joki,
        price,
    });

    window.location.href = `invoice.html?${params.toString()}`;
}

window.addEventListener('load', () => {
    if (window.location.pathname.endsWith('invoice.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        document.getElementById('Nama').textContent = urlParams.get('nama');
        document.getElementById('email').textContent = urlParams.get('email');
        document.getElementById('Alamat').textContent = urlParams.get('alamat');
        document.getElementById('Produk').textContent = urlParams.get('joki');
        document.getElementById('Total').textContent = 'Rp ' + new Intl.NumberFormat('id-ID').format(urlParams.get('price'));
    }
});
