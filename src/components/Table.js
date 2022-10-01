// data
import userData from '../users.json';

// rSuite Table
import { Table as RTable, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';





export default function Table() {
  const users = userData;
  return (
    <RTable data={users}>
      <Column width={100} sortable fixed resizable>
        <HeaderCell>ID</HeaderCell>
        <Cell dataKey="id" />
      </Column>
      <Column width={100} sortable fixed resizable>
        <HeaderCell>First Name</HeaderCell>
        <Cell dataKey="first_name" />
      </Column>
    </RTable>
  );
}
