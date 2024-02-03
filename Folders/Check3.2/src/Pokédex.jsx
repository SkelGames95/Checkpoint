import { useEffect } from "react"
import { useState,  } from "react"


export const Pokédex = () => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [input, setInput] = useState('')
    const [clickdata, setClickdata] = useState('')
    const [collapsed, setCollapsed] = useState(true)

    const handleInputChange = (event) => {
        const pokename = event.target.value
        
        setInput(pokename)
    }

    const handleOnClick = (event) => {
        event.preventDefault()
        setClickdata(input)

        console.log(data)
    }

    const handleToggle = () => {
        setCollapsed(coll => !coll)

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
            <input value={input.toLowerCase()} type="text" onChange={handleInputChange} name="poke" placeholder="Search Pokémon"/>
            <button type="submit" onClick={handleOnClick}>Search</button>
            <br/>
            <div className="info-section">
                <img src={data?.sprites?.front_default} />
                <h2>{data?.name}</h2>
                <p>{data?.base_experience}</p>
                {/* <p>{data && data.abilities.map(item => item.ability)}</p> */}
                <button onClick={handleToggle}>{collapsed == true ? 'More Info' : 'Hide Info'}</button>
            </div>
            {!collapsed ? (
            <div className="info-section">
                {/* <p>{data?.egg-group}</p>
                <p>{data?.color}</p>
                <p>{data?.forms}</p> */}
            </div>)
            :
            (<div className="info-section-collapsed">
                {/* <p>{data?.egg-group}</p>
                <p>{data?.color}</p>
                <p>{data?.forms}</p> */}
            </div>)}
        </div>
    )
}