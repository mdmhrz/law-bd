import { Bounce, toast } from "react-toastify";

const getBookedAppointment = () => {

    const currentAppointments = localStorage.getItem('appointmentList');
    if (currentAppointments) {
        const currentAppointmentsData = JSON.parse(currentAppointments);
        return currentAppointmentsData
    }
    else {
        return []
    }

};


const addToStoreDB = (id) => {
    const appointmentsData = getBookedAppointment();
    if (appointmentsData.includes(id)) {
        toast.warn('Appointment already booked')
    }
    else {
        appointmentsData.push(id);
        const data = JSON.stringify(appointmentsData);
        localStorage.setItem('appointmentList', data)
        toast.success(`Appointment Scheduled Successfully`, {
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
    }

}

export { addToStoreDB, getBookedAppointment }