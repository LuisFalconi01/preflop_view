const image = document.getElementById("preflopImage");

const prevBtn = document.getElementById("prevSlide");
const nextBtn = document.getElementById("nextSlide");

let currentImages = ["mp_vs_ep.png"];
let currentIndex = 0;

function showImage(index) {

    image.src = "images/" + currentImages[index];

    if (currentImages.length <= 1) {

        prevBtn.classList.add("hidden");
        nextBtn.classList.add("hidden");

    } else {

        prevBtn.classList.remove("hidden");
        nextBtn.classList.remove("hidden");
    }
}

document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", () => {

        document.querySelectorAll(".btn").forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        if (button.dataset.images) {

            currentImages = button.dataset.images
                .split(",")
                .map(img => img.trim());

        } else {

            currentImages = [button.dataset.image];
        }

        currentIndex = 0;

        showImage(currentIndex);
    });

});

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = currentImages.length - 1;
    }

    showImage(currentIndex);

});

nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= currentImages.length) {
        currentIndex = 0;
    }

    showImage(currentIndex);

});

showImage(0);


document.querySelectorAll('.accordion-header').forEach(header => {

    header.addEventListener('click', () => {

        const accordion = header.parentElement;
        accordion.classList.toggle('closed');

        const icon = header.querySelector('.accordion-icon');

        if (accordion.classList.contains('closed')) {
            icon.textContent = '▼';
        } else {
            icon.textContent = '▲';
        }

    });

});


if (window.innerWidth <= 768) {

    document.querySelectorAll('.accordion').forEach(acc => {
        acc.classList.add('closed');
    });

}


/* =========================
   RNG
========================= */

const numberElement = document.getElementById("number");
const countdownElement = document.getElementById("countdown");

if(numberElement){

    let countdown = 3;

    function generateNumber(){

        let interval = setInterval(() => {

            const temp = (Math.random() * 99 + 1).toFixed(0);

            numberElement.textContent = temp;

        }, 40);

        setTimeout(() => {

            clearInterval(interval);

            const finalNumber = (Math.random() * 99 + 1).toFixed(0);

            numberElement.textContent = finalNumber;

        }, 700);

        countdown = 3;

        countdownElement.textContent = countdown;
    }

    window.generateNumber = generateNumber;

    generateNumber();

    setInterval(() => {

        countdown--;

        countdownElement.textContent = countdown;

        if(countdown <= 0){

            generateNumber();
        }

    }, 1000);

}