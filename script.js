let logoBtn = document.getElementById('logo-btn');
let hiddenBox = document.getElementById('hidden-box');



let w= window.innerWidth;
console.log(w)
if(w < 801){
  logoBtn.addEventListener('click', ()=>{
    
    hiddenBox.classList.toggle('hidden');
    hiddenBox.classList.toggle('unhide');
    logoBtn.style.position='absolute';
    logoBtn.style.zIndex=2;
    logoBtn.style.top = '-10px';
    
    

  })

}else{
  logoBtn.addEventListener('click', ()=>{
    hiddenBox.classList.toggle('hidden');
    hiddenBox.classList.toggle('unhide')
   
  
  })

}