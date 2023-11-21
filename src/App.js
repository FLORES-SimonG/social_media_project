
import './App.css';
import  Testimonio  from './componentes/Testimonio'

function App() {
  return (
    <div className="App">
      <div className='contenedorPrincipal'>
        <h1>Estos son aquellas personas que se animaron a cambiar de carrera:</h1>
        <Testimonio
        nombre='Jimmy Bostian'
        pais='Suecia'
        imagen='Jimmy'
        cargo='Ingeniero de Software'
        empresa='Spotify'
        testimonio='Siempre tuve miedo a la programación, pero con un buen plan de estio todo es posible.
        Con esto, pude progresar significativamente. Hoy estoy feliz con mi trabajo, pero siempre busco en progresar.'/>
        <Testimonio
        nombre='Julieta Kremer'
        pais='Austria'
        imagen='Julieta'
        cargo='Ingeniera de Software'
        empresa='Scout24'
        testimonio='Estuve años buscando una carrera para estudiar y descubrí el mundo de la tecnología. 
        Ha hecho una revolución en mi vida. He trabajado como camarera y, en mis tiempos libres, trataba de estudiar un poco.
        La falta de tiempo no es excusa cuando hay motivación. Hoy soy
        Ingeniera en Software.'/>
        <Testimonio
        nombre='Lissa Holz'
        pais='Alemania'
        imagen='Lissa'
        cargo='Desarrolladora de Backend'
        empresa='Paulaner'
        testimonio='Estudié Ingeniería Química, carrera que amé y disfruté. Una experiencia increíble cuando obtuve mi primer trabajo en
        una industria Química, pero con los riesgos que había, decidí hacer un cambio y por eso me incliné en estudiar Desarrollo Web.'/>
        
      </div>
    </div>
  );
}

export default App;
