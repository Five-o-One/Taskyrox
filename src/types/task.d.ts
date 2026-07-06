import type { CardState } from "./card_state";

type priority = "" | "LOW" | "MEDIUM" | "HIGH";

export interface Task {
  id: number;
  title: string;
  description: string;
  isDone: boolean;
  priority: priority;
  state: CardState;
}
