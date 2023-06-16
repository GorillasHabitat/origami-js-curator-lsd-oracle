import { Curator } from '../../origami-js-sdk'

import lsdWorkshop from './LsdWorkshop'

/*
  Ankr: ankrBNB, ankrMatic, ankrAvax, ankrFtm
  Coinbase: cbETH
  Lido: stETH, stMatic, stSol, stDot
  RocketPool: rEth
 */

const curator = new Curator()

curator.workshop(lsdWorkshop).curate()