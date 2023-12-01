//Welcome note
var user = localStorage.getItem('user');

if(!user){
    alert('Wellcome to Fareed Electronics');
}
localStorage.setItem("user", true);
//Delete
localStorage.removeItem('user', true);

var product = [
    {
        id : 0,
        image : 'He05.jpeg',
        title : 'Lenovo HE-05',
        price : 1200
    },
    {
        id : 1,
        image : 'Qe03.jpeg',
        title : 'Lenovo Qe03',
        price : 1350,
    },
    {
        id : 2,
        image : 'xe05.jpeg',
        title : 'Lenovo XE05',
        price : 230,
    },
    {
        id : 3,
        image : 'XT81.jpeg',
        title : 'Lenovo XT81',
        price : 450,
    },
    {
        id : 4,
        image : 'XT82.jpeg',
        title : 'Lenovo XT82',
        price : 120
    },
    {
        id : 5,
        image : 'XT90.jpeg',
        title : 'Lenovo XT90',
        price : 120
    },
    {
        id : 6,
        image : 'xt92.jpeg',
        title : 'Lenovo XT92',
        price : 120
    },
    {
        id : 7,
        image : 'LP40.jpeg',
        title : 'Lenovo LP40',
        price : 120
    },
    {
        id : 8,
        image : 'LP75.jpeg',
        title : 'Lenovo LP75',
        price : 120
    },
    {
        id : 9,
        image : 'LP1-pro.jpeg',
        title : 'Lenovo LP1-Pro',
        price : 120
    },
    {
        id : 10,
        image : 'LP3-Pro.jpeg',
        title : 'Lenovo LP3-Pro',
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