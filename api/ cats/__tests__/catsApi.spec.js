import catsApi from '../catsApi';
import httpClient from '../httpClient';
import breedsScenario from './breedsScenario';
import catsScenario from './catsScenario';

jest.mock('../httpClient');

describe('getBreedList tests', () => {
  it('should fetch the breeds correctly', async () => {
    httpClient.get.mockResolvedValue(breedsScenario.apiResponse());
    const response = await catsApi.getBreedList();
    expect(response).toEqual(breedsScenario.list());
  });
});

describe('getCatList tests', () => {
  it('should get the cat list using the pagination options correctly', async () => {
    httpClient.get.mockResolvedValue(catsScenario.apiResponse());
    const response = await catsApi.getCatList({ breedId: 'abys', page: 2, limit: 10 });
    expect(response).toEqual(catsScenario.list());
    expect(httpClient.get).toHaveBeenCalledWith(
      'images/search',
      {
        params: {
          breed_id: 'abys',
          page: 2,
          limit: 10,
          order: 'ASC',
        },
      },
    );
  });
});
