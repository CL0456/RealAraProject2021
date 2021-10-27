// Array for Locations. Will help for storage Calculating Distances//
const towns = ["Alexandra", 
"Blenheim", "Christchurch",
"Collingwood", "Cromwell", 
"Dunedin", "Franz-Josef","Geraldine","Gore", 
"Greymouth", "Haast", "Invercargill", "Kaikoura","Lake Tekapo", 
"Milford Sound", "Mount Cook", "Murchison", "Nelson", 
"Oamaru", "Picton", "Queenstown", "Te Anau", 
"Timaru","Twizel", "Wanaka", "Westport"]

// Function initialises select-list into array //
function ready() {
    var sel = document.getElementById("select-trip");
    for(var i = 0; i < towns.length; i++) {
     var opt = document.createElement('option');
     opt.innerHTML = towns[i];
     opt.value = towns[i];
     sel.appendChild(opt);
   }
 }

 // new array for the destination list
 const destinations = []

 // Sets up listeners and ready function once DOM has loaded//
 document.addEventListener("DOMContentLoaded", ready);
 document.addEventListener('DOMContentLoaded', function() {
 
		"use strict"
		setUpListeners();
		ready();
 	})	

	// adds the event listeners that are required //
		function setUpListeners(){
		document.getElementById("add_button").addEventListener('click', function() {addDestination();});
		document.getElementById("save_trip").addEventListener('click', function() {store();});
		document.getElementById("load_trip").addEventListener('click', function() {retrieve();});
		document.getElementById("refresh_button").addEventListener('click',function(){refresh();});
		document.getElementById("redo_button").addEventListener('click',function(){removeElement();});
		document.getElementById("").addEventListener('click',function(){openWindow})
		document.getElementById("closePage").addEventListener('click',function(){closeWindow();});
		document.getElementById("distances_calc").addEventListener('click',function(){DistCalc();});
		document.getElementById("fuelCalc").addEventListener('click',function(){fuelCalc();});
	}

// Adding Locations to list//
		function addDestination() {
			var destinationList = document.getElementById("locations");
			var destination = document.getElementById("select-trip");
			var li = document.createElement("li");
			li.setAttribute('id', destination.value);
			li.appendChild(document.createTextNode(destination.value));
			destinationList.appendChild(li);

			destinations.splice(destinations.length,0, destination.value)
			console.log(destinations)
		}

//Removes previously added Location from list//
	function removeElement() {
		var ul = document.getElementById("locations");
		var destination = document.getElementById("select-trip");
		var item = document.getElementById(destination.value);
		ul.removeChild(item);
	}


//Completely refreshes all items in List//
		function refresh() {
		document.getElementById("locations").innerHTML = ""

		}

// var reference to open window//
//Global var to store a reference to the opened window

