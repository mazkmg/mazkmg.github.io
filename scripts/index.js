let defaultNumber = 0;
let isDec = false;
let item = 0;
let menuLinks = [
"ГЛАВНАЯ",
"УСЛУГИ",
"ПРОЕКТЫ",
"КОНТАКТЫ",
"XXX",
];

const boxes = [{
		title: 'Том Харди',
		text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean condimentum nibh arcu, et luctus tellus vulputate molestie. Quisque fringilla hendrerit feugiat. Cras eu tellus sed nisl euismod euismod. Sed molestie, dui quis convallis ultrices, mi leo hendrerit enim, in facilisis elit augue in orci. Suspendisse ut gravida augue. Maecenas eu ultrices ex. Nullam purus ipsum, suscipit et ligula nec, ultricies ullamcorper enim. Integer laoreet iaculis magna sit amet malesuada.',
		autor: 'Дарт Вейдер',
		avatar: "./images/avatar_autor.jpg",
		hasButton: false,

	},
	{
		title: 'Брюс Уиллис ',
		text: 'Nunc viverra tortor eget elementum tempor. Aenean tincidunt mauris sed pulvinar finibus. Nulla vehicula urna a ligula ullamcorper, nec malesuada mauris feugiat. Praesent dui ante, ultricies a lobortis facilisis, pretium id urna. Nullam quis efficitur lectus. Duis consequat ante nunc, a congue lectus congue nec. Mauris fringilla molestie nisl eu bibendum.',
		autor: 'Гендальф',
		avatar: "./images/avatar_autor_2.jpg",
		hasButton: true,
	},
	
];

const product = [{
		image: "./images/product_1.jpg",
		title: 'Палатка у озера',
		prise: '2000',
		hasButton: true,

	},
	{
		image: "./images/product_2.jpg",
		title: 'Палатка у озера',
		prise: '3300',
		hasButton: true,
	},
	{
		image: "./images/product_3.jpg",
		title: 'Палатка у озера',
		prise: '1000',
		hasButton: true,
	},
	{
		image: "./images/product_4.jpg",
		title: 'Палатка у озера',
		prise: '3000',
		hasButton: true,
	},
	{
		image: "./images/product_5.jpg",
		title: 'Палатка у озера',
		prise: '3000',
		hasButton: true,
	},
	{
		image: "./images/product_6.jpg",
		title: 'Палатка у озера',
		prise: '3000',
		hasButton: true,
	}
];

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}


function createProductBoxes() {
	let html = '';

	for (const box of product) {
		html += `
		<div class="product_position">
			<div class="flip-card">
			  <div class="flip-card-inner">
			    <div class="flip-card-front">
			      <img src="${box.image}" alt="Avatar" class="product_image">
			    </div>
			    <div class="flip-card-back">
			      <h1>${box.title}</h1>
			      <h2>${box.prise} руб/сут</h2>
			      <button class="button">Запустить калькулятор</button>
			    </div>
			  </div>
			</div>
		</div>`;
	}
	
	$('#product_container').html(html);
}



function createCardBoxes() {
	let html = '';
	let button = `<div style="margin-left: 8px">
						<button>Подробнее</button>
					</div>`;

	for (const box of boxes) {
		html += `
		<div class="box-container">
			<div>
				<div class="avatar_position"><img src="${box.avatar}" class="avatar_autor"></div>
				<div class="box-title">
					${box.title}
				</div>

				<div class="box-content">
					${box.text}
				</div>
			</div>

			<div class="box-autor">
				<div>
					Автор :
				</div>
				<div class="autor">
					${box.autor}
				</div>
				${ hasButton(box.hasButton) }
			</div>

		</div>`;
	}

	function hasButton(box) {
		if (box) {
			return button;
		}

		return '';
	}
	$('#data_container').html(html);
}

function inc(n) //увеличиваем число на 1
{
n = n+1;
console.log ("число увеличивается на 1", n);

defaultNumber = n;
}

function dec (n) //уменьшаем число на 1
{
n = n-1;
console.log ("число уменьшено на 1", n);

defaultNumber = n;
}

function checkofclick (n) //проверка уменьшение или увеличение
	{ 
	if (isDec)
		{
		if (n !== 0)
			{
			dec(n);
			}
		else  
			{
			isDec = false;
			inc (n);
			}	
		}
	
	else 
		{
		console.log (n<10)	
		if (n<10)
			{
			inc(n);
			}
		else if (n>=10)
			{
			isDec = true
			dec (n)		
			}
		}
	}


function list(item)
	{

	while (item < 10)
		{
		$("#itemList").append(`<li>${item}</li>`);
		item++;
		}
	}

let customNumber = 0;

function returnValue(a)
	{
	return a * 2;

	}

customNumber = returnValue(10) + 10;
console.log(customNumber)


