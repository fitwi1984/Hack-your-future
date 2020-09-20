//https://github.com/fitwi1984/Hack-your-future.git

function listCustomers(){
let fname = document.getElementById('first').value
let lname = document.getElementById('last').value
let emaile = document.getElementById('email').value
let password = document.getElementById('password').value

let obj ={fname:fname, lname:lname, email:emaile, password:password}



    let list = localStorage.getItem('list1')


if(!list){
    let arr =[]
    arr.push(obj)
    localStorage.setItem('list1', arr)
}else{
    let arr = localStorage.getItem('list1')

    let emailExist = arr.find(element=> element.email===obj.email)

        if(emailExist){
      alert("Email already exist")
      }else{
     arr.push(obj)
     localStorage.setItem('list1', arr)

    alert("Successfully registered")

        }

console.log(arr)

}












}