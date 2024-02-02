import { useEffect } from "react"
import { useState,  } from "react"


export const Pokédex = () => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [input, setInput] = useState('')
    const [clickdata, setClickdata] = useState('')

    const handleInputChange = (event) => {
        const pokename = event.target.value
        
        setInput(pokename)
    }

    const handleOnClick = (event) => {
        event.preventDefault()
        setClickdata(input)

        console.log(data)
    }


    async function getPoke(pokename) {

        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
            const json = await response.json()

            setData(json)
            setError(null)

        } catch (error) {
            setError(error)
            setData(null)
        }
    }

    useEffect(() => {
        getPoke(clickdata)
    }, [clickdata])

    return (
        <div>
            <input value={input} type="text" onChange={handleInputChange} name="poke" placeholder="Search Pokémon"/> {/*add onchange */}
            <button onClick={handleOnClick}>Search</button>
            <br/>
            <img src={data?.sprites?.front_default} />
            <h2>{data?.name}</h2>
            <p>{data?.base_experience}</p>
            
        </div>
    )
}