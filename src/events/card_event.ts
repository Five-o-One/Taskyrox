import { AddTask } from "../core/add_task";
import { CloseBtn } from "../core/close_caard";
import { PrSelector } from "../core/priority";
import { TagMenu } from "../core/tag_menu";

export function clickedOnAddEvent() {
  document.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    if (AddTask(target)) {
      return;
    }
    if (target.closest("#TagMenuBtn")) {
      TagMenu();
      return;
    }
    if (target.closest("#closeModifyCardBtn")) {
      CloseBtn(target);
      return;
    }
    if (PrSelector(target)) {
      return;
    }
  });
}
