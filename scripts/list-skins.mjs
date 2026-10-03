import { basename } from 'node:path'
import { join } from 'node:path'
import { getSkinDirectories } from './discover-skins.mjs'

const root = join(import.meta.dirname, '..')
const skinsRoot = join(root, 'skins')
const skinDirectories = await getSkinDirectories(skinsRoot)
const skinSlugs = skinDirectories.map((directory) => basename(directory))

process.stdout.write(JSON.stringify(skinSlugs))
