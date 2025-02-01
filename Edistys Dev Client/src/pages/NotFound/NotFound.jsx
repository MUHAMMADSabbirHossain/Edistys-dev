import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <img
                src="https://i.imgur.com/qIufhof.png"
                alt="Funny Lost"
                className="w-64 mb-6 animate-bounce"
            />
            <h1 className="text-4xl font-bold text-gray-800">Oops! Page Not Found</h1>
            <p className="text-gray-600 mt-2">It looks like you&apos;re lost in space.</p>
            <div className="my-5 flex flex-wrap justify-center gap-4">
                <Link to="/" className="btn btn-primary">Home</Link>
                <Link to="/solutions" className="btn btn-secondary">Solutions</Link>
                <Link to="/services" className="btn btn-accent">Services</Link>
                <Link to="/about" className="btn btn-info">About</Link>
                <Link to="/contact" className="btn btn-success">Contact</Link>
            </div>
        </div>
    );
};

export default NotFound;