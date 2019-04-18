(() => {
    // UTILS
    const toggleVisibility = ids => ids.map(id => document.getElementById(id).classList.toggle('hidden'));

    const setPlayerName = () => {
        const name = document.getElementById('player_name_input_container').firstElementChild.value;
        document.getElementById('player-name-display').innerHTML = name ? name : G.DEFAULT_PLAYER_NAME;
    }
    
    // DIFFICULTY SELECTOR
    Array.from(document.getElementById('dificulty-selector').children).map(child => {
        child.addEventListener('click', e => {
            document.querySelector('.selected').classList.toggle('selected');
            child.classList.toggle('selected');
            G.selectedDifficulty = child.innerHTML;
        });
    })

    // BACK BUTTON
    document.getElementById('back-btn').addEventListener('click', e => {
        app.resetGame();
        toggleVisibility(['game-menu', 'navbar', 'game-area'])
    });

    // RESTART BUTTON
    document.getElementById('restart-btn').addEventListener('click', e => {
        app.startGame();
    });

    // PLAY BUTTON
    document.getElementById('play-btn').addEventListener('click', e => {
        setPlayerName();
        toggleVisibility(['game-menu', 'navbar', 'game-area'])
        app.startGame();
    });
})();
