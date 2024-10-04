import genres from "../data/genres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

// changed fetching the genres again and again and stored it on the app
// const useGenres = () => useData<Genre>("/genres");

const useGenres = () => ({ data: genres, isLoading: false, error: null });

export default useGenres;
