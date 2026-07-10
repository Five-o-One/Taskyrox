export const FaDic = {
  titleListNotDone: 'تسک های امروز',
  subTittleNotDone: (n: number | string) => {
    if (n === 0) {
      return 'هیچ تسکی نداری'
    } else {
      return `${n} تسک را باید انجام دهید.`
    }
  },
  titleListDone: 'تسک های انحام شده',
  subTittleDone: (n: number | string) => `${n} تسک انجام شده است.`,
  highPriorityTitle: 'بالا',
  mediumPriorityTitle: 'متوسط',
  lowPriorityTitle: 'پایین',
  saveTitle: 'ذخیره',
  addingNewTaskTitle: 'افزودن وظیفه جدید',
  tagTitle: 'تگ ها',
  appName: 'کوئرا لیست',
  emptyStateTitle:'چه کارهایی امروز برای انجام داری؟',
  emptyStateDescription: 'میتونی الان تسک‌هاتو اینجا بنویسی و برنامه ریزی رو شروع کنی!',
  taskTitlePlaceholder:'نام تسک',
  taskDescriptionPlaceholder:'توضیحات',
  logoutTitle:'خروج',
  navbarHomeTitle: 'خانه',
  navbarTasksTitle: 'تسک ها',
  navbarCalendarTitle: 'تقویم',
  navbarReportsTitle: 'گزارشات',
  navbarSettingsTitle: 'تنظیمات',
  navbarSupportTitle: 'پشتیبانی',
  navbarProfileTitle: 'پروفایل',
  navbarLightThemeTitle:'روشن',
  navbarDarkThemeTitle:'خاموش',
  navbarGreeting:'سلام'
}