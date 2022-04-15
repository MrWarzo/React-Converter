import { useState } from "react"

export default function ASCIIconverter() {
    const [value, setValue] = useState("");
    const [valueConverted, setValueConverted] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const handleChange = (event) => {
        setValue(event.target.value);
        const values = value.split(" ");

        setValueConverted("");
        //setValue("");

        values.map((v) => {
            setValueConverted((vc) => vc + String.fromCharCode(parseInt(v, 16)));
        })
    }


    return <>
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleChange}></input>
        </form>
        <p>{valueConverted}</p>
    </>
}