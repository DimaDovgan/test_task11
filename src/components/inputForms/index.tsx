import React from 'react';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import {sendForms} from "../../redux/Action"
import { useSelector} from "react-redux";
import {closeModal} from "../../redux/Action"


const Forms: React.FC = () => {

  interface RootState {
    hospital: {
      openZvitMod:boolean
      formsReport:{
        patient:{
          succesful:any[],
          wrong:any[],
          duplicates:any[],
        }
        ,
        doctors:{
          succesful:any[],
          wrong:any[],
          duplicates:any[],
        }
        ,appointments:{
          succesful:any[],
          wrong:any[],
          duplicates:any[],
        }
      }
    }
  }
  const isOpenModal = useSelector((state: RootState) => state.hospital.openZvitMod)
  const report =useSelector((state: RootState) => state.hospital.formsReport)
    const dispatch = useDispatch<any>();
    const [patients, setPatients] = useState("");
    const [doctors, setDoctors] = useState("");
    const [appointments, setAppointments] = useState("");
  
  function handleChange(event: React.ChangeEvent<{ name: unknown,value:unknown }>): void {

    switch (event.target.name as string) {
        case "patients":
            setPatients(event.target.value as string)
          break;
        case "doctors":
            setDoctors(event.target.value as string)
          break;
        case "appointments":
            setAppointments(event.target.value as string)
          break;
        default:
          console.log("ERR");
      }
      
  }
  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    // const patientsArr = patients.split("\n");
    // const doctorsArr = doctors.split("\n")
    // const patientsArr = patients.split("\n")

    dispatch(sendForms({patients,doctors,appointments}));
    event.preventDefault();
  }
  
  
  return (
    <div className="forms">
        <form 
         onSubmit={handleSubmit}
        >
     <label>Patients : </label>
       <textarea name='patients'
          value={patients}
          onChange={handleChange}
        />
        <label>Doctors : </label>
        <textarea
        name='doctors'
          value={doctors}
          onChange={handleChange}
        />
        <label>Appointments : </label>
        <textarea
        name='appointments'
          value={appointments}
          onChange={handleChange}
        />

        <button type="submit">send</button>
        </form>

        {/* //// */}
      {isOpenModal && <div>
        <p onClick={(e)=>{
          dispatch(closeModal());
          
        }}>&times;</p>
         <div>
          {report.patient.succesful.length>0 && <div>
            <p>Successful Patients: </p>
            <ul>
              {report.patient.succesful.map(patient=><li>{patient}</li>)}
            </ul>
          </div> }

          {report.doctors.succesful.length>0 && <div>
            <p>Successful Doctors: </p>
            <ul>
              {report.doctors.succesful.map(doctor=><li>{doctor}</li>)}
            </ul>
          </div> }
         
          {report.appointments.succesful.length>0 && <div>
            <p>Successful Appointments: </p>
            <ul>
              {report.appointments.succesful.map(appointment=><li>{appointment}</li>)}
            </ul>
          </div> }

         </div>
          {/* ////wrong */}
         <div>
          {report.patient.wrong.length>0 && <div>
            <p>Wrong Format Patients: </p>
            <ul>
              {report.patient.wrong.map(patient=><li>{patient}</li>)}
            </ul>
          </div> }

          {report.doctors.wrong.length>0 && <div>
            <p>Wrong Format Doctors: </p>
            <ul>
              {report.doctors.wrong.map(doctor=><li>{doctor}</li>)}
            </ul>
          </div> }
         
          {report.appointments.wrong.length>0 && <div>
            <p>Wrong Format Appointments: </p>
            <ul>
              {report.appointments.wrong.map(appointment=><li>{appointment}</li>)}
            </ul>
          </div> }

         </div>
         {/* duplicates */}
         <div>
          {report.patient.duplicates.length>0 && <div>
            <p>Duplicates Patients: </p>
            <ul>
              {report.patient.duplicates.map(patient=><li>{patient}</li>)}
            </ul>
          </div> }

          {report.doctors.duplicates.length>0 && <div>
            <p>Duplicates Doctors: </p>
            <ul>
              {report.doctors.duplicates.map(doctor=><li>{doctor}</li>)}
            </ul>
          </div> }
         
          {report.appointments.duplicates.length>0 && <div>
            <p>Duplicates Appointments: </p>
            <ul>
              {report.appointments.duplicates.map(appointment=><li>{appointment}</li>)}
            </ul>
          </div> }
         </div>

        </div> 
        
        
        }




    </div>
  );
}

export default Forms;