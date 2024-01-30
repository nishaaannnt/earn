import type { SkillMap } from '@/interface/skills';

import { Superteams } from './Superteam';

export interface MultiSelectOptions {
  value: string;
  label: string;
}

export const skillMap: SkillMap[] = [
  {
    mainskill: 'Growth',
    color: '#16A368',
  },
  {
    mainskill: 'Frontend',
    color: '#3E8BFF',
  },
  {
    mainskill: 'Backend',
    color: '#FF833E',
  },
  {
    mainskill: 'Blockchain',
    color: '#FF3EC9',
  },
  {
    mainskill: 'Design',
    color: '#7E51FF',
  },
  {
    mainskill: 'Content',
    color: '#5EA8BF',
  },
  {
    mainskill: 'Community',
    color: '#F5C723',
  },
  {
    mainskill: 'Mobile',
    color: '#7E51FF',
  },
  {
    mainskill: 'Other',
    color: '#64758B',
  },
];

export const IndustryList: MultiSelectOptions[] = [
  {
    label: 'DAOs',
    value: 'DAOs',
  },
  {
    label: 'DeFi',
    value: 'DeFi',
  },
  {
    label: 'Gaming',
    value: 'Gaming',
  },
  {
    label: 'Infrastructure',
    value: 'Infrastructure',
  },
  {
    label: 'NFTs',
    value: 'NFTs',
  },
  {
    label: 'Wallets and Payments',
    value: 'Wallets and Payments',
  },
  {
    value: 'Consumer dApps',
    label: 'Consumer dApps',
  },
];

export const tokenList = [
  {
    tokenName: 'USDC',
    tokenSymbol: 'USDC',
    mintAddress: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    address: 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/128x128/3408.png',
    decimals: 6,
  },
  {
    tokenName: 'Solana (SOL)',
    tokenSymbol: 'SOL',
    mintAddress: 'So11111111111111111111111111111111111111111',
    address: 'So11111111111111111111111111111111111111111',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/16116.png',
    decimals: 9,
    coingeckoSymbol: 'solana',
  },
  {
    tokenName: 'ISC',
    tokenSymbol: 'ISC',
    mintAddress: 'J9BcrQfX4p9D1bvLzRNCbMDv8f44a9LFdeqNE4Yk2WMD',
    address: 'J9BcrQfX4p9D1bvLzRNCbMDv8f44a9LFdeqNE4Yk2WMD',
    icon: 'https://res.cloudinary.com/dgvnuwspr/image/upload/v1683200072/sponsors/International%20Stable%20Currency.png',
    coingeckoSymbol: 'international-stable-currency',
  },
  {
    tokenName: 'USDT',
    tokenSymbol: 'USDT',
    mintAddress: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
    address: 'Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/825.png',
    decimals: 6,
    coingeckoSymbol: 'tether',
  },
  {
    tokenName: 'STEP',
    tokenSymbol: 'STEP',
    mintAddress: 'StepAscQoEioFxxWGnh2sLBDFp9d8rvKz2Yp39iDpyT',
    address: 'StepAscQoEioFxxWGnh2sLBDFp9d8rvKz2Yp39iDpyT',
    icon: 'https://assets.coingecko.com/coins/images/14988/small/step.png?1619274762',
    decimals: 6,
    coingeckoSymbol: 'step-finance',
  },
  {
    tokenName: 'mSOL',
    tokenSymbol: 'mSOL',
    mintAddress: 'mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So',
    address: 'mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11461.png',
    decimals: 9,
    coingeckoSymbol: 'marinade-staked-sol',
  },
  {
    tokenName: 'UXD Stablecoin (UXD)',
    tokenSymbol: 'UXD',
    mintAddress: '7kbnvuGBxxj8AG9qp8Scn56muWGaRaFqxg1FsRp3PaFT',
    address: '7kbnvuGBxxj8AG9qp8Scn56muWGaRaFqxg1FsRp3PaFT',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/17535.png',
    decimals: 6,
    coingeckoSymbol: 'uxd-stablecoin',
  },
  {
    tokenName: 'Raydium (RAY)',
    tokenSymbol: 'RAY',
    mintAddress: '4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R',
    address: '4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/8526.png',
    coingeckoSymbol: 'raydium',
  },
  {
    tokenName: 'Saber (SBR)',
    tokenSymbol: 'SBR',
    mintAddress: 'Saber2gLauYim4Mvftnrasomsv6NvAuncvMEZwcLpD1',
    address: 'Saber2gLauYim4Mvftnrasomsv6NvAuncvMEZwcLpD1',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11181.png',
    coingeckoSymbol: 'saber',
  },
  {
    tokenName: 'Solend (SLND)',
    tokenSymbol: 'SLND',
    mintAddress: 'SLNDpmoWTVADgEdndyvWzroNL7zSi1dF9PC3xHGtPwp',
    address: 'SLNDpmoWTVADgEdndyvWzroNL7zSi1dF9PC3xHGtPwp',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/13524.png',
    coingeckoSymbol: 'solend',
  },
  {
    tokenName: 'Coin98 (C98)',
    tokenSymbol: 'C98',
    mintAddress: 'C98A4nkJXhpVZNAZdHUA95RpTF3T4whtQubL3YobiUX9',
    address: 'C98A4nkJXhpVZNAZdHUA95RpTF3T4whtQubL3YobiUX9',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/10903.png',
    coingeckoSymbol: 'coin98',
  },
  {
    tokenName: 'Serum (SRM)',
    tokenSymbol: 'SRM',
    mintAddress: 'SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt',
    address: 'SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/6187.png',
    coingeckoSymbol: 'serum',
  },
  {
    tokenName: 'DUST Protocol (DUST)',
    tokenSymbol: 'DUST',
    mintAddress: 'DUSTawucrTsGU8hcqRdHDCbuYhCPADMLM2VcCb8VnFnQ',
    address: 'DUSTawucrTsGU8hcqRdHDCbuYhCPADMLM2VcCb8VnFnQ',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/18802.png',
    coingeckoSymbol: 'dust-protocol',
  },
  {
    tokenName: 'wrapped Solana (wSOL)',
    tokenSymbol: 'wSOL',
    mintAddress: 'So11111111111111111111111111111111111111112',
    address: 'So11111111111111111111111111111111111111112',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/16116.png',
    coingeckoSymbol: 'wrapped-solana',
  },
  {
    tokenName: 'Bonfida (FIDA)',
    tokenSymbol: 'FIDA',
    mintAddress: 'EchesyfXePKdLtoiZSL8pBe8Myagyy8ZRqsACNCFGnvp',
    address: 'EchesyfXePKdLtoiZSL8pBe8Myagyy8ZRqsACNCFGnvp',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7978.png',
    coingeckoSymbol: 'bonfida',
  },
  {
    tokenName: 'Orca (ORCA)',
    tokenSymbol: 'ORCA',
    mintAddress: 'orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE',
    address: 'orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE',
    icon: 'https://s2.coinmarketcap.com/static/img/coins/64x64/11165.png',
    coingeckoSymbol: 'orca',
  },
];
export const MainSkills: MultiSelectOptions[] = [
  {
    label: 'Frontend',
    value: 'Frontend',
  },
  {
    label: 'Backend',
    value: 'Backend',
  },
  {
    label: 'Blockchain',
    value: 'Blockchain',
  },
  {
    label: 'Mobile',
    value: 'Mobile',
  },
  {
    label: 'Design',
    value: 'Design',
  },
  {
    label: 'Community',
    value: 'Community',
  },
  {
    label: 'Growth',
    value: 'Growth',
  },
  {
    label: 'Content',
    value: 'Content',
  },
  {
    label: 'Other',
    value: 'Other',
  },
];

