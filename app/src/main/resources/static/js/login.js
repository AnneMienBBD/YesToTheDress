// LOADING SCREEN --------------------------------------------------
const loadingSection = document.getElementById("loadingScreen");
function displayLoadingScreen() {
  errorText.classList.add("hidden-text");
  loadingSection.classList.add("display");
}
function hideLoadingScreen() {
  loadingSection.classList.remove("display");
}
hideLoadingScreen();
// END OF LOADING SCREEN -------------------------------------------

const loginForm = document.getElementById("loginForm");
const errorText = document.getElementById("errorText");
const userName = document.getElementById("username");
const userPassword = document.getElementById("password");

async function login(event) {
  displayLoadingScreen();
  event.preventDefault(); // Prevent form submission from reloading the page'

  if (userName.value == "" || userPassword.value == "") {
    errorText.innerText = "Please fill in both fields.";
    errorText.classList.remove("hidden-text");
    hideLoadingScreen();
    return;
  }
  const username = userName.value;
  const password = userPassword.value;
 
  let authenticationData = {
      Username: username,
      Password: password,
  };

  var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

  let userData = {
      Username: authenticationData.Username,
      Pool: userPool
  };

  let cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

  cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: async function (session) {
      const accessToken = session.getAccessToken().getJwtToken();
      const idToken = session.getIdToken().getJwtToken();
      const refreshToken = session.getRefreshToken().getToken();
      localStorage.setItem('jwt',accessToken)
      console.log('Authentication successful!', session);
        // Use the access token to make authenticated API requests.
        // For example, using Fetch API:
        // const response = await fetch('/home', {
        //     headers: {
        //           Authorization: 'Bearer ' + accessToken
        //       }
        //   })
        //   .then(response => response.json())
        //   .then(data => console.log(data))
        //   .catch(error => console.error(error));
        // window.location.href = response.url;
      },
      onFailure: function (err) {
          console.error("Authentication failed:", err);
      },
      newPasswordRequired: function (userAttributes, requiredAttributes) {
          console.log("New password required");
      }
  });

  // ----------------------------------------------------------------------------
  /* ADD LOGIN API CALL HERE
  This is a node example:
  const result = await fetch("/Login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
  });
  const response = await result.json();
  if (response.error) {
    errorText.innerText = response.error;
    hideLoadingScreen();
  } else {
    sessionStorage.setItem("accessToken", response.token);
    errorText.innerText = "Successful login";
    window.location.href = "/Home";
  }*/
  // ----------------------------------------------------------------------------
}

loginForm.addEventListener("submit", login);

// const cognitoButton = document.getElementById("cognito-button");
// cognitoButton.addEventListener("click", () => {
//   console.log("COGNITO BUTTON CLICKED");
//   // add cognito link here
// });