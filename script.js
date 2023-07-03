const body = document.querySelector("body");
const goods = document.querySelector("#goods");
const users = document.querySelector("#users");
// .....................
let usersName = [];

users.addEventListener("click", () => {
  fetch("https://dummyjson.com/users")
    .then((res) => res.json())
    .then((json) => {
      usersName = json.users;
      console.log(usersName); //show

      for (let index = 0; index < usersName.length; index++) {
        const element = usersName[index].firstName;
        const lastName = usersName[index].lastName;

        let someDiiv = document.createElement("div");
        someDiiv.textContent = `◽ ${element}  ${lastName}`;
        rangeInput.insertAdjacentElement("afterend", someDiiv);
      }
    });
});

setTimeout(() => {
  usersName;
}, 5000);
// ..................................
let allArray = [];

const fetchProducts = "https://dummyjson.com/products";

fetch(fetchProducts)
  .then((res) => res.json())
  .then((json) => {
    allArray = json.products;
    console.log(allArray);
  });

// .........повзунок...........
const rangeInput = document.getElementById("myRange");

rangeInput.addEventListener("change", function () {
  rangeValue = rangeInput.value;

  console.log(rangeValue);

  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((json) => {
      allArray = json.products;
      for (let index = 0; index < allArray.length; index++) {
        const element = allArray[index].title;
        const pricEl = allArray[index].price;
        const category = allArray[index].category;
        if (pricEl >= rangeValue) {
          console.log(element);
        }

        let p = document.createElement("p");

        if (category != category) {
          p.textContent = category + " .";
          body.appendChild(p);
        }
      }
    });
});

//.........................

// goods.addEventListener("click", () => {
//   fetch("https://dummyjson.com/products")
//     .then((res) => res.json())
//     .then((json) => {
//       allArray = json.products;

//       for (let index = 0; index < allArray.length; index++) {
//         const element = allArray[index].title;
//         const pricEl = allArray[index].price;
//         // if (pricEl >= rangeValue) {
//         //   console.log(element);
//         // }
//         console.log(element);
//       }
//     });
// });
// .......................................

const box = document.querySelector(".box");
const bigDiv = document.querySelector(".bigDiv");
const imgProducts = document.querySelector(".imgProducts");
const mainImg = document.querySelector(".mainImg");
const proName = document.querySelector(".proName");
const proPrice = document.querySelector(".proPrice");

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((json) => {
    allArray = json.products;

    for (let index = 0; index < allArray.length; index++) {
      let element = allArray[index].title;
      let pricEl = allArray[index].price;
      let imgTovary = allArray[index].images[1];

      const newBigDiv = document.createElement("div");
      newBigDiv.className = "bigDiv";

      const newImgProducts = document.createElement("div");
      newImgProducts.className = "imgProducts";

      const newMainImg = document.createElement("img");
      newMainImg.className = "mainImg";
      newMainImg.src = imgTovary;
      newMainImg.alt = "товар";

      const newBasketImg = document.createElement("img");
      newBasketImg.src = "./img/busket.png";
      newBasketImg.alt = "корзина";
      newBasketImg.className = "basket";

      const newProName = document.createElement("p");
      newProName.className = "proName";
      newProName.textContent = element;

      const newProPrice = document.createElement("p");
      newProPrice.className = "proPrice";
      newProPrice.textContent = `$ ${pricEl}`;

      newImgProducts.appendChild(newMainImg);
      newImgProducts.appendChild(newBasketImg);
      newBigDiv.appendChild(newImgProducts);
      newBigDiv.appendChild(newProName);
      newBigDiv.appendChild(newProPrice);

      box.appendChild(newBigDiv);
    }
  });

// .................
// setTimeout(() => {
//   console.log(allArray);
// }, 5000);
