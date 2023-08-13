console.log('script.js loaded');
let globalBeerId;
window.addEventListener('load', function(e) {
	console.log('Page loaded');
	init();

});

function init() {
	loadBeerList();

	document.forms.newBeerForm.createBeer.addEventListener('click', function(e) {
		e.preventDefault();
		createBeer();

	});

	document.forms.newBeerForm.updateBeer.addEventListener('click', function(e) {
		e.preventDefault();
		updateBeer(globalBeerId);

	});

}

function loadBeerList() {
	let xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/beers');
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let beers = JSON.parse(xhr.responseText);
				console.log(beers);
				displayBeerList(beers);
				
				let totalABV = calculateTotalABV(beers);
				displayTotalABV(totalABV);
			}
			else {
				//TODO
			}
		}

	};
	xhr.send();
}

function displayBeerList(beerList) {
	if (beerList && Array.isArray(beerList)) {
		let tbody = document.getElementById("hopTrackTableBody");
		for (let beer of beerList) {
			let tr = document.createElement('tr');
			let td = document.createElement('td');
			td.textContent = beer.id;
			tr.appendChild(td);
			td = document.createElement('td');
			td.textContent = beer.name;
			tr.appendChild(td)
			tbody.appendChild(tr);

			tr.addEventListener('click', function(e) {
				let element = e.target;
				let beerId = element.parentElement.firstElementChild.textContent;
				console.log(beerId);
				getBeerDetails(beerId);

			});

			let deleteButton = document.createElement('button');
			deleteButton.textContent = 'Delete';
			tr.appendChild(deleteButton);
			tr.setAttribute('data-id', beer.id);

			deleteButton.addEventListener('click', function(e) {
				e.stopPropagation();
				let tr = e.target.closest('tr');
				let beerId = tr.getAttribute('data-id');
				deleteBeer(beerId);
			});
		}
	}
}

function displayBeerDetails(beer) {
	//DOM stuff
	let detailsContainer = document.getElementById("beerData");
	detailsContainer.textContent = '';

	let nameHeading = document.createElement('h2');
	nameHeading.textContent = beer.name;
	detailsContainer.appendChild(nameHeading);

	let abv = document.createElement('p');
	abv.textContent = 'ABV: ' + beer.abv;
	detailsContainer.appendChild(abv);

	let brewery = document.createElement('p');
	brewery.textContent = 'Brewery: ' + beer.brewery;
	detailsContainer.appendChild(brewery);

	let type = document.createElement('p');
	type.textContent = 'Type: ' + beer.type;
	detailsContainer.appendChild(type);

	let description = document.createElement('p');
	description.textContent = 'Description: ' + beer.description;
	detailsContainer.appendChild(description);

	let color = document.createElement('p');
	color.textContent = 'Color: ' + beer.color;
	detailsContainer.appendChild(color);

	let rating = document.createElement('p');
	rating.textContent = 'Rating: ' + beer.rating;
	detailsContainer.appendChild(rating);

	let foodPairing = document.createElement('p');
	foodPairing.textContent = 'Food Pairing: ' + beer.foodPairing;
	detailsContainer.appendChild(foodPairing);

	let availability = document.createElement('p');
	availability.textContent = 'Availability: ' + beer.availability;
	detailsContainer.appendChild(availability);

	detailsContainer.display = 'block';

	let formTitle = document.getElementById("formTitle");
	formTitle.textContent = "updateBeer";

	let updateBeer = document.forms.newBeerForm.updateBeer;
	updateBeer.textContent = "updateBeer";

	let beerForm = document.forms.newBeerForm;
	beerForm.name.value = beer.name;
	beerForm.abv.value = beer.abv;
	beerForm.brewery.value = beer.brewery;
	beerForm.type.value = beer.type;
	beerForm.description.value = beer.description;
	beerForm.color.value = beer.color;
	beerForm.rating.value = beer.rating;
	beerForm.foodPairing.value = beer.foodPairing;
	beerForm.availability.value = beer.availability;



}

function getBeerDetails(beerId) {
	//XHR stuff
	globalBeerId = beerId;
	let xhr = new XMLHttpRequest();
	xhr.open('GET', `api/beers/${beerId}`);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				let beerDetails = JSON.parse(xhr.responseText);
				displayBeerDetails(beerDetails);
			}
			else {
				console.error('Beer details not found');
			}

		}
	};
	xhr.send();
}

function createBeer() {
	let beer = document.forms.newBeerForm;
	let beerData = {
		name: beer.name.value,
		abv: parseFloat(beer.abv.value),
		brewery: beer.brewery.value,
		type: beer.type.value,
		description: beer.description.value,
		color: beer.color.value,
		rating: parseInt(beer.rating.value),
		foodPairing: beer.foodPairing.value,
		availability: beer.availability.value
	};

	let xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/beers');
	xhr.setRequestHeader('Content-Type', 'application/json');

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 201) {
				console.log('Beer Created');
				let responseData = JSON.parse(xhr.responseText);
				displayBeerDetails(responseData);
			} else {
				console.log('Error creating beer: ' + xhr.status);
			}
		}

	};

	xhr.send(JSON.stringify(beerData));
}

function updateBeer(beerId) {
	let beer = document.forms.newBeerForm;
	let beerData = {
		name: beer.name.value,
		abv: parseFloat(beer.abv.value),
		brewery: beer.brewery.value,
		type: beer.type.value,
		description: beer.description.value,
		color: beer.color.value,
		rating: parseInt(beer.rating.value),
		foodPairing: beer.foodPairing.value,
		availability: beer.availability.value
	};

	let xhr = new XMLHttpRequest();
	xhr.open('PUT', `api/beers/${beerId}`);
	xhr.setRequestHeader('Content-Type', 'application/json');

	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 201 || xhr.status === 200) {
				console.log('Beer updated');
				let responseData = JSON.parse(xhr.responseText);
				displayBeerDetails(responseData);
			} else {
				console.log('Error updating beer: ' + xhr.status);
			}
		}

	};

	xhr.send(JSON.stringify(beerData));
	loadBeerList();
	window.location.reload();

}

function deleteBeer(beerId) {
	let xhr = new XMLHttpRequest();
	xhr.open('DELETE', `api/beers/${beerId}`);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 204) {
				console.log('Beer has been deleted');
				removeBeerFromList(parseInt(beerId));
			} else {
				console.log('Error deleting beer: ' + xhr.status)
			}
		}
	};
	xhr.send();
}
function removeBeerFromList(beerId) {
	let beerRow = document.querySelector(`tr[data-id="${beerId}"]`);
	if(beerRow) {
		beerRow.remove();
	}
}

function calculateTotalABV(beerList) {
	let totalABV = 0;
	for (let beer of beerList) {
		totalABV += beer.abv;
	}
	return totalABV;
}

function displayTotalABV(totalABV) {
	let totalABVContainer = document.getElementById('totalABV');
	totalABVContainer.textContent = 'Total ABV: ' +totalABV.toFixed(2);
}










