import arrowIcon from '../assets/arrow.svg'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import toast from 'react-hot-toast';
import axios from 'axios';
import api from '../lib/axios';
import '../styles/ToDoCreate.css'

function ToDoCreate() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()){
            toast.error('All fields are required.')
            return;
        }

        setLoading(true);
        try {
            await api.post('/to-do-list', {
                title,
                content
            })
            toast.success('Tada created successfully!');
            navigate('/')
            
        } catch (error) {
            console.log('Error creating Tada',error);
            toast.error('Failed to create Tada.')
            
        } finally {
            setLoading(false);
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
                         <p>Create Tada in your To Do List</p>

                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='Form-Title-Container'>
                            <label className='label-text'>Title</label>
                            <input type="text" placeholder='Tada Title ' value={title} onChange={(e) => setTitle(e.target.value)}/>
                        </div>
                        <div className='Form-Detail-Container'>
                            <label className='label-text'>Detail</label>
                            <textarea  maxLength="77" type="text" placeholder='Write the detail of your Tada here ...' value={content} onChange={(e) => setContent  (e.target.value)}/>
                        </div>
                        <div className='Create-Tada-Button-Container'>
                            <button type='submit' disabled={loading}>{loading ? 'Creating Tada ...': 'Create Tada' }</button>

                        </div>
                        
                    </form>

                </div>

            </div>
        </>
    );

}

export default ToDoCreate