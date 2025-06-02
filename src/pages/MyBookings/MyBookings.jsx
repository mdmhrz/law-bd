import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getBookedAppointment } from '../../utilities/addToDB';
import Appointments from '../AppointmentsList/Appointments';

const MyBookings = () => {

    const [appointmentList, setAppointmentList] = useState([]);


    const handleCancelAppointments = (id) => {
        // Get the current list from localStorage
        const data = JSON.parse(localStorage.getItem('appointmentList')) || [];

        // Filter out the canceled appointment by ID
        const updatedData = data.filter((itemId) => itemId !== String(id));

        // Update localStorage
        localStorage.setItem('appointmentList', JSON.stringify(updatedData));

        // Update local state (assuming appointmentList is from React state)
        const remainingAppointments = appointmentList.filter((item) => item.id !== id);
        setAppointmentList(remainingAppointments);
    };







    const data = useLoaderData();

    useEffect(() => {
        const appointmentsData = getBookedAppointment();
        const convertedStoredAppointments = appointmentsData.map(id => parseInt(id));
        const myAppointments = data.filter(lawyer => convertedStoredAppointments.includes(lawyer.id));
        setAppointmentList(myAppointments);
    }, []);


    return (
        <div className='max-w-11/12 mx-auto'>
            <div className='text-center mb-8 p-10'>
                <h1 className='font-bold text-2xl'>My Today Appointment</h1>
                <p>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
            </div>
            <div>
                {
                    appointmentList.map((lawyersData, index) => <Appointments key={index} lawyersData={lawyersData} handleCancelAppointments={handleCancelAppointments}></Appointments>)
                }
            </div>
        </div>
    );
};

export default MyBookings;