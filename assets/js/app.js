(() => {
    const allItems = [];

    function populateTotalItems (count) {
        const totalElement = document.getElementById("total");
        totalElement.innerText = count;
    }

    function addNewItem(event) {
        event.preventDefault();

        const inputElement = document.querySelector("input");
        let newItem = inputElement.value;
    
        if(newItem) {
            allItems.unshift(newItem);
            populateItems(allItems.slice(0, 5));
            populateTotalItems(allItems.length);
            inputElement.value = "";
        }
        else {
            inputElement.classList.add("error-input");
        }
    }


    function populateItems(allItems) {
        const listsElement = document.getElementsByClassName("lists")[0];
        
        const allElements = [] ;
        allItems.forEach((item) => {
            allElements.push(`<div>
                <span>${item}</span>
                <input type="checkbox" >
            </div>`);
        });
        listsElement.innerHTML = allElements.join("");
    }
    
    document.querySelector("input").addEventListener("focus", () => {
        const inputElement = document.querySelector("input");
        inputElement.classList.remove("error-input");
    });
    document.getElementById("add_new_btn").addEventListener("click", addNewItem);
})();