document.addEventListener("DOMContentLoaded", function () {
    
    const carListings = document.querySelector(".car-listings");

   
    function sortCars(criteria) {
        const cars = Array.from(carListings.children);

        cars.sort((a, b) => {
            const priceA = parseInt(a.querySelector("p").textContent.replace(/[^0-9]/g, ""));
            const priceB = parseInt(b.querySelector("p").textContent.replace(/[^0-9]/g, ""));

            const yearA = parseInt(a.querySelector(".car-details p:nth-child(3)").textContent.replace("Year: ", ""));
            const yearB = parseInt(b.querySelector(".car-details p:nth-child(3)").textContent.replace("Year: ", ""));

            if (criteria === "priceLowToHigh") return priceA - priceB;
            if (criteria === "priceHighToLow") return priceB - priceA;
            if (criteria === "yearNewToOld") return yearB - yearA;
            if (criteria === "yearOldToNew") return yearA - yearB;
        });

        
        carListings.innerHTML = "";
        cars.forEach((car) => carListings.appendChild(car));
    }

    
    const applyButton = document.getElementById("applySort");
    applyButton.addEventListener("click", function () {
        const dropdown = document.getElementById("sortBy");
        const selectedValue = dropdown.value;
        if (selectedValue !== "default") {
            sortCars(selectedValue);
        }
    });
});
