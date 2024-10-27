//document.addEventListener('DOMContentLoaded', () => {
 // const toggleBtn = document.getElementById('toggle-btn');
  //const navbarItems = document.getElementById('navbar-items');

  // Toggle the 'hidden' class when the button is clicked
  //toggleBtn.addEventListener('click', () => {
  //  navbarItems.classList.toggle('hidden');
 // });

  // Ensure proper display on window resize
  //window.addEventListener('resize', () => {
    //if (window.innerWidth > 718) {
    //  navbarItems.classList.remove('hidden'); // Show items above 718px
   // } else {
   //   navbarItems.classList.add('hidden'); // Hide items below 718px
  //  }
 // });
//});


//navbar

document.addEventListener('DOMContentLoaded',()=>{
  const toggleBtn=document.getElementById('toggle-btn');
  const navbarItems=document.getElementById('navbar-items');

  toggleBtn.addEventListener('click',()=>{
    navbarItems.classList.toggle('hidden');
  });

  window.addEventListener('resize',()=>{
    if(innerWidth>718){
      navbarItems.classList.remove('hidden');
    }
    else{
      navbarItems.classList.add('hidden');
    }
  });





//image slider



let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click',()=>{
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})






});




//sign in /login form



  
  const checkBox = document.getElementById("checkbox");
const checkBoxIco = document.getElementById("checkbox-ico").style;

const onClickCheckBox = () => {
  if (checkBoxIco.display === "none" || !checkBoxIco.display) {
    checkBoxIco.display = "inline-block";
  } else {
    checkBoxIco.display = "none";
  }
};

checkBox.addEventListener("click", onClickCheckBox);
