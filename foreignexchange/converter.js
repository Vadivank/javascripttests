const RATES = {
    usd: 0.14,
    eur: 0.13
};

function convert( { rub, currency } ) {
    if (!RATES[currency]) {
        return null;
    }

    return rub * RATES[currency];
}

