export const deleteImage = async (public_id, signature) => {
  const deleted = await fetch(
    "https://api.cloudinary.com/v1_1/dchitmmmx/image/destroy",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        public_id,
        api_key: "638525411819457",
        api_secret: "-frjg7W1RirISADR48Of5-flGyo",
        signature,
        timestamp: Math.floor(new Date().getTime() + 31536000000 / 1000),
      }),
    }
  );
  const data = await deleted.json();
  return data;
};
