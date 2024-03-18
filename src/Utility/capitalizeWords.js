export const capitalLetterConverter = function capitalizeFirstLetterOfEachWord(string) {
    // Split the string into an array of words
    let words = string.split(" ");

    // Iterate over each word
    for (let i = 0; i < words.length; i++) {
        // Capitalize the first letter of each word
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }

    // Join the words back together with spaces and return the result
    return words.join(" ");
}

export const smallLetterConverter = (string) => {
    return string.toLowerCase()
}