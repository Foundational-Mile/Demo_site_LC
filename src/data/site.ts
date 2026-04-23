interface NavChildLink {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href: string;
  children?: NavChildLink[];
}

export const churchMeta = {
  name: 'Limitless Church',
  tagline: 'Encounter God. Love People. Find Purpose.',
  city: 'Nixa, MO',
  address: '400 Northview Rd Nixa, MO 65714',
  serviceTimes: [
    'Sundays at 8:00 AM',
    'Sundays at 9:30 AM',
    'Sundays at 11:00 AM',
    'Sundays at 12:30 PM',
    'First Wednesday at 7:00 PM'
  ],
  phone: '(417) 521-9806'
};

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about',
    children: [
      { label: 'About Overview', href: '/about' },
      { label: 'Our Values', href: '/about-values' },
      { label: 'The Essentials', href: '/about-essentials' }
    ]
  },
  { label: 'Visit', href: '/plan-your-visit' },
  { label: 'Messages', href: '/messages' },
  { label: 'Kids', href: '/kids' },
  { label: 'Events', href: '/events' },
  { label: 'Next Steps', href: '/next-steps' },
  { label: 'Care', href: '/care' },
  { label: 'Staff', href: '/staff' },
  { label: 'Give', href: '/give' }
];

export const footerLinks = {
  explore: [
    { label: 'First-Time Guide', href: '/plan-your-visit' },
    { label: 'About Limitless', href: '/about' },
    { label: 'Watch Messages', href: '/messages' },
    { label: 'Events', href: '/events' }
  ],
  connect: [
    { label: 'Next Steps', href: '/next-steps' },
    { label: 'Care + Prayer', href: '/care' },
    { label: 'Limitless Kids', href: '/kids' },
    { label: 'Staff', href: '/staff' }
  ],
  resources: [
    { label: 'Give Online', href: '/give' },
    { label: 'YouTube Channel', href: '/messages' }
  ]
};
