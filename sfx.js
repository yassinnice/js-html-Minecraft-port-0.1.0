const SFX = {
    sounds: {},
    sources: {
        click: "assets/click.ogg",
        step: "assets/grass1.ogg"
    },
    
    loadAll: function() {
        const promises = [];
        for (let key in this.sources) {
            promises.push(new Promise((resolve, reject) => {
                const audio = new Audio(this.sources[key]);
                audio.oncanplaythrough = () => {
                    this.sounds[key] = audio;
                    resolve();
                };
                audio.onerror = reject;
                audio.load();
            }));
        }
        return Promise.all(promises);
    },
    
    play: function(key) {
        if (this.sounds[key]) {
            this.sounds[key].currentTime = 0; // Restart sound if already playing
            this.sounds[key].play().catch(e => console.warn("Audio blocked by browser", e));
        }
    }
};
