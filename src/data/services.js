import { Clock, Car, UserCheck, Briefcase, UserPlus, MapPin, Shield } from 'lucide-react';

export const services = [
    {
        id: 1,
        title: 'Location Courte Durée',
        description: 'Une solution sécurisée et flexible pour vos besoins ponctuels (journée ou plus). Idéal pour vos rendez-vous d\'affaires et déplacements personnels.',
        icon: Clock
    },
    {
        id: 2,
        title: 'Location Moyenne & Longue Durée',
        description: 'Des contrats mensuels sans pénalités pour maîtriser votre budget. Solutions s\'ajustant parfaitement à l\'emploi du temps des professionnels.',
        icon: Car
    },
    {
        id: 3,
        title: 'Chauffeur avec Voiture',
        description: 'Profitez d\'un service premium avec nos véhicules conduits par des chauffeurs professionnels, ponctuels et discrets.',
        icon: UserCheck
    },
    {
        id: 4,
        title: 'Chauffeur sans Voiture',
        description: 'Mise à disposition de chauffeurs privés professionnels pour conduire votre propre véhicule en toute sécurité.',
        icon: UserPlus
    },
    {
        id: 5,
        title: 'Géolocalisation de Flotte',
        description: 'Système de suivi en temps réel pour optimiser vos livraisons, localiser vos véhicules et améliorer la productivité.',
        icon: MapPin
    },
    {
        id: 6,
        title: 'Protocole, Sécurité & Escorte',
        description: 'Services spécialisés pour l\'accueil VIP, la protection de personnalités, l\'escorte et le service d\'hôtesses.',
        icon: Shield
    }
];
