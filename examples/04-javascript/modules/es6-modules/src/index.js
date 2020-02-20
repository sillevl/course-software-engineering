import PressureConverter from './lib/pressure-converter'

const pc = new PressureConverter()

const pressure = pc.barToPsi(1)
const pressure2 = pc.psiToBar(14)

console.log(`1 bar = ${pressure} psi`)
console.log(`14 psi = ${pressure2} bar`)