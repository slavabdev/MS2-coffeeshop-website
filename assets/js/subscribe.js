/*function toggleFunction() {
  let opt = document.getElementById("subscribe-opt");
  if (opt.style.display === "block") {
    opt.style.display = "none";
  } else {
    opt.style.display = "block";
  }
}*/

//toggle subscription options section

$(document).ready(function(){
$('#sub-btn').click(function(){
    $("#subscribe-opt").toggle();
    });
});

//Add text to the form textarea

function addtext(content) {
    let text = document.getElementById('formText');
    text.value+=content;
}

//Contact form submit

function sendMail(contactForm) {
    emailjs.send("service_vd2bbtd","subscription", {
        'message': contactForm.formText.value,
        'from_name': contactForm.name.value,
        'from_email': contactForm.emailaddress.value,
        'from_number': contactForm.phone.value
    })
    .then(
        function(response) {
            console.log('SUCCESS', response)
            alert('YOUR MESSAGE SENT SUCCESSFULY')
        },
        function(error) {
            console.log('FAILED', error)
        });
        return false;
}
   

//Clean form after submit
 let form = document.getElementById('contact_form')
form.addEventListener('submit', function submitForm (event) {
  event.preventDefault()

  console.table([ ...new FormData(form).entries() ])
  form.reset()
})
