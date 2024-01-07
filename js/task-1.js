let categories = document.querySelectorAll(`.item`);
console.log("Number of categories:", categories.length);
categories.forEach(element => {
    console.log(element.firstElementChild.textContent);
    console.log(element.firstElementChild.nextElementSibling.children.length);
});
