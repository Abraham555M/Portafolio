export const SocialIcon = ({ href, children, color = "green-500", size = "text-2xl" }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group p-3 rounded-full bg-white/10 hover:bg-${color} transition-all duration-300`}
  >
    <div className={`${size} text-white group-hover:text-white transition-all duration-300`}>
      {children}
    </div>
  </a>
);
