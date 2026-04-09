import React from 'react';
import { createRoot } from 'react-dom/client';
import Button from './Button.jsx';

export default function decorate(block) {
  const text = block.textContent.trim();

  block.innerHTML = ''; // clear existing content

  const root = createRoot(block);
  root.render(<Button text={text} />);
}