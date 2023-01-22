let userData = JSON.parse(localStorage.getItem("userRegisterData")) || [];
let popup = document.getElementById("popup");


let hy=JSON.parse(localStorage.getItem("LOGIN"))||[]





document.getElementById("SubmitBtn").addEventListener("click", () => {
    popup.innerHTML=null;
    let userDataEmailOrId = document.getElementById("emailId").value;
    let usetpass = document.getElementById("password").value;


    for (let i = 0; i < userData.length; i++) {
        if (userData[i].emailId == userDataEmailOrId && userData[i].password == usetpass) {
            //alert("ok");
            let idMess = document.createElement("h4");
            idMess.innerText = "Successfully Loged In"
            let closeBtn = document.createElement("button");
            closeBtn.innerText = "OK";
            let popupImg = document.createElement("img");
            popupImg.setAttribute("src", "/day-2/404-tick.png");

            closeBtn.addEventListener("click", () => {

              let obj={
                logincheck:true
            
              }
              hy.push(obj)
              localStorage.setItem("LOGIN",JSON.stringify(hy))

                window.location.href="/homepage.html"

               

                popup.classList.remove("open-popup")

                
            })
            popup.append(popupImg, idMess, closeBtn);
            popup.classList.add("open-popup");
            localStorage.setItem("loged-user",JSON.stringify(userData[i]));
            return;
        }
        else {
            let idMess = document.createElement("h4");
            idMess.innerText = "Enter Valid Id or PassWord ";
            let closeBtn = document.createElement("button");
            closeBtn.innerText = "OK";
            let popupImg = document.createElement("img");
            popupImg.setAttribute("src", "https://thumbs.dreamstime.com/b/x-red-mark-cross-sign-graphic-symbol-crossed-brush-strokes-red-mark-cross-sign-graphic-symbol-154904173.jpg");

            closeBtn.addEventListener("click", () => {
                popup.classList.remove("open-popup")
            })
            popup.append(popupImg, idMess, closeBtn);
            popup.classList.add("open-popup");
            popup.style.backgroundColor="red";
            return;
        }
       
    }

})