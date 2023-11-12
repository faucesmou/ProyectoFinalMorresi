import React, { useState } from 'react';


const CheckoutForm = ( {onConfirm}) => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
        console.log(userData)
    }

    return (

        <div className='container-Form'>
            
            <form onSubmit={handleConfirm} className='Form'>
                <label className='Label-form'>
                    Nombre
                    <input  className='Input'
                    type='text'
                    value={name}
                    onChange={({ target }) => setName(target.value)}>
                    </input>
                    
                     </label>
                <label className='Label-form'>
                    Teléfono
                    <input  className='Input'
                    type='text'
                    value={phone}
                    onChange={({ target }) => setPhone(target.value)}>
                    </input>
                    
                     </label>
                <label className='Label'>
                    Email
                    <input  className='Input'
                    type='text'
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}>
                    </input>                
                     </label>
                     <div className='Label-form'>
                        <button type='submit' className='Button-Form'>Crear Orden</button>
                     </div>

            </form>
            
            
             </div>
    )
}

export default CheckoutForm

