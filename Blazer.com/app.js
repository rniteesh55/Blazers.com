const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Levis",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./Images/levis.jpg",
      },
      {
        code: "darkblue",
        img: "./Images/levis2.jpg",
      },
    ],
  },
  {
    id: 2,
    title: "Rare Rabbit",
    price: 149,
    colors: [
      {
        code: "lightgray",
        img: "./Images/Rarerabbit2.jpg",
      },
      {
        code: "DarkBlue",
        img: "./Images/Rarerabbit.jpg",
      },
    ],
  },
  {
    id: 3,
    title: "H&M",
    price: 109,
    colors: [
      {
        code: "Black",
        img: "./Images/H&M.jpg",
      },
      {
        code: "gray",
        img: "./Images/H&M2.webp",
      },
    ],
  },
  {
    id: 4,
    title: "Allensolly",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./Images/Allensolly.jpg",
      },
      {
        code: "Darkblue",
        img: "./Images/Allensolly2.webp",
      },
    ],
  },
  {
    id: 5,
    title: "Peter England",
    price: 99,
    colors: [
      {
        code: "black",
        img: "./Images/Peterengland.jpg",
      },
      {
        code: "Red",
        img: "./Images/Peterengland2.jpg",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});