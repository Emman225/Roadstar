import Seo from '../../components/ui/Seo';
import Hero from '../../components/sections/Hero';
import Button from '../../components/ui/Button';
import VehicleCard from '../../components/sections/VehicleCard';
import { useData } from '../../context/DataContext';
import { services } from '../../data/services';
import { testimonials } from '../../data/testimonials';
import { motion } from 'framer-motion';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';

export default function Home() {
    const { vehicles } = useData();
    const featuredVehicles = vehicles.filter(v => v.featured).slice(0, 3);

    return (
        <>
            <Seo
                title="Accueil"
                description="ROADSTAR, votre partenaire premium pour la location de véhicules à Abidjan. SUVs, Berlines et services avec chauffeur."
            />

            <Hero />

            {/* Services Section */}
            <section className="py-24 bg-dark-darker relative overflow-hidden">
                <div className="container relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-primary uppercase tracking-widest font-bold text-sm mb-2 block">Nos Services</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Une expérience sur mesure</h2>
                        <p className="text-neutral-400">Nous proposons des solutions de mobilité adaptées à tous vos besoins, avec un service irréprochable.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.map((service, idx) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-neutral-900/50 p-8 rounded-2xl border border-white/5 hover:border-primary/30 hover:bg-neutral-900 transition-all group"
                            >
                                <div className="w-14 h-14 bg-dark rounded-xl flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform shadow-lg shadow-black/50">
                                    <service.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">{service.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Vehicles */}
            <section className="py-24 bg-dark">
                <div className="container">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <span className="text-primary uppercase tracking-widest font-bold text-sm mb-2 block">Notre Flotte</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white">Véhicules en vedette</h2>
                        </div>
                        <Button to="/vehicules" variant="ghost" className="hidden md:flex items-center gap-2 group">
                            Voir tout le catalogue <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {featuredVehicles.map((vehicle, idx) => (
                            <motion.div
                                key={vehicle.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <VehicleCard vehicle={vehicle} />
                            </motion.div>
                        ))}
                    </div>

                    <div className="mt-12 text-center md:hidden">
                        <Button to="/vehicules" variant="outline" className="w-full justify-center">
                            Voir tout le catalogue
                        </Button>
                    </div>
                </div>
            </section>

            {/* Why Us */}
            <section className="py-24 bg-dark-lighter relative">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="order-2 lg:order-1 relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                                <img
                                    src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=800&auto=format&fit=crop"
                                    alt="Chauffeur Service"
                                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/20">
                                        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                                            <Star fill="currentColor" size={20} />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-lg">Service 5 Étoiles</p>
                                            <p className="text-white/80 text-sm">Satisfaction garantie</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -z-10 -top-6 -left-6 w-full h-full border-2 border-primary/20 rounded-2xl hidden lg:block" />
                        </div>

                        <div className="order-1 lg:order-2">
                            <span className="text-primary uppercase tracking-widest font-bold text-sm mb-2 block">Pourquoi Nous Choisir</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">L'excellence comme standard</h2>
                            <p className="text-neutral-400 mb-8 leading-relaxed">
                                Chez ROADSTAR, nous ne nous contentons pas de louer des voitures. Nous offrons une expérience complète, pensée pour votre confort et votre tranquillité d'esprit.
                            </p>

                            <ul className="space-y-4 mb-10">
                                {[
                                    "Maintenance rigoureuse et véhicules récents",
                                    "Assistance 24/7 et remplacement immédiat",
                                    "Chauffeurs formés, discrets et professionnels",
                                    "Transparence totale et prix compétitifs"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="text-primary shrink-0 mt-1" size={20} />
                                        <span className="text-neutral-200">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button to="/a-propos" variant="primary">
                                En savoir plus sur ROADSTAR
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 bg-dark relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl rounded-full pointer-events-none" />
                <div className="container relative z-10">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ce que disent nos clients</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((t, idx) => (
                            <motion.div
                                key={t.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-neutral-900 border border-neutral-800 p-8 rounded-2xl relative hover:border-primary/20 transition-colors"
                            >
                                <div className="text-primary mb-4 flex gap-1">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                </div>
                                <p className="text-neutral-300 italic mb-6 leading-relaxed">"{t.content}"</p>
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-primary border border-neutral-700">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">{t.name}</h4>
                                        <span className="text-neutral-500 text-xs block">{t.role}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10" />
                <div className="container relative flex flex-col lg:flex-row items-center justify-between gap-10">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Prêt à prendre la route ?</h2>
                        <p className="text-white/80 text-lg">Réservez dès maintenant votre véhicule et profitez d'un service d'exception.</p>
                    </div>
                    <div className="flex gap-4">
                        <Button to="/vehicules" className="bg-white text-primary hover:bg-neutral-100 shadow-xl border-none">
                            Voir nos véhicules
                        </Button>
                        <Button to="/contact" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary">
                            Contactez-nous
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
}
