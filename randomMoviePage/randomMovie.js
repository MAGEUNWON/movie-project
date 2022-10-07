const app = document.getElementById("app");





const random = {
  module:document.getElementById('module'),
  card:document.getElementById('card'),
  drawer:document.getElementById('drawer'),
  front:document.getElementById('front'),
  back:document.getElementById('back')
}

let isClick = true;

random.drawer.addEventListener('click', ()=>{
  if(isClick===true){
    isClick = false;
    console.log(isClick);

    random.card.style.transformStyle = "preserve-3d";
    random.card.style.transform = "rotateY(180deg)";
    random.card.style.transition = "1s";
  } else{
    isClick = true;
    console.log(isClick);

    random.card.style.transformStyle = "preserve-3d";
    random.card.style.transform = "rotateY(0deg)";
    random.card.style.transition = "1s";
    random.front.style.backfaceVisibility = "visible";
  }
})