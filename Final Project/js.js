// HOME PAGE //
function inclass(){
			var d = new Date();
			var h = d.getHours();
			var m = d.getMinutes();
			var ampm = h >= 12 ? 'pm' : 'am';
 			h = h % 12;
  			h = h ? h : 12; // the hour '0' should be '12'
  			m = m < 10 ? '0'+m : m;
 			var strTime = h + ':' + m + ' ' + ampm;
  			document.getElementById("time").innerHTML=strTime;
		}


function meal(){
			var d = new Date();
			var h = d.getHours();


			if(h < 10 ){
				document.getElementById("recipe").innerHTML="Does that mean you want to see some breakfast recipes?";
			}
			else if(h < 20){
				document.getElementById("recipe").innerHTML="Does that mean you want to see some lunch recipes?";
			}
			else{
				document.getElementById("recipe").innerHTML="Does that mean you want to see some dinner recipes?";
			}
		}
// BACK TO TOP BUTTON //
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myButton").style.display = "block";
    } else {
        document.getElementById("myButton").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// TIPS PAGE //
function convert(){
	var z = document.getElementById("input").value;
	var x = 0;
	var array = ["1 tablespoon = 3 teaspoons", "4 tablespoons = 1/4 cup", "1 cup = 250 mL", "1 pint = 500 mL", "1 quart = 0.95 L", "1 gallon = 3.8 L"];
	var text = "";
	while(x < z){
		text += array[x] + "<br>";
		document.getElementById("result").innerHTML = text;

		x++;
	}
}
function valid(){
	var x = document.getElementById("input").value;
	if(x==""){
		alert("Please specify how many converstions you want to see.");
		return false;
	}
	else if(x > 6){
		alert("There are only 6 common conversions.");
		return false;
	}
	else{
		convert();
	}
}
function calculator(){
		var x = document.getElementById("x").value;
		var z = parseFloat(x/0.0042268).toFixed(2);
		if(x == 0){
			document.getElementById("y").innerHTML = "Starting measurement cannot be 0";
		}
		else{
		document.getElementById("y").innerHTML = x + " cups is equal to " + z + " mL.";
	}
}
// BREAKFAST PAGE //
	function eggs(){
					var x = document.getElementById("input").value;
				if(x == "over easy"){
					document.getElementById("result").innerHTML="If you like your eggs over easy " + 
			        "start with sunny-side up eggs, then flip the eggs when the outside whites set." +
			        " Use a confident, gentle motion when flipping. Get under the edge with the spatula, then flip it. Cook for about a minute on this side.";
				}
				else if (x == "over medium"){
					document.getElementById("result").innerHTML="If you like your eggs over medium " +
					"start by melting 1/2 Tbs of butter in a non-stick pan over medium heat. Next, " +
					"gently crack the egg into the pan and once the bottom is set, add 1/2 Tbs of water to the pan." +
					"Cover the pan with a lid and let the egg cook for about 2 minutes.";
				}
				else if(x == "over hard"){
					document.getElementById("result").innerHTML="If you like your eggs over hard " +
					"start by coating the bottom of your pan with butter or oil. Next, crack " +
					"an egg in the middle of the pan and let the egg cook until the whites are " +
					"opague and yolk begins to thicken. Continue to cook until the yolk is completely firm.";
				}

				else{
					document.getElementById("result").innerHTML="Hmm.. I don't know how to cook an egg like that. Please try again.";
				}
			}
