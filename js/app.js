const image = document.getElementById("preflopImage");

const prevBtn = document.getElementById("prevSlide");
const nextBtn = document.getElementById("nextSlide");

let currentImages = ["or_ep.png"];
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