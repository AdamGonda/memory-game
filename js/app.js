const app = {
    startGame: () => {
        G.found_pairs = 0;
        G.peekedCards = [];

        const random_symbols = app.getRandomSymbols(G.NUMBER_OF_CARDS);
        G.IN_GAME_SYMBOLS = app.shuffle(random_symbols.concat(random_symbols));

        app.buildCardsFromTemplate();
        app.initializeCards();
        app.startCountDown();
    },

    getRandomSymbols: () => {
        return app.getRandomIndexes(G.NUMBER_OF_CARDS / 2).map(x => G.POSSIBLESYMBOLS[x]);
    },

    getRandomIndexes: numberOfIdxs => {
        let rndIdxs = [];

        for (let i = 0; i < numberOfIdxs; i++) {
            let rndIdx = 0;

            while (rndIdxs.includes(rndIdx)) {
                rndIdx = Math.floor(Math.random() * (numberOfIdxs - 0)) + 0;
            }

            rndIdxs.push(rndIdx);
        }
        return rndIdxs;
    },

    shuffle: array => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    },

    buildCardsFromTemplate: () => {
        let gameArea = document.getElementById('game-area');
        gameArea.innerHTML = '';

        for (let i = 0; i < G.NUMBER_OF_CARDS; i++) {
            let fakeDiv = document.createElement('div');
            fakeDiv.innerHTML = G.CARD_TEMPLATE.trim();

            for (childNode of fakeDiv.childNodes) {
                gameArea.appendChild(childNode);   
            }
        }
    },

    initializeCards: () => {
        G.CARDS = document.getElementsByClassName('card');

        Array.from(G.CARDS).forEach((card, idx) => {
            card.index = idx;
            const [front, back] = card.children;

            front.innerHTML = `<i class="fas fa-${G.DEFAULT_CARD_BACK_SYMBOL}"></i>`;
            back.innerHTML = `<i class="fas fa-${G.IN_GAME_SYMBOLS[idx]}"></i>`;

            card.addEventListener('click', function() {
                app.gameLogic(card);
            });
        });
    },

    gameLogic: card => {
        const resetPeekedCards = () => (G.peekedCards = []);
        const isFound = card => card.classList.contains('found');

        if (!G.peekedCards.includes(card.index) && !isFound(card)) {
            if (G.peekedCards.length == 1) {
                app.turnCard(card.index);
                G.peekedCards.push(card.index);

                if (app.areTheyPairs()) {
                    G.found_pairs++;

                    const [cardA, cardB] = G.peekedCards;
                    G.CARDS[cardA].classList.toggle('found');
                    G.CARDS[cardB].classList.toggle('found');

                    resetPeekedCards();

                    if (G.found_pairs == G.NUMBER_OF_CARDS / 2) {
                        clearInterval(G.timer);
                        G.found_pairs = 0;
                        alert(G.WIN_MESSAGE);
                    }
                } else {
                    window.setTimeout(
                        () => G.peekedCards.forEach(c => app.turnCard(c)),
                        G.WAITING_TIME_BETWEEN_TURNS
                    );
                    window.setTimeout(resetPeekedCards, G.WAITING_TIME_BETWEEN_TURNS);
                }
            } else if (G.peekedCards.length < 2) {
                app.turnCard(card.index);
                G.peekedCards.push(card.index);
            }
        }
    },

    turnCard: idx => G.CARDS[idx].classList.toggle('flipped'),

    areTheyPairs: () => {
        if (G.peekedCards.length == 2) {
            return G.IN_GAME_SYMBOLS[G.peekedCards[0]] == G.IN_GAME_SYMBOLS[G.peekedCards[1]];
        }
        return false;
    },

    startCountDown: () => {
        document.getElementById('timer').innerHTML = G.TIMER_PLACEHOLDER;
        clearInterval(G.timer);

        let time =
            G.DIFFICULTY_LEVEL_TIMES[
                G.selectedDifficulty == undefined ? 'Easy' : G.selectedDifficulty
            ];

        G.timer = setInterval(function() {
            let min = Math.floor(time / 60);
            let sec = Math.floor(time % 60);

            document.getElementById('timer').innerHTML = `${min}:${sec >= 10 ? sec : '0' + sec}`;
            time--;
            if (time < 0) {
                clearInterval(G.timer);
                alert(G.GAME_OVER_MESSAGE)
            }
        }, 1000);
    },
};
