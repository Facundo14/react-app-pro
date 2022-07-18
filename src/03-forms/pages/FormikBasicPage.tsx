import { FormikErrors, useFormik } from "formik"

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikBasicPage = () => {

    const validate = ({ firstName, lastName, email }: FormValues) => {

        const errors: FormikErrors<FormValues> = {};

        if (!firstName) {
            errors.firstName = "Requerido";
        } else if (firstName.length >= 15) {
            errors.firstName = "Debe contener 15 caracteres o menos";
        }

        if (!lastName) {
            errors.lastName = "Requerido";
        } else if (lastName.length >= 10) {
            errors.lastName = "Debe contener 10 caracteres o menos";
        }

        if(!email) {
            errors.email = "Requerido";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
            errors.email = "Email inválido";
        }

        return errors;

    }

    const { handleChange, values, handleSubmit, errors, touched, handleBlur } = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: ""
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validate
    });


     
    return (
        <div>
            <h1>Formik Tutorial</h1>
            <hr />

            <form onSubmit={ handleSubmit } noValidate>
                <label htmlFor="firstName">Nombre</label>
                <input 
                    type="text" 
                    name="firstName" 
                    onBlur={ handleBlur }
                    onChange={ handleChange } 
                    value={ values.firstName }
                />
                { touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}

                <label htmlFor="lastName">Apellido</label>
                <input 
                    type="text" 
                    name="lastName"
                    onBlur={ handleBlur } 
                    onChange={ handleChange } 
                    value={ values.lastName }
                />
                { touched.lastName && errors.lastName && <span>{ errors.lastName }</span>}

                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email" 
                    onBlur={ handleBlur }
                    onChange={ handleChange } 
                    value={ values.email }
                />
                { touched.email && errors.email && <span>{ errors.email }</span>}

                <button type="submit">Crear</button>
            </form>
        </div>
    )
}