//добавляет новый элемент в списке
function addElement()
{
	let text = prompt('Введите название элемента');
	console.log (text);

	let html = `
	<li>
		<div class="itemList">
		<span class="target" onmouseenter="toggleColor(this, true)" onmouseleave="toggleColor(this)" >${text}</span>
		<button class="delete" onclick="deleteElement(this.parentNode.parentNode)">x</button>
		</div>
	</li>`;

	$("#itemList").append(html);
}


function payment()
{	
let summ = prompt("Введите ваш баланс"); //баланс
	summ=Number(summ); //приводим баланс к числу
	let summ_purchase = prompt("Сумма одного телефона");//сумма одного телефона
	summ_purchase=Number(summ_purchase); //приводим к числу сумма одного телефона
	let number_telephone = 0; //кол-во купленных телефонов
	let tax = 0.01; //налог
	let purchase_amount = 0; //сумма покупок
    let summ_exit = 0 //остаток на балансе

while (summ_exit>=purchase_amount)
{
purchase_amount = purchase_amount + (summ_purchase + (summ_purchase * 0.01)) // покупаем один телефон
summ_exit = summ - (summ_purchase + (summ_purchase * 0.01)) // вычитаем покупку из суммы баланса
number_telephone++ // увеличиваем кол-во купленных телефонов на 1
}
let calculation_result = `
		<div>
			<ul>
				<li>Изначальный баланс: <span>${summ}</span> рублей</li>
				<li>Сумма покупки составила: <span> ${purchase_amount}	</span>рублей</li>
				<li>Стоимоть одного телефона: <span>${summ_purchase}</span> рублей</li>
				<li>Вы можете купить:<span> ${number_telephone} </span> телефонов</li>	
				<li>Налог составил: <span>${tax} рублей </span>	</li>
				
			</ul>
		</div>`;

		$("#calculation_output").append(calculation_result);

console.log("изначальнй баланс "+ summ)
console.log("сумма покупок"+ purchase_amount)
console.log("стоимость одного телефона"+ summ_purchase)
console.log("налог составил "+tax)
console.log("кол-во купленных телефонов"+ number_telephone)
}


function deleteElement(element)
{
 console.log("Удалить элемент");
  console.log(element);
 $(element).replaceWith();
}


function toggleColor(element, active = false) {
    console.log(element, active);

    let activeColor = 'red';
    let defaultColor = '#333';

    if (active) {
        $(element).css('color', activeColor);
    } else {
        $(element).css('color', defaultColor);
    }
}

let user = "";

function generateMenuLinks() {
	let html = '';

	for (const item of menuLinks) {
		html += `<a class="item-link" href="">${item}</a>`;
	}

	return html;
}

function toggleValue()
{
	let value = prompt("Введи сюда что-нибудь позя-зя-зя")
	$("#value_mother").html(value)
}

function hidetoggleValue(element, active = false)
{
 let hideelement = $("#hidetoggle");
 let hidebutton = $("#hidebutton");
 let bool = $(hidebutton).hasClass("active")

 if(bool)
 {
 	$(hidebutton).removeClass("active");
 	$(hidebutton).text("Скрыть")
 	$(hideelement).show()
 }
 else {
 	$(hidebutton).addClass("active")
 	$(hidebutton).text("Показать")
 	$(hideelement).hide()

 }

console.log(hidebutton)
console.log($(hidebutton).hasClass("active"))
console.log(bool)
}

let modalCounter = 0;
function createPopaup()
{
	console.log ("Создаем попап");

	let container = document.createElement("div");
	let textModal = prompt("Укажите текст")
	let id = "modal_" + modalCounter

	container.classList.add("modal")

	container.setAttribute("id", id)

	container.innerHTML = `<div class="modal-content">
    <span class="close">&times;</span>
    <p>${textModal}</p>
  </div>`

	console.log(container)

	modalCounter++
	$("#modal").html(container)
	container.style.display = "flex"
	container.style.color = "black"

	let closeButton = $("#" + id).children().children("span")
	$(closeButton).on("click", function(){
	$("#" + id).replaceWith()
	})

}

$(function(){

$('#avatarFrame').append('<div class="avatar"></div>');
$("#menuLinks").append(generateMenuLinks())
$('#menuLinks').children().each(function () {

		$(this).on('mouseenter', () => {
			$(this).css('color', '#CD5C5C');
		});

		$(this).on('mouseleave', () => {
			$(this).css('color', 'inherit');
		});
	});


if(!localStorage.getItem("name"))
{
 localStorage.setItem("name","Илья"); //записываем в кэш моем имя
}
else{
	user = localStorage.getItem("name");
	}

$("#userName").html(user)

$("button").on("click", function()
{
	let text = $(this).text().trim()
	switch (text){
	case "Запустить калькулятор":payment();
	break;
	case "показать список":list(item);
	break;

	}
	console.log($(this).text())


})
createProductBoxes();
createCardBoxes();
});