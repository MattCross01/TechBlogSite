async function commentFormHandler(t){t.preventDefault();
    const e=document.querySelector('input[name="comment-body"]').value.trim(),
    
    o=window.location.toString().split("/")[window.location.toString().split("/")
    .length-1];if(e)
    
    {const t=await fetch("/api/comments",
    
    {method:"POST",body:JSON.stringify({post_id:o,comment_text:e}),
    headers:{"Content-Type":"application/json"}});
    
    t.ok?document.location.reload():(alert(t.statusText),
    document.querySelector("#comment-form").style.display="block")}}
    document.querySelector(".comment-form").addEventListener("submit",commentFormHandler);