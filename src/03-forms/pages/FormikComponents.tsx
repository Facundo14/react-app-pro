import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup';

export const FormikComponents = () => {
     
    return (
        <div>
            <h1>Formik Components</h1>
            <hr />

            <Formik
                initialValues={{ 
                    firstName: "", 
                    lastName: "", 
                    email: "",
                    terms: false,
                    jobType: "",
                }}
                onSubmit={ (values) => {
                    console.log(values)
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string().max(15, 'Debe tener menos de 15 caracteres').required('Debe ingresar un nombre'),
                        lastName: Yup.string().max(20, 'Debe tener menos de 20 caracteres').required('Debe ingresar un apellido'),
                        email: Yup.string().email('Debe ingresar un email válido').required('Debe ingresar un email'),
                        terms: Yup.boolean().oneOf([true], 'Debe aceptar los términos y condiciones'),
                        jobType: Yup.string()
                                    .required('Es necesario seleccionar una opción')
                                    .oneOf(['developer', 'designer', 'it-senior', 'it-junior'], 'Debe seleccionar una opción'),
                    })
                }
            >
                {
                    (formik) => (
                        <Form>
                            <label htmlFor="firstName">Nombre</label>
                            <Field name='firstName' type='text' />
                            <ErrorMessage name='firstName' component='span' />

                            <label htmlFor="lastName">Apellido</label>
                            <Field name='lastName' type='text' />
                            <ErrorMessage name='lastName' component='span' />

                            <label htmlFor="email">Email</label>
                            <Field name='email' type='text' />
                            <ErrorMessage name='email' component='span' />

                            <label htmlFor="jobType">Tipo de trabajo</label>
                            <Field name='jobType' as='select'>
                                <option value="">Seleccione una opción</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">It Senior</option>
                                <option value="it-junior">It Junior</option>
                            </Field>
                            <ErrorMessage name='jobType' component='span' />

                            <label>
                                <Field name='terms' type='checkbox' />
                                Términos y condiciones
                            </label>
                            <ErrorMessage name='terms' component='span' />

                            <button type="submit">Crear</button>
                        </Form>
                    )
                }

            </Formik>
            
        </div>
    )
}
