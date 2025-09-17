import CounterItem from './counter-item';

const Counters = ({ varient = 'light', counters = [] }) => {
   return (
      <div id="counter-section" className="counter-block flex flex-wrap gap-6">
         {counters.map((counter, idx) => (
            <CounterItem
               varient={varient}
               key={counter._id || idx}
               end={counter.counter_number}
               title={counter.counter_title}
               suffix={counter.counter_suffix}
            />
         ))}
      </div>
   );
};

export default Counters;
