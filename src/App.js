import Heading from './components/Heading';
import Switch from './components/Switch';
import Card from './components/Card';
import { useState } from 'react';

function App() {
  const [isMonthly, setMonthly] = useState(false);

  function toggleType() {
    return setMonthly(!isMonthly);
  }

  return (
    <div className="container">
      <Heading title="Our Pricing" />
      <Switch active={isMonthly} onChange={toggleType} />

      <div className="cards-container">
        <Card name="Basic" price={isMonthly ? 19.99 : 199.99} isMonthly={isMonthly} index={1}>
          <ul>
            <li>500 GB Storage</li>
            <li> 2 Users Allowed</li>
            <li> Send up to 3 GB</li>
          </ul>
        </Card>
        <Card name="Professional" price={isMonthly ? 24.99 : 249.99} isMonthly={isMonthly} index={2}>
          <ul>
            <li>1 TB Storage</li>
            <li>5 Users Allowed</li>
            <li>Send up to 10 GB</li>
          </ul>
        </Card>
        <Card name="Master" price={isMonthly ? 39.99 : 399.99} isMonthly={isMonthly} index={3}>
          <ul>
            <li>2 TB Storage</li>
            <li>10 Users Allowed</li>
            <li>Send up to 20 GB</li>
          </ul>
        </Card>
      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>.
        Coded by <a href="https://github.com/pyc0d3r">pyc0d3r</a>.
      </div>
    </div>
  );
}

export default App;