export const skillSubSkillMap = {
  Frontend: [
    {
      label: 'React',
      value: 'React',
    },
    {
      label: 'Angular',
      value: 'Angular',
    },
    {
      label: 'Vue',
      value: 'Vue',
    },
    {
      label: 'Redux',
      value: 'Redux',
    },
    {
      label: 'Other',
      value: 'Other',
    },
  ],
  Backend: [
    {
      label: 'Javascript',
      value: 'Javascript',
    },
    {
      label: 'PHP',
      value: 'PHP',
    },
    {
      label: 'Python',
      value: 'Python',
    },
    {
      label: 'Java',
      value: 'Java',
    },
    {
      label: 'C++',
      value: 'C++',
    },
    {
      label: 'C',
      value: 'C',
    },
    {
      label: 'Ruby',
      value: 'Ruby',
    },
    {
      label: 'Go',
      value: 'Go',
    },
    {
      label: 'MySQL',
      value: 'MySQL',
    },
    {
      label: 'Postgres',
      value: 'Postgres',
    },
    {
      label: 'MongoDB',
      value: 'MongoDB',
    },
    {
      label: 'Other',
      value: 'Other',
    },
  ],
  Blockchain: [
    {
      label: 'Rust',
      value: 'Rust',
    },
    {
      label: 'Solidity',
      value: 'Solidity',
    },
    {
      label: 'Move',
      value: 'Move',
    },
    {
      label: 'Other',
      value: 'Other',
    },
  ],
  Mobile: [
    {
      label: 'Android',
      value: 'Android',
    },
    {
      label: 'iOS',
      value: 'iOS',
    },
    {
      label: 'Flutter',
      value: 'Flutter',
    },
    {
      label: 'React Native',
      value: 'React Native',
    },
    {
      label: 'Other',
      value: 'Other',
    },
  ],
  Design: [
    {
      label: 'UI/UX Design',
      value: 'UI/UX Design',
    },
    {
      label: 'Graphic Design',
      value: 'Graphic Design',
    },
    {
      label: 'Illustration',
      value: 'Illustration',
    },
    {
      label: 'Game Design',
      value: 'Game Design',
    },
    {
      label: 'Presentation Design',
      value: 'Presentation Design',
    },
    {
      label: 'Other',
      value: 'Other',
    },
  ],
  Community: [
    {
      label: 'Community Manager',
      value: 'Community Manager',
    },
    {
      label: 'Discord Moderator',
      value: 'Discord Moderator',
    },
    {
      label: 'Other',
      value: 'Other',
    },
  ],
  Growth: [
    {
      label: 'Business Development',
      value: 'Business Development',
    },
    {
      label: 'Digital Marketing',
      value: 'Digital Marketing',
    },
    {
      label: 'Marketing',
      value: 'Marketing',
    },
    {
      label: 'Other',
      value: 'Other',
    },
  ],
  Content: [
    {
      label: 'Research',
      value: 'Research',
    },
    {
      label: 'Video',
      value: 'Video',
    },
    {
      label: 'Writing',
      value: 'Writing',
    },
    {
      label: 'Social Media',
      value: 'Social Media',
    },
    {
      label: 'Other',
      value: 'Other',
    },
  ],
  Other: [
    {
      label: 'Data Analytics',
      value: 'Data Analytics',
    },
    {
      label: 'Operations',
      value: 'Operations',
    },
  ],
};

