function message(typeOfMessage = "successfull", message = "") {
  return `<div class="alert-message ${typeOfMessage}">${message}</div>`;
}
