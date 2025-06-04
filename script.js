 let currentDisplay= '0';
        function clearDisplay()
        {
           currentDisplay ='0';
           updateDisplay(currentDisplay);
        }
            // if(currentDisplay() !== '0')
            // {
            //  let n= currentDisplay.length;
            //  currentDisplay = currentDisplay.replace(currentDisplay[n-1]," ");
            //  updateDisplay(n.toString());
            // }
            function removeElement() {
                if (currentDisplay.length > 1) {
                     currentDisplay = currentDisplay.slice(0,-1); // Remove last character
                } else {
                    currentDisplay = "0"; // Reset to 0 if only one character left
                }
                 updateDisplay(currentDisplay);
                }
        function appendToDisplay(val)
        {
            if(currentDisplay==='0')
            currentDisplay="";
            currentDisplay+=val;
            updateDisplay(currentDisplay);
        }
        function updateDisplay(val1)
        {
           document.getElementById("displayclear").innerHTML=val1;
        }
        function result()
        {
           try{
           const res=eval(currentDisplay);
           currentDisplay=res.toString();
           }
           catch(error)
           {
            currentDisplay="Error";
           }
           updateDisplay(currentDisplay);
        }
        document.addEventListener("keydown", function(event) {
    let key = event.key;

    if (!isNaN(key) || "+-*/.".includes(key)) {
        appendToDisplay(key); // Allow numbers and operators
    } else if (key === "Enter") {
        result(); // Calculate when Enter is pressed
    } else if (key === "Backspace") {
        backspace(); // Implement Backspace function
    } else if (key === "Escape") {
        clearDisplay(); // Clear when Esc is pressed
    }
});

// Function to handle backspace
function backspace() {
    currentDisplay = currentDisplay.slice(0, -1) || "0";
    updateDisplay(currentDisplay);
}