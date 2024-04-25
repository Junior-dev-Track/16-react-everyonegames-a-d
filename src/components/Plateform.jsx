import './Plateform.css';

// eslint-disable-next-line react/prop-types
const Plateform = ({imageInfo}) => {

    const display_plateform = (id_plateform) => {
        switch (id_plateform) {
            case 1 :
                return <i className="fa-solid fa-desktop"></i>;
            case 2 :
                return <i className="fa-brands fa-playstation"></i>;
            case 3 :
                return <i className="fa-brands fa-xbox"></i>;
            case 4 :
                return <i className="fa-brands fa-apple"></i>;
            case 5 :
                return <i className="fa-solid fa-apple-whole"></i>;
            case 6 :
                return <i className="fa-brands fa-linux"></i>;
            case 7 :
                return <i className="fa-brands fa-windows"></i>;
            default :
                return `Need icon ${id_plateform}`;
        }
    }

    return (
        <>
            <div className="imagePlateform">
                {/* eslint-disable-next-line react/prop-types */}
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

