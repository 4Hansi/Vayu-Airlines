//Login and Sign Up

const nationalities = [
    "Indian",
    "Afghan",
    "Albanian",
    "Algerian",
    "Andorran",
    "Angolan",
    "Argentinian",
    "Armenian",
    "Australian",
    "Austrian",
    "Azerbaijani",
    "Bahamian",
    "Baharaini",
    "Bangaldeshi",
    "Barbadian",
    "Belarusian",
    "Belgian",
    "Belizean",
    "Beninese",
    "Bhutanese",
    "Bolivian",
    "Bosnian",
    "Twasana",
    "Brazilian",
    "Briton",
    "Bruneian",
    "Bulgarian",
    "Burkinese",
    "Burmese",
    "Burundian",
    "Cambodian",
    "Cameroonian",
    "Canadian",
    "Cape Verdean",
    "Chadian",
    "Chiliean",
    "Chinese",
    "Columbian",
    "Congolese",
    "Costa Rican",
    "Croatian",
    "Cuban",
    "Cypriot",
    "Czech",
    "Dane",
    "Djiboutian",
    "Dominican",
    "Ecudaorean",
    "Egyptian",
    "Salvadorean",
    "English",
    "Eritrean",
    "Estonian",
    "Ethiopian",
    "Fijian",
    "Finn",
    "French",
    "Gabonese",
    "Gambian",
    "Georgian",
    "German",
    "Ghanaian",
    "Greek",
    "Grenadian",
    "Guatemalan",
    "Guinean",
    "Gyuanaese",
    "Haitian",
    "Dutch",
    "Honduran",
    "Hungarian",
    "Icelander",
    "Indonesian",
    "Iranian",
    "Iraqi",
    "Irish",
    "Italian",
    "Jamaican",
    "Japanese",
    "Jordanian",
    "Kazakh",
    "Kenyan",
    "Kuwaiti",
    "Laotian",
    "Latvian",
    "Lebanese",
    "Liberian",
    "Liechtensteiner",
    "Lithuanian",
    "Luxembourger",
    "Malagasy",
    "Malawian",
    "Malaysian",
    "Maldivian",
    "Malian",
    "Maltese",
    "Mauritanian",
    "Mauritian",
    "Mexican",
    "Moldovan",
    "Monacan",
    "Mongolian",
    "Montenegrin",
    "Moroccan",
    "Mozambican",
    "Namibian",
    "Nepalese",
    "New Zealander",
    "Nicaraguan",
    "Nigerien",
    "Nigerian",
    "North Korean",
    "Norwegian",
    "Omani",
    "Pakistani",
    "Panamanian",
    "Papua New Guinean",
    "Paraguayan",
    "Peruvian",
    "Filipino / Filipina",
    "Pole",
    "Portuguese",
    "Qatari",
    "Romanian",
    "Russian",
    "Rwandan",
    "Saudi",
    "Scot",
    "Senegalese",
    "Serbian",
    "Seychellois",
    "Sierra Leonian",
    "Singaporean",
    "Slovak",
    "Sloveanian",
    "Solomon Islander",
    "Somali",
    "South African",
    "South Korean",
    "Spaniard",
    "Sri Lankan",
    "Sudanese",
    "Surinamer",
    "Swazi",
    "Swede",
    "Swiss",
    "Syrian",
    "Taiwanese",
    "Tajik",
    "Tanzanian",
    "Thai",
    "Togolese",
    "Trinidadian",
    "Tunisian",
    "Turk",
    "Turkmen",
    "Tuvaluan",
    "Ugandan",
    "Ukranian",
    "Emirati",
    "US Citizen",
    "Uruguayan",
    "Uzbek",
    "Vanatuan",
    "Venezualan",
    "Vietnamese",
    "Welsh",
    "Western Samoan",
    "Yemeni",
    "Yugoslav",
    "Zairean",
    "Zambian",
    "Zimbabwean"
]

const dropdown = document.getElementById("nationality");
nationalities.forEach(nation => 
    {
        const option = document.createElement("option");
        option.value = nation;
        option.textContent = nation;
        dropdown.appendChild(option);
    }
);

function validateLoginForm()
{
    const phoneInput = document.getElementById("phonein");
    const passwordInput = document.getElementById("passwordin");

    if (!phoneInput.value || !passwordInput.value)
    {
        alert("Please fill in both your phone number and OTP");
        return false;
    }
    return true;
}

function validateSignUpForm()
{
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const dob = document.getElementById("dob").value;

    if (!firstName || !lastName || !email || !phone || !dob) 
    {
        alert("Please fill in all the required fields.");
        return false;
    }
    return true;
}

document.querySelector("form[action='#']").addEventListener("submit", function(event) 
{
    const formId = event.target.id;

    if (formId === "loginForm" && !validateLoginForm()) 
    {
        event.preventDefault(); // Prevent form submission if validation fails
    }

    if (formId === "signUpForm" && !validateSignUpForm()) 
    {
        event.preventDefault();
    }
});

