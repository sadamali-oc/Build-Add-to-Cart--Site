import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import {getDatabase,ref,push}   from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js';

const  appSetting = {
    databaseURL:"https://playground-a98ab-default-rtdb.europe-west1.firebasedatabase.app"
}

const  app =initializeApp(appSetting)
const  database=getDatabase(app)
const shoppingListDB=ref(database,"shoppingList")



const inputFieldEl= document.getElementById("input-field")
const  addButtonEl=document.getElementById("add-button")

addButtonEl.addEventListener("click",function (){
    let inputvalue=inputFieldEl.value


    push(shoppingListDB,inputvalue)
    console.log(inputvalue)
})

