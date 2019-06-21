var sqlDb = require('mssql');
var settings = require("../conections/settingssql");




exports.showHome = function (req, resp) {
    if (settings.httpMsgsFormat === "HTML") {
        resp.writeHead(200, { "Content-Type": "text/html" });
        resp.write("<html><html><head><title>Home</title></head><body>Valid endpoints:<br> /employees - GET - To List all Employees</body></html>");
    } else {
        resp.writeHead(200, "Valid EndPoints", { "Content-Type": "application/json" });
        resp.write(JSON.stringify([{ url: "/employees", operation: "GET", description: "To List all Employees" }]));
    }
    
    resp.end();
}

exports.show500 = function (req, resp, err) {
    if (settings.httpMsgsFormat === "HTML") {
        resp.writeHead(500, "Internal Error occurred", { "Content-Type": "text/html" });
        resp.write("<html><html><head><title>500</title></head><body>500: Internal Error. Details: " + err + "</body></html>");
    } else {
        resp.writeHead(500, "Internal Error occurred", { "Content-Type": "application/json" });
        resp.write(JSON.stringify({ data: "ERROR occurred: " + err }));
    }
    
    resp.end();
};

exports.show404 = function (req, resp) {
    if (settings.httpMsgsFormat === "HTML") {
        resp.writeHead(404, "Resource Not Found", { "Content-Type": "text/html" });
        resp.write("<html><html><head><title>404</title></head><body>404: Resource not found. Go to <a href='/'>Home</a></body></html>");
    } else {
        resp.writeHead(404, "Resource not found", { "Content-Type": "application/json" });
        resp.write(JSON.stringify({ data: "Resource not found." }));
    }
    
    resp.end();
};

exports.show405 = function (req, resp) {
    if (settings.httpMsgsFormat === "HTML") {
        resp.writeHead(405, "Method not supported", { "Content-Type": "text/html" });
        resp.write("<html><html><head><title>405</title></head><body>405: Method not supported</body></html>");
    } else {
        resp.writeHead(405, "Method not supported", { "Content-Type": "application/json" });
        resp.write(JSON.stringify({ data: "Method not supported." }));
    }
    
    resp.end();
};

exports.show413 = function (req, resp) {
    if (settings.httpMsgsFormat === "HTML") {
        resp.writeHead(413, "Request Entity Too Large", { "Content-Type": "text/html" });
        resp.write("<html><html><head><title>413</title></head><body>413: Request Entity Too Large.</body></html>");
    } else {
        resp.writeHead(413, "Request Entity Too Large", { "Content-Type": "application/json" });
        resp.write(JSON.stringify({ data: "Request Entity Too Large" }));
    }
    
    resp.end();
};

exports.send200 = function (req, resp, data) {
    resp.writeHead(200, { "Content-Type": "application/json" });
    resp.end();
};

exports.sendJson = function (req, resp, data) {
    resp.writeHead(200, { "Content-Type": "application/json" });
    if (data) resp.write(JSON.stringify(data));
    resp.end();
};

