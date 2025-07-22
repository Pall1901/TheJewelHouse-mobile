// src/context/UserContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserContextType, UserType } from './types';

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<UserType | null>(null);
    const [loader, setLoader] = useState<boolean>(false);
    const [goldRateData, setGoldRateData] = useState(null);
    const [dropdown, setDropdown] = useState(null);

    // Load user on app start
    useEffect(() => {
        const loadUser = async () => {
            const storedUser = await AsyncStorage.getItem('user');
            if (storedUser) setUser(JSON.parse(storedUser));
        };
        loadUser();
    }, []);

    const login = async (userData: any) => {
        setUser(userData);
        await AsyncStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = async () => {
        setUser(null);
        await AsyncStorage.removeItem('user');
    };

    return (
        <UserContext.Provider
            value={{
                user,
                login,
                logout,
                loader,
                setLoader,
                setUser,
                goldRateData,         // ✅ Provide it
                setGoldRateData,      // ✅ Provide setter
                dropdown,             // ✅ Provide dropdown
                setDropdown,          // ✅ Provide setter for dropdown
            }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};

