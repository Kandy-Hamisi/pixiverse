import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { images } from "@/constants/images";
import MovieCard from "@/app/components/MovieCard";
import useFetch from "@/services/useFetch";
import { fetchMovies } from "@/services/api";
import { icons } from "@/constants/icons";
import Searchbar from "@/app/components/Searchbar";

const Search = () => {
  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "Spider Man" }));

  const [numColumns, setNumColumns] = useState<number>(3);

  return (
    <View className="flex-1 bg-primary">
      <Image
        source={images.bg}
        className="flex-1 absolure w-full z-0"
        resizeMode="cover"
      />

      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        className="px-5"
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "center",
          gap: 16,
          marginVertical: 16,
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <>
            <View className="w-full flex-row justify-center mt-20">
              <Image source={icons.logo} className="w-12 h-10" />
            </View>
            <View className="my-5">
              <Searchbar placeholder="Search movies..." />
            </View>
          </>
        }
      />
    </View>
  );
};
export default Search;
const styles = StyleSheet.create({});
