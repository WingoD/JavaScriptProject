angular.module('timerapp', [])
    .controller('clock', function($scope){
        $scope.timerCount = -1;
        $scope.timerLength = 0;

        $scope.startTimer = function(){
            alert ("GO");

            setInterval(function(){
                $scope.timerCount +=1;
                if ($scope.timerCount == $scope.timerLength){
                    alert ("DONE");
                    return;
                }
            },1000)
        };

    });
