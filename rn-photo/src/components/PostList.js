import { FlatList, StyleSheet, View } from 'react-native';
import PostItem from './PostItem';
import { GRAY } from '../colors';
import usePosts from '../hooks/usePosts';

const PostList = () => {
  const { data, fetchNextPage, refetch, refetching } = usePosts();

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <PostItem post={item} />}
      ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      onEndReached={fetchNextPage}
      onEndReachedThreshold={0.4}
      onRefresh={refetch}
      refreshing={refetching}
    />
  );
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: GRAY.LIGHT,
  },
});

export default PostList;
