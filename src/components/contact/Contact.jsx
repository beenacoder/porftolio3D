import MapChart from '../map/Map';
import './styles.scss';

const handleSubmit = e => {
    e.preventDefault();
}

const Contact = () => {

    return (
        <div className='contactSection'>
            <div className="contactContainer">
                <div className="contactLeft">
                    <form onSubmit={handleSubmit}>
                        <h1 className="titleForm">Contáctame</h1>
                        <input type="text" placeholder='Nombre' />
                        <input type="text" placeholder='Correo' />
                        <textarea name="" id="" cols="30" rows="10" placeholder='Tu mensaje...'></textarea>
                        <button type='submit' className='formButton'>Enviar</button>
                    </form>
                </div>
                <div className="contactRight">
                    <MapChart />
                </div>
            </div>
        </div>
    )
}

export default Contact