import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getBookedAppointment } from '../../utilities/addToDB';
import Appointments from '../AppointmentsList/Appointments';

const MyBookings = () => {

    const [appointmentList, setAppointmentList] = useState([]);

    const data = useLoaderData();

    useEffect(() => {
        const appointmentsData = getBookedAppointment();
        const convertedStoredAppointments = appointmentsData.map(id => parseInt(id));
        const myAppointments = data.filter(lawyer => convertedStoredAppointments.includes(lawyer.id));
        setAppointmentList(myAppointments);
    }, []);


    return (
        <div>
            <div>
                <h1>My Today Appointment</h1>
                <p>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
            </div>
            <div>
                {
                    appointmentList.map((lawyersData, index) => <Appointments key={index} lawyersData={lawyersData}></Appointments>)
                }
            </div>
        </div>
    );
};

export default MyBookings;