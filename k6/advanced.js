import http from 'k6/http';
import { check, sleep } from 'k6';

// global options
const ENDPOINTS = {
    BEARER_AUTH: 'https://httpbin.test.k6.io/bearer',
    JSON: 'https://httpbin.test.k6.io/json'
}

// K6 options
export const options = {
    stages: [
        { duration: '5s', target: 10 },
        { duration: '5s', target: 10 },
        { duration: '5s', target: 0 },
    ],
};

http.setResponseCallback(http.expectedStatuses({ min: 200, max: 399 }));

// K6 default functions
export default function () {

    // GET some auth
    const params = {
        headers: { 'Authorization': 'Bearer l33t'}
    }
    const authResponse = http.get(ENDPOINTS.BEARER_AUTH, params)
    check(authResponse, {
        '[AUTH] status was 200': (r) => r.status === 200,
    })

    // GET some json
    const response = http.get(ENDPOINTS.JSON);
    check(response, {
        '[JSON] status was 200': (r) => r.status === 200,
        '[JSON] verify homepage text': (r) => r.body.includes('{')
    });

    sleep(1);
}
