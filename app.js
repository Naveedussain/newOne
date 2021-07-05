function onSignup() {
    // get input values
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var message = document.getElementById("message");
    var age = document.getElementById("age");
    var phone = document.getElementById("phone");

    var user = {
        email: email.value,
        password: password.value,
        name: name.value,
        age:age.value,
        phone:phone.value,
    };
    var users = [];
    users.push(JSON.parse(localStorage.getItem('users')));
    console.log(users)
    var users = JSON.parse(localStorage.getItem("users")) || [];
    // get indx
    var userIdx = users.findIndex(function (val) {
        return val.email.toLowerCase() === user.email.toLowerCase()
    });

    if (userIdx === -1) {
        // this user is not exist
        users.push(user);
        // store in storage
        localStorage.setItem("users", JSON.stringify(users));
        // redirect to login page
        location.href = "login.html";
    } else {
        message.innerHTML = user.email + " use in another account";
    }
    // clear state
    setTimeout(() => {
        message.innerHTML = "";
    }, 2000);


    // console.log(user);


}





function onLogin() {
    // get input values
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var message = document.getElementById("message");

    var user = {
        email: email.value,
        password: password.value,
    }

    var users = JSON.parse(localStorage.getItem("users")) || [];
    // get indx
    var currentUser = users.find(function (val) {
        return val.email.toLowerCase() === user.email.toLowerCase() && val.password === user.password;
    });

    if (currentUser) {
        localStorage.setItem("user", JSON.stringify(currentUser));
        // user login
        location.href = "index.html";
    } else {
        message.innerHTML = "Invalid credentials";
    }
    // clear state
    setTimeout(() => {
        message.innerHTML = "";
    }, 2000);
}



function onLogout() {
    var message = document.getElementById("message");
    localStorage.removeItem("user");
    message.innerHTML = "Good Bye.!";
    // clear state
    setTimeout(() => {
        location.href = "login.html";
    }, 2000);
}




var info1= document.getElementById("info1");
var info2= document.getElementById("info2");
var info3= document.getElementById("info3");
var info4= document.getElementById("info4");
var info5= document.getElementById("info5");
var activeUser = JSON.parse(localStorage.getItem("user"));
function getCurrentUser() {
    // var detial = document.getElementById("detial");
    // var user = JSON.parse(localStorage.getItem("user"));
    // detial.innerHTML = "Loggedin as " + user.email.split("@")[0];


    info1.innerHTML = `Name: `+ activeUser.name;
    info2.innerHTML=`Email: `  + activeUser.email; 
    info3.innerHTML=`Phone: ` +activeUser.phone;
    info4.innerHTML=`Age: ` +activeUser.age;
    info5.innerHTML=`Password:  `   +activeUser.password;
    






}

function onFillup(){
    document.getElementById("nameHeading").innerText=user.name;
}



// Index.html

var inputHead =document.getElementById("inputHead");
var input1 =document.createElement("input");
input1.setAttribute("type","text")
input1.setAttribute("placeholder","title")
input1.setAttribute("id","inpTitle")
// console.log(input1);
var input2 =document.createElement("input");
input2.setAttribute("type","text")
input2.setAttribute("placeholder","Description")
input2.setAttribute("id","inpDescript")
// console.log(input2);
// submit button
var submit = document.createElement("button")
var submitText = document.createTextNode("Submit");
submit.setAttribute("onClick","submitButton()")
submit.appendChild(submitText);

function post() {
    inputHead.appendChild(input1)
    inputHead.appendChild(input2)
    inputHead.appendChild(submit)
    document.getElementById("post").disabled=true;
}

// Submit function
function submitButton() {
    var ul = document.getElementById("ul")
    var li = document.createElement("li")
    var title = document.getElementById("inpTitle");    
    var Descript = document.getElementById("inpDescript");    
    // title.innerText = 
    var card = `<div class="card" style="width: 18rem;">
    <img class="img-thumbnail" src="https://source.unsplash.com/collection/190727/1600x900
    " alt="">
    <div class="card-body">
      <h5 class="card-title">${title.value}</h5>
      <p class="card-text">
      ${Descript.value}
      </p>

    </div>
  </div>`
//   var card1= document.getElementById("cardPost");
  li.innerHTML = card;
  ul.appendChild(li)
}

