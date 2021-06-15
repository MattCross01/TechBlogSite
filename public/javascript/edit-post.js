async function editFormHandler(t){t.preventDefault();
  const e=document.querySelector('input[name="post-title"]').value.trim(),
  
  o=document.querySelector('input[name="content"]').value.trim();
  console.log(e),console.log(o);
  
  const n=window.location.toString().split("/")[window.location.toString().split("/").length-1],
  i=await fetch(`/api/posts/${n}`,
  {method:"PUT",body:JSON.stringify({post_id:n,title:e,content:o}),
  headers:{"Content-Type":"application/json"}});
  i.ok?document.location.replace("/dashboard/"):alert(i.statusText)}document.querySelector(".edit-post-form").addEventListener("submit",editFormHandler);