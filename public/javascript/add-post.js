async function newFormHandler(e){e.preventDefault();
  
  const t=document.querySelector('input[name="post-title"]').value,
  n=document.querySelector('input[name="content"]')
  .value,o=await fetch("/api/posts",
  
  {method:"POST",body:JSON.stringify({title:t,content:n}),
  headers:{"Content-Type":"application/json"}});
  
  o.ok?document.location.replace("/dashboard"):alert(o.statusText)}
  document.querySelector("#new-post-form").addEventListener("submit",newFormHandler);