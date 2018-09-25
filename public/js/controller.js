app.controller("myctrl",($scope,myfactory,$http)=>{
  var obj;
  var obj1=[];
   $scope.prod={
      id:1
  };

  $scope.findRecord=()=>{
      console.log("clicked");
    if($scope.prod.name){
        console.log($scope.prod.name);
        $scope.tasks = myfactory.searchRecord($scope.tasks,$scope.prod.name);
        console.log($scope.tasks);
    }
  };

  searchRecord=()=>{
    
     var promise = myfactory.showRecords();
     promise.then(function(data){
        $scope.tasks = data;
        myfactory.taskArray = $scope.tasks;
        $scope.prod.id= parseInt(data[data.length-1].id)+1;
     },function(err){
        $scope.result = err;
     });
   
  }
  $scope.fetchRecord=()=>{
    //  var promise = myfactory.showRecords();
    //  console.log(myfactory.taskArray);
     searchRecord();
  };
    
  $scope.addRecord = ()=>{
  
     $http.post('/additem',$scope.prod).then(function(data){
         $scope.result=data;
         console.log("posted");
         searchRecord();
         $scope.prod.id++;
     },function(err){
         $scope.result=err;
         console.log("error:"+err);
     }
    );
    
      
   
  }

 
   
   $scope.markForDelete=(id)=>{
    $http({
    method: 'GET',
    url: "/markfordelete/"+id,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}

  }).then(function(data){
        console.log(data);
        searchRecord();
    },function(err){
        console.log(err);
    }
    );
      
 };
    $scope.deleteRecord =()=>{
        $http.get("/deleteitem").then(function(data){
            $scope.result = data;
            console.log(data);
            searchRecord();
        },function(err){
            $scope.result = err;
        });
          
    };
    // $scope.searchRecord =()=>{
    //   $scope.tasks =  myfactory.searchRecord($scope.name);
    // };

    $scope.updateRecord =()=>{

        if(obj1){
            obj1.name = $scope.prod.name;
            obj1.desc = $scope.prod.desc;
            
        console.log("object is:",obj1);
        $http.post('/update',obj1).then(function(data){
         $scope.result=data;
         console.log("posted");
         searchRecord();
         $scope.prod.id++;
     },function(err){
         $scope.result=err;
         console.log("error:"+err);
     });
    }
    };
    $scope.editRecord =(task)=>{
        $http({
    method: 'GET',
    url: "/markforedit/"+task.id,
    headers: {'Content-Type': 'application/x-www-form-urlencoded'}

  }).then(function(data){
        console.log(data);
        searchRecord();
    },function(err){
        console.log(err);
    }
    );
     
        obj1 = task;
        $scope.prod.name = task.name;
        $scope.prod.desc = task.desc;
    };
    $scope.totalCount = ()=>{
        if(myfactory.taskArray){
        return myfactory.taskArray.length;}
        else{
            return 0;
        }
    };
    $scope.selectedField = ()=>{
        return myfactory.selectedFields();
    }
});