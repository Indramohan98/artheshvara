import Card from "./Card";

const services = [
  {
    title: "Influencer Strategy",
    description: "Lorem ipsum fore conimerse qnisil apel meisimsan conseqeuetnir exercis restimsan umer disaingess."
  },
  {
    title: "Creator Discovery",
    description: "Lorem ipsum foure elengre is apel exercise consequstur efeenontan misimsan bilangess."
  },
  {
    title: "Campaign Execution",
    description: "Feorem-ipsum fortur elengre es aper o ferconimet exerqusnor ex masimsan ferete alangasi."
  },
  {
    title: "Performance Reporting",
    description: "Lorem ipsum forer elengse es aperoruirecor ese minissr est excamasan derse eldncest."
  }
];

export default function Services() {
  return (
    <Card>
      <h2 className="text-xl md:text-2xl font-semibold mb-6 md:mb-8 text-white">
        Our Services
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
        {services.map((service) => (
          <div
            key={service.title}
            className="border border-gray-700/50 hover:border-yellow-500/30 rounded-lg p-5 md:p-6 transition-all duration-300 bg-black/40"
          >
            <h3 className="text-yellow-400 font-semibold text-base md:text-lg mb-2">
              {service.title}
            </h3>
            <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </Card>
  );
}