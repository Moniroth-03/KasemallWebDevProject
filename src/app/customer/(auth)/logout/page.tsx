export default function Logout() {
  return (
    <div className="h-screen bg-Bg">
      <div className="shadow-2xl bg-white rounded-3xl max-w-md mx-auto">
        <p className="pt-10 text-center mb-8 font-semibold text-lg text-gray-700">
          Are you sure to log out Customer?
        </p>
        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            className="focus:outline-none text-white bg-navBorder hover:bg-navBg focus:ring-4 focus:ring-green-100 font-medium rounded-xl text-base px-12 py-3 me-2 mb-12"
          >
            Cancel
          </button>
          <button
            type="button"
            className="focus:outline-none text-white bg-red-600 hover:bg-red-700 font-medium rounded-xl text-base px-10 py-3 me-2 mb-12"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
