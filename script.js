/**
 * Class yang akan dibongkar pasang secara manual sesuai keinginanmu:
 * absolute top-14 w-full left-0 bg-[#3A6F43] divide-[#59AC77] divide-y-2
 */
const menu = document.querySelector('.menu');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const iconBars = document.querySelector('.fa-bars');
const iconClose = document.querySelector('.fa-xmark');

// PENTING: Hanya pasang event listener ke tombol hamburger saja!
// Hapus baris menu.addEventListener('click', displayMenu) yang bikin macet tadi.
hamburgerMenu.addEventListener('click', displayMenu);

function displayMenu() {
    // JIKA menu sedang tertutup (punya class 'hidden'), maka KITA BUKA
    if (menu.classList.contains('hidden')) {
        
        // 1. Munculkan menu dengan menghapus 'hidden'
        menu.classList.remove('hidden');
        
        // 2. Sembunyikan ikon garis tiga, munculkan ikon silang (X)
        iconBars.style.display = 'none';
        iconClose.style.display = 'inline';

        // 3. Tambahkan semua class layouting mobile kamu
        menu.classList.add('absolute');
        menu.classList.add('top-14');
        menu.classList.add('w-full');
        menu.classList.add('left-0');
        menu.classList.add('bg-[#3A6F43]'); 
        menu.classList.add('divide-[#59AC77]');
        menu.classList.add('divide-y-2');
        menu.classList.add('flex');
        menu.classList.add('flex-col');
        menu.classList.add('p-5');
        menu.classList.add('z-50'); // Ditambah z-50 supaya menu rapi di atas konten lain

    } 
    // JIKA menu sedang terbuka, maka KITA TUTUP
    else {
        // 1. Sembunyikan menu kembali dengan menambah 'hidden'
        menu.classList.add('hidden');
        
        // 2. Munculkan kembali ikon garis tiga, sembunyikan ikon silang (X)
        iconBars.style.display = 'inline';
        iconClose.style.display = 'none';

        // 3. Bersihkan semua class layouting mobile agar kembali normal di desktop
        menu.classList.remove('absolute');
        menu.classList.remove('top-14');
        menu.classList.remove('w-full');
        menu.classList.remove('left-0');
        menu.classList.remove('bg-[#3A6F43]');
        menu.classList.remove('divide-[#59AC77]');
        menu.classList.remove('divide-y-2');
        menu.classList.remove('flex');
        menu.classList.remove('flex-col');
        menu.classList.remove('p-5');
        menu.classList.remove('z-50');
    }
}