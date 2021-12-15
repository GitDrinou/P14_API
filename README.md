# Project #14 - HRNET API

This codebase contains the code needed to run the backend for HRNet application.

## Prerequisites

HRNet uses the following tech stack:

- [NodeJS (**version 16.13.0**)](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version
```

### Instructions

1. Fork this repo
1. Clone the repo onto your computer
1. Open a terminal window in the cloned project
1. Run the following commands:

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```

Your server should now be running at http://locahost:3001 and you will now have states, departments and user in your MongoDB database!

## Populated Database Data

Once you run the `populate-db` script, you should have :

###  One admin user

- First Name: `Admin`,
- Last Name: `HRNet`,
- Email: `admin@hrnet.com`,
- Password: `password789`

###  59 States

- name: `Alabama`, abbreviation: `AL`,
- name: `Alaska`, abbreviation: `AK`,
- name: `American Samoa`, abbreviation: `AS`,
- name: `Arizona`, abbreviation: `AZ`,
- name: `Arkansas`, abbreviation: `AR`,
- name: `California`, abbreviation: `CA`,
- name: `Colorado`, abbreviation: `CO`,
- name: `Connecticut`, abbreviation: `CT`,
- name: `Delaware`, abbreviation: `DE`,
- name: `District Of Columbia`, abbreviation: `DC`,
- name: `Federated States Of Micronesia`, abbreviation: `FM`,
- name: `Florida`, abbreviation: `FL`,
- name: `Georgia`, abbreviation: `GA`,
- name: `Guam`, abbreviation: `GU`,
- name: `Hawaii`, abbreviation: `HI`,
- name: `Idaho`, abbreviation: `ID`,
- name: `Illinois`, abbreviation: `IL`,
- name: `Indiana`, abbreviation: `IN`,
- name: `Iowa`, abbreviation: `IA`,
- name: `Kansas`, abbreviation: `KS`,
- name: `Kentucky`, abbreviation: `KY`,
- name: `Louisiana`, abbreviation: `LA`,
- name: `Maine`, abbreviation: `ME`,
- name: `Marshall Islands`, abbreviation: `MH`,
- name: `Maryland`, abbreviation: `MD`,
- name: `Massachusetts`, abbreviation: `MA`,
- name: `Michigan`, abbreviation: `MI`,
- name: `Minnesota`, abbreviation: `MN`,
- name: `Mississippi`, abbreviation: `MS`,
- name: `Missouri`, abbreviation: `MO`,
- name: `Montana`, abbreviation: `MT`,
- name: `Nebraska`, abbreviation: `NE`,
- name: `Nevada`, abbreviation: `NV`,
- name: `New Hampshire`, abbreviation: `NH`,
- name: `New Jersey`, abbreviation: `NJ`,
- name: `New Mexico`, abbreviation: `NM`,
- name: `New York`, abbreviation: `NY`,
- name: `North Carolina`, abbreviation: `NC`,
- name: `North Dakota`, abbreviation: `ND`,
- name: `Northern Mariana Islands`, abbreviation: `MP`,
- name: `Ohio`, abbreviation: `OH`,
- name: `Oklahoma`, abbreviation: `OK`,
- name: `Oregon`, abbreviation: `OR`,
- name: `Palau`, abbreviation: `PW`,
- name: `Pennsylvania`, abbreviation: `PA`,
- name: `Puerto Rico`, abbreviation: `PR`,
- name: `Rhode Island`, abbreviation: `RI`,
- name: `South Carolina`, abbreviation: `SC`,
- name: `South Dakota`, abbreviation: `SD`,
- name: `Tennessee`, abbreviation: `TN`,
- name: `Texas`, abbreviation: `TX`,
- name: Ut`ah, abbreviation: `UT`,
- name: `Vermont`, abbreviation: `VT`,
- name: `Virgin Islands`, abbreviation: `VI`,
- name: `Virginia`, abbreviation: `VA`,
- name: `Washington`, abbreviation: `WA`,
- name: `West Virginia`, abbreviation: `WV`,
- name: `Wisconsin`, abbreviation: `WI`,
- name: `Wyoming`, abbreviation: `WY`

###  5 Departments

- name: `Sales`,
- name: `Marketing`,
- name: `Engineering`,
- name: `Human Ressources`,
-name: `Legal`