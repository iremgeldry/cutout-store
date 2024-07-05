import React  from 'react'

// const CURRENCY_FORMATER = new Intl.NumberFormat(undefined, {
//     currency: "EUR", style: "currency"
// })




// export function formatCurrency({price}){
//   return CURRENCY_FORMATER.format(price)
// }




function FormatCurrency({ price }){

    return new Intl.NumberFormat(undefined, {
             currency: "EUR", 
             style: "currency", 
             maximumFractionDigits: 2,
            }).format(price);

};

export default FormatCurrency;