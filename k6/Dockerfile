FROM grafana/k6:latest
COPY main.js /tests/main.js
CMD ["run", "-o", "experimental-prometheus-rw", "/tests/main.js"]