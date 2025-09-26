import { Link, useNavigate, useParams } from "react-router-dom";
import arrowIcon from '../assets/arrow.svg'
import { useEffect, useState } from "react";
import api from "../lib/axios";

import toast from "react-hot-toast";



function ToDoDetail() {

    const [toDo, setToDo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const {id} = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        const fetchToDo = async () => {
            try {
                const res = await api.get(`/to-do-list/${id}`)
                setToDo(res.data);
            } catch (error) {
                console.log('Failed in fetching tada', error)
                toast.error('Failed to fetch the Tada.')
            } finally {
                setLoading(false);
            }
        }

        fetchToDo();
    }, [id])
    console.log(toDo);

    if (loading) {
        return(
            <>
               loading...
            </>
        );
    }

    const handleUpdate = async (e) => {
        if (!toDo.title.trim() || !toDo.content.trim()) {
            toast.error('Both title and content are required.')
        }
        setSaving(true);

        try {
            e.preventDefault();
            await api.put(`/to-do-list/${id}`, toDo)
            toast.success('Tada updated successfully.')
            navigate('/');
        } catch (error) {
            toast.error('Error updating tada.')
            
        } finally {
            setSaving(false);
        }
    }

    return(
        <>
            <Link to={'/'}>
                <div className="Back-To-Home-Container">
                    <img src={arrowIcon} alt="" />
                    <p>Back To Home</p>
                </div>
            </Link>
            <div className="To-Do-Create-Wrapper">
                <div className='To-Do-Form-Container'>
                    <div className='To-Do-Titile-Container'> 
                         <p>Update your Tada</p>

                    </div>
                    <form>
                        <div className='Form-Title-Container'>
                            <label className='label-text'>Title</label>
                            <input type="text" placeholder='Tada Title' value={toDo.title} onChange={(e) => setToDo({...toDo, title: e.target.value })}/>
                        </div>
                        <div className='Form-Detail-Container'>
                            <label className='label-text'>Detail</label>
                            <textarea  maxLength="77" type="text" placeholder='Write the detail of your Tada here ...' value={toDo.content} onChange={(e) => setToDo({...toDo, content: e.target.value })}/>
                        </div>
                        <div className='Create-Tada-Button-Container'>
                            <button type='submit' disabled={saving} onClick={handleUpdate}>{saving? 'Saving...' : 'Save Changes'}</button>

                        </div>
                    </form>

                </div>

            </div>
        </>
    );

}



export default ToDoDetail