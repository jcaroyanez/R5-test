import { useState } from 'react';
import SearchInput from '../components/SearchInput';
import { useGetBookStore } from '../hooks/book';

export const BookStore = () => {
	const [text, setText] = useState('');
	const useBookSote = useGetBookStore(text);
	console.log({ useBookSote });
	const onSetText = (value: string) => {
		setText(value);
	}
 
	return (
		<div>
				<SearchInput title='BOOK STORE' onSetText={onSetText} />
		</div>
	)
}