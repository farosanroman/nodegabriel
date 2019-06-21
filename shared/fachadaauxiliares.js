var db = require("../conections/db");
var httpMsgs = require("../httpMsgs/httpMsgs");

//console.log(db);

exports.GetCias = function (request, response) {
    
    var querysql = "";
    querysql = querysql + "select * from cont_plan_auxiliar where tipo='IN' ";


    db.executeSql(querysql, function (data, err) {
        
        if (err) {
            httpMsgs.show500(request, response, err);
        }
        else {
            httpMsgs.sendJson(request, response, data);
        }

        
    });
};