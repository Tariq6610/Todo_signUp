let ol = document.querySelector("ol");
ol.classList.add("raw")
let inp = document.querySelector("input");
let updateFlag = true;

function todo(){
    if(inp.value !== ""){
        // code list items(li) 
    let li = document.createElement("li");
    let liText = document.createTextNode(inp.value);
    li.setAttribute("class","my-3")
    ol.appendChild(li);
        // code of delete button(delete)
    let delbtn = document.createElement("button");
    delbtn.innerText = "Delete";
    li.appendChild(delbtn);
    delbtn.setAttribute("onclick","del(this)")
    delbtn.classList.add("bg-danger")
    delbtn.classList.add("text-white")
        // code for edit button
    let editbtn = document.createElement("button")
    editbtn.innerText = "Edit";
    editbtn.setAttribute("onclick","edit(this)")
    li.appendChild(editbtn);    
    inp.value = "";
    editbtn.classList.add("bg-secondary")
    editbtn.classList.add("text-white")
        // to align buttons
    let btndiv = document.createElement("div");
    li.appendChild(btndiv);
    btndiv.appendChild(delbtn);
    btndiv.appendChild(editbtn);
    btndiv.classList.add("d-flex");
    btndiv.classList.add("justify-content-between")
    btndiv.classList.add("w-25")
    li.classList.add("d-flex");
    li.classList.add("justify-content-between");
    li.classList.add("col-lg-6");
    let textDiv = document.createElement("div");
    li.prepend(textDiv);
    textDiv.appendChild(liText);


}
}


// function of delete button
function del(e){
    if(updateFlag === true){
    let x = e.parentNode
    x.parentNode.remove();
}
}




// function of Edit Button
function edit(e){
    if(updateFlag === true){
        inp.value = e.parentNode.parentNode.firstElementChild.textContent;
        let update = document.createElement("button");
        update.innerText = "Update";
        update.classList.add("update")
        update.classList.add("bg-secondary")
        update.classList.add("text-white")
        let inpbtn = document.querySelector(".inpbtn");
        inp.classList.add("mx-1");
        inpbtn.prepend(update);
        let todo = document.querySelector(".todo");
        todo.classList.add("d-none");
        updateFlag = false;
        
        
        
        // functionality of update button
        update.addEventListener("click", function() {
            if(inp.value !== ""){
            e.parentNode.parentNode.firstElementChild.textContent = inp.value;
            let todo = document.querySelector(".todo");
            let update = document.querySelector(".update");
            update.setAttribute("class","d-none");
            todo.classList.remove("d-none");
            updateFlag = true;
            inp.value = "";
        }
  
        });
    }
}


// function of delete All button
function delAll(){
    ol.innerHTML = "";
    inp.value = "";
    let todo = document.querySelector(".todo");
    let update = document.querySelector(".update");
    update.setAttribute("class","d-none");
    todo.classList.remove("d-none");
    updateFlag = true;
    
    
}


// logout Butoon Function
function logout(){
    location.href = "signIn.html"
}

