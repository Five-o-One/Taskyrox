import { AddNewTask } from "../components/Card/add_task";
import { Modifycard } from "../components/Card/modify_card";
import type { Task } from "../types/task";

const currentTask: Task = {
  id: Date.now(),
  title: "",
  description: "",
  isDone: false,
  priority: "",
  createAt: new Date().toISOString(),
  editAt: new Date().toISOString(),

  state: { isTagmenuOpened: false } as any,
};

function renderModifyCard() {
  const card = document.querySelector("#Creating-Task");

  if (card) {
    card.outerHTML = Modifycard(currentTask);
  }
}

export function clickedOnAddEvent() {
  document.addEventListener("click", (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const addBtn = target.closest("#NewTaskCard");
    if (addBtn) {
      addBtn.outerHTML = Modifycard(currentTask);
      return;
    }//render
    const tagMenuBtn = target.closest("#TagMenuBtn");
    if (tagMenuBtn) {
      currentTask.state.isTagmenuOpened = !currentTask.state.isTagmenuOpened;
       //core
      renderModifyCard();

      return;
    }
    const closeBtn = target.closest("#closeModifyCardBtn");
    if (closeBtn) {
      currentTask.state.isTagmenuOpened = false;

      const modifyCardEl = target.closest("#Creating-Task");

      if (modifyCardEl) {
        modifyCardEl.outerHTML = AddNewTask();
      }

      return;
    }
    const lowbtn = target.closest("#lowPriorityBtn");
    if (lowbtn) {
      currentTask.priority = "LOW";
      currentTask.state.isTagmenuOpened = false;
      renderModifyCard();
      return;
    }
    const mediumBtn = target.closest("#mediumPriorityBtn");
    if (mediumBtn) {
      currentTask.priority = "MEDIUM";
      currentTask.state.isTagmenuOpened = false;
      renderModifyCard();
      return;
    }
    const highBtn = target.closest("#highPriorityBtn");
    if (highBtn) {
      currentTask.priority = "HIGH";
      currentTask.state.isTagmenuOpened = false;
      renderModifyCard();
      return;
    }
  });
}
