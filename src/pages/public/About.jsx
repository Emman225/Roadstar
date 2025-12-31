import Seo from '../../components/ui/Seo';
import { motion } from 'framer-motion';

export default function About() {
    return (
        <div className="pt-32 min-h-screen bg-dark pb-20">
            <Seo title="À Propos" description="Découvrez l'histoire et les valeurs de ROADSTAR, leader de la location de voitures à Abidjan." />

            <div className="container">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-primary uppercase tracking-widest font-bold text-sm mb-2 block">Notre Histoire</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">L'excellence en mouvement</h1>
                    <p className="text-neutral-400 text-lg leading-relaxed">ROADSTAR est né d'une ambition simple : redéfinir les standards de la location de véhicules en Côte d'Ivoire. Nous allions prestige, sécurité et service client irréprochable.</p>
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
                            alt="About Roadstar"
                            className="rounded-2xl shadow-2xl"
                        />
                        <div className="absolute -bottom-10 -right-10 bg-dark-lighter p-8 rounded-xl border border-neutral-800 shadow-xl hidden md:block">
                            <span className="text-4xl font-bold text-primary block mb-1">10+</span>
                            <span className="text-neutral-400 text-sm">Années d'expérience</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl font-bold text-white mb-6">Notre Mission</h2>
                        <p className="text-neutral-400 mb-6 leading-relaxed">
                            Nous nous engageons à offrir à nos clients une expérience de conduite supérieure. Que ce soit pour des déplacements professionnels, des événements spéciaux ou simplement pour le plaisir de conduire une voiture d'exception, ROADSTAR est votre partenaire privilégié.
                        </p>
                        <h2 className="text-3xl font-bold text-white mb-6">Nos Valeurs</h2>
                        <ul className="space-y-4 text-neutral-300">
                            <li className="border-l-4 border-primary pl-4">
                                <strong className="text-white block">Qualité Premium</strong>
                                Une flotte constamment renouvelée et entretenue aux meilleurs standards.
                            </li>
                            <li className="border-l-4 border-primary pl-4">
                                <strong className="text-white block">Transparence</strong>
                                Des tarifs clairs, sans surprise, et une communication honnête.
                            </li>
                            <li className="border-l-4 border-primary pl-4">
                                <strong className="text-white block">Disponibilité</strong>
                                Une équipe à votre écoute 24h/24 et 7j/7 pour vous assister.
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
