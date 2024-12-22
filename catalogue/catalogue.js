const cars = [
    {
      name: "Kia Soul",
      price: "$20,000",
      color: "Red",
      year: "2023",
      mileage: "8,000 miles",
      fuel: "Gasoline"
    },
    {
      name: "Ford Ranger",
      price: "$40,000",
      color: "Silver",
      year: "2023",
      mileage: "12,000 miles",
      fuel: "Diesel"
    },
    {
      name: "Chevrolet Camaro",
      price: "$50,000",
      color: "Black",
      year: "2023",
      mileage: "5,000 miles",
      fuel: "Gasoline"
    },
    {
      name: "BMW M3",
      price: "$70,000",
      color: "White",
      year: "2023",
      mileage: "10,000 miles",
      fuel: "Gasoline"
    },
    {
      name: "Genesis Electrified G80",
      price: "$80,000",
      color: "Silver",
      year: "2024",
      mileage: "0 miles (New)",
      fuel: "Electric"
    },
    {
      name: "Hummer EV SUV 3X",
      price: "$100,000",
      color: "Matte Black",
      year: "2024",
      mileage: "0 miles (New)",
      fuel: "Electric"
    },
    {
      name: "BMW M5",
      price: "$120,000",
      color: "Black",
      year: "2023",
      mileage: "500 miles (Pre-owned)",
      fuel: "Gasoline"
    },
    {
      name: "Aston Martin Vantage",
      price: "$150,000",
      color: "White",
      year: "2023",
      mileage: "0 miles (New)",
      fuel: "Gasoline"
    },
    {
      name: "Audi R8 V10 Plus",
      price: "$180,000",
      color: "Mythos Black Metallic",
      year: "2024",
      mileage: "0 miles (New)",
      fuel: "Gasoline"
    },
    {
      name: "Lamborghini Huracan",
      price: "$200,000",
      color: "Yellow",
      year: "2023",
      mileage: "0 miles (New)",
      fuel: "Gasoline"
    }
  ];
  
  let currentCarIndex = 0;
  
  function displayCar() {
    const car = cars[currentCarIndex];
    document.getElementById("car-name").innerText = car.name;
    document.getElementById("car-price").innerText = car.price;
    document.getElementById("car-color").innerText = car.color;
    document.getElementById("car-year").innerText = car.year;
    document.getElementById("car-mileage").innerText = car.mileage;
    document.getElementById("car-fuel").innerText = car.fuel;
  
    // Update comparison table
    const tableBody = document.querySelector("#comparison-table tbody");
    tableBody.innerHTML = '';
    cars.forEach((car) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${car.name}</td>
        <td>${car.price}</td>
        <td>${car.year}</td>
        <td>${car.fuel}</td>
      `;
      tableBody.appendChild(row);
    });
  }
  
  function goPrev() {
    currentCarIndex = (currentCarIndex === 0) ? cars.length - 1 : currentCarIndex - 1;
    displayCar();
  }
  
  function goNext() {
    currentCarIndex = (currentCarIndex === cars.length - 1) ? 0 : currentCarIndex + 1;
    displayCar();
  }
  
  function bookTestDrive() {
    alert("Test drive booked! We will contact you soon.");
  }
  
  document.getElementById("prev-btn").addEventListener("click", goPrev);
  document.getElementById("next-btn").addEventListener("click", goNext);
  document.getElementById("test-drive-btn").addEventListener("click", bookTestDrive);
  
  // Initial display
  displayCar();