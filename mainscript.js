const brainrotTerms = [
    {
        name: 'Skibidi',
        description: 'Skibidi, originating from the YouTube series by DaFuq!?Boom!, Skibidi Toilet, around 2022',
        link: 'skibidi.html'
    },
    {
        name: 'Rizz',
        description: "Rizz, originating from Kai Cenat",
        link: 'rizz.html'
    },
    {
        name: 'Sigma',
        description: "Sigma, originating around 2022",
        link: 'sigma.html'
    },
    {
        name: 'Mewing',
        description: "Rizz, originating around 2022 like skibidi and sigma",
        link: 'mewing.html'
    },
    {
        name: 'Looksmaxxing',
        description: "Looksmaxxing, originating around late 2024",
        link: 'looksmaxxing.html'
    },
    {
        name: '67',
        description: "67, originating from a song by Skrilla, and spread through social media after a kid said '67' at a basketball game and shared it online (Thank you Wikipedia)",
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
        description: "Goon, originating early 2025 ",
        link: 'goon.html'
    },
    {
        name: 'Twin',
        description: "Twin, originating sometime in late 2024 to early 2025",
        link: 'twin.html'
    },
    {
        name: 'Sybau',
        description: "Sybau, originating early 2024",
        link: 'sybau.html'
    },
    {
        name: 'Fanum tax',
        description: "Fanum tax, originating around the same time as sigma, skibidi, and mewing",
        link: 'fanumtax.html'
    },
    {
        name: 'Cooked',
        description: "Cooked, originating mid 2024",
        link: 'cooked.html'
    },
    {
        name: 'Huzz',
        description: "Huzz, originating around late 2024",
        link: 'huzz.html'
    },
    {
        name: 'Slop',
        description: "Slop, originating early-mid 2025",
        link: 'slop.html'
    },
    {
        name: 'Cracked',
        description: "Cracked, originating early 2025",
        link: 'cracked.html'
    },
    {
        name: 'Fine shyt',
        description: "Fine shyt, originating mid 2025",
        link: 'fineshyt.html'
    },
    {
        name: 'Ragebait',
        description: "Ragebait, originating early-mid 2025",
        link: 'ragebait.html'
    },
    {
        name: 'Blud',
        description: "Blud, originating around when P.Diddy got... yk",
        link: 'blud.html'
    },
    {
        name: 'Aura',
        description: "Aura, originating early-mid 2024",
        link: 'aura.html'
    },
    {
        name: 'Yap',
        description: "Yap, originating late 2024 (Around when Trump got elected)",
        link: 'yap.html'
    },
    {
        name: 'Based',
        description: "Based, originating around mid 2024, but has been around for a few years prior",
        link: 'based.html'
    },
    {
        name: 'Nonchalant',
        description: "Nonchalant, originating around late 2024 when vexbolts was popular",
        link: 'nonchalant.html'
    },
    {
        name: 'Ratio',
        description: "Ratio, originating around when Twitter got popular",
        link: 'ratio.html'
    },
    {
        name: 'Unc',
        description: "Unc, originating early 2025 when 2007 people turned 18",
        link: 'unc.html'
    },
    {
        name: '41',
        description: "41, originating mid 2025 with 67, and 61",
        link: '41.html'
    },
    {
        name: '61',
        description: "61, originating mid 2025 with 67 and 41",
        link: '61.html'
    },
    {
        name: '1',
        description: "1, originating a few weeks ago (as of November 8th, 2025) from Diem",
        link: '1.html'
    },
    {
        name: 'Chopped',
        description: "Chopped, originating mid 2024, resurfaced late 2024 with the chopped chin meme, and is still being used",
        link: 'chopped.html'
    },
    {
        name: 'Cook',
        description: "Cook, originating around 2023 and is STILL being used to this day!",
        link: 'cook.html'
    },
    {
        name: 'Crack',
        description: "Crack, originating early-mid 2025 (not to be confused with cracked, or the drugs)",
        link: 'crack.html'
    },
    {
        name: 'Clanker',
        description: "Crack, originating mid 2025",
        link: 'clanker.html'
    },
    {
        name: 'Glaze',
        description: "Glaze, originating 2021",
        link: 'glaze.html'
    },
    {
        name: 'Cap',
        description: "Cap, originating early 20th century (1900s) and resurfaced around the covid 19 times",
        link: 'cap.html'
    },
    {
        name: 'Dih',
        description: "Dih, originating mid 2024",
        link: 'dih.html'
    },
    {
        name: 'Bet',
        description: "Bet, originating mid 2010s",
        link: 'bet.html'
    },
    {
        name: 'Deadass',
        description: "Deadass, originating 1993 by Fat Joe (I wonder if hes fat)",
        link: 'deadass.html'
    },
    {
        name: 'On god',
        description: "On god, originating in 2005",
        link: 'ongod.html'
    },
    {
        name: 'GG',
        description: "GG, originating in 2018",
        link: 'gg.html'
    },
    {
        name: 'W',
        description: "W, originating 1983 and popularized ~2018-2019 because of Twitch/Fortnite/Twitter",
        link: 'w.gg'
    },
    {
        name: 'Bag',
        description: "Bag, originating mid 2000s as hip-hop slang",
        link: 'bag.gg'
    },
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
