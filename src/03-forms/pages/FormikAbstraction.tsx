import { Formik, Form } from 'formik'
import * as Yup from 'yup';
import { MySelectInput, MyCheckboxInput, MyTextInput } from '../components';

export const FormikAbstraction = () => {
     
    return (
        <div>
            <h1>Formik Abstraction</h1>
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
                            <MyTextInput 
                                label='Nombre'
                                name='firstName'
                                placeholder='Nombre'
                            />

                            <MyTextInput 
                                label='Apellido'  
                                name='lastName'
                                placeholder='Apellido' 
                            />

                            <MyTextInput 
                                label='Email'
                                name='email'
                                type='email'
                                placeholder='Email'
                            />

                            <MySelectInput 
                                label='Tipo de trabajo'
                                name='jobType'
                            >
                                <option value="">Seleccione una opción</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">It Senior</option>
                                <option value="it-junior">It Junior</option>    
                            </MySelectInput>

                            <MyCheckboxInput label={'Términos y condiciones'} name={'terms'} />

                            <button type="submit">Crear</button>
                        </Form>
                    )
                }

            </Formik>
            
        </div>
    )
}
