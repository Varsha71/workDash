
import '/node_modules/react-grid-layout/css/styles.css'
import '/node_modules/react-resizable/css/styles.css'
import React, { useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
// icons navigation bar
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const ResponsiveGridLayout = WidthProvider(Responsive);

const DynamicResponsiveGridLayout = () => {
  const [layout, setLayout] = useState([
    { i: "a", x: 0, y: 0, w: 1, h: 2 },
    { i: "b", x: 1, y: 0, w: 1, h: 2 },
    { i: "c", x: 2, y: 0, w: 1, h: 2 }
  ]);
  const [count, setCount] = useState(3);

  const onAddPanel = () => {
    const newItem = { i: `item-${count}`, x: (layout.length) % 3 , y: Infinity, w: 1, h: 2 };
    setLayout([...layout, newItem]);
    setCount(count + 1);
  };

  const onRemovePanel = (id) => {
    const updatedLayout = layout.filter(item => item.i !== id);
    setLayout(updatedLayout);
  };

  return (
    <div >
      <nav className="navbar">
      <ul className="navbar">
        <li className="nav-item">
          <FontAwesomeIcon icon={faHome} style={{ marginRight: '5px' }} />
          Home
        </li>
        <li className="nav-item">
          <FontAwesomeIcon icon={faInfoCircle} style={{ marginRight: '5px' }} />
          About
        </li>
        <li className="nav-item">
          <FontAwesomeIcon icon={faUser} style={{ marginRight: '5px' }} />
          Profile
        </li>
      </ul>
    </nav>
      <div className="center container">
        <p>Add work panel</p>
        <button className="add-panel-btn" onClick={onAddPanel}>
          <span>+</span>
        </button>
      </div>
      <ResponsiveGridLayout
        className="layout"
        layouts={{ lg: layout }}
        breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
        cols={{ lg: 3, md: 2, sm: 1, xs: 1, xxs: 1 }}
        rowHeight={150}
      >
        {layout.map(item => (
          <div key={item.i} className="panel-box">
            <span>{item.i}</span>
            <button onClick={() => onRemovePanel(item.i)}>Remove</button>
          </div>
        ))}
      </ResponsiveGridLayout>
    </div>
  );
};

export default DynamicResponsiveGridLayout;