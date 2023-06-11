const itemAmonut = document.querySelector(".amount-number p")
const bottomPhotos = document.querySelectorAll(".photo-btn")
const mainPhoto = document.querySelector(".main-active-photo")

const prevBtn = document.querySelector(".previous-photo")
const nextBtn = document.querySelector(".next-photo")

const cartBtn = document.querySelector(".cart-btn")
const cartItems = document.querySelector(".cart-items")

// ITEAM ADD/REMOVE

let howManyItems = 0;
const removeItem = () => {
    if(howManyItems > 0) {
        howManyItems--;
        itemAmonut.innerText = howManyItems;
    } else {
        alert("How do You want to order negative quantity of products?")
    }
}

const addItem = () => {
    if(howManyItems < 100) {
        howManyItems++;
        itemAmonut.innerText = howManyItems;
    }   
}

//PHOTOS HIGHLIGHT

let currentActivePhoto = bottomPhotos[0];
let index = 0

for(const photo of bottomPhotos) {
 photo.onclick = () => {
    if(photo != currentActivePhoto) {
        photo.classList.add("active-photo")
        currentActivePhoto.classList.remove("active-photo")
        currentActivePhoto = photo;
    }

    if (currentActivePhoto == bottomPhotos[`${index + 1}`]) {
        mainPhoto.src = `images/image-product-2.jpg`
    } else if (currentActivePhoto == bottomPhotos[`${index + 2}`]) {
        mainPhoto.src = `images/image-product-3.jpg`
    } else if (currentActivePhoto == bottomPhotos[`${index + 3}`]) {
        mainPhoto.src = `images/image-product-4.jpg`
    } else {
        mainPhoto.src = `images/image-product-1.jpg`
    }
 }
}

prevBtn.addEventListener("click", () => {
    index--

    if (index < 0) {
        index = 3
    }

    if (index == 1) {
        mainPhoto.src = `images/image-product-2.jpg`
    } else if (index == 2) {
        mainPhoto.src = `images/image-product-3.jpg`
    } else if (index == 3) {
        mainPhoto.src = `images/image-product-4.jpg`
    } else {
        mainPhoto.src = `images/image-product-1.jpg`
    }
})

nextBtn.addEventListener("click", () => {
    index++

    if (index > 3) {
        index = 0
    }

    if (index == 1) {
        mainPhoto.src = `images/image-product-2.jpg`
    } else if (index == 2) {
        mainPhoto.src = `images/image-product-3.jpg`
    } else if (index == 3) {
        mainPhoto.src = `images/image-product-4.jpg`
    } else {
        mainPhoto.src = `images/image-product-1.jpg`
    }
   
})

//CART OPEN CLOSE

cartBtn.addEventListener("click", () => {
    cartItems.classList.toggle("cart-open")
})