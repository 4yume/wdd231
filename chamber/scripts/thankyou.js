/** thankyou.html **/
const myInfo = new URLSearchParams(window.location.search);

document.querySelector('#result').innerHTML = `
<p>Appointment for ${myInfo.get('firstName')} ${myInfo.get('lastName')}</p>
<p>Your Email: ${myInfo.get('email')}</p>
<p>Phone Number: ${myInfo.get('phone')}</p>
<p>Organization: ${myInfo.get('organization')}</p>
<p>Submitted Date: ${myInfo.get('timestamp')}</p>
`;