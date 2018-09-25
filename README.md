# Crud
crud based on MEAN STACK {Mongo DB , Express JS , Angular JS , Node JS}   

For Demo : https://shielded-earth-24100.herokuapp.com/

note: users may have added few records so first fetch records delete existing record then use it.


Instructions : 
1.) machine should have node and mongo installed
2.) npm install 
3.) nodemon app.js


User interface is not taken care... only the MVC and MVVM architecture of project development is considered in this.

Fields
1.) Id is auto generated
2.) Name is entered by user
3.) Description is entered by user

Add Operation : Add operation allows user to add the element to the DB. Fields mentioned above are stored accordingly.

Delete Operation : On clicking the bin icon the row get selected(or marked red) and clicking delete button will delete all the red marked rows.

Edit Operation : On clicking the pencil icon the row get selected(or marked green) for editing and data get transfered to name and desc fields and changes shall be made there and clicking update button will update that record.

Search Operation : Search is done on the basis of name. Enter the name in name field and click the search option and only the searched row will be visible.

Fetch Operation: Fetch Shows all of the records added so far.

