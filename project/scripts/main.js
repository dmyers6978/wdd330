var storage = window.localStorage;
var container = document.getElementById("container");
const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
function nl2br (str, is_xhtml) {
    if (typeof str === 'undefined' || str === null) {
        return '';
    }
    var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
    return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}

function loadPeople(apiURL){
    if(!apiURL){
        apiURL = 'https://swapi.dev/api/people/';
    }
    fetch(apiURL).then( response => {
        container.innerHTML = '<p>Waiting for response...</p>';
        if(response.ok) {
            return response;
        }
        throw Error(response.statusText);
        })
    .then( response => response.json() )
    .then( text => {
        container.innerHTML = "";
        text.results.forEach(person => {
            container.innerHTML += "<p><a href='#' onclick=\"personDetails('" + person.url.replace("http", "https") + "')\">" + person.name + "</a></p>";
        })
        if(text.previous){
            container.innerHTML += "<button onclick=\"loadPeople('" + text.previous.replace("http", "https") + "')\" id='previous'>Previous</button>";
        }
        if(text.previous && text.next){
            container.innerHTML += "<span>&nbsp;|&nbsp;</span>";
        }
        if(text.next){
            container.innerHTML += "<button onclick=\"loadPeople('" + text.next.replace("http", "https") + "')\" id='next'>Next</button>";
        }
        
        container.innerHTML += "<br><br><button onclick=\"initialize('https://swapi.dev/api/')\">Home</button>";
    })
    .catch( error => console.log('There was an error:', error));
}

function loadPlanets(apiURL){
    if(!apiURL){
        apiURL = 'https://swapi.dev/api/people/';
    }
    fetch(apiURL).then( response => {
        container.innerHTML = '<p>Waiting for response...</p>';
        if(response.ok) {
            return response;
        }
        throw Error(response.statusText);
        })
    .then( response => response.json() )
    .then( text => {
        container.innerHTML = "";
        text.results.forEach(person => {
            container.innerHTML += "<p><a href='#' onclick=\"planetDetails('" + person.url.replace("http", "https") + "')\">" + person.name + "</a></p>";
        })
        if(text.previous){
            container.innerHTML += "<button onclick=\"loadPlanets('" + text.previous.replace("http", "https") + "')\" id='previous'>Previous</button>";
        }
        if(text.previous && text.next){
            container.innerHTML += "<span>&nbsp;|&nbsp;</span>";
        }
        if(text.next){
            container.innerHTML += "<button onclick=\"loadPlanets('" + text.next.replace("http", "https") + "')\" id='next'>Next</button>";
        }
        
        container.innerHTML += "<br><br><button onclick=\"initialize('https://swapi.dev/api/')\">Home</button>";
    })
    .catch( error => console.log('There was an error:', error));
}

function loadFilms(apiURL){
    if(!apiURL){
        apiURL = 'https://swapi.dev/api/people/';
    }
    fetch(apiURL).then( response => {
        container.innerHTML = '<p>Waiting for response...</p>';
        if(response.ok) {
            return response;
        }
        throw Error(response.statusText);
        })
    .then( response => response.json() )
    .then( text => {
        container.innerHTML = "";
        text.results.forEach(person => {
            container.innerHTML += "<p><a href='#' onclick=\"filmDetails('" + person.url.replace("http", "https") + "')\">" + person.title + "</a></p>";
        })
        if(text.previous){
            container.innerHTML += "<button onclick=\"loadFilms('" + text.previous.replace("http", "https") + "')\" id='previous'>Previous</button>";
        }
        if(text.previous && text.next){
            container.innerHTML += "<span>&nbsp;|&nbsp;</span>";
        }
        if(text.next){
            container.innerHTML += "<button onclick=\"loadFilms('" + text.next.replace("http", "https") + "')\" id='next'>Next</button>";
        }
        
        container.innerHTML += "<br><br><button onclick=\"initialize('https://swapi.dev/api/')\">Home</button>";
    })
    .catch( error => console.log('There was an error:', error));
}

