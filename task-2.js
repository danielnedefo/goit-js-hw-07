const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
ingredients.map((item) => item = document.createElement('li'))
for (element of ingredients) {
  let list = document.createElement('li')
   list.innerHTML = element
}
// map использовать