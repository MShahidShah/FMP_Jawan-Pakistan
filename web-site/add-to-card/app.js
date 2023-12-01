var product = [
    {
        id : 0,
        image : 'lenovo/He05.jpeg',
        title : 'Power Bank',
        price : 120
    },
    {
        id : 1,
        image : 'image/m10.jpg',
        title : 'm10',
        price : 60,
    },
    {
        id : 2,
        image : 'image/ee-3.png',
        title : 'watch',
        price : 230,
    },
    {
        id : 3,
        image : 'image/airpods.jpg',
        title : 'Airpod Pro',
        price : 450,
    },
    {
        id : 4,
        image : 'image/gg-1.jpg',
        title : 'Power Bank',
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