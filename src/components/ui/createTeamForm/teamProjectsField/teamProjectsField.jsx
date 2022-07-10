import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Button, ImageField } from "../../../common";

function TeamProjectsField({
  register,
  fields,
  append,
  remove,
  getValues,
  watch,
}) {
  const uploadedImagesArray = getValues("projects");
  const watchAdImages = watch("projects");
  const inputRef = useRef();

  useEffect(() => {}, [watchAdImages]);

  useEffect(() => {
    return () => {
      append({});
    };
  }, []);

  const handleClick = async () => {
    await append({});
    inputRef.current.click();
  };

  const handleImageClick = (id) => {
    remove(id);
  };

  return (
    <div>
      <div className="grid grid-cols-4 h-28 mb-6">
        {fields.map((field, index) => (
          <div className="h-28" key={field.id}>
            <ImageField
              uploadedFile={uploadedImagesArray[index]}
              onImageClick={handleImageClick}
              index={index}
              register={register}
              inputRef={inputRef}
              id={`projects.${index}`}
            />
          </div>
        ))}
      </div>
      {fields.length < 4 && (
        <div className="mb-6">
          <Button name="Add one photo" onClick={handleClick} color="light" />
        </div>
      )}
    </div>
  );
}

TeamProjectsField.propTypes = {
  register: PropTypes.func.isRequired,
  fields: PropTypes.array.isRequired,
  append: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
  getValues: PropTypes.func.isRequired,
  watch: PropTypes.func.isRequired,
};

export default TeamProjectsField;
