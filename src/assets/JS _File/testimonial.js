function testimonial() {
    const myCarousel = document.getElementById('myCarousel')
    myCarousel.addEventListener('slid.bs.carousel', function () {

        const activeItem = this.querySelector(".active");

        document.querySelector(".testi-img img").src = activeItem.getAttribute("data-img");


        document.querySelector(".testi-img .circle").style.backgroundColor = activeItem.getAttribute("data-color");

        console.log(activeItem);
    })
    console.log("hi dev");
    console.log("sdfv");

}

