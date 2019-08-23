import { prisma, User, ID_Input, ID_Output } from './generated/prisma-client'
import { __InputValue } from 'graphql'

// Creates one user
export async function createUser(userInput: string) {
  const newUser: User = await prisma.createUser({ name: userInput })
  console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)
  prisma.$graphql
}

// Lists all users
export async function listAllUsers() {
  const allUsers = await prisma.users()
  console.log(`All users in db:`)
  allUsers.forEach((user, i) => console.log(`User #${i}: ${user.name}`))
}

// Deletes all messages
export async function deleteAll() {
  const deletedUser = await prisma.deleteManyUsers()
  console.log(`All ${deletedUser.count} users deleted`)
}

// Find ID and return user name
export async function findByIDandReturnUserName(userInput: string) {
  const realName = await prisma.user({ id: userInput })
  return await realName.name
}

// Verifies entry exists by name
export async function findUserNamed(userInput: string) {
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
export async function findAndReturnUserID(userInput: ID_Output) {
  const userID: User[] = await prisma.users({
    where: {
      name: userInput,
    },
  })
  return userID[0]['id']
}

// Find name and update name
export async function findByNameAndUpdateUserName(
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
