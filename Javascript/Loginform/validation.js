let data = document.querySelectorAll(".input")
console.log(data);

data.forEach(input => {
    input.onblur = () => {
        let errormsg = input.parentNode.querySelector(".alertmsg");
        if (input.value === "" && input.id !== "Lname" && input.id !== "age") {
            if (!errormsg) {
                let message = document.createElement("div")
                message.className = "alertmsg";
                message.style.color = "red"
                message.textContent = "field Cannot be Blank"
                input.parentNode.appendChild(message);
            }
        }
        else {
            if (errormsg) {
                errormsg.remove();
            }
        }
    };
});
    document.getElementById("Email").addEventListener("keyup", function(){
    let RegEx = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9_\.\-])+\.)+([a-zA-Z0-9]{2,4})+$/
    let emailid = document.getElementById("Email");
    let alertmsg = document.querySelector(".alert");

    if(!RegEx.test(emailid.value)){
    if(!alertmsg){
        let msg=document.createElement("div");
        msg.className="alert";
        msg.textContent ="Email Not Valid";
        emailid.parentNode.appendChild(msg);
    }}
    else{
        if(alertmsg){
            alertmsg.parentNode.removeChild(alertmsg);
        }
    }
    })