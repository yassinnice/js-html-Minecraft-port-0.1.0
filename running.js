const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d'); 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let isRunning = false;

// Dynamic resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// FPS Tracker
const FPS = {
    lastTime: performance.now(),
    frames: 0,
    display: document.getElementById('fpsDisplay'),
    update: function() {
        const now = performance.now();
        this.frames++;
        if (now - this.lastTime >= 1000) {
            this.display.innerText = this.frames;
            this.frames = 0;
            this.lastTime = now;
        }
    }
};

// Render Loop
function gameLoop() {
    if (!isRunning) return;
    
    FPS.update();
    
    // Draw sky
    ctx.fillStyle = '#87CEEB';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw extracted icon
    if (Loader.assets.icon) {
        ctx.drawImage(Loader.assets.icon, canvas.width / 2 - 32, canvas.height / 2 - 32, 64, 64);
    }
    
    requestAnimationFrame(gameLoop);
}

// Boot Sequence
Loader.loadZip().then(() => {
    isRunning = true;
    
    // Play sound on click
    window.addEventListener('mousedown', () => {
        if (Loader.sounds.click) {
            Loader.sounds.click.currentTime = 0;
            Loader.sounds.click.play().catch(e => console.log("Audio blocked:", e));
        }
    });
    
    requestAnimationFrame(gameLoop);
});
