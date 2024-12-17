
const form = document.getElementById("meme-form");
const memeContainer = document.getElementById("meme-container");

// Handle Form Submission
form.addEventListener("submit", function (event) {
    event.preventDefault();

    
    const imageUrl = document.getElementById("image-url").value;
    const topText = document.getElementById("top-text").value;
    const bottomText = document.getElementById("bottom-text").value;

    
    if (!imageUrl || !topText || !bottomText) return;

    
    createMeme(imageUrl, topText, bottomText);

    
    form.reset();
});

// Function to create a meme
function createMeme(imageUrl, topText, bottomText) {
    // Create meme container
    const memeDiv = document.createElement("div");
    memeDiv.classList.add("meme");

    
    const img = document.createElement("img");
    img.src = imageUrl;
    img.alt = "Meme Image";

    
    const topTextDiv = document.createElement("div");
    topTextDiv.classList.add("meme-text", "top");
    topTextDiv.innerText = topText;

    
    const bottomTextDiv = document.createElement("div");
    bottomTextDiv.classList.add("meme-text", "bottom");
    bottomTextDiv.innerText = bottomText;

    
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.innerText = "X";

    
    deleteButton.addEventListener("click", function () {
        memeDiv.remove();
    });

    
    memeDiv.appendChild(img);
    memeDiv.appendChild(topTextDiv);
    memeDiv.appendChild(bottomTextDiv);
    memeDiv.appendChild(deleteButton);

    
    memeContainer.appendChild(memeDiv);
}
