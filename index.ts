import 'dotenv/config'
import { runLLM } from './src/llm'

const userMessage = process.argv[2]

if (!userMessage) {
  console.error('Please provide a message')
  process.exit(1)
}

// runLLM({ userMessage })
//   .then(console.log)
//   .catch(console.error)

const run = async () => {
  try {
    const response = await runLLM({ userMessage })
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}

run()
