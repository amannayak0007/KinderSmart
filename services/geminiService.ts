const delay = (ms: number) => new Promise<void>((resolve) => setTimeout(resolve, ms));

const scienceFacts = [
  {
    topic: 'Space',
    fact: 'The Sun is a giant star that keeps us warm and bright every day.',
    question: 'What keeps our planet warm?',
    options: ['The Sun', 'The Moon', 'The Clouds'],
    answer: 'The Sun',
  },
  {
    topic: 'Plants',
    fact: 'Plants drink sunlight and water to make their own food.',
    question: 'What do plants use to make food?',
    options: ['Sunlight', 'Cats', 'Coins'],
    answer: 'Sunlight',
  },
  {
    topic: 'Water',
    fact: 'Water can turn into ice when it gets very cold.',
    question: 'What happens to water when it freezes?',
    options: ['It turns to ice', 'It turns to candy', 'It disappears'],
    answer: 'It turns to ice',
  },
];

const mathQuestions: Record<string, { question: string; options: string[]; answer: string }> = {
  easy: {
    question: '2 + 3 = ?',
    options: ['4', '5', '6'],
    answer: '5',
  },
  medium: {
    question: '7 - 2 = ?',
    options: ['4', '5', '6'],
    answer: '5',
  },
  hard: {
    question: '4 + 5 - 3 = ?',
    options: ['5', '6', '7'],
    answer: '6',
  },
  default: {
    question: '1 + 1 = ?',
    options: ['1', '2', '3'],
    answer: '2',
  },
};

const storyTemplates = [
  (topic: string) => `Once upon a time there was a tiny ${topic.toLowerCase()} who wished to make their friends smile.`,
  (topic: string) => `A playful ${topic.toLowerCase()} found a magic feather and flew to the rainbow castle.`,
  (topic: string) => `Every morning the ${topic.toLowerCase()} bounced out of bed ready for a big hug and a new adventure.`,
];

const pickRandom = <T,>(items: T[]): T => items[Math.floor(Math.random() * items.length)];

export const generateMathQuestion = async (difficulty: string): Promise<{ question: string; options: string[]; answer: string } | null> => {
  await delay(300);
  const key = difficulty?.toLowerCase() || 'default';
  return mathQuestions[key] ?? mathQuestions.default;
};

export const generateScienceFact = async (): Promise<{ topic: string; fact: string; question: string; options: string[]; answer: string } | null> => {
  await delay(400);
  return pickRandom(scienceFacts);
};

export const generateStory = async (topic: string): Promise<string> => {
  await delay(300);
  const trimmed = (topic || 'Playtime').trim();
  const template = pickRandom(storyTemplates);
  return template(trimmed);
};