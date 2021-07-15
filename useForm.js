//hook para recuperar datos del formulario

import { useState } from "react"

export const useForm = (initialState = {}) => {

    const reset = () => {
        setValues(initialState)
    }
    const [values, setValues] =  useState (initialState);

    // const handleInputChange = ({target}) => {
    //     setValues({
    //         ...values,
    //         [target.name] : target.value,
          
    //     });

        return [values, ({target}) => {
            setValues({ 
                ...values,
                [target.name] : target.value,
            })
        }, ( () => {
            setValues(initialState)
        })]

    
}