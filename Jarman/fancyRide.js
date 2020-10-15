function fancyRide(l, fares) {
    const fareMap = {
        0: "UberX",
        1: "UberXL",
        2: "UberPlus",
        3: "UberBlack",
        4: "UberSUV"
    };
    let i;    
    for (i = 0; i < fares.length; i++) {
        let netRidePrice = fares[i] * l - 20;
        if (netRidePrice > 0) {
            break;
        }       
    }
    return fareMap[i-1];
}
