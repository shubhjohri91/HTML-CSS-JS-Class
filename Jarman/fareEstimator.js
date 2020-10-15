function fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile) {
    const fareArray = [];
    for (let i = 0; i < cost_per_minute.length; i++) {
        fareArray.push((ride_time * cost_per_minute[i]) + (ride_distance * cost_per_mile [i]))
    }
    return fareArray
}
