
let answer = 	document.getElementById('currentTime');

let input = 	document.getElementById('bill');
let input2 = 	document.getElementById('billp');


let btn = document.getElementById('submit');

btn.addEventListener("click",()=>{
  
   let value = input.value;
   let value2 = (input2.value);
   let z = value - (value2 * 100)
   let w = ((value2 * 100) * 5.16) + (z * 11.09) + 128 + (value * 1.17); 
   if (value >= 0 && value <= 100) {
     answer.textContent = value * 4.71
   }
   if (value >= 101 && value <= 300) {
    
    let billans =  ((value2 * 100) * 5.16) + (z * 11.09) + 128 + (value * 1.17) + (w * 0.16);
    answer.textContent = billans
   }
});