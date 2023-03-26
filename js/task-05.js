const nameIn = document.querySelector('#name-input');
const nameOut = document.querySelector('#name-output');
console.log(nameIn);
console.log(nameOut);

const addInpunName = () => {
  if (!nameIn.value) {
    nameOut.textContent = 'Anonymous';
  } else {
    nameOut.textContent = nameIn.value;
  }
};

nameIn.addEventListener('input', addInpunName);
