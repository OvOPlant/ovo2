(function() {
    let old = globalThis.sdk_runtime;
    c2_callFunction("execCode", ["globalThis.sdk_runtime = this.runtime"]);
    let runtime = globalThis.sdk_runtime;
    globalThis.sdk_runtime = old;
    let notify = (title, text, image = "https://ovoplant.github.io/ovo/versions/reverse/electric.png") => {
        cr.plugins_.sirg_notifications.prototype.acts.AddSimpleNotification.call(
            runtime.types_by_index.find(
                (type) => type.plugin instanceof cr.plugins_.sirg_notifications
            ).instances[0],
            title,
            text,
            image
        );
    };
    let dead = {
        init() {
            document.addEventListener("keydown", (event) => {
                if (event.code === "KeyY") {
                    if (event.shiftKey) {
                        runtime.tickMe(deadTick);
                    }
                }
                if (event.code === "KeyU") {
                    if (event.shiftKey) {
                        runtime.untickMe(deadTick);
                    }
                }
            });
            this.interval = null;
            globalThis.ovoDead = this;
            notify("Mod loaded", "Press Shift + Y for options.");
            this.runtime = cr_getC2Runtime();
        },
        getPlayer() {
            return this.runtime.types_by_index
                .filter(
                    (x) =>
                        !!x.animations &&
                        x.animations[0].frames[0].texture_file.includes("collider")
                )[0]
                .instances.filter(
                    (x) => x.instance_vars[17] === "")[0]
        },
        
        isInLevel() {
            return runtime.running_layout.sheetname === "Levels" || runtime.running_layout.name.startsWith("Skin");
        }
};
    dead.init();
})();
