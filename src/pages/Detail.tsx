import { useParams } from "react-router";
import { useGetDetail } from "../hooks/book";
import { DetailBook } from "../components/DetailBook/DetailBook";

export const Detail = () => {
	const { id } = useParams();
	const [idSearch, idImg ] = id?.split('-')!;
	const book = useGetDetail(idSearch!);

	return (
		 book ? <DetailBook book={book} idImg={idImg!} /> : <p>Cargando informacion...</p>
	)
}