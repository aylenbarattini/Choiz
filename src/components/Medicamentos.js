import React, {useEffect, useState} from 'react'
import './medicamentos.scss'

const Medicamentos = () => {
    const [medicamentos, setMedicamentos] = useState ([])

    const obtenerMedicamentos = async () => {
        try {
            const data = await fetch ('https://run.mocky.io/v3/1f00949f-adc2-4484-ad6d-4f565e82ad30')
            const response = await data.json()
            setMedicamentos(response.data)
        }catch(e) {
            console.log(e)
        }
    }

    useEffect(() =>{
        obtenerMedicamentos()
    } , [])
    
    return (
        <div className="medicamentos">
            <div>
            <h5 className="title-faqs">
                Listado de Medicamentos
            </h5>
            </div>
            <div className="listado-medic">
                <ul>
                    {
                        medicamentos && medicamentos.length >=0 && medicamentos.map(item => { 
                            return (
                                <li className="style-li" key= {item.pills}>
                                {item.brand} 
                               
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
export default Medicamentos