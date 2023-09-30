function showHome() {
    document.getElementById('home').style.display = 'block'
    document.getElementById('about').style.display = 'none'
    document.getElementById('services').style.display = 'none'
    document.getElementById('my-project').style.display = 'none'
    document.getElementById('contact').style.display = 'none'
}

function showAbout() {
    document.getElementById('about').style.display = 'flex'
    document.getElementById('home').style.display = 'none'
    document.getElementById('services').style.display = 'none'
    document.getElementById('my-project').style.display = 'none'
    document.getElementById('contact').style.display = 'none'
}

function showServices() {
    document.getElementById('services').style.display = 'flex'
    document.getElementById('about').style.display = 'none'
    document.getElementById('home').style.display = 'none'
    document.getElementById('my-project').style.display = 'none'
    document.getElementById('contact').style.display = 'none'
}

function showMyProject() {
    document.getElementById('my-project').style.display = 'flex'
    document.getElementById('about').style.display = 'none'
    document.getElementById('services').style.display = 'none'
    document.getElementById('home').style.display = 'none'
    document.getElementById('contact').style.display = 'none'
}

function showContact() {
    document.getElementById('contact').style.display = 'flex'
    document.getElementById('about').style.display = 'none'
    document.getElementById('services').style.display = 'none'
    document.getElementById('my-project').style.display = 'none'
    document.getElementById('home').style.display = 'none'
}