async function fetchingProducts(){
    // let res = await fetch("https://api.escuelajs.co/api/v1/products");
    let res = await fetch('https://fakestoreapi.com/products')
    let result = await res.json();
    // console.log("result", result);
    fetchingIndividualProducts(result);
    
} 

function fetchingIndividualProducts(result){
    result.forEach(element => {
        var title = element.title;
        var image1 = element.image;
        var price = element.price;
        productAppend(title,price,image1);
        
    });
    
}

function productAppend(title,price,image1){
    // console.log(title , "  " , price , " " , image1);
    var container = document.getElementById("prod-block");
    // var product = document.getElementById("product");
    var div = document.createElement("div");
    div.setAttribute("class","product");
    var img1 = document.createElement("img");
    console.log(image1);
    img1.src = image1;
    console.log("Image src : " , img1.src);

    var h2Price = document.createElement("h2");
    h2Price.innerHTML = price;
    console.log(h2Price.innerHTML);

    var h3Title = document.createElement("h3");
    h3Title.innerHTML = title;
    console.log(h3Title.innerHTML);

    buyBtn = document.createElement("button");
    buyBtn.innerHTML = "Buy Now";
    buyBtn.classList.add("buy-btn");

    div.append(img1,h2Price,h3Title,buyBtn);

    container.appendChild(div);
    
}




