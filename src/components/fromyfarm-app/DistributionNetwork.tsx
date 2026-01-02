"use client"
import React, { useState } from "react";
import { X } from "lucide-react";

export default function DistributionNetwork() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <section className="bg-muted/30 py-20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Distribution Network
          </h2>
          <p className="text-xl text-muted-foreground">
            Connecting agricultural communities across the region
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src="/images/Dsitribution.jpg"
            alt="Fromyfarm distribution network showing connections across communities"
            className="w-full md:w-4/5 lg:w-3/5 h-auto object-cover rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={() => setIsPreviewOpen(true)}
          />
        </div>

        {/* Image Preview Modal */}
        {typeof window !== "undefined" && isPreviewOpen && (
          <div className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4">
            <div className="relative bg-white rounded-lg shadow-lg p-4 max-w-5xl w-full flex flex-col items-center">
              <button
                onClick={() => setIsPreviewOpen(false)}
                className="absolute top-4 right-4 text-foreground/60 hover:text-foreground transition-colors duration-200"
                aria-label="Close preview"
              >
                <X className="h-6 w-6" />
              </button>
              <img
                src="/images/Dsitribution.jpg"
                alt="Distribution Network Preview"
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
