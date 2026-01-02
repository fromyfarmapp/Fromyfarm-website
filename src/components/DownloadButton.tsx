"use client"
import React, { useState } from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";

interface DownloadButtonProps {
  text: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ text }) => {
  const [isDownloadPopupOpen, setIsDownloadPopupOpen] = useState(false);

  return (
    <div>
      <div className="pt-6">
        {/* App Store Downloads */}
        <div className="space-y-4"></div>
        <Button
          size="lg"
          className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-4 text-lg shadow-lg transform hover:scale-105 transition-all duration-200"
          onClick={() => setIsDownloadPopupOpen(true)}
        >
        {text}
        </Button>
      </div>
      {/* Download App Popup */}
      {isDownloadPopupOpen && (
        <div className="fixed inset-0 bg-white/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4 z-50">
          <div className="glass rounded-2xl p-6 max-w-md w-full relative">
            <button
              onClick={() => setIsDownloadPopupOpen(false)}
              className="absolute top-4 right-4 text-foreground/60 hover:text-foreground transition-colors duration-200"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-center mb-6">
              <h3 className="text-xl font-bold gradient-text mb-2">
                Download Fromyfarm App
              </h3>
              <p className="text-foreground/80 text-sm">
                Get the app and never miss an update
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
              <a
                href="https://play.google.com/store/apps/details?id=com.fromyfarm"
                target="_blank"
                rel="noopener noreferrer"
                className="group transform hover:scale-105 transition-all duration-300"
                onClick={() => setIsDownloadPopupOpen(false)}
              >
                <img
                  src="/images/android.png"
                  alt="Get it on Google Play"
                  className="h-20 w-auto opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </a>
              <a
                href="https://apps.apple.com/ug/app/fromyfarm/id6742323473"
                target="_blank"
                rel="noopener noreferrer"
                className="group transform hover:scale-105 transition-all duration-300"
                onClick={() => setIsDownloadPopupOpen(false)}
              >
                <img
                  src="/images/apple.png"
                  alt="Download on the App Store"
                  className="h-20 w-auto opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DownloadButton;
