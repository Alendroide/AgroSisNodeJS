const objs = [
    {
        title : 'Usuarios',
        tables : [
            {
                title : 'getAll',
                url : '/usuarios',
                method : 'GET',
                body : 'NULL',
                responses : '200 OK - 500 Internal Error'
            },
            {
                title : 'create',
                url : '/usuarios',
                method : 'POST',
                body : '{<br> identificacion : Int,<br> nombre : String,<br> apellidos : String,<br> fechaNacimiento : Date,<br> telefono : Int,<br> correoElectronico : String,<br> password : String<br> }',
                responses : '201 Created - 400 Client Error - 500 Internal Error'
            },
            {
                title : 'login',
                url : '/login',
                method : 'POST',
                body : '{<br>correoElectronico : String,<br>password : String<br>}',
                responses : '200 OK - 404 Not Found - 400 Client Error - 500 Internal Error'
            },
            {
                title : 'update',
                url : '/usuarios/:id',
                method : 'PUT',
                body : '{<br> identificacion : Int?,<br> nombre : String?,<br> apellidos : String?,<br> fechaNacimiento : Date?,<br> telefono : Int?,<br> correoElectronico : String?,<br> password : String?<br> }',
                responses : '200 OK - 400 Client Error - 500 Internal Error'
            }
        ]
    },
    {
        title : 'Pasantes',
        tables : [
            {
                title : 'getAll',
                url : '/pasantes',
                method : 'GET',
                body : 'NULL',
                responses : '200 OK - 500 Internal Error'
            },
            {
                title : 'create',
                url : '/pasantes',
                method : 'POST',
                body : '{<br>fk_Usuarios : Int,<br> fechaInicioPasantia : Date,<br> fechaFinalizacion : Date,<br> salarioHora : Int,<br> area : String<br>}',
                responses : '201 Created - 400 Client Error - 500 Internal Error'
            }
        ]
    },
    {
        title : 'Horas Mensuales',
        tables : [
            {
                title : 'getHoras',
                url : '/horasmensuales',
                method : 'GET',
                body : '{<br>id : Int<br>}',
                responses : '200 OK - 500 Internal Error'
            },
            {
                title : 'regHoras',
                url : '/horasmensuales',
                method : 'POST',
                body : '{<br>fk_Pasantes : Int,<br>minutos : Int,<br>mes : String<br>}',
                responses : '201 Created - 400 Client Error - 500 Internal Error'
            }
        ]
    }
]

const tables = objs.map(controller=>(
    `<div>
        <div class="d-flex">
            <h5 class="text-center p-3 my-3 mx-auto shadow rounded-3">${controller.title}</h5>
        </div>
        
        ${controller.tables.map(table=>(
            `<table class="table table-striped shadow">
                <thead>
                    <th class="text-center" colspan="2">${table.title}</th>
                </thead>
                <tbody>
                    <tr>
                        <td><b>URL:</b></td>
                        <td>${table.url}</td>
                    </tr>
                    <tr>
                        <td><b>Method:</b></td>
                        <td>${table.method}</td>
                    </tr>
                    <tr>
                        <td><b>Headers:</b></td>
                        <td>Content-Type: application/json</td>
                    </tr>
                    <tr>
                        <td><b>Body:</b></td>
                        <td>${table.body}</td>
                    </tr>
                    <tr>
                        <td><b>Responses:</b></td>
                        <td>${table.responses}</td>
                    </tr>
                </tbody>
            </table>`
        ))}

    </div>`
))

document.getElementById('tables').innerHTML = tables;