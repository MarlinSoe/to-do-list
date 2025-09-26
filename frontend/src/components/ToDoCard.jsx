import updateIcon from '../assets/update.svg'
import trashIcon from '../assets/trash.svg'
import '../styles/ToDoCard.css'
import { Link } from 'react-router-dom'
import { formatDate, formatTime } from '../lib/utils'
import api from '../lib/axios.js'
import toast from 'react-hot-toast'
import { useNavigate }from 'react-router-dom'

function ToDoCard({title, content, date, allInfo, setNotes}) {
    const navigate = new useNavigate();

    const handleDelete = async (e, ID) => {
        e.preventDefault();
        try {
            await api.delete(`/to-do-list/${ID}`);
            navigate('/');
            toast.success('Tada deleted successfully.');
        } catch (err) {
            toast.error('Failed to delete.');
            console.error(err);
        } finally {
            setNotes((prev) => prev.filter(allInfo => allInfo._id !== ID)); // get rid of deleted tada
        }
    };


    return (
        <>  
                <div className="To-Do-Card-Container">
                    <div className="To-Do-Card-Information-Container">
                        <h1>{title}</h1>
                        <p>{content}</p>
                    </div>
                    <div className="To-Do-Card-Additional-Container">
                        <div className="To-Do-Card-Date-Container">
                            <p>{formatDate(new Date(date))} <span>.</span> {formatTime(new Date(date))}</p> 
                        </div>
                        <div className='To-Do-Card-Setting-Container'>
                            <Link to={`/to-do-list/${allInfo._id}`}>
                                <div className="To-Do-Card-Update-Container">
                                    <img src={updateIcon} alt="" />
                                </div>
                            </Link>
                            <div className="To-Do-Card-Delete-Container">
                                <img src={trashIcon} alt="" onClick={(e) => handleDelete(e, allInfo._id)}/>
                            </div>
                        </div>
                        
                    </div>
                </div>
        </>
    )
}

export default ToDoCard