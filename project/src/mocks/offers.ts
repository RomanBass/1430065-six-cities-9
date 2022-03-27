import { Offer } from '../types/offer';

export const offers: Offer[] = [
  {
    bedrooms: 1,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'City #1',
    },
    description: 'Nice City #1.',
    goods: [
      'Heating',
    ],
    host: {
      avatarUrl: 'img_avatar_1.jpg',
      id: 3,
      isPro: true,
      name: 'Angelina',
    },
    id: 1,
    images: [
      'img/off1_img1.png', 'img/off1_img2.png', 'img/off1_img3.png', 'img/off1_img4.png', 'img/off1_img5.png', 'img/off1_img6.png',
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8,
    },
    maxAdults: 1,
    previewImage: 'img_prev_1.jpg',
    price: 110,
    rating: 1.8,
    title: 'Beautiful & luxurious studio at great location',
    type: 'apartment',
  },

  {
    bedrooms: 2,
    city: {
      location: {
        latitude: 52.370216,
        longitude: 4.895168,
        zoom: 10,
      },
      name: 'Paris',
    },
    description: 'Picturesque that hides behind a a river by the unique lightness of Paris.',
    goods: [
      'Heating',
    ],
    host: {
      avatarUrl: 'img-1.png',
      id: 2,
      isPro: true,
      name: 'John',
    },
    id: 2,
    images: [
      'img/img-1.png',
    ],
    isFavorite: true,
    isPremium: false,
    location: {
      'latitude': 52.35514938496378,
      'longitude': 4.673877537499948,
      'zoom': 8,
    },
    maxAdults: 2,
    previewImage: 'img-1.png',
    price: 120,
    rating: 2.8,
    title: 'Luxurious studio at great location',
    type: 'apartment',
  },


];
