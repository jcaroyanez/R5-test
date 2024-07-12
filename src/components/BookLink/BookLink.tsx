import { Link } from 'react-router-dom';
import { Book as BookType } from '../../definitions/models/book';
import Book from '../Book';

interface BookLibkProps {
	book: BookType;
}

export const BookLink = ({ book }: BookLibkProps) => {
	return (
		<Link to={`/bookstore/${book.id}`}>
			<Book book={book} />
		</Link>
	)
}