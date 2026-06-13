const params = new URLSearchParams(window.location.search);

const result = document.querySelector('#result');

result.innerHTML = `
<p><strong>Name:</strong> ${params.get("name")}</p>
<p><strong>Email:</strong> ${params.get("email")}</p>
<p><strong>Favorite Anime:</strong> ${params.get("anime")}</p>
<p><strong>Favorite Genre:</strong> ${params.get("genre")}</p>
<p><strong>Comments:</strong> ${params.get("comment")}</p>
`