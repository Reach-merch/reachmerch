const WhoIsThisForSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-6"
          style={{ color: "#a61042" }}
        >
          Who is REACH Merchandising Manager for?
        </h2>

        <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
          REACH Merchandising Manager is built to support professionals and
          organizations involved in planning, managing, and optimizing the
          merchandising process in the apparel and fashion industry.
        </p>

        <ul className="max-w-3xl mx-auto space-y-3 text-lg text-muted-foreground list-disc list-inside">
          <li>Apparel and garment manufacturers</li>
          <li>Fashion brands and design houses</li>
          <li>Textile and leather product companies</li>
          <li>Retail chains in the apparel and fashion industry</li>
          <li>Exporters and wholesalers of clothing and fashion products</li>
          <li>Buying houses and sourcing agencies</li>
          <li>Merchandising teams and product managers</li>
          <li>Academic institutions and training centers in fashion and apparel sectors</li>
        </ul>
      </div>
    </section>
  );
};

export default WhoIsThisForSection;
