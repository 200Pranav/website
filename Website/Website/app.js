function searchPictures() {
    const categoryInput = document.getElementById('categoryInput').value;
    const gallery = document.getElementById('gallery');
    
    // Use the Unsplash API to fetch pictures based on the categoryInput
    // Replace 'YOUR_UNSPLASH_API_KEY' with your actual API key
    const apiKey = 'F7xssdKrySLw2PfvhzrLebHF3zQwCMGzSdEkwnR7TiI';
    const apiUrl = `https://api.unsplash.com/photos/random?query=${categoryInput}&count=9&client_id=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            gallery.innerHTML = ''; // Clear previous results

            data.forEach(photo => {
                const pictureElement = createPictureElement(photo);
                gallery.appendChild(pictureElement);
            });
        })
        .catch(error => console.error('Error fetching pictures:', error));
}

function createPictureElement(photo) {
    const pictureDiv = document.createElement('div');
    pictureDiv.classList.add('picture');

    const imgElement = document.createElement('img');
    imgElement.src = photo.urls.regular;
    imgElement.alt = photo.alt_description;

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('picture-info');
    infoDiv.innerHTML = `<p>By: ${photo.user.name}</p>
                        <p>${photo.description}</p>
                        <a href="${photo.links.html}" target="_blank">View on Unsplash</a>`;

    pictureDiv.appendChild(imgElement);
    pictureDiv.appendChild(infoDiv);

    return pictureDiv;
}
