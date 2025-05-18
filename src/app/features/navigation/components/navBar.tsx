"use client";
import Modal from "@/app/common/components/modal";
import VideoPlayer from "@/app/common/components/video-player";
import { PlayCircle, Menu, X } from "lucide-react";
import React, { useState } from "react";
import InspectorDemoVideo from "../../videos/components/inspector";
import HODDemoVideo from "../../videos/components/hod";
import CollectorDemoVideo from "../../videos/components/collector";
import Button from "@/app/common/components/button";

const NavigationBar = () => {
  const [isVideoOpened, setVideoOpened] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutOpen, setAboutOpen] = useState(false);
  const [isTeamOpen, setTeamOpen] = useState(false);
  const [isContactOpen, setContactOpen] = useState(false);

  const openVideoModal = () => setVideoOpened(true);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <div className="container mx-auto py-5 px-4 sm:px-6 flex items-center justify-between">
        <h1 className="font-bold text-xl text-blue-600">Inspect Track</h1>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex items-center"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <div className="hidden md:flex gap-6 lg:gap-10 items-center">
          <h1
            onClick={() => setAboutOpen(true)}
            className="font-medium text-sm cursor-pointer"
          >
            About
          </h1>
          <h1
            onClick={() => setTeamOpen(true)}
            className="font-medium text-sm cursor-pointer"
          >
            Team
          </h1>
          <h1
            onClick={() => setContactOpen(true)}
            className="font-medium text-sm cursor-pointer"
          >
            Contact
          </h1>
          <Button
            ctaAction={openVideoModal}
            ctaText="Watch Demo video"
            ctaIcon={PlayCircle}
          />
        </div>

        {/* Mobile navigation - Slide down menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white shadow-lg z-50 md:hidden">
            <div className="flex flex-col gap-4 p-4">
              <h1
                onClick={() => setAboutOpen(true)}
                className="font-medium text-sm py-2 cursor-pointer"
              >
                About
              </h1>
              <h1
                onClick={() => setTeamOpen(true)}
                className="font-medium text-sm py-2 cursor-pointer"
              >
                Team
              </h1>
              <h1
                onClick={() => setContactOpen(true)}
                className="font-medium text-sm py-2 cursor-pointer"
              >
                Contact
              </h1>
              <div className="pt-2">
                <Button
                  ctaAction={openVideoModal}
                  ctaText="Watch Demo video"
                  ctaIcon={PlayCircle}
                />
              </div>
            </div>
          </div>
        )}

        {/* Demo Video Modal */}
        <Modal
          isOpen={isVideoOpened}
          onClose={() => setVideoOpened(false)}
          title="Mobile App Flow"
        >
          <div className="space-y-6">
            <InspectorDemoVideo
              primaryText="Inspector Flow"
              secondaryText="This video contains all the functionalities and features of inspector login"
              videoUrl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            />
            <HODDemoVideo
              primaryText="HOD Flow"
              secondaryText="This video contains all the functionalities and features of HOD login"
              videoUrl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
            />
            <CollectorDemoVideo
              primaryText="Collector Flow"
              secondaryText="This video contains all the functionalities and features of Collector login"
              videoUrl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
            />
          </div>
        </Modal>

        {/* About Modal */}
        <Modal
          isOpen={isAboutOpen}
          onClose={() => setAboutOpen(false)}
          title="About"
        >
          <div className="space-y-4">
            {/* Fill this section with about content */}
          </div>
        </Modal>

        {/* Team Modal */}
        <Modal
          isOpen={isTeamOpen}
          onClose={() => setTeamOpen(false)}
          title="Team"
        >
          <div className="space-y-4">
            {/* Fill this section with team content */}
          </div>
        </Modal>

        {/* Contact Modal */}
        <Modal
          isOpen={isContactOpen}
          onClose={() => setContactOpen(false)}
          title="Contact"
        >
          <div className="space-y-4">
            {/* Fill this section with contact content */}
          </div>
        </Modal>
      </div>
    </>
  );
};

export default NavigationBar;
