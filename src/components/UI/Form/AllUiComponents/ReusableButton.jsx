const ReusableButton = ({ text, pending, className = "" }) => {
  return (
    <button
      type="submit"
      className={`text-white ${pending ? 'bg-gray-400' : 'bg-amber-800 hover:bg-amber-900'} focus:ring-2 focus:outline-none focus:ring-amber-600 font-medium rounded-lg text-sm px-5 py-2.5 cursor-pointer ${className}`}
      disabled={pending}
    >
      {pending ? "Memeriksa data..." : text}
    </button>
  );
};

export default ReusableButton;