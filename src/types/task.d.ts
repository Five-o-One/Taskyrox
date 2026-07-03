type priority = "LOW"|"MEDIUM"|"HIGH";

export interface Task {
    id:number;
    title:string;
    description:string;
    isDone:boolean;
    priority: priority;
}