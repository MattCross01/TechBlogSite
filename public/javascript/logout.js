async function logout(){
  const t=await fetch("/api/users/logout",
  {method:"post",
  headers:{"Content-Type":"application/json"}});
  
  t.ok?document.location.replace("/"):alert(t.statusText)}
  document.querySelector("#logout").addEventListener("click",logout);