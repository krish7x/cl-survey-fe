import { ITemplateQuestion } from '@/types';

export const templateJSONData: ITemplateQuestion[] = [
  {
    questionId: 1,
    title: 'Ahh great! Let us know what you liked the most ☺️',
    description: 'Ahh great! Let us know what you liked the most ☺️',
    optionTypeId: 3,
    optionTypeName: 'Multiple choice - Single Select',
    isAdded: true,
    optionsJson: {
      optionPosition: 'y',
      options: [
        {
          id: 1,
          name: 'Design',
          linkedTo: 3,
        },
        {
          id: 2,
          name: 'Quality',
          linkedTo: 2,
        },
        {
          id: 3,
          name: 'Delivery',
          linkedTo: 6,
        },
        {
          id: 4,
          name: 'Packaging',
          linkedTo: 5,
        },
        {
          id: 5,
          name: 'Pricing',
          linkedTo: 9,
        },
        {
          id: 6,
          name: 'Customer Support',
          linkedTo: 7,
        },
        {
          id: 7,
          name: 'Others',
          linkedTo: 4,
        },
        {
          id: 8,
          name: 'Website Experience',
          linkedTo: 8,
        },
      ],
    },
  },
  {
    title: 'Please help us to Improve our Quality ',
    isAdded: true,
    questionId: 2,
    description: 'Please help us to Improve our Quality ',
    optionsJson: {
      options: [
        {
          id: 1,
          name: 'I received a broken/damaged product',
        },
        {
          id: 2,
          name: 'The product broke/got damaged while wearing',
        },
        {
          id: 3,
          name: 'The product got tarnished too soon',
        },
        {
          id: 4,
          name: 'The plating worn off',
        },
        {
          id: 5,
          name: 'The piece looked old to me',
        },
      ],
      optionPosition: 'y',
    },
    optionTypeId: 3,
    optionTypeName: 'Multiple choice - Single Select',
  },
  {
    questionId: 3,
    title: 'Please help us to Improve(Design) ',
    description: 'Please help us to Improve(Design) ',
    optionTypeId: 3,
    optionTypeName: 'Multiple choice - Single Select',
    isAdded: true,
    optionsJson: {
      optionPosition: 'y',
      options: [
        {
          id: 1,
          name: "The product didn't look good on me",
          linkedTo: 10,
        },
        {
          id: 2,
          name: "The fit wasn't right for me",
          linkedTo: 10,
        },
        {
          id: 5,
          name: 'The product finish needs improvement',
          linkedTo: 10,
        },
        {
          id: 6,
          name: 'It did not look like the images',
          linkedTo: 10,
        },
        {
          id: 7,
          name: "It wasn't very comfortable to wear",
        },
        {
          id: 8,
          name: 'It was too heavy',
        },
        {
          id: 9,
          name: 'It was too delicate',
        },
      ],
    },
  },
  {
    title: 'You have selected "Others", please specify.   ',
    isAdded: true,
    questionId: 4,
    description: 'You have selected "Others", please specify.   ',
    optionsJson: {
      options: [
        {
          id: 1,
          name: '',
        },
      ],
      optionPosition: 'y',
    },
    optionTypeId: 6,
    optionTypeName: 'Text Area',
  },
  {
    questionId: 5,
    title: 'Help us to imporve our packaging ',
    description: 'Help us to imporve our packaging ',
    optionTypeId: 3,
    optionTypeName: 'Multiple choice - Single Select',
    isAdded: true,
    optionsJson: {
      optionPosition: 'y',
      options: [
        {
          id: 3,
          name: ' Packaging could be improved',
        },
        {
          id: 4,
          name: 'Others',
        },
      ],
    },
  },
  {
    questionId: 6,
    title: 'Help us to imporve our Delivery ',
    description: 'Help us to imporve our Delivery ',
    optionTypeId: 3,
    optionTypeName: 'Multiple choice - Single Select',
    isAdded: true,
    optionsJson: {
      optionPosition: 'y',
      options: [
        {
          id: 1,
          name: 'The delivery was delayed',
        },
        {
          id: 3,
          name: 'Service Related',
          linkedTo: '',
        },
        {
          id: 4,
          name: 'The delivery box was tampered',
        },
      ],
    },
  },
  {
    questionId: 7,
    title: 'Help us to imporve our Customer Service ',
    description: 'Help us to imporve our Customer Service ',
    optionTypeId: 3,
    optionTypeName: 'Multiple choice - Single Select',
    isAdded: true,
    optionsJson: {
      optionPosition: 'y',
      options: [
        {
          id: 1,
          name: 'My query was not understood at all',
        },
        {
          id: 2,
          name: "The right details weren't shared with me",
        },
        {
          id: 4,
          name: "The agent's behaviour could have been better",
        },
        {
          id: 5,
          name: 'I was not satisfied with the solution provided',
        },
        {
          id: 6,
          name: 'Others',
        },
        {
          id: 7,
          name: 'There was a lot of back and forth while solving my problem',
        },
      ],
    },
  },
  {
    title: 'Help us to imporve our Website experience',
    isAdded: true,
    questionId: 8,
    description: 'Help us to imporve our Website experience',
    optionsJson: {
      options: [
        {
          id: 1,
          name: 'Not user friendly',
        },
        {
          id: 2,
          name: 'Too many pop ups',
        },
        {
          id: 3,
          name: 'FAQs not available',
        },
      ],
      optionPosition: 'y',
    },
    optionTypeId: 3,
    optionTypeName: 'Multiple choice - Single Select',
  },
  {
    questionId: 9,
    title: 'Please help us to improve the pricing',
    description: '',
    optionTypeId: 3,
    optionTypeName: 'Multiple choice - Single Select',
    isAdded: true,
    optionsJson: {
      optionPosition: 'y',
      options: [
        {
          id: 1,
          name: 'Material Cost is too high',
        },
        {
          id: 2,
          name: 'Making charges are too high',
        },
      ],
    },
  },
  {
    questionId: 10,
    title: 'Multi Select Question - Main',
    description: '',
    optionTypeId: 4,
    optionTypeName: 'Multiple choice - multi select',
    isAdded: true,
    optionsJson: {
      optionPosition: 'y',
      options: [
        {
          id: 1,
          name: 'One',
          linkedTo: 11,
        },
        {
          id: 2,
          name: 'Two',
          linkedTo: 12,
        },
        {
          id: 3,
          name: 'Three',
          linkedTo: 13,
        },
      ],
    },
  },
  {
    questionId: 11,
    title: 'Multi Select Question - 1',
    description: '',
    optionTypeId: 3,
    optionTypeName: 'Multiple choice - Single Select',
    isAdded: true,
    optionsJson: {
      optionPosition: 'y',
      options: [
        {
          id: 1,
          name: 'One',
          linkedTo: 14,
        },
        {
          id: 2,
          name: 'Two',
          linkedTo: 14,
        },
        {
          id: 3,
          name: 'Three',
        },
      ],
    },
  },
  {
    questionId: 12,
    title: 'Multi Select Question - 2',
    description: '',
    optionTypeId: 3,
    optionTypeName: 'Multiple choice - Single Select',
    isAdded: true,
    optionsJson: {
      optionPosition: 'y',
      options: [
        {
          id: 1,
          name: 'One',
          linkedTo: 15,
        },
        {
          id: 2,
          name: 'Two',
          linkedTo: 15,
        },
        {
          id: 3,
          name: 'Three',
        },
      ],
    },
  },
  {
    questionId: 13,
    title: 'Multi Select Question - 3',
    description: '',
    optionTypeId: 3,
    optionTypeName: 'Multiple choice - Single Select',
    isAdded: true,
    optionsJson: {
      optionPosition: 'y',
      options: [
        {
          id: 1,
          name: 'One',
          linkedTo: 16,
        },
        {
          id: 2,
          name: 'Two',
          linkedTo: 16,
        },
        {
          id: 3,
          name: 'Three',
        },
      ],
    },
  },
  {
    questionId: 14,
    title: 'Another Linked - 1',
    description: '',
    optionTypeId: 3,
    optionTypeName: 'Multiple choice - Single Select',
    isAdded: true,
    optionsJson: {
      optionPosition: 'y',
      options: [
        {
          id: 1,
          name: 'One',
        },
        {
          id: 2,
          name: 'Two',
        },
      ],
    },
  },
  {
    questionId: 15,
    title: 'Another Linked - 2',
    description: '',
    optionTypeId: 3,
    optionTypeName: 'Multiple choice - Single Select',
    isAdded: true,
    optionsJson: {
      optionPosition: 'y',
      options: [
        {
          id: 1,
          name: 'One',
        },
        {
          id: 2,
          name: 'Two',
        },
      ],
    },
  },
  {
    questionId: 16,
    title: 'Another Linked - 3',
    description: '',
    optionTypeId: 3,
    optionTypeName: 'Multiple choice - Single Select',
    isAdded: true,
    optionsJson: {
      optionPosition: 'y',
      options: [
        {
          id: 1,
          name: 'One',
        },
        {
          id: 2,
          name: 'Two',
        },
      ],
    },
  },
  {
    questionId: 17,
    title:
      'Feel free to share any feedback or suggestion that may help us improve your experience.',
    description: 'Final question',
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
  },
].map(val => ({ ...val, answer: [] }));

export const defaultTemplate = [
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
