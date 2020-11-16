import httpClient from './httpClient';

const breedsEndpoint = 'breeds';
const searchEndpoint = 'images/search';

export default {
  async getBreedList() {
    const { data } = await httpClient.get(breedsEndpoint);
    return data;
  },

  async getCatList({
    breedId, page, limit, order = 'ASC',
  }) {
    const { data } = await httpClient.get(
      searchEndpoint,
      {
        params: {
          page,
          limit,
          order,
          breed_id: breedId,
        },
      },
    );
    return data;
  },
};
