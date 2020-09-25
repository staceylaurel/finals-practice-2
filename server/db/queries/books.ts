import { Query } from "../index";

const all = () => Query('SELECT books.*, categories.name FROM books JOIN categories ON categories.id = books.categoryid');

const one = (id: number) => Query('SELECT books.*, categories.name FROM books JOIN categories ON categories.id = books.categoryid WHERE books.id = ?', [id]);

const insert = (newBook: {title: string, author: string, price: string, name: string}) => Query('INSERT INTO books SET ?', newBook);

const update = (editedBook: {categoryid: number, title?: string, author?: string, price?: string, name?: string}, id: number) => Query('UPDATE books SET ? WHERE id = ?', [editedBook, id]);

const destroy = (id: number) => Query('DELETE FROM books WHERE id = ?', [id]);


export default {
    all, 
    one,
    insert,
    update,
    destroy
}