import { steps } from "../../constants/text.jsx";

const HowToWork = () => {
  return (
    <div className="bg-[#f7f7f7]">
      <div
        className="mx-auto max-w-screen-xl px-4 py-15 sm:px-6 lg:px-8"
      >
        <div>
          <h2 className="text-4xl font-semibold leading-tight tracking-tight md:text-4xl">
            Cara Kerja CultureConnect
          </h2>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-6 py-12">
        <div className="relative pl-6">
          {steps.map((step, index) => (
            <div key={step.id} className="relative flex items-start mb-12">
              {index !== steps.length - 1 && (
                <div
                  className="absolute top-12 w-[3px] h-full bg-gray-300"
                ></div>
              )}
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full border-4 ${step.color} absolute left-[-24px]`}
              >
                {step.icon()}
              </div>
              <div
                className="ml-12 p-5 bg-white shadow-md rounded-lg w-full"
              >
                <h3 className="text-lg font-bold">{step.title}</h3>
                <p className="text-gray-700">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowToWork;
