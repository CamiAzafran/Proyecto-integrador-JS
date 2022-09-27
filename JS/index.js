// const button = document.getElementById('button-save');

// const users = document.getElementById('usuario').value;
// const b = document.getElementById('password').value;


//  button.addEventListener('click', () =>{
//     Event.preventDefault
//  localStorage.setItem('saveduser', JSON.stringify(users))
// (JSON.parse(localStorage.getItem('saveduser')))
//  })

function saveData() {
    let user , password , email 
     user = document.getElementById('usuario').value;
     password = document.getElementById('password').value;
     email = document.getElementById('email').value;


let usersrecords = Array();
usersrecords = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(usersrecords.some((a)=>{return a.email==email}))
{
  alert("duplicate data");
}
else
{
  usersrecords.push({
  "user":user,
  "password":password,
  "email": email
})
localStorage.setItem("users",JSON.stringify(usersrecords));
}
}
