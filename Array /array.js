// --- Raw Data Sources ---

let electronics =["labtop","phone","camara","hedphone"]
let accessories =["mouse","kebord","charger","cover"]

//---marge 2 array
let all_products =[...electronics,...accessories]
console.log( "All_Products:",all_products)
 
// --- Use slice() to preview first few products ---   
let top_products = all_products.slice(2,5)
console.log("top_products:",top_products)


// --- Use splice() to replace a product in the list ---
all_products.splice( 3,1,"smart watch") //remove 1 item at index 3 and add new item
console.log("After Splice:", all_Products)

// --- Suppose we receive nested array data from API ---
let nestedArray = [
  ["TV", "Speaker"],
  ["Tablet", ["Drone", "VR"]],
  "Router"
];
// --- Use flat() to make it one-level ---

let flatProducts=nestedArray.flat(2)
console.log("Flat Products1:", flatProducts)






