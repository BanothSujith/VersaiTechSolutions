const QtyLess = ({ isOpen, onConfirm, onCancel }) => {
    if (!isOpen) return null;
  
    return (
      <div
        className="absolute inset-0 bg-[#f1ededb6] flex items-center justify-center z-50"
      >
        <div className="bg-white rounded-lg shadow-lg p-6 w-96 text-center">
          <p className="text-lg font-medium mb-4">
            Are you sure you want to remove this item?
          </p>
          <div className="flex justify-center space-x-4">
            <button
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              onClick={onConfirm}
            >
              Yes
            </button>
            <button
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              onClick={onCancel}
            >
              No
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default QtyLess;
  