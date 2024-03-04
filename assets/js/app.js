(() => {
    const allItems = [];


    function addNewItem(event) {
        event.preventDefault();

        const inputElement = document.querySelector("input");
        let newItem = inputElement.value;
    
        allItems.push(newItem);
        populateItems(allItems);
        inputElement.value = "";
    }


    function populateItems(allItems) {
        const listsElement = document.getElementsByClassName("lists")[0];
        
        const allElements = [] ;
        allItems.forEach((item) => {
            allElements.push(` <div>
                <span>${item}</span>
                <input type="checkbox" >
            </div>`);
        });
        listsElement.innerHTML = allElements.join("");
    }
    
    document.getElementById("add_new_btn").addEventListener("click", addNewItem);
})();