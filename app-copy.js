import http from 'http';
import colors from 'colors';

const httpServer = http.createServer( (req, res) => {
    
    console.log(req);
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv');
    res.writeHead(200, { 'Content-Type': 'text/plain' });


    res.write('id, nombre\n'.white);
    res.write('1, Bryant\n'.white);
    res.write('2, Guts\n'.white);
    res.write('3, Calacas\n'.white);
    res.write('4, Musashi\n'.white);
    
    res.end();
})
.listen( 8080 );

console.log(`${"Escuchando el puerto:".blue} ${`${8080}`.red}`);