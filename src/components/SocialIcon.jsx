// SocialIcon.jsx
import PropTypes from "prop-types";
import clsx from "clsx";

export const SocialIcon = ({ href, children, color = "hover:bg-pink-500", size = "text-2xl" }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        "group p-4 rounded-full bg-white transition-all duration-300",
        color
      )}
    >
      <div className={clsx(size, "text-black group-hover:text-white transition-all duration-300")}>
        {children}
      </div>
    </a>
  );
};

SocialIcon.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
};