document.getElementById('flight-form').addEventListener('submit', function(event) 
{
    event.preventDefault();

    // Get form values
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const passengers = document.getElementById('passengers').value;
    const flightClass = document.getElementById('class').value;

    // Simulate flight search (replace with actual API call)
    const flights = [
        {
            departure: departure,
            destination: destination,
            date: date,
            time: '08:00 AM',
            class: flightClass,
            price: 200 * passengers,
            airline: 'Airline A'
        },
        {
            departure: departure,
            destination: destination,
            date: date,
            time: '12:00 PM',
            class: flightClass,
            price: 350 * passengers,
            airline: 'Airline B'
        },
        {
            departure: departure,
            destination: destination,
            date: date,
            time: '05:00 PM',
            class: flightClass,
            price: 275 * passengers,
            airline: 'Airline C'
        }
    ];

    // Display results
    const resultsSection = document.getElementById('search-results');
    resultsSection.style.display = 'block';
    const flightsList = document.getElementById('flights-list');
    flightsList.innerHTML = ''; // Clear previous results

    if (flights.length === 0) 
    {
        flightsList.innerHTML = '<li>No flights found matching your criteria.</li>';
    } 
    else
    {
        flights.forEach(flight => 
            {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <strong>Airline:</strong> ${flight.airline}<br>
                    <strong>Departure:</strong> ${flight.departure}<br>
                    <strong>Destination:</strong> ${flight.destination}<br>
                    <strong>Date:</strong> ${flight.date}<br>
                    <strong>Time:</strong> ${flight.time}<br>
                    <strong>Class:</strong> ${flight.class}<br>
                    <strong>Price:</strong> $${flight.price}
                `;
                flightsList.appendChild(listItem);
            }
        );
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Get booking data from localStorage (or an API)
    let bookings = JSON.parse(localStorage.getItem('bookings')) || [
        { id: 1, departure: 'New Delhi', destination: 'Los Angeles', date: '2025-07-20', passengers: 2, class: 'Economy' },
        { id: 2, departure: 'Chicago', destination: 'Mumbai', date: '2025-07-25', passengers: 1, class: 'Business' }
    ];

    // Get the container where bookings will be displayed
    const bookingList = document.getElementById('booking-list');
    bookingList.innerHTML = '';

    if (bookings.length === 0) {
        bookingList.innerHTML += '<p class="font3">No bookings found.</p>';
    } else {
        bookings.forEach(booking => {
            const bookingItem = document.createElement('div');
            bookingItem.classList.add('booking-item');
            bookingItem.innerHTML = `
                <div class="booking-details">
                    <p class="font3"><strong>Booking ID:</strong> ${booking.id}</p>
                    <p class="font3"><strong>Departure:</strong> ${booking.departure}</p>
                    <p class="font3"><strong>Destination:</strong> ${booking.destination}</p>
                    <p class="font3"><strong>Date:</strong> ${booking.date}</p>
                    <p class="font3"><strong>Passengers:</strong> ${booking.passengers}</p>
                    <p class="font3"><strong>Class:</strong> ${booking.class}</p>
                </div>
                <button class="form-button cancel-button" data-id="${booking.id}">Cancel Booking</button>
            `;
            bookingList.appendChild(bookingItem);
        });

        // Add event listener for cancel buttons
        const cancelButtons = document.querySelectorAll('.cancel-button');
        cancelButtons.forEach(button => {
            button.addEventListener('click', function() {
                const bookingId = parseInt(this.dataset.id);
                cancelBooking(bookingId);
            });
        });
    }

    function cancelBooking(id) 
    {
        bookings = bookings.filter(booking => booking.id !== id);
        localStorage.setItem('bookings', JSON.stringify(bookings));
        renderBookings();
    }

    function renderBookings() {
        bookingList.innerHTML = '';
         if (bookings.length === 0) {
            bookingList.innerHTML += '<p class="font3">No bookings found.</p>';
        } else {
        bookings.forEach(booking => {
            const bookingItem = document.createElement('div');
            bookingItem.classList.add('booking-item');
            bookingItem.innerHTML = `
                <div class="booking-details">
                    <p class="font3"><strong>Booking ID:</strong> ${booking.id}</p>
                    <p class="font3"><strong>Departure:</strong> ${booking.departure}</p>
                    <p class="font3"><strong>Destination:</strong> ${booking.destination}</p>
                    <p class="font3"><strong>Date:</strong> ${booking.date}</p>
                    <p class="font3"><strong>Passengers:</strong> ${booking.passengers}</p>
                    <p class="font3"><strong>Class:</strong> ${booking.class}</p>
                </div>
                <button class="form-button cancel-button" data-id="${booking.id}">Cancel Booking</button>
            `;
            bookingList.appendChild(bookingItem);
        });
         const cancelButtons = document.querySelectorAll('.cancel-button');
        cancelButtons.forEach(button => {
            button.addEventListener('click', function() {
                const bookingId = parseInt(this.dataset.id);
                cancelBooking(bookingId);
            });
        });
    }
}
});

function toggleMenu() {
    const navBar = document.getElementById('nav-bar');
    
    if (window.innerWidth <= 768) {
        navBar.style.display = (navBar.style.display === 'flex') ? 'none' : 'flex';
    }
}

window.addEventListener('resize', function() {
    const navBar = document.getElementById('nav-bar');
    const menuIcon = document.querySelector('.menu-icon');

    if (window.innerWidth > 768) {
        navBar.style.display = 'flex'; // Restore normal navbar
        menuIcon.style.display = 'none'; // Hide hamburger menu
    } else {
        navBar.style.display = 'none'; // Hide navbar initially for small screens
        menuIcon.style.display = 'block'; // Show hamburger menu
    }
});
