const brainrotTerms = [
    {
        name: 'Skibidi',
        description: 'Skibidi, originated from the YouTube series by DaFuq!?Boom!, Skibidi Toilet',
        link: 'skibidi.html'
    },
    {
        name: 'Rizz',
        description: "Rizz, another word for charisma, originated from Kai Cenat",
        link: 'rizz.html'
    },
    {
        name: 'Sigma',
        description: "A lone wolf, someone who doesn't need help from others",
        link: 'sigma.html'
    },
    {
        name: 'Mewing',
        description: "Improving/flexing your jaw",
        link: 'mewing.html'
    },
    {
        name: 'Looksmaxxing',
        description: "Similar to mewing, but instead of improving just the jaw, you improve your whole body",
        link: 'looksmaxxing.html'
    },
    {
        name: '67',
        description: "67, originated from a kid (known as the 6'7 kid) saying 6'7 from Michael Jordan's height being 6'7",
        link: '67.html'
    },
    {
        name: 'Mustard',
        description: "Mustard, originating from Kendrick Lamar's song, TV Off, when he shouted his producers nickname: Mustard",
        link: 'mustard.html'
    },
    {
        name: 'Mango',
        description: "Mango, originating from a skit by a random Indian, where he poures mangos on himself, and it gets turned into a phonk",
        link: 'mango.html'
    },
    {
        name: 'Gyatt',
        description: "Gyatt, originating around the same time as skibidi and sigma",
        link: 'gyatt.html'
    },
    {
        name: 'Goon',
        description: "Goon, originating not long ago",
        link: 'goon.html'
    },
    {
        name: 'Twin',
        description: "Twin, originating sometime in late 2024 to early 2025",
        link: 'twin.html'
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('resultsContainer');
    let hasSearched = false;

    function displayResults(results) {
        resultsContainer.innerHTML = '';

        if (results.length === 0) {
            if (!hasSearched) {
                resultsContainer.innerHTML = '<p class="no-results">Try searching for a brainrot term you don\'t understand</p>';
            } else {
                resultsContainer.innerHTML = '<p class="no-results">Try searching for a different term!</p>';
            }
            return;
        }

        results.forEach(term => {
            const resultElement = document.createElement('div');
            resultElement.className = 'search-result';
            resultElement.innerHTML = `
                <h3><a href="${term.link}">${term.name}</a></h3>
                <p>${term.description}</p>
            `;
            resultsContainer.appendChild(resultElement);
        });
    }

    function searchTerms(query) {
        if (query === '') {
            displayResults([]);
            return;
        }

        hasSearched = true;
        const filteredTerms = brainrotTerms.filter(term =>
            term.name.toLowerCase().includes(query.toLowerCase()) ||
            term.description.toLowerCase().includes(query.toLowerCase())
        );

        displayResults(filteredTerms);
    }

    if (searchInput) {
        displayResults([]);

        searchInput.addEventListener('input', function() {
            const searchTerm = this.value.trim();
            searchTerms(searchTerm);
        });

        searchInput.focus();
    }
});
