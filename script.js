{
    const tasks = [
        
        {
            content: "zjeść kanapki",
            done: true,
        },
    ];

    const newTaskInput = document.querySelector(".js-newTask")
    const cleanInputFocus = () => {
        
        newTaskInput.value = "";
        newTaskInput.focus();
    }

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        render();
    };

    const removeTask = (index) => {
        tasks.splice(index, 1);
        render();
    }

    const toggleTaskDone = (index) => {
        tasks[index].done = !tasks[index].done;
        render();
    }
    
    const bindingEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");
        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);

            });
        });
        const toggleDoneButtons = document.querySelectorAll(".js-done");
        toggleDoneButtons.forEach((toggleDoneButtons, index) => {
            toggleDoneButtons.addEventListener("click", () => {
                toggleTaskDone(index);

            });
        });
    }

    const render = () => {
        let htmlString = "";
        for (const task of tasks) {
            htmlString +=
                `<li 
                class="list__item ${task.done ? "list__item--done" : ""}"
                >
                <span class="list__taskContent">${task.content} </span>       
            <button class="js-done buttons__done">
            ${task.done ? "✔" : "   "}           
            </button>         
            <button class="js-remove buttons__remove">🗑</button>
            </li>`;
        }
        document.querySelector(".js-tasks").innerHTML = htmlString

        bindingEvents();
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskContent = newTaskInput.value.trim();
        if (newTaskContent === "") {
            return;
        }
        addNewTask(newTaskContent);
        cleanInputFocus(newTaskInput);
    };

    const init = () => {
        render();
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
    };
    init();
};