var product = [
    {
        id : 0,
        image : 'images/m9.jpg',
        title : 'm9 Bluetooth',
        price : 1200
    },
    {
        id : 1,
        image : 'images/m10.jpg',
        title : 'm10 Bluetooth',
        price : 1350,
    },
    {
        id : 2,
        image : 'images/m19.jpeg',
        title : 'm19 Bluetooth',
        price : 230,
    },
    {
        id : 3,
        image : 'images/m28.webp',
        title : 'm28 Bluetooth',
        price : 450,
    },
    {
        id : 4,
        image : 'images/m30.webp',
        title : 'm30 Bluetooth',
        price : 120
    },
    {
        id : 5,
        image : 'images/m90.jpg',
        title : 'm90 Bluetooth',
        price : 120
    },
];

const catagories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('root').innerHTML = catagories.map((item)=>
    {
        var {image, title, price} = item;
        return(
            `<div class='box'>
                <div class='img-box'>
                    <img class='images' src=${image}></img>
                </div>
            <div class='bottom'>
            <p>${title}</p>
            <h2>Rs ${price}.00</h2>`+
            "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
            </div>`         
        )
    }).join('')

    var cart =[];

    function addtocart(a){
        cart.push({...catagories[a]});
        displaycart();
    }
    
    function delElement(a){
        cart.splice(a, 1);
        displaycart();
    }

    function displaycart(){
        var j = 0, total = 0;
        document.getElementById("count").innerHTML=cart.length;

        if(cart.length==0){
            document.getElementById('cartItem').innerHTML = "Your cart is empty";
            document.getElementById('total').innerHTML = "Rs. "+0+".00";
        }
        else
        {
            document.getElementById('cartItem').innerHTML = cart.map((items)=>
            {
                var {image, title, price} = items;
                total=total+price;
                document.getElementById("total").innerHTML = "Rs. "+total+".00";
                return(
                    `<div class='cart-item'>
                    <div class='row-img'>
                    <img class='rowimg' src=${image}>
                    </div>
                    <p style='font-size:12px;'>${title}</p>
                    <h2 style='font-size: 15px;'>Rs.  ${price}.00</h2>`+
                    "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>" 
                    
                )
            }).join('');
        }
    }