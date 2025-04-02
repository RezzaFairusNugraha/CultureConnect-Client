import { CiBookmark } from "react-icons/ci";

const SavedDestination = () => {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-8">
            <div className="mt-6">
                <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <CiBookmark className="text-3xl text-gray-600" />
                    Tersimpan
                </h2>
                <div className="mt-4 flex justify-center">
                    <p className="text-gray-600">
                        Tidak ada destinasi yang tersimpan
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SavedDestination;