let searchForm=document.querySelector('.search-form');
document.querySelector('#search-btn').onclick=()=>
{
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginFormCart.classList.remove('active');
    navbar.classList.remove('active');

}


let shoppingCart=document.querySelector('.shopping-cart');
document.querySelector('#shopping-btn').onclick=()=>
{
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginFormCart.classList.remove('active');
    navbar.classList.remove('active');

}


let loginFormCart=document.querySelector('.login-form');
document.querySelector('#user-btn').onclick=()=>
{
    loginFormCart.classList.toggle('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');
}


let navbar=document.querySelector('.navbar');
document.querySelector('#manu-btn').onclick=()=>
{
    navbar.classList.toggle('active');
    loginFormCart.classList.remove('active');
    shoppingCart.classList.remove('active');
    searchForm.classList.remove('active');

}

window.onscroll=()=>
    {
        searchForm.classList.remove('active');
        shoppingCart.classList.remove('active');
        loginFormCart.classList.remove('active');
        navbar.classList.remove('active');

    }

    var swiper = new Swiper(".product-slider", {
        loop:true,
        spaceBetween: 20,
        autoplay: {
            delay:7500,
            disableOnInteraction:false,
        },

        breakpoints: {
          0: {
            slidesPerView: 1,
         
          },
          768: {
            slidesPerView: 2,
          
          },
          1020: {
            slidesPerView: 3,
        
          },
        },
      });


      /*var swiper = new Swiper(".review-slider", {
        loop:true,
        spaceBetween: 20,
        autoplay: {
            delay:7500,
            disableOnInteraction:false,
        },

        breakpoints: {
          0: {
            slidesPerView: 1,
         
          },
          768: {
            slidesPerView: 2,
          
          },
          1020: {
            slidesPerView: 3,
        
          },
        },
      });*/
    
    



   
   
        

    






    
