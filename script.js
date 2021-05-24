"use strict "
//sobitia na mob 
//touchstart
//touchmove
//touchend 
//touchenter 
//touchleave
//touchcancel
 window.addEventListener('DOMContent',()=>{
const box= document.querySelector('.box');

box.addEventListener('touchstart', (e)=>{
e.preventDefault();
console.log('start');
console.log(e.touches);
});
// //sobitia 
box.addEventListener('touchmove', (e) => {
    e.preventDefault();
    console.log(e.targetTouches[0].pageX);
});


// box.addEventListener('touchend', (e) => {
//     e.preventDefault();
//     console.log('end');
// });
 });
//3 svoistba pri rabote s ustroistvami
//touches- vzaimodeistvie vseh touch na ekrane 
//targetTouches
//changedTouches 



