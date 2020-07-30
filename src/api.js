import axios from 'axios'

// Create instance called instance
const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export default {

    getChannels: () =>
    instance({
        'method':'GET',
        'url':'channels',
/*         'params': {
            'search':'parameter',
        }, */
    }),

    getChannelsUrl: () =>
    instance({
        'method':'GET',
        'url':'channels/url',
/*         'params': {
            'search':'parameter',
        }, */
    }),

    getChannelById: (id) =>
    instance({
        'method':'GET',
        'url':`/channels/${id}`
    }),

    getChannelsPreviewsById: (id) =>
    instance({
        'method': 'GET',
        'url':`/channels/preview/${id}`,
    }),

    getLatestChannelPreview: (id) =>
    instance({
        'method': 'GET',
        'url':`/channels/preview/${id}`,
    }),

    test: () =>
    instance({
        'method': 'GET',
        'url':'/channels/preview/',
        'data': {
            'item1':'data1',
            'item2':'item2'
        }
    })

}