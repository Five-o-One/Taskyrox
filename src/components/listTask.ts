import { TestDic } from "../dic/task";
import type { Task } from "../types/task";
export function ListTask(isDone:boolean , list: Task[]) {
    const tasks : Task[] = list.filter(t=>!t.isDone)
    const tasksDone : Task[] = list.filter(t=>t.isDone)
    if(!isDone){
            return `<div class="flex flex-col">
            <div class="flex flex-col">
            <span class="font-bold text-lg">${TestDic.titleListNotDone}</span>
            <span class="text-sm text-secondary">${TestDic.subTittleNotDone(tasks.length)}</span>
            </div>
            <div>
    ${tasks.map(task => `<div>${task.title}</div>`).join('')}
            </div>
            </div>`
    }else{
        return `<div class="flex flex-col">
        <div class="flex flex-col">
        <span class="font-bold text-lg">${TestDic.titleListDone}</span>
        <span class="text-sm text-secondary">${TestDic.subTittleDone(tasksDone.length)}</span>
        </div>
        <div>
    ${tasksDone.map(task => `<div>${task.title}</div>`).join('')}
        </div>
        </div>`
    }
}