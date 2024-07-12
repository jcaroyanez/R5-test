import { Book } from "../../definitions/models/book"
import { BookLink } from "../BookLink/BookLink";

interface BookStoreContentProps {
	books: Book[];
}

export const BookStoreContent = ({ books }: BookStoreContentProps) => {
	return (
		<div className="books">
			{books.map((item) => (<BookLink key={item.id} book={item} />))}
		</div>
	)
}