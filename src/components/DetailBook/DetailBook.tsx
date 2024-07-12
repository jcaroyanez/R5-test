import { BookDetail, DescriptionObject } from '../../definitions/models/book';
import { HeartIcon } from '../../icons/HeartIcon';
import { useBookStore } from '../../store/book';
import './DetailBook.css';

interface DetailBookProps {
	book: BookDetail;
	idImg: string;
}

export const DetailBook = ({ book, idImg }: DetailBookProps) => {
	const description = (book.description as DescriptionObject)?.value || book.description;
	const [books, mutateFavorite] = useBookStore((state) => [state.books, state.mutateFavorite]);

	const findStoredata = () => {
		return books.find((idStore) => idStore === idImg);
	}

	const handleSetFavotite = () => {
		mutateFavorite(idImg);
	}

	return (
		<div className='content-detail'>
			<div className='head-detail'>
				<h1 className='title-detail'>{book.title}</h1>
				<div className='content-icon-detail' onClick={handleSetFavotite}>
					<HeartIcon width={30} height={30} fill={findStoredata() ? '#E4003A' : '#000'} />
				</div>
			</div>
			<div className='content-info-detail'>
				<div className='img-detail'>
					<img
						alt={book.title}
						src={`https://covers.openlibrary.org/b/OLID/${idImg}-L.jpg`} />
				</div>
				<p className='description-detail' dangerouslySetInnerHTML={{ __html: description as string}} />
			</div>
		</div>
	)
}