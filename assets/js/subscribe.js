//Toggle subscription options section
function toggleFunction() {
  let opt = document.getElementById("subscribe-opt");
  if (opt.style.display === "block") {
    opt.style.display = "none";
  } else {
    opt.style.display = "block";
  };
};

//Add text to the form textarea
function addtext(content) {
    let text = document.getElementById('formText');
    text.value = content;
}

//Contact form submit (EmailJS)
(function() {
        emailjs.init("user_NsuxEM10gzRq2ybgKv8AY");
        })();

function sendMail(contactForm) {
    $('#contact-btn').prop('disabled', true)
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
            $('#contact-btn').prop('disabled', false)
        },
        function(error) {
            console.log('FAILED', error)
            $('#contact-btn').prop('disabled', false)
        });
        return false;
};
   
//Clean form after submit
 let form = document.getElementById('contact_form')
form.addEventListener('submit', function submitForm (event) {
  event.preventDefault()
  form.reset()
})
