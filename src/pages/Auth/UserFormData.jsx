import { useNavigate } from "react-router-dom";

const UserFormData = () => {
    const navigate = useNavigate(); // Fixed declaration
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        navigate("/dashboard");
    };
    return (
        <div>
            <h1 className="text-3xl font-bold text-center mt-10">
                Fill User Data
            </h1>
            <form className="max-w-md mx-auto mt-8">
                <h1 className="text-2xl font-bold mb-4">Ini adalah starter untuk form tanya tanya user buat diproses datanya lebih lanjut</h1>
                <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                onClick={handleSubmit}
                >
                Submit
                </button>
            </form>
        </div>
    );
}
export default UserFormData;