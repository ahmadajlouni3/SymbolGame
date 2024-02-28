const arr = document.querySelectorAll(".BTN");

arr.forEach(ele => {
    ele.addEventListener("click" , ()=>{
        switch(ele.innerText){
            case "?":
                ele.innerText = "+";
                break;
            case "+":
                ele.innerText = "-";
                break;
            case "-":
                ele.innerText = "*";
                break;
            case "*":
                ele.innerText = "/";
                break;
            default:
                ele.innerText = "?";
        }
    })
})

function check(){
    if(arr[0].innerText === "*" && arr[1].innerText === "+" && arr[2].innerText === "*"){
        if(document.getElementsByClassName("check")[0].innerText === "Play again"){
            document.getElementsByClassName("check")[0].innerText = "check";
            document.getElementById("bo").style.backgroundColor = "black";
            document.getElementsByClassName("gameMsg")[0].innerText = "";
            arr.forEach(ele => {
                ele.removeAttribute("disabled")
                ele.innerText = "?";
            })
        }else{
            document.getElementById("bo").style.backgroundColor = "mediumseagreen";
            document.getElementsByClassName("check")[0].innerText = "Play again";
            document.getElementsByClassName("gameMsg")[0].innerText = "CORRECT";
            setTimeout(() => {
                document.getElementsByClassName("myPage")[0].style.display = "block";
                document.getElementById("bo").style.backgroundColor = "black";
            }, 2000)
            arr.forEach(ele => {
            ele.setAttribute("disabled", "")
        })
        }
        
    }else{
        document.getElementById("bo").style.backgroundColor = "tomato";
        if(document.getElementsByClassName("check")[0].innerText === "try again"){
            document.getElementsByClassName("check")[0].innerText = "check";
            document.getElementById("bo").style.backgroundColor = "black";
            document.getElementsByClassName("gameMsg")[0].innerText = "";
            arr.forEach(ele => {
                ele.removeAttribute("disabled")
                ele.innerText = "?";
            })
        }else{
            document.getElementsByClassName("check")[0].innerText = "try again";
            document.getElementsByClassName("gameMsg")[0].innerText = "WRONG";
            arr.forEach(ele => {
                ele.setAttribute("disabled", "")
            })
        }
    }
}

document.getElementById("check").addEventListener("click" , check);