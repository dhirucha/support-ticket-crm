const LoadingSpinner = () => {
  return (
    <div className="flex justify-center py-16">

      <div
        className="
        h-12
        w-12
        border-4
        border-blue-600
        border-t-transparent
        rounded-full
        animate-spin
        "
      />

    </div>
  );
};

export default LoadingSpinner;