
import React from 'react';
import { CheckCircle2, Truck, BadgePercent, ShieldCheck } from 'lucide-react';

const benefits = [
  {
    id: 1,
    title: 'Quality Guaranteed',
    description: 'All parts are inspected and tested for quality assurance before listing.',
    icon: <CheckCircle2 className="h-10 w-10 text-blue-600" />
  },
  {
    id: 2,
    title: 'Fast Shipping',
    description: 'Quick and reliable shipping options available across the country.',
    icon: <Truck className="h-10 w-10 text-blue-600" />
  },
  {
    id: 3,
    title: 'Best Prices',
    description: 'Save up to 70% compared to new OEM parts with our second-hand options.',
    icon: <BadgePercent className="h-10 w-10 text-blue-600" />
  },
  {
    id: 4,
    title: 'Secure Transactions',
    description: 'Shop with confidence with our secure payment and trusted seller verification.',
    icon: <ShieldCheck className="h-10 w-10 text-blue-600" />
  }
];

const BenefitSection = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose CarPartopia?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The most trusted marketplace for second-hand car parts with thousands of satisfied customers.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
