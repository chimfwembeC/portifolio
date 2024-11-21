import React from 'react';
import { motion } from 'framer-motion';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  src: string;
}

const Resume: React.FC<ModalProps> = ({ isOpen, onClose, src }) => {
  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-lg overflow-hidden shadow-lg"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative h-96 w-96">
          <iframe
            src={src}
            title="Resume"
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            onClick={onClose}
          >
            ✖️
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Resume;
