function getCartItems() {
    let cartItems = JSON.parse(localStorage.getItem('cartItems'));
    console.log(cartItems);


    let cartTable = document.getElementById('cart-table');

    if (cartItems.length == 0) {

        showCartIsEmpty();
    }

    document.getElementById('totalcount').innerText = '(' + cartItems.length + ")";


    cartItems.forEach(product_item => {

        let tr = document.createElement('tr');
        tr.classList.add('cart-row');
        tr.classList.add('border');

        //fetching images

        let imageTd = document.createElement('td');

        let p_image = document.createElement('img');
        p_image.classList.add('product-img')
        p_image.src = product_item.item[0].img1;

        imageTd.append(p_image);

        tr.append(imageTd);

        //fetching product name
        let nameContainer = document.createElement('td');
        nameContainer.id = 'nameContainer';

        let nameTd = document.createElement('div')
        nameTd.innerText = product_item.name;

        let selectedColor = document.createElement('div');
        selectedColor.innerText = 'Color: ' + product_item.selectedColor;
        selectedColor.classList.add('selectedColor');
        let selectedSize = document.createElement('div');
        selectedSize.innerText = 'Size: ' + product_item.selectedSize;
        selectedSize.classList.add('selectedSize');


        nameContainer.append(nameTd, selectedColor, selectedSize);
        tr.append(nameContainer);

        //fetching price
        let priceTd = document.createElement('td')
        priceTd.classList.add("price");
        priceTd.innerText = product_item.price + ' /-Rs'

        tr.append(priceTd)

        //fetching quantities
        let countTd = document.createElement('td');

        let minus = document.createElement('i');
        minus.setAttribute('class', "fa-solid fa-minus");
        minus.onclick = function () {
            let count = product_item.quantity;
            count--;
            product_item.quantity = count;
            updatingQuantityInLocalStorage(product_item);
            tr.querySelector('.quantity').innerText = count;
            //    console.log('count: ' + count);
            updateTotalPrice(tr, product_item.quantity, product_item.price);
            if (count < 1) {
                cartTable.removeChild(tr);
                removingItemFromLocalStorage(product_item);
            }
        }

        let quantity = document.createElement('strong');
        quantity.innerText = product_item.quantity;
        quantity.className = 'quantity';

        let plus = document.createElement('i');
        plus.setAttribute('class', "fa-solid fa-plus");
        plus.onclick = function () {
            let count = product_item.quantity;
            count++;
            product_item.quantity = count;
            updatingQuantityInLocalStorage(product_item);
            // console.log(product_item.quantity);
            // console.log(cartItems);
            tr.querySelector('.quantity').innerText = count;
            console.log('count: ' + count);
            updateTotalPrice(tr, product_item.quantity, product_item.price);
        }


        countTd.append(minus, quantity, plus);

        tr.append(countTd);

        //fetching total price
        let totalPriceTd = document.createElement('td')
        totalPriceTd.classList.add("total-price");
        let totalprice = Number(product_item.price) * Number(tr.querySelector('.quantity').innerText);
        // console.log(totalprice);
        totalPriceTd.innerText = totalprice + '/-Rs';

        tr.append(totalPriceTd);




        //creating  a remove button
        let crossTd = document.createElement('td');
        crossTd.className = 'cross';

        let cross = document.createElement('i');
        cross.setAttribute('class', 'fa-solid fa-xmark');

        cross.onclick = function () {
            cartTable.removeChild(tr);
            removingItemFromLocalStorage(product_item);
        }

        crossTd.append(cross);

        tr.append(crossTd);




        cartTable.append(tr);


        // console.log(product_item)
    });



}


//used to update the total price for individual product
function updateTotalPrice(tr, count, price) {
    let totalprice = count * price;
    tr.querySelector('.total-price').innerText = totalprice + '/-Rs';

    changingSubtotal();

}

//to remove the item from localStorage and cart
function removingItemFromLocalStorage(itemToRemove) {
    let cartItems = JSON.parse(localStorage.getItem('cartItems'));
    // console.log(itemToRemove.selectedColor)

    cartItems = cartItems.filter(product_item => {
        if (product_item.id == itemToRemove.id && product_item.selectedColor == itemToRemove.selectedColor && product_item.selectedSize == itemToRemove.selectedSize) {
            return false;
        }
        return true;
    });

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    changingSubtotal();

    if (cartItems.length == 0) {
        // document.getElementById('cart-items').innerHTML = ('<h1 >Your cart is empty Now</h1>');
        showCartIsEmpty();
    }

}


function updatingQuantityInLocalStorage(itemToUpdate){
    let cartItems = JSON.parse(localStorage.getItem('cartItems'));
    console.log('in updatefunt');

    for(let i=0;i<cartItems.length;i++){
        if(cartItems[i].id == itemToUpdate.id && cartItems[i].selectedColor == itemToUpdate.selectedColor && cartItems[i].selectedSize == itemToUpdate.selectedSize){
            cartItems[i].quantity = itemToUpdate.quantity;
        }
    }

    console.log(cartItems);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

}

//used to display the final price consisting all products
function changingSubtotal() {
    let cartTable = document.getElementById('cart-table');
    let allTotals = cartTable.getElementsByClassName('total-price');
    let subtotal = 0;
    for (let i = 0; i < allTotals.length; i++) {
        // using regular expression
        let match = allTotals[i].innerText.match(/^\d+/);
        subtotal += Number(match[0]);
    }
    // console.log(subtotal);
    document.getElementById('subtotal-price').innerText = subtotal + "/-Rs"

    document.getElementById('grand-total-price').innerText = subtotal;

}


//used if the cart is made empty
function showCartIsEmpty() {
    // <i class="fa-solid fa-cart-shopping"></i>
    let cartItems = document.getElementById('cart-items');

    let emptyContainer = document.createElement('div');
    emptyContainer.id = 'empty-container';

    let cartSymbol = document.createElement('i');
    cartSymbol.setAttribute('class', 'fa-solid fa-cart-shopping');
    cartSymbol.id = 'cart-symbol'

    let msg = document.createElement('div');
    msg.innerText = "Your cart is empty Now...!!!";
    msg.className = 'empty-msg';

    let returnToHome = document.createElement('a');
    returnToHome.id = 'return-link'
    returnToHome.innerText = 'Return to Shop'
    returnToHome.href = 'index.html';


    emptyContainer.append(cartSymbol, msg, returnToHome);
    cartItems.innerText = "";
    cartItems.append(emptyContainer);





}