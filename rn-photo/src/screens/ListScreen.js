import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getPosts } from '../api/post';
import PostItem from '../components/PostItem';

const post = {
  createdTs: 1665439322868,
  id: 'uH2VK7PmtdP4J3UigkzH',
  location: '대한민국 서울',
  photos: [
    'https://firebasestorage.googleapis.com/v0/b/rn-photo-b092b.appspot.com/o/J6Jqs5XMg9g3Hj4AMGK7MIvruSa2%2FIMG_0032.JPEG?alt=media&token=695d4bce-4ea4-4fb4-8864-ca3a0c86a9ab',
    'https://firebasestorage.googleapis.com/v0/b/rn-photo-b092b.appspot.com/o/J6Jqs5XMg9g3Hj4AMGK7MIvruSa2%2FIMG_0022.JPEG?alt=media&token=6a4136b7-ca41-4a13-8b74-005af3f57831',
    'https://firebasestorage.googleapis.com/v0/b/rn-photo-b092b.appspot.com/o/J6Jqs5XMg9g3Hj4AMGK7MIvruSa2%2FIMG_0015.JPEG?alt=media&token=4658ff76-c5b4-4e6c-a63b-95a0f6957b71',
  ],
  text: '서울 beomjun',
  user: {
    displayName: 'RNtest2',
    photoURL:
      'https://firebasestorage.googleapis.com/v0/b/rn-photo-b092b.appspot.com/o/4ILU0c8Ao2ZBz9LNTxtDFTxm0jq1%2FIMG_0039.JPEG?alt=media&token=4f7e59a8-c2c7-4f00-8758-d95d7ee7b4e5',
    uid: 'J6Jqs5XMg9g3Hj4AMGK7MIvruSa2',
  },
};

const ListScreen = () => {
  useEffect(() => {
    (async () => {
      const list = await getPosts();
      console.log(list, list.length);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <PostItem post={post} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
});

export default ListScreen;
