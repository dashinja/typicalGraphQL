import {
  prisma,
  User,
  ID_Input,
  ID_Output,
  Grade,
  GradeCreateInput,
} from './generated/prisma-client'
import { __InputValue } from 'graphql'

const myId = `cjznlbr200tbl0b5348yvrflo`

export async function addGrade(gradeInput, id) {
  const newGrade = await prisma
    .createGrade({
      grade: gradeInput,
      owner: {
        connect: {
          id: `cjznlbr200tbl0b5348yvrflo`,
        },
      },
    })
    .catch(e => console.error(e))

  return `Grade ${await newGrade} added.`
}

console.log(addGrade(99, myId))
