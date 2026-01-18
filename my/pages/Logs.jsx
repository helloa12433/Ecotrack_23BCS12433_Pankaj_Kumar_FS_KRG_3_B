import { logs } from "../data/logs";

const Logs = () => {
  const hii = logs.filter(log => log.carbon > 4);
  const a = logs.filter(log => log.carbon < 3);
  const b = logs.filter(log => log.carbon > 3);

  return (
    <div>
      <h2>Filtered Logs (carbon greater than 4)</h2>

      <ul>
        {hii.map(log => (
          <li key={log.id}>
            {log.activity} — {log.carbon} kg
          </li>
        ))}
      </ul>

      <ul>
        <h3>carbon lesser than 3</h3>
        {a.map(log => (
          <li key={log.id} style={{ color: "green" }}>
            {log.activity} — {log.carbon} kg
          </li>
        ))}
         <h3>carbon greater than 3</h3>
        {b.map(log => (
          <li key={log.id} style={{ color: "red" }}>
            {log.activity} — {log.carbon} kg
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Logs;


