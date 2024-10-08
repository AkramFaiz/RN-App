import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { styles } from "./css/cardStyles";
interface MovieCardProps {
  id: 1;
  poster: string;
  title: string;
  runtime: string;
  language: string;
  actors: string;
  genre: string;
  plot: string;
  year: string;
}
const MovieCard: React.FC<MovieCardProps> = ({
  poster,
  title,
  actors,
  runtime,
  language,
  genre,
  plot,
  year,
  id,
}) => {
  return (
    <TouchableOpacity style={styles.cardContainer}>
      <Text style={{fontWeight: 'bold'}}>{id}  </Text>
      <Image source={{ uri: poster }} style={styles.image} />
      <View style={styles.contentContainer}>
        {/* {JSON.stringify(actors)} */}
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>Cast: {actors}</Text>
        <Text numberOfLines={3} style={styles.description}>
          {plot}
        </Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', gap: 10, marginTop: 10}}>
        <Text style={styles.details}>Duration: {runtime}</Text>
        <Text style={styles.details}>Language: {language}</Text>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', gap: 10}}>
        <Text style={styles.details}>Genre: {genre}</Text>
        <Text style={styles.details}>Year: {year}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
