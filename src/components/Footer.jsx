import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
    const footerStyle = {
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '100%',
        padding: '1rem 0',
        backgroundColor: '#68bac9',
        color: 'white' // Added for better contrast
    }

    const logoStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '0.5rem'
    }

    return (
        <footer className="footer" style={footerStyle}>
            <div className="container text-center">
                <span>Portfolio</span>
                <div style={logoStyle}>
                    <h2 className="mx-2">
                        <a href="https://github.com/jy8liu" target="_blank" rel="noopener noreferrer" style={{color: 'white'}}>
                            <FaGithub />
                        </a>
                    </h2>
                    <h2 className="mx-2">
                        <a href="mailto:jy8liu@gmail.com" style={{color: 'white'}}>
                            <SiGmail />
                        </a>
                    </h2>
                </div>
            </div>
        </footer>
    );
}