let nextButton = document.querySelector('.slider__next-button')
let prevButton = document.querySelector('.slider__prev-button')
let offset = 0;
const sliderItems = document.querySelector('.slider__items');
let width;
const popUp = document.getElementById('pop-up');
popUpOpen = document.querySelectorAll('.pop-up__open')
popUpClose = document.querySelector('.pop-up__close')
let countItem = document.getElementsByClassName('slider__count-item')[0]
let menuOpen = document.querySelector(".services__menu-buttons")


nextButton .addEventListener('click', function(){
  width = document.querySelector('.slider__item').clientWidth;
  if (width == 1140){
    offset += 1140;  
      if (offset > 3420){
        offset = 0;
      }
      sliderItems.style.left = -offset + 'px';

      let numberSlide = countItem.textContent;
      if (offset == 0){
        countItem.textContent = '1';
      }else if(offset == 1140){
        countItem.textContent = '2';
      }else if(offset == 2280){
        countItem.textContent = '3';
      }else if(offset == 3420){
        countItem.textContent = '4';
      }
  } else{
    offset += 340;
      if (offset > 1020){
        offset = 0;
      }
      sliderItems.style.left = -offset + 'px';

      let numberSlide = countItem.textContent;
      if (offset == 0){
        countItem.textContent = '1';
      }else if(offset == 340){
        countItem.textContent = '2';
      }else if(offset == 680){
        countItem.textContent = '3';
      }else if(offset == 1020){
        countItem.textContent = '4';
      }
  }
  
});


prevButton.addEventListener('click', function(){
  width = document.querySelector('.slider__item').clientWidth;
  if (width == 1140){
    offset -= 1140;
    if (offset < 0){
      offset = 3420;
    }
    sliderItems.style.left = -offset + 'px';
  
    let numberSlide = countItem.textContent;
    if (offset == 0){
      countItem.textContent = '1';
    }else if(offset == 1140){
      countItem.textContent = '2';
    }else if(offset == 2280){
      countItem.textContent = '3';
    }else if(offset == 3420){
      countItem.textContent = '4';
    }
  }else{
    offset -= 340;
    if (offset < 0){
      offset = 1020;
    }
    sliderItems.style.left = -offset + 'px';

    let numberSlide = countItem.textContent;
    if (offset == 0){
      countItem.textContent = '1';
    }else if(offset == 340){
      countItem.textContent = '2';
    }else if(offset == 680){
      countItem.textContent = '3';
    }else if(offset == 1020){
      countItem.textContent = '4';
    }
  }
});


for(let button of popUpOpen){
button.addEventListener('click', function(evt){
  evt.preventDefault();
  popUp.classList.add('active-form');
})
}
popUpClose.addEventListener('click', () => {
  popUp.classList.remove('active-form');
})

menuOpen.addEventListener('click', () =>{
  document.querySelector('.header').classList.toggle('active');
  document.querySelector('body').classList.toggle('active');
})