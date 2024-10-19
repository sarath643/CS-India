const Footer = () => {
  return (
    <footer className='p-3 text-center text-white bg-opacity-75 bg-accent/40 bg-gradient-to-b from-purple-300 to-blue-50'>
      <div className='flex items-center justify-center gap-2 text-sm text-black dark:text-white'>
        <p>Copyright ©{new Date().getFullYear()}. All rights reserved.</p>
        {/* <img src="/logo.png" alt="logo" className="w-6 h-6"/> */}
      </div>
    </footer>
  );
};

export default Footer;
