import type { priority } from "../../types/task";

export function PriorityNavColor(taskPriority: priority) {
  switch (taskPriority) {
    case "LOW":
      return `
  <div
          id="priorityColorID"
          class="absolute top-0 right-0 bg-success h-full w-1 rounded-lg"
        ></div>
        
  `;
      break;
    case "MEDIUM":
      return `
  <div
          id="priorityColorID"
          class="absolute top-0 right-0 bg-warning h-full w-1 rounded-lg"
        ></div>
        
  `;
      break;
    case "HIGH":
      return `
  <div
          id="priorityColorID"
          class="absolute top-0 right-0 bg-danger h-full w-1 rounded-lg"
        ></div>
        
  `;
      break;
  }
}
