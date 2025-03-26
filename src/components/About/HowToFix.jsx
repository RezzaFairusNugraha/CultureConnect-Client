import { solutions } from "../../constants/text.jsx";

const HowToFix = () => {
  return (
    <div className="bg-[#f7f7f7]">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-gray-900">
            Bagaimana CultureConnect Mengatasi Masalah Ini?
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 place-items-center">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="w-full max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col"
            >
              <div className="flex items-center mb-4">
                <div className={`p-3 ${solution.bgColor} rounded-full`}>
                  {solution.icon()}
                </div>
                <h5 className="ml-3 text-xl font-bold text-gray-900">
                  {solution.title}
                </h5>
              </div>
              <p className="text-gray-700 flex-grow">{solution.description}</p>
              <a
                href="#"
                className={`mt-4 inline-block font-semibold hover:underline ${solution.linkColor}`}
              >
                {solution.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowToFix;
