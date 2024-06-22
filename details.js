function fetchingParticularProduct() {
    let product_item = JSON.parse(localStorage.getItem('product-item'))
    let itemSection = document.getElementById('item-section')


    let productRow = document.createElement('div');
    productRow.classList.add('product-row');

    //Image Container
    let imgContainer = document.createElement('div');
    imgContainer.classList.add('img-container');

    let mainImg = document.createElement('img');
    mainImg.id = 'mainImg';
    mainImg.src = product_item.item[0].img1;

    let remainingImages = document.createElement('div');
    remainingImages.classList.add('remaining-images');

    let img1 = document.createElement('img');
    img1.src = product_item.item[0].img1;
    img1.onclick = function () {
        mainImg.src = img1.src;
    }

    let img2 = document.createElement('img');
    img2.src = product_item.item[0].img2;
    img2.onclick = function () {
        mainImg.src = img2.src;
    }

    let img3 = document.createElement('img');
    img3.src = product_item.item[0].img3;
    img3.onclick = function () {
        mainImg.src = img3.src;
    }

    let img4 = document.createElement('img');
    img4.src = product_item.item[0].img4;
    img4.onclick = function () {
        mainImg.src = img4.src;
    }

    remainingImages.append(img1, img2, img3, img4);

    imgContainer.append(mainImg, remainingImages);




    //Description Container
    let detailsContainer = document.createElement('div');
    detailsContainer.classList.add('details-container');

    // fetching names
    let name = document.createElement('h2')
    name.innerText = product_item.name

    // fetching ratings and stars
    let stars = document.createElement('div')
    stars.classList.add('stars')

    let rating = document.createElement('h5')
    rating.innerText = '(' + product_item.rating + '.00)'


    for (let i = 0; i < product_item.rating; i++) {
        let starSymbol = document.createElement('i');
        starSymbol.setAttribute('class', 'fa-solid fa-star');
        stars.append(starSymbol);
    }

    stars.append(rating);


    //fetching price
    let price = document.createElement('h1')
    price.classList.add("price");
    price.innerText = product_item.price + '.00 /-Rs'


    //fetching color-container
    let colorContainer = document.createElement('div');
    colorContainer.classList.add('color-container');

    let color = document.createElement('h4');
    color.id = 'selectedColor';
    color.innerText = 'Color : ' + product_item.item[0].color;
    colorContainer.append(color);

    let colorBtnContainer = document.createElement('div');
    colorBtnContainer.classList.add('color-btn-container');

    for (let i = 0; i < product_item.item.length; i++) {
        let colorBtn = document.createElement('button');
        colorBtn.classList.add('myColorBtn')
        colorBtn.style.backgroundColor = product_item.item[i].color;
        colorBtnContainer.append(colorBtn);

        colorBtn.addEventListener('click', function () {
            changeImagesUsingColor(product_item.item[i], mainImg, img1, img2, img3, img4);
            document.getElementById('selectedColor').innerText = 'Color: ' + product_item.item[i].color;
        });
    }


    colorContainer.append(colorBtnContainer);


    //fetching sizes
    let sizeContainer = document.createElement('div');
    sizeContainer.classList.add('size-container');

    let sizeSelected = document.createElement('h4');
    sizeSelected.id = 'sizeSelected';
    sizeSelected.innerText = 'Size: ' + 'XS';

    sizeContainer.append(sizeSelected);

    let sizeButtons = document.createElement('div');
    sizeButtons.classList.add('sizes');
    
    let sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
    
    sizes.forEach(size => {
        let sizeBtn = document.createElement('button');
        sizeBtn.classList.add('size-btn');
        sizeBtn.setAttribute('data-size', size);
        sizeBtn.innerText = size;
        sizeBtn.onclick = function () {
            
            document.querySelectorAll('.size-btn').forEach((elem) => {
                elem.classList.remove('selected');
            })
            
            sizeBtn.classList.add('selected');

            let selectedSize = document.getElementById('sizeSelected');
            selectedSize.innerText = `Size: ${size}`;

        }
        sizeButtons.appendChild(sizeBtn);
            
    })
    
    sizeButtons.firstElementChild.classList.add('selected');    
    
    sizeContainer.append(sizeButtons);
   
    
    


    //Inserting Add To Cart Button
    let addToCartContainer = document.createElement('div');
    addToCartContainer.classList.add('add-to-cart-container');

    let addToCartBtn = document.createElement('button');
    addToCartBtn.classList.add('add-to-cart-btn');

    let shoppingBag = document.createElement('i');
    shoppingBag.setAttribute('class', "fa-solid fa-bag-shopping");

    let btnContent = document.createElement('span');
    btnContent.innerText = ' Add to Cart';

    addToCartBtn.append(shoppingBag, btnContent);
    addToCartBtn.addEventListener('click', function () {
        addingProductIntoCart(product_item);
        btnContent.innerText = ' Added';
        // addToCartBtn.removeEventListener('click');
    })


    addToCartContainer.append(addToCartBtn);




    //fetching details of the product
    let descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('description-container');

    let heading = document.createElement('h2');
    heading.innerText = 'Product Description';

    let detail = document.createElement('p')
    detail.classList.add('description');
    detail.innerText = product_item.disc;

    descriptionContainer.append(heading, detail);


    let image = document.createElement('img')
    image.src = product_item.item[0].img1

    detailsContainer.append(name, stars, price, colorContainer, sizeContainer, addToCartContainer, descriptionContainer)


    //appending the imgContainer and detailsContainer into productRow
    productRow.append(imgContainer, detailsContainer);

    itemSection.append(productRow);
    
}



function changeImagesUsingColor(item, mainImg, img1, img2, img3, img4) {
    mainImg.src = item.img1;
    img1.src = item.img1;
    img2.src = item.img2;
    img3.src = item.img3;
    img4.src = item.img4;

}



function addingProductIntoCart(product_item) {
    if (localStorage.getItem('cartItems') == undefined) {
        localStorage.setItem('cartItems', JSON.stringify([]));
    }


    let cartItems = JSON.parse(localStorage.getItem('cartItems'));
    let isPresent = isAlreadyPresentInCart(product_item,cartItems);
    
    if(isPresent!=false){

        let [color,size] = fetchingColorandSize();
        product_item = makingProductForCart(product_item,color,size);
        
        
        
        cartItems.push(product_item);
        
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

}


function fetchingColorandSize(){
    let color='blue' , size='XS' ;
    color = document.getElementById('selectedColor').innerText.split(':')[1].trim();
    size = document.getElementById('sizeSelected').innerText.split(':')[1].trim();

    return [color,size];
}

function makingProductForCart(product_item,color,size){
        // console.log(product_item);
        product_item.selectedColor = color;
        product_item.selectedSize = size;        
       // console.log(product_item);
       return product_item;
}

function isAlreadyPresentInCart(product_item,cartItems){

    let [color,size] = fetchingColorandSize();

    for(let i=0;i<cartItems.length;i++){
        let elem = cartItems[i];
        if(elem.name == product_item.name && elem.selectedColor==color && elem.selectedSize == size){
            return false;
        }
    };
    
    return true;
}