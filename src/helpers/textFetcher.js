import axios from 'axios';

async function textFetcher() {
    const result = await axios.get('https://baconipsum.com/api/?type=meat-and-filler');
    return result.data[0];
}

export default textFetcher;
