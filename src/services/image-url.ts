import no_image_placeholder from "../assets/no_image_placeholder.avif";

const getCroppedImageUrl = (url: string) => {
  if (!url) return no_image_placeholder;
  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
