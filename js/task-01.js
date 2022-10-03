// const findEl = document.querySelectorAll('#categories .item');
// // console.log("Number of categories:", findEl.length);
// console.log(findEl);

// const allEl = findEl.forEach(element => {
//     console.log("")
//     console.log("Category:", element.querySelector('h2').textContent);
//     console.log("Elements:", element.querySelectorAll('li').length);
// })

const findEl = document.body.firstElementChild.nextElementSibling;
// console.log(findEl.children);
console.log("Number of categories:", findEl.children.length);

const value = [...findEl.children]
// console.log(value);

const allEl = value.forEach(element => {
    console.log("")
    console.log("Category:", element.firstElementChild.textContent);
    console.log("Elements:", element.lastElementChild.children.length);
})














