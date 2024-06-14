document.addEventListener('keydown', function drum(e) {
    const key = e.key.toLowerCase();
    const keyMap = {
        'a': { box: 'box-1', sound: 'clap.wav' },
        's': { box: 'box-2', sound: 'hihat.wav' },
        'd': { box: 'box-3', sound: 'kick.wav' },
        'f': { box: 'box-4', sound: 'openhat.wav' },
        'g': { box: 'box-5', sound: 'ride.wav' },
        'h': { box: 'box-6', sound: 'slapped-clap-drum.wav' },
        'j': { box: 'box-7', sound: 'snare.wav' },
        'k': { box: 'box-8', sound: 'tink.wav' },
        'l': { box: 'box-9', sound: 'tom.wav' }
    };

    if (keyMap[key]) {
        const box = document.getElementById(keyMap[key].box);
        const audio = new Audio(keyMap[key].sound);

        box.classList.add('playing');
        audio.play();

        audio.addEventListener('ended', () => {
            box.classList.remove('playing');
        });

       setTimeout(() => {
            box.classList.remove('playing');
        }, 250); 
    }
});
