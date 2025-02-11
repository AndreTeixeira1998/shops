import { LanguageCode } from '@vendure/common/lib/generated-types';
import { InitialData } from '@vendure/core';

export const initialData: InitialData = {
  defaultLanguage: LanguageCode.en,
  defaultZone: 'EU',
  taxRates: [],
  shippingMethods: [],
  paymentMethods: [],
  collections: [],
  countries: [
    { name: 'Afghanistan', code: 'AF', zone: 'Asia' },
    { name: 'Åland Islands', code: 'AX', zone: 'Europe' },
    { name: 'Albania', code: 'AL', zone: 'Europe' },
    { name: 'Algeria', code: 'DZ', zone: 'Africa' },
    { name: 'American Samoa', code: 'AS', zone: 'Oceania' },
    { name: 'Andorra', code: 'AD', zone: 'Europe' },
    { name: 'Angola', code: 'AO', zone: 'Africa' },
    { name: 'Anguilla', code: 'AI', zone: 'Americas' },
    { name: 'Antigua and Barbuda', code: 'AG', zone: 'Americas' },
    { name: 'Argentina', code: 'AR', zone: 'Americas' },
    { name: 'Armenia', code: 'AM', zone: 'Asia' },
    { name: 'Aruba', code: 'AW', zone: 'Americas' },
    { name: 'Australia', code: 'AU', zone: 'Oceania' },
    { name: 'Austria', code: 'AT', zone: 'EU' },
    { name: 'Azerbaijan', code: 'AZ', zone: 'Asia' },
    { name: 'Bahamas', code: 'BS', zone: 'Americas' },
    { name: 'Bahrain', code: 'BH', zone: 'Asia' },
    { name: 'Bangladesh', code: 'BD', zone: 'Asia' },
    { name: 'Barbados', code: 'BB', zone: 'Americas' },
    { name: 'Belarus', code: 'BY', zone: 'Europe' },
    // { name: 'België', code: 'BE', zone: 'EU' },
    { name: 'Belize', code: 'BZ', zone: 'Americas' },
    { name: 'Benin', code: 'BJ', zone: 'Africa' },
    { name: 'Bermuda', code: 'BM', zone: 'Americas' },
    { name: 'Bhutan', code: 'BT', zone: 'Asia' },
    { name: 'Bolivia (Plurinational State of)', code: 'BO', zone: 'Americas' },
    { name: 'Bonaire, Sint Eustatius and Saba', code: 'BQ', zone: 'Americas' },
    { name: 'Bosnia and Herzegovina', code: 'BA', zone: 'Europe' },
    { name: 'Botswana', code: 'BW', zone: 'Africa' },
    { name: 'Bouvet Island', code: 'BV', zone: 'Americas' },
    { name: 'Brazil', code: 'BR', zone: 'Americas' },
    { name: 'British Indian Ocean Territory', code: 'IO', zone: 'Africa' },
    { name: 'Brunei Darussalam', code: 'BN', zone: 'Asia' },
    { name: 'Bulgaria', code: 'BG', zone: 'EU' },
    { name: 'Burkina Faso', code: 'BF', zone: 'Africa' },
    { name: 'Burundi', code: 'BI', zone: 'Africa' },
    { name: 'Cabo Verde', code: 'CV', zone: 'Africa' },
    { name: 'Cambodia', code: 'KH', zone: 'Asia' },
    { name: 'Cameroon', code: 'CM', zone: 'Africa' },
    { name: 'Canada', code: 'CA', zone: 'Americas' },
    { name: 'Cayman Islands', code: 'KY', zone: 'Americas' },
    { name: 'Central African Republic', code: 'CF', zone: 'Africa' },
    { name: 'Chad', code: 'TD', zone: 'Africa' },
    { name: 'Chile', code: 'CL', zone: 'Americas' },
    { name: 'China', code: 'CN', zone: 'Asia' },
    { name: 'Christmas Island', code: 'CX', zone: 'Oceania' },
    { name: 'Cocos (Keeling) Islands', code: 'CC', zone: 'Oceania' },
    { name: 'Colombia', code: 'CO', zone: 'Americas' },
    { name: 'Comoros', code: 'KM', zone: 'Africa' },
    { name: 'Congo', code: 'CG', zone: 'Africa' },
    { name: 'Congo (Democratic Republic of the)', code: 'CD', zone: 'Africa' },
    { name: 'Cook Islands', code: 'CK', zone: 'Oceania' },
    { name: 'Costa Rica', code: 'CR', zone: 'Americas' },
    { name: "Côte d'Ivoire", code: 'CI', zone: 'Africa' },
    { name: 'Croatia', code: 'HR', zone: 'EU' },
    { name: 'Cuba', code: 'CU', zone: 'Americas' },
    { name: 'Curaçao', code: 'CW', zone: 'Americas' },
    { name: 'Cyprus', code: 'CY', zone: 'EU' },
    { name: 'Czechia', code: 'CZ', zone: 'EU' },
    { name: 'Denmark', code: 'DK', zone: 'EU' },
    { name: 'Djibouti', code: 'DJ', zone: 'Africa' },
    { name: 'Dominica', code: 'DM', zone: 'Americas' },
    { name: 'Dominican Republic', code: 'DO', zone: 'Americas' },
    { name: 'Ecuador', code: 'EC', zone: 'Americas' },
    { name: 'Egypt', code: 'EG', zone: 'Africa' },
    { name: 'El Salvador', code: 'SV', zone: 'Americas' },
    { name: 'Equatorial Guinea', code: 'GQ', zone: 'Africa' },
    { name: 'Eritrea', code: 'ER', zone: 'Africa' },
    { name: 'Estonia', code: 'EE', zone: 'EU' },
    { name: 'Eswatini', code: 'SZ', zone: 'Africa' },
    { name: 'Ethiopia', code: 'ET', zone: 'Africa' },
    { name: 'Falkland Islands (Malvinas)', code: 'FK', zone: 'Americas' },
    { name: 'Faroe Islands', code: 'FO', zone: 'Europe' },
    { name: 'Fiji', code: 'FJ', zone: 'Oceania' },
    { name: 'Finland', code: 'FI', zone: 'EU' },
    { name: 'France', code: 'FR', zone: 'EU' },
    { name: 'French Guiana', code: 'GF', zone: 'Americas' },
    { name: 'French Polynesia', code: 'PF', zone: 'Oceania' },
    { name: 'French Southern Territories', code: 'TF', zone: 'Africa' },
    { name: 'Gabon', code: 'GA', zone: 'Africa' },
    { name: 'Gambia', code: 'GM', zone: 'Africa' },
    { name: 'Georgia', code: 'GE', zone: 'Asia' },
    // { name: 'Germany', code: 'DE', zone: 'EU' },
    { name: 'Ghana', code: 'GH', zone: 'Africa' },
    { name: 'Gibraltar', code: 'GI', zone: 'Europe' },
    { name: 'Greece', code: 'GR', zone: 'EU' },
    { name: 'Greenland', code: 'GL', zone: 'Americas' },
    { name: 'Grenada', code: 'GD', zone: 'Americas' },
    { name: 'Guadeloupe', code: 'GP', zone: 'Americas' },
    { name: 'Guam', code: 'GU', zone: 'Oceania' },
    { name: 'Guatemala', code: 'GT', zone: 'Americas' },
    { name: 'Guernsey', code: 'GG', zone: 'Europe' },
    { name: 'Guinea', code: 'GN', zone: 'Africa' },
    { name: 'Guinea-Bissau', code: 'GW', zone: 'Africa' },
    { name: 'Guyana', code: 'GY', zone: 'Americas' },
    { name: 'Haiti', code: 'HT', zone: 'Americas' },
    { name: 'Heard Island and McDonald Islands', code: 'HM', zone: 'Oceania' },
    { name: 'Holy See', code: 'VA', zone: 'Europe' },
    { name: 'Honduras', code: 'HN', zone: 'Americas' },
    { name: 'Hong Kong', code: 'HK', zone: 'Asia' },
    { name: 'Hungary', code: 'HU', zone: 'EU' },
    { name: 'Iceland', code: 'IS', zone: 'Europe' },
    { name: 'India', code: 'IN', zone: 'Asia' },
    { name: 'Indonesia', code: 'ID', zone: 'Asia' },
    { name: 'Iran (Islamic Republic of)', code: 'IR', zone: 'Asia' },
    { name: 'Iraq', code: 'IQ', zone: 'Asia' },
    { name: 'Ireland', code: 'IE', zone: 'EU' },
    { name: 'Isle of Man', code: 'IM', zone: 'Europe' },
    { name: 'Israel', code: 'IL', zone: 'Asia' },
    { name: 'Italy', code: 'IT', zone: 'EU' },
    { name: 'Jamaica', code: 'JM', zone: 'Americas' },
    { name: 'Japan', code: 'JP', zone: 'Asia' },
    { name: 'Jersey', code: 'JE', zone: 'Europe' },
    { name: 'Jordan', code: 'JO', zone: 'Asia' },
    { name: 'Kazakhstan', code: 'KZ', zone: 'Asia' },
    { name: 'Kenya', code: 'KE', zone: 'Africa' },
    { name: 'Kiribati', code: 'KI', zone: 'Oceania' },
    {
      name: "Korea (Democratic People's Republic of)",
      code: 'KP',
      zone: 'Asia',
    },
    { name: 'Korea (Republic of)', code: 'KR', zone: 'Asia' },
    { name: 'Kuwait', code: 'KW', zone: 'Asia' },
    { name: 'Kyrgyzstan', code: 'KG', zone: 'Asia' },
    { name: "Lao People's Democratic Republic", code: 'LA', zone: 'Asia' },
    { name: 'Latvia', code: 'LV', zone: 'EU' },
    { name: 'Lebanon', code: 'LB', zone: 'Asia' },
    { name: 'Lesotho', code: 'LS', zone: 'Africa' },
    { name: 'Liberia', code: 'LR', zone: 'Africa' },
    { name: 'Libya', code: 'LY', zone: 'Africa' },
    { name: 'Liechtenstein', code: 'LI', zone: 'Europe' },
    { name: 'Lithuania', code: 'LT', zone: 'EU' },
    { name: 'Luxembourg', code: 'LU', zone: 'EU' },
    { name: 'Macao', code: 'MO', zone: 'Asia' },
    {
      name: 'Macedonia (the former Yugoslav Republic of)',
      code: 'MK',
      zone: 'Europe',
    },
    { name: 'Madagascar', code: 'MG', zone: 'Africa' },
    { name: 'Malawi', code: 'MW', zone: 'Africa' },
    { name: 'Malaysia', code: 'MY', zone: 'Asia' },
    { name: 'Maldives', code: 'MV', zone: 'Asia' },
    { name: 'Mali', code: 'ML', zone: 'Africa' },
    { name: 'Malta', code: 'MT', zone: 'EU' },
    { name: 'Marshall Islands', code: 'MH', zone: 'Oceania' },
    { name: 'Martinique', code: 'MQ', zone: 'Americas' },
    { name: 'Mauritania', code: 'MR', zone: 'Africa' },
    { name: 'Mauritius', code: 'MU', zone: 'Africa' },
    { name: 'Mayotte', code: 'YT', zone: 'Africa' },
    { name: 'Mexico', code: 'MX', zone: 'Americas' },
    { name: 'Micronesia (Federated States of)', code: 'FM', zone: 'Oceania' },
    { name: 'Moldova (Republic of)', code: 'MD', zone: 'Europe' },
    { name: 'Monaco', code: 'MC', zone: 'Europe' },
    { name: 'Mongolia', code: 'MN', zone: 'Asia' },
    { name: 'Montenegro', code: 'ME', zone: 'Europe' },
    { name: 'Montserrat', code: 'MS', zone: 'Americas' },
    { name: 'Morocco', code: 'MA', zone: 'Africa' },
    { name: 'Mozambique', code: 'MZ', zone: 'Africa' },
    { name: 'Myanmar', code: 'MM', zone: 'Asia' },
    { name: 'Namibia', code: 'NA', zone: 'Africa' },
    { name: 'Nauru', code: 'NR', zone: 'Oceania' },
    { name: 'Nepal', code: 'NP', zone: 'Asia' },
    //    { name: 'Nederland', code: 'NL', zone: 'EU' },
    { name: 'New Caledonia', code: 'NC', zone: 'Oceania' },
    { name: 'New Zealand', code: 'NZ', zone: 'Oceania' },
    { name: 'Nicaragua', code: 'NI', zone: 'Americas' },
    { name: 'Niger', code: 'NE', zone: 'Africa' },
    { name: 'Nigeria', code: 'NG', zone: 'Africa' },
    { name: 'Niue', code: 'NU', zone: 'Oceania' },
    { name: 'Norfolk Island', code: 'NF', zone: 'Oceania' },
    { name: 'Northern Mariana Islands', code: 'MP', zone: 'Oceania' },
    { name: 'Norway', code: 'NO', zone: 'Europe' },
    { name: 'Oman', code: 'OM', zone: 'Asia' },
    { name: 'Pakistan', code: 'PK', zone: 'Asia' },
    { name: 'Palau', code: 'PW', zone: 'Oceania' },
    { name: 'Palestine, State of', code: 'PS', zone: 'Asia' },
    { name: 'Panama', code: 'PA', zone: 'Americas' },
    { name: 'Papua New Guinea', code: 'PG', zone: 'Oceania' },
    { name: 'Paraguay', code: 'PY', zone: 'Americas' },
    { name: 'Peru', code: 'PE', zone: 'Americas' },
    { name: 'Philippines', code: 'PH', zone: 'Asia' },
    { name: 'Pitcairn', code: 'PN', zone: 'Oceania' },
    { name: 'Poland', code: 'PL', zone: 'EU' },
    { name: 'Portugal', code: 'PT', zone: 'EU' },
    { name: 'Puerto Rico', code: 'PR', zone: 'Americas' },
    { name: 'Qatar', code: 'QA', zone: 'Asia' },
    { name: 'Réunion', code: 'RE', zone: 'Africa' },
    { name: 'Romania', code: 'RO', zone: 'EU' },
    { name: 'Russian Federation', code: 'RU', zone: 'Europe' },
    { name: 'Rwanda', code: 'RW', zone: 'Africa' },
    { name: 'Saint Barthélemy', code: 'BL', zone: 'Americas' },
    {
      name: 'Saint Helena, Ascension and Tristan da Cunha',
      code: 'SH',
      zone: 'Africa',
    },
    { name: 'Saint Kitts and Nevis', code: 'KN', zone: 'Americas' },
    { name: 'Saint Lucia', code: 'LC', zone: 'Americas' },
    { name: 'Saint Martin (French part)', code: 'MF', zone: 'Americas' },
    { name: 'Saint Pierre and Miquelon', code: 'PM', zone: 'Americas' },
    { name: 'Saint Vincent and the Grenadines', code: 'VC', zone: 'Americas' },
    { name: 'Samoa', code: 'WS', zone: 'Oceania' },
    { name: 'San Marino', code: 'SM', zone: 'Europe' },
    { name: 'Sao Tome and Principe', code: 'ST', zone: 'Africa' },
    { name: 'Saudi Arabia', code: 'SA', zone: 'Asia' },
    { name: 'Senegal', code: 'SN', zone: 'Africa' },
    { name: 'Serbia', code: 'RS', zone: 'Europe' },
    { name: 'Seychelles', code: 'SC', zone: 'Africa' },
    { name: 'Sierra Leone', code: 'SL', zone: 'Africa' },
    { name: 'Singapore', code: 'SG', zone: 'Asia' },
    { name: 'Sint Maarten (Dutch part)', code: 'SX', zone: 'Americas' },
    { name: 'Slovakia', code: 'SK', zone: 'EU' },
    { name: 'Slovenia', code: 'SI', zone: 'EU' },
    { name: 'Solomon Islands', code: 'SB', zone: 'Oceania' },
    { name: 'Somalia', code: 'SO', zone: 'Africa' },
    { name: 'South Africa', code: 'ZA', zone: 'Africa' },
    {
      name: 'South Georgia and the South Sandwich Islands',
      code: 'GS',
      zone: 'Americas',
    },
    { name: 'South Sudan', code: 'SS', zone: 'Africa' },
    { name: 'Spain', code: 'ES', zone: 'EU' },
    { name: 'Sri Lanka', code: 'LK', zone: 'Asia' },
    { name: 'Sudan', code: 'SD', zone: 'Africa' },
    { name: 'Suriname', code: 'SR', zone: 'Americas' },
    { name: 'Svalbard and Jan Mayen', code: 'SJ', zone: 'Europe' },
    { name: 'Sweden', code: 'SE', zone: 'EU' },
    { name: 'Switzerland', code: 'CH', zone: 'Europe' },
    { name: 'Syrian Arab Republic', code: 'SY', zone: 'Asia' },
    { name: 'Taiwan, Province of China', code: 'TW', zone: 'Asia' },
    { name: 'Tajikistan', code: 'TJ', zone: 'Asia' },
    { name: 'Tanzania, United Republic of', code: 'TZ', zone: 'Africa' },
    { name: 'Thailand', code: 'TH', zone: 'Asia' },
    { name: 'Timor-Leste', code: 'TL', zone: 'Asia' },
    { name: 'Togo', code: 'TG', zone: 'Africa' },
    { name: 'Tokelau', code: 'TK', zone: 'Oceania' },
    { name: 'Tonga', code: 'TO', zone: 'Oceania' },
    { name: 'Trinidad and Tobago', code: 'TT', zone: 'Americas' },
    { name: 'Tunisia', code: 'TN', zone: 'Africa' },
    { name: 'Turkey', code: 'TR', zone: 'Asia' },
    { name: 'Turkmenistan', code: 'TM', zone: 'Asia' },
    { name: 'Turks and Caicos Islands', code: 'TC', zone: 'Americas' },
    { name: 'Tuvalu', code: 'TV', zone: 'Oceania' },
    { name: 'Uganda', code: 'UG', zone: 'Africa' },
    { name: 'Ukraine', code: 'UA', zone: 'Europe' },
    { name: 'United Arab Emirates', code: 'AE', zone: 'Asia' },
    { name: 'United Kingdom', code: 'GB', zone: 'Europe' },
    { name: 'United States of America', code: 'US', zone: 'Americas' },
    {
      name: 'United States Minor Outlying Islands',
      code: 'UM',
      zone: 'Oceania',
    },
    { name: 'Uruguay', code: 'UY', zone: 'Americas' },
    { name: 'Uzbekistan', code: 'UZ', zone: 'Asia' },
    { name: 'Vanuatu', code: 'VU', zone: 'Oceania' },
    {
      name: 'Venezuela (Bolivarian Republic of)',
      code: 'VE',
      zone: 'Americas',
    },
    { name: 'Viet Nam', code: 'VN', zone: 'Asia' },
    { name: 'Virgin Islands (British)', code: 'VG', zone: 'Americas' },
    { name: 'Virgin Islands (U.S.)', code: 'VI', zone: 'Americas' },
    { name: 'Wallis and Futuna', code: 'WF', zone: 'Oceania' },
    { name: 'Western Sahara', code: 'EH', zone: 'Africa' },
    { name: 'Yemen', code: 'YE', zone: 'Asia' },
    { name: 'Zambia', code: 'ZM', zone: 'Africa' },
    { name: 'Zimbabwe', code: 'ZW', zone: 'Africa' },
  ],
};
