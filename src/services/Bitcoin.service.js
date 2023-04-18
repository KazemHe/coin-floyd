
import axios from 'axios'

export const BitcoinService = {
    getRate,
    getMarketPrice,
    getConfirmedTransactions
}


async function getRate(coins) {
    // const currency = 'USD'; // Set the currency to USD
    // const value = 1; // Set the value to 1
    const url = 'https://blockchain.info/tobtc?currency=USD&value=1'

    console.log('from bs', coins)
    try {
        const { data } = await axios.get(url)
        const rate = data * coins
        console.log('from bs', rate)
        return rate;
    } catch (error) {
        console.error(error)
    }
}


async function getMarketPrice() {
    try {
        const response = await axios.get('https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}


function getConfirmedTransactions() {

}