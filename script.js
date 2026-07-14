const eventDate = new Date('2026-10-04T09:30:00-03:00');
const countdown = document.getElementById('countdown');
function updateCountdown(){
  const diff=Math.max(0,eventDate-new Date());
  const parts=[['días',Math.floor(diff/86400000)],['horas',Math.floor(diff/3600000)%24],['min',Math.floor(diff/60000)%60],['seg',Math.floor(diff/1000)%60]];
  countdown.innerHTML=parts.map(([l,v])=>`<div><b>${String(v).padStart(2,'0')}</b><small>${l}</small></div>`).join('');
}
updateCountdown(); setInterval(updateCountdown,1000);
const navToggle=document.getElementById('navToggle'),navMenu=document.getElementById('navMenu');
navToggle.addEventListener('click',()=>{const open=navMenu.classList.toggle('open');navToggle.setAttribute('aria-expanded',open)});
navMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navMenu.classList.remove('open')));
const observer=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
window.addEventListener('scroll',()=>{const h=document.documentElement;document.getElementById('scrollProgress').style.width=((h.scrollTop/(h.scrollHeight-h.clientHeight))*100)+'%'});
document.querySelectorAll('[data-route]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-route]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');document.getElementById('routeLabel').textContent='CIRCUITO '+btn.dataset.route}));
if('serviceWorker' in navigator) window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));
