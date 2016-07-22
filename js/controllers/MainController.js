app.controller('EditableFormCtrl', function($scope, $mdDialog) {
  $scope.tasks = []; 
  $scope.filterList = {}
  $scope.statuses = [
    {value: 1, text: 'Incomplete'},
    {value: 2, text: 'Complete'}
  ]; 
  // add user
	$scope.addTask = function() {
		$scope.inserted = {
		    description: '',
        status: 1
		};
	  $scope.tasks.push($scope.inserted);
	  };

    $scope.deleteTask = function(event, index){
      var confirm = $mdDialog.confirm()
        .title('Delete Task?')
        .targetEvent(event)
        .ok('Yes')
        .cancel('Cancel');
        $mdDialog.show(confirm).then(function(result) {
          $scope.tasks.splice(index, 1);
        });   
    }
});