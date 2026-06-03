const EmptyState = ({
  message,
}) => {
  return (
    <div
      className="
      bg-white
      border
      rounded-xl
      p-12
      text-center
      "
    >
      <h3 className="text-lg font-semibold mb-2">
        Nothing Found
      </h3>

      <p className="text-gray-500">
        {message}
      </p>
    </div>
  );
};

export default EmptyState;