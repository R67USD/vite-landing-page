const Logo = ({ className }: { className: string }) => {
  return (
    <div className={` ${className}`}>
      <img
        className="max-h-auto max-w-auto"
        src="/images/logo.png"
        alt="Logo"
      />
    </div>
  );
};

export default Logo;
