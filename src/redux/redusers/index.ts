import { createSlice } from '@reduxjs/toolkit'
import { sendForms,closeModal } from '../Action';
import { useNavigate } from "react-router-dom";
//import {NotificationContainer, NotificationManager} from 'react-notifications';
import cogoToast from 'cogo-toast';
const FormSlice = createSlice({
  name: 'Forms',
  initialState: {
    forms: { patients: null, doctors: null,appointments: null  },
    formsReport: { patients: null, doctors: null,appointments: null  },
    openZvitMod:false,
  },
  reducers: {
    
  },
extraReducers: (builder) => {
    builder.addCase(sendForms.fulfilled, (state,  { payload }) => {
      console.log("extra reduser",payload);
       if(payload){
        //state.forms = payload.forms;
        state.formsReport = payload;
        state.openZvitMod=true;
       }
    }).addCase(closeModal.fulfilled, (state,  { payload }) => {
        state.openZvitMod=false;
    })
  },
    
})
const FormSliceReduser = FormSlice.reducer;
export default FormSliceReduser;