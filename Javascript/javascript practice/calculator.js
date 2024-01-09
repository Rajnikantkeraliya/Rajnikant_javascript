let inputbox = document.getElementById('inputid');
let buttons = document.querySelectorAll('button')
let string = ''

buttons.forEach(element => {
    element.addEventListener('click', (on) => {
        if (on.target.innertext == '=') {
            string = string(eval(string))
            inputbox.value = string
        } else {
            string += on.target.innertext
            inputbox.value = string
        }
    })
})




