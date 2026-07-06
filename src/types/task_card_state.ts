export type TaskCardState = "Edit" | "Done" | "NotDone";

export interface EditCardState {
  tagBtnSelected: boolean;
}

export interface OptionBtnState {
  optionBtnSelected: boolean;
}
