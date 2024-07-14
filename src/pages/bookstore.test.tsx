import { render, screen } from "@testing-library/react";
import { useGetBookStore } from "../hooks/book";
import { BookStore } from "./BookStore";
import { BrowserRouter } from "react-router-dom";

const books = [{
	id: '1',
	title: 'JavaScript - Aprende a programar en el lenguaje de la web',
	imgSrc: 'http://books.google.com/books/content?id=SqikDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
}];

jest.mock('../hooks/book');

describe('Home component test suite', () => {
	it('Should get data render correct books', async () => {
		(useGetBookStore as jest.Mock).mockReturnValue(books);
		render(
			<BrowserRouter>
				<BookStore />
			</BrowserRouter>
		);
		debugger
		const bookTitle = await screen.findByText(/javascript/i);
		const pageTitle = screen.getByText(/book store/i)

		expect(bookTitle).toBeInTheDocument();
		expect(pageTitle).toBeInTheDocument();
	})
});