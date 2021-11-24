let boton = document.querySelector('.icon');
const burger = document.querySelector('#bars');


boton.addEventListener('click', () => {
  
  var x = document.getElementById("topnav");

  if (x.className === "nav") {
    x.className += " responsive";
    burger.classList.toggle("fa-times");
  } else {
    x.className = "nav";
  }
});