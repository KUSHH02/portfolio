let start = 0,
  current = start,
  end = 800,
  duration = 2000,
  speed = (end - start) / duration;

setInterval(() => {
  if (current <= end) {
    current += speed;
    document.getElementById("c1").innerHTML = parseInt(current);
  }
});