const findEl = document.querySelectorAll('#categories .item');
console.log("Number of categories:", findEl.length);

const allEl = findEl.forEach(element => {
    console.log("")
    console.log("Category:", element.querySelector('h2').textContent);
    console.log("Elements:", element.querySelectorAll('li').length);
})













