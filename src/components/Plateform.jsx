
import WindowsIcon from '/src/assets/icon/plateform/Windows.svg';
import Playstation from '/src/assets/icon/plateform/Playstation.svg';
import Xbox from '/src/assets/icon/plateform/Xbox.svg';
import Apple from '/src/assets/icon/plateform/Apple.svg';
import Nintendo from '/src/assets/icon/plateform/Nintendo.svg';
import Linux from '/src/assets/icon/plateform/Linux.svg';
import Android from '/src/assets/icon/plateform/Android.svg';
import Telephone from '/src/assets/icon/plateform/Telephone.svg';

// eslint-disable-next-line react/prop-types
const Plateform = ({imageInfo}) => {

    const display_plateform = (id_plateform) => {
        switch (id_plateform) {
            case 1 :
                return <img className="resizeImage" src={WindowsIcon} alt="steam" />;
            case 2 :
                return <img className="resizeImage" src={Playstation} alt="Playstation"/>;
            case 3 :
                return <img className="resizeImage" src={Xbox} alt="Xbox"/>;
            case 4 :
                return <img className="resizeImage" src={Telephone} alt="Telephone"/>;
            case 7 :
                return <img className="resizeImage" src={Apple} alt="Apple"/>;
            case 5 :
                return <img className="resizeImage" src={Nintendo} alt="Nintendo"/>;
            case 6 :
                return <img className="resizeImage" src={Linux} alt="Linux"/>;
            case 8 :
                return <img className="resizeImage" src={Android} alt="Android"/>;
            default :
                return `Need icon ${id_plateform}`;
        }
    }

    return (
        <>
            <div className="imagePlateform">
                {imageInfo.map(element => (
                    <div key={element.platform.id}>
                        {display_plateform(element.platform.id)}
                    </div>
                ))}
            </div>
        </>
    );
}



export default Plateform;

