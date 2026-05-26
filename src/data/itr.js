export const itrTypes = [
  {
    id: 'ITR 1',
    title: 'Salaried, pension, one house property',
    price: '₹999',
    accent: 'blue',
    summary: 'Best for resident individuals with salary, pension, one house property and income from other sources.',
    suitableFor: [
      'Salary or pension income',
      'One house property',
      'Income from other sources',
      'Agricultural income up to applicable limits',
    ],
    notFor: ['Capital gains', 'Business income', 'Foreign assets or foreign income', 'More than one house property'],
    documents: ['PAN and Aadhaar', 'Form 16', 'Form 26AS and AIS', 'Bank interest certificates', 'Home loan interest certificate, if applicable'],
  },
  {
    id: 'ITR 2',
    title: 'Capital gains, two or more house properties',
    price: '₹999',
    accent: 'blue',
    summary: 'For individuals and HUFs without business income but with capital gains, multiple properties or foreign assets.',
    suitableFor: [
      'Capital gains from shares, mutual funds or property',
      'Two or more house properties',
      'Foreign assets or foreign income',
      'Non-resident or RNOR cases',
    ],
    notFor: ['Business or professional income', 'Presumptive taxation income'],
    documents: ['PAN and Aadhaar', 'Form 16, if salaried', 'Capital gains statements', 'Property rent and loan details', 'Foreign asset details, if applicable'],
  },
  {
    id: 'ITR 3',
    title: 'Business or profession income',
    price: '₹1499',
    accent: 'green',
    summary: 'For individuals and HUFs earning income from business or profession, including partners in firms.',
    suitableFor: [
      'Proprietorship business income',
      'Professional income',
      'Partner remuneration or interest',
      'Capital gains and other income along with business income',
    ],
    notFor: ['Pure salary cases without business income', 'Presumptive taxation-only cases eligible for ITR 4'],
    documents: ['PAN and Aadhaar', 'Books summary or P&L details', 'Balance sheet details, if maintained', 'Bank statements', 'GST data, if applicable'],
  },
  {
    id: 'ITR 4',
    title: 'Presumptive taxation',
    price: '₹1499',
    accent: 'green',
    summary: 'For eligible resident individuals, HUFs and firms using presumptive taxation sections.',
    suitableFor: [
      'Eligible small businesses under presumptive taxation',
      'Professionals using presumptive scheme',
      'Freelancers and consultants meeting eligibility',
      'Small traders with simplified income declaration',
    ],
    notFor: ['Capital gains', 'Foreign assets', 'More than one house property', 'Director in a company or unlisted shares'],
    documents: ['PAN and Aadhaar', 'Gross receipts summary', 'Bank statements', 'GST returns, if applicable', 'Expense notes for review'],
  },
];

export const itrFaqs = [
  {
    question: 'Which ITR form should I file?',
    answer:
      'The right form depends on your income sources. Salary-only cases usually fit ITR 1, capital gains and multiple property cases use ITR 2, business income uses ITR 3, and eligible presumptive taxation cases use ITR 4.',
  },
  {
    question: 'Can Expert Filings help if I have capital gains?',
    answer:
      'Yes. Share, mutual fund, property and other capital gains can be reviewed and filed with the correct schedules, provided the transaction statements are available.',
  },
  {
    question: 'What happens if AIS and Form 26AS do not match?',
    answer:
      'We review the mismatch before filing and guide you on the supporting documents or corrections needed so the return is filed with a clear position.',
  },
  {
    question: 'Do I need to visit your office?',
    answer:
      'Most filings can be completed remotely through WhatsApp and secure document sharing. Office support is available for clients in Eluru, Vijayawada and Hyderabad.',
  },
  {
    question: 'How long does ITR filing take?',
    answer:
      'Simple salaried cases can often be reviewed quickly once all documents are available. Business, capital gains or mismatch cases may take longer depending on complexity.',
  },
];

export const itrProcess = [
  'Share documents',
  'Expert review',
  'Tax computation',
  'Return filing',
  'Confirmation',
];
