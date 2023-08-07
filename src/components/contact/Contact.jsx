import { useRef, useState } from 'react';
import MapChart from '../map/Map';
import emailjs from '@emailjs/browser';
import './styles.scss';



const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);

    
    const form = useRef();
    
    const handleSubmit = e => {
        e.preventDefault();
        emailjs.sendForm('service_sowwo0e', 'template_ouzm7ys', form.current, 'yDqGcnKI6hkyn-ljs')
          .then((result) => {
              setSuccess(true)
              setName('');
              setEmail('');
              setMessage('');
          }, (error) => {
              console.log(error.text);
          });
    }
    return (
        <div className='contactSection'>
            <div className="contactContainer">
                <div className="contactLeft">
                    <form ref={form} onSubmit={handleSubmit}>
                        <h1 className="titleForm">Contáctame</h1>
                        <input type="text" placeholder='Nombre' name='name' value={name} onChange={(e) => setName(e.target.value)}/>
                        <input type="text" placeholder='Correo' name='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <textarea  id="" cols="30" rows="10" placeholder='Tu mensaje...' name='message' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
                        <button type='submit' className='formButton'>Enviar</button>
                        {success && 'Tu correo ha sido enviado, te responderemos a la brevedad. Gracias por contactarnos!'}
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