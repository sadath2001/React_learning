import React from 'react'
import { useState } from 'react';
const Field: React.FC = () => {
    const [value, setValue] = useState<string | undefined>()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('submiited')
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>{value}</h1>
                <input type="text" onChange={handleChange} placeholder='Enter your name' value={value} />
            </form>
        </div>
    )
}

export default Field;