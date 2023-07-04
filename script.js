const body = document.querySelector("body");
const goods = document.querySelector("#goods");
const users = document.querySelector("#users");
// .....................
let usersName = [];
const fetchUsers = "https://dummyjson.com/users";

users.addEventListener("click", () => {
  fetch(fetchUsers)
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
// PRODUCTS..........
const fetchProducts = "https://dummyjson.com/products";

fetch(fetchProducts)
  .then((res) => res.json())
  .then((json) => {
    allArray = json.products;
    // console.log(allArray);
    let arrCat = [];

    for (const item of allArray) {
      // всі товари в консолі
      // console.log(item.title);

      let category = item.category;
      arrCat.push(category);
      /////
    }
    // вивисти категорії окремо на сторінці
    // console.log(arrCat);
    let clearCategory = [...new Set(arrCat)];
    // console.log(clearCategory);
    //
    // let btnCategory = document.createElement("button");
    //     btnCategory.textContent = clearCategory;
    //     btnCategory.style.cursor = "pointer";
    //
    for (let index = 0; index < clearCategory.length; index++) {
      let element = clearCategory[index];
      let btnCategory = document.createElement("button");
      btnCategory.textContent = element;
      btnCategory.style.cursor = "pointer";
      rangeInput.insertAdjacentElement("afterend", btnCategory);
      btnCategory.id = "button" + index;

      btnCategory.addEventListener("click", (e) => {
        box.innerHTML = "";

        let categoris = document.getElementById(e.target.id).textContent;

        fetch(fetchProducts)
          .then((res) => res.json())
          .then((json) => {
            allArray = json.products;

            for (let index = 0; index < allArray.length; index++) {
              const element = allArray[index];
              if (element.category === categoris) {
                //ств елементти
                let element = allArray[index].title;
                let pricEl = allArray[index].price;
                let imgTovary = allArray[index].images[0];

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
                //
              }
            }
          });
      });
    }
  });

// .........повзунок...........
//task 3
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
        //task5
        let p = document.createElement("p");
        p.textContent = `${element}, price ${pricEl}$, category ${category}.`;
        // rangeInput.appendChild(p)

        if (pricEl <= rangeValue) {
          rangeInput.insertAdjacentElement("afterend", p);

          console.log(element, ",", pricEl, ",", category);
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
//HOME TASK 30 06
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
      let imgTovary = allArray[index].images[0];

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
// repeat lesson 30 06
const btn1 = document.querySelector("#b1");
const btn2 = document.querySelector("#b2");
/////task1
// btn1.addEventListener("click", () => {
//   fetch(fetchProducts)
//     .then((res) => res.json())
//     .then((json) => {
//       allArray = json.products;

//       for (const item of allArray) {
//         console.log(item.title);
//       }
//     });
// });

// btn2.addEventListener('click', () => {
//   fetch(fetchUsers)
//     .then((res) => res.json())
//     .then((json) => {
//       usersName = json.users;

// for (const iterator of usersName) {
//   console.log(iterator.firstName, iterator.lastName );
// }
//     })
// })
//////
//task2
// btn1.addEventListener('click', () => {
//   fetch(fetchProducts)
//       .then((res) => res.json())
//       .then((json) => {
//         allArray = json.products;

//         for (const item of allArray) {
//           if(item.price<=50) {
//           console.log(item.title);
//         }
//         }
//       });
// })

// btn2.addEventListener('click', () => {
//   fetch(fetchProducts)
//   .then((res) => res.json())
//   .then((json) => {
//     allArray = json.products;

//     for (const item of allArray) {
//       if(item.price<=50) {
//       console.log(item.title);
//     }
//     }
//   });
// })

// .....................
/////lesson 4 07
