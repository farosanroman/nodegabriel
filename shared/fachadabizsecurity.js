var dbbizsecurity = require("../conections/dbbizsecurity");
var httpMsgs = require("../httpMsgs/httpMsgs");

//console.log(dbbizsecurity);

exports.GetDSN = function (request, response, userlogin , userpassword) {
    
    var querysql = "";
    querysql = querysql + "[dbo].[GetURLDsnByUserLogin] '" + userlogin + "' , '" + userpassword + "'";


    dbbizsecurity.executeSql(querysql, function (data, err) {
        
        if (err) {
            httpMsgs.show500(request, response, err);
        }
        else {
            httpMsgs.sendJson(request, response, data);
        }

        
    });
};

exports.GetDSNVariableCommon = function (request, response, userlogin , userpassword) {
    
    var querysql = "";
    querysql = querysql + "[dbo].[GetURLDsnByUserLogin] '" + userlogin + "' , '" + userpassword + "'";


    dbbizsecurity.executeSql(querysql, function (data, err) {
        
        if (err) {
            httpMsgs.show500(request, response, err);
        }
        else {
            var dbConfigBizSecurity=[];
            var confdbsqlarray= {};
            var confarray = [];
            var config={};
            //var e=data[0].orgdsn;
            //console.log(e);
            if ((data[0].orgdsn)!="") {

                confarray = data[0].orgdsn.split(';');

                config={
                    user: confarray[2].replace("uid=",""),
                    password: confarray[3].replace("pwd=",""),
                    server: confarray[0].replace("server=",""),
                    datauserbase: confarray[4].replace("database=",""),
                    port: 1433,
                    connectionTimeout : 30000,
                    pool: {
                        max: 100,
                        min: 0,
                        idleTimeoutMillis: 30000
                    }
                    //options: {
                        //encrypt: true
                    //}
                };

                
            }else{

                config={
                    user: "",
                    password: "",
                    server: "",
                    datauserbase: "",
                    port: 1433,
                    connectionTimeout : 5000,
                    pool: {
                        max: 1,
                        min: 0,
                        idleTimeoutMillis: 1000
                    }
                    //options: {
                        //encrypt: true
                    //}
                };
                
            }
            exports.GetDSNCommon = config;
            
            response.status(200).json(config).end();
            
           
        }


    });
};


exports.GetDSNCommonOLD = {
    user: "vinsocaparaguaylog",
    password: "*guarani2017&",
    server: "206.72.126.20",
    database: "vinsocaparaguay",
    port: 1433,
    //options: {
        //encrypt: true
    //}
};