import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden bg-gray-50">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-subtle-zoom"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920&auto=format&fit=crop")' }}
            >
                {/* White gradient for "Light Mode" readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent sm:via-white/40" />
            </div>

            {/* Content */}
            <div className="relative h-full container flex flex-col justify-center pt-20">
                <div className="max-w-3xl">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-primary font-bold tracking-[0.2em] uppercase mb-4 pl-1 block"
                    >
                        Premium Car Rental Service
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold font-sans leading-[1.1] mb-8 text-gray-900"
                    >
                        Votre Partenaire <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">
                            Pour La Route
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="text-lg md:text-xl text-gray-600 max-w-xl mb-12 leading-relaxed"
                    >
                        Découvrez une expérience de location de voiture d'exception à Abidjan.
                        Flotte premium, chauffeurs professionnels et service sur mesure.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row gap-6"
                    >
                        <Button to="/vehicules" variant="primary" className="text-lg px-10 py-4 shadow-xl shadow-primary/20">
                            Réserver un véhicule
                        </Button>
                        <Button to="/services" variant="outline" className="text-lg px-10 py-4 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 hover:text-black">
                            Nos Services
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] mb-4">Scroll Down</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent opacity-70" />
            </motion.div>
        </div>
    );
}
