import { basename } from 'node:path'
import { getSkinDirectories } from '../plugin/discover-skins.mjs'

const skinDirectories = await getSkinDirectories()
const skinSlugs = skinDirectories.map((directory) => basename(directory))

process.stdout.write(JSON.stringify(skinSlugs))
