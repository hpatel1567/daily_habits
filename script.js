const habitList = document.getElementById('habit-list');
const newHabitInput = document.getElementById('new-habit');
const addHabitBtn = document.getElementById('add-habit');

let habits = JSON.parse(localStorage.getItem('habits')) || [];

function renderHabits() {
  habitList.innerHTML = '';
  habits.forEach((habit, index) => {
    const div = document.createElement('div');
    div.innerHTML = `
      <span class="${habit.completed ? 'completed' : ''}">${habit.name}</span>
      <button onclick="toggleHabit(${index})">${habit.completed ? 'Undo' : 'Done'}</button>
    `;
    habitList.appendChild(div);
  });
}

function toggleHabit(index) {
  habits[index].completed = !habits[index].completed;
  saveHabits();
}

function addHabit() {
  const name = newHabitInput.value.trim();
  if (name === '') return;
  habits.push({ name, completed: false });
  newHabitInput.value = '';
  saveHabits();
}

function saveHabits() {
  localStorage.setItem('habits', JSON.stringify(habits));
  renderHabits();
}

addHabitBtn.addEventListener('click', addHabit);
renderHabits();

