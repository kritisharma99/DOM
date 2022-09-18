var inp = document.getElementById("top-nav-search-input");
inp.value="CSS selectors";
inp.addEventListener("keypress", function (event) {
 
            // Checking if key pressed is ENTER or not
            // if the key pressed is ENTER
            // click listener on button is called
            if (event.keyCode == 13) {
                document.getElementsByClassName("search-button").item(0).click();
            }
        });