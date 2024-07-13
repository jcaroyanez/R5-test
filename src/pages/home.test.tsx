import { render, screen } from "@testing-library/react";
import { Home } from "./Home";
import { useGetBook } from "../hooks/book";

const books = [{
	id: '1',
	title: 'JavaScript - Aprende a programar en el lenguaje de la web',
	imgSrc: 'http://books.google.com/books/content?id=SqikDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
}];

jest.mock('../hooks/book');

describe('Home component test suite', () => {
	it('Should get data render correct books', async () => {
		(useGetBook as jest.Mock).mockReturnValue(books);
		render(<Home />);
		const bookTitle = await screen.findByText(/javascript/i);
		const pageTitle = screen.getByText(/google books/i)

		expect(bookTitle).toBeInTheDocument();
		expect(pageTitle).toBeInTheDocument()
	})
});