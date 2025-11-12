const inputProduct = document.getElementById(`productName`);
const inputPrice = document.getElementById(`productPrice`)
const btnAddProduct = document.getElementById(`addProduct`);
const tableCart = document.getElementById(`cart`);
const totalPrice = document.getElementById(`totalPrice`);

const templateProduct = document.getElementById(`templateProduct`);
const templatePrice = document.getElementById(`templatePrice`);
const templateQuantity = document.getElementById(`templateQuantity`);
const templateRemove = document.getElementById(`templateRemove`);

btnAddProduct.addEventListener(`click`, (e) => {
    templateProduct.textContent = inputProduct.value;
    templatePrice.value = Number.isNaN(Number(inputPrice.value)) ? 0.00 : Number(inputPrice.value).toFixed(2);
    templateQuantity.value = 1;
    const clonedNode = document.getElementById(`template`).cloneNode(true);
    templateProduct.textContent = ``;
    templatePrice.value = ``;
    templateQuantity.value = ``;
    clonedNode.style.display = ``;
    tableCart.appendChild(clonedNode);
    console.log(clonedNode);
    inputProduct.value = ``;
    inputPrice.value = ``;
    calculateTotal();
})

tableCart.addEventListener(`click`, (e) => {
    if (e.target.classList.contains(`remove`)) {
        e.target.closest(`td`).parentElement.remove();
    }
})

tableCart.addEventListener(`change`, (e) => {
    if (e.target.classList.contains(`price`)) {
        if (!Number.isNaN(Number(e.target.value))) {
            calculateTotal();
        }
    }

    if (e.target.classList.contains(`quantity`)) {
        if (!Number.isNaN(Number(e.target.value))) {
            e.target.parentElement.previousElementSibling.lastChild.value *= e.target.value;
            calculateTotal();
        }
    }
})

let calculateTotal = () => {
    let priceList = document.getElementsByClassName(`price`);
    let sum = 0;
    for (let p of priceList) {
        sum += Number(p.value);
        totalPrice.textContent = ``;
        totalPrice.textContent = `Total Price: ${new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(sum)}`;
    }
}