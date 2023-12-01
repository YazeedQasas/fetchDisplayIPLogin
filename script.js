window.onload = function() {
    fetch('http://ip-api.com/json')
        .then(response => response.json())
        .then(data => {
            if (data.status === "success") {
                const city = data.city;
                const region = data.regionName;
                const country = data.country;
                const location = `${city}, ${region}, ${country}`;
                const countrylower = `${country}`.toLowerCase();
                document.getElementById("user-location").textContent = `${location}`;

                // Display the country flag from flagcdn.com
                switch(countrylower) {
                case "qatar" : document.getElementById("country-flag").src = `https://cdn.countryflags.com/thumbs/qatar/flag-800.png`;
                break;
                case "saudi arabia" : document.getElementById("country-flag").src = `https://www.countryflags.com/wp-content/uploads/saudi-arabia-flag-png-large.png`;
                break;
    
                default : document.getElementById("country-flag").src = `https://cdn.countryflags.com/thumbs/palestine/flag-800.png`;
                }
            } else {
                document.getElementById("user-location").textContent = "Location data unavailable";
            }
        })
        .catch(error => {
            console.error("Error getting location: " + error.message);
        });
};
