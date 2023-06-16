// import { SuperagentMill } from '@OpenOracleOrigami/origami-js-sdk'
import { SuperagentMill } from '../../origami-js-sdk'

import { COIN_GECKO_LSD_API_URL } from './const'
import { CoinGeckoLsdRes, CoinGeckoLsdData } from './types'
import { toUnits } from './util'

const parser = (data: CoinGeckoLsdRes): object => {
    const nextData: CoinGeckoLsdData = {
        ankravax: toUnits(data['ankr-staked-avax'].usd, 8),
        ankrbnb: toUnits(data['ankr-staked-bnb'].usd, 8),
        ankreth: toUnits(data['ankreth'].usd, 8),
        ankrftm: toUnits(data['ankr-reward-bearing-ftm'].usd, 8),
        ankrmatic: toUnits(data['ankr-reward-earning-matic'].usd, 8),
        cbeth: toUnits(data['coinbase-wrapped-staked-eth'].usd, 8),
        reth: toUnits(data['reth'].usd, 8),
        reth2: toUnits(data['reth2'].usd, 8),
        steth: toUnits(data['staked-ether'].usd, 8),
        stmatic: toUnits(data['lido-staked-matic'].usd, 8),
        stsol: toUnits(data['lido-staked-sol'].usd, 8),
    }

    return nextData as object
}

const mill = new SuperagentMill(COIN_GECKO_LSD_API_URL, { name: 'CG_LSD', parser })

export default mill
