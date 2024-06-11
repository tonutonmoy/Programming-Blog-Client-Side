/* eslint-disable @typescript-eslint/no-explicit-any */
export const cloudINary = async (data: any): Promise<string | null> => {
  const formData = new FormData();
  formData.append("file", data);
  formData.append("upload_preset", "zviy3isn");
  formData.append("cloud_name", "dfms3ialq");

  try {
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dfms3ialq/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const result = await response.json();
    return result.url ?? null;
  } catch (error) {
    console.error("Error uploading image:", error);
    return null;
  }
};
