const button =
    document.getElementById("openBtn");

const opening =
    document.getElementById("opening");

const couple =
    document.getElementById("couple");

const backgroundMusic =
    document.getElementById("backgroundMusic");


button.addEventListener("click", function () {

    /*
        1. Jalankan musik
    */

    backgroundMusic.volume = 0.5;
    backgroundMusic.play();
    
    /*
        1. Jalankan animasi opening
    */

    opening.classList.add("opened");

    button.disabled = true;


    /*
        2. Setelah opening selesai,
           munculkan biodata
    */

    setTimeout(function () {

        couple.classList.add("show");


        /*
            Aktifkan scroll
        */

        document.body.style.overflow = "auto";


        /*
            Scroll otomatis menuju biodata
        */

        couple.scrollIntoView({

            behavior: "smooth",

            block: "start"

        });

    }, 1000);

});
// =========================
// SCROLL REVEAL
// =========================

const revealElements = document.querySelectorAll('.scroll-reveal');

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                // Munculkan ketika masuk layar
                entry.target.classList.add('show');

            } else {

                // Hilangkan ketika keluar layar
                entry.target.classList.remove('show');

            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {
    revealObserver.observe(element);
});
// =========================
// GALLERY BUTTON SLIDER
// =========================

const galleryWrapper = document.getElementById('galleryWrapper');
const galleryTrack = document.querySelector('.gallery-track');

const galleryPrev = document.getElementById('galleryPrev');
const galleryNext = document.getElementById('galleryNext');

let galleryPosition = 0;

const galleryItem = document.querySelector('.gallery-item');

const galleryGap = 20;

function moveGallery(direction) {

    const itemWidth = galleryItem.offsetWidth + galleryGap;

    galleryPosition += direction * itemWidth;

    const maxScroll =
        galleryTrack.scrollWidth - galleryWrapper.clientWidth;

    if (galleryPosition < 0) {
        galleryPosition = 0;
    }

    if (galleryPosition > maxScroll) {
        galleryPosition = maxScroll;
    }

    galleryTrack.style.transform =
        `translateX(-${galleryPosition}px)`;

}


// Tombol kiri
galleryPrev.addEventListener('click', () => {

    moveGallery(-1);

});


// Tombol kanan
galleryNext.addEventListener('click', () => {

    moveGallery(1);

});
