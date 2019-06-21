var db = require("../conections/db");
var httpMsgs = require("../httpMsgs/httpMsgs");

//console.log(db);

exports.GetGerencialVentas = function (request, response, macroproyecto , proyecto) {
    
    var querysql = "";
    querysql = querysql + "M1x1_Gerencial_Ventas " + macroproyecto + "," + proyecto;


    db.executeSql(querysql, function (data, err) {
        

        if (err) {
            httpMsgs.show500(request, response, err);
        }
        else {
            
            httpMsgs.armarJson(request, response, data);

        }

        
    });
};