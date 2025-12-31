import { useState } from 'react';
import Seo from '../../components/ui/Seo';
import Button from '../../components/ui/Button';
import { Mail, Phone, MapPin, Send, AlertCircle, CheckCircle } from 'lucide-react';
import PropTypes from 'prop-types';
import { useData } from '../../context/DataContext';

export default function Contact() {
    const { addMessage } = useData();
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('submitting');

        // Validation
        if (!formData.nom || !formData.email || !formData.message) {
            setStatus('error');
            return;
        }

        // Add message to global context (admin)
        setTimeout(() => {
            addMessage({
                nom: `${formData.nom} ${formData.prenom}`,
                email: formData.email,
                sujet: 'Nouveau message du site', // Default subject as there is no subject field in UI yet
                message: `Téléphone: ${formData.telephone}\n\n${formData.message}`,
            });
            setStatus('success');
            setFormData({ nom: '', prenom: '', email: '', telephone: '', message: '' });
        }, 1000);
    };

    return (
        <div className="pt-32 min-h-screen bg-dark pb-20">
            <Seo title="Contact" description="Contactez ROADSTAR pour vos besoins de location de voitures à Abidjan." />

            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Info */}
                    <div>
                        <span className="text-primary uppercase tracking-widest font-bold text-sm mb-2 block">Contact</span>
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Parlons de votre projet</h1>
                        <p className="text-neutral-400 mb-10 leading-relaxed">
                            Une question ? Une demande spécifique ? Remplissez le formulaire ou contactez-nous directement. Notre équipe vous répondra dans les plus brefs délais.
                        </p>

                        <div className="space-y-8 mb-12">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-primary shrink-0">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg mb-1">Téléphone</h3>
                                    <a href="tel:+22507070707" className="text-neutral-400 hover:text-white transition-colors block">+225 07 07 07 07</a>
                                    <a href="tel:+22501010101" className="text-neutral-400 hover:text-white transition-colors block">+225 01 01 01 01</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-primary shrink-0">
                                    <Mail size={20} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg mb-1">Email</h3>
                                    <a href="mailto:info@roadstar225.com" className="text-neutral-400 hover:text-white transition-colors block">info@roadstar225.com</a>
                                    <a href="mailto:reservations@roadstar225.com" className="text-neutral-400 hover:text-white transition-colors block">reservations@roadstar225.com</a>
                                    <a href="mailto:roadstar225@gmail.com" className="text-neutral-400 hover:text-white transition-colors block">roadstar225@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-primary shrink-0">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-lg mb-1">Adresse</h3>
                                    <p className="text-neutral-400">Abidjan, Côte d'Ivoire</p>
                                    <p className="text-neutral-500 text-sm">Zone 4, Rue du Dr Blanchard</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="w-full h-64 bg-neutral-800 rounded-2xl overflow-hidden relative border border-neutral-700 group">
                            <div className="absolute inset-0 flex items-center justify-center text-neutral-500 group-hover:text-primary transition-colors">
                                <span className="flex items-center gap-2"><MapPin /> Carte Google Maps</span>
                            </div>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15891.95460293774!2d-4.0083!3d5.3033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1c1badf6f36ab%3A0x1d7c041113612d!2sZone%204%2C%20Abidjan!5e0!3m2!1sen!2sci!4v1620000000000!5m2!1sen!2sci"
                                width="100%"
                                height="100%"
                                style={{ border: 0, opacity: 0.6 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Map"
                            ></iframe>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="bg-neutral-900 p-8 md:p-10 rounded-3xl border border-neutral-800 shadow-2xl">
                        <h3 className="text-2xl font-bold text-white mb-6">Envoyez-nous un message</h3>

                        {status === 'success' ? (
                            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6 text-center">
                                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center text-green-500 mx-auto mb-4">
                                    <CheckCircle size={32} />
                                </div>
                                <h4 className="text-white font-bold text-lg mb-2">Message envoyé !</h4>
                                <p className="text-neutral-400">Merci de nous avoir contactés. Nous vous répondrons très prochainement.</p>
                                <button onClick={() => setStatus('idle')} className="text-primary hover:text-white mt-4 text-sm font-medium transition-colors">Envoyer un autre message</button>
                            </div>
                        ) : (
                            <form className="space-y-6" onSubmit={handleSubmit}>
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

                                <div>
                                    <label className="block text-sm font-medium text-neutral-300 mb-2">Message <span className="text-primary">*</span></label>
                                    <textarea
                                        name="message"
                                        rows={4}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full bg-dark border border-neutral-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-neutral-600 focus:ring-1 focus:ring-primary"
                                        placeholder="Comment pouvons-nous vous aider ?"
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
                                    {status === 'submitting' ? 'Envoi en cours...' : 'Envoyer le message'}
                                    {!status === 'submitting' && <Send size={18} className="ml-2" />}
                                </Button>
                            </form>
                        )}
                    </div>

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

InputGroup.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string
};

