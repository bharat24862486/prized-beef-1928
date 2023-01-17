const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#id_password');

  togglePassword.addEventListener('click', function (e) {
    // toggle the type attribute
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    // toggle the eye slash icon
    this.classList.toggle('fa-eye-slash');
});

document.getElementById("logInformSignUp").addEventListener("click", () => {
    showHide();
})
function showHide() {
    let x = document.getElementById("directLogIn");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

let popup = document.getElementById("popup");
let userData = JSON.parse(localStorage.getItem("userRegisterData")) || [];
document.querySelector("#SubmitBtn").addEventListener("click",(e)=>{
popup.innerHTML=null;
e.preventDefault();
console.log("ratna");
let firstName = document.getElementById("firstName").value;
let lastName = document.getElementById("lastName").value;
let zipCode = document.getElementById("zip-code").value;
let phoneNumber =  document.getElementById("phoneNumber").value;
let emailId = document.getElementById("emailId").value;
let password =  document.getElementById("password").value;
let obj = {
    firstName : firstName,
    lastName : lastName,
    zipCode : zipCode,
    phoneNumber : phoneNumber,
    emailId : emailId,
    password : password
}
console.log(obj);
if(obj.firstName=="" || obj.lastName==""||obj.zipCode=="" || obj.password==""||obj.phoneNumber==""){
    alert("Please Fill All The Required Data");
    return ;
}
for(let i =0;i<userData.length;i++){
    if(userData[i].phoneNumber===obj.phoneNumber){
        alert("Phone Number Is Already Register");
        return;
    }
    if(userData[i].emailId===obj.emailId){
        alert("Email Id Is Already Register");
        return; 
    }
}
let id = generateID();
obj.id = id;
userData.push(obj);
localStorage.setItem("userRegisterData",JSON.stringify(userData));
let idMess = document.createElement("h4");
idMess.innerText="Successfully Created A New Account"
let idMessage = document.createElement("h4");
idMessage.innerText=`Your Id is :- ${id}`;
let closeBtn = document.createElement("button");
closeBtn.innerText="OK";
let popupImg = document.createElement("img");
popupImg.setAttribute("src","404-tick.png");

closeBtn.addEventListener("click",()=>{
    popup.classList.remove("open-popup")
})
popup.append(popupImg,idMess,idMessage,closeBtn);
popup.classList.add("open-popup")
})
function generateID() {
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i <= 10; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}