// Function to get the Unicode value of the entered character
document.getElementById('findUnicode').addEventListener('click', function() {
    let char = document.getElementById('charInput').value;
    
    if (char.length === 1) {
        let unicodeValue = char.codePointAt(0);  // Get the Unicode value
        document.getElementById('unicodeResult').innerText = 
            `Unicode value of '${char}' is: ${unicodeValue}`;
    } else {
        document.getElementById('unicodeResult').innerText = "Please enter a single character!";
    }
});
