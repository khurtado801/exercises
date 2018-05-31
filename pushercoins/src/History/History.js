import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import './History.css';

class History extends Component {
    constructor () {
        super();
        this.state = {
            todayprice: {},
            yesterdayprice: {},
            twodaysprice: {},
            threedayprice: {},
            fourdayprice: {}
        };
    }

    // This function gets the ETH price for a specific timestamp/date. The date is passed in as an argument
    getETHPrices = (date) => {
        return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=ETH&tsyms=USD&ts=' + date);
    };

    // This function gets the BTC price for a specific timestamp/date. The date is passed in as an argument
    getBTCPrices = (date) => {
        return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=BTC&tsyms=USD&ts=' + date);
    };

    // This function gets the LTC price for a specific timestamp/date. The date is passed in as an argument
    getLTCPrices = (date) => {
        return axios.get('https://min-api.cryptocompare.com/data/pricehistorical?fsym=LTC&tsyms=USD&ts=' + date);
    }
    // This function gets the prices for the current date
    getTodayPrice = () => {
        let t = moment().unix();
        // axios.all is used to make concurrent API requests. These requests were the functions we first created and they accept an argument of the date required
        axios.all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
            .then(axios.spread((eth, btc, ltc) => {
                let f = {
                    date: moment.unix(t).format('MMMM Do YYYY'),
                    eth: eth.data.ETH.USD,
                    btc: btc.data.BTC.USD,
                    ltc: ltc.data.LTC.USD
                };
                // Set the state of the todayprice to the content of the object f
                this.setState({
                    todayprice: f
                });
            }));
    }

    // This function gets the price for the yesterday
    getYesterdayPrice = () => {
        // Get yesterdays date in timestamp
        let t = moment().subtract(1, 'days').unix();
        // axios.all is used to make concurrent API requests. These requests were the functions we first created and they accept an argument of the date required.
        axios.all([this.getETHPrices(t), this.getBTCPrices(t), this.getLTCPrices(t)])
            .then(axios.spread((eth, btc, ltc) => {
                let f = {
                    date: moment.unix(t).format('MMMM Do YYYY'),
                    eth: eth.data.ETH.USD,
                    btc: btc.data.BTC.USD,
                    ltc: ltc.data.LTC.USD
                };
                // Set the state of yesterdayprice to the content of the object f
                this.setState({
                    yesterdayprice: f
                });
            }));
    }
    render () {
        return (
            <div>
            </div>
        );
    }
}

export default History;
