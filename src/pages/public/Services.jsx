import Seo from '../../components/ui/Seo';
import { services } from '../../data/services';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Button from '../../components/ui/Button';

export default function Services() {
    return (
        <div className="pt-32 min-h-screen bg-dark pb-20">
            <Seo title="Nos Services" description="Découvrez les services de location de véhicules ROADSTAR : courte durée, longue durée, chauffeur." />

            <div className="container">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-primary uppercase tracking-widest font-bold text-sm mb-2 block">Nos Solutions</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Services sur mesure</h1>
                    <p className="text-neutral-400 text-lg leading-relaxed">Que vous ayez besoin d'un véhicule pour une journée, un mois ou plus, avec ou sans chauffeur, nous avons la solution adaptée à vos besoins.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {services.map((service, idx) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-neutral-900 border border-neutral-800 rounded-3xl p-10 hover:border-primary/30 transition-all flex flex-col items-start"
                        >
                            <div className="w-16 h-16 bg-dark-lighter rounded-2xl flex items-center justify-center mb-6 text-primary shadow-lg">
                                <service.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-neutral-400 leading-relaxed mb-8">{service.description}</p>
                            <Button to="/contact" variant="outline" className="mt-auto">
                                Demander un devis
                            </Button>
                        </motion.div>
                    ))}
                </div>

                {/* CTO Strip */}
                <div className="bg-primary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Besoin d'une solution personnalisée?</h2>
                        <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">Nous sommes à votre écoute pour concevoir l'offre qui correspond exactement à vos attentes.</p>
                        <Button to="/contact" className="bg-white text-primary hover:bg-neutral-100 border-none">
                            Contactez notre équipe commerciale
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
