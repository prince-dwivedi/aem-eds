import React, { useState } from 'react';

export default function Accordion({ items }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div>
      {items.map((item, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <div
            onClick={() => toggle(index)}
            style={{
              cursor: 'pointer',
              background: '#eee',
              padding: '10px',
              fontWeight: 'bold'
            }}
          >
            {item.title}
          </div>

          {activeIndex === index && (
            <div style={{ padding: '10px', border: '1px solid #ddd' }}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}