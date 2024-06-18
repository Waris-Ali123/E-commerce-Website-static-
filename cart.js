function getCartItems(){
    let cartItems = JSON.parse(localStorage.getItem('cartItems'));
    console.log(cartItems);

    let cartTable = document.getElementById('cart-table');

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
    let nameTd = document.createElement('td')
    nameTd.innerText = product_item.name;

    tr.append(nameTd);

    //fetching price
    let priceTd = document.createElement('td')
    priceTd.classList.add("price");
    priceTd.innerText = product_item.price + ' /-Rs'

    tr.append(priceTd)

    //fetching quantities
    let countTd = document.createElement('td');

    let minus = document.createElement('i');
    minus.setAttribute('class',"fa-solid fa-minus");
    minus.onclick = function(){
       let count =  tr.querySelector('.quantity').innerText;
       count--;
       tr.querySelector('.quantity').innerText = count;
       console.log('count: ' + count);
       updateTotalPrice(tr,count,product_item.price);
       if(count<1){
        cartTable.removeChild(tr);
        removingItemFromLocalStorage(product_item);
       }
    }

    let quantity = document.createElement('strong');
    quantity.innerText = '1';
    quantity.className = 'quantity';

    let plus = document.createElement('i');
    plus.setAttribute('class',"fa-solid fa-plus");
    plus.onclick = function(){
        let count =  tr.querySelector('.quantity').innerText;
        count++;
        tr.querySelector('.quantity').innerText = count;
        console.log('count: ' + count);
        updateTotalPrice(tr,count,product_item.price);
     }
 

    countTd.append(minus,quantity,plus);

    tr.append(countTd);

    //fetching total price
    let totalPriceTd = document.createElement('td')
    totalPriceTd.classList.add("total-price");
    let totalprice = Number(product_item.price)*Number(tr.querySelector('.quantity').innerText);
    console.log(totalprice);
    totalPriceTd.innerText = totalprice + '/-Rs';

    tr.append(totalPriceTd);




    //creating  a remove button
    let crossTd = document.createElement('td');
    crossTd.className = 'cross';

    let cross = document.createElement('i');
    cross.setAttribute('class','fa-solid fa-xmark');

    cross.onclick = function(){
        cartTable.removeChild(tr);
        removingItemFromLocalStorage(product_item);
    }

    crossTd.append(cross);

    tr.append(crossTd);




    cartTable.append(tr);


        // console.log(product_item)
    });

   

}


function updateTotalPrice(tr,count,price){
    let totalprice = count*price;
    tr.querySelector('.total-price').innerText = totalprice + '/-Rs';

    changingSubtotal();

}


function removingItemFromLocalStorage(itemToRemove){
    let cartItems = JSON.parse(localStorage.getItem('cartItems'));
    
    cartItems = cartItems.filter(product_item => product_item.id !== itemToRemove.id);

    localStorage.setItem('cartItems',JSON.stringify(cartItems));
    changingSubtotal();

}

function changingSubtotal(){
    let cartTable = document.getElementById('cart-table');
    let allTotals = cartTable.getElementsByClassName('total-price');
    let subtotal = 0;
    for(let i = 0;i<allTotals.length;i++){
        // using regular expression
        let match = allTotals[i].innerText.match(/^\d+/);  
        subtotal += Number(match[0]);
    }
    console.log(subtotal);
    document.getElementById('subtotal-price').innerText = subtotal + "/-Rs"

    document.getElementById('grand-total-price').innerText = subtotal ;

}