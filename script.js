const cart =document.querySelectorAll(".cart")
const ViewCart=document.createElement("div")
const totallllprice =document.querySelector(".totalllllllll-price")
const contentscreen=document.querySelector("#contentscreen")

////////////calc totla price
const updateTotalPrice = () => {
  const allProductsInViewCart =  document.querySelectorAll(".item-content")
  console.log(allProductsInViewCart)
  let total = 0

  allProductsInViewCart.forEach(item => {
  const price = Number(item.querySelector(".price").innerText.replace("$", ""))
  console.log(price)
  const quantity = Number(item.querySelector(".input-quantity").value)
  total = total + (price*quantity)

});

totallllprice.innerText = `    ${total}    $`



}


contentscreen.addEventListener("change", (eo) => {
  updateTotalPrice()
})


/////////////removr item from cart
contentscreen.addEventListener("click", (eo) => {
if(eo.target.classList.contains("delete")){
eo.target.parentElement.remove()
updateTotalPrice()

const deleteditem=eo.target.parentElement.querySelector(".name").innerText
console.log(deleteditem)

const Allcards=document.querySelectorAll(".card")
Allcards.forEach(element => {
  const Nofg=element.querySelector(".card-title").innerText
  console.log(Nofg)
  if(deleteditem==Nofg){
  const addtocartbtn=element.querySelector(".cart")  
  console.log(addtocartbtn)
  addtocartbtn.removeAttribute("disabled")
  addtocartbtn.classList.remove("correct")
  }
});
}
})


cart.forEach(item => {

item.addEventListener("click", () => {

item.setAttribute("disabled","") //disable button after click
item.classList.add("correct")
//const correct=document.querySelectorAll(".correct")


//////////show cart
///<body  id="body">
body.append(ViewCart)
ViewCart.classList.add("VCART")
ViewCart.innerHTML="&#10003; SHOW CART"
/////////////////////





///
const card=item.parentElement.parentElement  //reach to parent of parent to get cart info
console.log(card)
const imgSRC=card.querySelector(".img").getAttribute("src")
console.log(imgSRC)
const name=card.querySelector(".name").innerText
const price=card.querySelector(".price").innerText
console.log(name)
console.log(price)

const addedproduct0000001=`
<div class="item-content" >
<div style="display: flex;align-items: center;">
  <img src="${imgSRC}"  class="img-cont" alt="">
  <p class="name">${name}</p>
</div>
<div style="display: flex;align-items: center">
<input type="number" style="width: 30px;" value="1" class="input-quantity">
<p>Count</p>
</div>
<p class="price">${price}</p>
<button style="margin-right: 10px;" class="delete">Delete</button>
</div>

`
///<div id="allproducts"> in html
const allproducts=document.querySelector("#allproducts")
allproducts.innerHTML+=addedproduct0000001
updateTotalPrice()
})
})

const close=document.querySelector("#close")

close.addEventListener("click", () => {
  contentscreen.style.transform="translateX(-110vw)"

})

ViewCart.addEventListener("click",()=>{
  contentscreen.style.transform="translateX(0)" 
  ViewCart.style.display="none"
})

/////////////////////






