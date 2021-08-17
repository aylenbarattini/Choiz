    
import './modal.scss'

const Modal = ({children,toggle, alignContent = 'center'}) => {

    return (
        <div className="modalTemplate">
            <div className="modal">
                <button className="bot-cruz" onClick={toggle}><img className="cruz" src={'/cruz.png'}/></button>
                <div className="modalHeader">
                    <h2 className="title-modal">Paso a paso para la consulta remota</h2>
                </div>
                <div className="title-m">
                    <div>
                        <img className="iconos-modal" src={'/modal1.png'} />
                        <h5 className="numeros">1.</h5>
                        <h3 className="title-1">Completás algunas preguntas breves y nos contás el motivo 
                        de la consulta.</h3>
                        <h4>Vamos a elegir la doctora adecuada según su especialidad y tu necesidad.</h4>
                    </div>
                    <div>
                    {/* <div className="lineas">
                        <hr className="linea">
                        </hr>
                    </div> */}
                        <img className="iconos-modal" src={'/modal2.png'} />
                        <h5 className="numeros">2.</h5>
                        <h3 className="title-1">Te contactamos por y coordinamos el pago para reservar la fecha.</h3>
                        <h4>Si tenés Swiss Medical es GRATIS* y si no, podes pedir reintegro</h4> 
                        <h5>*Excepto para planes que requieren copago</h5>   
                    </div>
                    {/* <div className="lineas">
                        <hr className="linea"> 
                        </hr>
                    </div> */}
                    <div>
                        <img className="iconos-modal" src={'/modal3.png'} />
                        <h5 className="numeros">3.</h5>
                        <h3 className="title-1">Tenés la videollamada con tu doctora, desde donde estés y sin límite de tiempo.</h3> 
                        <h4>¡Dura lo que vos necesites!</h4>   
                    </div>
                    
                    
                </div>
                <div className={`modalContent ${alignContent}`}> 
                    {children}
                </div>
            </div>
        </div>
    )}

export default Modal
