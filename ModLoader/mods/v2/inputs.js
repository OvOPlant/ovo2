(function() {
    let runtime = c3_runtimeInterface._GetLocalRuntime();
    var timescale
    let inputs = {
        init() {
            document.addEventListener("keydown", userInput);

            globalThis.ovoInputs = this;
        },
    };
    function userInput(event){
        if (event.code === "Backquote"){
            if (event.ctrlKey){
                timescale = runtime._timeScale
                runtime._timeScale = 0
                bUserinput.innerHTML="Press any key to replace your LEFT key."
                document.addEventListener("keydown", leftInput)
                document.removeEventListener("keydown", userInput)
            }
        }
    }
    function leftInput(event){
        runtime._allObjectClasses[3]._instances[0]._instVarValues[0] = event.keyCode
        document.addEventListener("keydown", upInput)
        bUserinput.innerHTML="Press any key to replace your UP key."
        document.removeEventListener("keydown", leftInput)
    }

    function upInput(event){
        runtime._allObjectClasses[3]._instances[0]._instVarValues[1] = event.keyCode
        document.addEventListener("keydown", rightInput)
        bUserinput.innerHTML="Press any key to replace your RIGHT key."
        document.removeEventListener("keydown", upInput)
    }

    function rightInput(event){
        runtime._allObjectClasses[3]._instances[0]._instVarValues[2] = event.keyCode
        document.addEventListener("keydown", downInput)
        bUserinput.innerHTML="Press any key to replace your DOWN key."
        document.removeEventListener("keydown", rightInput)
    }

    function downInput(event){
        runtime._allObjectClasses[3]._instances[0]._instVarValues[3] = event.keyCode
        setTimeout(function() {runtime._timeScale = timescale
        document.addEventListener("keydown", userInput)
        bUserinput.innerHTML="Press Ctrl + `"}, 100)
        document.removeEventListener("keydown", downInput)
    }

    var bUserinput = document.createElement("div"),
        cUserinput = {
            backgroundColor: "rgba(255, 255, 255, 0.7)",
            border: "solid",
            borderColor: "black",
            borderWidth: "1px",
            fontFamily: "Retron2000",
            position: "absolute",
            top: "0px",
            left: "50%",
            padding: "10px",
            color: "black",
            fontSize: "13pt",
        };
    Object.keys(cUserinput).forEach(function (a) {
        bUserinput.style[a] = cUserinput[a];
    });
    bUserinput.id = "userinput";
    const newContentuserinput = document.createTextNode("Press Ctrl + `");

    // add the text node to the newly created div
    bUserinput.appendChild(newContentuserinput);

    document.body.appendChild(bUserinput);
    inputs.init();
})();
