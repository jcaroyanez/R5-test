import { useCallback, useEffect, useState } from "react"
import { getBooks, getBookStore } from "../services/book";
import { Book } from "../definitions/models/book";

export const useGetBook = (title: string) => {
	const [books, setBooks] = useState<Book[]>([]);

	const getData = useCallback(() => {
		getBooks(title).then((response) => setBooks(response));
	}, [title]);

	useEffect(() => {
		getData();
	}, [title, getData]);

	return books;
}

export const useGetBookStore = (title: string) => {
	const [books, setBooks] = useState<Book[]>([]);

	const getData = useCallback(() => {
		getBookStore(title).then((response) => setBooks(response as Book[]));
	}, [title]);

	useEffect(() => {
		getData();
	}, [title, getData]);

	return books;
}