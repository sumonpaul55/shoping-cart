let plus1 =  document.getElementById("plus1");

// for(let i = 0; i < plus.length; i++){
//     let perplus = plus[i];
//     perplus.addEventListener("click", ()=>{
//         console.log"clicked"
//     })
// }
// document.getElementById("sub-total").innerText = 1200;
plus1.addEventListener("click", ()=>{
    increasequantity("quantityAmount1");

    let quantityphone = getnumber("quantityAmount1");
    // total phone amount
    let totalphone = quantityphone * 1200;
    document.getElementById("pricephone").innerText = totalphone; 
    //update subtotal 
    // document.getElementById("sub-total").innerText = updatedvalue;
});
// minus functionality



let minas1 = document.getElementById("minas1");

    minas1.addEventListener("click", ()=>{
        decreasequantity("quantityAmount1");

        let quantityphone = getnumber("quantityAmount1");
         let totalphone =  quantityphone;
    document.getElementById("pricephone").innerText = totalphone; 
})




// for second plus
let plus2 = document.getElementById('plus2');
document.getElementById("coverprice").innerText = 59;
plus2.addEventListener("click", ()=>{
    increasequantity("quantityAmount2");
    
    let quantitycover = getnumber("quantityAmount2");
        // /total cover amoutnm
        let totalcover = quantitycover * 59;
        document.getElementById("coverprice").innerText = totalcover;
});





let minas2 = document.getElementById("minas2");
    minas2.addEventListener("click", ()=>{
        decreasequantity("quantityAmount2");
})

function decreasequantity(quantityId){
    let quantity = document.getElementById(quantityId).innerText;
    let quantityNumber = parseInt(quantity);
    quantityNumber--;
    if(quantityNumber == 0){
        quantityNumber == 1;
        return quantityNumber;
    }
    document.getElementById(quantityId).innerText = quantityNumber;
}

function increasequantity(quantityId){
    let quantityAmount = document.getElementById(quantityId).innerText;
    let quantity = parseInt(quantityAmount);
    quantity++;
    document.getElementById(quantityId).innerText = quantity;
}

// cross functionality
function hide(){
    let parant = document.getElementById("product1");
    parant.style.display = "none";
}
function hides(){
    let parant = document.getElementById("prodict2");
    parant.style.display = "none";
}


// calculation 
// let quantityphone = getnumber("quantityAmount1");
// let quantitycover = getnumber("quantityAmount2");
// //calculation of priceing
// let mobilePrice = getnumber("pricephone");
// let coverprice = getnumber("coverprice");

// let totalphone = quantityphone * mobilePrice;
// let totalcover = quantitycover * coverprice;

// let totalAmount = totalphone + totalcover;


// document.getElementById("sub-total").innerText = totalAmount;


// calculation of total section
let taxvalue = getnumber("tax");
let pricevalu = getnumber("sub-total");
let place = getnumber("total");
let total = taxvalue + pricevalu;
 
document.getElementById("total").innerText = total;
function getnumber(id){
    let subtotal = document.getElementById(id).innerText;
    let numbervalu = parseInt(subtotal);    
    return numbervalu;
}