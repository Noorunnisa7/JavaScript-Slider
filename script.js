let slideImg = [];

slideImg[0] = new Image(); slideImg[0].src = "s1.jpg";
slideImg[1] = new Image(); slideImg[1].src = "s2.jpg";
slideImg[2] = new Image(); slideImg[2].src = "s3.jpg";
slideImg[3] = new Image(); slideImg[3].src = "s2.jpg";

let i = 0;

function changeImage(index) {
    let img = document.getElementById('slideShow');
    img.style.opacity = 0;

    setTimeout(() => {
        img.src = slideImg[index].src;
        img.style.opacity = 1;
    }, 300);
}

function next() {
    i++;
    if (i > slideImg.length - 1) i = 0;
    changeImage(i);
}

function previous() {
    i--;
    if (i < 0) i = slideImg.length - 1;
    changeImage(i);
}
