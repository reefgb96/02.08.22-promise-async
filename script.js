"use strict";

//---- Task 1 ----\\

// Generate random number.
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Generate promise generator.
const createPromiseFn = () => {
  return new Promise((resolve, reject) => {
    let randNum = getRandomInt(1, 1000);
    setTimeout(() => {
      if (randNum > 500) {
        resolve(console.log(`Promise succeeded. Random number: ${randNum}`));
      } else {
        reject(console.log(`Promise Failed. Random number: ${randNum}`));
      }
    }, 1000);
  })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

let promise1 = createPromiseFn();

//---- Task 2 ----\\

const runAllPromises = async () => {
  try {
    let promise2 = await createPromiseFn();
    let promise3 = await createPromiseFn();
    //   console.log("promise2: ", promise2);
    //   console.log("promise3: ", promise3);
  } catch (error) {
    console.log("error: ", error);
  }
};
runAllPromises();

//---- Task 3 ----\\

const animalArr = {
  name: "dog",
  legs: 4,
  maxAge: 15,
};
console.log("animalArr: ", animalArr); //showing original Array.
delete animalArr.maxAge;
console.log("animalArr: ", animalArr); //showing Array after deleting maxAge.

//---- Optional ----\\
//---- Task 4 ----\\

// Creating a Pop-Up.
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.querySelector("#overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

const openModal = () => {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
};

const closeModal = () => {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
};

// Grabbing buttons form html.
const yesBtn = document.querySelector("#yesBtn");
const noBtn = document.querySelector("#noBtn");

// creating a Promise.
const yesNoPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise succeeded. Pressed yes");

      reject("Promise Failed. Pressed no");
    });
  }, 1000)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

// Linking the buttons to the Promise.
yesBtn.addEventListener("click", () => {
  yesNoPromise();
});
noBtn.addEventListener("click", () => {
  yesNoPromise();
});
