import './styles.scss';

const Profile = () => {
    return (
        <div className='profileSection'>
            <div className="profileContainer">

                <div className="left">
                    {/* Modelo 3D */}   

                    Modelo 3d aqui   
                </div>


                <div className="right">
                    <h1>Think outside the square space</h1>
                    <div className="whatWeDo">
                        <img src="./img/line.png" alt="" className="line" />
                        <h2 className="subtitle">Who we are</h2>
                    </div>
                    <p className="description">A creative guy who like to copy and paste hahaha.</p>
                    <button>See our works</button>
                </div>
            </div>
        </div>
    )
}

export default Profile