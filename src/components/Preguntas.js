import React, {useEffect,useState} from 'react'
import './preguntas.scss'

const Preguntas = ({}) => {

    const [faqs, setFaqs] = useState ([])
    useEffect(() =>{
        obtenerFaqs()
    } , [])

    const obtenerFaqs = async () => {
    // await fetch ('https://run.mocky.io/v3/6f0fb5ae-1758-4537-84c7-f6669edd614f')
    // .then(response => response.json())

    // .then(data => setFaqs(data))
    try {
        const data = await fetch ('https://run.mocky.io/v3/6f0fb5ae-1758-4537-84c7-f6669edd614f')
        const response = await data.json()
        setFaqs (response)
    }catch(e) {
        console.log (e)
    }
    // .catch(function(error) {
    //     console.log('Hubo un problema con la petición Fetch:' + error.message)
    //   })
    }
    
    return (
        <div className="faqs">
            <h5 className="title-faqs">
                Preguntas Frecuentes
            </h5>
            <ul>
                {
                    // faqs && faqs.length >=0 && faqs.map(item => { 
                        faqs.map(item => { 
                    return (
                        <li key= {item.id}>
                        {item.title} - {item.description}
                        </li>
                            )
                    }
                    )
                }
            </ul>
        </div>
    )
}
export default Preguntas