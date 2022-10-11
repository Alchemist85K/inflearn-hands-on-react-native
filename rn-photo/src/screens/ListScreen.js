import { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getPosts } from '../api/post';
import { WHITE } from '../colors';
import PostList from '../components/PostList';

const ListScreen = () => {
  const { top } = useSafeAreaInsets();

  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const lastRef = useRef(null);
  const isLoadingRef = useRef(false);

  const getList = async () => {
    if (!isLoadingRef.current) {
      isLoadingRef.current = true;
      const { list, last } = await getPosts({ after: lastRef.current });
      setData((prev) => (lastRef.current ? [...prev, ...list] : list));
      lastRef.current = last;
      isLoadingRef.current = false;
    }
  };

  const refetch = async () => {
    setRefreshing(true);
    lastRef.current = null;
    await getList();
    setRefreshing(false);
  };

  useEffect(() => {
    getList();
  }, []);

  console.log(data.length);

  return (
    <View style={[styles.container, { paddingTop: top }]}>
      <PostList
        data={data}
        fetchNextPage={getList}
        refreshing={refreshing}
        refetch={refetch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
});

export default ListScreen;
