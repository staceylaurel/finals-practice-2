import { Query } from '../';


const find = (column: string, value: string | number) =>
  Query("SELECT * FROM users WHERE ?? = ?", [column, value]);

  const insert = (newUser: { name: string; email: string; password: string }) =>
  Query("INSERT INTO users SET ?", newUser);

export default {
find,
insert
}