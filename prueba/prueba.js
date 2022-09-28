document.getElementById("element").style.display = "none";

let i = 0;
  function move() {
  if (i == 0) {
    i = 1;
    let elem = document.getElementById("myBar");
    let width = 1;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        document.getElementById("element").style.display = "block";
      }else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}













