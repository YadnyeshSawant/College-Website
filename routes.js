let express = require('express');
let router = express.Router();

router.get('/',(request,response)=>{
    response.render("index");
});
router.get('/previous_registration',(request,response)=>{
    response.render("previous_registration");
});
router.get('/login',(request,response)=>{
    response.render("login");
});
router.get('/',(request,response)=>{
    response.render("index");
});
router.get('/admission',(request,response)=>{
    response.render("admission");
});
router.get('/religion-details',(request,response)=>{
    response.render("religion-details");
});
router.get('/income',(request,response)=>{
    response.render("income");
});
router.get('/domicile',(request,response)=>{
    response.render("domicile");
});
router.get('/aadhar',(request,response)=>{
    response.render("aadhar");
});
router.get('/previous-year-edu',(request,response)=>{
    response.render("previous-year-edu");
});
router.get('/stud_port',(request,response)=>{
    response.render("stud_port");
});
router.get('/Registration',(request,response)=>{
    response.render("Registration");
});
router.get('/submit',(request,response)=>{
    response.render("submit");
});

//export
module.exports = router;