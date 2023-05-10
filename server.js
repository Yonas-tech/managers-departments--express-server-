const port = 8080;
const express = require("express");
const app = express();

// JSX Veiw Engine
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());

app.get('/',(req,res)=>{
    res.render(`home`)
})

//managers:
const managers = require('./models/managers')
app.get('/managers',(req, res)=>{
    res.render('managers/index',{managers:managers})
})

app.get('/managers/:idOfManager', (req,res)=>{
    const manager = managers.find(manager => manager.id == req.params.idOfManager);
    res.render('managers/show',{manager: manager});
})

//departments:
const departments = require('./models/departments');
app.get('/departments',(req,res)=>{
    res.render('departments/index',{departments: departments}); 
    console.log(departments); 
})

app.get('/departments/:idOfDepartment', (req,res)=>{
    const department = departments.find(department => department.id == req.params.idOfDepartment);
    res.render('departments/show',{department: department});
    console.log(department); 
})

// Listen to port
app.listen(port,()=>{
    console.log(`Server is listening on, ${port}`);
})
