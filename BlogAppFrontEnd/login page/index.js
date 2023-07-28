const signup = document.querySelector('.t-signup'),
            signin = document.querySelector('.t-signin'),
            addclass = document.querySelector('.site');
        signin.addEventListener('click', function () {
            addclass.className = 'site signup-show';
        })
        signup.addEventListener('click', function () {
            addclass.className = 'site signin-show';
        })

// Login check

document.getElementById("LoginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting and page reload
  
    // Get user input
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Your validation logic (you can customize this according to your requirements)
    if (email === "bot@xyz.com" && password === "bot@123") {
      // Login successful, grant access (you can redirect the user to a new page here)
      alert("Login successful!");
      window.location.href = "../Main Page/index.html"; // Replace 'main_page.html' with the actual URL of your main page
    } else {
      // Login failed, display an error message
      alert("Invalid Email or Password. Please try again.");
    }
  });

//sign up

document.getElementById("SignUpForm").addEventListener("submit", async function (event) {
  event.preventDefault();

  const fullname = document.getElementById("fullname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const re_password = document.getElementById("re_password").value;

  // Basic client-side validation (you can customize this according to your requirements)
  if (fullname === "" || email === "" || password === "" || re_password === "") {
    alert("Please fill in all fields.");
    return;
  }

  // You can send the registration data to the server for further processing and database insertion
  // For this example, we'll just display a success message.
  if(password === re_password ){
  alert("Registration successful!");
  window.location.href = "../Main Page/index.html"; // Replace 'main_page.html' with the actual URL of your main page
  }
  else {
    alert("Check your password and re-password it's not match")
  }
});
