const firebaseConfig = {
    apiKey: "AIzaSyB0yE0igQycnuSFnvESkywr0FvuI0dUcZI",
    authDomain: "web-todo-app-8b2d3.firebaseapp.com",
    databaseURL: "https://web-todo-app-8b2d3-default-rtdb.firebaseio.com",
    projectId: "web-todo-app-8b2d3",
    storageBucket: "web-todo-app-8b2d3.appspot.com",
    messagingSenderId: "151712123985",
    appId: "1:151712123985:web:1b0c9dd15ba53908353c70"
  };

// Initialize Firebase
const fBase = firebase.initializeApp(firebaseConfig);

// var inputField = document.getElementById('inputField')
// console.log(inputField)

// console.log(fBase.database);//Check Firebase/database connected

// // console.log(key);
firebase
.database()
.ref("todos")
.on("child_added", (data) => {
    // console.log(data.val());
    var liElement = document.createElement("li");
    var liText = document.createTextNode(data.val().value);
    // console.log(liElement);
    // console.log(liText);
  
    liElement.appendChild(liText);
    console.log(liElement);
  
    //--Delete Button---

    var delBtn = document.createElement("button");
    var delBtnText = document.createTextNode("Delete");
  
    delBtn.appendChild(delBtnText);

    delBtn.setAttribute('id', data.val().key)
    delBtn.setAttribute("onclick", "deletItem(this)")
  
    var list = document.getElementById("list");
    
    liElement.appendChild(delBtn);
  
    list.appendChild(liElement);
  
    //--Edit Button--
  
    var editBtn = document.createElement("button");
    var editBtnText = document.createTextNode("Edit");
  
    editBtn.appendChild(editBtnText);
    editBtn.setAttribute("onclick", "editItmes(this)")

    editBtn.setAttribute("id", data.val().key)
  
    liElement.appendChild(editBtn);
  
});

function addTodo() {
    var input = document.getElementById("inputField");
    
    // console.log(input.value)
    
    var key = firebase.database().ref("todos").push().key;

  let obj = {
    value:input.value,
    key:key,
  };
  // console.log(input.value)

  firebase.database().ref("todos").child(key).set(obj);

  input.value = "";

}

//--Delet All---
function deleteAll() {
  var list = document.getElementById("list");

  firebase.database().ref("todos").remove()
  list.innerHTML = "";
}

// --Delete Function--

function deletItem(d){
    console.log(d.id);
    firebase.database().ref("todos").child(d.id).remove()
    d.parentNode.remove();
}

//--Edit Function--

function editItmes(e){
    // console.log(e.parentNode.firstChild.nodeValue);
    // var val = e.parentNode.firstChild.nodeValue;

    var userInput = prompt("Enter Updated Value");

    var editTodo = {
        value: userInput,
        key: e.id,
    }

    firebase.database().ref("todos").child(e.id).set(editTodo)

    e.parentNode.firstChild.nodeValue = userInput;

    // console.log(userInput);
}
