import React, {useState} from 'react'
import Modal from './Modal'

const ComponenteMain = () => {
    const [modalOpen, setModalOpen] = useState(false)

    const toggle = () => {
        setModalOpen(!modalOpen)
    }
    return(
      <div>
        <button className="button-agendar" onClick={()=> setModalOpen(true)}>  
          Agendar una consulta
        </button>
        {modalOpen && 
          <Modal toggle={toggle}>
          </Modal>
        }
      </div>
    )

}

export default ComponenteMain;