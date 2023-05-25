//your JS code here. If required.
let p_tag= document.createElement("p");
p_tag.id="timer"
document.body.append(p_tag)
setInterval(()=>{
	let d=new Date();
	let day=d.getDay();
	p_tag.innerText= day},86400)
