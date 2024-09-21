import React from "react";
import { useState } from "react";


export const BaniereCookies = ()=>{
    const [isVisible, setIsVisible] = useState(true);

  const acceptCookies = () => {
    // Logique pour accepter les cookies (stockage ou analytics)
    setIsVisible(false);
  };

  const declineCookies = () => {
    // Logique pour refuser les cookies
    setIsVisible(false);
  };

  if (!isVisible) return null;

return(
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
    <div className="flex items-center justify-between">
      <p className="text-sm">
        Ce site utilise des cookies pour améliorer votre expérience. En continuant à naviguer, vous acceptez notre <a href="/policy" className="underline">politique de cookies</a>.
      </p>
      <div className="flex space-x-4">
        <button
          onClick={acceptCookies}
          className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
        >
          Accepter
        </button>
        <button
          onClick={declineCookies}
          className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
        >
          Refuser
        </button>
      </div>
    </div>
  </div>
);
}