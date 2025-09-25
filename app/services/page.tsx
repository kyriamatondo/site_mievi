"use client";

const ChurchSchedule = () => {
  const programs = [
    {
      title: "Culte matinal",
      day: "Lundi à Vendredi",
      time: "5h30 - 6h30",
      description:
        "Un moment de prière et d édification pour bien commencer la journée.",
      icon: "🌅",
      color: "from-yellow-400 to-yellow-500",
    },
    {
      title: "Culte d édification",
      day: "Mardi",
      time: "16h30 - 19h45",
      description:
        "Un temps de louange, d&apos;enseignement et d encouragement spirituel.",
      icon: "⛪",
      color: "from-blue-400 to-blue-500",
    },
    {
      title: "École de délivrance",
      day: "Jeudi",
      time: "16h30 - 19h45",
      description:
        "Un temps spécial pour prier, libérer et recevoir la délivrance en Dieu.",
      icon: "🕊️",
      color: "from-purple-400 to-purple-500",
    },
    {
      title: "Culte d action de grâce",
      day: "Dimanche",
      time: "9h30 - 12h30",
      description:
        "Un temps de louange, reconnaissance et communion fraternelle.",
      icon: "🙏",
      color: "from-green-400 to-green-500",
    },
  ];

  return (
    <section id="schedule" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Programmes de l Église
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez nos différents cultes et activités hebdomadaires pour
            grandir dans la foi.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div
                className={`h-40 flex items-center justify-center text-6xl bg-gradient-to-br ${program.color}`}
              >
                {program.icon}
              </div>
              <div className="p-6">
                <h3 className="font-serif font-semibold text-xl text-gray-900 mb-2">
                  {program.title}
                </h3>
                <p className="text-gray-700 font-medium mb-1">{program.day}</p>
                <p className="text-gray-700 font-medium mb-3">{program.time}</p>
                <p className="text-gray-600">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChurchSchedule;