function loadSpecies(apiURL){
    if(!apiURL){
        apiURL = 'https://swapi.dev/api/people/';
    }
    fetch(apiURL).then( response => {
        container.innerHTML = '<p>Waiting for response...</p>';
        if(response.ok) {
            return response;
        }
        throw Error(response.statusText);
        })
    .then( response => response.json() )
    .then( text => {
        container.innerHTML = "";
        text.results.forEach(person => {
            container.innerHTML += "<p><a href='#' onclick=\"speciesDetails('" + person.url.replace("http", "https") + "')\">" + person.name + "</a></p>";
        })
        if(text.previous){
            container.innerHTML += "<button onclick=\"loadSpecies('" + text.previous.replace("http", "https") + "')\" id='previous'>Previous</button>";
        }
        if(text.previous && text.next){
            container.innerHTML += "<span>&nbsp;|&nbsp;</span>";
        }
        if(text.next){
            container.innerHTML += "<button onclick=\"loadSpecies('" + text.next.replace("http", "https") + "')\" id='next'>Next</button>";
        }
        
        container.innerHTML += "<br><br><button onclick=\"initialize('https://swapi.dev/api/')\">Home</button>";
    })
    .catch( error => console.log('There was an error:', error));
}

function loadVehicles(apiURL){
    if(!apiURL){
        apiURL = 'https://swapi.dev/api/people/';
    }
    fetch(apiURL).then( response => {
        container.innerHTML = '<p>Waiting for response...</p>';
        if(response.ok) {
            return response;
        }
        throw Error(response.statusText);
        })
    .then( response => response.json() )
    .then( text => {
        container.innerHTML = "";
        text.results.forEach(person => {
            container.innerHTML += "<p><a href='#' onclick=\"vehicleDetails('" + person.url.replace("http", "https") + "')\">" + person.name + "</a></p>";
        })
        if(text.previous){
            container.innerHTML += "<button onclick=\"loadVehicles('" + text.previous.replace("http", "https") + "')\" id='previous'>Previous</button>";
        }
        if(text.previous && text.next){
            container.innerHTML += "<span>&nbsp;|&nbsp;</span>";
        }
        if(text.next){
            container.innerHTML += "<button onclick=\"loadVehicles('" + text.next.replace("http", "https") + "')\" id='next'>Next</button>";
        }
        
        container.innerHTML += "<br><br><button onclick=\"initialize('https://swapi.dev/api/')\">Home</button>";
    })
    .catch( error => console.log('There was an error:', error));
}

function loadStarships(apiURL){
    if(!apiURL){
        apiURL = 'https://swapi.dev/api/people/';
    }
    fetch(apiURL).then( response => {
        container.innerHTML = '<p>Waiting for response...</p>';
        if(response.ok) {
            return response;
        }
        throw Error(response.statusText);
        })
    .then( response => response.json() )
    .then( text => {
        container.innerHTML = "";
        text.results.forEach(person => {
            container.innerHTML += "<p><a href='#' onclick=\"starshipDetails('" + person.url.replace("http", "https") + "')\">" + person.name + "</a></p>";
        })
        if(text.previous){
            container.innerHTML += "<button onclick=\"loadStarships('" + text.previous.replace("http", "https") + "')\" id='previous'>Previous</button>";
        }
        if(text.previous && text.next){
            container.innerHTML += "<span>&nbsp;|&nbsp;</span>";
        }
        if(text.next){
            container.innerHTML += "<button onclick=\"loadStarships('" + text.next.replace("http", "https") + "')\" id='next'>Next</button>";
        }
        
        container.innerHTML += "<br><br><button onclick=\"initialize('https://swapi.dev/api/')\">Home</button>";
    })
    .catch( error => console.log('There was an error:', error));
}

function loadFavorites(){
    container.innerHTML = "";
    Object.keys(storage).forEach(k => {
        var str = k.substring(0,1).toUpperCase() + k.substring(1,k.length);
        container.innerHTML += "<h1>" + str + "</h1>";
        Array.from(JSON.parse(storage[k])).forEach(link => {
            switch(k){
                case 'people':
                    var str = "person";
                break;
                
                case 'films':
                    var str = "film";
                break;
                
                case 'species':
                    var str = "species";
                break;
                
                case 'vehicles':
                    var str = "vehicle";
                break;
                
                case 'planets':
                    var str = "planet";
                break;
                
                case 'starships':
                    var str = "starship";
                break;
            }
            container.innerHTML += "<p><a href=\"#\" onclick=\"" + str + "Details('" + link[1] + "')\">" + link[0] + "</a></p>";
        })
    });
}

function navigate(url, action){
    switch(action){
        case 'people':
            loadPeople(url);
        break;

        case 'planets':
            loadPlanets(url);
        break;

        case 'films':
            loadFilms(url);
        break;

        case 'species':
            loadSpecies(url);
        break;

        case 'vehicles':
            loadVehicles(url);
        break;

        case 'starships':
            loadStarships(url);
        break;
    }
}


