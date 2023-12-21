const pasword=document.getElementById('pasword');
const messege=document.getElementById('messege');
const span=document.getElementById('span');


pasword.addEventListener('input',()=>{
    if(pasword.value.length>0){
        messege.style.display='block';
        pasword.style.borderBlockColor='black';

    }else{
        messege.style.display='none';
        pasword.style.borderBlockColor='black';
        
    }
     if(pasword.value.length<4){
        span.innerHTML='weak';
        pasword.style.borderBlockColor='gray';
    }
  else  if(pasword.value.length<8){
        span.innerHTML='medium';
        pasword.style.borderBlockColor='yellow';
    }
  else  if(pasword.value.length>8){
        span.innerHTML='strong';
        pasword.style.borderBlockColor='green';
    }
 

})
