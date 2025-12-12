import { Clock, Users, TrendingUp, Star } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Manage Your Company by Exception",
      description: "REACH Merchandising Manager will, thus, enable you to 'manage your company by exception' directing the vast majority of the company's human attention to the 'out-of-the ordinary' business situations that present the most risk and greatest opportunity."
    },
    {
      icon: Users,
      title: "Impact on Revenues",
      description: "End-to-End integration of company data ensures all parties have the latest, most accurate information. This leads to cutting down on wastage, shortening time-to-market cycles for new collections and styles while accelerating your ROI (Return On Investment)."
    },
    {
      icon: TrendingUp,
      title: "Impact on Costs",
      description: "REACH Merchandising Manager helps you cut inventory volumes, eliminate production backlogs, and reduce the expense of working with partners, resulting in greater efficiency with dramatically lowered costs."
    },
    {
      icon: Star,
      title: "Impact on Strategy",
      description: "Rapid analysis of critical business data from all parts of your value chain enables fast and accurate planning of budgets and forecasts."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-primary">
          Benefits of REACH Merchandising Manager
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          REACH Merchandising Manager
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;