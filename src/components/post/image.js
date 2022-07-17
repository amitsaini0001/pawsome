import PropTypes from "prop-types";

export default function Image({ src, caption, type }) {
  if (type === "image") {
    return <img src={src} alt={caption} />;
  }
  if (type === "video") {
    return (
      <video className="w-full" muted autoPlay alt="video here" loop>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }
  return <></>;
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
