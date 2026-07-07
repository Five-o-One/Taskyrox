import { cardState } from "../state/card_state";
import type { Task } from "../types/task";
import { ListTask } from "./listTask";
import DATA from "../../MOCK_DATA.json";

//! FAKE DATA
const testData: Task[] = [
  {
    id: 1,
    title: "خرید مواد غذایی",
    description: "خرید میوه، سبزیجات و لبنیات برای هفته",
    isDone: false,
    priority: "HIGH",
    state: cardState,
    createAt: "",
    editAt: "",
  },
  {
    id: 2,
    title: "بررسی گزارش مالی",
    description: "تحلیل صورت‌حساب‌های ماه گذشته و ارائه به مدیر",
    isDone: true,
    priority: "HIGH",
    state: cardState,
    createAt: "",
    editAt: "",
  },
  {
    id: 3,
    title: "تماس با پشتیبانی",
    description: "پیگیری وضعیت تیکت ثبت شده برای سرویس اینترنت",
    isDone: false,
    priority: "MEDIUM",
    state: cardState,
    createAt: "",
    editAt: "",
  },
  {
    id: 4,
    title: "مطالعه کتاب",
    description: "خواندن دو فصل از کتاب جدید در مورد مدیریت زمان",
    isDone: false,
    priority: "LOW",
    state: cardState,
    createAt: "",
    editAt: "",
  },
  {
    id: 5,
    title: "برنامه‌ریزی سفر",
    description: "رزرو هتل و بررسی مسیرهای دسترسی به مقصد",
    isDone: false,
    priority: "MEDIUM",
    state: cardState,
    createAt: "",
    editAt: "",
  },
  {
    id: 6,
    title: "آپدیت وب‌سایت",
    description: "اصلاح بخش فوتر و تغییر فونت‌های عنوان اصلی",
    isDone: true,
    priority: "HIGH",
    state: cardState,
    createAt: "",
    editAt: "",
  },
  {
    id: 7,
    title: "جلسه با تیم فنی",
    description: "بررسی باگ‌های گزارش شده در نسخه جدید اپلیکیشن",
    isDone: false,
    priority: "HIGH",
    state: cardState,
    createAt: "",
    editAt: "",
  },
  {
    id: 8,
    title: "ورزش روزانه",
    description: "۳۰ دقیقه پیاده‌روی سریع در پارک نزدیک خانه",
    isDone: true,
    priority: "LOW",
    state: cardState,
    createAt: "",
    editAt: "",
  },
  {
    id: 9,
    title: "ارسال ایمیل به مشتری",
    description: "پاسخ به سوالات مشتری در مورد نحوه استفاده از پنل",
    isDone: false,
    priority: "MEDIUM",
    state: cardState,
    createAt: "",
    editAt: "",
  },
  {
    id: 10,
    title: "تمیزکاری میز کار",
    description: "مرتب کردن فایل‌های کاغذی و پاکسازی کیبورد",
    isDone: false,
    priority: "LOW",
    state: cardState,
    createAt: "",
    editAt: "",
  },
];
//! FAKE DATA END

export function MainContent() {
  return `
    <div class="flex flex-col justify-around w-full h-full p-4 bg-bg md:w-4/5">
    <div class="w-full h-full p-4">${ListTask(false, testData)}</div>
    <div class="w-full h-full p-4">${ListTask(true, testData)}</div>
    </div>`;
}
