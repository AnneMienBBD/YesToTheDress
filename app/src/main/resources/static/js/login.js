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
      localStorage.setItem('jwt',accessToken);
        window.location.href = '/home';
      },
      onFailure: function (err) {
          console.error("Authentication failed:", err);
      },
      newPasswordRequired: function (userAttributes, requiredAttributes) {
          console.log("New password required");
      }
  });

}

loginForm.addEventListener("submit", login);
