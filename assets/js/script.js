let mobNav = function() {
    let burger = document.querySelector('.burger-menu');
    let nav = document.querySelector('.nav-list');
    let navList = document.querySelectorAll('.nav-list li') 

    burger.addEventListener('click', function(){
       //make a navbar slide in
        nav.classList.toggle('nav-active')

        //make an animation for nav links
     navList.forEach(function(link, index) {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navListFade 0.5s ease forwards ${index/5+0.5}s`;
        }
         
     }) 

     burger.classList.toggle('toggle');
        
    })
}
 mobNav()