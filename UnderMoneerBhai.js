
// fetchingProducts();
function fetchingProducts() {

    // let productSection = document.getElementById('product-section')
    var container = document.getElementById("prod-block");

    let productData = [
        {
            "name": "FAUX LEATHER BIKER JACKET",
            "price": 6990,
            "category": "men",
            "rating": 5,
            "id": 1,
            "detail": " We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our garments.",
            "disc": "Jacket featuring a lapel collar with snap-button details. Long sleeves with zipped cuffs. Front zip pockets on the chest and hip. Interior button detail. Asymmetric front fastening with metal zip.",
            "item": [
                {
                    "color": "black",
                    "img1": "https://static.zara.net/photos///2022/I/0/2/p/3427/302/800/2/w/750/3427302800_1_1_1.jpg?ts=1662713271307",
                    "img2": "https://static.zara.net/photos///2022/I/0/2/p/3427/302/800/2/w/750/3427302800_2_4_1.jpg?ts=1662713298725",
                    "img3": "https://static.zara.net/photos///2022/I/0/2/p/3427/302/800/2/w/750/3427302800_6_1_1.jpg?ts=1662712286776",
                    "img4": "https://static.zara.net/photos///2022/I/0/2/p/3427/302/800/2/w/750/3427302800_2_3_1.jpg?ts=1662713270989"
                }
            ]
        },
        {
            "name": "BOMBER JACKET WITH CONTRAST PATCHES",
            "price": 7990,
            "category": "men",
            "rating": 4,
            "id": 2,
            "detail": " We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our garments.To assess compliance, we have developed a programme of audits and continuous improvement plans.",
            "disc": "Collared varsity jacket made of fabric which is slightly padded on the inside. Featuring long sleeves, contrast ribbed trims, jetted hip pockets and inside pocket detail. Contrast patches and embroidery on the front and back. Snap-button front.",
            "item": [
                {
                    "color": "orange",
                    "img1": "https://static.zara.net/photos///2022/I/0/2/p/6318/406/642/2/w/750/6318406642_1_1_1.jpg?ts=1662562290277",
                    "img2": "https://static.zara.net/photos///2022/I/0/2/p/6318/406/642/2/w/36/6318406642_2_5_1.jpg?ts=1662562290859",
                    "img3": "https://static.zara.net/photos///2022/I/0/2/p/6318/406/642/2/w/36/6318406642_2_2_1.jpg?ts=1662562291352",
                    "img4": "https://static.zara.net/photos///2022/I/0/2/p/6318/406/642/2/w/36/6318406642_6_3_1.jpg?ts=1662109839183"
                }
            ]
        },
        {
            "name": "DENIM WORKER JACKET",
            "price": 2790,
            "id": 3,
            "category": "kids",
            "rating": 5,
            "disc": "Collared denim jacket with long sleeves. Button-up front. Contrast front pockets.",
            "detail": "MADE TO BE USED MORE, MADE TO BE MADE AGAIN AND MADE FROM SAFE AND RECYCLED OR RENEWABLE MATERIALS.THE JEANS redESIGN REIMAGINES HISTORY’S MOST ICONIC FASHION ITEM TO TRANSCEND THE HERE AND NOW - MAKING JEANS THAT ARE MORE RESPONSIBLE AND EXTENDING THEIR LIFE CYCLE",
            "item": [
                {
                    "color": "blue",
                    "img1": "https://static.zara.net/photos///2023/V/0/3/p/3643/762/427/302/w/750/3643762427_1_1_1.jpg?ts=1670924429768",
                    "img2": "https://static.zara.net/photos///2023/V/0/3/p/4302/712/400/2/w/27/4302712400_6_1_1.jpg?ts=1669220404505",
                    "img3": "https://static.zara.net/photos///2023/V/0/3/p/4302/712/400/2/w/27/4302712400_6_2_1.jpg?ts=1669220409694",
                    "img4": "https://static.zara.net/photos///2023/V/0/3/p/4302/712/400/2/w/27/4302712400_6_3_1.jpg?ts=1669220417479"
                }
            ]
        },
        {
            "name": "BASIC T-SHIRT",
            "price": 550,
            "id": 4,
            "category": "kids",
            "rating": 5,
            "disc": "Round neck T-shirt with short sleeves.",
            "detail": "Care for water: produced using less water. We use the Join Life label on clothing that is produced using technology and raw materials that help us to reduce the environmental impact of our product",
            "item": [
                {
                    "color": "white",
                    "img1": "https://static.zara.net/photos///2022/I/0/3/p/9006/701/250/2/w/750/9006701250_6_1_1.jpg?ts=1658245608483",
                    "img2": "https://static.zara.net/photos///contents/cm/media-transformations/joinlife-kids-ctx/joinlife-kids-large.svg?ts=1611920113833",
                    "img3": "https://static.zara.net/photos///2022/I/0/3/p/9006/701/250/2/w/27/9006701250_6_3_1.jpg?ts=1658245620574",
                    "img4": "https://static.zara.net/photos///contents/cm/sustainability/extrainfo/w/27/sustainability-extrainfo-label-1001_0.jpg?ts=1626188266479"
                },
                {
                    "color": "red",
                    "img1": "https://static.zara.net/photos///contents/cm/media-transformations/joinlife-kids-ctx/joinlife-kids-large.svg?ts=1611920113833",
                    "img2": "https://static.zara.net/photos///contents/cm/media-transformations/joinlife-kids-ctx/joinlife-kids-large.svg?ts=1611920113833",
                    "img3": "https://static.zara.net/photos///2022/I/0/3/p/9006/701/600/2/w/27/9006701600_6_3_1.jpg?ts=1665417864124",
                    "img4": "https://static.zara.net/photos///contents/cm/sustainability/extrainfo/w/27/sustainability-extrainfo-label-1001_0.jpg?ts=1626188266479"
                },
                {
                    "color": "pink",
                    "img1": "https://static.zara.net/photos///contents/cm/media-transformations/joinlife-kids-ctx/joinlife-kids-large.svg?ts=1611920113833",
                    "img2": "https://static.zara.net/photos///contents/cm/media-transformations/joinlife-kids-ctx/joinlife-kids-large.svg?ts=1611920113833",
                    "img3": "https://static.zara.net/photos///contents/cm/media-transformations/joinlife-kids-ctx/joinlife-kids-large.svg?ts=1611920113833",
                    "img4": "https://static.zara.net/photos///contents/cm/sustainability/extrainfo/w/27/sustainability-extrainfo-label-1001_0.jpg?ts=1626188266479"
                }
            ]
        },
        {
            "name": "PUFFER COAT WITH RUBBERISED DETAIL",
            "price": 2490,
            "id": 5,
            "category": "kids",
            "rating": 4,
            "disc": "Rubberised puffer coat featuring a hood and long sleeves with elastic trims. Featuring a zip-up front fastening hidden by a snap-button placket. Front pockets",
            "detail": "We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our garments",
            "item": [
                {
                    "color": "pink",
                    "img1": "https://static.zara.net/photos///2022/I/0/3/p/3121/705/653/2/w/27/3121705653_6_1_1.jpg?ts=1668167478321",
                    "img2": "https://static.zara.net/photos///2022/I/0/3/p/3121/705/653/2/w/27/3121705653_6_2_1.jpg?ts=1668167476386",
                    "img3": "https://static.zara.net/photos///2022/I/0/3/p/3121/705/653/2/w/27/3121705653_6_3_1.jpg?ts=1668167476454",
                    "img4": "https://static.zara.net/photos///2022/I/0/3/p/3121/705/653/2/w/27/3121705653_6_4_1.jpg?ts=1668167478525"
                },
                {
                    "color": "black",
                    "img1": "https://static.zara.net/photos///2022/I/0/3/p/3121/705/800/2/w/27/3121705800_6_1_1.jpg?ts=1668683463588",
                    "img2": "https://static.zara.net/photos///2022/I/0/3/p/3121/705/800/2/w/27/3121705800_6_2_1.jpg?ts=1668683464366",
                    "img3": "https://static.zara.net/photos///2022/I/0/3/p/3121/705/800/2/w/27/3121705800_6_3_1.jpg?ts=1662538712655",
                    "img4": "https://static.zara.net/photos///2022/I/0/3/p/3121/705/800/2/w/27/3121705800_6_4_1.jpg?ts=1662538718596"
                }
            ]
        },
        {
            "name": "KIDS/ LOAFERS WITH TRACK SOLES",
            "price": 2990,
            "id": 6,
            "category": "kids",
            "rating": 3,
            "disc": "Loafers with a shiny finish. 100% cotton insole and lining. Rubber track sole",
            "detail": " We work with our suppliers, workers, unions and international organizations to develop a supply chain in which human rights are respected and promoted, contributing to the United Nations Sustainable Development Goals.",
            "item": [
                {
                    "color": "black",
                    "img1": "https://static.zara.net/photos///2022/I/1/3/p/2503/030/040/2/w/27/2503030040_6_1_1.jpg?ts=1657192710648",
                    "img2": "https://static.zara.net/photos///2022/I/1/3/p/2503/030/040/2/w/27/2503030040_6_2_1.jpg?ts=1657192708564",
                    "img3": "https://static.zara.net/photos///2022/I/1/3/p/2503/030/040/2/w/27/2503030040_6_3_1.jpg?ts=1657192711478",
                    "img4": "https://static.zara.net/photos///2022/I/1/3/p/2503/030/040/2/w/27/2503030040_6_4_1.jpg?ts=1657192710186"
                }
            ]
        },
        {
            "name": "EMBROIDEred TULLE TOP",
            "price": 2990,
            "id": 7,
            "category": "women",
            "rating": 5,
            "detail": "Care for fiber: at least 40% recycled polyamide. We use the Join Life label on clothing that is produced using technology and raw materials that help us to reduce the environmental impact of our products. ",
            "disc": "Top with a sweetheart neckline, adjustable ruffled straps and matching embroidery.",
            "item": [
                {
                    "color": "white",
                    "img1": "https://static.zara.net/photos///2022/I/0/1/p/8779/400/712/2/w/750/8779400712_2_1_1.jpg?ts=1657273842773",
                    "img2": "https://static.zara.net/photos///2022/I/0/1/p/8779/400/712/2/w/750/8779400712_2_2_1.jpg?ts=1657273824889",
                    "img3": "https://static.zara.net/photos///2022/I/0/1/p/8779/400/712/2/w/750/8779400712_2_2_1.jpg?ts=1657273824889",
                    "img4": "https://static.zara.net/photos///2022/I/0/1/p/8779/400/712/2/w/750/8779400712_6_2_1.jpg?ts=1657280282729"
                }
            ]
        },
        {
            "name": "FAUX LEATHER DOUBLE-BREASTED BLAZER",
            "price": 5990,
            "id": 8,
            "category": "women",
            "rating": 4,
            "detail": "We work with our suppliers, workers, unions and international organizations to develop a supply chain in which human rights are respected and promoted, contributing to the United Nations Sustainable Development Goals. ",
            "disc": "Blazer featuring a lapel collar and long sleeves. Front pockets with flaps. Back vent at the hem. Double-breasted fastening with matching covered buttons.",
            "item": [
                {
                    "color": "black",
                    "img1": "https://static.zara.net/photos///2022/I/0/1/p/3046/173/800/12/w/750/3046173800_1_1_1.jpg?ts=1666021157816",
                    "img2": "https://static.zara.net/photos///2022/I/0/1/p/3046/173/800/12/w/750/3046173800_2_3_1.jpg?ts=1666021153970",
                    "img3": "https://static.zara.net/photos///2022/I/0/1/p/3046/573/800/2/w/750/3046573800_6_1_1.jpg?ts=1661960077739",
                    "img4": "https://static.zara.net/photos///2022/I/0/1/p/3046/573/800/2/w/750/3046573800_6_3_1.jpg?ts=1661960079376"
                }
            ]
        },
        {
            "name": "POLO COLLAR BODYSUIT",
            "price": 890,
            "id": 9,
            "category": "women",
            "rating": 5,
            "detail": "Care for water: produced using less water. We use the Join Life label on clothing that is produced using technology and raw materials that help us to reduce the environmental impact of our products",
            "disc": "Long sleeve bodysuit with a polo collar. Featuring button fastening at the front and snap-button fastening at the bottom.",
            "item": [
                {
                    "color": "black",
                    "img1": "https://static.zara.net/photos///2022/I/0/1/p/4424/641/818/17/w/750/4424641818_2_3_1.jpg?ts=1670255441721",
                    "img2": "https://static.zara.net/photos///contents/cm/media-transformations/joinlife-ctx/joinlife-large.svg?ts=1611919362013",
                    "img3": "https://static.zara.net/photos///2022/I/0/1/p/4424/641/818/17/w/750/4424641818_1_1_1.jpg?ts=1670255442170",
                    "img4": "https://static.zara.net/photos///contents/cm/media-transformations/joinlife-ctx/joinlife-large.svg?ts=1611919362013"
                }
            ]
        },
        {
            "name": "PUFFER TECHNICAL JACKET",
            "price": 2990,
            "category": "men",
            "id": 10,
            "rating": 4,
            "detail": " We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our garments.",
            "disc": "Sightly puffy jacket with a high neck and long sleeves. Side pockets at the hip. Zip-up front.",
            "item": [
                {
                    "color": "blue",
                    "img1": "https://static.zara.net/photos///2022/I/0/2/p/8574/561/401/2/w/750/8574561401_1_1_1.jpg?ts=1668071585258",
                    "img2": "https://static.zara.net/photos///2022/I/0/2/p/8574/561/401/2/w/750/8574561401_6_3_1.jpg?ts=1656669324029",
                    "img3": "https://static.zara.net/photos///2022/I/0/2/p/8574/561/401/2/w/750/8574561401_2_4_1.jpg?ts=1668071586254",
                    "img4": "https://static.zara.net/photos///2022/I/0/2/p/8574/561/401/2/w/750/8574561401_2_5_1.jpg?ts=1668071585685"
                },
                {
                    "color": "black",
                    "img1": "https://static.zara.net/photos///2022/I/0/2/p/8574/561/800/2/w/750/8574561800_6_3_1.jpg?ts=1656669334748",
                    "img2": "https://static.zara.net/photos///2022/I/0/2/p/8574/561/800/2/w/750/8574561800_2_4_1.jpg?ts=1668071586085",
                    "img3": "https://static.zara.net/photos///2022/I/0/2/p/8574/561/800/2/w/750/8574561800_2_2_1.jpg?ts=1668071585932",
                    "img4": "https://static.zara.net/photos///2022/I/0/2/p/8574/561/800/2/w/750/8574561800_2_1_1.jpg?ts=1668071586442"
                }
            ]
        },
        {
            "name": "CONTRAST BOMBER JACKET",
            "price": 8590,
            "id": 11,
            "category": "men",
            "rating": 5,
            "detail": " We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our garments.",
            "disc": "Varsity jacket with lightly padded interior. Ribbed collar and long sleeves with elastic cuffs. Jetted pockets at the hip and inside pocket detail. Ribbed hem. Snap-button front fastening.",
            "item": [
                {
                    "color": "blue",
                    "img1": "https://static.zara.net/photos///2023/V/0/1/p/6318/352/401/2/w/750/6318352401_1_1_1.jpg?ts=1669650883638",
                    "img2": "https://static.zara.net/photos///2023/V/0/2/p/6318/352/401/2/w/750/6318352401_6_3_1.jpg?ts=1669302791181",
                    "img3": "https://static.zara.net/photos///2023/V/0/1/p/6318/352/401/2/w/750/6318352401_2_4_1.jpg?ts=1669650882776",
                    "img4": "https://static.zara.net/photos///2023/V/0/2/p/6318/352/401/2/w/750/6318352401_6_2_1.jpg?ts=1669302769211"
                },
                {
                    "img1": "",
                    "img2": "",
                    "img3": "",
                    "img4": ""
                }
            ]
        },
        {
            "name": "KIDS/ WATER-REPELLENT PADDED BOOTS",
            "price": 3290,
            "id": 12,
            "category": "kids",
            "rating": 4,
            "disc": "Padded boots in contrast materials. Adjustable lace-up fastening and side zip fastening. Front and back pull tabs for slipping on with ease. Memory-effect insole and faux fur lining. Chunky rubber sole.",
            "detail": "We work with our suppliers, workers, unions and international organizations to develop a supply chain in which human rights are respected and promoted, contributing to the United Nations Sustainable Development Goals",
            "item": [
                {
                    "color": "grey",
                    "img1": "https://static.zara.net/photos///2022/I/1/3/p/4293/030/802/2/w/27/4293030802_6_1_1.jpg?ts=1667206373379",
                    "img2": "https://static.zara.net/photos///2022/I/1/3/p/4293/030/802/2/w/27/4293030802_6_2_1.jpg?ts=1667206373461",
                    "img3": "https://static.zara.net/photos///2022/I/1/3/p/4293/030/802/2/w/27/4293030802_6_3_1.jpg?ts=1667206373109",
                    "img4": "https://static.zara.net/photos///2022/I/1/3/p/4293/030/802/2/w/27/4293030802_6_4_1.jpg?ts=1667206373038"
                },
                {
                    "color": "blue",
                    "img1": "https://static.zara.net/photos///2022/I/1/3/p/4293/030/400/2/w/27/4293030400_6_1_1.jpg?ts=1667206370976",
                    "img2": "https://static.zara.net/photos///2022/I/1/3/p/4293/030/400/2/w/27/4293030400_6_2_1.jpg?ts=1667206371717",
                    "img3": "https://static.zara.net/photos///2022/I/1/3/p/4293/030/400/2/w/27/4293030400_6_3_1.jpg?ts=1667206372061",
                    "img4": "https://static.zara.net/photos///2022/I/1/3/p/4293/030/400/2/w/27/4293030400_6_4_1.jpg?ts=1667206372154"
                }
            ]
        },
        {
            "name": "VELVET BODYSUIT WITH SEQUINS",
            "price": 1790,
            "id": 13,
            "category": "kids",
            "rating": 5,
            "disc": "Round neck velvet bodysuit featuring short puff sleeves in contrasting tulle fabric with sequin appliqués and elastic trims. Buttoned teardrop opening at the back and snap-button fastening at the bottom.",
            "detail": "We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our garments. To assess compliance, we have developed a programme of audits and continuous improvement plans.",
            "item": [
                {
                    "color": "black",
                    "img1": "https://static.zara.net/photos///2022/I/0/3/p/8741/700/800/103/w/27/8741700800_1_1_1.jpg?ts=1669806553762",
                    "img2": "https://static.zara.net/photos///2022/I/0/3/p/8741/700/800/2/w/27/8741700800_6_1_1.jpg?ts=1667396807494",
                    "img3": "https://static.zara.net/photos///2022/I/0/3/p/8741/700/800/2/w/27/8741700800_6_2_1.jpg?ts=1667396808643",
                    "img4": "https://static.zara.net/photos///2022/I/0/3/p/8741/700/800/2/w/27/8741700800_6_3_1.jpg?ts=1667396810103"
                }
            ]
        },
        {
            "name": "PUFFER COAT WITH RUBBERISED DETAIL",
            "price": 2490,
            "id": 14,
            "category": "kids",
            "rating": 3,
            "disc": "Rubberised puffer coat featuring a hood and long sleeves with elastic trims. Featuring a zip-up front fastening hidden by a snap-button placket. Front pockets.",
            "detail": "We work with monitoring programmes to ensure compliance with our social, environmental and health and safety standards for our garments. To assess compliance, we have developed a programme of audits and continuous improvement plans",
            "item": [
                {
                    "color": "black",
                    "img1": "https://static.zara.net/photos///2022/I/0/3/p/3121/705/800/2/w/27/3121705800_6_1_1.jpg?ts=1668683463588",
                    "img2": "https://static.zara.net/photos///2022/I/0/3/p/3121/705/800/2/w/27/3121705800_6_2_1.jpg?ts=1668683464366",
                    "img3": "https://static.zara.net/photos///2022/I/0/3/p/3121/705/800/2/w/27/3121705800_6_3_1.jpg?ts=1662538712655",
                    "img4": "https://static.zara.net/photos///2022/I/0/3/p/3121/705/800/2/w/27/3121705800_6_4_1.jpg?ts=1662538718596"
                },
                {
                    "color": "pink",
                    "img1": "https://static.zara.net/photos///2022/I/0/3/p/3121/705/653/2/w/27/3121705653_6_1_1.jpg?ts=1668167478321",
                    "img2": "https://static.zara.net/photos///2022/I/0/3/p/3121/705/653/2/w/27/3121705653_6_2_1.jpg?ts=1668167476386",
                    "img3": "https://static.zara.net/photos///2022/I/0/3/p/3121/705/653/2/w/27/3121705653_6_4_1.jpg?ts=1668167478525",
                    "img4": "https://static.zara.net/photos///2022/I/0/3/p/3121/705/653/2/w/750/3121705653_6_5_1.jpg?ts=1668167477526"
                },
                {
                    "color": "brown",
                    "img1": "https://static.zara.net/photos///2022/I/0/3/p/3121/705/743/2/w/27/3121705743_6_1_1.jpg?ts=1668683464833",
                    "img2": "https://static.zara.net/photos///2022/I/0/3/p/3121/705/743/2/w/27/3121705743_6_2_1.jpg?ts=1668683465020",
                    "img3": "https://static.zara.net/photos///2022/I/0/3/p/3121/705/743/2/w/27/3121705743_6_3_1.jpg?ts=1662538710784",
                    "img4": "https://static.zara.net/photos///2022/I/0/3/p/3121/705/743/2/w/27/3121705743_6_4_1.jpg?ts=1662538717602"
                }
            ]
        },
        {
            "name": "KIDS/ CONTRAST CROSSBODY BAG",
            "price": 1690,
            "id": 15,
            "category": "kids",
            "rating": 4,
            "disc": "Crossbody bag in a combination of materials and colours with zip closure. Front flap pocket and clip closure. Two top handles and one adjustable shoulder strap.",
            "detail": "We work with our suppliers, workers, unions and international organizations to develop a supply chain in which human rights are respected and promoted, contributing to the United Nations Sustainable Development Goals. ",
            "item": [
                {
                    "color": "pink",
                    "img1": "https://static.zara.net/photos///2022/I/1/3/p/1116/030/202/2/w/27/1116030202_6_1_1.jpg?ts=1660118457633",
                    "img2": "https://static.zara.net/photos///2022/I/1/3/p/1116/030/202/2/w/27/1116030202_6_2_1.jpg?ts=1660118470508",
                    "img3": "https://static.zara.net/photos///2022/I/1/3/p/1116/030/202/2/w/27/1116030202_6_3_1.jpg?ts=1660118470149",
                    "img4": "https://static.zara.net/photos///2022/I/1/3/p/1116/030/202/2/w/27/1116030202_6_4_1.jpg?ts=1660118470927"
                }
            ]
        },
        {
            "name": "TWEED BLAZER",
            "price": 7990,
            "category": "women",
            "rating": 4.9,
            "id": 4,
            "detail": "Blazer with a lapel collar and long sleeves with buttoned cuffs. Featuring front flap pockets and double-breasted button fastening.",
            "disc": "Sophisticated tweed blazer, ideal for a polished look.",
            "item": [
                {
                    "color": "white",
                    "img1": "https://picsum.photos/200/300?random=13",
                    "img2": "https://picsum.photos/200/300?random=14",
                    "img3": "https://picsum.photos/200/300?random=15",
                    "img4": "https://picsum.photos/200/300?random=16"
                }
            ]
        },
        {
            "name": "DENIM OVERSIZED JACKET",
            "price": 5990,
            "category": "women",
            "rating": 4.7,
            "id": 3,
            "detail": "Oversized denim jacket with a spread collar and long sleeves. Featuring front button fastening and chest flap pockets.",
            "disc": "Trendy oversized denim jacket, perfect for a casual look.",
            "item": [
                {
                    "color": "light blue",
                    "img1": "https://picsum.photos/200/300?random=17",
                    "img2": "https://picsum.photos/200/300?random=18",
                    "img3": "https://picsum.photos/200/300?random=19",
                    "img4": "https://picsum.photos/200/300?random=20"
                },
                {
                    "color": "dark blue",
                    "img1": "https://picsum.photos/200/300?random=21",
                    "img2": "https://picsum.photos/200/300?random=22",
                    "img3": "https://picsum.photos/200/300?random=23",
                    "img4": "https://picsum.photos/200/300?random=24"
                }
            ]
        },
        {
            "name": "TWEED BLAZER",
            "price": 7990,
            "category": "women",
            "rating": 4.9,
            "id": 4,
            "detail": "Blazer with a lapel collar and long sleeves with buttoned cuffs. Featuring front flap pockets and double-breasted button fastening.",
            "disc": "Sophisticated tweed blazer, ideal for a polished look.",
            "item": [
                {
                    "color": "white",
                    "img1": "https://picsum.photos/200/300?random=25",
                    "img2": "https://picsum.photos/200/300?random=26",
                    "img3": "https://picsum.photos/200/300?random=27",
                    "img4": "https://picsum.photos/200/300?random=28"
                },
                {
                    "color": "black",
                    "img1": "https://picsum.photos/200/300?random=29",
                    "img2": "https://picsum.photos/200/300?random=30",
                    "img3": "https://picsum.photos/200/300?random=31",
                    "img4": "https://picsum.photos/200/300?random=32"
                }
            ]
        },
        {
            "name": "FLORAL PRINT DRESS",
            "price": 4990,
            "category": "women",
            "rating": 4.6,
            "id": 5,
            "detail": "Dress featuring a V-neckline and short sleeves. Elastic waist and ruffled hem. All-over floral print.",
            "disc": "Elegant floral print dress, perfect for summer outings.",
            "item": [
                {
                    "color": "multicolor",
                    "img1": "https://picsum.photos/200/300?random=33",
                    "img2": "https://picsum.photos/200/300?random=34",
                    "img3": "https://picsum.photos/200/300?random=35",
                    "img4": "https://picsum.photos/200/300?random=36"
                },
                {
                    "color": "red",
                    "img1": "https://picsum.photos/200/300?random=37",
                    "img2": "https://picsum.photos/200/300?random=38",
                    "img3": "https://picsum.photos/200/300?random=39",
                    "img4": "https://picsum.photos/200/300?random=40"
                }
            ]
        },
        {
            "name": "KIDS' DINOSAUR SWEATSHIRT",
            "price": 1990,
            "category": "kids",
            "rating": 4.5,
            "id": 6,
            "detail": "Long sleeve sweatshirt with a round neckline. Featuring a dinosaur print on the front.",
            "disc": "Fun and comfortable sweatshirt with a cute dinosaur print.",
            "item": [
                {
                    "color": "green",
                    "img1": "https://picsum.photos/200/300?random=41",
                    "img2": "https://picsum.photos/200/300?random=42",
                    "img3": "https://picsum.photos/200/300?random=43",
                    "img4": "https://picsum.photos/200/300?random=44"
                },
                {
                    "color": "blue",
                    "img1": "https://picsum.photos/200/300?random=45",
                    "img2": "https://picsum.photos/200/300?random=46",
                    "img3": "https://picsum.photos/200/300?random=47",
                    "img4": "https://picsum.photos/200/300?random=48"
                }
            ]
        },
        {
            "name": "KIDS' PUFFER JACKET",
            "price": 3990,
            "category": "kids",
            "rating": 4.8,
            "id": 7,
            "detail": "Puffer jacket with a hood and zip-up front. Featuring side pockets and elastic cuffs.",
            "disc": "Warm and cozy puffer jacket for kids, ideal for winter.",
            "item": [
                {
                    "color": "red",
                    "img1": "https://picsum.photos/200/300?random=49",
                    "img2": "https://picsum.photos/200/300?random=50",
                    "img3": "https://picsum.photos/200/300?random=51",
                    "img4": "https://picsum.photos/200/300?random=52"
                },
                {
                    "color": "blue",
                    "img1": "https://picsum.photos/200/300?random=53",
                    "img2": "https://picsum.photos/200/300?random=54",
                    "img3": "https://picsum.photos/200/300?random=55",
                    "img4": "https://picsum.photos/200/300?random=56"
                }
            ]
        },
        {
            "name": "KIDS' STRIPED T-SHIRT",
            "price": 990,
            "category": "kids",
            "rating": 4.7,
            "id": 8,
            "detail": "Short sleeve T-shirt with a round neckline. All-over striped pattern.",
            "disc": "Comfortable and stylish striped T-shirt for kids.",
            "item": [
                {
                    "color": "blue and white",
                    "img1": "https://picsum.photos/200/300?random=57",
                    "img2": "https://picsum.photos/200/300?random=58",
                    "img3": "https://picsum.photos/200/300?random=59",
                    "img4": "https://picsum.photos/200/300?random=60"
                },
                {
                    "color": "red and white",
                    "img1": "https://picsum.photos/200/300?random=61",
                    "img2": "https://picsum.photos/200/300?random=62",
                    "img3": "https://picsum.photos/200/300?random=63",
                    "img4": "https://picsum.photos/200/300?random=64"
                }
            ]
        }
    ]

    console.log(productData[0]);
    console.log(productData[0].item[0].img1);
    console.log(productData[0].price);



    productData.forEach(elem => {

        var div = document.createElement("div");
        div.setAttribute("class", "product");

        var img1 = document.createElement("img");
        img1.src = elem.item[0].img1;

        let stars = document.createElement('div');
        stars.classList.add('stars');

        let rating = document.createElement('h5')
        rating.innerText = '(' + elem.rating + '.00)'


        for (let i = 0; i < elem.rating; i++) {
            let starSymbol = document.createElement('i');
            starSymbol.setAttribute('class', 'fa-solid fa-star');
            stars.append(starSymbol);
        }

        stars.append(rating);

        var h2Price = document.createElement("h4");
        h2Price.innerHTML = elem.price + '/-Rs';
        console.log(h2Price.innerHTML);

        var h3Title = document.createElement("h5");
        h3Title.innerHTML = elem.name;
        console.log(h3Title.innerHTML);

        buyBtn = document.createElement("button");
        buyBtn.innerHTML = "Buy Now";
        buyBtn.classList.add("buy-btn");

        div.append(img1, stars, h3Title, h2Price);

        container.append(div);

        div.onclick = function () {
            openPage(elem)
        }

    });

    function openPage(elem) {
        console.log(elem);
        localStorage.setItem('product-item', JSON.stringify(elem))
        window.location.href = "details.html"
    }


}