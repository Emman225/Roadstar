import { useState } from 'react';
import { X, Send, AlertCircle, CheckCircle } from 'lucide-react';
import Button from './Button';
import { useData } from '../../context/DataContext';
import PropTypes from 'prop-types';

export default function ReservationModal({ isOpen, onClose, vehicleName }) {
    const { addMessage } = useData();
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        message: vehicleName ? `Je souhaite réserver le véhicule : ${vehicleName}` : ''
    });
    const [status, setStatus] = useState('idle');

    if (!isOpen) return null;

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');

        if (!formData.nom || !formData.email || !formData.message) {
            setStatus('error');
            return;
        }

        setTimeout(() => {
            addMessage({
                nom: `${formData.nom} ${formData.prenom}`,
                email: formData.email,
                sujet: `Réservation : ${vehicleName || 'Nouveau message'}`,
                message: `Téléphone: ${formData.telephone}\n\n${formData.message}`,
            });
            setStatus('success');
            // Optional: Close modal automatically after success or keep it open with success message
        }, 1000);
    };

    const resetForm = () => {
        setFormData({ nom: '', prenom: '', email: '', telephone: '', message: '' });
        setStatus('idle');
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-neutral-900 w-full max-w-2xl rounded-3xl border border-neutral-800 shadow-2xl overflow-hidden relative animate-in zoom-in-95 duration-200">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-neutral-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-10"
                >
                    <X size={24} />
                </button>

                <div className="p-8 md:p-10">
                    <h3 className="text-2xl font-bold text-white mb-2">Réserver votre véhicule</h3>
                    {vehicleName && <p className="text-primary font-medium mb-6">Véhicule sélectionné : {vehicleName}</p>}

                    {status === 'success' ? (
                        <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-8 text-center my-8">
                            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mx-auto mb-4">
                                <CheckCircle size={32} />
                            </div>
                            <h4 className="text-white font-bold text-lg mb-2">Demande envoyée !</h4>
                            <p className="text-neutral-400 mb-6">Merci de votre intérêt. Notre équipe vous recontactera très rapidement pour confirmer votre réservation.</p>
                            <Button onClick={resetForm} variant="outline" className="text-sm">
                                Fermer
                            </Button>
                        </div>
                    ) : (
                        <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputGroup
                                    label="Nom"
                                    name="nom"
                                    placeholder="Votre nom"
                                    required
                                    value={formData.nom}
                                    onChange={handleChange}
                                />
                                <InputGroup
                                    label="Prénom"
                                    name="prenom"
                                    placeholder="Votre prénom"
                                    value={formData.prenom}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <InputGroup
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="votre@email.com"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <InputGroup
                                    label="Téléphone"
                                    name="telephone"
                                    type="tel"
                                    placeholder="+225..."
                                    value={formData.telephone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-neutral-300 mb-2">Message <span className="text-primary">*</span></label>
                                <textarea
                                    name="message"
                                    rows={4}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-dark border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-neutral-600 focus:ring-1 focus:ring-primary"
                                    placeholder="Précisez vos besoins (dates, lieu de prise en charge...)"
                                ></textarea>
                            </div>

                            {status === 'error' && (
                                <div className="flex items-center gap-2 text-red-500 text-sm">
                                    <AlertCircle size={16} /> Veuillez remplir tous les champs obligatoires.
                                </div>
                            )}

                            <Button
                                variant="primary"
                                className="w-full justify-center py-4 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                                disabled={status === 'submitting'}
                            >
                                {status === 'submitting' ? 'Envoi en cours...' : 'Envoyer la demande'}
                                {!status === 'submitting' && <Send size={18} className="ml-2" />}
                            </Button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

function InputGroup({ label, name, type = "text", placeholder, required, value, onChange }) {
    return (
        <div>
            <label className="block text-sm font-medium text-neutral-300 mb-2">
                {label} {required && <span className="text-primary">*</span>}
            </label>
            <input
                type={type}
                name={name}
                required={required}
                value={value}
                onChange={onChange}
                className="w-full bg-dark border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-neutral-600 focus:ring-1 focus:ring-primary"
                placeholder={placeholder}
            />
        </div>
    );
}

ReservationModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    vehicleName: PropTypes.string
};

InputGroup.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
};
