import React, { useState } from 'react';



const MailboxForm = ({ addBox }) => {

    const [formData, setFormData] = useState({ boxholder: '', boxSize: 'Small'});

    const handleChange = ({ target }) => {
        setFormData({...formData, [target.name]: target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted ', formData)
    }

    return (
        <div>
            <h2>New Mailbox</h2>
            <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxholder">Enter a Boxholder:</label>
                    <input
                        type="text"
                        id="boxholder"
                        name="boxholder"
                        value={formData.boxholder}
                        onChange={handleChange}
                    />
                <label htmlFor="boxSize">Select a Box Size:</label>
                    <select
                        id="boxSize"
                        name="boxSize"
                        value={formData.boxSize}
                        onChange={handleChange}
                    >
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>

                <button type="submit">Submit</button>
            </form>
        </div>
        </div>
    );
};

export default MailboxForm;