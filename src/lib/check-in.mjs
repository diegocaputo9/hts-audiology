/** Original wellness reflection; not the validated TFI or a diagnostic instrument. */
export function reflectionScore(answers) {
  if (!Array.isArray(answers) || answers.length !== 5 || answers.some(a => !Number.isInteger(a) || a < 0 || a > 10)) {
    throw new RangeError('Please answer all five questions with a number from 0 to 10.');
  }
  return Math.round(answers.reduce((sum, n) => sum + n, 0) / answers.length * 10);
}

export const questions = [
  { title: 'How noticeable has tinnitus been in your day?', hint: 'Think about the past seven days, rather than just this moment.', low: 'Not noticeable', high: 'Extremely noticeable' },
  { title: 'How much has tinnitus interrupted your focus?', hint: 'Consider reading, working, or following a conversation over the past seven days.', low: 'Not at all', high: 'Very much' },
  { title: 'How much has tinnitus disturbed your sleep?', hint: 'Think about falling asleep, staying asleep, and feeling rested over the past seven days.', low: 'Not at all', high: 'Very much' },
  { title: 'How difficult has it been to relax with tinnitus?', hint: 'Consider quiet moments and activities you usually find restful over the past seven days.', low: 'Not difficult', high: 'Extremely difficult' },
  { title: 'How much has tinnitus affected your enjoyment of life?', hint: 'Think about time with people, hobbies, and everyday activities over the past seven days.', low: 'Not at all', high: 'Very much' },
];
