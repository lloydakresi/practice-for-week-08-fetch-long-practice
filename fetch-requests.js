/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

// Your code here
let url = "/products"
let header = {"Content-Type": "`application/x-www-form-urlencoded`"}
let method = "POST";
let body = new URLSearchParams({
    name: "Carribean Delight Coffee",
    description: "Made by Manatee Coffee",
    price: 11.99,
    category: "grocery"
})

fetch("/products", {
    method: method,
    headers: header,
    body: body
})




/* ============================== Phase 2 ============================== */

// Your code here
.then(response =>{

    console.log(response.status);
    console.log(response.headers.get("Content-Type"));
    console.log(response.)
})



/* ============================== Phase 3 ============================== */

// Your code here