function initialize(apiURL){
    if(!apiURL){
        apiURL = 'https://swapi.dev/api/';
    }
    fetch(apiURL).then( response => {
        container.innerHTML = '<p>Waiting for response...</p>';
        if(response.ok) {
            return response;
        }
        throw Error(response.statusText);
        })
    .then( response => response.json() )
    .then( text => {
        container.innerHTML = "";
        for (const [key, value] of Object.entries(text)) {
            container.innerHTML += "<p><a href='#' onclick=\"navigate('" + value.replace("http", "https") + "', '" + key + "')\">" + key.charAt(0).toUpperCase() + key.slice(1) + "</a></p>";
          }
          if(storage.length > 0){
          container.innerHTML += "<p><a href='#' onclick=\"loadFavorites()\">Favorites</a></p>";
          }
    })
    .catch( error => console.log('There was an error:', error));
}

function personDetails(apiURL){
    if(!apiURL){
        apiURL = 'https://swapi.dev/api/people/';
    }
    fetch(apiURL).then( response => {
        container.innerHTML = '<p>Waiting for response...</p>';
        if(response.ok) {
            return response;
        }
        throw Error(response.statusText);
        })
    .then( response => response.json() )
    .then( person => {
        container.innerHTML = "";
            container.innerHTML += "<h1>" + person.name + "</h1>";
            container.innerHTML += "<p>Gender: " + person.gender + "</p>";
            container.innerHTML += "<p>Height: " + person.height + "</p>";
            container.innerHTML += "<p>Mass: " + person.mass + "</p>";
            container.innerHTML += "<p>Hair Color: " + person.hair_color + "</p>";
            container.innerHTML += "<p>Eye Color: " + person.eye_color + "</p>";
            container.innerHTML += "<p>Birth Year: " + person.birth_year + "</p>";
            container.innerHTML += "<button onclick=\"loadPeople('https://swapi.dev/api/people/')\">Back</button>";
            if(typeof storage.getItem("people") != "undefined" && storage.getItem("people").indexOf(person.name) != -1){
                container.innerHTML += "<p>One of your favorites</p>";
            } else{
            container.innerHTML += "<br><br><button onclick='saveFavorite(\"people\", \"" + person.name + "\", \"" + apiURL + "\")'>Add to favorites</button>";
            }

    })
    .catch( error => console.log('There was an error:', error));
    document.body.appendChild(container);
}

function planetDetails(apiURL){
    if(!apiURL){
        apiURL = 'https://swapi.dev/api/people/';
    }
    fetch(apiURL).then( response => {
        container.innerHTML = '<p>Waiting for response...</p>';
        if(response.ok) {
            return response;
        }
        throw Error(response.statusText);
        })
    .then( response => response.json() )
    .then( planet => {
        container.innerHTML = "";
        container.innerHTML += "<h1>" + planet.name + "</h1>";
        container.innerHTML += "<p>Climate: " + planet.climate + "</p>";
        container.innerHTML += "<p>Diameter: " + planet.diameter + "</p>";
        if(planet.films.length > 0){
            container.innerHTML += "<a href='#' onclick=\"getFilms('" + planet.films + "')\">View Films</a>";
        }
        container.innerHTML += "<p>Gravity: " + planet.gravity + "</p>";
        container.innerHTML += "<p>Orbital Period: " + planet.orbital_period + "</p>";
        container.innerHTML += "<p>Population: " + planet.population + "</p>";
        if(planet.residents.length > 0){
            container.innerHTML += "<a href='#' onclick=\"getPeople('" + planet.residents + "')\">View Residents</a>";
        }
        container.innerHTML += "<p>Rotation Period: " + planet.rotation_period + "</p>";
        container.innerHTML += "<p>Surface Water: " + planet.surface_water + "</p>";
        container.innerHTML += "<p>Terrain: " + planet.terrain + "</p>";
        container.innerHTML += "<button onclick=\"loadPlanets('https://swapi.dev/api/planets/')\">Back</button>";
        if(typeof storage.getItem("planets") != "undefined" && storage.getItem("planets").indexOf(planet.name) != -1){
            container.innerHTML += "<p>One of your favorites</p>";
        } else{
        container.innerHTML += "<br><br><button onclick='saveFavorite(\"planets\", \"" + planet.name + "\", \"" + apiURL + "\")'>Add to favorites</button>";
        }
    })
    .catch( error => console.log('There was an error:', error));
    document.body.appendChild(container);
}

