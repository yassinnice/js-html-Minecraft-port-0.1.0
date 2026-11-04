const Textures = {
    assets: {},
    // Swap these local paths for your jsDelivr URLs
    sources: {
        dirt: "assets/dirt.png",
        stone: "assets/stone.png"
    },
    
    loadAll: function() {
        const promises = [];
        for (let key in this.sources) {
            promises.push(new Promise((resolve, reject) => {
                const img = new Image();
                img.src = this.sources[key];
                img.onload = () => {
                    this.assets[key] = img;
                    resolve();
                };
                img.onerror = reject;
            }));
        }
        return Promise.all(promises);
    }
};
