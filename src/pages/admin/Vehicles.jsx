import { useState } from 'react';
import { Plus, Edit, Trash, X, Save, Upload } from 'lucide-react';
import { useData } from '../../context/DataContext';
import Button from '../../components/ui/Button';
import Swal from 'sweetalert2';

export default function AdminVehicles() {
    const { vehicles, addVehicle, updateVehicle, deleteVehicle } = useData();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingVehicle, setEditingVehicle] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        type: '',
        price: '',
        passengers: '',
        transmission: '',
        fuel: '',
        image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop', // Default mock image
        featured: false,
        available: true
    });

    const openModal = (vehicle = null) => {
        if (vehicle) {
            setEditingVehicle(vehicle);
            setFormData(vehicle);
        } else {
            setEditingVehicle(null);
            setFormData({
                name: '',
                type: '',
                price: '',
                passengers: '5',
                transmission: 'Automatique',
                fuel: 'Essence',
                image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop',
                featured: false,
                available: true
            });
        }
        setIsModalOpen(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editingVehicle) {
            updateVehicle(editingVehicle.id, { ...editingVehicle, ...formData });
            Swal.fire({
                title: "Modifié!",
                text: "Le véhicule a bien été modifié.",
                icon: "success",
                confirmButtonColor: "#f97316"
            });
        } else {
            addVehicle(formData);
            Swal.fire({
                title: "Ajouté!",
                text: "Le nouveau véhicule a été ajouté avec succès.",
                icon: "success",
                confirmButtonColor: "#f97316"
            });
        }
        setIsModalOpen(false);
    };

    const handleDelete = (id) => {
        Swal.fire({
            title: "Êtes-vous sûr?",
            text: "Cette action est irréversible!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#ef4444",
            cancelButtonColor: "#374151",
            confirmButtonText: "Oui, supprimer!",
            cancelButtonText: "Annuler"
        }).then((result) => {
            if (result.isConfirmed) {
                deleteVehicle(id);
                Swal.fire({
                    title: "Supprimé!",
                    text: "Le véhicule a été supprimé.",
                    icon: "success",
                    confirmButtonColor: "#f97316"
                });
            }
        });
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Gestion des Véhicules</h1>
                <Button onClick={() => openModal()} variant="primary" className="py-2 px-4 text-sm flex items-center gap-2">
                    <Plus size={16} /> Ajouter un véhicule
                </Button>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                    <table className="w-full text-left md:text-base text-sm">
                        <thead className="bg-gray-50 text-gray-500 border-b border-gray-200">
                            <tr>
                                <th className="p-4 md:p-6 font-medium">Véhicule</th>
                                <th className="p-4 md:p-6 font-medium hidden md:table-cell">Catégorie</th>
                                <th className="p-4 md:p-6 font-medium">Prix / Jour</th>
                                <th className="p-4 md:p-6 font-medium text-center">Disponibilité</th>
                                <th className="p-4 md:p-6 font-medium text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {vehicles.map((vehicle) => (
                                <tr key={vehicle.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="p-4 md:p-6 flex items-center gap-4">
                                        <div className="w-16 h-10 rounded bg-gray-200 overflow-hidden relative">
                                            <img src={vehicle.image} alt={vehicle.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-semibold text-gray-900">{vehicle.name}</span>
                                            {vehicle.featured && <span className="text-xs text-primary font-medium">★ Mis en avant</span>}
                                        </div>
                                    </td>
                                    <td className="p-4 md:p-6 text-gray-500 hidden md:table-cell">{vehicle.type}</td>
                                    <td className="p-4 md:p-6 text-gray-900 font-bold">{vehicle.price}</td>
                                    <td className="p-4 md:p-6 text-center">
                                        <span className={`px-2 py-1 rounded-full text-xs font-bold ${vehicle.available ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                            {vehicle.available ? 'Disponible' : 'Indisponible'}
                                        </span>
                                    </td>
                                    <td className="p-4 md:p-6 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => openModal(vehicle)}
                                                className="p-2 text-gray-400 hover:text-primary hover:bg-primary/10 rounded-lg transition-colors"
                                                title="Modifier"
                                            >
                                                <Edit size={16} />
                                            </button>
                                            <button
                                                onClick={() => handleDelete(vehicle.id)}
                                                className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                title="Supprimer"
                                            >
                                                <Trash size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl max-h-[90vh] overflow-y-auto">
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center sticky top-0 bg-white z-10">
                            <h2 className="text-xl font-bold text-gray-900">{editingVehicle ? 'Modifier le véhicule' : 'Ajouter un véhicule'}</h2>
                            <button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600 hover:bg-gray-100 p-2 rounded-full transition-colors"><X size={24} /></button>
                        </div>

                        <form onSubmit={handleSubmit} className="p-6 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputGroup label="Nom du véhicule" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                                <InputGroup label="Catégorie (SUV, Berline...)" value={formData.type} onChange={e => setFormData({ ...formData, type: e.target.value })} />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputGroup label="Prix / Jour" value={formData.price} onChange={e => setFormData({ ...formData, price: e.target.value })} />
                                <div className="space-y-4">
                                    <label className="block text-sm font-medium text-gray-700">Options</label>
                                    <div className="flex gap-6">
                                        <label className="flex items-center gap-2 cursor-pointer group">
                                            <input type="checkbox" checked={formData.featured} onChange={e => setFormData({ ...formData, featured: e.target.checked })} className="rounded text-primary focus:ring-primary border-gray-300 w-4 h-4" />
                                            <span className="text-sm text-gray-600 group-hover:text-gray-900">Mettre en avant</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer group">
                                            <input type="checkbox" checked={formData.available} onChange={e => setFormData({ ...formData, available: e.target.checked })} className="rounded text-primary focus:ring-primary border-gray-300 w-4 h-4" />
                                            <span className="text-sm text-gray-600 group-hover:text-gray-900">Disponible</span>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-6">
                                <InputGroup label="Passagers" type="number" value={formData.passengers} onChange={e => setFormData({ ...formData, passengers: e.target.value })} />
                                <InputGroup label="Transmission" value={formData.transmission} onChange={e => setFormData({ ...formData, transmission: e.target.value })} />
                                <InputGroup label="Carburant" value={formData.fuel} onChange={e => setFormData({ ...formData, fuel: e.target.value })} />
                            </div>

                            <InputGroup label="URL Image (ex: https://...)" value={formData.image} onChange={e => setFormData({ ...formData, image: e.target.value })} />

                            <div className="pt-4 flex justify-end gap-3 border-t border-gray-100 mt-6">
                                <Button type="button" onClick={() => setIsModalOpen(false)} variant="ghost" className="bg-gray-100 text-gray-700 hover:bg-gray-200">Annuler</Button>
                                <Button type="submit" variant="primary" className="flex items-center gap-2 shadow-lg shadow-primary/20">
                                    <Save size={18} /> Enregistrer
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

function InputGroup({ label, type = "text", value, onChange }) {
    return (
        <div className="w-full">
            <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
            <input
                type={type}
                value={value || ''}
                onChange={onChange}
                className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder-gray-400"
                required
            />
        </div>
    );
}
