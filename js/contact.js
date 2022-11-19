const contactForm = document.querySelector("#contact");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");
const email = document.querySelector("#email");
const topic = document.querySelector("#topic");
const contactMessage = document.querySelector("#contact-message");
const contactFormError = document.querySelector("#contact-error");
const firstNameError = document.querySelector("#first-name-error");
const lastNameError = document.querySelector("#last-name-error");
const emailError = document.querySelector("#email-error");
const topicError = document.querySelector("#topic-error");
const contactMessageError = document.querySelector("#contact-message-error");

function formValidation() {
  event.preventDefault();

  if (checkLength(firstName.value, 6) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  if (checkLength(lastName.value, 6) === true) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }

  if (emailValidation(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(topic.value, 9) === true) {
    topicError.style.display = "none";
  } else {
    topicError.style.display = "block";
  }

  if (checkLength(contactMessage.value, 20) === true) {
    contactMessageError.style.display = "none";
  } else {
    contactMessageError.style.display = "block";
  }
}

contactForm.addEventListener("submit", formValidation);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function emailValidation(email) {
  const regEx = /\S+@\S+\.\S+/;
  const matchingPatterns = regEx.test(email);
  return matchingPatterns;
}
