import React from 'react'
import './book.css';
import { Book as Booktype} from '../../definitions/models/book';

export interface BookProps {
	book: Booktype;
}

const Book = ({ book }: BookProps) => {
	const { title, imgSrc} = book;

	return (
		<div className="book">
			<div className="book-image">
				{imgSrc ? <img
					alt={title}
					src={imgSrc} />
					: <img src="https://picsum.photos/200/260" alt="default" />}
			</div>
			<p className="book-title">{title}</p>
		</div>
	)
}

export default Book
