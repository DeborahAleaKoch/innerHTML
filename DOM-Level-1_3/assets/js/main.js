console.log("hallo");

const images = document.getElementById("gallery");
console.log(images);

images.innerHTML =
  "<figure><img src='./assets/img/smallGiftCat.jpg'><figcaption>Geschenk.</figcaption></figure><figure><img width='300px' src='./assets/img/smallGiftCat.jpg'><figcaption>Geschenk1.</figcaption></figure><figure><img width='300px' src='./assets/img/smallGiftCat.jpg'><figcaption>Geschenk2.</figcaption></figure>";

// images.innerHTML = "<img src='./assets/img/giftCat.jpg'>";

let pictures = document.querySelector("img");
console.log(pictures);

document.querySelector("img").style.width = "300px";
