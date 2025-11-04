const countSpan = document.getElementById("count");
const minusBtn = document.getElementById("minusBtn");
const plusBtn = document.getElementById("plusBtn");
let count = 0;
// const add = ()  =>{

// }
plusBtn.addEventListener("click", () => {
  count += 1;
  countSpan.textContent = count;
});
minusBtn.addEventListener("click", () => {
  if (count > 0) {
    count -= 1;
    countSpan.textContent = count;
  }
});
