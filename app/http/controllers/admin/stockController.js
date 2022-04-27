const order = require("../../../models/order")
const user =  require("../../../models/user")


const moment = require('moment');
const { button } = require("noty");

function stockController() {
    return { 
         async stock(req, res) {
        const result =  await order.count({});
        const val = await order.aggregate([{$group: { _id: null, total: {$sum: '$price'}}}]);
        const recentsale = await order.find({},{"username":1,"price":1,"status":1,"createdAt":1,"_id":0});
        const customer =  await user.count({});
        
        io.on("messageSent", function (message) {
        $.notify("New Message\n" + message.message + "\n\nFrom: " + message.name, {
            autoHide: false,
            className: "success"
        });
    });
        
        
        res.render('admin/stock',{Count:result, Total: val[0].total,recentsale:recentsale,Customer:customer, moment: moment});

        
        }

            
    }
    
}

module.exports = stockController



