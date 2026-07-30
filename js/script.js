$('#results').html(``);

// Function to check if every character is a digit or alphabet letter (case insensitive)
function everyAlphanumericCharacter(str) {
    str = str.toLowerCase();
    const digitsAndLetters = "0123456789abcdefghijklmnopqrstuvwxyz";
    const myIterator = Iterator.from(str);
    const result = myIterator.every((ch) => digitsAndLetters.includes(ch));
    return result;
}

// Keyup event for text field
$('#mytext').on('keyup', () => {
    $('#results').html(``);
    const str = $('#mytext').val();
    if (!str) {
        $('#results').html(``);
    } else {
        $('#results').append(`You have entered ${str} <br>`);
        $('#results').append(`Every character a letter or digit? ${everyAlphanumericCharacter(str) ? "Yes" : "No"} <br>`);
    }
});

// Click event for Clear button
$('#clearBtn').on('click', () => {
    $('#results').html(``);
});