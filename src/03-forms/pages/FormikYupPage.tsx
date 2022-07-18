import { useFormik } from 'formik'
import * as Yup from 'yup';

export const FormikYupPage = () => {


    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: ""
        },
        onSubmit: (values) => {
            console.log(values)
        },
        validationSchema: Yup.object({
            firstName: Yup.string().max(15, 'Debe tener menos de 15 caracteres').required('Debe ingresar un nombre'),
            lastName: Yup.string().max(20, 'Debe tener menos de 20 caracteres').required('Debe ingresar un apellido'),
            email: Yup.string().email('Debe ingresar un email válido').required('Debe ingresar un email')
        })
    });


     
    return (
        <div>
            <h1>Formik Yup Tutorial</h1>
            <hr />

            <form onSubmit={ handleSubmit } noValidate>
                <label htmlFor="firstName">Nombre</label>
                <input 
                    type="text" 
                    className={ touched.firstName && errors.firstName ? 'has-error' : '' }
                    { ...getFieldProps('firstName') }
                />
                { touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}

                <label htmlFor="lastName">Apellido</label>
                <input 
                    type="text" 
                    className={ touched.lastName && errors.lastName ? 'has-error' : '' }
                    { ...getFieldProps('lastName') }
                />
                { touched.lastName && errors.lastName && <span>{ errors.lastName }</span>}

                <label htmlFor="email">Email</label>
                <input 
                    type="email"
                    className={ touched.email && errors.email ? 'has-error' : '' }
                    { ...getFieldProps('email') }
                />
                { touched.email && errors.email && <span>{ errors.email }</span>}

                <button type="submit">Crear</button>
            </form>
        </div>
    )
}
