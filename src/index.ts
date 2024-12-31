interface CurrencyResult<T extends string> {
  amount: number
  base: string
  date: string
  rates: Record<T , number>
}

function cache(method: Function,context : unknown){
//@ts-ignore
return async function a(this,
from: string,
to: string,
amount: number
)  {
const key = `${from}${to}`

if (this.caches[key]) return this.cache[key] *amount


const result = await  method.bind(this) (from,to,amount)

const rate = result.rates[to]
this.caches[key] = rate / result.amount

return rate
}
}
type A = 'a'| 'b' | 1

type B = Extract<A,string>
class Currency <
const Currencies extends readonly string[] = [],  values extends string = Extract<Currencies [keyof Currencies],string>
>{
   private api = 'https://api.frankfurter.app'

  private caches: Record<string, number> = {}
  constructor(public currencies: Currencies ) {}

  a(a:Currencies){}
  @cache
  async convert <TO extends values>(
     from: values,
     to:TO,
     amount: number) 
     {
      return fetch(
       
          `${this.api}/latest?from=${from}&to=${to}&amount=${amount}`).then((x) => x.json() as unknown as CurrencyResult<TO>
      )

  }

  get lastest() {
    return fetch(`${this.api}/latest`).then((x) => x.json())
  }

  
}


const myCurrency = new Currency(['USD','JPY','THB',])
// as const เพื่อเป็นการ set ค่า ให้ string array สามารถถูกล็อคค่าไว้ให้อยู่ใน string array เท่านั้นที่ต้องทำเเบบนี้เพราะ string array ไม่ใช่  primitive data types ทำให้ type script ไม่สามรถจัดการได้ในวีธีปกติ


myCurrency.convert('JPY','USD',1)

const a = async () => {
await myCurrency.convert('USD','THB',1).then(console.log)

}

a()
