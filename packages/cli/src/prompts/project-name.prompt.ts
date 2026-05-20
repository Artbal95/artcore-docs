import inquirer from 'inquirer'
import MESSAGES from '../constants/messages'

const projectNamePrompt = async (): Promise<string> => {
  const { name } = await inquirer.prompt<{ name: string }>([
    {
      type: 'input',
      name: 'name',
      message: MESSAGES.PROJECT_NAME,
      validate: (input) => {
        if (!input) return 'Project name is required'
        return true
      },
    },
  ])

  return name
}

export default projectNamePrompt
