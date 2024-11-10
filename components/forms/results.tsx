import React, { useCallback, useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    View,
    Image,
    Text,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import FeatherIcon from 'react-native-vector-icons/Feather';

const places = [
    {
        id: 1,
        uri: 'https://image.cnbcfm.com/api/v1/image/107036059-1648140541349-gettyimages-1239350024-PWeaver-Target-01.jpeg?v=1654544436',
        name: 'Target',
        dates: '1 mile away',
        price: '8 of 10',
        rating: 4.45,
        reviews: 124,
    },
    {
        id: 2,
        uri: 'https://techcrunch.com/wp-content/uploads/2020/11/GettyImages-1211125072.jpg',
        name: 'Amazon',
        dates: '1.3 miles away',
        price: '10 of 10',
        rating: 4.3,
        reviews: 72,
    },
    {
        id: 3,
        uri: 'https://images.axios.com/wNfjwZKPM8n76Tcnnrhvk_zEzTg=/0x0:4000x2250/1600x900/2024/05/22/1716401770754.jpg',
        name: 'Walmart',
        dates: '6 miles away',
        price: '2 of 10',
        rating: 4.81,
        reviews: 409,
    },
];

export default function Example() {
    const [saved, setSaved] = useState<number[]>([2]);

    const handleSave = useCallback(
        (id: number) => {
            if (saved.includes(id)) {
                // remove listing id from the `saved` array
                setSaved(saved.filter(val => val !== id));
            } else {
                // add listing id to the `saved` array
                setSaved([...saved, id]);
            }
        },
        [saved],
    );

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f2f2f2' }}>
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <View style={styles.headerAction} />
                    <View style={styles.headerAction}>
                        <TouchableOpacity
                            onPress={() => {
                                // handle onPress
                            }}>
                            <FeatherIcon
                                color="#000"
                                name="sliders"
                                size={21}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.headerTitle}>
                    Your Results
                </Text>
            </View>
            <ScrollView contentContainerStyle={styles.content}>
                {places.map(
                    ({ id, uri, name, dates, price, rating, reviews }, index) => {
                        const isSaved = saved.includes(id);

                        return (
                            <TouchableOpacity
                                key={id}
                                onPress={() => {
                                    // handle onPress
                                }}>
                                <View style={styles.card}>
                                    <View style={styles.cardLikeWrapper}>
                                        <TouchableOpacity onPress={() => handleSave(id)}>
                                            <View style={styles.cardLike}>
                                                <FontAwesome
                                                    color={isSaved ? '#ea266d' : '#222'}
                                                    name="heart"
                                                    solid={isSaved}
                                                    size={20} />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.cardTop}>
                                        <Image
                                            alt=""
                                            resizeMode="cover"
                                            style={styles.cardImg}
                                            source={{ uri: uri }} />
                                    </View>
                                    <View style={styles.cardBody}>
                                        <View style={styles.cardHeader}>
                                            <Text style={styles.cardTitle}>{name}</Text>
                                            <FontAwesome
                                                color="#ea266d"
                                                name="star"
                                                solid={true}
                                                size={12}
                                                style={{ marginBottom: 2 }} />
                                            <Text style={styles.cardStars}>{rating}</Text>
                                            <Text style={{ color: '#595a63' }}>
                                                ({reviews} reviews)
                                            </Text>
                                        </View>

                                        <Text style={styles.cardDates}>{dates}</Text>

                                        <Text style={styles.cardPrice}>
                                            <Text style={{ fontWeight: '600' }}>
                                                {price}
                                                <Text style={{ color: 'gray' }}>
                                                    {' '}products found
                                                </Text>
                                            </Text>
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        );
                    },
                )}
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    content: {
        paddingTop: 8,
        paddingHorizontal: 16,
    },
    /** Header */
    header: {
        paddingHorizontal: 16,
        marginBottom: 12,
    },
    headerTop: {
        marginHorizontal: -6,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    headerAction: {
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 32,
        fontWeight: '700',
        color: '#1d1d1d',
    },
    /** Card */
    card: {
        position: 'relative',
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    },
    cardLikeWrapper: {
        position: 'absolute',
        zIndex: 1,
        top: 12,
        right: 12,
    },
    cardLike: {
        width: 40,
        height: 40,
        borderRadius: 9999,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardTop: {
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    cardImg: {
        width: '100%',
        height: 160,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    cardBody: {
        padding: 12,
    },
    cardHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '500',
        color: '#232425',
        marginRight: 'auto',
    },
    cardStars: {
        marginLeft: 2,
        marginRight: 4,
        fontSize: 15,
        fontWeight: '500',
        color: '#232425',
    },
    cardDates: {
        marginTop: 4,
        fontSize: 16,
        color: '#595a63',
    },
    cardPrice: {
        marginTop: 6,
        fontSize: 16,
        color: '#232425',
    },
});