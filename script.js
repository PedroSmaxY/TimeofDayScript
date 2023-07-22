function load() {
  let msg = window.document.querySelector("div#msg");
  let img = window.document.getElementById("imagem");
  let data = new Date();
  let currentHour = data.getHours();
  msg.innerHTML = `It's currently ${currentHour} hour(s).`;
  if (currentHour >= 6 && currentHour < 12) {
    img.src = "morning.png";
    msg.innerHTML += "<p>Good Morning!</p>";
    window.document.body.style.background = "#da955d";
  } else if (currentHour >= 12 && currentHour < 18) {
    img.src = "afternoon.png";
    msg.innerHTML += "<p>Good Afternoon!</p>";
    window.document.body.style.background = "#CA6F0D";
  } else if (currentHour >= 0 && currentHour < 6) {
    img.src = "night.png";
    msg.innerHTML += "<p>Good Dawn!</p>";
    window.document.body.style.background = "#513859";
  } else {
    // Good Night!
    img.src = "night.png";
    msg.innerHTML += "<p>Good Night!</p>";
    window.document.body.style.background = "#513859";
  }
}
