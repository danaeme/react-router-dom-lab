import { useParams } from 'react-router-dom';
import './MailboxDetails.css';

const MailboxDetails = ({ mailboxes }) => {

    const { mailboxId } = useParams();
    
    const mailbox = mailboxes.find((mailboxItem) => mailboxItem._id === Number(mailboxId));

    if (!mailbox) {
        return <h2>Mailbox not Found!!!</h2>
    }

    

    return (
        <div className="mailbox-details">
            <h2>Mailbox {mailbox._id}</h2>
            <div>
            <h3>Details</h3>
            <p><strong>Boxholder:</strong> {mailbox.boxholder}</p>
            <p><strong>Box Size:</strong> {mailbox.boxSize}</p>
            </div>
        </div>
    );
};

export default MailboxDetails;