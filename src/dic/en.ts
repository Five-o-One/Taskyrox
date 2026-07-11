export const EnDic = {
  titleListNotDone: "Today's Tasks",
  subTittleNotDone: (n: number | string) => {
    if (n === 0) {
      return 'You have no tasks.'
    } else {
      return `You have ${n} tasks to complete.`
    }
  },
  titleListDone: 'Completed Tasks',
  subTittleDone: (n: number | string) => `${n} tasks have been completed.`,
  highPriorityTitle: 'High',
  mediumPriorityTitle: 'Medium',
  lowPriorityTitle: 'Low',
  saveTitle: 'Save',
  addingNewTaskTitle: 'Add New Task',
  tagTitle: 'Tags',
  appName: 'Quera List',
  emptyStateTitle: 'What do you need to do today?',
  emptyStateDescription: 'Click on the image to start planning.',
  taskTitlePlaceholder: 'Task name',
  taskDescriptionPlaceholder: 'Description',
  logoutTitle: 'Logout',
  navbarHomeTitle: 'Home',
  navbarTasksTitle: 'Tasks',
  navbarCalendarTitle: 'Calendar',
  navbarReportsTitle: 'Reports',
  navbarSettingsTitle: 'Settings',
  navbarSupportTitle: 'Support',
  navbarProfileTitle: 'Profile',
  navbarLightThemeTitle: 'Light',
  navbarDarkThemeTitle: 'Dark',
  navbarGreeting: 'Hello',
}
