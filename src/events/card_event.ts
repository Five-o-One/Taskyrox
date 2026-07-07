import { AddNewTask } from "../components/Card/add_task";
import { Modifycard } from "../components/Card/modify_card";
import type { Task } from "../types/task";


const emptyTask: Task = {
  id: Date.now(), // یک آیدی موقت بر اساس زمان فعلی (یا می‌تونی 0 بذاری)
  title: "", // نام تسک خالی است تا کاربر خودش تایپ کند
  description: "", // توضیحات خالی
  isDone: false, // مسلما تسک جدید هنوز انجام نشده
  priority: "", // اولویت هنوز انتخاب نشده
  createAt: new Date().toISOString(), // زمان همین الان
  editAt: new Date().toISOString(),
  
  // دقت کن: من نمی‌دونم CardState شما چه مقادیری می‌گیره (مثلا "TODO" یا "UNDONE"). 
  // مقدار پیش‌فرض استیت خودت رو اینجا بنویس:
  state: {isTagmenuOpened : false} as any 
};

export function clickedOnAddEvent() {

    document.addEventListener("click", (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const addBtn = target.closest("#NewTaskCard");
      if (addBtn) {
        addBtn.outerHTML = Modifycard(emptyTask);
        return;
      }
      const closeBtn = target.closest("#closeModifyCardBtn");
      if (closeBtn) {
        const modifyCardEl = target.closest("#Creating-Task");
        if (modifyCardEl) {
          modifyCardEl.outerHTML = AddNewTask();
        }
        return;
      }
    });
  }

