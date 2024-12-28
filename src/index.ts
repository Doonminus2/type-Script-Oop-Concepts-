interface CurrencyResult<T extends string> {
          amount: number
          base: string
          date: string
          rates: Record<T , number>
      }


class Currency <const Currencies > {
          api = 'https://api.frankfurter.app'

          private caches: Record<string, number> = {}
          constructor(public currencies: Currencies ) {}

          async convert <TO extends Currencies[keyof Currencies]>(
             from: Currencies[keyof Currencies],
             to:TO,
             amount: number) 
             {
                const key = `${from}${to}` as TO extends string ? TO : never
                if(this.caches[key]) {
                    return this.caches[key]
                }
                const result = await fetch(
                     `${this.api}/latest?from=${from}&to=${to}&amount=${amount}`).then((x) => x.json() as any as CurrencyResult<
                     TO extends string ? TO : never>)
                

                
            //this.caches[key] = result.rates['THB']
            const rate = result.rates[to as TO extends string ? TO : never]

            this.caches[key] = rate
            return rate

          }

          get lastest() {
            return fetch(`${this.api}/latest`).then((x) => x.json())
          }

          
}


const myCurrency = new Currency(['USD','JPY','THB','ACT'])
// as const เพื่อเป็นการ set ค่า ให้ string array สามารถถูกล็อคค่าไว้ให้อยู่ใน string array เท่านั้นที่ต้องทำเเบบนี้เพราะ string array ไม่ใช่  primitive data types ทำให้ type script ไม่สามรถจัดการได้ในวีธีปกติ




const a = async () => {
    await myCurrency.convert('USD','THB',1).then(console.log)
    
}

a()
