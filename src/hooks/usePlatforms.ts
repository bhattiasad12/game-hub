import platforms from "../data/platforms";

// interface Platform {
//   id: number;
//   name: string;
//   slug: string;
// }

// same thing as genres shipped it as static data to reduce load times
// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");

const usePlatforms = () => ({ data: platforms, isLoading: false, error: null });

export default usePlatforms;
