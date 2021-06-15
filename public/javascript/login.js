async function loginFormHandler(e){e.preventDefault();
  const o=document.querySelector("#username-login").value.trim(),
  
  t=document.querySelector("#password-login").value.trim();
  if(o&&t){const e=await fetch("/api/users/login",
  {method:"post",body:JSON.stringify({username:o,password:t}),
  headers:{"Content-Type":"application/json"}});
  e.ok?document.location.replace("/dashboard"):alert(e.statusText)}}
  document.querySelector("#login-form").addEventListener("submit",loginFormHandler);