async function deleteFormHandler(t){t.preventDefault();
  const e=window.location.toString().split("/")[window.location.toString().split("/").length-1],o=await
   
  fetch(`/api/posts/${e}`,
   {method:"DELETE",
   body:JSON.stringify({post_id:e}),
   headers:{"Content-Type":"application/json"}});
   o.ok?document.location.replace("/dashboard/"):alert(o.statusText)}
   document.querySelector(".delete-post-btn").addEventListener("click",deleteFormHandler);