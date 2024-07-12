import { create } from "zustand";

type State = {
	books: string[];
}

type Action = {
	mutateFavorite: (id: string) => void;
}

export const useBookStore = create<State & Action>((set, get) => ({
	books: [],
	mutateFavorite: (id: string) => {
		set((state) => {
			if(state.books.find((idBook) => idBook === id )) {
				return {
					books: state.books.filter((idBook) => idBook !== id)
				}
			}

			return {
				books: [...state.books, id]
			}
		})
	}
}))