interface Country {
  Country: string
  CountryCode: string
  Date: string
  ID: string
  NewConfirmed: number
  NewDeaths: number
  NewRecovered: number
  Premium: object
  Slug: string
  TotalConfirmed: number
  TotalDeaths: number
  TotalRecovered: number
}

interface Global {
  Date: string
  NewConfirmed: number
  NewDeaths: number
  NewRecovered: number
  TotalConfirmed: number
  TotalDeaths: number
  TotalRecovered: number
}

interface Summary {
  ID: string
  Message: string
  Countries: Country[]
  Date: string
  Global: Global
}
