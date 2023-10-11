# K6 Load Testing with Prometheus and Grafana 🚀

This project sets up a load testing environment with [k6](https://k6.io/), monitored by [Prometheus](https://prometheus.io/), and visualized with [Grafana](https://grafana.com/). It's an all-in-one solution for performance testing and results visualization.

## Table of Contents 📚

- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Services](#services)
- [Notes](#notes)
- [License](#license)

## Architecture 🏗

- **k6**: Executes the load tests against a specified endpoint.
- **Prometheus**: Scrapes and stores metrics data from k6.
- **Grafana**: Dashboards and visualizes the metrics from Prometheus.

## Getting Started 🚦

### Prerequisites

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

### Running the Stack 🏃‍♂️

1. **Clone the repository**:

    ```bash
    git clone https://github.com/MadMowgli/K6_OpenStack.git && cd K6_OpenStack
    ```

2. **Build and run the services**:

    ```bash
    docker-compose up --build
    ```

3. **Access the services**:
    - Grafana: [http://localhost:3000](http://localhost:3000)
      1. Add Prometheus your data source
      2. Clone a nice and sweet [k6/prometheus dashboard](https://grafana.com/grafana/dashboards/19665-k6-prometheus/)!
    - Prometheus: [http://localhost:9090](http://localhost:9090)
      

## Services 🛠

### k6

- Image: Custom built from `grafana/k6:latest`.
- Load testing script: `./k6/main.js`.
- Configuration: Stages set for ramping up, maintaining, and ramping down the virtual users.

### Prometheus

- Image: `prom/prometheus:latest`.
- Configuration: `./prometheus/prometheus.yml`.
- Scrape interval: Every 15 seconds.
- Targets: k6 service at port 6565.

### Grafana

- Image: `grafana/grafana:latest`.
- Persists data at: `./grafana`.

## Notes 📝
- Please consider that the k6 scripts only runs once when you fire your `docker-compose up --build` command! This is intended. The script will publish its results to the Prometheus instance.

## License 📜

This project is licensed under the MIT License. See [LICENSE](LICENSE) for more details.

---
