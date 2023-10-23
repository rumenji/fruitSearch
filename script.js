const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	//empty array to populate matching fruit names
	let results = [];
	//checks if there are characters in the search input
	if(str !== ''){
		//iterate over the array of predefined fruits
		for (const item of fruit){
			itemLowerC = item.toLowerCase();
			if(itemLowerC.includes(str)){
				//adds the fruit to results if the converted lower case string is included in the name of the fruit
				results.push(item)
			}
		}
	}
	
	// TODO
	//returns matches in array form
	return results;
}

function searchHandler(e) {
	// TODO
	//changes the display property of the suggetions div
	document.querySelector('ul').style.display = "block";
	let typedValue = input.value;
	//passes lower case value of the typed string to search()
	results = search(typedValue.toLowerCase())
	//passes the matched fruit names and typed in value to showSuggestions()
	showSuggestions(results, typedValue)
}

function showSuggestions(results, inputVal) {
	// TODO
	//clears previous suggestions
	suggestions.innerHTML = '';
	for(let result of results){
		//creates a list item for each fruit in the results
		let li = document.createElement('li');
		//splits the name of the fruit based on the typed in string to be able to bold the string in the name
		boldedFruit = result.toLowerCase().split(inputVal.toLowerCase()).join('<b>'+inputVal+'</b>');
		//checks if the first character is not an angled bracket for the bold parameter - means the first character is an upper case letter
		if(boldedFruit.charAt(0) !== '<'){
			finalFruit = boldedFruit.charAt(0).toUpperCase()+boldedFruit.slice(1);
		} else{
			//if the first character is an angled bracked - then the character to be upper case is after <b>.
			finalFruit = boldedFruit.slice(0,3)+ boldedFruit.charAt(3).toUpperCase() + boldedFruit.slice(4);
		}
		//sets innerHTML for the li and appends it to the suggestions div
		li.innerHTML = finalFruit;
		suggestions.appendChild(li)
	}
}

function useSuggestion(e) {
	//chnages the search input value to the name of the clicked target from the list and hides the suggestions div
	input.value = e.target.innerText;
	document.querySelector('ul').style.display = "none";
}

//recognize typing in the search input
input.addEventListener('keyup', searchHandler);
//populate the search input with the value of the selected suggestion
suggestions.addEventListener('click', useSuggestion);