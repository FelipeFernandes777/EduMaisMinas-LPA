"use client";
import { useEffect, useState } from "react";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-md bg-white shadow-lg rounded-xl p-4 border border-gray-200 z-50">
      <p className="text-sm text-gray-800">
        Utilizamos cookies para melhorar sua experiência. Ao continuar
        navegando, você concorda com a nossa política de cookies.
      </p>
      <div className="mt-3 flex justify-end">
        <button
          onClick={handleAccept}
          className="bg-[var(--primary-pink)] hover:bg-pink-600 text-white text-sm font-semibold py-1 px-4 rounded-md"
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}
