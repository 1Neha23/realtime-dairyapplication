const menu = require("../../../models/menu");



function searchController() {
    return {
        async search(req, res) {
           // res.send("hello world")
            const searchbox= menu.find({name:req.query.name}).then((result)=>{ 
             return res.render('home', { pizzas:result })
            })
            
            
           //const searchbox1 = await menu.find({},{"name":1,});
           //res.send(searchbox1)
           //console.log(searchbox1 );

            //const searchbox= menu.find({name:req.params.name}).then((result)=>{ 
               // console.log(req.body.name, req.params.name);
            // return res.render('home', { pizzas: result })
           

            
            
           
           

        }
    }
}

module.exports = searchController