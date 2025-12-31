import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-subtle-zoom"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920&auto=format&fit=crop")' }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-black/20" /> {/* Extra dim */}
            </div>

            {/* Content */}
            <div className="relative h-full container flex flex-col justify-center text-white pt-20">
                <motion.span
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-primary font-bold tracking-[0.2em] uppercase mb-4 pl-1"
                >
                    Premium Car Rental Service
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold font-sans leading-[1.1] mb-8"
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
                    className="text-lg md:text-xl text-neutral-300 max-w-xl mb-12 leading-relaxed"
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
                    <Button to="/services" variant="outline" className="text-lg px-10 py-4 hover:bg-white/5">
                        Nos Services
                    </Button>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/40"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] mb-4">Scroll Down</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent opacity-70" />
            </motion.div>
        </div>
    );
}
