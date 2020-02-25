import { beguid } from "./beguid"
import { pool } from "./mysql"
import { config } from "./config"
import { Generator } from "../lib/Generator"

export let generator: Generator

export async function initialize() {
  generator = new Generator({ beguid, config, pool })
  await generator.initialize()
  //generator.generateAmount(100000000n)
  //const start = Math.ceil(Date.now() / 1000)
  //await generator.start()
  //console.log(`Took ${Math.ceil(Date.now()/1000)-start}s`)
}