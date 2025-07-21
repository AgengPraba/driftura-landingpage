import {
  Car,
  CreditCard,
  Repeat,
  Wrench
} from 'lucide-react';

const services = [
  {
    title: 'Test Drive',
    description: 'Schedule a free test drive for any car in our showroom.',
    icon: <Car className="w-10 h-10 text-cyan-400 mb-4" />
  },
  {
    title: 'Financing',
    description: 'We offer flexible financing and leasing plans.',
    icon: <CreditCard className="w-10 h-10 text-pink-400 mb-4" />
  },
  {
    title: 'Trade-In',
    description: 'Trade in your old vehicle for the best market price.',
    icon: <Repeat className="w-10 h-10 text-yellow-300 mb-4" />
  },
  {
    title: 'Maintenance',
    description: 'Certified maintenance and repair services for all models.',
    icon: <Wrench className="w-10 h-10 text-green-400 mb-4" />
  },
];

export default function Services() {
  return (
    <div className="container flex flex-col justify-center items-center mx-auto min-h-screen text-white py-16 px-8">
      <h2 className="text-4xl font-extrabold text-center mb-12 text-white neon-text">OUR SERVICES</h2>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-16">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#0f0f1f] rounded-xl p-6 border border-cyan-400 shadow-neon hover:scale-105 transition-transform duration-300"
          >
            <div className="flex flex-col items-center text-center">
              {service.icon}
              <h3 className="text-2xl font-bold mb-2 neon-text">{service.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
