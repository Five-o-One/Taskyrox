import type { Task } from "../../types/task";
import type {
  TaskCardState,
} from "../../types/card_state";
import { DoneCardComponent } from "./done_card";
import { Modifycard } from "./modify_card";
import { UnDoneCardComponent } from "./undone_card";

/**
 * This component selects the correct task card component based on the current card state.
 * @param state States the current card state (Done, NotDone, or Edit).
 * @param task The task information.
 * @returns HTML string for the selected task card component.
 */

export function Card(
  state: TaskCardState,
  task: Task,
) {
  switch (state) {
    case "Done":
      return /* html */ ` 
        ${DoneCardComponent(task)}
          `;
    case "NotDone":
      return `
      ${UnDoneCardComponent(task)}
      `;
    case "Edit":
      return `
      ${Modifycard( task)}
      `;
  }
}
