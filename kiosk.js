fetch('http://localhost:5000/products')
.then(function(response) {
    return response.json();
})
.then(function(products) {
 console.log(products);

let myProducts = document.getElementById('products')
products.forEach(i => {
    let productsList = document.createElement('li')
    productsList.innerText = `${i.name}`
    myProducts.appendChild(productsList)
})
})
.catch(function(error){
 console.log('error',error);
});

fetch('http://localhost:5000/products/fruits')
.then(function(response) {
    return response.json();
})
.then(function(fruits) {
 console.log(fruits);

let myfruList = document.getElementById('fruList')
fruits.forEach(i => {
    let fruList = document.createElement('li')
    fruList.innerText = `${i.name}`
    myfruList.appendChild(fruList)
})
})
.catch(function(error){
 console.log('error',error);
});
fetch('http://localhost:5000/products/vegetables')
.then(function(response) {
    return response.json();
})
.then(function(vegetables) {
 console.log(vegetables);

let myvegList = document.getElementById('vegList')
vegetables.forEach(i => {
    let vegList = document.createElement('li')
    vegList.innerText = `${i.name}`
    myvegList.appendChild(vegList)
})
})
.catch(function(error){
 console.log('error',error);
});
