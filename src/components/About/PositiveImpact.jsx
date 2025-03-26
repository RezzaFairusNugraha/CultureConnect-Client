import { impacts } from "../../constants/text.jsx";

const PositiveImpact = () => {
  return (
    <div className="bg-[#f7f7f7]">
      <div className="mx-auto max-w-screen-xl py-5 sm:px-6 lg:px-8">
        <hr className="border-gray-300" />
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-15 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight md:text-4xl">
            Dampak Positif{" "}
            <span className="text-white bg-amber-800 p-2 rounded-sm">
              CultureConnect
            </span>
          </h2>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-15">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ${impact.bgColor}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-full ${impact.bgColor}`}>
                  {impact.icon()}
                </div>
                <h3 className={`text-xl font-bold ${impact.textColor}`}>
                  {impact.title}
                </h3>
              </div>
              <ul className="list-disc list-inside text-gray-800">
                {impact.description.map((desc, i) => (
                  <li key={i} className="mb-2">
                    {desc}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PositiveImpact;
