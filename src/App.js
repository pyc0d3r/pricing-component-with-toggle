import Heading from './components/Heading';
import Switch from './components/Switch';
import Card from './components/Card';
import { useState } from 'react';

function App() {
  const [isMonthly, setMonthly] = useState(true);

  function toggleType() {
    return setMonthly(!isMonthly);
  }

  return (
    <div className="container">
      <Heading title="Our Pricing" />
      <Switch active={isMonthly} onChange={toggleType} />

      <div className="cards-container">
        <Card name="Basic" price={isMonthly ? 19.99 : 199.99} index={1}>
          <li>500 GB Storage</li>
          <li> 2 Users Allowed</li>
          <li> Send up to 3 GB</li>
        </Card>
        <Card name="Professional" price={isMonthly ? 24.99 : 249.99} index={2}>
          <li>1 TB Storage</li>
          <li>5 Users Allowed</li>
          <li>Send up to 10 GB</li>
        </Card>
        <Card name="Master" price={isMonthly ? 39.99 : 399.99} index={3}>
          <li>2 TB Storage</li>
          <li>10 Users Allowed 1</li>
          <li>Send up to 20 GB</li>
        </Card>
      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        Coded by <a href="#">C0d3r</a>.
      </div>
    </div>
  );
}

export default App;
