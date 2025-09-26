import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ToDoCard from "../components/ToDoCard";
import '../styles/Home.css'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import api from "../lib/axios";


function Home() {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchToDo = async() => {
            try {
                const res = await api.get('/to-do-list');
                setNotes(res.data);
                
            } catch (error) {
                console.log('Error fetching to do.', error);
                toast.error('Failed to load to do list.');
            } finally {
                setLoading(false);
            }
        };
        fetchToDo();

    }, [])

    return(
        <>
            <NavBar/>

            <div className="Home-To-Do-Cards-Wrapper">
                {notes.length > 0 && (
                    notes.map(note => (
                        <ToDoCard title={note.title} content={note.content} date={note.createdAt} key={note._id} allInfo={note} setNotes={setNotes}/>
                    ))
                )}
            </div>
            {loading && <p>loading...</p>}
            
            
        </>
    );

}

export default Home