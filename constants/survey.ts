import { ITemplateQuestion } from '@/types';

export const templateJSONData: ITemplateQuestion[] = [
  {
    questionId: 1,
    title: 'Have you visited our store recently ?',
    description: 'Have you visited our store recently ?',
    optionTypeId: 3,
    optionTypeName: 'Multiple choice - Single Select',
    isAdded: true,
    optionsJson: {
      optionPosition: 'y',
      options: [
        {
          id: 1,
          name: 'Yes',
        },
        {
          id: 2,
          name: 'No',
        },
      ],
    },
    answer: [],
  },
  {
    questionId: 2,
    title: 'Were you offered water/tea/coffee when you visited the stores?',
    description: '',
    optionTypeId: 3,
    optionTypeName: 'Multiple choice - Single Select',
    isAdded: true,
    optionsJson: {
      optionPosition: 'y',
      options: [
        {
          id: 1,
          name: 'Yes',
        },
        {
          id: 2,
          name: 'No',
        },
        {
          id: 3,
          name: 'I don’t remember',
        },
      ],
    },
    answer: [],
  },
  {
    questionId: 3,
    title:
      'Hurray! You made our day extra special ✨ please let us know what you liked the most.',
    description: '',
    optionTypeId: 4,
    optionTypeName: 'Multiple choice - multi select',
    isAdded: true,
    optionsJson: {
      optionPosition: 'y',
      options: [
        {
          id: 1,
          name: 'Service & Support',
        },
        {
          id: 2,
          name: 'Timely & Prompt Delivery ',
        },
        {
          id: 3,
          name: 'Value for Money',
        },
        {
          id: 4,
          name: 'Discount',
        },
        {
          id: 5,
          name: 'Product Quality',
        },
      ],
    },
    answer: [],
  },
  {
    questionId: 4,
    title:
      'Feel free to share any feedback or suggestion that may help us improve your experience.',
    description: '',
    optionTypeId: 6,
    optionTypeName: 'Text Area',
    isAdded: true,
    optionsJson: {
      optionPosition: 'y',
      options: [
        {
          id: 1,
          name: '',
        },
      ],
    },
    answer: [],
  },
];
