export const EnDic = {
  titleListNotDone: "Today's Tasks",
  getUndoneTaskSummary: (taskCount: number | string) => {
    if (taskCount === 0) {
      return 'You have no tasks.'
    } else {
      return `You have ${taskCount} tasks to complete.`
    }
  },
  titleListDone: 'Completed Tasks',
  getDoneTaskSummary: (taskCount: number | string) =>
    `${taskCount} tasks have been completed.`,
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
