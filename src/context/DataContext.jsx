import { createContext, useContext, useState, useEffect } from 'react';
import { vehicles as initialVehicles } from '../data/vehicles';

const DataContext = createContext();

export const useData = () => {
    return useContext(DataContext);
};

export function DataProvider({ children }) {
    // Vehicles State
    const [vehicles, setVehicles] = useState(() => {
        const saved = localStorage.getItem('roadstar_vehicles_v8');
        return saved ? JSON.parse(saved) : initialVehicles;
    });

    // Messages State
    const [messages, setMessages] = useState(() => {
        const saved = localStorage.getItem('roadstar_messages');
        return saved ? JSON.parse(saved) : [
            { id: 1, nom: 'Jean Dupont', email: 'jean@test.com', sujet: 'Renseignement', message: 'Bonjour, je voudrais savoir si le Range Rover est dispo ce week-end ?', date: '2025-10-24', status: 'unread' },
            { id: 2, nom: 'Marie Kona', email: 'marie@test.com', sujet: 'Devis Mariage', message: 'Nous avons besoin de 3 berlines pour un mariage.', date: '2025-10-23', status: 'read' }
        ];
    });

    // Stats State
    const [stats, setStats] = useState({
        totalVehicles: 0,
        totalMessages: 0,
        unreadMessages: 0
    });

    // Save to LocalStorage on change
    useEffect(() => {
        localStorage.setItem('roadstar_vehicles_v8', JSON.stringify(vehicles));
    }, [vehicles]);

    useEffect(() => {
        localStorage.setItem('roadstar_messages', JSON.stringify(messages));
        updateStats();
    }, [messages, vehicles]); // Update stats when messages OR vehicles change

    const updateStats = () => {
        setStats({
            totalVehicles: vehicles.length,
            totalMessages: messages.length,
            unreadMessages: messages.filter(m => m.status === 'unread').length
        });
    };

    // --- Vehicle Actions ---
    const addVehicle = (vehicle) => {
        setVehicles([...vehicles, { ...vehicle, id: Date.now() }]);
    };

    const updateVehicle = (id, updatedVehicle) => {
        setVehicles(vehicles.map(v => v.id === id ? updatedVehicle : v));
    };

    const deleteVehicle = (id) => {
        setVehicles(vehicles.filter(v => v.id !== id));
    };

    // --- Message Actions ---
    const addMessage = (message) => {
        const newMessage = {
            ...message,
            id: Date.now(),
            date: new Date().toISOString().split('T')[0],
            status: 'unread'
        };
        setMessages([newMessage, ...messages]);
        return newMessage;
    };

    const markAsRead = (id) => {
        setMessages(messages.map(m => m.id === id ? { ...m, status: 'read' } : m));
    };

    const deleteMessage = (id) => {
        setMessages(messages.filter(m => m.id !== id));
    };

    const getUnreadCount = () => messages.filter(m => m.status === 'unread').length;

    const value = {
        vehicles,
        messages,
        stats,
        addVehicle,
        updateVehicle,
        deleteVehicle,
        addMessage,
        markAsRead,
        deleteMessage,
        getUnreadCount
    };

    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );
}
