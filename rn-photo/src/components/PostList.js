import { FlatList, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import PostItem from './PostItem';
import { GRAY } from '../colors';

const PostList = ({ data, fetchNextPage, refreshing, refetch }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <PostItem post={item} />}
      ItemSeparatorComponent={() => <View style={styles.separator}></View>}
      onEndReached={fetchNextPage}
      onEndReachedThreshold={0.4}
      onRefresh={refetch}
      refreshing={refreshing}
    />
  );
};

PostList.propTypes = {
  data: PropTypes.array.isRequired,
  fetchNextPage: PropTypes.func,
  refetch: PropTypes.func,
  refreshing: PropTypes.bool,
};

const styles = StyleSheet.create({
  separator: {
    marginVertical: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: GRAY.LIGHT,
  },
});

export default PostList;