//Array that contains various //
	const distances = [
					[0,786,755,964,31,190,373,315,136,661,231,202,657,227,370,242,734,865,223,791,93,249,307,169,86,761],
					[786,0,308,251,733,670,486,446,821,324,643,887,129,534,1081,639,153,116,555,28,794,960,471,592,745,254],
					[755,308,0,509,410,362,395,138,513,258,535,579,183,226,773,331,292,424,247,336,486,652,163,284,424,333],
					[964,251,509,0,939,871,582,697,1022,384,720,1088,380,785,1232,840,219,135,756,245,961,1117,672,843,839,320],
					[31,733,410,939,0,221,342,273,167,526,200,233,607,196,336,201,693,845,228,761,62,217,268,138,55,639],
					[190,670,362,871,221,0,563,232,151,551,421,217,545,3030,411,331,654,786,115,698,283,290,199,261,276,695],
					[373,486,395,582,342,563,0,481,509,176,142,575,550,485,678,498,340,469,506,531,404,560,493,427,287,277],
					[315,446,138,697,273,232,481,0,387,329,431,449,321,88,635,187,430,562,123,474,346,516,35,146,286,432],
					[136,821,513,1022,167,151,509,387,0,704,367,66,696,363,260,378,842,937,266,849,169,139,350,316,222,804],
					[661,324,258,384,526,551,176,329,704,0,316,769,338,417,860,510,167,292,443,352,583,739,352,475,469,101],
					[231,643,535,720,200,421,142,431,367,316,0,433,710,343,539,356,503,609,376,671,262,418,418,285,145,437],
					[202,887,579,1088,233,217,575,449,66,769,433,0,762,429,278,444,871,1003,332,915,187,152,416,371,285,869],
					[657,129,183,380,607,545,550,321,696,338,710,762,0,409,956,514,299,245,430,157,669,835,346,467,607,340],
					[227,534,226,785,196,3030,485,88,363,417,343,429,409,0,532,99,518,650,188,562,258,428,104,58,198,559],
					[370,1081,773,1232,336,411,678,635,260,860,539,278,956,532,0,550,1029,1146,526,1108,291,121,610,474,394,951],
					[242,639,331,840,201,331,498,187,378,510,356,444,514,99,550,0,623,755,216,667,263,429,211,63,211,664],
					[734,153,292,219,693,654,340,430,842,167,503,871,299,518,1029,623,0,129,539,191,775,944,455,576,715,101],
					[865,116,424,135,845,786,469,562,937,292,609,1003,245,650,1146,755,129,0,671,110,693,1025,587,708,587,226],
					[223,555,247,756,228,115,506,123,266,443,376,332,430,188,526,216,539,671,0,583,319,404,84,146,231,580],
					[791,28,336,245,761,698,531,474,849,352,671,915,157,562,1108,667,191,110,583,0,822,988,499,620,733,288],
					[93,794,486,961,62,283,404,346,169,583,262,187,669,258,291,263,775,693,319,822,0,170,335,200,117,664],
					[249,960,652,1117,217,290,560,516,139,739,418,152,835,428,121,429,944,1025,404,988,170,0,489,370,273,830],
					[307,471,163,672,268,199,493,35,350,352,418,416,346,104,610,211,455,587,84,499,335,489,0,162,273,497],
					[169,592,284,843,138,261,427,146,316,475,285,371,467,58,474,63,576,708,146,620,200,370,162,0,140,617],
					[86,745,424,839,55,276,287,286,222,469,145,285,607,198,394,211,715,587,231,733,117,273,273,140,0,558],
					[761,254,333,320,639,695,277,432,804,101,437,869,340,559,951,664,101,226,580,288,664,830,497,617,558,0],
				
				]

// Calculates the distance between destinations from destination array //
function DistCalc() {

    let tripList = destinations
    let potentialTownsList = towns
    let tripDistance = distances
        i = 0	
        traveled = 0
        while((tripList.length-1) > i) {
            destination1 = potentialTownsList.indexOf(tripList[i])
            destination2 = potentialTownsList.indexOf(tripList[(i+1)])
            distance = tripDistance[Number(destination1)]
            traveled += distance[Number(destination2)]
            i+=1
            console.log(traveled, destination1, destination2, distance)
            document.getElementById('DistDisplay').innerHTML = 'Estimated travel time is ' + traveled + ' km'
            document.getElementById("locations").innerHTML = traveled;
        }
}

//Calculates the fuel based of the inputted distance of the trip//
function fuelCalc(){
	 distance = document.getElementById('tripdistance').value;
	 fuel = document.getElementById('fuel').value;
	 pricePer = document.getElementById('gasprice').value;
	 fuelUsed =  (fuel / (distanceTraveled/100)).toFixed(2);
	 pricePer100 = (fuelUsed * pricePer).toFixed(2);
	document.getElementById('fuel_output').innerHTML = "Consumption is "+fuelUsed+" Litres/100km ( $ " + pricePer100 + " / 100km ) <br><br>Total Fuel cost = $ " + (fuel*pricePer).toFixed(2);
  }
//Opens window for the User//
url = file:///C:/Users/crtl/OneDrive/RealAraProject2021/test%202.html;
windowName = test2.html;
var window = window.open(url, windowName,);


  // Enables the user to open and close current window.//
  function closeWindow(){
  var window = window.self;
window.opener = window.self;
window.close();

  }

  //Storage Function//
function store() {
	// Put the object into storage
	var destinationList = document.getElementById("locations");
	localStorage.setItem('places', JSON.stringify(destinationList.innerText));
	}
	

	// Retrieve item from JSON library//
	function retrieve() {
	// Retrieve the object from storage
	var retrievedObject = localStorage.getItem('places');
	console.log('retrievedObject: ', JSON.parse(retrievedObject));
	document.getElementById('locations').innerHTML = 'Your destinations are: ' + retrievedObject
	}