function filmDetails(apiURL){
    if(!apiURL){
        apiURL = 'https://swapi.dev/api/people/';
    }
    fetch(apiURL).then( response => {
        container.innerHTML = '<p>Waiting for response...</p>';
        if(response.ok) {
            return response;
        }
        throw Error(response.statusText);
        })
    .then( response => response.json() )
    .then( film => {
        container.innerHTML = "";
        container.innerHTML += "<h1>" + film.title + "</h1>";
        if(film.characters.length > 0){
            container.innerHTML += "<a href='#' onclick=\"getPeople('" + film.characters + "')\">View Characters</a>";
        }
        container.innerHTML += "<p>Director: " + film.director + "</p>";
        container.innerHTML += "<p>Opening Crawl:<br>" + nl2br(film.opening_crawl, false) + "</p>";
        container.innerHTML += "<p>Producer: " + film.producer + "</p>";
        var d = new Date(film.release_date);
        var date = d.getDate()  + " " + monthNames[d.getMonth()] + ", " + d.getFullYear(); 
        container.innerHTML += "<p>Release Date: " + date + "</p>";
        if(film.species.length > 0){
            container.innerHTML += "<p><a href='#' onclick=\"getSpecies('" + film.species + "')\">View Species</a></p>";
        }
        if(film.starships.length > 0){
            container.innerHTML += "<p><a href='#' onclick=\"getStarships('" + film.starships + "')\">View Starships</a></p>";
        }
        if(film.vehicles.length > 0){
            container.innerHTML += "<p><a href='#' onclick=\"getVehicles('" + film.vehicles + "')\">View Vehicles</a></p>";
        }
        container.innerHTML += "<button onclick=\"loadFilms('https://swapi.dev/api/films/')\">Back</button>";
        if(typeof storage.getItem("films") != "undefined" && storage.getItem("films").indexOf(film.title) != -1){
            container.innerHTML += "<p>One of your favorites</p>";
        } else{
        container.innerHTML += "<br><br><button onclick='saveFavorite(\"films\", \"" + film.title + "\", \"" + apiURL + "\")'>Add to favorites</button>";
        }
    })
    .catch( error => console.log('There was an error:', error));
    document.body.appendChild(container);
}

function speciesDetails(apiURL){
    if(!apiURL){
        apiURL = 'https://swapi.dev/api/people/';
    }
    fetch(apiURL).then( response => {
        container.innerHTML = '<p>Waiting for response...</p>';
        if(response.ok) {
            return response;
        }
        throw Error(response.statusText);
        })
    .then( response => response.json() )
    .then( species => {
        container.innerHTML = "";
        container.innerHTML += "<h1>" + species.name + "</h1>";
        container.innerHTML += "<p>Average Height: " + species.average_height + "</p>";
        container.innerHTML += "<p>Average Lifespan: " + species.average_lifespan + "</p>";
        container.innerHTML += "<p>Classification: " + species.classification + "</p>";
        container.innerHTML += "<p>Designation: " + species.designation + "</p>";
        container.innerHTML += "<p>Eye Colors: " + species.eye_colors + "</p>";
        if(species.films.length > 0){
            container.innerHTML += "<p><a href='#' onclick=\"getFilms('" + species.films + "')\">View Films</a></p>";
        }
        container.innerHTML += "<p>Hair Colors: " + species.hair_colors + "</p>";
        container.innerHTML += "<p>Language: " + species.language + "</p>";
        if(species.people.length > 0){
            container.innerHTML += "<p><a href='#' onclick=\"getPeople('" + species.people + "')\">View People</a></p>";
        }
        container.innerHTML += "<p>Skin Colors: " + species.skin_colors + "</p>";
        container.innerHTML += "<button onclick=\"loadSpecies('https://swapi.dev/api/species/')\">Back</button>";
        if(typeof storage.getItem("species") != "undefined" && storage.getItem("species").indexOf(species.name) != -1){
            container.innerHTML += "<p>One of your favorites</p>";
        } else{
        container.innerHTML += "<br><br><button onclick='saveFavorite(\"species\", \"" + species.name + "\", \"" + apiURL + "\")'>Add to favorites</button>";
        }
    })
    .catch( error => console.log('There was an error:', error));
    document.body.appendChild(container);
}

