import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios';
// import { doctors as doctorData } from '../assets/assets'; // 👈 import doctors from your local assets

export const AppContext = createContext();

const AppContextProvider = (props) => {

    const currencySymbol = '₹';
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const [doctors, setDoctors] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('token') || '');
    const [userData, setUserData] = useState(false);

 // Load doctors from backend
    const getDoctosData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/doctor/list');
            if (data.success) {
                setDoctors(data.doctors);
            }
        } catch (error) {
            console.error("Failed to load doctors", error);
            toast.error("Failed to load doctors");
        }
    }; 

    // Get user profile from backend
    const loadUserProfileData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/user/get-profile', {
                headers: { token }
            });

            if (data.success) {
                setUserData(data.userData);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };

    useEffect(() => {
        getDoctosData(); // call local loader
    }, []);

    useEffect(() => {
        if (token) {
            loadUserProfileData();
        }
    }, [token]);

    const value = {
        doctors,
        getDoctosData,
        currencySymbol,
        backendUrl,
        token, setToken,
        userData, setUserData,
        loadUserProfileData
    };

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;