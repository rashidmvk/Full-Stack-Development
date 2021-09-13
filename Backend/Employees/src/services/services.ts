import object from "../utilities/employeeList.json";
import { default as axios } from "axios";
import { Employee } from "../models/employeeTemplate";
import { EXT_COUNTRY_URL } from "../utilities/constants";

//Get services from the api
export class getApiService {
  async getEmployeeInfo() {
    let options: any = {
      headers: {
        "User-Agent": "request",
      },
      json: true,
    };

    let resultantSet = [];
    const filterCountries = ["Asia", "Europe"];
    for (const obj of object) {
      let employee = obj;
      let countryName = employee.country.toString().toLowerCase();

      const response = await axios.get(EXT_COUNTRY_URL + countryName);

      let user = new Employee(response.data);

      //addition of id field for the regions included at filterCountries
      if (filterCountries.includes(user.region)) {
        obj["id"] =
          obj.firstName.toLowerCase() +
          obj.lastName.toLowerCase() +
          obj.dateOfBirth.replace(/\//g, "");
      }

      resultantSet.push({
        ...obj,
        countryName: user.name,
        currencies: user.currencies,
        languages: user.languages,
        timezones: user.timezones,
      });
    }
    //returns the resultant array with country information added
    return resultantSet;
  }
}
