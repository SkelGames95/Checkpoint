import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

export const Form = () => {
    const [data, setData] = useState(() => {
        return {
            username:'',
            password:'',
        }
    })

    const inputRef = useRef(null);

    useEffect (() => {
        inputRef.current?.focus()
    }, [])

    const handleOnChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setData(c => {
            return{
                ...c,
                [name]:value,
            }
        })
    }

    return (
        <form >
            <label>Username:<input name="user" type="text" value={data.username} onChange={handleOnChange} ref={inputRef} placeholder="Username"/></label>
            <label>Password:<input name="password" type="password" value={data.password} onChange={handleOnChange} placeholder="Password"/></label>
        </form>
    )
}