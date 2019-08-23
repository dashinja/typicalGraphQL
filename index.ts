import { prisma, User, ID_Input, ID_Output } from './generated/prisma-client'
import { __InputValue } from 'graphql'

const command: string = process.argv[2]
const primaryUserInput: string = process.argv[3]
const secondaryUserInput: string = process.argv[4]

// Creates one user
async function createUser(userInput: string) {
  const newUser: User = await prisma.createUser({ name: userInput })
  console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)
  prisma.$graphql
}

// Lists all users
async function listAllUsers() {
  const allUsers = await prisma.users()
  console.log(`All users in db:`)
  allUsers.forEach((user, i) => console.log(`User #${i}: ${user.name}`))
}

// Deletes all messages
async function deleteAll() {
  const deletedUser = await prisma.deleteManyUsers()
  console.log(`All ${deletedUser.count} users deleted`)
}

// Find ID and return user name
async function findByIDandReturnUserName(userInput: string) {
  const realName = await prisma.user({ id: userInput })
  return await realName.name
}

// Verifies entry exists by name
async function findUserNamed(userInput: string) {
  const userInQuestion = await prisma.users({
    where: {
      name: userInput,
    },
  })
  userInQuestion.forEach(user => {
    if (userInQuestion.length !== 0) {
      console.log(`Entry ${user.name} exists.`)
    } else {
      console.log(`Entry not found!`)
    }
  })
}

// Find user ID and return user name
async function findAndReturnUserID(userInput: ID_Output) {
  const userID: User[] = await prisma.users({
    where: {
      name: userInput,
    },
  })
  return userID[0]['id']
}

// Find name and update name
async function findByNameAndUpdateUserName(
  userInput: ID_Output,
  secondaryUserInput: string,
) {
  const wantedID = await findAndReturnUserID(userInput)
  const userInQuestion = await prisma.updateUser({
    data: {
      name: secondaryUserInput,
    },
    where: {
      id: wantedID.toString(),
    },
  })

  console.log(
    `Updated user: ${await findByIDandReturnUserName(
      wantedID.toString(),
    )} to value: '${userInQuestion.name}`,
  )
}

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
