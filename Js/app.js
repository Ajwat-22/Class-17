function show_result(){
   let Ban =document.querySelector('#Ban').value;
   let Eng =document.querySelector('#Eng').value;
   let Mth =document.querySelector('#Mth').value;
   let Rel =document.querySelector('#Rel').value;
   let I =document.querySelector('#I').value;


   let to = parseFloat(Ban) + parseFloat(Eng) + parseFloat(Mth) + parseFloat(Rel) + parseFloat(I);
   let per = (to * 100)/ 500;
   
   if(per >= 80 && per <= 100){document.querySelector('.gra').innerHTML = 'A+'}
   else if(per >= 79 && per <= 70){
      document.querySelector('.gra').innerHTML = 'A'
   }
   else if(per >= 69 && per <= 60){
      document.querySelector('.gra').innerHTML = 'A-'
   }
   else if(per >= 59 && per <= 50){
      document.querySelector('.gra').innerHTML = 'B'
   }
   else if(per >= 49 && per <= 40){
      document.querySelector('.gra').innerHTML = 'C'
   }
   else if(per >= 39 && per <= 33){
      document.querySelector('.gra').innerHTML = 'D'
   }
   else if(per >= 0 && per <= 32){
      document.querySelector('.gra').innerHTML = 'F'
   }


   document.querySelector('.to').innerHTML = to;
   document.querySelector('.per').innerHTML = per;

   if(per > 32){
      document.querySelector(".result h2").innerHTML = "You are Passed"
   }
   else{
      document.querySelector(".result h2").innerHTML = "Sorry, You are Failed."
   }
 }
