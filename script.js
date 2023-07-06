const body = document.querySelector("body");
const goods = document.querySelector("#goods");
const users = document.querySelector("#users");
// ....на всяк випадок зміннні...............
const box = document.querySelector(".box");
const bigDiv = document.querySelector(".bigDiv");
const imgProducts = document.querySelector(".imgProducts");
const mainImg = document.querySelector(".mainImg");
const proName = document.querySelector(".proName");
const proPrice = document.querySelector(".proPrice");
// .....кнопка користувачі..............
let usersName = [];
const fetchUsers = "https://dummyjson.com/users";

users.addEventListener("click", () => {
  fetch(fetchUsers)
    .then((res) => res.json())
    .then((json) => {
      usersName = json.users;

      for (let index = 0; index < usersName.length; index++) {
        const element = usersName[index].firstName;
        const lastName = usersName[index].lastName;
////прізвище ім'я на сторінку
        let someDiiv = document.createElement("div");
        someDiiv.textContent = `◽ ${element}  ${lastName}`;
        goods.insertAdjacentElement("afterend", someDiiv);
      }
    });
});
//......відтермінування.................
setTimeout(() => {
  usersName;
}, 5000);
// ........ФУН-Я СТВ КАРТОК....................
function createCards () {
  for (let index = 0; index < allArray.length; index++) {
    let element = allArray[index].title;
    let pricEl = allArray[index].price;
    let imgTovary = allArray[index].images[0];
    //try add cards
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
}
// ....GPT HELP........................  ....
// function updateProductCards() {
//   box.innerHTML = ""; // Очистити контейнер перед оновленням карточок

//   const selectedCategory = document.querySelector(".selected"); // Отримати вибрану категорію (якщо є)
//   const category = selectedCategory ? selectedCategory.textContent : ""; // Отримати текст вибраної категорії

//   const rangeValue = rangeInput.value; // Отримати значення повзунка

//   for (let index = 0; index < allArray.length; index++) {
//     const element = allArray[index];
//     const elementCategory = element.category;
//     const elementPrice = element.price;

//     // Перевірити, чи відповідає карточка вибраній категорії та діапазону ціни
//     if (
//       (category === "" || elementCategory === category) && // Якщо категорія не вибрана або співпадає з категорією карточки
//       elementPrice <= rangeValue // Якщо ціна карточки менше або дорівнює значенню повзунка
//     ) {
//       // Створити елементи карточки товару і додати їх до контейнера
//       createCards()
//     }
//   }
// }

// // Прослуховувач події для кнопок категорій
// btnCategory.addEventListener("click", (e) => {
//   const selectedCategory = document.querySelector(".selected");
//   if (selectedCategory) {
//     selectedCategory.classList.remove("selected"); // Видалити попередній вибір категорії
//   }
//   e.target.classList.add("selected"); // Додати клас "selected" до натиснутої кнопки
//   updateProductCards(); // Онов
// });


// ..................................  ....
let allArray = [];
// PRODUCTS..........
const fetchProducts = "https://dummyjson.com/products";

fetch(fetchProducts)
  .then((res) => res.json())
  .then((json) => {
    allArray = json.products;
    // console.log(allArray);
    let arrCategoris = [];

    for (const item of allArray) {
            let category = item.category;
            arrCategoris.push(category);
    }
    // вивисти категорії окремо на сторінці
    let clearCategory = [...new Set(arrCategoris)];

    for (let index = 0; index < clearCategory.length; index++) {
      let element = clearCategory[index];
      let btnCategory = document.createElement("button");
      btnCategory.textContent = element;
      btnCategory.style.cursor = "pointer";
      btnCategory.id = "button" + index;
      // btnCategory.classList.add = '.selected';
      rangeInput.insertAdjacentElement("afterend", btnCategory);
    // додала дужки
    // }})      
//---------------------
      btnCategory.addEventListener("click", (e) => {
        box.innerHTML = "";

        let categoris = document.getElementById(e.target.id).textContent;

        fetch(fetchProducts)
          .then((res) => res.json())
          .then((json) => {
            allArray = json.products;

            for (let index = 0; index < allArray.length; index++) {
              const element = allArray[index];
              if (element.category === categoris  ) {
                //ств елементти
                // createCards()
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

  let p = document.createElement("p");     
  p.textContent = rangeValue;
 

  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((json) => {
      allArray = json.products;
 
      box.innerHTML = "";
      box.appendChild(p);
      for (let index = 0; index < allArray.length; index++) {
        const element = allArray[index].title;
        const pricEl = allArray[index].price;
        const category = allArray[index].category;
     
        
        //home task 4 07 2) зробити так, щоб фільтр працював як з кнопками з категоріями, так і з рендж інпутом з цінами - окремо і разом
       
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

        //

        if (pricEl <= rangeValue ) {
                         
        box.appendChild(newBigDiv);
          
        }
      }
    });
});
//......................... 

// .......................................
//HOME TASK 30 06

// всі товари - button
goods.addEventListener("click", () => {
  box.innerHTML = ''
  // ...................
  fetch("https://dummyjson.com/products")
    .then((res) => res.json())
    .then((json) => {
      allArray = json.products;
      //.............створення карток замінила на фун-ю
      createCards ()
          });
  // .................
}); // end adl on goods
// .................
// setTimeout(() => {
//   console.log(allArray);
// }, 5000);
//..................................
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
/////lesson 
