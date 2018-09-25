app.factory("myfactory",($http,$q)=>{
    var object = {
        taskArray:[],
        showRecords(){
            var defer = $q.defer();
         $http.get('/getitem').then(function(data){
          if(data.data){
          defer.resolve(data.data);
        this.taskArray = data.data;
        // $scope.tasks = data.data;
         
           
          }
     },function(err){
        //  $scope.result=err;
        defer.reject(err);
        //  console.log("error:"+err);
     });
            return defer.promise;
        },
        deleteTask(){
            this.taskArray= this.taskArray.filter((x)=>{
                return !x.markForDeletion;
            });
        },
        searchRecord(arr,name){
            console.log(arr);
            return arr.filter((x)=>{
               return (x.name==name);
            });
        },
        receiveValue(task,tasks){
           var obj = tasks.filter((x)=>{
                return x==task;
            })[0];
            console.log(obj);
            return obj;
            
           
        },
        updateRecord(name,desc,obj){
            obj.markForEdit=false;
            obj.name = name;
            obj.desc = desc;
            this.taskArray[obj.id-1] = obj;
        },
        selectedFields(){
            var obj = this.taskArray.filter((x)=>{
                return x.markForDeletion || x.markForEdit;
            });
            return obj.length;
        }
    };
            return object;
});


