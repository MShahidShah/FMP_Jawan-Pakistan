var product = [
    {
        id : 0,
        image : 'He05.jpeg',
        title : 'Lenovo HE-05',
        price : 1200
    },
    {
        id : 1,
        image : 'lenovo/Qe03.jpeg',
        title : 'Lenovo Qe03',
        price : 1350,
    },
    {
        id : 2,
        image : 'lenovo/xe05.jpeg',
        title : 'watch',
        price : 230,
    },
    {
        id : 3,
        image : 'lenovo/XT81.jpeg',
        title : 'Airpod Pro',
        price : 450,
    },
    {
        id : 4,
        image : 'lenovo/XT82.jpeg',
        title : 'Power Bank',
        price : 120
    },
    {
        id : 5,
        image : 'lenovo/XT90.jpeg',
        title : 'Power Bank',
        price : 120
    },
    {
        id : 6,
        image : 'lenovo/xt92.jpeg',
        title : 'Power Bank',
        price : 120
    },
    {
        id : 7,
        image : 'lenovo/LP40.jpeg',
        title : 'Power Bank',
        price : 120
    },
    {
        id : 8,
        image : 'lenovo/LP75.jpeg',
        title : 'Power Bank',
        price : 120
    },
    {
        id : 9,
        image : 'lenovo/LP1-pro.jpeg',
        title : 'Power Bank',
        price : 120
    },
    {
        id : 10,
        image : 'lenovo/LP3-Pro.jpeg',
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