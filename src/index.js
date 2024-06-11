import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import { getDatabase, ref, push, onValue, remove } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js';

const appSetting = {
    databaseURL: "https://playground-a98ab-default-rtdb.europe-west1.firebasedatabase.app"
};

const app = initializeApp(appSetting);
const database = getDatabase(app);
const shoppingListDB = ref(database, "shoppingList");

const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");
const shoppingListEl = document.getElementById("shopping-list");

addButtonEl.addEventListener("click", function () {
    let inputValue = inputFieldEl.value;

    if (inputValue.trim() !== "") {
        push(shoppingListDB, inputValue);
        clearInputField();
    }
});

onValue(shoppingListDB, function (snapshot) {
    if (snapshot.exists()) {
        let itemArray = Object.entries(snapshot.val());
        clearShoppingListEL();

        for (let i = 0; i < itemArray.length; i++) {
            let currentItem = itemArray[i];
            let currentItemID = currentItem[0];
            let currentItemValue = currentItem[1];
            appendItemToShoppingListEL(currentItemID, currentItemValue);
        }
    } else {
        shoppingListEl.innerHTML = "<li>No items here ..yet</li>";
    }
});

function clearShoppingListEL() {
    shoppingListEl.innerHTML = "";
}

function clearInputField() {
    inputFieldEl.value = "";
}

function appendItemToShoppingListEL(itemID, itemValue) {
    let newEL = document.createElement("li");
    newEL.textContent = itemValue;

    newEL.addEventListener("click", function () {
        let exactLocationOfItemDB = ref(database, `shoppingList/${itemID}`);
        remove(exactLocationOfItemDB);
    });

    shoppingListEl.append(newEL);
}
