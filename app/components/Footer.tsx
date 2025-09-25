import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Logo et description */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden shadow-md">
                <img
                  src="/images/logo_eglise.jpg" // Chemin vers ton logo
                  alt="Logo Église Mievi 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-2xl font-serif font-semibold">
                Église Mievi 2
              </span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Une communauté de foi dédiée à servir Dieu et notre prochain à
              travers l'amour, l'espérance et la compassion.
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                href="https://web.facebook.com/people/%C3%89glise-Mievi-Kisenso-2/100064395832934/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-blue-600 transition"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@mievi.2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-black transition"
              >
                <span className="sr-only">TikTok</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 48 48"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M38.999 15.48a12.173 12.173 0 0 1-6.92-2.167v11.34a9.667 9.667 0 1 1-9.667-9.667V33.5a12.834 12.834 0 1 0 12.834-18.02z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">
              Liens Rapides
            </h3>
            <ul className="space-y-2">
              {["/", "/about", "/services", "/events", "/contact"].map(
                (link, idx) => (
                  <li key={idx}>
                    <Link
                      href={link}
                      className="text-gray-300 hover:text-white transition duration-300"
                    >
                      {link === "/"
                        ? "Accueil"
                        : link === "/about"
                        ? "À propos"
                        : link === "/services"
                        ? "Services"
                        : link === "/events"
                        ? "Événements"
                        : "Contact"}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Contact</h3>
            <address className="text-gray-300 not-italic space-y-1">
              <p>N°7 AV/Tabora, Q/Kabila, C/Kisenso, RDC</p>
              <p>+243 895 050 300</p>
              <p>mievikisenso@gmail.com</p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Église Mievi Kisenso 2. Tous droits
          réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
