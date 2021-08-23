import {getLargestPrimeNubmerBetween,isPrime} from '../index'

it('Prime number check works correctly', () => {
    expect(isPrime(1)).toEqual(false)
    expect(isPrime(3)).toEqual(true)
    expect(isPrime(4)).toEqual(false)
    expect(isPrime(5)).toEqual(true)
    expect(isPrime(7)).toEqual(true)
})

it('Gets largest prime number in interval exclusively', () => {
    expect(
        getLargestPrimeNubmerBetween(0,1)
    ).toBeNull()
    expect(
        getLargestPrimeNubmerBetween(-3,3)
    ).toBeNull()
    expect(
        getLargestPrimeNubmerBetween(7,11)
    ).toBeNull()
    expect(
        getLargestPrimeNubmerBetween(7,12)
    ).toEqual(11)

    // We have to be sure that negative numbers is become 0 and not in prime check range
    expect(
        getLargestPrimeNubmerBetween(-14,12)
    ).toEqual(11)

    // No negative numbers
    expect(
        getLargestPrimeNubmerBetween(-14,-12)
    ).toBeNull()
})