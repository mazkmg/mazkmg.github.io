let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");


function nextSlide() {
  console.log(slideIndex);

  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  } else {
    if (slideIndex>=4)
    {
      slideIndex = 0
    }
    else
    {
      slideIndex++;
    }
      }

  showSlides(slideIndex);
}

function prevSlide() {
  console.log(slideIndex);

  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else {
    if (slideIndex<=0)
    {
      slideIndex = 4
    }
    else
    {
      slideIndex--;
    }
  }

  showSlides(slideIndex);
}


// Thumbnail image controls
function currentSlide(index) {
  slideIndex = index;
  showSlides(slideIndex);
}

function showSlides(itemIndex) {
  for (const slide of slides) {
    slide.style.display = "none";
  }

  for (const dot of dots) {
    dot.classList.remove('active');
  }

  slides[itemIndex].style.display = "block";
  dots[itemIndex].classList.add('active');
}

$(function(){
  showSlides(slideIndex);
});


function creatPopup(){
  console.log ("Запускается всплывающее окно")
  let modalCounter = 0;
  let container = document.createElement("div");
  let id = "modal_" + modalCounter;
  let duration = $("#duration option:selected").text();
  let place = $("#place option:selected").text();
  let quantity = $("#quantity option:selected").text();
  console.log (duration);
  console.log (place);
  console.log (quantity);

  container.classList.add("modal");
  container.innerHTML = `
  <div class = "modal_content">
  <div class = "modal_text_position">
  <div class = "modal_text">
  Вы выбрали: <br>
  Дата поездки:
  Место поездки: ${place} <br>
  Срок поездки:  ${duration} <br>
  Колличество участников: ${quantity} <br>
  Стоимость тура: 
  </div>
  <div class = "modal_text">Укажите свой телефон, чтобы мы могли связаться с вами и оформить тур <br>
  <div class="modal_input_position"><input type="text" name="email_input" class="modal_input" placeholder="Укажите номер телефона">
  <button class="modal_button">Отправить</button></div></div>
  </div>
  <div class="close"><span>Х</span></div>
  `;
  $("#creatPopup").html(container);
  console.log (container);
  modalCounter++;
  
  
  let closeButton = $("#" + id).children().children("span");

  $(closeButton).on("click", function(){
    document.getElementsById(id).remove();
  });
 
}