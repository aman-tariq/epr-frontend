import { blogPosts } from '../src/lib/blog';

// Use a valid category from your BlogPost type
const category = 'e-waste'; // or 'epr-plastic', 'epr-battery', 'epr-tyre', 'solar-panel', 'rvsf', 'sops-kpis-checklists'

const total = blogPosts.length;
const byCategory = blogPosts.filter(p => p.category === category).length;

console.log('Total posts:', total);
console.log('Posts in category', category + ':', byCategory);

console.log('\nSample slugs in category:');
console.log(
  blogPosts
    .filter(p => p.category === category)
    .map(p => p.slug)
    .slice(0, 20)
);