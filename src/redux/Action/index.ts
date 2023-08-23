import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import cogoToast from 'cogo-toast';

axios.defaults.baseURL = "http://localhost:3002/";
export const sendForms= createAsyncThunk(
    '/sendForms',
    async (obj:Object) => {
        
          try {
            const { data } = await axios.post('forms/sendForms', obj);
            console.log("forms send!!")
            return data
          } catch (error) {
            cogoToast.warn(`you registration error`);
            
          }
          
    }
  )
  export const closeModal= createAsyncThunk(
    '/closeModal',
    async () => {
        
          try {
            console.log("close Modal!!")
            return false
          } catch (error) {
            cogoToast.warn(`you registration error`);
            
          }
          
    }
  )
  