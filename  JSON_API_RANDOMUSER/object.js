const fetchBtn = document.getElementById("fetchBtn");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const userLocation = document.getElementById("userLocation");
const userImage = document.getElementById("userImage");

// Function to fetch data from API
async function fetchUser() {
  try {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const user = data.results[0];

    // Object Destructuring
    const {
      name: { first, last },
      email,
      location: { city, country },
      picture: { large }
    } = user;

    // Update UI
    userName.textContent = `${first} ${last}`;
    userEmail.textContent = email;
    userLocation.textContent = `${city}, ${country}`;
    userImage.src = large;

  } catch (error) {
    console.error("Error fetching user:", error);
    alert("⚠️ Failed to fetch data. Try again!");
  }
}

fetchBtn.addEventListener("click", fetchUser);
