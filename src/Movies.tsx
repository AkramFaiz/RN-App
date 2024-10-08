import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import MovieCard from "./Card";
import { styles } from "./css/styles";
import { setMovies } from "./redux/actions/movieActions";
import { movieListLabels } from "./constants";
import { RootState } from "./redux/reducers/mainReducer";
import { Ionicons } from "@expo/vector-icons";

const MoviesScreen = () => {
  const dispatch = useDispatch();
  const moviesData = useSelector((state: RootState) => state.movies?.data);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [filteredData, setFilteredData] = useState(moviesData);

  // const [searchVisible, setSearchVisible] = useState<boolean>(false);

  useEffect(() => {
    setFilteredData(moviesData);
  }, [moviesData]);

  const handleSearchChange = (value: string) => {
    const updatedData = moviesData.filter((item: any) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredData(updatedData);
  };
  const fetchMovies = async () => {
    try {
      const response = await fetch("https://freetestapi.com/api/v1/movies");
      const data = await response.json();
      dispatch(setMovies(data));
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch movies. Please try again later.");
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, [dispatch]);

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.title}>Movies</Text>
        <TouchableOpacity onPress={() => setSearchVisible(!searchVisible)}>
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {loading && <Text>{movieListLabels.loading}</Text>}
      {/* Overlay Search Input */}
      {/* {searchVisible && (
        <View style={styles.searchOverlay}> */}
          <TextInput
            placeholder={movieListLabels.searchPlaceholder}
            onChangeText={handleSearchChange}
            style={styles.inputStyle}
          />
        {/* </View>
      )} */}
      {filteredData ? (
        <>
          <FlatList
            style={{ marginVertical: 20, paddingBottom: 20 }}
            data={filteredData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <MovieCard
                poster={item.poster}
                title={item.title}
                actors={item?.actors?.join(", ")}
                runtime={item.runtime}
                language={item.language}
                genre={item?.genre?.join(", ")}
                plot={item.plot}
                year={item.year}
                id={item.id}
              />
            )}
            contentContainerStyle={{ paddingBottom: 150 }}
          />
        </>
      ) : (
        error && <Text style={styles.error}>{error}</Text>
      )}
    </View>
  );
};

export default MoviesScreen;
