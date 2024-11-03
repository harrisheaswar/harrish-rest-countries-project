import { toast } from "react-toastify";

export function fetchData(setCountries) {
  let url = import.meta.env.VITE_API_URL;

  const fetchCountries = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();

      // Filtering countries based on input and select filter

      setCountries(data);
    } catch (err) {
      toast.error("Error: Could not fetch the data");
    }
  };
  fetchCountries();
}
