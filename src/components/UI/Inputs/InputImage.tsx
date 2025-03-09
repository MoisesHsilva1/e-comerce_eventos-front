import { useState } from "react";
import IconUpdateFile from "../Icons/IconUploadFile";

interface InputImage {
  label?: string;
  placeholder?: string;
  value?: string;
}

const InputImage = ({ label, placeholder, value }: InputImage) => {
  const [image, setImage] = useState<string | undefined>(undefined);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result;
      typeof result === "string"
        ? setImage(result)
        : console.error("Error on process image");
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setImage(undefined);
  };

  const uploadImageButton = () => {
    const fileInput = document.querySelector("#inputImage") as HTMLInputElement;
    fileInput?.click();
  };

  return (
    <>
      <div className="flex flex-col">
        <label htmlFor="label">{label}</label>
        <div className="flex justify-center items-center flex-col gap-4 bg-[#F5F5F5] p-4 rounded-sm w-150 ">
          {placeholder}
          <button
            className="flex justify-center border-1 rounded-sm p-4 w-25"
            onClick={uploadImageButton}
          >
            <IconUpdateFile />
          </button>
          <input
            type="file"
            id="inputImage"
            className="hidden"
            onChange={handleImageChange}
            required
          />
          <img className="object-contain" src={image} />
          <button
            value={value}
            className="w-25 bg-red-400 p-2 rounded-sm hover:bg-red-300"
            onClick={handleRemoveImage}
          >
            Remover
          </button>
        </div>
      </div>
    </>
  );
};
export default InputImage;
