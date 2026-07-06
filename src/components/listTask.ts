import { TestDic } from "../dic/task";
import type { Task } from "../types/task";
import { AddNewTask } from "./Card/add_task";
import { Card } from "./Card/card";
export function ListTask(isDone:boolean , list: Task[]) {
    const tasks : Task[] = list.filter(t=>!t.isDone)
    const tasksDone : Task[] = list.filter(t=>t.isDone)
    if(!isDone){
            return `<div class="flex flex-col w-full h-full">
            <div class="flex flex-col mb-4 space-y-4">
            <span class="font-bold text-lg text-text">${TestDic.titleListNotDone}</span>
            <span class="text-sm text-text-secondary">${TestDic.subTittleNotDone(tasks.length)}</span>
            ${AddNewTask()}
            </div>
            <div class="space-y-2 overflow-auto max-h-52">
    ${tasks.map(task => `${Card("NotDone" , task)}`).join('')}
            </div>
            </div>`
    }else{
        return `<div class="flex flex-col w-full h-full">
        <div class="flex flex-col mb-4 space-y-4">
        <span class="font-bold text-lg text-text">${TestDic.titleListDone}</span>
        <span class="text-sm text-text-secondary">${TestDic.subTittleDone(tasksDone.length)}</span>
        </div>
        <div class="space-y-2 overflow-auto max-h-52">
    ${tasksDone.map(task => `${Card("Done" , task)}`).join('')}
        </div>
        </div>`
    }
}