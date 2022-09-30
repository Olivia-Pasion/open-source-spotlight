// data
import userData from '../users.json';

// reChart
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

export default function Chart() {
  const users = userData;

  return (
    <div>
      <h1 className="text-center font-extrabold">User IDs do indeed... increase</h1>
      <AreaChart
        width={500}
        height={400}
        data={users}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="id" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="id" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  );
}
