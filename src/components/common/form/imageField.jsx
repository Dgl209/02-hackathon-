import React, { useState } from "react";
import PropTypes from "prop-types";
import { CameraIcon, TrashIcon } from "@heroicons/react/outline";

function ImageField({
  register,
  id,
  index,
  onImageClick,
  uploadedFile,
  inputRef,
  description,
  hoverContent,
}) {
  const [imageUrl, setImageUrl] = useState(null);
  const [removeVisible, setRemoveVisible] = useState(false);

  if (uploadedFile && Object.keys(uploadedFile).length) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(uploadedFile[0]);
    fileReader.onload = () => setImageUrl(() => fileReader.result);
  }

  return (
    <div className="flex justify-center items-center w-full h-full">
      <label htmlFor={id} className="w-full h-full mr-2 mb-2" ref={inputRef}>
        {!imageUrl ? (
          <div
            className="flex flex-col justify-center items-center w-full h-full
          bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed
          cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100
          dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <CameraIcon className="w-10 h-10 text-gray-400" />
            {description && <p className="dark:text-white">{description}</p>}
          </div>
        ) : (
          <div className="w-full h-full flex justify-center items-center cursor-pointer">
            {removeVisible && (
              <div className="absolute flex items-center">
                {hoverContent === null ? (
                  <TrashIcon className="w-10 h-10 text-gray-600 dark:text-gray-400" />
                ) : (
                  hoverContent
                )}
              </div>
            )}
            <img
              onMouseOver={() => setRemoveVisible(true)}
              onMouseOut={() => setRemoveVisible(false)}
              onClick={() => onImageClick(index)}
              className="w-full h-full rounded-sm hover:opacity-20"
              src={imageUrl}
              alt=""
            />
          </div>
        )}
        {!imageUrl && (
          <input {...register(id)} id={id} type="file" className="hidden" />
        )}
      </label>
    </div>
  );
}

ImageField.defaultProps = {
  uploadedFile: {},
  onImageClick: null,
  inputRef: null,
  description: "",
  index: null,
  hoverContent: null,
};

ImageField.propTypes = {
  register: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  uploadedFile: PropTypes.object,
  index: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onImageClick: PropTypes.func,
  inputRef: PropTypes.object,
  description: PropTypes.string,
  hoverContent: PropTypes.string,
};

export default ImageField;
