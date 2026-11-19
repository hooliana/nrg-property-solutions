const toggle=document.getElementById("toggle"),links=document.getElementById("links");
toggle.addEventListener("click",()=>links.classList.toggle("open"));
links.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>links.classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
document.getElementById("estimateForm").addEventListener("submit",e=>{
 e.preventDefault();const f=e.currentTarget;if(!f.reportValidity())return;
 const d=new FormData(f);const msg=["Hi NRG Property Solutions! I'd like to request an estimate.","",`Name: ${d.get("name")}`,`Phone: ${d.get("phone")}`,`Town: ${d.get("town")}`,`Service: ${d.get("service")}`,`Details: ${d.get("details")||"Not provided"}`].join("\\n");
 document.getElementById("error").textContent="";
 window.location.href="sms:19736512414?&body="+encodeURIComponent(msg);
});