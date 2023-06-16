import { Workshop } from '../../origami-js-sdk'

import cgMill from './CoinGeckoMill'

const workshop = new Workshop()
workshop.mill(cgMill)


export default workshop