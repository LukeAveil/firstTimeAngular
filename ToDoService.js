toDoApp.service('ToDoService', ['$http', 'ToDoFactory', function($http, ToDoFactory) {

  var self = this;

  self.getAll = function() {
    var todos = [];
    _fetchToDosFromApi(todos);
    return todos;
  };

  function _fetchToDosFromApi(todos) {
    $http.get('http://quiet-beach-24792.herokuapp.com/todos.json')
      .then(function(response) {
        _handleResponseFromApi(response.data, todos);
      }, function(err) {});
  }

  function _handleResponseFromApi (data, todos) {
    data.forEach(function(data) {
      todos.push(new ToDoFactory(data.text, data.completed));
    });
  }    
}]);
