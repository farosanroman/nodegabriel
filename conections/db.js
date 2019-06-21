var sqlDb = require('mssql');
var fbizsecurity = require("../shared/fachadabizsecurity");

var database = fbizsecurity.GetDSNCommon;

exports.executeSql = function (sql, callback) {

    var conn = new sqlDb.Connection(database);
    conn.connect().then(function () {

        var req = new sqlDb.Request(conn);
        req.query(sql).then(function (recordset) {
            conn.close();
            callback(recordset)
        }).catch(function (err) { 
            console.log(err);
            callback(null, err);
        });

    }).catch(function (err) {

        console.log(err);
        callback(null, err);
        
    });
};