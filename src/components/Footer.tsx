const Footer = () => {
  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-6">
          <p className="brand-text opacity-70 text-sm font-outfit">
            © 2025 <span className="font-light tracking-wide" style={{ fontFamily: 'Poppins, sans-serif' }}>Nuvori.</span> Built by caregivers and survivors.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="brand-text opacity-60 hover:opacity-80 transition-opacity font-outfit">
              Privacy Policy
            </a>
            <span className="brand-text opacity-40">·</span>
            <a href="#" className="brand-text opacity-60 hover:opacity-80 transition-opacity font-outfit">
              Terms
            </a>
            <span className="brand-text opacity-40">·</span>
            <a href="#" className="brand-text opacity-60 hover:opacity-80 transition-opacity font-outfit">
              Consumer Health Data
            </a>
            <span className="brand-text opacity-40">·</span>
            <a href="#" className="brand-text opacity-60 hover:opacity-80 transition-opacity font-outfit">
              EULA
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;