import inquirer from 'inquirer'
import TEMPLATES, { Template } from '../constants/templates'
import MESSAGES from '../constants/messages'

const templatePrompt = async (): Promise<Template['value']> => {
  const { template } = await inquirer.prompt<{ template: Template['value'] }>([
    {
      type: 'list',
      name: 'template',
      message: MESSAGES.TEMPLATE,
      choices: TEMPLATES,
    },
  ])

  return template
}

export default templatePrompt
