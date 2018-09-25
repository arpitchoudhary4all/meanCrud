//function Task(id,name,desc){
//    this.id = id;
//    this.name = name;
//    this.desc = desc;
////    this.active = active|"Y";
//}
//ecma-6 style
class Task{
    constructor(id,name,desc){
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.markForDeletion = false;
        this.markForEdit = false;
        
    }
    toggle(){
        this.markForDeletion = !this.markForDeletion;
        this.markForEdit = false;
        
    }
    toggleEdit(){
        this.markForEdit = !this.markForEdit;
        this.markForDeletion = false;
    }
    red(){
        return this.markForDeletion && !this.markForEdit;
    }
    green(){
         return !this.markForDeletion && this.markForEdit;
    }
        
}