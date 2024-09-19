import React, { useEffect, useState } from 'react'
import "../../assets/css/Contact.css"
import Loader from '../Layout/Loader';
import toast from "react-hot-toast"
const Contact = () => {
    useEffect(() => {
        // Scroll to top of the page when the component is rendered
        window.scrollTo(0, 0);
    }, []);
    // Single state to manage form data
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    // Handle changes in form fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Start the loader
        try {
            const response = await fetch('https://theaptech.info/users/api/formData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Form submitted successfully');
                // Optionally, reset the form or show a success message
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    message: ''
                });
                toast.success("Message sent successfully!!")
            } else {
                console.error('Form submission error');
                toast.error("Something went wrong!!")
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error("Something went wrong!!")
        } finally {
            setLoading(false); // Stop the loader
            toast.error("Something went wrong!!")
        }
    };


    return (
        <div className="contact" id="contact">
            {loading && <Loader />} {/* Display loader when loading is true */}
            <div className="w3agile_contact_left con-lef-content">
                <h3>Contact Us</h3>

                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        required
                    />
                    <input
                        type="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        required
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Message..."
                        required
                    />
                    <input id="button" type="submit" value="Send" />
                </form>
            </div>
            <div className="w3agile_contact_right">
                {/* Google Maps iframe */}
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d876.5682927308585!2d77.32163166948645!3d28.501427877053818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce6fb5f995eed%3A0xb2cbcb6107a43a60!2sShiv%20Mandir%20Rd%2C%20Shakti%20Vihar%20A%20Block%2C%20Hari%20Nagar%20Extn%2C%20Molarband%2C%20Molar%20Band%2C%20New%20Delhi%2C%20Delhi%20110044!5e0!3m2!1sen!2sin!4v1725709648128!5m2!1sen!2sin"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
            <div className="clearfix"></div>
        </div>
    );
}

export default Contact
