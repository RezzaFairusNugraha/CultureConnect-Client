import { Link } from "react-router-dom";

const MainForm = ({ title, children, linkTo }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-center mb-4">{title}</h3>
        {children}

        {linkTo && (
          <div className="text-center mt-6 text-sm">
            <p className="text-xs md:text-sm text-gray-500 text-center">
              {linkTo.text}{" "}
              <span className="text-blue-700 border border-l-0 border-t-0 border-r-0 border-blue-700">
                <strong>
                  <Link to={linkTo.href}>{linkTo.label}</Link>
                </strong>
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainForm;
