  const mainUl = document.getElementById('categories')
const children = mainUl.children
let total = 0
for (let i = 0; i < children.length; i += 1){
  total += i;
}
console.log(`В списке ${total} категории`)
const count = function () {
  const list = document.querySelector(".item")
  const firstChild = list.firstChild.textContent;
  const lastChildElem = list.lastChild.length;
  console.log(`Категория:${firstChild}`)
  console.log(`Количество элементо:${lastChildElem}`)
}
count()
// const text = document.querySelector('h2').textContent;
// console.log(text)