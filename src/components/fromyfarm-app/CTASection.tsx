import React from "react";
import DownloadButton from "@/components/DownloadButton";
import Link from "next/link";
import { BookOpen } from "lucide-react";

export default function CTASection() {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="glass-card text-center max-w-4xl mx-auto animate-fade-in">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Download Fromyfarm and start your journey to agricultural success.
            Our tutorials will guide you every step of the way.
          </p>

          <div className="flex justify-center items-center gap-4 ">
            <DownloadButton text="Download App" />
              <Link href="/tutorials">
            <div className="border mt-6 flex inline-flex items-center space-x-2 px-6 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-300 font-semibold">
                <BookOpen className="h-5 w-5" />
                <span>View Tutorials</span>
            </div>
              </Link>
          </div>

          <p className="text-sm text-muted-foreground pt-4">
            Need help getting started? Our comprehensive tutorials cover
            everything from setup to advanced features.
          </p>
        </div>
      </div>
    </section>
  );
}
