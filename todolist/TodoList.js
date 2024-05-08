const adder = document.querySelector("#adder")
let InputValue = document.querySelector("#InputValue")
let Content = document.querySelector("#Content")
let Todo = document.querySelector("#Todo")
function add(){
    console.log(InputValue.value)
    if(InputValue.value !=false)
    {
        let NewContent = document.createElement("li")
        let del = document.createElement('button')
        NewContent.innerHTML = InputValue.value
        Content.appendChild(NewContent)
        NewContent.appendChild(del)
        del.innerText = "삭제"
        del.style.fontSize = "20px"
        del.style.color = "red"
        del.style.fontWeight = "bold"
        del.style.background = "linear-gradient(to right, #ff967e,#fff)"
        del.style.border = "0px"
        del.style.float = "right"
        del.style.cursor = "pointer"
        del.addEventListener("click",(yay)=>{
            let removethis = yay.target.parentElement
            removethis.remove()
        })
        InputValue.value = ""
    }
}
InputValue.addEventListener('keydown',(e) =>{
    if(e.code == 'Enter')
    {
        console.log("실행됨!!!")
        add()
    }
})