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
let itemArray =Object.entries(snapshot.val())


    console.log(snapshot)

    clearShoppingListEL()


   for (let i=0;i<itemArray.length;i++){
let currentItem=itemArray[i]
       let  currentItemID=currentItem[0]
       let  currentItemValue= currentItem[1]
       appendItemToShoppingListEL(currentItemValue)
   }

})


function  clearShoppingListEL(){
    shoppingListEl.innerHTML=""
}

function clearInputField(){
    inputFieldEl.value=""
}

function appendItemToShoppingListEL(itemValue){
    // shoppingListEl.innerHTML +=`<li>${itemValue}</li>`

    let itemID=item[0]
    let itemValue=item[1]

    let newEL=document.createElement("li")
    newEL.textContent=itemValue

    newEL.addEventListener("click",function (){
let exactLocationOfItemDB =ref(database,`shoppingList/${itemID}`)

    })
    shoppingListEl.append(newEL)
}


