"use client"; // Add this line at the top

import Image from "next/image";
import { Phone, MapPin, Instagram, PawPrint, Truck, Menu, X } from 'lucide-react'; // Import icons, added X for close
import { useState } from 'react'; // Import useState

// Helper component for WhatsApp button
const WhatsAppButton = ({ text, className }: { text: string, className?: string }) => {
  const whatsappNumber = "5511987102030";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de agendar um serviço ou saber mais sobre a MEG PET Store.`;
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-500 hover:bg-green-600 transition-colors ${className}`}
    >
      {/* Updated WhatsApp Icon */}
      <Image src="/images/whatsapp-icon.png" alt="WhatsApp Icon" width={20} height={20} className="mr-2" />
      {text}
    </a>
  );
};

export default function Home() {
  const whatsappNumber = "5511987102030"; // Brazil country code + number without symbols
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá! Gostaria de agendar um serviço ou saber mais sobre a MEG PET Store.`;
  const mapAddress = "Rua Angaturama, 402 - Vila das Mercês, São Paulo - SP, 04164-010, Brasil";
  const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mapAddress)}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  // State for mobile menu toggle
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-12 lg:p-24 bg-meg-beige-100 text-meg-dark font-sans"> {/* Apply font-sans globally */}

      {/* Navigation Menu */}
      <nav className="w-full max-w-5xl flex justify-between items-center mb-8 bg-white p-4 rounded-md shadow-sm sticky top-4 z-40">
        {/* Placeholder for logo alignment - can be adjusted or removed */}
        <div className="w-12 h-12"></div> {/* Invisible spacer to help center menu items if needed */}

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#inicio" className="text-meg-dark hover:text-meg-pink transition-colors">Início</a>
          <a href="#historia" className="text-meg-dark hover:text-meg-pink transition-colors">Nossa História</a>
          <a href="#servicos" className="text-meg-dark hover:text-meg-pink transition-colors">Serviços</a>
          <a href="#contato" className="text-meg-dark hover:text-meg-pink transition-colors">Contato</a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-meg-dark z-50" // Ensure button is above mobile menu
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu (Overlay) */}
        {isMobileMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center space-y-6 md:hidden z-40">
            <a href="#inicio" className="text-2xl text-meg-dark hover:text-meg-pink transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Início</a>
            <a href="#historia" className="text-2xl text-meg-dark hover:text-meg-pink transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Nossa História</a>
            <a href="#servicos" className="text-2xl text-meg-dark hover:text-meg-pink transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Serviços</a>
            <a href="#contato" className="text-2xl text-meg-dark hover:text-meg-pink transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contato</a>
          </div>
        )}
      </nav>

      {/* Header Section - Logo centered */}
      <header className="w-full max-w-5xl items-center justify-center text-sm flex flex-col mb-12 pt-8" id="inicio"> {/* Adjusted padding top */}
         {/* Logo centered - Using transparent logo */}
         <Image
            src="/images/LogoMEg.png" // Updated path to transparent logo
            alt="MEG PET Store Logo"
            width={180} // Increased size for better visibility
            height={180}
            className="mb-6" // Removed shadow-sm, ensured no rounded/border classes
            priority // Prioritize loading the logo
          />
        {/* Apply font-heading to the main title */}
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-meg-pink-600 mb-2 text-center">MEG PET Store</h1>
        <p className="text-lg md:text-xl text-meg-dark/80 text-center mb-6">Aqui seu PET é nossa família!</p>
        {/* WhatsApp Button in Header */}
        <WhatsAppButton text="Fale Conosco Agora" />
      </header>

      {/* Story Section */}
      <section id="historia" className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-md mb-12 scroll-mt-20">
        {/* Apply font-heading to section title */}
        <h2 className="font-heading text-3xl font-semibold text-meg-pink-600 mb-6 text-center flex items-center justify-center"><PawPrint className="mr-2 h-7 w-7 text-meg-blue" /> A nossa História</h2>
        <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
          <p>
            Tudo começou em junho de 2002, quando a pequena Meg chegou à nossa família. Ela não era apenas uma cachorrinha — era puro amor em forma de patas. Foram 18 anos ao nosso lado, repletos de carinho, companhia, alegria e muitos lambeijos.
          </p>
          <p>
            Em agosto de 2020, Meg nos deixou… Mas seu amor foi tão grande, que nunca saiu de nossos corações. E foi com esse sentimento que, em março de 2021, ela “renasceu” como inspiração para algo muito especial: nasceu a MEG PET Store, uma homenagem viva à sua memória.
          </p>
          <p>
            Criamos a MEG PET com o propósito de cuidar de outros pets com o mesmo amor que cuidamos dela.
          </p>
          <p className="mt-6 text-center font-semibold text-meg-pink-600">
            Meg vive em cada atendimento, em cada ração entregue, em cada rabinho abanando de felicidade. 💖
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="w-full max-w-3xl bg-meg-blue/10 p-8 rounded-lg shadow-md mb-12 scroll-mt-20">
        {/* Apply font-heading to section title */}
        <h2 className="font-heading text-3xl font-semibold text-meg-pink-600 mb-6 text-center">Nossos Serviços</h2>
        <p className="text-lg text-center text-gray-700 mb-8">Aqui, você encontra tudo o que seu melhor amigo precisa:</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <ul className="list-none space-y-4 text-lg text-gray-700">
            <li className="flex items-start"><PawPrint className="mr-3 h-5 w-5 text-meg-pink mt-1 flex-shrink-0" /> <span><strong>Rações de qualidade:</strong> Temos as melhores marcas com entrega na região. Consulte-nos!</span></li>
            <li className="flex items-start"><PawPrint className="mr-3 h-5 w-5 text-meg-pink mt-1 flex-shrink-0" /> <span><strong>Acessórios:</strong> Brinquedos, caminhas, roupinhas, cobertores e muito mais.</span></li>
            <li className="flex items-start"><PawPrint className="mr-3 h-5 w-5 text-meg-pink mt-1 flex-shrink-0" /> <span><strong>Farmácia Veterinária:</strong> Vacinas, medicamentos e cuidados essenciais para a saúde do seu pet.</span></li>
            <li className="flex items-start"><PawPrint className="mr-3 h-5 w-5 text-meg-pink mt-1 flex-shrink-0" /> <span><strong>Banho e Tosa:</strong> Realizado com muito amor, paciência e segurança.</span></li>
            <li className="flex items-start"><Truck className="mr-3 h-5 w-5 text-meg-pink mt-1 flex-shrink-0" /> <span><strong>Leva e Trás:</strong> Oferecemos serviço de busca e entrega para banho e tosa na região. Comodidade para você e seu pet!</span></li>
          </ul>
          <div className="mt-4 md:mt-0">
            <Image
              src="/images/taxidog-meg-pet-store.jpeg"
              alt="Taxidog MEG PET Store - Serviço Leva e Trás"
              width={400} // Adjust as needed
              height={300} // Adjust as needed
              className="rounded-lg shadow-md mx-auto"
            />
            <p className="text-center text-sm text-gray-600 mt-2">Nosso Taxidog para o serviço de Leva e Trás!</p>
          </div>
        </div>
        {/* WhatsApp Button in Services */}
        <div className="text-center mt-10">
          <WhatsAppButton text="Agende Banho e Tosa" />
        </div>
        {/* Video Section */}
        <div id="video-secadora" className="mt-10 scroll-mt-20">
           {/* Apply font-heading to subsection title */}
           <h3 className="font-heading text-2xl font-semibold text-meg-pink-600 mb-4 text-center">🌟 Nosso Diferencial no Banho e Tosa!</h3>
           <p className="text-center text-gray-700 mb-4">Para os pets que não gostam de secador ou se irritam com o barulho, usamos um sistema de secagem mais tranquilo e acolhedor, sempre priorizando o bem-estar do seu bichinho.</p>
           <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-md">
             {/* Embedded Video */}
             <video
               src="/videos/maquina-secadora.mp4"
               width="100%"
               height="100%"
               autoPlay
               loop
               muted // Play without sound as requested
               playsInline // Important for iOS playback
               className="w-full h-full object-cover"
             >
               Seu navegador não suporta o elemento de vídeo.
             </video>
           </div>
        </div>
      </section>

      {/* Contact/Map Section */}
      <section id="contato" className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-md mb-12 scroll-mt-20">
        {/* Apply font-heading to section title */}
        <h2 className="font-heading text-3xl font-semibold text-meg-pink-600 mb-6 text-center">Contato e Localização</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg text-gray-700">
          {/* Contact Info */}
          <div className="space-y-4">
            {/* Apply font-heading to subsection title */}
            <h3 className="font-heading text-xl font-semibold text-meg-dark mb-3">Fale Conosco</h3>
            <p className="flex items-center">
              <MapPin className="mr-3 h-5 w-5 text-meg-pink flex-shrink-0" />
              Rua Angaturama, 402 – Vila das Mercês, SP
            </p>
            <p className="flex items-center">
              <Phone className="mr-3 h-5 w-5 text-meg-pink flex-shrink-0" />
              Fixo: <a href="tel:+551125392146" className="hover:underline">(11) 2539-2146</a>
            </p>
            <p className="flex items-center">
              {/* Updated WhatsApp Icon */}
              <Image src="/images/whatsapp-icon.png" alt="WhatsApp Icon" width={20} height={20} className="mr-3 flex-shrink-0" />
              WhatsApp: <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">(11) 98710-2030</a>
            </p>
            <p className="flex items-center">
              <Instagram className="mr-3 h-5 w-5 text-meg-pink flex-shrink-0" />
              <a href="https://www.instagram.com/meg_petstore" target="_blank" rel="noopener noreferrer" className="text-meg-pink-600 hover:underline">@meg_petstore</a>
            </p>
            <p className="mt-4">Venha nos visitar ou fale com a gente!</p>
            {/* WhatsApp Button in Contact */}
            <div className="mt-6">
              <WhatsAppButton text="Chamar no WhatsApp" />
            </div>
          </div>

          {/* Map */}
          <div>
             {/* Apply font-heading to subsection title */}
             <h3 className="font-heading text-xl font-semibold text-meg-dark mb-3">Onde Estamos</h3>
             <div className="w-full h-64 md:h-80 rounded-md overflow-hidden shadow-inner border border-gray-200">
                <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa mostrando a localização da MEG PET Store em ${mapAddress}`}
                ></iframe>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-5xl text-center text-sm text-meg-dark/60 mt-12 border-t border-meg-dark/20 pt-6">
        <p>&copy; {new Date().getFullYear()} MEG PET Store. Todos os direitos reservados.</p>
        <p className="mt-1">Desenvolvido com ❤️ por Fabiana Delgado @digidelga</p>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50 flex items-center justify-center" // Adjusted padding and added flex properties
        aria-label="Fale conosco pelo WhatsApp"
        title="Fale conosco pelo WhatsApp"
      >
        {/* Updated WhatsApp Icon */}
        <Image src="/images/whatsapp-icon.png" alt="WhatsApp Icon" width={28} height={28} />
      </a>

    </main>
  );
}

