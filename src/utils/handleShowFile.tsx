export const handleShowFile = (
  file: File,
  callback: (result: string | ArrayBuffer | null) => void
) => {
  console.log("file", file);
  const reader = new FileReader();

  reader.onloadend = () => {
    callback(reader.result);
  };

  reader.readAsDataURL(file);
};
