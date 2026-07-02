import React from "react";
import { Link } from "react-router-dom";

const BuyEwasteTradingBlog = () => {
  return (
    <div className="prose prose-slate max-w-none px-4 py-6 md:px-8">
      <h2 className="text-2xl font-bold text-foreground mb-4">Buy E-Waste: Credit Trading & Marketplace Guide</h2>
      <p className="text-muted-foreground leading-8">
        Our team is currently putting together a full, detailed article on{" "}
        buying e-waste scrap credit trading & marketplace guide. It will cover the practical steps,
        documentation, and compliance requirements you need to know.
      </p>
      <p className="text-muted-foreground leading-8 mt-4">
        This page is live and will update automatically as soon as the article is
        published — no need to bookmark a different link. In the meantime,{" "}
        <Link to="/contact" className="text-secondary font-semibold hover:underline">
          get in touch with our team
        </Link>{" "}
        for immediate guidance on this topic.
      </p>
    </div>
  );
};

export default BuyEwasteTradingBlog;
