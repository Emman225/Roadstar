import Seo from '../../components/ui/Seo';
import VehicleCard from '../../components/sections/VehicleCard';
import { useData } from '../../context/DataContext';
import { motion } from 'framer-motion';

export default function Vehicles() {
    const { vehicles } = useData();
    return (
        <div className="pt-32 min-h-screen bg-dark pb-20">
            <Seo title="Nos Véhicules" description="Découvrez notre flotte de véhicules de luxe à Abidjan." />

            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-primary uppercase tracking-widest font-bold text-sm mb-2 block">Notre Flotte</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Choisissez votre style</h1>
                    <p className="text-neutral-400">Une collection variée pour répondre à toutes vos exigences de confort et de performance.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {vehicles.map((vehicle, idx) => (
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
            </div>
        </div>
    );
}
