import React from 'react';
import { createRoot } from 'react-dom/client';
import Accordion from './Accordion.jsx';

export default function decorate(block) {
  const rows = [...block.children];

  const items = [];

  for (let i = 0; i < rows.length; i += 2) {
    const title = rows[i]?.textContent || '';
    const content = rows[i + 1]?.textContent || '';

    if (title && content) {
      items.push({ title, content });
    }
  }

  block.innerHTML = '';

  const root = createRoot(block);
  root.render(<Accordion items={items} />);
}