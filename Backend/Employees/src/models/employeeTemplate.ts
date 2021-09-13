//Currencies Model
class Currencies {
  name: string;
  code: string;
  symbol: string;

  constructor(userResponse: any) {
    this.name = userResponse.name;
    this.code = userResponse.code;
    this.symbol = userResponse.symbol;
  }
}

//Languages Model
class Languages {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;

  constructor(userResponse: any) {
    this.iso639_1 = userResponse.iso639_1;
    this.iso639_2 = userResponse.iso639_2;
    this.name = userResponse.name;
    this.nativeName = userResponse.nativeName;
  }
}

//Employee Model
export class Employee {
  name: string;
  currencies: Currencies[];
  timezones: string[];
  languages: Languages[];
  region: string;

  constructor(userResponse: any) {
    this.name = userResponse.name;
    this.currencies = userResponse.currencies;
    this.timezones = userResponse.timezones;
    this.languages = userResponse.languages;
    this.region = userResponse.region;
  }
}
