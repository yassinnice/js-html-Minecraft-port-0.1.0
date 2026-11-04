const Loader = {
    assets: {},
    sounds: {},
    
    loadZip: async function() {
        const response = await fetch("Minecraft Pocket Edition Demo 0.1.0 uncrackted.zip");
        const zipData = await response.blob();
        const zip = await JSZip.loadAsync(zipData);
        
        // Extract a texture into a Blob URL
        const iconFile = await zip.file("res/drawable/iconx.png").async("blob");
        this.assets.icon = new Image();
        this.assets.icon.src = URL.createObjectURL(iconFile);
        
        // Extract an audio file into a Blob URL
        const clickFile = await zip.file("res/raw/click.ogg").async("blob");
        this.sounds.click = new Audio(URL.createObjectURL(clickFile));
    }
};
