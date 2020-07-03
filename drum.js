

 window.addEventListener('keydown',function(e){
  const audio = document.querySelector(`audio[key ="${e.key}"]`)
  if(!audio) {
    return;
}
   audio.currentTime = 0; 
   audio.play()
  const key = document.querySelector(`.key[key ="${e.key}"]`)
  key.style.transitionDuration = "1s";
  key.style.transform = 'rotate(360deg)';

 });
 
 window.addEventListener('transitionend', (e) => e.target.style.transform = "none")
 
