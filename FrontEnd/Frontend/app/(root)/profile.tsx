import { StyleSheet, Text, View, Image, FlatList,TouchableOpacity } from 'react-native';
import React from 'react';
import {useRouter} from "expo-router"
import { SafeAreaView } from 'react-native-safe-area-context';
import { reviews } from '@/constants/mockdata';

export default function Profile() {
  const user = {
    profileImage: require('@/assets/images/profile.png'),
    reviews: 25,
    views: 120,
    plan: 'Premium',
    username: 'Laurence Ashraf',
  };

  const userReviews = reviews.filter(review => review.username === user.username);
  const router = useRouter();

  const renderItem = ({ item }: { item: any }) => (
    <View style={styles.reviewItem}>
      <View style={styles.sideHeader}>
        <Image source={user.profileImage} style={styles.sideProfileImage} />
        <View style={styles.sideUserRate}>
          <Text style={styles.sideUserName}>{item.username}</Text>
          <Text style={styles.rating}>Rating: {item.rating} / 5</Text>
        </View>
      </View>
      <Text style={styles.reviewText}>{item.review}</Text>
      <TouchableOpacity onPress={() => router.push({ pathname: './book', params: { book: JSON.stringify(item) } })}>
        <Image source={item.cover} style={styles.bookCover} />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={
          <View style={styles.header}>
            <Image source={user.profileImage} style={styles.profileImage} />
            <Text style={styles.userName}>{user.username}</Text>
            <Text style={styles.plan}>{user.plan}</Text>
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>{user.reviews}</Text>
                <Text style={styles.statLabel}>Reviews</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>{user.views}</Text>
                <Text style={styles.statLabel}>Views</Text>
              </View>
            </View>
          </View>
        }
        data={userReviews}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
  },
  header: {
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F0F2F5',
    marginBottom: 8,
  },
  sideHeader: {
    padding: 16,
    backgroundColor: '#F0F2F5',
    marginBottom: 8,
    flexDirection: 'row',
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  sideProfileImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
    marginBottom: 10,
  },
  userName: {
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    color: '#705C53',
    marginBottom: 8,
  },
  sideUserName: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#705C53',
    marginBottom: 8,
  },
  sideUserRate: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: '#8B8B8B',
    marginBottom: 8,
    flexDirection: 'column',
    marginLeft: 5,
  },
  plan: {
    fontSize: 18,
    fontFamily: 'Poppins-Regular',
    color: '#8B8B8B',
    marginBottom: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontFamily: 'Poppins-Bold',
    color: '#705C53',
  },
  statLabel: {
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#8B8B8B',
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  userInfo: {
    flex: 1,
    marginLeft: 16,
  },
  reviewItem: {
    flexDirection: 'column',
    backgroundColor: '#F0F2F5',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  bookCover: {
    width: '100%',
    height: 200,
    marginTop: 2,
    borderRadius: 8,
    marginBottom: 8,
  },
  reviewContent: {
    flex: 1,
  },
  reviewText: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#705C53',
    marginBottom: 4,
    marginTop: -20,
    marginLeft: 9,
  },
  rating: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    color: '#8B8B8B',
    marginTop: -5,
  },
});

