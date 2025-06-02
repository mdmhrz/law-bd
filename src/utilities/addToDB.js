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
        alert('This appoinments already taken')
    }
    else {
        appointmentsData.push(id);
        const data = JSON.stringify(appointmentsData);
        localStorage.setItem('appointmentList', data)
    }

}

export { addToStoreDB, getBookedAppointment }