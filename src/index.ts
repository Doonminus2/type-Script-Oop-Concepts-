interface CurrencyResult {
          amount: number
          base: string
          date: string
          rates: {
              [a: string]: number
          }
      }


class Currency <Currencies extends string[]> {
          api = 'https://api.frankfurter.app'
          constructor(public currencies: Currencies ) {}

          convert(from: string, to:string, amount: number) {
                    return fetch(`${this.api}/latest?from=${from}&to=${to}&amount=${amount}`)
        .then((x) => x.json() as any as CurrencyResult)
        .then((a) => a)
          }

          log(Currency:Currencies) {
                    return this.currencies
          }
}


const myCurrency = new Currency(['USD','JPY','THB'])
// as const เพื่อเป็นการ set ค่า ให้ string array สามารถถูกล็อคค่าไว้ให้อยู่ใน string array เท่านั้นที่ต้องทำเเบบนี้เพราะ string array ไม่ใช่  primitive data types ทำให้ type script ไม่สามรถจัดการได้ในวีธีปกติ
const a = ['USD','JPY','THB'] as const

type A = typeof a

console.log(myCurrency.log(['asd']))

myCurrency.convert("JPY","THB",1).then(console.log)
