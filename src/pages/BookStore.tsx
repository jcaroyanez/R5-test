import { useState } from 'react';
import SearchInput from '../components/SearchInput';
import { useGetBookStore } from '../hooks/book';
import { BookStoreContent } from '../components/BookStoreContent/BookStoreContent';

export const BookStore = () => {
	const [text, setText] = useState('');
	const books = useGetBookStore(text);

	const onSetText = (value: string) => {
		setText(value);
	}
 
	return (
		<div>
				<SearchInput title='BOOK STORE' onSetText={onSetText} />
				<BookStoreContent books={books}/>
		</div>
	)
}