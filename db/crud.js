const schema = require("./schema");

var operations = {
    addProduct:(itemObj,res)=>{
        var schemaObj = new schema({
            id:itemObj.id,
            name:itemObj.name,
            desc:itemObj.desc
        });
        schemaObj.save((err,content)=>{
            if(err){
                res.send("error adding product!!");
            }
            else{
                res.send("object added!!");
            }
        })
    },
    findProduct:(res)=>{
        schema.find({},(err,data)=>{
          if(!err){
            res.send(data);
            // console.log(data);
          }
        })
    },
    findProductToDelete:(res)=>{
       schema.remove({markForDeletion:true},(err,data)=>{
            if(data){
                res.send(data);
            }
            else{
                res.send(err);
            }
       });
    },
    updateProduct:(prod,res)=>{
            var query={id: prod.id};
        schema.findOne(query,(err,data)=>{
            if(data){
                data.name = prod.name;
                data.desc = prod.desc;
                data.markForEdit = false;
                // data.markForDeletion = !data.markForDeletion;
                data.save((err,cont)=>{
                    res.send(cont);
                })
                
                
              }}); 
    },
    markforDelete:(id1,res)=>{
        var query={id: id1};
        schema.findOne(query,(err,data)=>{
            if(data){
                data.markForDeletion = !data.markForDeletion;
                data.save((err,cont)=>{
                    res.send(cont);
                })
                
                
              }}); 
      
    },
    markforEdit:(id1,res)=>{
        var query={id: id1};
        schema.findOne(query,(err,data)=>{
            if(data){
                data.markForEdit = !data.markForEdit;
                data.save((err,cont)=>{
                    res.send(cont);
                })
                
                
              }}); 
      
    },
       
  

}

module.exports= operations;