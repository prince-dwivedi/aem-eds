import React from 'react';
import { createRoot } from 'react-dom/client';
import Header from './Header.jsx';

export default function decorate(block) {
  const rows = [...block.children];
    console.log(rows,"rows");

  // First row → logo
  const logo = rows[0].children[0].textContent.trim();
console.log(logo,"logo");
  // Remaining rows → links
  const links = rows.slice(1).map(row =>
    row.children[1]?.textContent.trim()
  ).filter(Boolean);

  block.innerHTML = '';
console.log(links,"links");
  const root = createRoot(block);
  root.render(<Header logo={logo} links={links} />);
}