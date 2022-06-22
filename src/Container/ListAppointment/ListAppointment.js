import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';

function ListAppointment(props) {

    return (
        <section id="appointment" className="appointment">
            <div className="container">
                <div className="section-title">
                    <h2>Make an Appointment</h2>
                    <p>
                        Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc
                        aliquam eget nibh eu euismod. Donec dapibus blandit uam volutpat
                        sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia
                        finibus tortor. Curabitur luctus eleifend odio. Phasqellus placerat
                        mi et suscipit pulvinar.
                    </p>
                </div>
                <div className='row'>
                    <div className='col-6 text-center'>
                        <NavLink to={"/bookappoinment"}>BookAppointment</NavLink>
                    </div>
                    <div className='col-6 text-center'>
                        <NavLink to={"/listappoinment"}>ListAppointment</NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ListAppointment;