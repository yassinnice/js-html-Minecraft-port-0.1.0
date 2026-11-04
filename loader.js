const Loader = {
    assets: {},
    sounds: {},
    
    loadZip: async function() {
        // Fetch the raw zip file directly from your GitHub repo
        const response = await fetch("https://raw.githubusercontent.com/yassinnice/js-html-Minecraft-port-0.1.0/main/Minecraft%20Pocket%20Edition%20Demo%200.1.0%20uncrackted.zip");
        const zipData = await response.blob();
        const zip = await JSZip.loadAsync(zipData);
        
        // Extract the icon texture into a Blob URL
        const iconFile = await zip.file("res/drawable/iconx.png").async("blob");
        this.assets.icon = new Image();
        this.assets.icon.src = URL.createObjectURL(iconFile);
        
        // Extract the click audio into a Blob URL
        const clickFile = await zip.file("res/raw/click.ogg").async("blob");
        this.sounds.click = new Audio(URL.createObjectURL(clickFile));
    }
};
