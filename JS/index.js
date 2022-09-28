function saveData() { 
   const  user = document.getElementById('usuario').value;
   const password = document.getElementById('password').value;


let usersrecords = Array();
usersrecords = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(usersrecords.some((a)=>{return a.user===user && a.password===password}))
{
  alert("Usted ya está logeado");
}
else if(user===password) {
alert("Por favor ingrese un usuario y una contraseña valida")
}
else
{
  usersrecords.push({
  "user":user,
  "password":password,
})
localStorage.setItem("users",JSON.stringify(usersrecords));
}
}