function toggleFunction() {
  let opt = document.getElementById("subscribe-opt");
  if (opt.style.display === "block") {
    opt.style.display = "none";
  } else {
    opt.style.display = "block";
  }
}


function addtext(content) {
    let text = document.getElementById('form-text');
    text.value+=content;
}

