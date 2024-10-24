import minimist from 'minimist'
import { waitForDb } from '../app/src/infrastructure/mongodb.js'
import ProjectDeleter from '../app/src/Features/Project/ProjectDeleter.js'

async function main() {
  const argv = minimist(process.argv.slice(2))
  const projectId = argv['project-id']

  if (!projectId) {
    throw new Error('set --project-id')
  }
  console.log(`Soft deleting project ${projectId}`)
  await waitForDb()

  // soft delete, project will be permanently deleted after 90 days
  await ProjectDeleter.promises.deleteProject(projectId)
}

try {
  await main()
  console.log('Done.')
  process.exit(0)
} catch (error) {
  console.error(error)
  process.exit(1)
}