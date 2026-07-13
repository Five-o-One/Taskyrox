export const FaDic = {
  titleListNotDone: 'تسک های امروز',
  getUndoneTaskSummary: (taskCount: number | string) => {
    if (taskCount === 0) {
      return 'هیچ تسکی نداری'
    } else {
      return `${taskCount} تسک را باید انجام دهید.`
    }
  },
  titleListDone: 'تسک های انحام شده',
  getDoneTaskSummary: (taskCount: number | string) =>
    `${taskCount} تسک انجام شده است.`,
  highPriorityTitle: 'بالا',
  mediumPriorityTitle: 'متوسط',
  lowPriorityTitle: 'پایین',
  saveTitle: 'ذخیره',
  addingNewTaskTitle: 'افزودن وظیفه جدید',
  tagTitle: 'تگ ها',
  appName: 'کوئرا لیست',
  emptyStateTitle: 'چه کارهایی امروز باید انجام بدی؟',
  emptyStateDescription: 'روی تصویر کلیک کن تا برنامه‌ریزی شروع بشه.',
  taskTitlePlaceholder: 'نام تسک',
  taskDescriptionPlaceholder: 'توضیحات',
  logoutTitle: 'خروج',
  navbarHomeTitle: 'خانه',
  navbarTasksTitle: 'تسک ها',
  navbarCalendarTitle: 'تقویم',
  navbarReportsTitle: 'گزارشات',
  navbarSettingsTitle: 'تنظیمات',
  navbarSupportTitle: 'پشتیبانی',
  navbarProfileTitle: 'پروفایل',
  navbarLightThemeTitle: 'روشن',
  navbarDarkThemeTitle: 'خاموش',
  navbarGreeting: 'سلام',
}
