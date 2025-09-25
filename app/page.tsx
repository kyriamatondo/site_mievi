import Link from "next/link";

const Home = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyYTU3YzAiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

      <div className="relative container-custom section-padding">
        <div className="max-w-4xl mx-auto text-center">
          {/* Culte info */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-5 py-2 mb-6 mt-4">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium">
              Culte d'action de grace tous les dimanches à 09h30
            </span>
          </div>

          {/* Hero title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Bienvenue à l'{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
              Église MIEVI KISENSO 2
            </span>
          </h1>

          {/* Hero description */}
          <p className="text-xl md:text-2xl mb-10 opacity-90 leading-relaxed">
            Une communauté de foi, d'espérance et d'amour. Rejoignez-nous pour
            célébrer la parole de Dieu et grandir ensemble dans la grâce.
          </p>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/services"
              className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-blue-900 font-semibold rounded-xl px-8 py-3 shadow-lg hover:from-yellow-300 hover:to-yellow-400 transition-all text-lg"
            >
              Découvrir nos Services
            </Link>
            <Link
              href="/about"
              className="border border-white text-white font-semibold rounded-xl px-8 py-3 hover:bg-white hover:text-blue-900 transition-all text-lg"
            >
              Notre Histoire
            </Link>
          </div>

          {/* Quick info cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-10 border-t border-white/20">
            {[
              { value: "2022", label: "Année de fondation" },
              { value: "5+", label: "Services par semaine" },
              { value: "100%", label: "Accueil chaleureux" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="text-center bg-white/10 backdrop-blur-sm rounded-xl py-6 shadow-md hover:shadow-lg transition"
              >
                <div className="text-3xl font-bold text-yellow-300 mb-1">
                  {item.value}
                </div>
                <div className="text-sm opacity-80">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-12"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Home;