function vehicleDetails(apiURL){
    if(!apiURL){
        apiURL = 'https://swapi.dev/api/vehicles/';
    }
    fetch(apiURL).then( response => {
        container.innerHTML = '<p>Waiting for response...</p>';
        if(response.ok) {
            return response;
        }
        throw Error(response.statusText);
        })
    .then( response => response.json() )
    .then( vehicle => {
        container.innerHTML = "";
        container.innerHTML += "<h1>" + vehicle.name + "</h1>";
        container.innerHTML += "<p>Cargo Capacity: " + vehicle.cargo_capacity + "</p>";
        container.innerHTML += "<p>Consumables: " + vehicle.consumables + "</p>";
        container.innerHTML += "<p>Cost (In Credits): " + vehicle.cost_in_credits + "</p>";
        container.innerHTML += "<p>Crew: " + vehicle.crew + "</p>";
        if(vehicle.films.length > 0){
            container.innerHTML += "<p><a href='#' onclick=\"getFilms('" + vehicle.films + "')\">View Films</a></p>";
        }
        container.innerHTML += "<p>Length: " + vehicle.length + "</p>";
        container.innerHTML += "<p>manufacturer: " + vehicle.manufacturer + "</p>";
        container.innerHTML += "<p>Max Atmosphering Speed: " + vehicle.max_atmosphering_speed + "</p>";
        container.innerHTML += "<p>Model: " + vehicle.model + "</p>";
        container.innerHTML += "<p>Passengers: " + vehicle.passengers + "</p>";
        if(vehicle.pilots.length > 0){
            container.innerHTML += "<p><a href='#' onclick=\"getPeople('" + vehicle.pilots + "')\">View People</a></p>";
        }
        container.innerHTML += "<p>Vehicle Class: " + vehicle.vehicle_class + "</p>";
        container.innerHTML += "<button onclick=\"loadVehicles('https://swapi.dev/api/vehicles/')\">Back</button>";
        if(typeof storage.getItem("vehicles") != "undefined" && storage.getItem("vehicles").indexOf(vehicle.name) != -1){
            container.innerHTML += "<p>One of your favorites</p>";
        } else{
        container.innerHTML += "<br><br><button onclick='saveFavorite(\"vehicles\", \"" + vehicle.name + "\", \"" + apiURL + "\")'>Add to favorites</button>";
        }

    })
    .catch( error => console.log('There was an error:', error));
    document.body.appendChild(container);
}

function starshipDetails(apiURL){
    if(!apiURL){
        apiURL = 'https://swapi.dev/api/starships/';
    }
    fetch(apiURL).then( response => {
        container.innerHTML = '<p>Waiting for response...</p>';
        if(response.ok) {
            return response;
        }
        throw Error(response.statusText);
        })
    .then( response => response.json() )
    .then( starship => {
        container.innerHTML = "";
        container.innerHTML += "<h1>" + starship.name + "</h1>";
        container.innerHTML += "<p style='cursor: help;' title='The Maximum number of Megalights this starship can travel in a standard hour. A \"Megalight\" is a standard unit of distance and has never been defined before within the Star Wars universe. This figure is only really useful for measuring the difference in speed of starships. We can assume it is similar to AU, the distance between our Sun (Sol) and Earth'>MGLT: " + starship.MGLT + "</p>";
        container.innerHTML += "<p>Cargo Capacity: " + starship.cargo_capacity + "</p>";
        container.innerHTML += "<p>Consumables: " + starship.consumables + "</p>";
        container.innerHTML += "<p>Cost (In Credits): " + starship.cost_in_credits + "</p>";
        container.innerHTML += "<p>Crew: " + starship.crew + "</p>";
        if(starship.films.length > 0){
            container.innerHTML += "<p><a href='#' onclick=\"getFilms('" + starship.films + "')\">View Films</a></p>";
        }
        container.innerHTML += "<p>Hyperdrive Rating: " + starship.hyperdrive_rating + "</p>";
        container.innerHTML += "<p>Manufacturer: " + starship.manufacturer + "</p>";
        container.innerHTML += "<p>Max Atmosphering Speed: " + starship.max_atmosphering_speed + "</p>";
        container.innerHTML += "<p>Model: " + starship.model + "</p>";
        container.innerHTML += "<p>Passengers: " + starship.passengers + "</p>";
        if(starship.pilots.length > 0){
            container.innerHTML += "<p><a href='#' onclick=\"getPeople('" + starship.pilots + "')\">View Pilots</a></p>";
        }
        container.innerHTML += "<p>Starship Class: " + starship.starship_class + "</p>";
        container.innerHTML += "<button onclick=\"loadStarships('https://swapi.dev/api/starships/')\">Back</button>";
        if(typeof storage.getItem("starships") != "undefined" && storage.getItem("starships").indexOf(starship.name) != -1){
            container.innerHTML += "<p>One of your favorites</p>";
        } else{
        container.innerHTML += "<br><br><button onclick='saveFavorite(\"starships\", \"" + starship.name + "\", \"" + apiURL + "\")'>Add to favorites</button>";
        }

    })
    .catch( error => console.log('There was an error:', error));
    document.body.appendChild(container);
}

