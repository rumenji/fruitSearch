const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	if(str !== ''){
		for (const item of fruit){
			itemLowerC = item.toLowerCase();
			if(itemLowerC.includes(str)){
				results.push(item)
			}
		}
	}
	
	// TODO

	return results;
}

function searchHandler(e) {
	// TODO
	document.querySelector('ul').style.display = "block";
	let typedValue = input.value;
	results = search(typedValue.toLowerCase())
	showSuggestions(results, typedValue)
}

function showSuggestions(results, inputVal) {
	// TODO
	suggestions.innerHTML = '';
	for(let result of results){
		let li = document.createElement('li');
		boldedFruit = result.toLowerCase().split(inputVal.toLowerCase()).join('<b>'+inputVal+'</b>');
		if(boldedFruit.charAt(0) !== '<'){
			finalFruit = boldedFruit.charAt(0).toUpperCase()+boldedFruit.slice(1);
		} else{
			finalFruit = boldedFruit.slice(0,3)+ boldedFruit.charAt(3).toUpperCase() + boldedFruit.slice(4);
		}
		
		li.innerHTML = finalFruit;
		suggestions.appendChild(li)
	}
}

function useSuggestion(e) {
	input.value = e.target.innerText;
	document.querySelector('ul').style.display = "none";
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);