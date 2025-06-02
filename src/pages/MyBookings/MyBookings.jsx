import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getBookedAppointment } from '../../utilities/addToDB';
import Appointments from '../AppointmentsList/Appointments';

const MyBookings = () => {

    const [appointmentList, setAppointmentList] = useState([]);

    const handleCancelAppointments = (id) => {

        const data = JSON.parse(localStorage.getItem('appointmentList'));
        // console.log(data);
        const updatedData = data.filter((itemId) => itemId.id !== id)
        console.log(updatedData);
        console.log(id);

        localStorage.setItem('appointmentList', JSON.stringify(updatedData));

        // const appointmentsData = getBookedAppointment();
        // localStorage.removeItem()
        const remainingAppointments = appointmentList.filter((clicked) => clicked.id !== id);
        setAppointmentList(remainingAppointments);




    }

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