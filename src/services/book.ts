import axios from "axios";
import { mapBook, mapBookStore } from "../util/book";


export const getBooks = async (title: string)  => {
	const q = title ? title : 'javascript';
	const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${q}`);
	return mapBook(response.data?.items);
}

export const getBookStore = async (title: string) => {
	const q = title ? title : 'javascript';
	const response = await axios.get(`https://openlibrary.org/search.json?q=${q}&limit=10`);
	return mapBookStore(response.data?.docs);
}