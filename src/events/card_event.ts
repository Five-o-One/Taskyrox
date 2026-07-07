import { AddNewTask } from "../components/Card/add_task";
import { Modifycard } from "../components/Card/modify_card";
import type { Task } from "../types/task";

const emptyTask: Task = {
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
      addBtn.outerHTML = Modifycard(emptyTask);
      return;
    }
    const closeBtn = target.closest("#closeModifyCardBtn");
    if (closeBtn) {
      const modifyCardEl = target.closest("#Creating-Task");
      if (modifyCardEl) {
        modifyCardEl.outerHTML = AddNewTask();
      }
      return;
    }
  });
}
