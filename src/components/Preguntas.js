import React, {useEffect, useState} from 'react'
import Collapse from './Collapse'
import './preguntas.scss'

const Preguntas = () => {
    const [faqs, setFaqs, toggle] = useState ([])

    const obtenerFaqs = async () => {
        try {
            const data = await fetch ('https://run.mocky.io/v3/6f0fb5ae-1758-4537-84c7-f6669edd614f')
            const response = await data.json()
            setFaqs(response.data)
        }catch(e) {
            console.log(e)
        }
    }

    useEffect(() =>{
        obtenerFaqs()
    } , [])
    
    return (
        <div className="faqs">
            <div>
            <h5 className="title-faqs">
                Preguntas Frecuentes
            </h5>
            </div>
            <div className="listado-faqs">
                <ul>
                    {
                        faqs && faqs.length >=0 && faqs.map(item => { 
                        return (
                        <li className="style-li" key= {item.id}>
                            <div className="align-flechita">
                                {item.title}   
                            </div>
                            <div>
                            <Collapse label='V' className="flechita-v">
                                <div className="collapse-faqs">{item.description}</div>
                            </Collapse>
                            </div>
                            <hr className="linea-faqs">
                            </hr> 
                        </li>
                        )  
                    })
                    }
                </ul>
            </div>
        </div>
    )
}
export default Preguntas