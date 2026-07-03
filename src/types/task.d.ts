type priority = "LOW"|"MEDIUM"|"HIGHT";

export interface Task {
    id:number;
    title:string;
    description:string;
    isDone:boolean;
    priority: priority;
}