import Seo from '../../components/ui/Seo';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <div className="pt-32 min-h-screen bg-white pb-20">
            <Seo title="À Propos" description="Découvrez l'histoire et les valeurs de ROADSTAR, leader de la location de voitures à Abidjan." />

            <div className="container">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-primary uppercase tracking-widest font-bold text-sm mb-2 block">Depuis 2009</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">L’Élégance de la Route</h1>
                    <p className="text-gray-600 text-lg leading-relaxed">ROADSTAR accompagne les entreprises et institutions depuis 2009 avec un service professionnel de location de véhicules, alliant prestige, sécurité et flexibilité totale.</p>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1000&auto=format&fit=crop"
                            alt="RoadStar Excellence"
                            className="rounded-2xl shadow-2xl"
                        />
                        <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-xl border border-neutral-100 shadow-xl hidden md:block">
                            <span className="text-4xl font-bold text-primary block mb-1">15+</span>
                            <span className="text-gray-500 text-sm">Années d'excellence</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Mission</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Proposer un service de mobilité d'exception adapté aux exigences des professionnels. Notre engagement : "Que le voyage commence !" avec la garantie d'un service irréprochable et d'un budget parfaitement maîtrisé.
                        </p>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Pourquoi nous choisir ?</h2>
                        <ul className="space-y-4 text-gray-700">
                            <li className="border-l-4 border-primary pl-4">
                                <strong className="text-gray-900 block font-bold">Tarification Transparente</strong>
                                Montant final connu d'emblée, sans frais cachés pour une gestion sereine.
                            </li>
                            <li className="border-l-4 border-primary pl-4">
                                <strong className="text-gray-900 block font-bold">Zéro Frais d'Annulation</strong>
                                Flexibilité totale : annulation gratuite jusqu'à 72h avant la prise en charge.
                            </li>
                            <li className="border-l-4 border-primary pl-4">
                                <strong className="text-gray-900 block font-bold">Budget Maîtrisé</strong>
                                Facturation mensuelle fixe pour simplifier la gestion de votre parc automobile.
                            </li>
                            <li className="border-l-4 border-primary pl-4">
                                <strong className="text-gray-900 block font-bold">Assistance 24J/7</strong>
                                Une tranquillité d'esprit absolue avec une assistance disponible à tout moment.
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
