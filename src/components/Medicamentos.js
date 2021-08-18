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
            console.log(e, 'ERRORR')
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
                <h5 className="tituli-izq">Pastillas</h5> 
                <hr></hr>
                <section className='section-title-med'>
                        <ul className="title-table">
                            <li>Marcas que ofrecemos</li>
                            <li>Laboratorio</li>
                            <li>Precio(sin cobertura medica)</li>
                        </ul>
                        <br></br>
                </section>
                {
                        medicamentos.pills && medicamentos.pills.length >=0 && medicamentos.pills.map((item, index) => { 
                            return (
                                <li className="title-table-1" key={index}>
                                    <div className="upper">{item.brand}</div>
                                    <div>{item.laboratory}</div>
                                    <div>${item.price}</div>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul>
                <h5 className="tituli-izq">Anillos</h5> 
                <hr></hr>
                <section className='section-title-med'>
                        <ul className="title-table">
                            <li>Marcas que ofrecemos</li>
                            <li>Laboratorio</li>
                            <li>Precio(sin cobertura medica)</li>
                            <br></br>
                        </ul>
                    </section>

                {
                        medicamentos.rings && medicamentos.rings.length >=0 && medicamentos.rings.map((item, index) => { 
                            return (
                                <li className="title-table-1" key={index}>
                                    <div className="upper">{item.brand}</div>
                                    <div className="align-s">{item.laboratory}</div>
                                    <div>${item.price}</div>
                                </li>
                            )
                        })
                    }
                </ul>
                <ul>
                <h5 className="tituli-izq">Parches</h5> 
                <hr></hr>
                <section className='section-title-med'>
                        <ul className="title-table">
                            <li>Marcas que ofrecemos</li>
                            <li>Laboratorio</li>
                            <li>Precio(sin cobertura medica)</li>
                        <br></br>
                        </ul>
                </section>
                {
                        medicamentos.patches && medicamentos.patches.length >=0 && medicamentos.patches.map((item, index) => { 
                            return (
                                <li className="title-table-1" key={index}>
                                    <div className="upper">{item.brand}</div>
                                    <div>{item.laboratory}</div>
                                    <div>${item.price}</div>
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