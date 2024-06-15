import { useState } from 'react';
import axios from "axios";

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const sentMessage = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post("http://localhost:9000/api/contact", {
                name, email, message
            });
            if (res.data.success === true) {
                alert(res.data.message);
                setName("");
                setEmail("");
                setMessage("");
            } else {
                alert("Problem occurred");
            }
        } catch (error) {
            console.log(error);
            alert("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <form className="flex flex-col gap-4" onSubmit={sentMessage}>
                <input
                    type="text"
                    className="bg-transparent text-gray-200 border-2 border-gray-600 rounded-md p-2 mb-4 focus:outline-none focus:ring-1 focus:border-purple-500 transition ease-in-out duration-150"
                    placeholder="Full Name"
                    name="name"
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    disabled={loading}
                />
                <input
                    type="email"
                    className="bg-transparent text-gray-200 border-2 border-gray-600 rounded-md p-2 mb-4 focus:outline-none focus:ring-1 focus:border-purple-500 transition ease-in-out duration-150"
                    placeholder="Email"
                    name="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    disabled={loading}
                />
                <textarea
                    className="bg-transparent text-gray-200 border-2 border-gray-600 rounded-md p-2 mb-4 focus:outline-none focus:ring-1 focus:border-purple-500 transition ease-in-out duration-150"
                    placeholder="Message"
                    name="message"
                    id="message"
                    rows="3"
                    onChange={(e) => setMessage(e.target.value)}
                    value={message}
                    disabled={loading}
                />

                <div className="flex justify-center gap-4">
                    <button
                        type="submit"
                        className="w-1/2 relative text-white px-auto py-2 rounded-md bg-transparent hover:bg-purple-700 isolation-auto z-10 border-2 border-purple-500 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-purple-500 before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700"
                        disabled={loading}
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </div>
            </form>
        </>
    );
}

export default ContactForm;
