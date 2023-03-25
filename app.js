document.addEventListener("DOMContentLoaded", (event) => {
  let bipEvent = null;
  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    bipEvent = event;
  });

  document.querySelector("#install-btn").addEventListener("click", (event) => {
    if (bipEvent) {
      bipEvent.prompt();
    } else {
      // incompatible browser, your PWA is not passing the criteria, the user has already installed the PWA
      //TODO: show the user information on how to install the app
      alert(
        "To install the app look for Add to Homescreen or Install in your browser's menu"
      );
    }
  });
});
