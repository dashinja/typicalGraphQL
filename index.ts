import { prisma, User, ID_Input, ID_Output } from './generated/prisma-client'
import { __InputValue } from 'graphql'
import {
  createUser,
  findUserNamed,
  findByIDandReturnUserName,
  findByNameAndUpdateUserName,
  listAllUsers,
  deleteAll,
} from './userFunctions'

const command: string = process.argv[2]
const primaryUserInput: string = process.argv[3]
const secondaryUserInput: string = process.argv[4]
;(async () => {
  switch (command) {
    case `createUser`:
    case `createuser`:
    case `Create User`:
    case `create user`:
      console.log(`Running 'createUser' function...`)
      createUser(primaryUserInput).catch(e => console.error(e))
      break

    case `find`:
      console.log(`Running 'find' function...`)
      findUserNamed(primaryUserInput).catch(e => console.error(e))
      break

    case `who_is`:
    case `who is`:
    case `who's`:
      console.log(`Running 'who_is' function...`)
      console.log(
        await findByIDandReturnUserName(primaryUserInput).catch(e =>
          console.error(e),
        ),
      )
      break

    case `listUsers`:
    case `listusers`:
    case `list users`:
    case `listall`:
    case `listAll`:
    case `list all`:
    case `list`:
      listAllUsers()
      break

    case `update`:
      console.log(`Running 'update' function...`)
      findByNameAndUpdateUserName(primaryUserInput, secondaryUserInput).catch(
        e => console.error(`${e}`),
      )
      break

    case `deleteall`:
    case `Deleteall`:
    case `deleteAll`:
    case `DeleteAll`:
      console.log(`Running 'delete' function...`)
      deleteAll().catch(e => console.error(e))
      break

    default:
      console.log(`Please enter an appropriate command and argument!`)
      break
  }
})()
