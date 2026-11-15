const appointmentForm = document.getElementById("appointmentForm");
const appointmentList = document.getElementById("appointmentList");

let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

let editingAppointmentId = null;



appointmentForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const description = document.getElementById("description").value;

    if (!date || !time || !description) {
    alert("Lütfen tarih, saat ve açıklama alanlarını doldurun.");
    return;
}



    if (editingAppointmentId !== null) {

        appointments = appointments.map(function (appointment) {

            if (appointment.id === editingAppointmentId) {

                return {
                    id: appointment.id,
                    date: date,
                    time: time,
                    description: description
                };

            }

            return appointment;
        });

        editingAppointmentId = null;

        document.querySelector("#appointmentForm button").textContent =
            "Randevu Ekle";

    }

    else {

        const appointment = {
            id: Date.now(),
            date: date,
            time: time,
            description: description
        };

        appointments.push(appointment);
    }


    
    localStorage.setItem(
        "appointments",
        JSON.stringify(appointments)
    );

    displayAppointments();

    appointmentForm.reset();
});



function displayAppointments() {

    appointmentList.innerHTML = "";

    if (appointments.length === 0) {

        appointmentList.innerHTML =
            "<p>Henüz randevu bulunmamaktadır.</p>";

        return;
    }


    appointments.forEach(function (appointment) {

        const appointmentDiv =
            document.createElement("div");

        appointmentDiv.classList.add("appointment");


        appointmentDiv.innerHTML = `
            <strong>Tarih:</strong> ${appointment.date}<br>
            <strong>Saat:</strong> ${appointment.time}<br>
            <strong>Açıklama:</strong> ${appointment.description}
            <br><br>

            <button
                class="edit-button"
                onclick="editAppointment(${appointment.id})">
                Düzenle
            </button>

            <button
                class="delete-button"
                onclick="deleteAppointment(${appointment.id})">
                Randevuyu Sil
            </button>
        `;


        appointmentList.appendChild(appointmentDiv);
    });
}



function editAppointment(id) {

    const appointment =
        appointments.find(function (appointment) {

            return appointment.id === id;

        });


    if (!appointment) {
        return;
    }


    document.getElementById("date").value =
        appointment.date;

    document.getElementById("time").value =
        appointment.time;

    document.getElementById("description").value =
        appointment.description;


    editingAppointmentId = id;


    document.querySelector("#appointmentForm button").textContent =
        "Randevuyu Güncelle";


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}



function deleteAppointment(id) {

    appointments = appointments.filter(function (appointment) {

        return appointment.id !== id;

    });


    localStorage.setItem(
        "appointments",
        JSON.stringify(appointments)
    );


    displayAppointments();
}


displayAppointments();