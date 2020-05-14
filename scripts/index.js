let defaultNumber = 0;
let isDec = false;
let item = 0;


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
	$("#itemList").append(`<li>тут должно было быть число</li>`);
	item++;
	}
}
