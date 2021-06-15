async function signupFormHandler(e){e.preventDefault();
    const t=document.querySelector("#username-signup").value.trim(),
    
    n=document.querySelector("#password-signup").value.trim();
    if(t&&n){const e=await fetch("/api/users",
    {method:"POST",
    body:JSON.stringify({username:t,password:n}),
    headers:{"Content-Type":"application/json"}});
    
    e.ok?(console.log("success"),
    document.location.replace("/dashboard")):alert(e.statusText)}}
    document.querySelector("#signup-form").addEventListener("submit",signupFormHandler);