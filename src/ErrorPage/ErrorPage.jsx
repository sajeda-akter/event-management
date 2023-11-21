import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <img src="https://media.istockphoto.com/id/175434516/photo/not-found.webp?b=1&s=170667a&w=0&k=20&c=qpebaUiECCUI6wSa0InzbEWZVWqgNHz03dAc-QCr0Vs=" className="w-2/4 mx-auto mt-12 rounded-md " alt="" />
            <p className="text-3xl font-bold border-2 border-indigo-900 rounded w-72 p-3 mx-auto mt-6"><Link to="/">Go to Home Page</Link></p>
        </div>
    );
};

export default ErrorPage;