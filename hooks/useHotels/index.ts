import { useCallback, useMemo, useState } from "react";
import { Hotel } from "~types/hotels";
import { debounce } from "~utils/debounce";

export const useHotels = (hotels: Hotel[]) => {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const handleDebouncedSearch = useCallback(
    debounce((value: string) => {
      setDebouncedSearch(value);
    }, 300),
    []
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);
    handleDebouncedSearch(value);
  };

  const filteredHotels = useMemo(() => {
    if (!hotels) return [];
    return hotels.filter(
      (hotel) =>
        hotel.name.includes(debouncedSearch) ||
        hotel.description.includes(debouncedSearch)
    );
  }, [hotels, debouncedSearch]);

  return { filteredHotels, handleInputChange, search };
};
