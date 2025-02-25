
import { Upload } from 'lucide-react';
import { useState } from 'react';

interface ItemImageUploadProps {
  index: number;
  imageUrl?: string;
  handleImageUpload: (index: number, file: File) => Promise<void>;
  uploading: boolean;
}

export const ItemImageUpload = ({ index, imageUrl, handleImageUpload, uploading }: ItemImageUploadProps) => {
  return (
    <div className="mb-4">
      <label className="norr11-label">
        Item Image
      </label>
      <div className="flex items-center gap-4">
        {imageUrl ? (
          <div className="relative w-24 h-20">
            <img
              src={imageUrl}
              alt={`Item ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) => e.target.files && handleImageUpload(index, e.target.files[0])}
              className="hidden"
              id={`image-upload-${index}`}
            />
            <label
              htmlFor={`image-upload-${index}`}
              className="absolute inset-0 flex items-center justify-center bg-black/50 text-white rounded-lg opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
            >
              Change
            </label>
          </div>
        ) : (
          <div className="w-24">
            <input
              type="file"
              accept="image/*"
              onChange={(e) => e.target.files && handleImageUpload(index, e.target.files[0])}
              className="hidden"
              id={`image-upload-${index}`}
            />
            <label
              htmlFor={`image-upload-${index}`}
              className="flex flex-col items-center justify-center w-24 h-20 border-2 border-dashed rounded-lg cursor-pointer hover:bg-gray-50"
            >
              <Upload className="w-5 h-5 text-gray-400" />
              <span className="text-xs text-gray-500">Upload</span>
            </label>
          </div>
        )}
        {uploading && <span className="text-sm text-gray-500">Uploading...</span>}
      </div>
    </div>
  );
};
