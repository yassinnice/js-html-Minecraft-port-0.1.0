const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d'); 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let isRunning = false;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function gameLoop() {
    if (!isRunning) return;
    
    FPS.update();
    
    ctx.fillStyle = '#87CEEB';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw the extracted texture in the center of the screen
    if (Loader.assets.icon) {
        ctx.drawImage(Loader.assets.icon, canvas.width / 2 - 32, canvas.height / 2 - 32, 64, 64);
    }
    
    requestAnimationFrame(gameLoop);
}

// Boot sequence: Unpack the zip, then start the loop
Loader.loadZip()
    .then(() => {
        console.log("Zip extracted. Engine ready.");
        isRunning = true;
        
        // Play the extracted click sound when clicking the canvas
        window.addEventListener('mousedown', () => {
            if (Loader.sounds.click) {
                Loader.sounds.click.currentTime = 0;
                Loader.sounds.click.play();
            }
        });
        
        requestAnimationFrame(gameLoop);
    })
    .catch(err => {
        console.error("Failed to load or unpack zip:", err);
    });
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d'); 
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let isRunning = false;

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

function gameLoop() {
    if (!isRunning) return;
    
    FPS.update();
    
    ctx.fillStyle = '#87CEEB';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Draw the extracted texture in the center of the screen
    if (Loader.assets.icon) {
        ctx.drawImage(Loader.assets.icon, canvas.width / 2 - 32, canvas.height / 2 - 32, 64, 64);
    }
    
    requestAnimationFrame(gameLoop);
}

// Boot sequence: Unpack the zip, then start the loop
Loader.loadZip()
    .then(() => {
        console.log("Zip extracted. Engine ready.");
        isRunning = true;
        
        // Play the extracted click sound when clicking the canvas
        window.addEventListener('mousedown', () => {
            if (Loader.sounds.click) {
                Loader.sounds.click.currentTime = 0;
                Loader.sounds.click.play();
            }
        });
        
        requestAnimationFrame(gameLoop);
    })
    .catch(err => {
        console.error("Failed to load or unpack zip:", err);
    });
