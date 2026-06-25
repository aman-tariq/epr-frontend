import React from 'react';
import StickyContactForm from './StickyContactForm';

const TyreBlog: React.FC = () => {
  return (
    <div className="wrap tyre-wrap has-sticky">
      <div className="page-body">
        <section className="hero">
          <div className="eyebrow">Tyre Recycling — Category</div>
          <h1>Tyre Recycling Guides, Approvals, Machinery and Market</h1>
          <p>Each tyre-related blog is now editable inside this component.</p>
        </section>

        <div className="meta">
          <span>By <span className="brand">EPR Nexuss Team</span></span>
          <span>2026</span>
        </div>

        <section className="card">
          <h2 className="section-title">Category placeholder</h2>
          <p className="section-sub">Edit `TyreBlog.tsx` to tailor tyre-specific blog pages.</p>
        </section>
      </div>
      <aside className="sticky-contact">
        <StickyContactForm />
      </aside>
    </div>
  );
};

export default TyreBlog;
