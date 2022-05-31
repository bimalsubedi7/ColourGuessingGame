var colors=
[
	"rgb(255, 0, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 0, 255)",
	"rgb(255, 255, 0)",
	"rgb(255, 0, 255)",
	"rgb(0, 255, 255)"
];

var numSquares = 6;
var Rcolor = document.getElementById("Rcolor");
var squares = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var hader = document.querySelector("#hader");
var Rbutton = document.querySelector("#Rbutton");
var modebtn = document.querySelectorAll(".mode");
var colors = generateRandomColor(numSquares);
var pickedColor = pickColor();


for(var i = 0; i < modebtn.length; i++)
{
	modebtn[i].addEventListener("click",function()
	{
		modebtn[0].classList.remove("selected");
		modebtn[1].classList.remove("selected");
		this.classList.add("selected");
		if (this.textContent === "Easy") 
		{
			numSquares = 3;
		}
		else
		{
			numSquares = 6;
		}
		reset();
	});
}



function reset()
{
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	Rcolor.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++)
	{
		if (colors[i]) 
		{
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}
	hader.style.backgroundColor = "steelblue";
	message.textContent = "";
	Rbutton.textContent = "New Color";

}


Rbutton.addEventListener("click",function()
{
	reset();
})

Rcolor.textContent = pickedColor;

for (var i = 0;i < squares.length; i++) 
{
	squares[i].style.backgroundColor=colors[i];

	squares[i].addEventListener("click", function()
	{
		var clickedColor = this.style.backgroundColor;
		if (clickedColor === pickedColor) 
		{
			Rbutton.textContent = "Play Again"
			message.textContent = "Correct";
			changeColor(pickedColor);
			hader.style.backgroundColor = clickedColor;
		}
		else
		{
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again";
		}
	});
}


function changeColor(color)
{
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].style.backgroundColor = color;
	}
}


function pickColor()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num)
{
	var arr = [];
	for (var i = 0; i < num; i++) 
	{
		 arr.push(randomColor());
	}
	return arr;
}



function randomColor()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}






easybtn.addEventListener("click",function()
{	
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numSquares = 3;

	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	Rcolor.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.backgroundColor = colors[i];
		}
		else
		{
			squares[i].style.display = "none";
		}
	}
	hader.style.backgroundColor = "steelblue";

})


hardbtn.addEventListener("click",function()
{
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	numSquares = 6;
	
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	Rcolor.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++)
	{
		
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
	hader.style.backgroundColor = "steelblue";

})