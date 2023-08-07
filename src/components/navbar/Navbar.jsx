import './styles.scss';

const Navbar = () => {
  return (
    <div className='navbarSection'>
        <div className="navbarContainer">
            <div className="menu">
                <img src="img/logo.png" alt="" className="logo" />
                <ul className="list">
                    <li className="listItem">Home</li>
                    <li className="listItem">Studio</li>
                    <li className="listItem">Works</li>
                    <li className="listItem">Contact</li>
                </ul>
            </div>
            
            <div className="icons">
                <button>Hire Now</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar