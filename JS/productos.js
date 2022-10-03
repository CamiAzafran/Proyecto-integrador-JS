function filtroInput() {

    let input, filter, ul, li, span, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("list-products");
    li = ul.getElementsByTagName('li');
  
    for (i = 0; i < li.length; i++) {
      span = li[i].getElementsByTagName("span")[0];
      txtValue = span.textContent || span.innerText;
      
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";

      } else {
        li[i].style.display = "none";
      }
    }
  }