export const PrizeList = ['first', 'second', 'third', 'fourth', 'fifth'];

export const CountryList: string[] = [
  'India',
  'Afghanistan',
  'Åland Islands',
  'Albania',
  'Algeria',
  'American Samoa',
  'Andorra',
  'Angola',
  'Anguilla',
  'Antarctica',
  'Antigua & Barbuda',
  'Argentina',
  'Armenia',
  'Aruba',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bermuda',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Bouvet Island',
  'Brazil',
  'British Indian Ocean Territory',
  'British Virgin Islands',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Carribean Netherlands',
  'Cayman Islands',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Christmas Island',
  'Cocos (Keeling) Islands',
  'Colombia',
  'Comoros',
  'Congo',
  'Cook Islands',
  'Costa Rica',
  'Croatia (Hrvatska)',
  'Cuba',
  'Curaçao',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Eswatini',
  'Ethiopia',
  'Falkland Islands (Malvinas)',
  'Faroe Islands',
  'Fiji',
  'Finland',
  'France',
  'French Guiana',
  'French Polynesia',
  'French Southern Territories',
  'Gabon',
  'Gambia',
  'Georgia',
  'Germany',
  'Ghana',
  'Gibraltar',
  'Greece',
  'Greenland',
  'Grenada',
  'Guadeloupe',
  'Guam',
  'Guatemala',
  'Guernsey',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Heard and Mc Donald Islands',
  'Honduras',
  'Hong Kong',
  'Hungary',
  'Iceland',
  'Indonesia',
  'Iran (Islamic Republic of)',
  'Iraq',
  'Ireland',
  'Isle of Man',
  'Israel',
  'Italy',
  'Ivory Coast',
  'Jamaica',
  'Japan',
  'Jersey',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  "Korea, Democratic People's Republic of",
  'Korea, Republic of',
  'Kosovo',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libyan Arab Jamahiriya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macau',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Martinique',
  'Mauritania',
  'Mauritius',
  'Mayotte',
  'Mexico',
  'Micronesia, Federated States of',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Montenegro',
  'Montserrat',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'Netherlands Antilles',
  'New Caledonia',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Niue',
  'Norfolk Island',
  'North Macedonia',
  'Northern Mariana Islands',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Palestinian Territories',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Pitcairn',
  'Poland',
  'Portugal',
  'Puerto Rico',
  'Qatar',
  'Reunion',
  'Romania',
  'Russian Federation',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent and the Grenadines',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Sint Maarten',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'South Georgia South Sandwich Islands',
  'South Sudan',
  'Spain',
  'Sri Lanka',
  'St. Barthélemy',
  'St. Helena',
  'St. Kitts & Nevis',
  'St. Lucia',
  'St. Martin',
  'St. Pierre and Miquelon',
  'St. Vincent & Grenadines',
  'Sudan',
  'Suriname',
  'Svalbard and Jan Mayen Islands',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syrian Arab Republic',
  'Taiwan',
  'Tajikistan',
  'Tanzania, United Republic of',
  'Thailand',
  'Timor-Leste',
  'Togo',
  'Tokelau',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Turks and Caicos Islands',
  'Tuvalu',
  'U.S. Outlying Islands',
  'U.S. Virgin Islands',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City State',
  'Venezuela',
  'Vietnam',
  'Virgin Islands (British)',
  'Virgin Islands (U.S.)',
  'Wallis and Futuna Islands',
  'Western Sahara',
  'Yemen',
  'Yugoslavia',
  'Zaire',
  'Zambia',
  'Zimbabwe',
];

const superteams = Superteams.map((team) => team.name);

export const CommunityList: string[] = [
  ...superteams,
  'SuperWomenDao',
  'LamportDAO',
  "Grape / Dean's List",
  'DeveloperDAO',
  'Metacamp',
  '10K Designers',
  'Other',
];

export const web3Exp = [
  'New to crypto',
  'Occasionally contributing',
  'Contributing regularly',
];

export const workExp = [
  '0 Years',
  '<2 Years',
  '2 to 5 Years',
  '5 to 9 Years',
  '>9 Years',
];
export const workType = [
  'Not looking for Work',
  'Freelance',
  'Fulltime',
  'Internship',
];
