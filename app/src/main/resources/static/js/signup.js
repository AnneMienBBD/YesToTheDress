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

const signupForm = document.getElementById("signupForm");
const btn = document.getElementById("btn")
const errorText = document.getElementById("errorText");
const userName = document.getElementById("username");
const userPassword = document.getElementById("password");
const userEmail = document.getElementById("email");
const loadingLabel = document.getElementById("loadingLabel");

function hasSpecialChars(text) {
  let specialRegex = /[`!@#$%^&*()_\-+=\[\]{};':"\\|,.<>\/?~ ]/;
  return specialRegex.test(text);
}

function hasUppercase(text) {
  let uppercaseRegex = /[A-Z\s]/;
  return uppercaseRegex.test(text);
}

function hasLowercase(text) {
  let lowercaseRegex = /[a-z\s]/;
  return lowercaseRegex.test(text);
}

function hasNumber(text) {
  let numberRegex = /[0-9\s]/;
  return numberRegex.test(text);
}

function testMinLength(text, len) {
  return text.length >= len;
}

function testMaxLength(text, len) {
  return text.length <= len;
}

function showErrorText(text) {
  errorText.classList.remove("hidden-text");
  errorText.innerText = text;
}

async function signup(event) {
  displayLoadingScreen();
  event.preventDefault(); // Prevent form submission from reloading the page

  const username = userName.value;
  const password = userPassword.value;
  const email = userEmail.value;

  if (!username || !password) {
    showErrorText("Please fill in both fields.");
    hideLoadingScreen();
    return;
  }

  if (
    !hasSpecialChars(password) ||
    !hasUppercase(password) ||
    !hasLowercase(password) ||
    !hasNumber(password)
  ) {
    showErrorText(
      "Please ensure your password has at least one lowercase letter, capital letter, number and special character."
    );
    hideLoadingScreen();
    return;
  }

  if (!testMinLength(password, 10)) {
    showErrorText(
      "Please ensure your password is at least 10 characters in length."
    );
    hideLoadingScreen();
    return;
  }

  if (!testMaxLength(password, 255) || !testMaxLength(username, 255)) {
    showErrorText(
      "Please ensure your username and password are less than 255 characters in length."
    );
    hideLoadingScreen();
    return;
  }

  // TODO: email validation

  try {

    const attributeList = [];

    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({ Name: 'email', Value: email }));
    attributeList.push(new AmazonCognitoIdentity.CognitoUserAttribute({ Name: 'preferred_username', Value: username }));
    userPool.signUp(username, password, attributeList, null, async function (err, result) {
      if (err) {
          showErrorText(err.message);
          console.error('Error registering user:', err.message || JSON.stringify(err));
          return;
      }else{

          const response = await fetch('/user', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({username: username})
          });
          console.log("RESPONSE: ", response);
          if (response.status === 201) {
            document.getElementById('signup-container').style.display = 'none';
            document.getElementById('verification-container').style.display = 'flex';
          }
          else {
            showErrorText(
              response.statusText
            );
          }          
      }
      });

  } catch (err) {
      showErrorText(err.message);
      console.error('Sign up error', err);
      alert('Sign up error: ' + err.message);
  }
  hideLoadingScreen();

}

async function verifyAccount(event) {
  displayLoadingScreen();
  event.preventDefault();
  showErrorText("Verification error");
  console.error('Verification error');

  const username = document.getElementById('username').value;
  const verificationCode = document.getElementById('verification-code').value;

  const userData = {
      Username: username,
      Pool: userPool
  };
  try {
    const cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

    cognitoUser.confirmRegistration(verificationCode, true, (err, result) => {
        if (err) {
            showErrorText(err.message);

            console.error('Verification error', err);
            alert('Verification error: ' + err.message);
        } else {
            console.log('Verification successful!', result);
            alert('Verification successful! You can now sign in with your account.');

            // Redirect to a login page or handle sign-in flow as needed
            window.location.href = '/login';
        }
    });
  } catch (err) {
    showErrorText(err.message);
    console.error('Verification error', err);
    alert('Verification error: ' + err.message);
}
}



signupForm.addEventListener("submit", signup);
btn.addEventListener("click", verifyAccount);