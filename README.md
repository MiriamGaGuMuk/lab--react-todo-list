# To Do

## Context

Everybody need things to do. Specially when you are a person with not a good memory. You have learned awesome features from React.js needed in the real world life.

## The Assignment

Create a To Do application.

### Setup Instructions

```sh
#(1) Create a project
create-react-app todoapp

#(2) Go to the project
cd todoapp

#(3) Start the server
npm start
```

### Deliverables

+ A GitHub repository

## Requeriments

### Sprint 1 | Basic Project

You can work in one component, make sure to respect the structure and create a good markup witj JSX objects. _For filters (left side) I’m buttons._

### Sprint 2 | Date

Show the correct date.

Use `Date` object from JavaScript native to get the current date.

+ [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

### Sprint 3 | Create New Task

Create a basic form with an `input` and `button`. You’ll need to save that information in the State, and for each task you need an `id`, `name`, `completed`.

Remember that each new task is marked as uncompleted, so: `completed: false`.

### Sprint 4 | List All Tasks

Iterate over your State and print all Tasks in the DOM. You will need to add a `checkbox` for each Task you have.

### Sprint 5 | Check for Completed Tasks

Work with events on _checkboxes_. If you click in an uncompleted task you should grab that id, find it on the list, and change its value (completed) from false to true.

Also, as a way to give feedback you need to add an opacity of 50% to the element.

_You may take advantage from `Object.assign()` and probably you will need to merge that new task into the State property you handle_.

### Sprint 6 | Filter by “All”, “Complete” and “Incomplete”

It’s time to filter our tasks, if you click on any of three buttons you should see Tasks related to that filter.

### Sprint 7 | Search by

What about implementing a search? Yes! Filter tasks by name acoording to the value typed in the search box.

### Sprint 8 | Validate Inputs

Your app should not be able to save a task without a name. Handle in the State the error and show it as a feedback.

### Sprint 9 | BONUS | Saving twice

Don’t let the user save two tasks with the same name.

### Sprint 10 | BONUS | Edit Task Name

Ups! I made a mistake writing my Task. Can I change the name?

### Sprint 11 | BONUS | Remove Task from List

I’m not more interested in saving tasks after completed, I want to remove them.

### Sprint 12 | BONUS | Add “Date” to each Task

You learnt how to handle dates, add a new input to save the date you want to finish your task. And display it next to Task name.

### Sprint 13 | BONUS | Mark as Uncompleted

If you have a task checked as done, you can also mark as uncompleted.

## Expected Results

### Normal Mode

![ToDo Demo](TodoLab.mov)

### Explorer Mode

![ToDo Explorer Mode Demo](TodoLabExplorer.mov)

### Adventure Mode

![ToDo Adventure Mode Demo](TodoLabAdventure.mov)

#### About the Design

If you are struggling with design, focus on basic structure.
