const Events = () => {
  const events = [
    {
      title: "Journée Unique",
      date: "30 Septembre 2025 - 16h30 à 19h45",
      description:
        "Thème : « Une pluie de bénédictions ». Avec le Révérend Salomon Mpila, le Pasteur Patou Tabala et la Pasteure Charlotte Tabala.",
      icon: "✨",
    },
  ];

  return (
    <section id="events" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">
            Événement à Venir
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ne manquez pas notre grand programme spécial organisé à l’église.
          </p>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
            >
              <div className="flex items-center justify-center h-36 bg-gradient-to-r from-blue-500 to-indigo-600">
                <div className="w-20 h-20 flex items-center justify-center bg-white text-4xl rounded-full shadow-md">
                  {event.icon}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-gray-900 mb-1">
                  {event.title}
                </h3>
                <p className="text-blue-600 font-medium mb-3">{event.date}</p>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {event.description}
                </p>
                <button className="text-blue-700 font-medium hover:underline">
                  En savoir plus →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
