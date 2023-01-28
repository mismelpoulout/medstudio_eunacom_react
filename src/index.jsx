import Layer from './layer';
import Examen from './componentes/examen';
import Historial from './componentes/historial';
import Navbar from './componentes/navbar';
import Bibliografia from './componentes/bibliografia';
import Estudia from './componentes/estudia';
import Juega from './componentes/juega';



export default function Body() {
    return (
        <div className='container'>
            <Layer />
            <Navbar />
            <Estudia />
            <Bibliografia />
            <Juega />
            <Examen />
            <Historial />
        </div>
    );
}
