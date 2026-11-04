const FPS = {
    lastTime: performance.now(),
    frames: 0,
    current: 0,
    displayElement: document.getElementById('fpsDisplay'),
    
    update: function() {
        const now = performance.now();
        this.frames++;
        if (now - this.lastTime >= 1000) {
            this.current = this.frames;
            this.frames = 0;
            this.lastTime = now;
            if (this.displayElement) {
                this.displayElement.innerText = this.current;
            }
        }
        return this.current;
    }
};
