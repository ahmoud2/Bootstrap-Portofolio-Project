// document.getElementById("submit").addEventListener('click', function(e){
//     e.preventDefault();
//     let xhr = new XMLHttpRequest();
//     xhr.open("POST","http://mvc.com/users/register",true);
//     xhr.setRequestHeader("Content-Type","application/json");
//     xhr.onload = function(){
//         if(this.status == 200){
//             document.getElementById("response").innerHTML = this.response;
//             console.log(this.response);
//         }
//     }
//     let firstName   = document.getElementById("firstName").value;
//     let lastName    = document.getElementById("lastName").value;
//     let gender      = document.getElementById("gender").value;
//     let email       = document.getElementById("email").value;
//     let password    = document.getElementById("password").value;

//     let data = {
//         firstName   :firstName,
//         lastName    :lastName,
//         gender      :gender,
//         email       :email,
//         password    :password
//     }
//     data = JSON.stringify(data);
    
//     xhr.send(data);
    
// });

