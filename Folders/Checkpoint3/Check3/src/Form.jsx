import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { Buttons } from "./Buttons";


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

    const handleOnSubmit = (event) => {
        event.preventDefault();
        setData({
            username:'',
            password:'',
        })
    }

    const handleReset = () => {
        setData({
            username:'',
            password:'',
        })
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <img width={24} height={24} src="./icons/username.png"/><input name="username" type="text" value={data.username} onChange={handleOnChange} ref={inputRef} placeholder="Username"/><br/>
            <img width={24} height={24} src="./icons/password.png"/><input name="password" type="password" value={data.password} onChange={handleOnChange} disabled={data.username.length < 3} placeholder="Password"/><br/><br/>
            <Buttons onClick={handleReset} value={data}/>
        </form>
    )
}