const clickIn = document.querySelector('#font-size-control');
const fontOut = document.querySelector('#text');
// console.log(clickIn);
// console.log(fontOut);
// console.dir(fontOut);

console.log(clickIn.value);

function addSie(event) {
  fontOut.style.fontSize = event.target.value + 'px';
}

clickIn.addEventListener('input', addSie);

//   event => {
//     console.dir(fontOut.value);
//   }
// );

// value: "16"
// valueAsNumber: 16

// value: "96"
// valueAsNumber: 96
