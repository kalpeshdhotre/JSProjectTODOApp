let addBtn = document.querySelector(`.addBtn`);
// let deleteBtn = document.querySelector(`.btnDelete`);

addBtn.addEventListener(`click`, () => {
    // read the task entered by user
    let userTask = document.querySelector(`.userTask`).value;

    const newTask = document.createElement("div");
    const newBtnEdit = document.createElement("button");
    const newBtnDelete = document.createElement("button");
    const newToDoTask = document.createElement("input");

    // newTask.textContent = "new task through DOM"
    document.querySelector(`.taskContainer`).appendChild(newTask);

    newTask.classList.add(`tasks`, `p-2`, `flex`, `justify-center`, `space-x-2`);
    // newTask.classList.add(`rounded-md`, `w-96`, `bg-slate-300`, `text-black`);

    newTask.appendChild(newToDoTask);
    newToDoTask.value = userTask.toString();
    newToDoTask.setAttribute("readonly", "readonly");
    newToDoTask.classList.add(`p-2`, `rounded-md`, `w-96`, `bg-slate-300`, `text-black`);

    newBtnEdit.textContent = "EDIT";
    newBtnEdit.classList.add(`btnEdit`, `bg-green-400`, `w-24`, `rounded-md`, `ml-5`);
    newTask.appendChild(newBtnEdit);

    newBtnDelete.textContent = "Delete";
    newBtnDelete.classList.add(`btnDelete`, `bg-red-400`, `w-24`, `rounded-md`, `ml-5`);
    newTask.appendChild(newBtnDelete);

    document.querySelector(`.userTask`).value = ``;
    document.querySelector(`.userTask`).focus();

    newBtnDelete.addEventListener("click", () => {
        console.log(`Delete Click Test Successful`);
        document.querySelector(`.taskContainer`).removeChild(newTask);
    });

    newBtnEdit.addEventListener(`click`, () => {
        console.log(`Edit Click Test Ok`);
        if (newBtnEdit.textContent == `EDIT`) {
            newToDoTask.removeAttribute("readonly");            
            newToDoTask.focus();
            newBtnEdit.textContent = `SAVE`;
            newBtnEdit.classList.remove(`bg-green-400`);
            newBtnEdit.classList.add(`bg-blue-400`);
        } else {
            newToDoTask.setAttribute("readonly", "readonly");
            newBtnEdit.textContent = `EDIT`;
            newBtnEdit.classList.remove(`bg-blue-400`);
            newBtnEdit.classList.add(`bg-green-400`);
        }
    });
});
