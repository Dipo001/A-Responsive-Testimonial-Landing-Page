const input = document.getElementById("input")
const list = document.getElementById("list")

function myFunction(){
    var element =document.body;
    element.dataset.bsTheme = 
    element.dataset.bsTheme == "light" ? "dark" : "light";
}
function addClick(){
    if (input.value == '') {
        alert('Invalid input')
    } else {
        let li = document.createElement('li');
        li.innerHTML = input.value;
        li.style.backgroundColor = "grey"
        li.style.padding = "15px"
        li.style.marginBottom = "10px"
        list.prepend(li);
}
input.value = ''
}
   