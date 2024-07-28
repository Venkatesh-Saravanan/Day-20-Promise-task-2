
// Fetch data from the API and display it on the webpage using promises
const fetchData = (url) => {
    return fetch(url).then(response => response.json());
};

const fetchBreweries = () => {
    fetchData('https://api.openbrewerydb.org/v1/breweries')
        .then(data => displayBreweries(data))
        .catch(error => console.error('Error fetching data:', error));
};

// Display breweries on the webpage
const displayBreweries = (breweries) => {
    const breweryListContainer = document.getElementById('breweryList');

    breweries.forEach(brewery => {
        const breweryCard = document.createElement('div');
        breweryCard.classList.add('col-md-4', 'brewery-card');

        breweryCard.innerHTML = `
                <div class="card text-bg-secondary mb-3">
                    <div class="card-header text-center">${brewery.name}</div>
                    <div class="card-body">
                        <p class="card-text">Brewery-type: ${brewery.brewery_type}</p>
                        <p class="card-text">Country: ${brewery.country}</p>
                        <p class="card-text">City-State: ${brewery.city}-${brewery.state}</p>
                        <p class="card-text">Lat-lng: "${brewery.latitude}"-"${brewery.longitude}"</p>                       
                        <p class="card-text">Phone: ${brewery.phone}</p>
                        <p class="card-text">Postal-code: ${brewery.postal_code}</p>
                        <p class="card-text">Website: <a href="${brewery.website_url}" target="_blank">${brewery.website_url}</a></p>
                    </div>
                </div>
            `;

        breweryListContainer.appendChild(breweryCard);
    });
};

// Call the fetchBreweries function when the page is loaded
window.addEventListener('load', fetchBreweries);
