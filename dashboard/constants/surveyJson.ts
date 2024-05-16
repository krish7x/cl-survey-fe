export const surveyJson = [
  {
    id: 1,
    title:
      'Based  your shopping experience, how likely are you to recommend CaratLane to your friend and family (on a scale of 1 to 10)?',
    isAdded: true,
    description: 'Description of question 1',
    optionTypeId: 1,
    optionTypeName: 'NPS Rating',
  },
  {
    id: 2,
    title: 'How was you experience in caratlane',
    isAdded: true,
    description: 'Description of question 2',
    optionTypeId: 2,
    optionTypeName: 'Star Rating',
  },
  {
    id: 3,
    title: 'What do you liked about the product',
    isAdded: true,
    description: 'Description of question 3',
    optionsJson: {
      options: [
        { id: 1, name: 'Option 10' },
        { id: 2, name: 'Option 2' },
        { id: 3, name: 'Option 3' },
        { id: 4, name: 'Option 4' },
      ],
      optionPosition: 'x',
    },
    optionTypeId: 3,
    optionTypeName: 'Multiple choice - Single Select',
  },
  {
    id: 4,
    title: 'Will you the product again from caratlane',
    isAdded: true,
    description: 'Description of question 4',
    optionsJson: {
      options: [
        { id: 1, name: 'Option 10' },
        { id: 2, name: 'Option 21' },
        { id: 3, name: 'Option 3' },
        { id: 4, name: 'Option 4' },
      ],
      optionPosition: 'y',
    },
    optionTypeId: 4,
    optionTypeName: 'Multiple choice - multi select',
    answer: [],
  },
  {
    id: 5,
    title: 'Select any option for this radio button question ?',
    isAdded: true,
    description: 'test',
    optionsJson: {
      options: [
        {
          id: 1,
          name: 'Option 1',
        },
        {
          id: 2,
          name: 'Option 2',
        },
        {
          id: 3,
          name: 'Option 3',
        },
        {
          id: 4,
          name: 'Option 4',
        },
      ],
      optionPosition: 'x',
    },
    optionTypeId: 5,
    optionTypeName: 'Radio button',
  },
];

export const surveyContactsData = [
  {
    contactName: 'Aarav Patel',
    contactEmail: 'aarav.patel@example.com',
    contactPhone: '+91 98765 43210',
    surveyMailSent: true,
    surveyCompleted: true,
    npsScore: 9,
    action: 'View Details',
  },
  {
    contactName: 'Aditi Sharma',
    contactEmail: 'aditi.sharma@example.com',
    contactPhone: '+91 87654 32109',
    surveyMailSent: true,
    surveyCompleted: false,
    npsScore: null,
    action: 'Send Reminder',
  },
  {
    contactName: 'Aryan Singh',
    contactEmail: 'aryan.singh@example.com',
    contactPhone: '+91 76543 21098',
    surveyMailSent: false,
    surveyCompleted: false,
    npsScore: null,
    action: 'Send Survey',
  },
  {
    contactName: 'Avni Verma',
    contactEmail: 'avni.verma@example.com',
    contactPhone: '+91 65432 10987',
    surveyMailSent: true,
    surveyCompleted: true,
    npsScore: 8,
    action: 'View Details',
  },
  {
    contactName: 'Rohan Kumar',
    contactEmail: 'rohan.kumar@example.com',
    contactPhone: '+91 54321 09876',
    surveyMailSent: true,
    surveyCompleted: false,
    npsScore: null,
    action: 'Send Reminder',
  },
  {
    contactName: 'Neha Gupta',
    contactEmail: 'neha.gupta@example.com',
    contactPhone: '+91 43210 98765',
    surveyMailSent: false,
    surveyCompleted: false,
    npsScore: null,
    action: 'Send Survey',
  },
  {
    contactName: 'Arjun Kapoor',
    contactEmail: 'arjun.kapoor@example.com',
    contactPhone: '+91 32109 87654',
    surveyMailSent: true,
    surveyCompleted: true,
    npsScore: 7,
    action: 'View Details',
  },
  {
    contactName: 'Ananya Mishra',
    contactEmail: 'ananya.mishra@example.com',
    contactPhone: '+91 21098 76543',
    surveyMailSent: true,
    surveyCompleted: false,
    npsScore: null,
    action: 'Send Reminder',
  },
  {
    contactName: 'Amit Khanna',
    contactEmail: 'amit.khanna@example.com',
    contactPhone: '+91 10987 65432',
    surveyMailSent: false,
    surveyCompleted: false,
    npsScore: null,
    action: 'Send Survey',
  },
  {
    contactName: 'Ishaan Sharma',
    contactEmail: 'ishaan.sharma@example.com',
    contactPhone: '+91 98765 43210',
    surveyMailSent: true,
    surveyCompleted: true,
    npsScore: 9,
    action: 'View Details',
  },
  {
    contactName: 'Meera Reddy',
    contactEmail: 'meera.reddy@example.com',
    contactPhone: '+91 87654 32109',
    surveyMailSent: true,
    surveyCompleted: false,
    npsScore: null,
    action: 'Send Reminder',
  },
  {
    contactName: 'Vikram Singh',
    contactEmail: 'vikram.singh@example.com',
    contactPhone: '+91 76543 21098',
    surveyMailSent: false,
    surveyCompleted: false,
    npsScore: null,
    action: 'Send Survey',
  },
  {
    contactName: 'Priya Joshi',
    contactEmail: 'priya.joshi@example.com',
    contactPhone: '+91 65432 10987',
    surveyMailSent: true,
    surveyCompleted: true,
    npsScore: 8,
    action: 'View Details',
  },
  {
    contactName: 'Raj Verma',
    contactEmail: 'raj.verma@example.com',
    contactPhone: '+91 54321 09876',
    surveyMailSent: true,
    surveyCompleted: false,
    npsScore: null,
    action: 'Send Reminder',
  },
  {
    contactName: 'Simran Kapoor',
    contactEmail: 'simran.kapoor@example.com',
    contactPhone: '+91 43210 98765',
    surveyMailSent: false,
    surveyCompleted: false,
    npsScore: null,
    action: 'Send Survey',
  },
];
