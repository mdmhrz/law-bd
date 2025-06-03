import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { getBookedAppointment } from '../../utilities/addToDB';
import Appointments from '../Appointments/Appointments';
import { Bounce, toast } from 'react-toastify';
import AppointmentChart from '../../components/AppointmentChart/AppointmentChart';
import Barchart from '../../components/Barchart/Barchart';

const MyBookings = () => {
    const navigate = useNavigate();
    const [appointmentList, setAppointmentList] = useState([]);
    const data = useLoaderData();

    useEffect(() => {
        const appointmentsData = getBookedAppointment();
        const convertedStoredAppointments = appointmentsData.map(id => parseInt(id));
        const myAppointments = data.filter(lawyer => convertedStoredAppointments.includes(lawyer.id));
        setAppointmentList(myAppointments);
    }, [data]);

    const handleCancelAppointments = (id, name) => {
        const data = JSON.parse(localStorage.getItem('appointmentList')) || [];
        const updatedData = data.filter((itemId) => itemId !== String(id));
        localStorage.setItem('appointmentList', JSON.stringify(updatedData));
        const remainingAppointments = appointmentList.filter((item) => item.id !== id);
        setAppointmentList(remainingAppointments);

        toast.error(`Appointment canceled for ${name}`, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    };

    return (
        <div className='max-w-6xl mx-auto px-4'>


            {
                appointmentList && appointmentList.length > 0 ? (
                    <div>
                        <div>
                            <div className='flex items-center justify-center'>
                                <Barchart appointmentList={appointmentList}></Barchart>
                            </div>
                            <div className='text-center mb-8 p-10'>
                                <h1 className='font-bold text-2xl'>My Today Appointments</h1>
                                <p>Our platform Connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>
                            </div>

                        </div>
                    </div>
                ) : (
                    <section className="text-center mt-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                            You Have not Booked any appointment yet
                        </h2>
                        <p className="mt-2 text-gray-600 max-w-md mx-auto">
                            Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.
                        </p>
                        <button
                            className="mt-6 px-6 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition"
                            onClick={() => navigate('/')}
                        >
                            Book an Appointment
                        </button>
                    </section>
                )
            }

            <div>
                {appointmentList.map((lawyersData, index) => (
                    <Appointments
                        key={lawyersData.id || index}
                        lawyersData={lawyersData}
                        handleCancelAppointments={handleCancelAppointments}
                    />
                ))}
            </div>
        </div>
    );
};

export default MyBookings;
