import { useState, useEffect } from 'react';
import Seo from '../../components/ui/Seo';
import VehicleCard from '../../components/sections/VehicleCard';
import { useData } from '../../context/DataContext';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Vehicles() {
    const { vehicles } = useData();
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('TOUS');
    const vehiclesPerPage = 9;

    const categories = ['TOUS', 'BERLINES', '4X4', 'S.U.V', 'PICKUP', 'MINI VAN / CAR'];

    // Filter vehicles based on selected category
    const filteredVehicles = selectedCategory === 'TOUS'
        ? vehicles
        : vehicles.filter(v => v.category?.toUpperCase() === selectedCategory);

    // Reset page when category changes
    useEffect(() => {
        setCurrentPage(1);
    }, [selectedCategory]);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentPage]);

    // Calculate pagination
    const totalPages = Math.ceil(filteredVehicles.length / vehiclesPerPage);
    const indexOfLastVehicle = currentPage * vehiclesPerPage;
    const indexOfFirstVehicle = indexOfLastVehicle - vehiclesPerPage;
    const currentVehicles = filteredVehicles.slice(indexOfFirstVehicle, indexOfLastVehicle);

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    return (
        <div className="pt-32 min-h-screen bg-white pb-20">
            <Seo title="Nos Véhicules" description="Découvrez notre flotte de véhicules de luxe à Abidjan." />

            <div className="container">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-primary uppercase tracking-widest font-bold text-sm mb-2 block">Notre Flotte</span>
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Choisissez votre style</h1>
                    <p className="text-gray-600">Une collection variée pour répondre à toutes vos exigences de confort et de performance.</p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${selectedCategory === category
                                    ? 'bg-black border-black text-white shadow-lg'
                                    : 'bg-white border-neutral-200 text-gray-500 hover:border-black hover:text-black'
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {filteredVehicles.length > 0 ? (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <AnimatePresence mode="wait">
                                {currentVehicles.map((vehicle, idx) => (
                                    <motion.div
                                        key={vehicle.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ delay: idx * 0.05 }}
                                    >
                                        <VehicleCard vehicle={vehicle} />
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Pagination Controls */}
                        {totalPages > 1 && (
                            <div className="mt-20 flex justify-center items-center gap-4">
                                <button
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="p-3 rounded-full border border-neutral-200 text-gray-600 hover:border-primary hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed group"
                                >
                                    <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                                </button>

                                <div className="flex gap-2">
                                    {[...Array(totalPages)].map((_, i) => (
                                        <button
                                            key={i + 1}
                                            onClick={() => handlePageChange(i + 1)}
                                            className={`w-12 h-12 rounded-xl border flex items-center justify-center font-bold transition-all ${currentPage === i + 1
                                                ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
                                                : 'border-neutral-200 text-gray-600 hover:border-neutral-400'
                                                }`}
                                        >
                                            {i + 1}
                                        </button>
                                    ))}
                                </div>

                                <button
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className="p-3 rounded-full border border-neutral-200 text-gray-600 hover:border-primary hover:text-primary transition-all disabled:opacity-30 disabled:cursor-not-allowed group"
                                >
                                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        )}
                    </>
                ) : (
                    <div className="text-center py-20 bg-neutral-50 rounded-3xl border border-dashed border-neutral-200">
                        <p className="text-gray-500 font-medium">Aucun véhicule trouvé dans cette catégorie.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
