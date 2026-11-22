# MultiTasking App - AI Development Log

## Version 1 - Basic Task Planner

The AI tool used is ChatGPT

### Prompt that was used
Create the first version of my Student Task Planner web
application called MultiTasking App using HTML, CSS,
and JavaScript. I want students to be able to enter an
assignment or task name, click an Add Task button,
and see the task added to a list. Keep the design simple
for now and separate the code into index.html,
style.css, and script.js. Explain what each file does
so I can understand the application.

### What the AI generated 
- HTML for the page structure 
- CSS for the styling
- JavaScript for adding the tasks
- Basic empty input validation

### Testing Results
To be completed 

## Version 2 Adding the delete task feature

### Development:
For the second version of my application I have worked on adding a Delete button so students can remove tasks they no longer need I used so I have updated the JavaScript and CSS with assistance from ChatGPT

### AI Assistance
I used ChatGPT to help with the implementation of the Delete button and its styling, I have applied the changes to my application and tested the functionality to make sure it worked correctly

### AI Request Summary

I used ChatGPT to help add a Delete button to each task in my MultiTasking App using JavaScript because the button needed to remove only the selected task without affecting the others not only that I have also used AI assistance for the CSS styling while keeping the existing Add Task functionality working

### Changes Made:
- Added a Delete button for each task.
- Updated the JavaScript to remove the selected task.
- Added CSS to change the button's appearance.

### Testing:
I tested the application by adding multiple tasks and deleting one of them not only that I have checked that the other tasks remained in the list and that the Add Task button still worked

### Result:
The Delete button worked correctly, and the existing functionality was not affected.


## Version 3  Marking Tasks as Completed

### Development
For the third version of my application, I worked on adding a feature that allows students to mark tasks as completed without deleting them I have updated the JavaScript and CSS with assistance from ChatGPT

### Prompt that was used
I want to add a feature to my MultiTasking App that allows students to mark tasks as completed when a task is completed, the text should have a line through it students should also be able to unmark a completed task keep the existing Add Task and Delete Task functionality working

### AI Assistance
I used ChatGPT to help with the checkbox functionality and CSS styling for completed tasks I have applied the changes to my application and tested the functionality

### Changes Made
- Added a checkbox beside each task
- Updated JavaScript to mark and unmark tasks as completed
- Added CSS to display completed tasks with a line through the text
- Kept the Add Task and Delete Task features working

### Testing
I tested the application by adding two tasks and marking one as completed. I checked that the completed task had a line through its text and that unchecking it removed the line. I also tested the Delete button to make sure it still worked

### Result
The completed task feature worked correctly, and the existing functionality was not affected


## Version 4  Saving Tasks Using localStorage

### Development
For the fourth version of my application, I worked on saving tasks so students don't lose their assignments when refreshing the page so I have updated the JavaScript to use localStorage while keeping the existing features working

### Prompt that was used
I want to improve my MultiTasking App by saving tasks using JavaScript localStorage currently, tasks disappear when I refresh the page i want added tasks and their completion status to be saved automatically, and deleted tasks should stay deleted keep my existing Add Task, Delete Task, and checkbox functionality working

### AI Assistance
I used ChatGPT to help with the localStorage functionality and organizing the JavaScript code. I reviewed the changes and tested the application to check that tasks were saved correctly

### Changes Made
- Added localStorage to save tasks in the browser
- Updated JavaScript to load saved tasks when opening the application
- Saved the completion status of each task
- Updated the Delete functionality so removed tasks stay deleted
- Kept the existing HTML and CSS design

### Testing
I tested the application by adding multiple tasks and refreshing the page to check if they were still there. I also marked a task as completed and refreshed the page to check that its status was saved so after that, I deleted a task and checked that it did not appear again after refreshing.

### Result
The tasks remained saved after refreshing the page and The
completion status was also saved, and deleted tasks did not reappear

