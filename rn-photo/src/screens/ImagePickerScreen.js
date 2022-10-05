import { useNavigation } from '@react-navigation/native';
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import {
  Alert,
  FlatList,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import HeaderRight from '../components/HeaderRight';
import * as MediaLibrary from 'expo-media-library';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { PRIMARY } from '../colors';
import { BlurView } from 'expo-blur';

const initListInfo = { endCursor: '', hasNextPage: true };

const ImagePickerScreen = () => {
  const navigation = useNavigation();
  const [status, requestPermission] = MediaLibrary.usePermissions();

  useEffect(() => {
    (async () => {
      const { granted } = await requestPermission();
      if (!granted) {
        Alert.alert('사진 접근 권한', '사진 접근 권한이 필요합니다.', [
          {
            text: '확인',
            onPress: () => navigation.canGoBack() && navigation.goBack(),
          },
        ]);
      }
    })();
  }, [navigation, requestPermission]);

  const width = useWindowDimensions().width / 3;
  const [photos, setPhotos] = useState([]);
  const listInfo = useRef(initListInfo);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedPhotos, setSelectedPhotos] = useState([]);

  const getPhotos = useCallback(async () => {
    const options = {
      first: 30,
      sortBy: [MediaLibrary.SortBy.creationTime],
    };

    if (listInfo.current.endCursor) {
      options['after'] = listInfo.current.endCursor;
    }

    if (listInfo.current.hasNextPage) {
      const { assets, endCursor, hasNextPage } =
        await MediaLibrary.getAssetsAsync(options);
      setPhotos((prev) => (options.after ? [...prev, ...assets] : assets));
      listInfo.current = { endCursor, hasNextPage };
    }
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    listInfo.current = initListInfo;
    await getPhotos();
    setRefreshing(false);
  };

  useEffect(() => {
    if (status?.granted) {
      getPhotos();
    }
  }, [status?.granted, getPhotos]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRight onPress={() => {}} />,
    });
  });

  const isSelectedPhoto = (photo) => {
    return selectedPhotos.findIndex((item) => item.id === photo.id) > -1;
  };

  const togglePhoto = (photo) => {
    const isSelected = isSelectedPhoto(photo);
    setSelectedPhotos((prev) =>
      isSelected
        ? prev.filter((item) => item.id !== photo.id)
        : [...prev, photo]
    );
  };

  console.log(selectedPhotos);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={photos}
        renderItem={({ item }) => {
          const isSelected = isSelectedPhoto(item);

          return (
            <Pressable
              onPress={() => togglePhoto(item)}
              style={{ width, height: width }}
            >
              <Image source={{ uri: item.uri }} style={styles.photo} />
              {isSelected && (
                <BlurView
                  intensity={Platform.select({ ios: 10, android: 80 })}
                  style={[StyleSheet.absoluteFillObject, styles.checkIcon]}
                >
                  <MaterialCommunityIcons
                    name="check-circle"
                    size={40}
                    color={PRIMARY.DEFAULT}
                  />
                </BlurView>
              )}
            </Pressable>
          );
        }}
        numColumns={3}
        onEndReached={getPhotos}
        onEndReachedThreshold={0.3}
        onRefresh={onRefresh}
        refreshing={refreshing}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: { width: '100%' },
  photo: { width: '100%', height: '100%' },
  checkIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ImagePickerScreen;
