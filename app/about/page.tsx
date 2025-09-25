const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div>
            <h2 className="text-4xl font-serif font-bold text-gray-900 mb-6">
              À propos de nous
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              L’
              <span className="font-semibold">
                Église Mission Internationale d’Évangélisation et d’Intercession
                (MIEVI) – Kisenso 2
              </span>
              a été créée le{" "}
              <span className="font-semibold">10 octobre 2022</span> sous la
              direction du
              <span className="font-semibold">
                {" "}
                Révérend Dieu Selemani Baraka
              </span>
              . Elle constitue une extension dynamique de la grande communauté
              MIEVI, fondée et dirigée par le
              <span className="font-semibold"> Révérend Salomon Mpila</span>.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Située au cœur de <span className="font-semibold">Kisenso</span>,
              sur l’Avenue Tabora n°7, Quartier Kabila, notre église se veut un
              phare spirituel, une maison de prière et un lieu de transformation
              des vies à travers la Parole de Dieu, l’intercession et l’action
              communautaire.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Notre mission est de{" "}
              <span className="font-semibold">
                proclamer l’Évangile de Jésus-Christ
              </span>
              , d’édifier les croyants, de soutenir les familles et de
              contribuer au développement spirituel et social de notre
              communauté dans un esprit d’amour et de service.
            </p>

            {/* Cartes Vision / Valeurs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
                <h3 className="font-serif font-semibold text-blue-700 mb-2 text-lg">
                  Notre Vision
                </h3>
                <p className="text-gray-600 text-sm">
                  Bâtir une communauté forte dans la foi, unie dans l’amour et
                  engagée à être une lumière pour Kisenso et au-delà.
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
                <h3 className="font-serif font-semibold text-blue-700 mb-2 text-lg">
                  Nos Valeurs
                </h3>
                <p className="text-gray-600 text-sm">
                  Foi en Christ, intégrité, compassion, unité, excellence et
                  engagement dans le service.
                </p>
              </div>
            </div>
          </div>

          {/* Icône / Image */}
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-tr from-blue-100 to-blue-200 rounded-3xl h-80 md:h-96 w-full flex items-center justify-center shadow-lg">
              <span className="text-8xl text-blue-600 animate-bounce">⛪</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
