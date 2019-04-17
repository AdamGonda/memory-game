(() => {
    // UTILS
    const toggleVisibility = ids => ids.map(id => document.getElementById(id).classList.toggle('hidden'));

    const setPlayerName = () => {
        let name = document.getElementById('player-name-input').firstElementChild.value;
        document.getElementById('player-name-display').innerHTML = name ? name : 'anonymus';
    }
    
    const removeClassFromChildren = (parentNode, className) => {
        Array.from(parentNode.children).map(child => {
            if (child.classList.contains(className)) {
                child.classList.toggle(className);
            }
        })
    }

    // DIFFICULTY SELECTOR
    Array.from(document.getElementById('dificulty-selector').children).map(child => {
        child.addEventListener('click', e => {
            removeClassFromChildren(child.parentNode, 'selected');
            child.classList.toggle('selected');
            G.selectedDifficulty = child.innerHTML;
        });
    })

    // BACK BUTTON
    document.getElementById('back-btn').addEventListener('click', e => {
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
