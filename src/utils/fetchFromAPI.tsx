import axios from 'axios';

const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    params: { maxResults:'50' },
    headers: {
      'X-RapidAPI-Key': 'a3a0f037eemshd7044f96410fa2cp1f9a4ejsnc1c0e5a64261',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};

export const fetchFromAPI = async (url: string) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
}