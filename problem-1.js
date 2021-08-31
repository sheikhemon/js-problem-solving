// /*  Basic javascript Problem Solving */

// //============================================================================//
//                 /* Converted from seer to maund */
// //===========================================================================//     
function seerToMon(seer) {
    if(seer < 0) {
        return("Please provide a positive number");
    }
    let mon = seer / 40; //we know that 1 mon = 40 seer
    return mon;
}
seerToMon(200);

//=============================================================================//
     /* Here the total value is found out by selling shirt pants shoes */
//============================================================================// 
function totalSales(shirtQuantity, pantQuantity, shoeQuantity,) {
    const perShirtPrice = 100;
    const perPantPrice = 200;
    const perShoePrice = 500;
    /* product quantity calculation is here */
    const mythShirtQuantity = perShirtPrice * shirtQuantity;
    const mythPantQuantity = perPantPrice * pantQuantity;
    const mythShoeQuantity = perShoePrice * shoeQuantity;
    /* total product quantity is here */
    const totalProductQuantity = mythShirtQuantity + mythPantQuantity + mythShoeQuantity;
    return totalProductQuantity;
} 
console.log(totalSales(5, 2, 1));

// //=============================================================================//
//         /* Function to find out the total cost of shirt delivery */
// //============================================================================// 
function deliveryCost(shirtDelivery) {
    if (typeof shirtDelivery != `number`) {
        return `Please provide a positive number`
    }
    const  firstPerShirt = 100;  
    const  secondPerShirt = 80;  
    const ThirdPerShirt = 50; 
    /* Delivery charge of 0 to 100 per shirt */
    if (shirtDelivery <= 100){
        const shirtCost = shirtDelivery * firstPerShirt;
        return shirtCost;
    /* Delivery charge of 101 to 200 per shirt */
    }  else if (shirtDelivery <= 200) {
        const firstShirtCost = 100 * firstPerShirt;
        const restCost = shirtDelivery - 100;
        const secondShirtCost = restCost * secondPerShirt;
        const secondShirtTotalCost = firstShirtCost + secondShirtCost;
        return secondShirtTotalCost;
    /* Delivery charge of 201 to infinite per shirt */
    }  else {
        const firstShirtCost = 100 * firstPerShirt;
        const secondShirtCost = 100 * secondPerShirt;
        const restCost = shirtDelivery - 200;
        const thirdShirtCost = restCost * ThirdPerShirt;
        const thirdShirtTotalCost = firstShirtCost + secondShirtCost + thirdShirtCost;
        return thirdShirtTotalCost;
    }
}
console.log(deliveryCost());

//=============================================================================//
        /* The name of the 5 letter inside it is returned*/
//============================================================================// 
function perfectFriend(friends) {
    /* error case */
    if (typeof friends != `object`){
        return `Please provide a positive object`;
    }
    for(let i = 0; i < friends.length; i++){
        if (friends[i].length == 5) {
            return friends[i];
        } 
    }
}
console.log(perfectFriend([`lara`, `kara`, `fara`, `safia`, `noob`]));
