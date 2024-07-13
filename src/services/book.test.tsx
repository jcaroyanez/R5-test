import axios from "axios";
import { getBooks, getBookStore, getDetailBook } from "./book";

jest.mock('axios');

describe('Book hooks test suite', () => {
	it('Should call getBooks return correct data and call correct url', async () => {
		const books = [{
			id: '1',
			volumeInfo: {
				title: 'JavaScript - Aprende a programar en el lenguaje de la web',
				imageLinks: {
					thumbnail: 'http://books.google.com/books/content?id=SqikDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
				}
			}
		}];

		const expected = [{
			id: '1',
			title: 'JavaScript - Aprende a programar en el lenguaje de la web',
			imgSrc: 'http://books.google.com/books/content?id=SqikDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
		}];

		const dataFetch = { data: { items: books } };
		const spyAxiosGet = jest.spyOn(axios, 'get');
		(axios.get as jest.Mock).mockResolvedValue(dataFetch);
		const title = 'test';
		const response = await getBooks(title);

		expect(response).toEqual(expected);
		expect(spyAxiosGet).toHaveBeenCalledWith('https://www.googleapis.com/books/v1/volumes?q=test');
	});

	it('Should call getBookStore return correct data and call correct url', async () => {
		const books = [
			{
				key: '/works/12345',
				title: 'angular test',
				edition_key: ['0012345']
			}
		];

		const expected = [
			{
				id: '12345-0012345',
				title: 'angular test',
				imgSrc: `https://covers.openlibrary.org/b/OLID/0012345-L.jpg`
			}];

		const dataFetch = { data: { docs: books } };
		const spyAxiosGet = jest.spyOn(axios, 'get');
		(axios.get as jest.Mock).mockResolvedValue(dataFetch);
		const title = 'test2';
		const response = await getBookStore(title);

		expect(response).toEqual(expected);
		expect(spyAxiosGet).toHaveBeenCalledWith('https://openlibrary.org/search.json?q=test2&limit=10');
	});

	it('Should call getDetailBook return correct data and call correct url', async () => {
		const dataFetch = {
			title: 'test 3',
			description: 'description test'
		};
		const spyAxiosGet = jest.spyOn(axios, 'get');
		(axios.get as jest.Mock).mockResolvedValue(dataFetch);
		const id = '00010234';
		const response = await getDetailBook(id);

		expect(response).toEqual(dataFetch);
		expect(spyAxiosGet).toHaveBeenCalledWith('https://openlibrary.org/works/00010234.json');
	});
});