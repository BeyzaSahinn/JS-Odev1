
  let adınız = prompt("Adınızı Giriniz");
  document.getElementById("myName").innerHTML = adınız ;

  const weekday = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

  function showTime() {
  const today = new Date();
  let d = weekday[today.getDay()];
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('myClock').innerHTML =  h + ":" + m + ":" + s + "-" + d;
  setTimeout(showTime, 1000);
  
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
showTime()