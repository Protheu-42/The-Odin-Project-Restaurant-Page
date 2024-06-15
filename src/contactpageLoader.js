export default function contactpageLoader() {
    const contentDiv = document.querySelector('#content');

    const contactPageDiv = document.createElement('div');
    contactPageDiv.id = 'contact-page';

    // First Div /Info Div
    const infoDiv = document.createElement('div');
    
    const h1ContactUs = document.createElement('h1');
    h1ContactUs.textContent = "Contact Us";

    const h2Address = document.createElement('h2');
    h2Address.textContent = 'Address:';
    const firstAddressP = document.createElement('p');
    firstAddressP.textContent = '123 Andrew Nightfall street';
    const secondAddressP = document.createElement('p');
    secondAddressP.textContent = 'San Mishuno, Highcity 12345';
    const thirdAddressP = document.createElement('p');
    thirdAddressP.textContent = 'Country';

    const h2Phone = document.createElement('h2');
    h2Address.textContent = 'Phone:';
    const phoneP = document.createElement('p');
    phoneP.textContent = 'xxxx-xxxx';

    const h2HoursOfOperation = document.createElement('h2');
    h2HoursOfOperation.textContent = 'Hours of Operation:';
    const firstHoursOfOperationP = document.createElement('p');
    firstHoursOfOperationP.textContent = 'Monday - Friday: 10am - 8pm';
    const secondHoursOfOperationP = document.createElement('p');
    secondHoursOfOperationP.textContent = 'Saturday: 12pm - 10pm';
    const thirdHoursOfOperationP = document.createElement('p');
    thirdHoursOfOperationP.textContent = 'Sunday: 12pm - 6pm';

    const formContainer = document.createElement('form');
    const h2GetInTouch = document.createElement('h2');
    h2GetInTouch.textContent = 'Get in Touch:';
    const formP = document.createElement('p');
    formP.textContent = "Have a question, comment, or just want to say hello? Fill out the form below and we'll get back to you as soon as possible.";
    const formTextArea = document.createElement('textarea');
    formTextArea.setAttribute('placeholder', 'Type here your message');
    const formButton = document.createElement('button');
    formButton.setAttribute('type', 'button');
    formButton.textContent = 'Send';


    // Appending Section
    contentDiv.appendChild(contactPageDiv);
    contactPageDiv.appendChild(infoDiv);
    infoDiv.appendChild(h1ContactUs);
    infoDiv.appendChild(h2Address);
    infoDiv.appendChild(firstAddressP);
    infoDiv.appendChild(secondAddressP);
    infoDiv.appendChild(thirdAddressP);
    infoDiv.appendChild(h2Phone);
    infoDiv.appendChild(phoneP);
    infoDiv.appendChild(h2HoursOfOperation);
    infoDiv.appendChild(firstHoursOfOperationP);
    infoDiv.appendChild(secondHoursOfOperationP);
    infoDiv.appendChild(thirdHoursOfOperationP);

    contactPageDiv.appendChild(formContainer);
    formContainer.appendChild(h2GetInTouch);
    formContainer.appendChild(formP);
    formContainer.appendChild(formTextArea);
    formContainer.appendChild(formButton);
}