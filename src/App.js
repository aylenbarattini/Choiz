
import './Styles/App.scss';
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main';
import Preguntas from './components/Preguntas';
import Medicamentos from './components/Medicamentos';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <body>
        <div className="contenedor-body">
          <p className="frase-body">
            Las mejores expertas en ginecología  del país están a tu disposición para conversar sin que tengas que salir de tu casa.
          </p>
          {/* <div>
        <button className="button-agendar" onClick={()=> setModalOpen(true)}>  
          Agendar una consulta
        </button>
        {modalOpen && 
          <Modal>
          Hola
          </Modal>
        }
      </div> */}
      <Main/>
      </div>
      <div>
      <Medicamentos/>
      </div>
      <div>
      <Preguntas/>
      </div>
      </body>
      <footer className="footer">
        <div className="par-f1">
        <img className="choiz-f" src={'/choizlogo.png'} />
        <p className="choiz-f">© XCALE HEALTH srl . Todos los derechos reservados.</p>
        </div>
        <div className="par-f">
        ¡Hablemos!
        <div className="iconos">
        <div className="cont-i">
        <img className="iconos-f" src={'/instagram.png'} />
        </div>
        <div className="cont-i">
        <img className="iconos-f" src={'/faceb.png'} />
        </div>
        <div className="cont-i">
        <img className="iconos-f" src={'/wp.png'} />
        </div>
        <div className="cont-i">
        <img className="iconos-f" src={'/sobre.png'} />
        </div>
        </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

