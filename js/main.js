console.log("main.js loaded..")

// definicija funkcije; defincija nije isto i poziv i bez poziva ovo se nece dogoditi
function loadImages() {
    const album = document.getElementById("album")
    for (let index = 1; index < 10; index++) {
        const img = document.createElement('img'); // this is same as doing this in HTML: <img src="" alt="">
        // this is same as: img.src = "img/gallery/" + index + ".jpeg"
        img.src = `img/gallery/${index}.jpeg` // this now same as this: <img src="img/gallery/1.jpeg" alt=""> of course 1, 2, 3, etc.
        // TODO: replace line 10 with same thing but using backtits string in JavaScript, which is following character: `
        img.alt = index + ".jpeg"
        album.appendChild(img)
    }
}

function populateAbout() {
    // TODO @stefy
}

function populateContact() {
    // TODO @boka
}

// poziv funkcije koja je prethodno definisana
loadImages()
populateAbout()
populateContact()