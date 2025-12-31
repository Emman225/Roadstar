import { Clock, Car, UserCheck, Briefcase } from 'lucide-react';

export const services = [
    {
        id: 1,
        title: 'Location Courte Durée',
        description: 'Une large gamme de véhicules pour vos déplacements ponctuels en ville ou à l\'intérieur du pays.',
        icon: Clock
    },
    {
        id: 2,
        title: 'Location Longue Durée',
        description: 'Des solutions flexibles et économiques pour vos besoins de mobilité sur plusieurs mois.',
        icon: Car
    },
    {
        id: 3,
        title: 'Location avec Chauffeur',
        description: 'Profitez du confort de nos véhicules avec nos chauffeurs professionnels expérimentés.',
        icon: UserCheck
    },
    {
        id: 4,
        title: 'Services Entreprises',
        description: 'Gestion de flotte, transport de personnel et solutions corporate sur mesure.',
        icon: Briefcase
    }
];
