import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3/";

const options = {
  params: { language: "en-US", api_key: "1f2711abbcf574742d8119f2f67d62b8" },
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjI3MTFhYmJjZjU3NDc0MmQ4MTE5ZjJmNjdkNjJiOCIsInN1YiI6IjY2MWU1ZDJmYTM5ZDBiMDE2MzU1MDJjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.l82-7MguEYg0ZR6OZoCYnwkplCm2_pPIqh-ENVETwHM",
  },
};

export const fetchTrendingMovies = async () => {
  const response = await axios.get("trending/movie/day", options);

  return response.data;
};
