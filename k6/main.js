import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
        { duration: '5s', target: 5 },
        { duration: '5s', target: 5 },
        { duration: '5s', target: 0 },
    ],
};

export default function () {
    const response = http.get('https://httpbin.test.k6.io/json');

    check(response, {
        'status was 200': (r) => r.status === 200,
        'verify homepage text': (r) => r.body.includes('{')
    });

    sleep(1);
}
