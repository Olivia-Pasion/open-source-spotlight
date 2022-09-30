// data
import userData from './../users.json';

// reChart
import { BarChart, Bar, ResponsiveContainer } from 'recharts';

export default function Chart() {
  const users = userData;
  
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart width={150} height={40} data={users}>
        <Bar dataKey="favorite_color" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
}
