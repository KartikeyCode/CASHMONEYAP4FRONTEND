import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = `
Write a report in the style of how a sales executive would highlight a product its advantages and disadvantages
`;

export async function GET() {
  return NextResponse.json({ message: "test" });
}

export async function POST(request) {
  const res = await request.json();

  console.log(`API: ${basePromptPrefix}${res.userInput}`);

  const baseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${basePromptPrefix}${res.userInput}\n`,
    temperature: 0.7,
    max_tokens: 250,
  });

  const basePromptOutput = baseCompletion.data.choices.pop();

  // Build Prompt #2
  const secondPrompt = `Explain the product in an optimistic manner.

    Title: ${res.userInput}

    Table of Contents: ${basePromptOutput.text}

    Blog Post:'.

    Title: ${res.userInput}

    Table of Contents: ${basePromptOutput.text}

    `;

  // Call the OpenAI API a second time with Prompt #2
  const secondPromptCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${secondPrompt}`,
    // Set a higher temperature for this one. Up to you!
    temperature: 0.8,
    // Increase max_tokens.
    max_tokens: 250,
  });

  // Get the output
  const secondPromptOutput = secondPromptCompletion.data.choices.pop();

  // Send Prompt #2's output to the UI instead of Prompt #1's.
  return NextResponse.json({ output: secondPromptOutput });
}
