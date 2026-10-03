import { access, readdir } from 'node:fs/promises'
import { join } from 'node:path'

export async function getSkinDirectories(skinsRoot) {
  const entries = await readdir(skinsRoot, { withFileTypes: true })
  const skinDirectories = []

  for (const entry of entries) {
    if (!entry.isDirectory()) continue

    const candidateDirectory = join(skinsRoot, entry.name)
    const manifestPath = join(candidateDirectory, "skin.json")

    try {
      await access(manifestPath)
    } catch {
      continue
    }

    skinDirectories.push(candidateDirectory)
  }

  return skinDirectories.sort()
}
