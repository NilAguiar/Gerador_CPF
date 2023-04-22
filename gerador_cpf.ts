class CPF {
    private readonly generateNineFirstDigits = Math.floor(100_000_000 + Math.random() * 900_000_000).toString()
  constructor(){
    this.generateCpf()
  }
  
  verifyDigit = (value: string): Array<number>  => {
    let decrement: number = value.length == 9 ? 10 : 11
    const res = value.split('').map(x => parseInt(x) * decrement--)
    return res
  }
  
  generateDigit = (value: Array<number>): string => {
    const res = value.reduce((accumulator, index) => index + accumulator) % 11
    return (res < 2 ? 0 : 11 - res).toString()
  }

  firstNumberValidator = (value: string): string => {
    let verify_digit = this.verifyDigit(value)
    let add_digit = this.generateDigit(verify_digit)
    if(value.length < 10){
      return this.firstNumberValidator(value + add_digit.toString())
    }else {
      return value + add_digit.toString()
    }
  }
  
  generateCpf = (): string => {
    return this.firstNumberValidator(this.generateNineFirstDigits)
  }
  
}

const cpf_number = new CPF().generateCpf()
console.log(cpf_number)

const generateNineFirstDigits = Math.floor(100000000 + Math.random() * 900_000_000).toString()

const verifyDigit = (value: string): Array<number>  => {
  let decrement: number = value.length == 9 ? 10 : 11
  const res = value.split('').map(x => parseInt(x) * decrement--)
  return res
}

const generateDigit = (value: Array<number>): string => {
  const res = value.reduce((accumulator, index) => index + accumulator) % 11
  return (res < 2 ? 0 : 11 - res).toString()
}

const firstNumberValidator = (value: string): string => {
  let verify_digit = verifyDigit(value)
  let add_digit = generateDigit(verify_digit)
  if(value.length < 10){
    return firstNumberValidator(value + add_digit.toString())
  }else {
    return value + add_digit.toString()
  }
}

const cpf = firstNumberValidator(generateNineFirstDigits)

console.log(cpf)