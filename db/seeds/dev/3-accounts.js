const accts = [
  {
    description: "GL FOR UNKNOWN ACCOUNTS",
    natural: "999999",
    moduleId: "1",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "1"]
  },
  {
    description: "Bank of America",
    natural: "110011",
    moduleId: "2",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "1"]
  },
  {
    description: "Wells Fargo",
    natural: "110012",
    moduleId: "2",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "3"]
  },
  {
    description: "Chase",
    natural: "110013",
    moduleId: "2",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "1"]
  },
  {
    description: "Money Market Account",
    natural: "110014",
    moduleId: "2",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "4"]
  },
  {
    description: "ACH In",
    natural: "110020",
    moduleId: "2",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "2"]
  },
  {
    description: "ACH Out",
    natural: "110030",
    moduleId: "2",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "1"]
  },
  {
    description: "Checks In",
    natural: "110040",
    moduleId: "2",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "5"]
  },
  {
    description: "Checks Out",
    natural: "110050",
    moduleId: "2",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "1"]
  },
  {
    description: "Wire In",
    natural: "110060",
    moduleId: "2",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "4"]
  },
  {
    description: "Wire Out",
    natural: "110070",
    moduleId: "2",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "5"]
  },
  {
    description: "A/R - TRADE",
    natural: "120010",
    moduleId: "3",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "5"]
  },
  {
    description: "A/R - RENT",
    natural: "120015",
    moduleId: "3",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "1"]
  },
  {
    description: "A/R - WIP",
    natural: "120016",
    moduleId: "3",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "2"]
  },
  {
    description: "A/R - ALLOWANCE FOR BAD DEBT",
    natural: "122510",
    moduleId: "3",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "3"]
  },
  {
    description: "A/R - DUE FROM EMPLOYEES",
    natural: "123210",
    moduleId: "3",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "2"]
  },
  {
    description: "A/R - OTHER",
    natural: "123510",
    moduleId: "3",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "1"]
  },
  {
    description: "A/R - EMPLOYEE PAYROLL",
    natural: "123810",
    moduleId: "3",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "4"]
  },
  {
    description: "A/R - EMPLOYEE PAYROLL-EXECUTIVE-",
    natural: "123811",
    moduleId: "3",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "4"]
  },
  {
    description: "I/C - DUE FROM EVOLUTION PAYROLL",
    natural: "127000",
    moduleId: "3",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "3"]
  },
  {
    description: "INTERNAL IC ACCOUNT",
    natural: "127100",
    moduleId: "3",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "1"]
  },
  {
    description: "IC A/R COMPASS",
    natural: "127125",
    moduleId: "3",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "4"]
  },
  {
    description: "IC A/R MANGROVE",
    natural: "127127",
    moduleId: "3",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "2"]
  },
  {
    description: "IC A/R - FORGENT CANADA",
    natural: "127150",
    moduleId: "3",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "2"]
  },
  {
    description: "IC-RESERVE CANADA PAYABLE",
    natural: "127156",
    moduleId: "3",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "5"]
  },
  {
    description: "IC - A/R - INDIA",
    natural: "127160",
    moduleId: "3",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "2"]
  },
  {
    description: "IC A/R Asure UK",
    natural: "127829",
    moduleId: "3",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "3"]
  },
  {
    description: "WIP - AUSTIN/DEPOT WIP",
    natural: "130510",
    moduleId: "4",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "5"]
  },
  {
    description: "INVENTORY - FINISHED GOODS",
    natural: "131510",
    moduleId: "4",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "3"]
  },
  {
    description: "INVENTORY - HAAS",
    natural: "131525",
    moduleId: "4",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "3"]
  },
  {
    description: "INVENTORY - OTHER",
    natural: "132570",
    moduleId: "4",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "3"]
  },
  {
    description: "INVENTORY - OTHER - AIRCLOCK",
    natural: "132571",
    moduleId: "4",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "2"]
  },
  {
    description: "INVENTORY RESERVES - FINISHED GOODS",
    natural: "133040",
    moduleId: "4",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "3"]
  },
  {
    description: "PREPAID EXPS - VENDOR",
    natural: "140010",
    moduleId: "5",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "1"]
  },
  {
    description: "PREPAID PURCHASE ORDERS",
    natural: "140015",
    moduleId: "5",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "3"]
  },
  {
    description: "PREPAID EXPS - INSUR",
    natural: "140030",
    moduleId: "5",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "4"]
  },
  {
    description: "PREPAID - DEPOSITS",
    natural: "140040",
    moduleId: "5",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "3"]
  },
  {
    description: "FIXED ASSET - COMPUTERS",
    natural: "155000",
    moduleId: "6",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "2"]
  },
  {
    description: "F/A CLEARING - COMPUTERS",
    natural: "155010",
    moduleId: "6",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "5"]
  },
  {
    description: "FIXED ASSET - SOFTWARE",
    natural: "155100",
    moduleId: "6",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "1"]
  },
  {
    description: "F/A CLEARING - SOFTWARE",
    natural: "155110",
    moduleId: "6",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "1"]
  },
  {
    description: "FIXED ASSETS - LEGIANT ACQUISITION",
    natural: "155180",
    moduleId: "6",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "2"]
  },
  {
    description: "FIXED ASSET - EQUIPMENT",
    natural: "155200",
    moduleId: "6",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "3"]
  },
  {
    description: "F/A CLEARING - EQUIPMENT",
    natural: "155210",
    moduleId: "6",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "3"]
  },
  {
    description: "FIXED ASSET - OFFICE EQUIPMENT",
    natural: "155300",
    moduleId: "6",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "2"]
  },
  {
    description: "FIXED ASSET - FURNITURE",
    natural: "155400",
    moduleId: "6",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "3"]
  },
  {
    description: "F/A CLEARING - FURNITURE",
    natural: "155410",
    moduleId: "6",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "4"]
  },
  {
    description: "FIXED ASSET - LEASEHOLD IMPROV",
    natural: "155500",
    moduleId: "6",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "2"]
  },
  {
    description: "F/A CLEARING - LEASEHOLD IMPROV",
    natural: "155510",
    moduleId: "6",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "3"]
  },
  {
    description: "FIXED ASSET - HAAS",
    natural: "155650",
    moduleId: "6",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "5"]
  },
  {
    description: "FIXED ASSET - CAPITAL LEASES",
    natural: "156000",
    moduleId: "6",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "4"]
  },
  {
    description: "FIXED ASSET - IN HOUSE ISE",
    natural: "157000",
    moduleId: "6",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "3"]
  },
  {
    description: "FIXED ASSET - FIELD ISE",
    natural: "157100",
    moduleId: "6",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "2"]
  },
  {
    description: "FIXED ASSET - TEST ISE",
    natural: "157200",
    moduleId: "6",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "2"]
  },
  {
    description: "ACCUM DEPREC - TOOLING",
    natural: "164000",
    moduleId: "6",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "3"]
  },
  {
    description: "ACCUM DEPREC - COMPUTERS",
    natural: "165000",
    moduleId: "6",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "3"]
  },
  {
    description: "ACCUM DEPREC - SOFTWARE",
    natural: "165100",
    moduleId: "6",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "2"]
  },
  {
    description: "ACCUM DEPREC - EQUIPMENT",
    natural: "165200",
    moduleId: "6",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "3"]
  },
  {
    description: "ACCUM DEPREC - OFFICE EQUIPMENT",
    natural: "165300",
    moduleId: "6",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "2"]
  },
  {
    description: "ACCUM DEPREC - FURNITURE",
    natural: "165400",
    moduleId: "6",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "5"]
  },
  {
    description: "ACCUM DEPREC - LEASEHOLD IMPROV",
    natural: "165500",
    moduleId: "6",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "3"]
  },
  {
    description: "ACCUM DEPREC - CAPITAL ASSET",
    natural: "166000",
    moduleId: "6",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "5"]
  },
  {
    description: "ACCUM DEPREC - ISE",
    natural: "167000",
    moduleId: "6",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "1"]
  },
  {
    description: "INVESTMENT IN SUB - UK",
    natural: "170300",
    moduleId: "7",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "4"]
  },
  {
    description: "INVESTMENT IN SUB - PAY SYSTEMS",
    natural: "170510",
    moduleId: "7",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "4"]
  },
  {
    description: "INVESTMENT IN SUB - SAVERS",
    natural: "170520",
    moduleId: "7",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "2"]
  },
  {
    description: "INVESTMENT IN SUB - TELEPAYROLL",
    natural: "170530",
    moduleId: "7",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "4"]
  },
  {
    description: "INVESTMENT IN SUB - INDIA",
    natural: "170550",
    moduleId: "7",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "1"]
  },
  {
    description: "INVESTMENT IN ISYSTEMS",
    natural: "170750",
    moduleId: "7",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "4"]
  },
  {
    description: "INVESTMENT IN COMPASS",
    natural: "170755",
    moduleId: "7",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "5"]
  },
  {
    description: "INVESTMENT IN ADS",
    natural: "170760",
    moduleId: "7",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "4"]
  },
  {
    description: "INVESTMENT IN SUB - PEOPLECUBE",
    natural: "170900",
    moduleId: "7",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "4"]
  },
  {
    description: "INVESTMENT IN SUB - WELLS FARGO PAYROLL",
    natural: "170901",
    moduleId: "7",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "1"]
  },
  {
    description: "INVESTMENT IN SUB - AUSTIN HR",
    natural: "170902",
    moduleId: "7",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "2"]
  },
  {
    description: "INVESTMENT IN SUB - OCCUPEYE",
    natural: "170903",
    moduleId: "7",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "5"]
  },
  {
    description: "INVESTMENT IN SUB - US PAYROLL",
    natural: "170904",
    moduleId: "7",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "2"]
  },
  {
    description: "INVESTMENT IN SUB - MOSAIC",
    natural: "170905",
    moduleId: "7",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "2"]
  },
  {
    description: "INVESTMENT IN SUBS - MANGROVE",
    natural: "170950",
    moduleId: "7",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "1"]
  },
  {
    description: "INVESTMENT IN CORPORATE PAYROLL, INC.",
    natural: "170960",
    moduleId: "7",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "4"]
  },
  {
    description: "INVESTMENT IN PAYROLL SPECIALTIES NW, INC.",
    natural: "170970",
    moduleId: "7",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "1"]
  },
  {
    description: "INVESTMENT IN PERSONNEL MANAGEMENT SYSTEMS, INC.",
    natural: "170980",
    moduleId: "7",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "2"]
  },
  {
    description: "Accumulated Amortization",
    natural: "172200",
    moduleId: "8",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "2"]
  },
  {
    description: "INTANGIBLE ASSETS - ACCUM AMORT OTHER",
    natural: "175025",
    moduleId: "8",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "5"]
  },
  {
    description: "GOODWILL",
    natural: "177000",
    moduleId: "8",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "5"]
  },
  {
    description: "INTANGIBLE ASSETS - IEMPLOYEE ACQUISITION",
    natural: "177001",
    moduleId: "8",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "2"]
  },
  {
    description: "INTANGIBLE ASSETS - FOTOPUNCH",
    natural: "177002",
    moduleId: "8",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "4"]
  },
  {
    description: "INTANGIBLE ASSETS - ROOMTAG",
    natural: "177003",
    moduleId: "8",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "2"]
  },
  {
    description: "INTANGIBLE ASSETS - LEGIANT",
    natural: "177008",
    moduleId: "8",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "2"]
  },
  {
    description: "INTANGIBLE ASSETS - PC",
    natural: "177009",
    moduleId: "8",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "4"]
  },
  {
    description: "INTANGIBLE ASSETS - LEGIANT ACCUM AMORT",
    natural: "177108",
    moduleId: "8",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "5"]
  },
  {
    description: "A/P - TRADE",
    natural: "211000",
    moduleId: "9",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "5"]
  },
  {
    description: "A/P - RBNI - RECD NOT INVOICED",
    natural: "212000",
    moduleId: "9",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "5"]
  },
  {
    description: "IC A/P - AUSTRALIA - SERVICE FEE",
    natural: "213200",
    moduleId: "9",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "1"]
  },
  {
    description: "IC A/P - INVENTORY",
    natural: "213300",
    moduleId: "9",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "4"]
  },
  {
    description: "IC A/P - INDIA",
    natural: "213402",
    moduleId: "9",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "3"]
  },
  {
    description: "IC - RESERVE INDIA PAYABLE",
    natural: "213403",
    moduleId: "9",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "4"]
  },
  {
    description: "A/P - OTHER",
    natural: "215100",
    moduleId: "9",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "3"]
  },
  {
    description: "A/P - CUSTOMER REFUNDS",
    natural: "215120",
    moduleId: "9",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "2"]
  },
  {
    description: "A/P - OTHER MISC",
    natural: "215130",
    moduleId: "9",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "1"]
  },
  {
    description: "A/P - CLEARING",
    natural: "215150",
    moduleId: "9",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "2"]
  },
  {
    description: "A/P - ACCRUED DIRECTORS FEES",
    natural: "215300",
    moduleId: "9",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "2"]
  },
  {
    description: "ACCRUED LIABILITY - PAYROLL",
    natural: "231100",
    moduleId: "10",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "5"]
  },
  {
    description: "ACCR PAY TAX",
    natural: "231200",
    moduleId: "10",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "4"]
  },
  {
    description: "ACCRUED LIABILITY - FIT PAYABLE",
    natural: "231210",
    moduleId: "10",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "1"]
  },
  {
    description: "ACCRUED LIABILTY - FICA EMPLOYEE",
    natural: "231220",
    moduleId: "10",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "5"]
  },
  {
    description: "ACCRUED LIABILITY - FICA EMPLOYER EXP",
    natural: "231230",
    moduleId: "10",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "2"]
  },
  {
    description: "MEDICARE",
    natural: "231240",
    moduleId: "10",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "2"]
  },
  {
    description: "STATE W/H",
    natural: "231250",
    moduleId: "10",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "1"]
  },
  {
    description: "ACCRUED LIABILITY - BONUSES",
    natural: "231500",
    moduleId: "10",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "4"]
  },
  {
    description: "ACCRUED LIABILITY - HEALTH",
    natural: "231600",
    moduleId: "10",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "5"]
  },
  {
    description: "PAYROLL GARNISHMENT-EXECUTIVE-",
    natural: "231650",
    moduleId: "10",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "4"]
  },
  {
    description: "401K EMPLOYEE DEDUCTION",
    natural: "231700",
    moduleId: "10",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "4"]
  },
  {
    description: "ACCRUED LIABILTY-FLEXIBLE SPENDING",
    natural: "231900",
    moduleId: "10",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "5"]
  },
  {
    description: "ACCRUED SEVERANCE",
    natural: "231950",
    moduleId: "10",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "3"]
  },
  {
    description: "ACCRUED LIABILITY-SUPPLEMENTAL LIFE INSURANCE",
    natural: "232000",
    moduleId: "10",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "5"]
  },
  {
    description: "ACCRUED LEGAL EXPS",
    natural: "232100",
    moduleId: "11",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "4"]
  },
  {
    description: "RETURN/REFUND LIABILITY",
    natural: "232222",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "3"]
  },
  {
    description: "ACCRUED AUDIT",
    natural: "232300",
    moduleId: "13",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "1"]
  },
  {
    description: "ACCRUED EXP - OTHER",
    natural: "232900",
    moduleId: "13",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "4"]
  },
  {
    description: "ACCRUED INTEREST PAYABLE",
    natural: "233100",
    moduleId: "14",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "4"]
  },
  {
    description: "LT - INTEREST PAYABLE",
    natural: "233105",
    moduleId: "14",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "3"]
  },
  {
    description: "FEDERAL INC TAX",
    natural: "235100",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "1"]
  },
  {
    description: "DEFERRED TAX LIABILITY",
    natural: "235125",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "1"]
  },
  {
    description: "TEXAS GROSS RECEIPTS TAX ACCRUAL",
    natural: "235150",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "3"]
  },
  {
    description: "STATE INC TAX",
    natural: "235200",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "5"]
  },
  {
    description: "PROPERTY AND OTHER TAXES",
    natural: "235250",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "3"]
  },
  {
    description: "STATE FRANCHISE TAX",
    natural: "235300",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "2"]
  },
  {
    description: "PROPERTY TAX-WILD BASIN",
    natural: "236100",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "3"]
  },
  {
    description: "PROPERTY TAX-OTHER",
    natural: "236300",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "5"]
  },
  {
    description: "USE TAX - CA",
    natural: "238040",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "4"]
  },
  {
    description: "USE TAX - MA",
    natural: "238180",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "5"]
  },
  {
    description: "USE TAX - MI",
    natural: "238210",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "3"]
  },
  {
    description: "USE TAX - TX",
    natural: "238390",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "2"]
  },
  {
    description: "SALES TAX - UNDEFINED",
    natural: "239000",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "1"]
  },
  {
    description: "SALES TAX - AL",
    natural: "239010",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "5"]
  },
  {
    description: "SALES TAX - AZ",
    natural: "239030",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "4"]
  },
  {
    description: "SALES TAX - CA",
    natural: "239040",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "4"]
  },
  {
    description: "SALES TAX - CT",
    natural: "239060",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "2"]
  },
  {
    description: "SALES TAX - DC",
    natural: "239070",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "1"]
  },
  {
    description: "SALES TAX - FL",
    natural: "239080",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "5"]
  },
  {
    description: "SALES TAX - IL",
    natural: "239130",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "5"]
  },
  {
    description: "SALES TAX - LA",
    natural: "239170",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "1"]
  },
  {
    description: "SALES TAX - MA",
    natural: "239180",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "3"]
  },
  {
    description: "SALES TAX - MD",
    natural: "239190",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "1"]
  },
  {
    description: "SALES TAX - ME",
    natural: "239200",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "5"]
  },
  {
    description: "SALES TAX - MI",
    natural: "239210",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "4"]
  },
  {
    description: "SALES TAX - MN",
    natural: "239220",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "2"]
  },
  {
    description: "SALES TAX - MO",
    natural: "239230",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "1"]
  },
  {
    description: "SALES TAX - MS",
    natural: "239240",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "3"]
  },
  {
    description: "SALES TAX - NH",
    natural: "239275",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "4"]
  },
  {
    description: "SALES TAX - NJ",
    natural: "239280",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "5"]
  },
  {
    description: "SALES TAX - NY",
    natural: "239310",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "3"]
  },
  {
    description: "SALES TAX - RI",
    natural: "239350",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "3"]
  },
  {
    description: "SALES TAX - TX",
    natural: "239390",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "3"]
  },
  {
    description: "SALES TAX - WA",
    natural: "239430",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "5"]
  },
  {
    description: "Sales Tax- Canada Toronto",
    natural: "239520",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "3"]
  },
  {
    description: "N/P - LEASE - CURRENT PORTION",
    natural: "240100",
    moduleId: "15",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "1"]
  },
  {
    description: "CAP LEASE-CURR-COACTIV",
    natural: "240101",
    moduleId: "15",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "2"]
  },
  {
    description: "CAP LEASE-CURR-IBM",
    natural: "240102",
    moduleId: "15",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "2"]
  },
  {
    description: "CAP LEASE-CURR-LEAF",
    natural: "240103",
    moduleId: "15",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "5"]
  },
  {
    description: "CAP LEASE-CURR-LONDON",
    natural: "240104",
    moduleId: "15",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "3"]
  },
  {
    description: "CAP LEASE-CURR-M2",
    natural: "240105",
    moduleId: "15",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "2"]
  },
  {
    description: "CAP LEASE-CURR-WESTERN",
    natural: "240106",
    moduleId: "15",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "2"]
  },
  {
    description: "CAP LEASE-CURR-DELL LAPTOPS",
    natural: "240107",
    moduleId: "15",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "5"]
  },
  {
    description: "N/P - ADI DEBT- CURRENT",
    natural: "240108",
    moduleId: "16",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "3"]
  },
  {
    description: "CAP LEASE-CURR-DIRECT CAPITAL",
    natural: "240109",
    moduleId: "15",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "1"]
  },
  {
    description: "CAP LEASE-CURR-VAR RESOURCES",
    natural: "240110",
    moduleId: "15",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "1"]
  },
  {
    description: "CAP LEASE-CURR-VAR RESOURCES#2",
    natural: "240111",
    moduleId: "15",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "1"]
  },
  {
    description: "CAP Lease Dell Contract 167",
    natural: "240112",
    moduleId: "15",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "4"]
  },
  {
    description: "Capital lease obligation - ST",
    natural: "240113",
    moduleId: "16",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "2"]
  },
  {
    description: "Capital lease obligation - LT",
    natural: "240114",
    moduleId: "16",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "1"]
  },
  {
    description: "N/P - LEASE - NON-CURRENT PORTION",
    natural: "240200",
    moduleId: "16",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "2"]
  },
  {
    description: "NOTES PAYABLE-WELLS FARGO",
    natural: "240213",
    moduleId: "16",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "1"]
  },
  {
    description: "iSystems Long Terrm Note Payable",
    natural: "240225",
    moduleId: "16",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "2"]
  },
  {
    description: "TelePayroll LT Note",
    natural: "240226",
    moduleId: "16",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "5"]
  },
  {
    description: "Savers LT Note",
    natural: "240228",
    moduleId: "16",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "3"]
  },
  {
    description: "Compass LT Note Payable",
    natural: "240230",
    moduleId: "16",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "3"]
  },
  {
    description: "ADS LT Note Payble",
    natural: "240235",
    moduleId: "16",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "4"]
  },
  {
    description: "N/P - ADI DEBT- CURRENT",
    natural: "240308",
    moduleId: "16",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "1"]
  },
  {
    description: "N/P--CURRENT",
    natural: "240309",
    moduleId: "16",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "3"]
  },
  {
    description: "iSystems Short Term Note Payable",
    natural: "240315",
    moduleId: "16",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "4"]
  },
  {
    description: "N/P - CPI Short Term",
    natural: "240320",
    moduleId: "16",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "4"]
  },
  {
    description: "N/P PMSI Short Term",
    natural: "240321",
    moduleId: "16",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "5"]
  },
  {
    description: "NP PSNW Short Term",
    natural: "240322",
    moduleId: "16",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "5"]
  },
  {
    description: "PaySystems ST Note",
    natural: "240327",
    moduleId: "16",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "5"]
  },
  {
    description: "Savers ST Note",
    natural: "240328",
    moduleId: "16",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "3"]
  },
  {
    description: "Compass Short Term Note Payable",
    natural: "240330",
    moduleId: "16",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "1"]
  },
  {
    description: "ADS ST Note Payable",
    natural: "240335",
    moduleId: "16",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "1"]
  },
  {
    description: "AUSTIN HR N/P SHORT-TERM",
    natural: "240345",
    moduleId: "16",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "3"]
  },
  {
    description: "Deffered revenue 3 -RESOURCE SCHEDULER",
    natural: "250100",
    moduleId: "17",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "4"]
  },
  {
    description: "DEFERRED REV - CUR-NETSIM",
    natural: "250101",
    moduleId: "17",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "5"]
  },
  {
    description: "DEF REV CURRENT NETSIM ONDEMAND",
    natural: "250102",
    moduleId: "17",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "1"]
  },
  {
    description: "DEF REV CURRENT NETSIM TRAINING",
    natural: "250105",
    moduleId: "17",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "1"]
  },
  {
    description: "DEF REV CURRENT IEMP TRAINING",
    natural: "250106",
    moduleId: "17",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "1"]
  },
  {
    description: "DEF REV CURRENT IEMP SOFTWARE",
    natural: "250107",
    moduleId: "17",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "1"]
  },
  {
    description: "DEF REV CURRENT SUBSCRIPTION",
    natural: "250108",
    moduleId: "17",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "1"]
  },
  {
    description: "DEF REV CURRENT PROF SVCS",
    natural: "250109",
    moduleId: "17",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "4"]
  },
  {
    description: "DEFERRED REV - TRANSFER TO CURRENT",
    natural: "250110",
    moduleId: "17",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "4"]
  },
  {
    description: "DEFERRED REV - CLEAR-NETSIM",
    natural: "250111",
    moduleId: "17",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "5"]
  },
  {
    description: "DEF REV CLEARING NETSIM ONDEMAND",
    natural: "250112",
    moduleId: "17",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "2"]
  },
  {
    description: "DEFFERED REVENUE-PENDING IEMP",
    natural: "250113",
    moduleId: "17",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "5"]
  },
  {
    description: "DEFFERED REVENUE-PENDING NETSIM",
    natural: "250114",
    moduleId: "17",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "5"]
  },
  {
    description: "DEF REV CLEARING NETSIM TRAINING",
    natural: "250115",
    moduleId: "17",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "4"]
  },
  {
    description: "DEF REV CLEARING IEMP SOFTWARE",
    natural: "250117",
    moduleId: "17",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "4"]
  },
  {
    description: "DEF REV CLEARING SUBSCRIPTION- -RESOURCE SCHEDULER",
    natural: "250118",
    moduleId: "17",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "2"]
  },
  {
    description: "DEF REV CLEARING PS OD",
    natural: "250119",
    moduleId: "17",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "5"]
  },
  {
    description: "DEFERRED REVENUE VSOE",
    natural: "250125",
    moduleId: "17",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "4"]
  },
  {
    description: "DEFERRED REVENUE ROOMTAG",
    natural: "250126",
    moduleId: "17",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "1"]
  },
  {
    description: "DEFERRED REVENUE FOTOPUNCH",
    natural: "250127",
    moduleId: "17",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "1"]
  },
  {
    description: "DEFERRED REVENUE - PROGRESS BILLINGS",
    natural: "250130",
    moduleId: "17",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "1"]
  },
  {
    description: "DEFERRED REVENUE LEGIANT PENDING BILLINGS",
    natural: "250150",
    moduleId: "17",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "3"]
  },
  {
    description: "CUST DEPOSITS - OTHER",
    natural: "250200",
    moduleId: "17",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "5"]
  },
  {
    description: "Debt Finance Cost",
    natural: "250250",
    moduleId: "14",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "3"]
  },
  {
    description: "Unapplied Cash",
    natural: "250275",
    moduleId: "3",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "2"]
  },
  {
    description: "DEF REV - LT SW MAINT",
    natural: "250400",
    moduleId: "17",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "5"]
  },
  {
    description: "C/S - COMMON STOCK",
    natural: "290100",
    moduleId: "18",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "5"]
  },
  {
    description: "INTERCOMPANY STOCK",
    natural: "291992",
    moduleId: "18",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "3"]
  },
  {
    description: "APIC - COMMON STOCK",
    natural: "294100",
    moduleId: "18",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "1"]
  },
  {
    description: "APIC - INTEL",
    natural: "294200",
    moduleId: "18",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "2"]
  },
  {
    description: "CS-ISSUANCE COST",
    natural: "294299",
    moduleId: "18",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "3"]
  },
  {
    description: "UNREALIZED GAIN/(LOSS)",
    natural: "294700",
    moduleId: "18",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "5"]
  },
  {
    description: "TREASURY STOCK",
    natural: "296100",
    moduleId: "18",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "1"]
  },
  {
    description: "CONTRIBUTED CAPITAL",
    natural: "296200",
    moduleId: "18",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "1"]
  },
  {
    description: "CS - ISSUANCE COST",
    natural: "298100",
    moduleId: "18",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "1"]
  },
  {
    description: "UNDEFINED - DISC OPS",
    natural: "298199",
    moduleId: "18",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "1"]
  },
  {
    description: "RE - PRIOR PERIODS",
    natural: "298200",
    moduleId: "18",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "2"]
  },
  {
    description: "RETAINED EARNINGS - 606 ADJUSTMENT",
    natural: "298222",
    moduleId: "18",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "3"]
  },
  {
    description: "RE - NETSIMPLICITY MERGE UP",
    natural: "298250",
    moduleId: "18",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "1"]
  },
  {
    description: "RE - ARTICULEARN MERGE UP",
    natural: "298251",
    moduleId: "18",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "5"]
  },
  {
    description: "RE - ONSCREEN MERGE UP",
    natural: "298252",
    moduleId: "18",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "5"]
  },
  {
    description: "RE - FRANCE MERGE UP",
    natural: "298253",
    moduleId: "18",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "4"]
  },
  {
    description: "RE - IEMPLOYEE MERGE UP",
    natural: "298254",
    moduleId: "18",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "4"]
  },
  {
    description: "RE - CLI MERGE UP",
    natural: "298255",
    moduleId: "18",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "3"]
  },
  {
    description: "RE - AUSTRALIA MERGE UP",
    natural: "298256",
    moduleId: "18",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "5"]
  },
  {
    description: "RE - GERMANY MERGE UP",
    natural: "298257",
    moduleId: "18",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "1"]
  },
  {
    description: "RE - MMUS MERGE UP",
    natural: "298258",
    moduleId: "18",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "2"]
  },
  {
    description: "RE - CUMULATIVE TRANSLATION",
    natural: "298300",
    moduleId: "18",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "2"]
  },
  {
    description: "RE - RESERVE CTA",
    natural: "298301",
    moduleId: "18",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "3"]
  },
  {
    description: "RE - ISSUING TREASURY STOCK",
    natural: "298400",
    moduleId: "18",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "3"]
  },
  {
    description: "PRODUCT REV TRADE",
    natural: "310003",
    moduleId: "19",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "5"]
  },
  {
    description: "PRODUCT RENTAL REVENUE",
    natural: "310005",
    moduleId: "19",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "3"]
  },
  {
    description: "SOFTWARE REV TRADE ROYALTIES",
    natural: "380001",
    moduleId: "19",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "5"]
  },
  {
    description: "SOFTWARE REV TRADE ON PREM",
    natural: "380003",
    moduleId: "19",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "2"]
  },
  {
    description: "SOFTWARE REV TRADEMRM OD-OTHER",
    natural: "380010",
    moduleId: "19",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "5"]
  },
  {
    description: "RESOURCE SCHEDULER",
    natural: "380050",
    moduleId: "19",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "2"]
  },
  {
    description: "SERVICE REVENUE - OVERAGES",
    natural: "380065",
    moduleId: "19",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "3"]
  },
  {
    description: "SERVICE REVENUE ON DEMAND",
    natural: "380075",
    moduleId: "19",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "1"]
  },
  {
    description: "SERVICE REVENUE - EXIT PACKAGE",
    natural: "380078",
    moduleId: "19",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "1"]
  },
  {
    description: "MSSW - SFTW CONTRACTS REV",
    natural: "380101",
    moduleId: "19",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "5"]
  },
  {
    description: "MSHW - CONTRACTS REVENUE",
    natural: "380104",
    moduleId: "19",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "3"]
  },
  {
    description: "SFTW DEPLOYMENT REV NETSIM-OTHER",
    natural: "380200",
    moduleId: "19",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "5"]
  },
  {
    description: "SFTW DEPLOYMENT REV ADI",
    natural: "380201",
    moduleId: "19",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "5"]
  },
  {
    description: "PASS THROUGH REVENUE",
    natural: "380300",
    moduleId: "19",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "2"]
  },
  {
    description: "PS - CONSULTING SERVICES",
    natural: "390330",
    moduleId: "19",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "3"]
  },
  {
    description: "HW PRODUCT COGS",
    natural: "410003",
    moduleId: "20",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "2"]
  },
  {
    description: "PRODUCT COGS IEMP",
    natural: "410004",
    moduleId: "20",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "3"]
  },
  {
    description: "SERVICE COGS ONDEMAND",
    natural: "470001",
    moduleId: "20",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "5"]
  },
  {
    description: "SOFTWARE COGS FOTOPUNCH",
    natural: "480001",
    moduleId: "20",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "4"]
  },
  {
    description: "Salary & Wages",
    natural: "510001",
    moduleId: "10",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "4"]
  },
  {
    description: "COMP & BENEFIT COMS",
    natural: "510002",
    moduleId: "10",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "1"]
  },
  {
    description: "COMP & BENEFIT BONUS ADI SUPPORT",
    natural: "510003",
    moduleId: "10",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "2"]
  },
  {
    description: "COMP & BENEFIT OPTIONS",
    natural: "510005",
    moduleId: "10",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "5"]
  },
  {
    description: "PAYROLL TAXES",
    natural: "510007",
    moduleId: "10",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "5"]
  },
  {
    description: "COMP & BENEFIT GROUP INS",
    natural: "510009",
    moduleId: "10",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "5"]
  },
  {
    description: "401K MATCHING",
    natural: "510012",
    moduleId: "10",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "4"]
  },
  {
    description: "COMP & BENEFIT PLACEMENT",
    natural: "510014",
    moduleId: "10",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "3"]
  },
  {
    description: "COMP & BENEFIT RELO COSTS SALES HEADQUARTERS",
    natural: "510015",
    moduleId: "10",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "2"]
  },
  {
    description: "COMP & BENEFIT TRAIN & SEMINAR",
    natural: "510016",
    moduleId: "10",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "1"]
  },
  {
    description: "COMP & BENEFIT - SEVERANCE",
    natural: "510017",
    moduleId: "10",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "1"]
  },
  {
    description: "COMP & BENEFIT COFFEE & MEETING",
    natural: "510018",
    moduleId: "10",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "3"]
  },
  {
    description: "COMP & BENEFIT DUES & SUBSCRIP",
    natural: "510019",
    moduleId: "10",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "3"]
  },
  {
    description: "COMP & BENEFIT AWARDS & TAX-HUMAN RESOURCES",
    natural: "510020",
    moduleId: "10",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "4"]
  },
  {
    description: "COMP & BENEFIT BUS MEETING EXP",
    natural: "510021",
    moduleId: "10",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "5"]
  },
  {
    description: "TRAVEL & ENT AIR ADI SUPPORT",
    natural: "520001",
    moduleId: "21",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "3"]
  },
  {
    description: "TRAVEL & ENT AUTO MILEAGE, TAXI",
    natural: "520002",
    moduleId: "21",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "5"]
  },
  {
    description: "Travel & Ent- -",
    natural: "520003",
    moduleId: "21",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "5"]
  },
  {
    description: "Travel & Ent-Field Service",
    natural: "520004",
    moduleId: "21",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "5"]
  },
  {
    description: "TRAVEL & ENT AUTO RENTAL",
    natural: "520005",
    moduleId: "21",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "1"]
  },
  {
    description: "TRAVEL & ENT OTHER--AF SAAS OPS",
    natural: "520006",
    moduleId: "21",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "5"]
  },
  {
    description: "MARKETING TRINKETS",
    natural: "530001",
    moduleId: "22",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "5"]
  },
  {
    description: "MARKETING ADVERTISING MARKETING",
    natural: "530002",
    moduleId: "22",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "1"]
  },
  {
    description: "MARKETING SALES TOOLS MARKETING",
    natural: "530003",
    moduleId: "22",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "3"]
  },
  {
    description: "MARKETING DESIGN SERVICES MARKETING",
    natural: "530004",
    moduleId: "22",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "5"]
  },
  {
    description: "MARKETING RESEARCH MARKETING",
    natural: "530006",
    moduleId: "22",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "5"]
  },
  {
    description: "Marketing Tradeshow Expense",
    natural: "530007",
    moduleId: "22",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "5"]
  },
  {
    description: "MARKETING PR",
    natural: "530008",
    moduleId: "22",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "5"]
  },
  {
    description: "MARKETING DEMAND/LEAD GENERATION MARKETING",
    natural: "530011",
    moduleId: "22",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "1"]
  },
  {
    description: "SUPPLIES - MISC",
    natural: "540011",
    moduleId: "23",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "4"]
  },
  {
    description: "DEPRECIATION FIXED ASSETS IEMP COGS",
    natural: "550003",
    moduleId: "6",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "1"]
  },
  {
    description: "AMORTIZATION OF S&M INTANGIBLES",
    natural: "550004",
    moduleId: "8",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "2"]
  },
  {
    description: "FACILITIES RENT",
    natural: "560001",
    moduleId: "24",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "4"]
  },
  {
    description: "FACILITIES UTILITIES",
    natural: "560002",
    moduleId: "24",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "1"]
  },
  {
    description: "FACILITIES REPAIR & MAINT",
    natural: "560003",
    moduleId: "24",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "5"]
  },
  {
    description: "FACILITIES BLDG - SEC EXP",
    natural: "560008",
    moduleId: "24",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "2"]
  },
  {
    description: "TELECOM EXP VOICE",
    natural: "565001",
    moduleId: "24",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "1"]
  },
  {
    description: "TELECOM EXP DATA",
    natural: "565002",
    moduleId: "24",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "5"]
  },
  {
    description: "TELECOM EXP CELLULAR",
    natural: "565005",
    moduleId: "24",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "2"]
  },
  {
    description: "EQUIP RENTAL",
    natural: "570001",
    moduleId: "24",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "1"]
  },
  {
    description: "EQUIP REPAIR & MAINT",
    natural: "570002",
    moduleId: "24",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "5"]
  },
  {
    description: "EQUIP EXPD",
    natural: "570003",
    moduleId: "24",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "1"]
  },
  {
    description: "EQUIP SOFTWARE",
    natural: "570004",
    moduleId: "24",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "3"]
  },
  {
    description: "Office supplies Duck",
    natural: "575001",
    moduleId: "24",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "2"]
  },
  {
    description: "Supplies-PSNW",
    natural: "575002",
    moduleId: "24",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "3"]
  },
  {
    description: "SUPPLIES - MISC",
    natural: "575006",
    moduleId: "24",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "4"]
  },
  {
    description: "LEGAL OTHER CORP EXEC",
    natural: "590001",
    moduleId: "25",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "3"]
  },
  {
    description: "PROF, TAXES, FEES AUDIT FEES",
    natural: "590002",
    moduleId: "25",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "4"]
  },
  {
    description: "PROF, TAXES, FEES CONSULT ADI SUPPORT",
    natural: "590003",
    moduleId: "25",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "2"]
  },
  {
    description: "PROF, TAXES, FEES REGULATORY",
    natural: "590004",
    moduleId: "25",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "1"]
  },
  {
    description: "PROF, TAXES, FEES INTERNATIONAL FINANCE & ADM",
    natural: "590006",
    moduleId: "25",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "2"]
  },
  {
    description: "PROF, TAXES, FEES BOARD CORP EXEC",
    natural: "590007",
    moduleId: "25",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "2"]
  },
  {
    description: "PROF, TAXES, FEES FRANCHISE TAX",
    natural: "590010",
    moduleId: "25",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "1"]
  },
  {
    description: "PROF, TAXES, FEES PROPERTY TAX",
    natural: "590011",
    moduleId: "25",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "1"]
  },
  {
    description: "PROF, TAXES, FEES STATE INC",
    natural: "590012",
    moduleId: "25",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "3"]
  },
  {
    description: "SALES TAX EXPENSE",
    natural: "590016",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["1", "4"]
  },
  {
    description: "PROF, TAXES, FEES BANK FEES",
    natural: "590020",
    moduleId: "25",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "5"]
  },
  {
    description: "PROF, TAXES, FEES CHARITABLE GIFTS CORP EXEC",
    natural: "590022",
    moduleId: "25",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "3"]
  },
  {
    description: "PROF, TAXES, FEES LICENSES&FEES SALES HEADQUARTERS",
    natural: "590023",
    moduleId: "25",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "3"]
  },
  {
    description: "PROF, TAXES, FEES NON-DED GIFTS",
    natural: "590024",
    moduleId: "25",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "1"]
  },
  {
    description: "PROF, TAXES, FEES-DED GIFTS",
    natural: "590026",
    moduleId: "25",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "1"]
  },
  {
    description: "OTHER OPEX BAD DEBT",
    natural: "595001",
    moduleId: "23",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "4"]
  },
  {
    description: "OTHER OPEX DISCOUNTS TAKEN FINANCE & ADM",
    natural: "595002",
    moduleId: "23",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "2"]
  },
  {
    description: "OTHER OPEX PRINT & REPRO - AUSTIN",
    natural: "595003",
    moduleId: "23",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "3"]
  },
  {
    description: "Late Fee - Penalty Fee",
    natural: "595004",
    moduleId: "26",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "4"]
  },
  {
    description: "OTHER EXPENSES",
    natural: "595006",
    moduleId: "23",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "1"]
  },
  {
    description: "OTHER OPEX INSUR",
    natural: "595007",
    moduleId: "23",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "4"]
  },
  {
    description: "OTHER INC/EXP MISC",
    natural: "610020",
    moduleId: "23",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["3", "5"]
  },
  {
    description: "FOREIGN CURRENCY TRANSLATION",
    natural: "610030",
    moduleId: "27",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "2"]
  },
  {
    description: "INT INCOME INTERCO INTEREST",
    natural: "620020",
    moduleId: "29",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "1"]
  },
  {
    description: "INT EXPENSE VENDOR CHARGE",
    natural: "620050",
    moduleId: "29",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "1"]
  },
  {
    description: "INT EXPENSE CREDIT CARD FEES",
    natural: "620055",
    moduleId: "28",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "3"]
  },
  {
    description: "PENALTIES AND FEES",
    natural: "620060",
    moduleId: "26",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "3"]
  },
  {
    description: "INT EXPENSE DEBT-One Time Costs-",
    natural: "620070",
    moduleId: "29",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["2", "4"]
  },
  {
    description: "Interest Exp - Defer Finance Costs",
    natural: "620080",
    moduleId: "29",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["4", "5"]
  },
  {
    description: "INCOME TAXES PROVISION FOR FEDERAL",
    natural: "630010",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "1"]
  },
  {
    description: "FOREIGN TAXES WITHHELD",
    natural: "630020",
    moduleId: "12",
    ownerId: "9125a8dc-52ee-365b-a5aa-81b0b3681cf6",
    processes: ["1", "2"],
    contributors: ["5", "5"]
  }
];
const ids = ["1", "2", "3"];
let idx = 0;
accts.forEach(acct => {
  if (idx > 2) {
    idx = 0;
  }
  acct.moduleId = ids[idx];
  idx++;
});

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("accounts")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("accounts").insert(accts);
    });
};
