import React, {useState} from 'react'
import './collapse.scss'

function Collapse(props)  {
    const [isOpen, setIsOpen] = useState(false); 
    return (
        <div className="collapse">
            <button className="flechita" onClick ={() => setIsOpen(!isOpen) }> 
            {props.label}
            </button>
            {isOpen && <div className="content">
                <div>{props.children}</div> 
            </div>}
        </div>
    )

    }
export default Collapse;