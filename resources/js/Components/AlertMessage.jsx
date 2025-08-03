export default function AlertMessage({ success, error, ...props }) {
  return (
    <div {...props}>
      {success && (
        <div
          className="mb-4 flex items-center gap-2 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded"
          role="alert"
        >
          <svg
            className="w-5 h-5 text-green-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>{success}</span>
        </div>
      )}
      {error && (
        <div
          className="mb-4 flex items-center gap-2 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"
          role="alert"
        >
          <svg
            className="w-5 h-5 text-red-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
