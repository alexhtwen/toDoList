let count = 0;

function addItem() {
   count++;
   let toDoItem = document.getElementById("input-box");
   let thisItem = toDoItem.value;
   // let toDoList = document.getElementById("todo-list");
   let spanAdd = document.createElement("span");
   let delButton = document.createElement("button");
   let newLine = document.createElement("p");

   spanAdd.innerHTML = thisItem;
   spanAdd.setAttribute("id", "item-" + String(count));

   // let div = document.querySelector("div");
   let ul = document.querySelector("ul");
   ul.appendChild(spanAdd);
   spanAdd.classList.add("new-item");
   delButton = ul.appendChild(delButton);
   // newline = ul.appendChild(newLine);
   ul.appendChild(newLine);
   delButton.setAttribute("id", "delbutton-" + String(count));
   delButton.innerHTML = "刪除";
   toDoItem.value = "";

   // 讓刪除按鈕有真正刪除功能。
   delButton.addEventListener("click", delMe);
}

function delMe() {
   var arr = this.id.split("-");
   var thisItem = document.getElementById("item-" + arr[1]);
   thisItem.remove();

   var thisButton = document.getElementById("delbutton-" + arr[1]);
   thisButton.remove();
}

var addButton = document.getElementById("add-btn");
addButton.addEventListener("click", addItem);