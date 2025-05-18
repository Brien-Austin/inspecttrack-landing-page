"use client";
import React from "react";
import { X, Star } from "lucide-react";
import Button from "./button";
import { useRouter } from "next/navigation";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  githubUrl?: string;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  githubUrl = "https://github.com/username/repo",
}) => {
  if (!isOpen) return null;

  const router = useRouter();

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 p-5"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg p-6 max-w-lg w-full shadow-lg relative z-50 flex flex-col max-h-11/12"
        onClick={(e) => e.stopPropagation()}
      >
        {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}
        <div className="overflow-y-auto demo-modal-scrollbar flex-1 pr-2">
          {children}
        </div>

        <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-200">
          <Button
            ctaTextColor="black"
            ctaText="Star on Github"
            buttonColor="white"
            iconColor="blue"
            innerBorderColor="border-blue-600"
            ctaAction={() => {
              router.push(
                "https://github.com/Brien-Austin/inspect-track-flutter"
              );
            }}
            ctaIcon={Star}
            iconPosition="left"
          />

          <Button ctaText="Close" ctaAction={onClose}></Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
