function sendMail(contactForm) {
    var templateParams = {
        "from_name": 'rosie',
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    }
    emailjs.send('gmail', 'rosie', templateParams).then(
        (response) => {
            console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
            console.log('FAILED...', error);
        },
    );
    return false;
}

