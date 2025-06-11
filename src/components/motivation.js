export default function getMotivation(tasks) {
  if (tasks.length === 0) {
    return "You haven't added any tasks. Start by planning something!";
  } else if (tasks.length === 1) {
    return "Just one task? Let's aim a bit higher!";
  } else if (tasks.length < 5) {
    return "Good start! Keep going!";
  } else {
    return "Great job! You're on a productive streak!";
  }
}
