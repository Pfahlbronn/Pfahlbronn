const theme=document.querySelector('#theme');
theme.addEventListener('click',()=>{document.body.classList.toggle('dark');theme.textContent=document.body.classList.contains('dark')?'☀':'☾';});
document.querySelector('#year').textContent=new Date().getFullYear();
const search=document.querySelector('#search');
search.addEventListener('input',()=>{const q=search.value.toLowerCase();document.querySelectorAll('.card').forEach(c=>{c.style.display=c.dataset.name.toLowerCase().includes(q)?'':'none';});});
