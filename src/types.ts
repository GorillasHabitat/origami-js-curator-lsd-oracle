export type UsdRes = {
    usd: string
}

export type CoinGeckoLsdRes = {
    'ankr-staked-avax': UsdRes
    'ankr-staked-bnb': UsdRes
    'ankreth': UsdRes
    'ankr-reward-bearing-ftm': UsdRes
    'ankr-reward-earning-matic': UsdRes
    'coinbase-wrapped-staked-eth': UsdRes
    reth: UsdRes
    reth2: UsdRes
    'staked-ether': UsdRes
    'lido-staked-matic': UsdRes
    'lido-staked-sol': UsdRes
}

export type CoinGeckoLsdData = {
    ankravax: string
    ankrbnb: string
    ankreth: string
    ankrftm: string
    ankrmatic: string
    cbeth: string
    reth: string
    reth2: string
    steth: string
    stmatic: string
    stsol: string
}
