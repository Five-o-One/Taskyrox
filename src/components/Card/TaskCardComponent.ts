import type { Task } from "../../types/task";
import type {
  EditCardState,
  TaskCardState,
  OptionBtnState,
} from "../../types/task_card_state";
import { DoneCardComponent } from "./done_card";
import { Modifycard } from "./modify_card";
import { UnDoneCardComponent } from "./undone_card";

export function TaskCard(
  editState: EditCardState,
  state: TaskCardState,
  task: Task,
  optionState: OptionBtnState,
) {
  switch (state) {
    case "Done":
      return /* html */ ` 
        ${DoneCardComponent(task)}
          `;
    case "NotDone":
      return `
      ${UnDoneCardComponent(optionState.optionBtnSelected, task)}
      `;
    case "Edit":
      return `
      ${Modifycard(editState.tagBtnSelected, task)}
      `;
  }
}
