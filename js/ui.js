import { tasks } from './data.js'

const rootEl = document.getElementById('root')

const titleEl = document.createElement('h1')
titleEl.innerText = 'Список дел'
rootEl.append(titleEl)

const taskListEl = document.createElement('ul')
rootEl.append(taskListEl)

const createTaskElement = (task) => {
	const taskEl = document.createElement('li')
	const taskTitleEl = document.createElement('div')
	const taskCheckbox = document.createElement('input')

	taskTitleEl.textContent = task.title
	taskCheckbox.type = 'checkbox'
	taskCheckbox.checked = task.isDone

	taskEl.append(taskTitleEl, taskCheckbox)
	return taskEl
}

tasks.forEach((task) => {
	const taskEl = createTaskElement(task)
	taskListEl.append(taskEl)
})
