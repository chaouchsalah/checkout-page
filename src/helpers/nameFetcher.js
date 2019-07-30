import axios from 'axios';

async function nameFetcher() {
    const result = await axios.get('https://uinames.com/api/');
    const {name,surname} = result.data;
    return `${name} ${surname}`;
}

export default nameFetcher;
