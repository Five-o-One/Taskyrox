import type { Task } from "../types/task";
import { TestDic } from "../dic/task";
export function ListTask(isDone:boolean , list: Task[]) {

    if(!isDone){
            return `<div class="flex flex-col">
            <div class="flex flex-col">
            <span class="font-bold text-lg">${TestDic.titleListNotDone}</span>
            <span class="text-sm text-secondary">${TestDic.subTittleNotDone(list.length)}</span>
            </div>
            <div>
    ${list.map(task => `<div>${task.title}</div>`).join('')}
            </div>
            </div>`
    }else{
        return `<div class="flex flex-col">
        <div class="flex flex-col">
        <span class="font-bold text-lg">${TestDic.titleListDone}</span>
        <span class="text-sm text-secondary">${TestDic.subTittleDone(list.length)}</span>
        </div>
        <div>
    ${list.map(task => `<div>${task.title}</div>`).join('')}
        </div>
        </div>`
    }
}