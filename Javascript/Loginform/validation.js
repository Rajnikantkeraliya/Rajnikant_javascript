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