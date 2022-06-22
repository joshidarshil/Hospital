import { Form, Formik, useFormik, yupToFormErrors } from 'formik';
import React, { useState } from 'react';
import * as yup from "yup";
import { NavLink, useHistory } from 'react-router-dom';

function BookAppointment(props) {
    const [data, setData] = useState([]);

    let history = useHistory()

    let Appointment_set = {
        name: yup.string().required("Please enter your Name"),
        email: yup.string().required("Please enter your email").email("Please enter a valid email"),
        phone: yup.number().required("Please enter your mobile number").min(10),
        date: yup.date().required("Please enter the date")
    }

    let schema = yup.object().shape(Appointment_set);
    let initial = {
        name: "",
        email: "",
        phone: "",
        date: ""
    }

    const HandleSubmit = (values) => {
        let data = {
            id: Math.floor(Math.random() * 1000),
            ...values
        }


        let localData = JSON.parse(localStorage.getItem("users"));

        if (localData === null) {
            localStorage.setItem("users", JSON.stringify([data]));
        } else {
            localData.push(data)
            localStorage.setItem("users", JSON.stringify(localData))
        }

        history.push("/listappoinment")
    }

    const formik = useFormik({
        validationSchema: schema,
        initialValues: initial,
        onSubmit: (values, { resetForm }) => {
            HandleSubmit(values);
            resetForm();
        }
    })
    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title text-center">
                    <h2>Make an Appointment</h2>
                    <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                        blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                        Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                </div>
                <div className='row '>
                    <div className='col-6 text-center'>
                        <NavLink exact to={"/bookappoinment"} className="navlink scrollto"><span className="d-none d-md-inline">Booked Appointment</span></NavLink>
                    </div>
                    <div className='col-6 text-center'>
                        <NavLink exact to={"/listappoinment"} className="navlink scrollto"><span className="d-none d-md-inline">List Appointment</span></NavLink>
                    </div>
                </div>
                <Formik value={formik}>
                    <Form action method="post" role="form" className="php-email-form mb-3" onSubmit={formik.handleSubmit}>
                        <div className="row">
                            <div className="col-md-4 form-group">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.name} />
                                {formik.errors.name &&
                                    formik.touched.name ? (
                                    <p className='appointment_error'>{formik.errors.name}</p>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email} />
                                {formik.errors.email &&
                                    formik.touched.email ? (
                                    <p className='appointment_error'>{formik.errors.email}</p>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="col-md-4 form-group mt-3 mt-md-0">
                                <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" data-rule="minlen:4" data-msg="Please enter at least 4 chars"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.phone}
                                />
                                {formik.errors.phone &&
                                    formik.touched.phone ? (
                                    <p className='appointment_error'>{formik.errors.phone}</p>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4 form-group mt-3">
                                <input type="date" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.date}
                                />
                                {formik.errors.date &&
                                    formik.touched.date ? (
                                    <p className='appointment_error'>{formik.errors.date}</p>
                                ) : (
                                    ""
                                )}
                            </div>
                            <div className="col-md-4 form-group mt-3">
                                <select name="department" id="department" className="form-select">
                                    <option value>Select Department</option>
                                    <option value="Department 1">Department 1</option>
                                    <option value="Department 2">Department 2</option>
                                    <option value="Department 3">Department 3</option>
                                </select>
                                <div className="validate" />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <textarea className="form-control" name="message" rows={5} placeholder="Message (Optional)" defaultValue={""} />
                            <div className="validate" />
                        </div>
                        <div className="mb-3">
                            <div className="loading">Loading</div>
                            <div className="error-message" />
                            <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                        </div>
                        <div className="text-center"><button type="submit">Make an Appointment</button></div>
                    </Form>
                </Formik>
            </div>
        </section>

    );
}

export default BookAppointment;