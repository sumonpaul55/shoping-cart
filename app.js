let plus =  document.getElementsByClassName("plus");

plus.addEventListener("click", ()=>{
    increasequantity("quantityAmount");
});

let minas = document.getElementsByClassName("mainas");
    minas.addEventListener("click", ()=>{
        decreasequantity("quantityAmount");
})








function decreasequantity(quantityId){
    let quantityAmount = document.getElementById(quantityId).innerText;
    let quantity = parseInt(quantityAmount);
    quantity--;
    if(quantity == 0){
        quantity == 1;
        return quantity;
    }
    document.getElementById(quantityId).innerText = quantity;
}


function increasequantity(quantityId){
    let quantityAmount = document.getElementById(quantityId).innerText;
    let quantity = parseInt(quantityAmount);
    quantity++;
    document.getElementById(quantityId).innerText = quantity;
}