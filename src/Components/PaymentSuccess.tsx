
const PaymentSuccess = () => {
  return (
     <div className="App flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">

      <div className="bg-[#edf1e4] border-2 dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex flex-col items-center space-y-4">
          <CircleCheckIcon className="text-[#002b23] h-16 w-16" />
          <h1 className="text-2xl font-bold text-[#002b23]">Payment Successful</h1>
          <p className="text-gray-500 dark:text-gray-400 text-center">
            Access to All Codemarch Codecamps + Whatsapp 24/7 Tech Support
          </p>
          <a
            className="inline-flex items-center justify-center rounded-md bg-[#002b23] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#3d8361] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-700 dark:focus:ring-offset-gray-900"
            href="#"
          >
            Join Whatsapp Group         
            </a>         
        </div>
      </div>
    </div>
  )
}

function CircleCheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

export default PaymentSuccess