import { useState } from 'react';
import { useGetBook } from '../hooks/book';
import SearchInput from '../components/SearchInput';
import Books from '../components/Books';

export const Home = () => {
	const [text, setText] = useState('');
	const books = useGetBook(text);

	const onSetText = (value: string) => {
		setText(value);
	}

	return (
		<div>
			<SearchInput title="GOOGLE BOOKS" onSetText={onSetText} />
			{Boolean(books.length) && <Books books={books} />}
		</div>
	)
}
