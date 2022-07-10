import React from "react";

function NotFound() {
  return (
    <div className="container mx-auto mt-40">
      <div className="flex justify-center">
        <div className="flex flex-col items-center p-20 max-w-md bg-white rounded-lg border border-gray-200 shadow-md dark:bg-graiy-800 dark:border-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            ERROR 404
          </h5>
          <div>
            <svg
              className="h-20 w-20 text-purple-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <circle cx="12" cy="12" r="9" />
              <line x1="9" y1="10" x2="9.01" y2="10" />
              <line x1="15" y1="10" x2="15.01" y2="10" />
              <path d="M9.5 15.25a3.5 3.5 0 0 1 5 0" />
            </svg>
          </div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Page Not Found
          </h5>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
