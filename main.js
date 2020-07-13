
// like button---------------------------------------------------------
$('.like-btn').on('click', function() {
  $(this).toggleClass('is-active');
});

//BUTTONS----------------------------------------------------------------
var buttonPlus = document.querySelectorAll(".plus-btn")
var prT= document.querySelector('.price-total')

//console.log(buttonPlus)
Array.from(buttonPlus).map(el => {
  el.addEventListener("click" , ()=> {
    el.nextElementSibling.innerHTML = parseInt(el.nextElementSibling.innerHTML) + 1
    var price = el.parentElement.nextElementSibling.innerHTML.replace("$","");
    prT.innerHTML = parseInt(prT.innerHTML) + parseInt(price);
    console.log(prT, price)
  })
})
//buttonMinus
var buttonMinus = document.querySelectorAll(".minus-btn")
Array.from(buttonMinus).map(el => {
  el.addEventListener("click" , ()=> { 
    if (el.previousElementSibling.innerHTML >0) {
    el.previousElementSibling.innerHTML = parseInt(el.previousElementSibling.innerHTML) - 1 
    var price = el.parentElement.nextElementSibling.innerHTML.replace("$","");
    prT.innerHTML = parseInt(prT.innerHTML) - parseInt(price);
    console.log(prT, price)}
  })

})

//delete-----------------------------------
var buttonDelete = document.querySelectorAll(".delete-btn")
var buttonLike = document.querySelectorAll('.like-btn')

Array.from(buttonDelete).map(el => {
  el.addEventListener('click', ()=>{
    var price = el.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML
    var nbr = el.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.children[1].innerHTML
    console.log(price)
      prT.innerHTML = parseInt(prT.innerHTML) - (parseInt(price.replace("$","")) * parseInt(nbr));
    el.parentElement.parentElement.remove()

  })
})

//price-----------------------------------------
var pr = document.querySelectorAll('.price')

function forEachFormItem(form, items, func) {
  return items.reduce(function (result, item) {
      return result + func(form.elements[item], form.elements[item + 'quantity']);
  }, 0);
}
