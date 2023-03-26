const itemAll1 = document.querySelectorAll('.item');
console.log('Number of categories: ' + itemAll1.length);

const itemAll2 = document.querySelectorAll('h2');

itemAll2.forEach(element => {
  console.log('Category: ' + element.textContent);
  // console.log('Elements: ' + element.querySelectorAll('li').length);
  console.log('Elements: ' + element.nextElementSibling.children.length);
});
