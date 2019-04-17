const G = {
    DEFAULT_PLAYER_NAME: 'Anonymous',

    TIMER_PLACEHOLDER: '--:--',

    WIN_MESSAGE: 'HURRAY! YOU WON!',

    GAME_OVER_MESSAGE: 'GAME OVER',

    WAITING_TIME_BETWEEN_TURNS: 1000,

    NUMBER_OF_CARDS: 18,

    POSSIBLESYMBOLS: [
        'code-branch',
        'apple-alt',
        'terminal',
        'coffee',
        'sitemap',
        'wifi',
        'paint-roller',
        'crop',
        'infinity'
    ],

    DEFAULT_CARD_BACK_SYMBOL: 'code',

    DIFFICULTY_LEVEL_TIMES: { Easy: 180, Medium: 120, Hard: 60 },
    
    IN_GAME_SYMBOLS: [],
    
    TIMER: undefined,

    CARDS: undefined,

    selectedDifficulty: undefined,

    found_pairs: 0,

    peekedCards: [],

    CARD_TEMPLATE: 
        `<div class="card__container">
            <div class="card">
                <div class="front">Front</div>
                <div class="back">Back</div>
            </div>
        </div>`,
};
