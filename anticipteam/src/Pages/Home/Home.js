import React ,{ useState} from 'react'


export default function Home() {
    const [ Class, setClass] = useState(false)
    
    const handleChange=(e)=>{
        setClass( e.target.value);
     }
    
     return (
        <div>
            <input onChange={handleChange} />
        </div>
    )
}
