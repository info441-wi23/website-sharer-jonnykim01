
async function previewUrl(){
    let url = document.getElementById("urlInput").value;
    
    try {
        let preview = await fetch("http://localhost:3000/api/v1/urls/preview?url=" + url)
        preview = await preview.html()
        displayPreviews(preview)
    } catch {
        displayPreviews("Error finding the page: " + url)
    }
}

function displayPreviews(previewHTML){
    document.getElementById("url_previews").innerHTML = previewHTML;
}