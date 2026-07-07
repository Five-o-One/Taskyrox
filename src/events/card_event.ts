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

export function clickedOnAddEvent() {
  document.addEventListener("click", (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    const addBtn = target.closest("#NewTaskCard");
    if (addBtn) {
      addBtn.outerHTML = Modifycard(currentTask);
      return;
    }
    const tagMenuBtn = target.closest("#TagMenuBtn");
    if (tagMenuBtn) {
      currentTask.state.isTagmenuOpened = !currentTask.state.isTagmenuOpened;

      const card = document.querySelector("#Creating-Task");

      if (card) {
        card.outerHTML = Modifycard(currentTask);
      }

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
  });
}