function getPeople(urls){
    container.innerHTML = "";
    urls.split(",").forEach(apiURL => {
        if(apiURL.indexOf('https') == -1){
            apiURL = apiURL.replace("http", "https");
        }
    fetch(apiURL).then( response => {
        if(response.ok) {
            return response;
        }
        throw Error(response.statusText);
        })
    .then( response => response.json() )
    .then( person => {
        container.innerHTML += "<p><a href='#' onclick='personDetails(\"" + apiURL + "\")'>" + person.name + "</a></p>";
    })
    .catch( error => console.log('There was an error:', error));
    document.body.appendChild(container);
});
}

function getFilms(urls){
    container.innerHTML = "";
    urls.split(",").forEach(apiURL => {
        if(apiURL.indexOf('https') == -1){
            apiURL = apiURL.replace("http", "https");
        }
    fetch(apiURL).then( response => {
        if(response.ok) {
            return response;
        }
        throw Error(response.statusText);
        })
    .then( response => response.json() )
    .then( film => {
        container.innerHTML += "<p><a href='#' onclick='filmDetails(\"" + apiURL + "\")'>" + film.title + "</a></p>";
    })
    .catch( error => console.log('There was an error:', error));
    document.body.appendChild(container);
});
}

function getSpecies(urls){
    container.innerHTML = "";
    urls.split(",").forEach(apiURL => {
        if(apiURL.indexOf('https') == -1){
            apiURL = apiURL.replace("http", "https");
        }
    fetch(apiURL).then( response => {
        if(response.ok) {
            return response;
        }
        throw Error(response.statusText);
        })
    .then( response => response.json() )
    .then( species => {
        container.innerHTML += "<p><a href='#' onclick='speciesDetails(\"" + apiURL + "\")'>" + species.name + "</a></p>";
    })
    .catch( error => console.log('There was an error:', error));
    document.body.appendChild(container);
});
}

function getStarships(urls){
    container.innerHTML = "";
    urls.split(",").forEach(apiURL => {
        if(apiURL.indexOf('https') == -1){
            apiURL = apiURL.replace("http", "https");
        }
    fetch(apiURL).then( response => {
        if(response.ok) {
            return response;
        }
        throw Error(response.statusText);
        })
    .then( response => response.json() )
    .then( starship => {
        container.innerHTML += "<p><a href='#' onclick='starshipDetails(\"" + apiURL + "\")'>" + starship.name + "</a></p>";
    })
    .catch( error => console.log('There was an error:', error));
    document.body.appendChild(container);
});
}

function getVehicles(urls){
    container.innerHTML = "";
    urls.split(",").forEach(apiURL => {
        if(apiURL.indexOf('https') == -1){
            apiURL = apiURL.replace("http", "https");
        }
    fetch(apiURL).then( response => {
        if(response.ok) {
            return response;
        }
        throw Error(response.statusText);
        })
    .then( response => response.json() )
    .then( vehicle => {
        container.innerHTML += "<p><a href='#' onclick='vehicleDetails(\"" + apiURL + "\")'>" + vehicle.name + "</a></p>";
    })
    .catch( error => console.log('There was an error:', error));
    document.body.appendChild(container);
});
}

var apiURL = 'https://swapi.dev/api/';
window.onload = function(){initialize(apiURL);};

function saveFavorite(type, name, url){
    var arr = [];
    if(!storage.getItem(type)){
        arr.push([name,url]);
        storage.setItem(type, JSON.stringify(arr));
    } else{
        var sType = JSON.parse(storage.getItem(type));
        if(Object.values(sType).indexOf(name) == -1){
            sType.forEach(item => {
                arr.push(item);
            })
            arr.push([name, url]);
            storage.setItem(type, JSON.stringify(arr));
        }
    }
}

