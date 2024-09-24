
// Input and suggestion container
const searchInput = document.getElementById('search');
const suggestionsDiv = document.getElementById('suggestions');
const suggestionsUl = suggestionsDiv.querySelector('ul');

// Word bank
const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// Function to update the suggestions list
function updateSuggestions(filteredWords) {
    // Clear existing suggestions
    suggestionsUl.innerHTML = '';

    // Add filtered words as suggestions
    filteredWords.forEach(word => {
        const suggestionItem = document.createElement('li');
        suggestionItem.classList.add('suggestion-item');
        suggestionItem.innerText = word;

        // Add click event to select suggestion
        suggestionItem.addEventListener('click', () => {
            searchInput.value = word;
            suggestionsUl.innerHTML = ''; // Clear suggestions
        });

        suggestionsUl.appendChild(suggestionItem);
    });
}

// Event listener for input changes
searchInput.addEventListener('input', function() {
    const query = this.value.toLowerCase();

    // Filter the word bank based on the input
    const filteredWords = fruits.filter(word => word.toLowerCase().startsWith(query));

    // Update the suggestions
    if (query) {
        updateSuggestions(filteredWords);
    } else {
        suggestionsUl.innerHTML = ''; // Clear suggestions if input is empty
    }
});

// Hide suggestions if clicked outside
document.addEventListener('click', function(event) {
    if (!searchInput.contains(event.target) && !suggestionsDiv.contains(event.target)) {
        suggestionsUl.innerHTML = ''; // Clear suggestions
    }
});
