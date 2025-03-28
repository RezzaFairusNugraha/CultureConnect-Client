const LoadingAnimation = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex space-x-3">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="w-10 h-10 bg-gradient-to-br from-amber-400 to-amber-800 rounded-lg shadow-lg animate-[bounce_1.5s_infinite]"
            style={{
              animationDelay: `${i * 0.2}s`,
              transformOrigin: "bottom",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingAnimation;
