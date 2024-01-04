import { useNavigate } from 'react-router-dom';
import style from './landing.module.css';


const Landing = () => {
    const navigate = useNavigate();
    return (
        <div className = {style.container}> 
            <button className= {style.buttonLand} onClick={() => navigate('/home')}>HOME
            </button>
        </div>    
    )
}

export default Landing;