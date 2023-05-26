window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    preloader.style.display = "none";
  });
  
function sendMail(event) {
    event.preventDefault();

    var params = {
        from_name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        number: document.getElementById("number").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_pt1niq3", "template_e2unq0a", params)
        .then(function (res) {
            alert("Success! " + res.status);
        })
        .catch(function (error) {
            alert("Error occurred while sending the email: " + error);
        });
}

const form = document.getElementById("contactForm");
form.addEventListener("submit", sendMail);

function downloadCV() {
    var cvUrl = 'https://drive.google.com/file/d/16qWnXLn2o3_fL8x2-oemdi84u1VE0soo/view?usp=drive_link';
  
    // Create a hidden anchor element
    var anchorElement = document.createElement('a');
    anchorElement.href = cvUrl;
    anchorElement.download = 'Vishnu cv.pdf';
  
    // Trigger the click event on the anchor element
    anchorElement.click();
  }
  
  // Attach the downloadCV function to a button or any other trigger element
  var downloadButton = document.getElementById('CV');
  downloadButton.addEventListener('click', downloadCV);
  

let menuicon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuicon.onclick = () => {
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}
let sections = document.querySelectorAll('section')
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navlinks.forEach(links => { 
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    menuicon.classList.remove('bx-x');
    menuicon.classList.remove('active');

}

    ScrollReveal({ 
        // reset: true,
        distance: '80px',
        duration : 2000,
        delay  : 200 
    });
    ScrollReveal().reveal('.home-content, .heading', { origin : 'top' });
    ScrollReveal().reveal('.home-img, .services-container , .portfolio-box, .contact form', { origin : 'bottom' });
    ScrollReveal().reveal('.home-content h1, .about-img', { origin : 'left' });
    ScrollReveal().reveal('.home-content p, .about-content', { origin : 'right' });

    
    const typed = new Typed('.multiple-text', {
        strings : ['Frontend Developer','Backend Developer','Full Stack Developer'],
        typeSpeed : 100,
        backSpeed : 100,
        backDelay : 1000,
        loop : true
    })

    