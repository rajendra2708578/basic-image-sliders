
let slides=document.querySelectorAll(".slide");
let preBtn=document.querySelector(".prev");
let  nextBtn=document.querySelector(".next");
let currentSlide=0;
function next()
{
  let nextSlide=(currentSlide+1)%slides.length;
  slides[currentSlide].style.display="none";
  slides[nextSlide].style.display="block";
  currentSlide=nextSlide;
}

nextBtn.addEventListener("click",next);
preBtn.addEventListener("click",function()
{
  console.log("onclick is called for prev ");
  let prevSlide=currentSlide==0?slides.length-1:currentSlide-1;
  slides[currentSlide].style.display="none";
  slides[prevSlide].style.display="block";
  currentSlide=prevSlide;

});

setInterval(next,4000);