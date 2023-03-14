console.log("main.js loaded..")
let currentLanguage = "en"

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

    const aboutContentelement = document.getElementById("aboutContent")
    const text = document.createTextNode("idemo do kraja samo jakoooo :)))")
    aboutContentelement.appendChild(text)
}

function populateContact() {
    // TODO @boka
    const info = document.getElementById("info")
    const p = document.createElement("p")
    p.innerHTML = 'Adress: Zimski zmaj 999'
    // info.appendChild(p)

    const p2 = document.createElement("p2")
    p2.innerHTML = 'Adresa: Zimski zmaj 999'

    info.removeChild(info.firstChild)

    if (currentLanguage === "sr") {
        info.appendChild(p2)
    }
    else {
        info.appendChild(p)
    }
}

// poziv funkcije koja je prethodno definisana
loadImages()
populateAbout()
populateContact()

function changeLanguage() {
    // https://ricardometring.com/getting-the-value-of-a-select-in-javascript
    const lan = document.getElementById("language")
    debugger
    currentLanguage = lan.options[lan.selectedIndex].text

    if (currentLanguage === "sr") {
        alert("sr")
    }
    else if (currentLanguage === "en") {
        alert("en")
    }
    else {
        console.log("Unknown language: " + currentLanguage)
    }

    populateAbout()
    populateContact()

}