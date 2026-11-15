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

export const areas = ['Noticing tinnitus', 'Focus', 'Sleep', 'Relaxation', 'Enjoyment of life'];
export const suggestions = [
  'Note when you notice tinnitus most and whether your hearing has changed. A hearing evaluation can help guide a conversation about your options.',
  'Write down the listening or concentration tasks that are hardest. Ask about strategies for listening effort and whether gentle background sound may help.',
  'Keep a note of how tinnitus affects falling asleep or staying asleep. Ask about comfortable background sound and a sleep routine that suits you.',
  'Note what helps you feel at ease. Ask about relaxation approaches, sound enrichment, or counseling-based support for tinnitus.',
  'Choose an activity or conversation you would like to enjoy more easily. Share that goal so your care can focus on what matters to you.',
];

/** Descriptive feedback on an answer, never a clinical severity classification. */
export function answerFeedback(index, value) {
  if (!Number.isInteger(index) || index < 0 || index >= questions.length || !Number.isInteger(value) || value < 0 || value > 10) throw new RangeError('Choose an area and a rating from 0 to 10.');
  const descriptions = index === 0
    ? ['You did not notice tinnitus during the week you rated.', 'You placed tinnitus toward the less noticeable end of the scale.', 'You placed tinnitus near the middle of the noticeability scale.', 'You placed tinnitus toward the very noticeable end of the scale.']
    : ['You reported no interference in this area during the week you rated.', 'You placed this area toward the lower end of the interference scale.', 'You placed this area near the middle of the interference scale.', 'You placed this area toward the higher end of the interference scale.'];
  return { title: `${areas[index]}: ${value} out of 10`, description: descriptions[value === 0 ? 0 : value <= 3 ? 1 : value <= 6 ? 2 : 3], suggestion: suggestions[index] };
}

export function reflectionPriorities(answers) {
  reflectionScore(answers); // Validate the complete response before making a summary.
  const highest = Math.max(...answers);
  return { highest, indices: highest === 0 ? [] : answers.flatMap((value, index) => value === highest ? [index] : []) };
}
