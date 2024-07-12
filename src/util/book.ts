import { BookReponse } from "../definitions/models/book"

export const mapBook = (books: BookReponse[]) => {
	return books?.map((item) => {
		return {
			id: item.id,
			title: item.volumeInfo.title,
			imgSrc: item.volumeInfo.imageLinks.thumbnail,
		}
	})
}

export const mapBookStore = (books: any[]) => {
	return books?.map((item) => {
		const id = `${item.key.replace('/works/', '')}-${item?.edition_key[0]}`;
		return {
			id,
			title: item?.title,
			imgSrc: `https://covers.openlibrary.org/b/OLID/${item?.edition_key[0]}-L.jpg`,
		}
	})
}