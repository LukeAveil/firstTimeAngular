toDoApp.controller('ToDoController', function() {
  var self = this;

  self.todos = [];

  self.addToDo = function(todoText) {
    self.todos.push({task: todoText, completed: false});
  };

  self.removeToDo = function () {
    self.todos.pop();
  };
});
