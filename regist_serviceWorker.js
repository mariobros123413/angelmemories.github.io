if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./Service_Worker.js')
        .then()
        .catch()
}

/* tambien se puede registrar el servi WORKER de esta manera
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("./Service_Worker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
} */