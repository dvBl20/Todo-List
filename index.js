const input = document.querySelector("#input")
const box = document.querySelector("#box")
const addBtn = document.querySelector("#add-btn")
let valeur = []
const valeurFromLocalStorage = JSON.parse( localStorage.getItem("todoValue") )
const completedBtn = document.querySelector("#completed-btn")


if (valeurFromLocalStorage) {
    valeur = valeurFromLocalStorage
    render(valeur)
}


function Todo(userValue) {

    this.todoHtml = ""

    for (let index = 0; index < userValue.length; index++) {
        let uuid = self.crypto.randomUUID()
        this.todoHtml +=  `
            <div id="${uuid}" class="todo-box">
            <p>${userValue[index]}</p>
            <button data-delete="${uuid}">Delete</button>
            </div>
            
            `
    }
}

function render(valeur) {
    let item = new Todo(valeur)
    box.innerHTML = item.todoHtml
    input.value = ""
}

addBtn.addEventListener("click", function() {
    if (input.value) {
        valeur.push(input.value)
        localStorage.setItem("todoValue", JSON.stringify(valeur) )
        render(valeur)
    }
})

document.addEventListener("keydown", function(e) {
    if (e.key == "Enter") {
        if (input.value) {
            valeur.push(input.value)
            localStorage.setItem("todoValue", JSON.stringify(valeur) )
            render(valeur)
        }
    }
})

document.addEventListener("click",function(e) {
    if (e.target.dataset.delete) {
        let elementToDelete = e.target.previousElementSibling.innerText
        let index = valeurFromLocalStorage.indexOf(elementToDelete);
        if (index !== -1) {

            valeurFromLocalStorage.splice(index, 1);
            localStorage.setItem("todoValue", JSON.stringify(valeurFromLocalStorage));
          }
        document.getElementById(e.target.parentNode.id).remove()
    }

})

  








