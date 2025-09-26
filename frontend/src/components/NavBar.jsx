import '../styles/NavBar.css'
import { Link } from 'react-router-dom'


function NavBar() {
    return (
        <>
            <div className='Nav-Bar-Wrapper'>
                <div className='Nav-Bar-Title-Container'>
                    <h1>My To Do List</h1>
                </div>
                <Link to='/to-do-list'>
                    <div className='Nav-Bar-Create-Button-Container'>
                        <span></span>
                        <span></span>
                    </div>
                </Link>

            </div>
        </>
    )
}

export default NavBar