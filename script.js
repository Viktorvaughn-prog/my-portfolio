// Art categories (replace with actual paths)
const artCategories = {
    colored: [
        'assets/colored/art1.jpg',
        'assets/colored/art2.jpg',
        'assets/colored/art3.jpg',
        'assets/colored/art4.jpg'
    ],
    uncolored: [
        'assets/uncolored/art1.jpg',
        'assets/uncolored/art2.jpg',
        'assets/uncolored/art3.jpg',
        'assets/uncolored/art4.jpg'
    ]
};

// Get portfolio element
const portfolio = document.getElementById('portfolio');

// Load art into the portfolio based on selected category
function loadArt(category) {
    portfolio.innerHTML = ''; // Clear current portfolio
    artCategories[category].forEach((imageSrc) => {
        const artItem = document.createElement('div');
        artItem.classList.add('portfolio-item');

        const img = document.createElement('img');
        img.src = imageSrc;
        img.alt = 'Art Piece';

        artItem.appendChild(img);
        portfolio.appendChild(artItem);
    });
}

// Filter portfolio based on selected category
function filterPortfolio(category) {
    loadArt(category);
}

// Initial load (show colored art by default)
loadArt('colored');
