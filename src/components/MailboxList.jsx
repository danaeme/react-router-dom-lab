import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => {
    return (
      <div>
        <h2>Mailbox List</h2>
        <ul>
        {mailboxes.map((mailbox) => (
          <li key={mailbox._id} className="mail-box">
            <Link to={`/mailboxes/${mailbox._id}`}>
              Mailbox {mailbox._id}: {mailbox.boxholder} ({mailbox.boxSize})
            </Link>
          </li>
        ))}
      </ul>
      </div>
    );
};

export default MailboxList;