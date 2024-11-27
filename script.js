const letters = [
    { letter: "ا", sound: "audio/alif.mp3" },   // Alif
    { letter: "ب", sound: "audio/baa.mp3" },    // Baa
    { letter: "ت", sound: "audio/taa.mp3" },    // Taa
    { letter: "ث", sound: "audio/thaa.mp3" },   // Thaa
    { letter: "ج", sound: "audio/jeem.mp3" },   // Jeem
    { letter: "ح", sound: "audio/haa.mp3" },    // Haa
    { letter: "خ", sound: "audio/khaa.mp3" },   // Khaa
    { letter: "د", sound: "audio/daal.mp3" },   // Daal
    { letter: "ذ", sound: "audio/dhal.mp3" },   // Dhal
    { letter: "ر", sound: "audio/raa.mp3" },    // Raa
    { letter: "ز", sound: "audio/zaa.mp3" },    // Zaa
    { letter: "س", sound: "audio/siin.mp3" },   // Siin
    { letter: "ش", sound: "audio/sheen.mp3" },  // Sheen
    { letter: "ص", sound: "audio/saad.mp3" },   // Saad
    { letter: "ض", sound: "audio/daad.mp3" },   // Daad
    { letter: "ظ", sound: "audio/thaa.mp3" },   // Thaa (heavy)
    { letter: "ط", sound: "audio/taa.mp3" },    // Taa (heavy)
    { letter: "ع", sound: "audio/ain.mp3" },    // Ain
    { letter: "غ", sound: "audio/ghain.mp3" },  // Ghain
    { letter: "ف", sound: "audio/faa.mp3" },    // Faa
    { letter: "ق", sound: "audio/qaf.mp3" },    // Qaf
    { letter: "ك", sound: "audio/kaf.mp3" },    // Kaf
    { letter: "ل", sound: "audio/laam.mp3" },   // Laam
    { letter: "م", sound: "audio/meem.mp3" },   // Meem
    { letter: "ن", sound: "audio/noon.mp3" },   // Noon
    { letter: "ه", sound: "audio/haa.mp3" },    // Haa (end of word)
    { letter: "و", sound: "audio/waw.mp3" },    // Waw
    { letter: "ي", sound: "audio/yaa.mp3" },    // Yaa
];

let currentIndex = 0;

// Function to update the displayed letter
function updateLetter() {
    document.getElementById("letter").textContent = letters[currentIndex].letter;
}

// Play sound for the current letter
document.getElementById("play-sound").addEventListener("click", () => {
    const audio = new Audio(letters[currentIndex].sound);
    audio.play();
});

// Next button functionality
document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % letters.length;
    updateLetter();
});

// Previous button functionality
document.getElementById("previous").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + letters.length) % letters.length;
    updateLetter();
});

// Initialize the first letter display
updateLetter();