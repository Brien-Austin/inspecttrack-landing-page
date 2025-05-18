"use client";
import React from "react";
import NavigationBar from "./features/navigation/components/navBar";
import TextRotator from "./common/components/text-rotator";
import Button from "./common/components/button";
import { Download } from "lucide-react";

const appFeatures: string[] = [
  "Track Geo-Tagged Field Visits",
  "Sync Data in Real-Time",
  "Upload Instant Photo Proof",
  "Secure Biometric Sign-Off",
  "OTP-Based Quick Authentication",
  "Generate Digital Inspection Reports",
  "Drive Smart, Transparent Governance",
  "Verify Every Site Visit",
];

const Home = () => {
  return (
    <div className="overflow-x-hidden min-h-screen">
      <NavigationBar />
      <div className="container mx-auto px-4 sm:px-6 mt-10">
        <div className="py-6 md:py-10 w-full">
          <TextRotator texts={appFeatures} interval={1500} />
        </div>
        <div className="lg:hidden sm:hidden  flex justify-center items-center mt-4">
          <Button
            ctaText="Download APK"
            ctaIcon={Download}
            iconColor="white"
            iconPosition="left"
            ctaAction={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
