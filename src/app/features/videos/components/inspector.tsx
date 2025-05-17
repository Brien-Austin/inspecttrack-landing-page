import VideoPlayer from "@/app/common/components/video-player";
import React from "react";

interface InspectorDemoVideoProps {
  primaryText: string;
  secondaryText: string;
  videoUrl: string;
}
const InspectorDemoVideo: React.FC<InspectorDemoVideoProps> = ({
  primaryText,
  secondaryText,
  videoUrl,
}) => {
  return (
    <div className="flex flex-col my-2">
      <h1 className="text-blue-700 text-lg font-medium tracking-tight">
        {primaryText}
      </h1>
      <h1 className="text-xs text-gray-600 tracking-wide">{secondaryText}</h1>

      <div className="mt-4">
        <VideoPlayer src={videoUrl} />
      </div>
    </div>
  );
};

export default InspectorDemoVideo;
