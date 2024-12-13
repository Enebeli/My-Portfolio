const currentYear = new Date().getFullYear();
document.getElementById('my-footer').innerHTML =
 `&copy; ${currentYear} Enebeli Jahswill. All rights reserved.`;

 document.addEventListener("DOMContentLoaded", () => {
   
    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        e.preventDefault(); 

        console.log('hello')

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert("All fields must be filled out!");
            return;
        }

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Your message has been sent!");
        form.reset(); 
    });
});