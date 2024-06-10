import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js';
import {getDatabase,ref,push,onValue}   from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js';

const  appSetting = {
    databaseURL:"https://playground-a98ab-default-rtdb.europe-west1.firebasedatabase.app"
}

const  app =initializeApp(appSetting)
const  database=getDatabase(app)
const shoppingListDB=ref(database,"shoppingList")



const inputFieldEl= document.getElementById("input-field")
const  addButtonEl=document.getElementById("add-button")
const shoppingListEl=document.getElementById("shopping-list")

addButtonEl.addEventListener("click",function (){
    let inputValue=inputFieldEl.value


    push(shoppingListDB,inputValue)
    clearInputField()


})


onValue (shoppingListDB,function (snapshot){
let itemArray =Object.values(snapshot.val())

    clearShoppingListEL()


   for (let i=0;i<itemArray.length;i++){

       appendItemToShoppingListEL(itemArray[i])
   }

})


function  clearShoppingListEL(){
    shoppingListEl.innerHTML=""
}

function clearInputField(){
    inputFieldEl.value=""
}

function appendItemToShoppingListEL(itemValue){
    shoppingListEl.innerHTML +=`<li>${itemValue}</li>`
}