exports.armarJson = function (req, resp, data) {

        resp.writeHead(200, { "Content-Type": "application/json" });
        if (data) {

            var nivel0="";
            var nivel1="";
            var nivel2="";

            var nivel0array=[];
            var nivel1array=[];
            var nivel2array=[];

            var nivelanter= data[0].nivel;
            var proyectoidanter= data[0].proyectoid;
            var proyectonameanter= data[0].proyectoname;
            var statusanter= data[0].status;
            var cantstatusanter= data[0].cantstatus;
            var precioanter= data[0].precio;
            var areaanter= data[0].area;
            var precio_promedioanter= data[0].precio_promedio;
            var mt2anter= data[0].mt2;
            var cobradoanter= data[0].cobrado;
            var porcobraranter= data[0].porcobrar;
            var vencidoanter= data[0].vencido;
            var porvenceranter= data[0].porvencer;


            for(var i = 0; i < data.length; i++){


               
                if (proyectoidanter!=data[i].proyectoid){


                    nivelanter= data[i].nivel;
                    proyectoidanter= data[i].proyectoid;
                    proyectonameanter= data[i].proyectoname;
                    statusanter= data[i].status;
                    cantstatusanter= data[i].cantstatus;
                    precioanter= data[i].precio;
                    areaanter= data[i].area;
                    precio_promedioanter= data[i].precio_promedio;
                    mt2anter= data[i].mt2;
                    cobradoanter= data[i].cobrado;
                    porcobraranter= data[i].porcobrar;
                    vencidoanter= data[i].vencido;
                    porvenceranter= data[i].porvencer;
                    
                    nivel0array=[];
                    
                    if (data[i].nivel==0){
                        nivel0 = {
                            "nivel":data[i].nivel,
                            "proyectoid":data[i].proyectoid,
                            "proyectoname":data[i].proyectoname,
                            "status":data[i].status,
                            "cantstatus":data[i].cantstatus,
                            "precio":data[i].precio,
                            "area":data[i].area,
                            "precio_promedio":data[i].precio_promedio,
                            "mt2":data[i].mt2,
                            "cobrado":data[i].cobrado,
                            "porcobrar":data[i].porcobrar,
                            "vencido":data[i].vencido,
                            "porvencer":data[i].porvencer,
                        }
                        nivel0array.push(nivel0)
                    }
                }else{

                    if (data[i].nivel==0){
                        nivel0 = {
                            "nivel":data[i].nivel,
                            "proyectoid":data[i].proyectoid,
                            "proyectoname":data[i].proyectoname,
                            "status":data[i].status,
                            "cantstatus":data[i].cantstatus,
                            "precio":data[i].precio,
                            "area":data[i].area,
                            "precio_promedio":data[i].precio_promedio,
                            "mt2":data[i].mt2,
                            "cobrado":data[i].cobrado,
                            "porcobrar":data[i].porcobrar,
                            "vencido":data[i].vencido,
                            "porvencer":data[i].porvencer,
                        }
                        nivel0array.push(nivel0)
                    }

                    if (data[i].nivel==1){

                        nivel1 = {
                            "nivel":data[i].nivel,
                            "proyectoid":data[i].proyectoid,
                            "proyectoname":data[i].proyectoname,
                            "status":data[i].status,
                            "cantstatus":data[i].cantstatus,
                            "precio":data[i].precio,
                            "area":data[i].area,
                            "precio_promedio":data[i].precio_promedio,
                            "mt2":data[i].mt2,
                            "cobrado":data[i].cobrado,
                            "porcobrar":data[i].porcobrar,
                            "vencido":data[i].vencido,
                            "porvencer":data[i].porvencer,
                            "nivel0":nivel0array
                        }
                        nivel1array.push(nivel1)
                        //nivel0array = [];
                    } 

                    if (data[i].nivel==2){

                        nivel2 = {
                            "nivel":data[i].nivel,
                            "proyectoid":data[i].proyectoid,
                            "proyectoname":data[i].proyectoname,
                            "status":data[i].status,
                            "cantstatus":data[i].cantstatus,
                            "precio":data[i].precio,
                            "area":data[i].area,
                            "precio_promedio":data[i].precio_promedio,
                            "mt2":data[i].mt2,
                            "cobrado":data[i].cobrado,
                            "porcobrar":data[i].porcobrar,
                            "vencido":data[i].vencido,
                            "porvencer":data[i].porvencer,
                            "nivel1":nivel1array
                        }
                        nivel2array.push(nivel2)
                        nivel1array = [];
                    }   

                }//end del if proyectianter != proyectoid
                             
            }
            //nivel1array.push(nivel1)
            //nivel2array.push(nivel2)

        }
            resp.write(JSON.stringify(nivel2array));
            resp.end();
    
};