
document.getElementById('openBtn').onclick=()=>{
document.getElementById('intro').style.display='none';
};
const target=new Date('2026-06-20T22:00:00').getTime();
setInterval(()=>{
const now=Date.now();
const d=target-now;
const days=Math.floor(d/86400000);
const h=Math.floor((d%86400000)/3600000);
const m=Math.floor((d%3600000)/60000);
const s=Math.floor((d%60000)/1000);
document.getElementById('countdown').innerHTML=days+' días '+h+' hs '+m+' min '+s+' seg';
},1000);
