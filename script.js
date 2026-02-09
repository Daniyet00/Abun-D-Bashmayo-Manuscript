function showEnglish() {
    document.getElementById("english").classList.remove("hidden");
    document.getElementById("transliteration").classList.add("hidden");
    document.getElementById("about").classList.add("hidden");
}

function showTranslit() {
    document.getElementById("transliteration").classList.remove("hidden");
    document.getElementById("english").classList.add("hidden");
    document.getElementById("about").classList.add("hidden");
}

function toggleAbout() {
    document.getElementById("about").classList.remove("hidden");
    document.getElementById("english").classList.add("hidden");
    document.getElementById("transliteration").classList.add("hidden");
}