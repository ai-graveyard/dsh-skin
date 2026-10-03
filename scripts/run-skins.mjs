import { spawn } from 'node:child_process'
import { basename, join, resolve } from 'node:path'
import { tmpdir } from 'node:os'
import { getSkinDirectories } from './discover-skins.mjs'

const root = resolve(import.meta.dirname, '..')
const skinsRoot = join(root, 'skins')
const action = process.argv[2]

if (!['build', 'check', 'pack'].includes(action)) {
  console.error('Usage: node scripts/run-skins.mjs <build|check|pack>')
  process.exit(1)
}

const skinDirectories = await getSkinDirectories(skinsRoot)

if (skinDirectories.length === 0) {
  console.error('No skin directories found.')
  process.exit(1)
}

function run(command, args, options = {}) {
  return new Promise((resolveRun, rejectRun) => {
    const child = spawn(command, args, {
      cwd: root,
      env: process.env,
      stdio: 'inherit',
      ...options,
    })
    child.on('error', rejectRun)
    child.on('exit', (code, signal) => {
      if (code === 0) resolveRun()
      else rejectRun(new Error(`${command} exited with ${signal ?? code}`))
    })
  })
}

for (const directory of skinDirectories) {
  const name = basename(directory)
  console.log(`\n[skins] ${action}: ${name}`)

  if (action === 'pack') {
    await run('npm', ['pack', '--dry-run', '--json', directory], {
      env: {
        ...process.env,
        npm_config_cache: process.env.npm_config_cache ?? join(tmpdir(), 'dsh-skin-npm-cache'),
      },
    })
  } else {
    const args = [join(directory, 'build.mjs')]
    if (action === 'check') args.push('--check')
    await run(process.execPath, args)
  }
}

console.log(`\n[skins] ${action} completed for ${skinDirectories.length} skin(s).`)
