let defaultNumber = 0;
let isDec = false;
let item = 0;
let menulinks = [
"Home",
"Media",
"Contancs",
"Follow",
];


function inc(n)
{
n = n+1;
console.log ("число увеличивается на 1", n);

defaultNumber = n;
}

function dec (n)
{
n = n-1;
console.log ("число уменьшено на 1", n);

defaultNumber = n;
}

function checkofclick (n)
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

function generateMenuLinks()
{
	let html = "";

	for(const item of menulinks){
		html += `<li><a href="//">${item}</a></li>`;
	}
	return html;
}


$(function(){
$("#menulinks").append(generateMenuLinks())
});