import { Header } from "@/components/header";

export default function AboutPage() {
  const socialLinks = [
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@dna.cpu',
      color: 'hover:text-[#00f2ea]',
      bgHover: 'hover:bg-[#00f2ea]/10',
      borderHover: 'hover:border-[#00f2ea]',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 sm:w-20 sm:h-20">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/dna.cpu/',
      color: 'hover:text-[#E1306C]',
      bgHover: 'hover:bg-[#E1306C]/10',
      borderHover: 'hover:border-[#E1306C]',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 sm:w-20 sm:h-20">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/dnacpu',
      color: 'hover:text-[#1877F2]',
      bgHover: 'hover:bg-[#1877F2]/10',
      borderHover: 'hover:border-[#1877F2]',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 sm:w-20 sm:h-20">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white grid-bg">
      <Header />

      <main className="container-custom py-12 sm:py-16 md:py-20 lg:py-24">
        
        {/* Page Header */}
        <div className="mb-16 sm:mb-20 md:mb-24 fade-in">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-3 h-3 bg-[#00ff88] rounded-full glow-accent" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight">
              About Us
            </h1>
          </div>
          <p className="text-gray-500 text-base sm:text-lg md:text-xl ml-7 uppercase tracking-[0.15em] font-light">
            Who We Are
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 mb-20 sm:mb-24 md:mb-32 stagger-children">
          
          {/* Mission Card */}
          <div className="group relative bg-[#0a0a0a] rounded-3xl p-8 sm:p-10 md:p-12 border border-white/10 hover:border-[#00ff88] transition-all duration-500 overflow-hidden">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ff88]/5 rounded-bl-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="w-2 h-2 bg-[#00ff88] rounded-full" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#00ff88]">
                  Mission
                </h2>
              </div>
              
              <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed font-light">
                Our mission is to cultivate a community of student nurses who find renewal, balance, 
                and creative fulfillment through dance. We are committed to fostering excellence, 
                discipline, and artistic integrity, while nurturing the emotional and mental 
                well-being of our members.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative bg-[#0a0a0a] rounded-3xl p-8 sm:p-10 md:p-12 border border-white/10 hover:border-[#00ff88] transition-all duration-500 overflow-hidden">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00ff88]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00ff88]/5 rounded-bl-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="w-2 h-2 bg-[#00ff88] rounded-full" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase tracking-tight text-[#00ff88]">
                  Vision
                </h2>
              </div>
              
              <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed font-light">
                We envision a community where dance serves as a universal language and a restorative 
                space, particularly for student nurses who navigate the rigors of academic and 
                clinical responsibilities. Our dance group aspires to be a guiding light, demonstrating 
                how artistic expression can inspire, unite, and provide solace.
              </p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20 sm:mb-24 md:mb-32" />

        {/* Connect With Us Section */}
        <div className="fade-in">
          <div className="mb-12 sm:mb-16">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-gray-600 rounded-full" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight">
                Connect With Us
              </h2>
            </div>
            <p className="text-gray-500 text-base sm:text-lg md:text-xl ml-6 font-light">
              Follow our journey on social media
            </p>
          </div>

          {/* Social Media Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative bg-[#0a0a0a] rounded-2xl p-8 sm:p-10 border border-white/10 ${social.borderHover} transition-all duration-500 hover:shadow-2xl transform hover:-translate-y-2 overflow-hidden`}
              >
                {/* Background glow */}
                <div className={`absolute inset-0 ${social.bgHover} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className={`mb-6 transition-all duration-500 text-gray-600 ${social.color} group-hover:scale-110`}
                       style={{filter: 'drop-shadow(0 0 20px currentColor)'}}>
                    {social.icon}
                  </div>
                  
                  <h3 className={`text-2xl sm:text-3xl font-bold uppercase tracking-tight text-white ${social.color} transition-colors duration-300 mb-2`}>
                    {social.name}
                  </h3>
                  
                  <p className="text-gray-500 text-sm uppercase tracking-[0.2em] font-light mb-4">
                    Follow Us
                  </p>
                  
                  {/* Arrow indicator */}
                  <div className="flex items-center gap-2 text-gray-600 group-hover:text-white transition-colors duration-300">
                    <span className="text-xs uppercase tracking-widest">Visit</span>
                    <svg 
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent my-20 sm:my-24 md:my-32" />

        {/* Organization Info */}
        <div className="text-center max-w-4xl mx-auto fade-in">
          <div className="bg-[#0a0a0a] rounded-3xl p-8 sm:p-10 md:p-12 border border-white/10">
            <h3 className="text-2xl sm:text-3xl font-bold uppercase mb-6 text-[#00ff88] tracking-tight">
              Dancing Nurses Association
            </h3>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed font-light mb-6">
              Central Philippine University - College of Nursing
            </p>
            <div className="inline-block">
              <p className="text-xl sm:text-2xl md:text-3xl font-light italic text-[#00ff88]">
                "One blood, One gene."
              </p>
            </div>
          </div>
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-8 sm:py-12 mt-20 sm:mt-28">
        <div className="container-custom">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} D.N.A.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-[1px] bg-[#00ff88]" />
              <p className="text-gray-600 text-xs uppercase tracking-widest">Dancing Nurses Association</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}