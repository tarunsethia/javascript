function myapplication(){
	var self = this;
	function getRandomColor(){
		letters = '0123456789ABCDEF';
		color = '#';
		for (i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
			}
		return color;
	}
	
	function changeColor(e){
		var idval = e.target.id,
			color = getRandomColor(),
			current = document.querySelector('#'+idval).style.backgroundColor,
			selectv = document.querySelector('#'+idval+'select');;
		
		for(i=0;i<selectv.length;i++)
		{
			if(selectv[i]==color)
			{
				color=getRandomColor();
				i=0;
			}
		}
		
		
		document.querySelector('#'+idval).style.backgroundColor = color;
		selectv.appendChild(new Option(color, color));
		selectv.options.selectedIndex = selectv.length-1;
	}
	
	function setColor(e){
		var idval = e.target.id,
		color=document.querySelector('#'+idval).value,
		parentv=document.querySelector('#'+idval).parentNode.id;
		document.querySelector('#'+parentv).style.backgroundColor=color;
	}
	
	
	
	
	function init(){
		document.querySelectorAll('div.part').forEach(function(elem){
			elem.onclick = changeColor;
		});
		
		document.querySelectorAll('select.colorhistory').forEach(function(elem){
			elem.onchange = setColor; 
		});
		
		
	}
	
	return {
		init: init
	}
}

(function(){
	(new myapplication()).init();
})();

// create a namespace for your js application
// bind events using addEvent/addEventListener
// don't use doc.getElementById, or className, or tagName. doc.querySelectorAll


// functions vs objects vs array
// higher order functions
// types of functions
// MDN
//https://eloquentjavascript.net/
//higher order functions
// variable and scopes
// events and event timeline, scope, execution order