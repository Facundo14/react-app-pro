import { BrowserRouter, Navigate } from 'react-router-dom';
import { Routes, Route, NavLink } from 'react-router-dom';
import { RegisterPage, FormikBasicPage, FormikYupPage, FormikComponents, FormikAbstraction } from '../03-forms/pages';

import logo from '../logo.svg'

export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className='main-layout'>
            <nav>
                <img src={ logo } alt="React logo" />
                <ul>
                    <li>
                        <NavLink to="/register" className={ ( {isActive }) => isActive ? 'nav-active' : '' }>Register Page</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formikBasic" className={ ( {isActive }) => isActive ? 'nav-active' : '' }>Formik Basic</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formik-yup" className={ ( {isActive }) => isActive ? 'nav-active' : '' }>Formik Yup</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formik-components" className={ ( {isActive }) => isActive ? 'nav-active' : '' }>Formik Components</NavLink>
                    </li>
                    <li>
                        <NavLink to="/formik-abtraction" className={ ( {isActive }) => isActive ? 'nav-active' : '' }>Formik Abstraction</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className={ ( {isActive }) => isActive ? 'nav-active' : '' }>About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/users" className={ ( {isActive }) => isActive ? 'nav-active' : '' }>Users</NavLink>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route path="about" element={ <h1>About Page</h1> } />
                <Route path="users" element={<h1>Users Page</h1>} />
                <Route path="register" element={<RegisterPage />} />
                <Route path="formikBasic" element={<FormikBasicPage />} />
                <Route path="formik-yup" element={<FormikYupPage />} />
                <Route path="formik-components" element={<FormikComponents/>} />
                <Route path="formik-abtraction" element={<FormikAbstraction/>} />
                <Route path="/*" element={<Navigate to="/home" replace />} />
            </Routes>
        </div>
    </BrowserRouter>
  )
}
