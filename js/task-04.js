const list = document.querySelector('#counter');
const counterValue = document.querySelector('#value');
console.log(list);
console.log(counterValue);

let result = 0;
console.log(result);

const onSwapBtnClick = () => {
  result += 1;
  counterValue.textContent = result;
};

const offSwapBtnClick = () => {
  result -= 1;
  counterValue.textContent = result;
};

list.firstElementChild.addEventListener('click', offSwapBtnClick);
list.lastElementChild.addEventListener('click', onSwapBtnClick);
