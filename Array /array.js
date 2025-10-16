// --- Raw Data Sources ---

let electronics =["labtop","phone","camara","hedphone"]
let accessories =["mouse","kebord","charger","cover"]

//---marge 2 array
let all_product =[...electronics,...accessories]
console.log( "All_Product:",all_product)
 
// --- Use slice() to preview first few products ---   
let top_product = all_product.slice(2,5)
console.log("top_product:",top_product)

