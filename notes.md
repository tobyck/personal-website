# <a href="https://tobyck.surge.sh" class="title">Toby Connor-Kebbell</a>

### Contents 
  - [Trachtenerg Sqauring (2 digits only)](#trachtenerg-sqauring-2-digits-only)
  - [Sqaure Roots Mentally](#sqaure-roots-mentally)
  - [Primality Testing](#primality-testing)
  - [Euclidean Algorithm](#euclidean-algorithm)
  - [Extended Euclidean Algorithm](#extended-euclidean-algorithm)
  - [Modular Multiplicitave Inverse](#modular-multiplicitave-inverse)
  - [Bezout's Coefficients](#bezouts-coefficients)
  - [Euler's Totient Function](#eulers-totient-function)
  - [RSA Encryption](#rsa-encryption)
  - [Base 10 to Base 2](#base-10-to-base-2)
  <br><br>

### Trachtenberg Sqauring (2 digits only)

If the second digit is 5:  <br>
The first half of the answer = the first digit × (the first digit + 1), and the second half is 25 (52). For example, 45<sup>2</sup> = [4 × (4 + 1)][25] = 2025.

If the first digit is 5:  <br>
The first half of the answer is the first digit squared + the second digit and the second half is the second digit sqaured. For example, 54<sup>2</sup> = [52+4][42] = 2916.

If neither of the digits are 5:  <br>
Suppose you want to calculate 47<sup>2</sup>. Begin by calculating 72 = 49. Note down the 9 and carry the 4. Next, calculate 2(4 × 7) + the 4 carried from 49 = 60. Note down the 0 and carry the 6 (at this point you have <sup>6</sup>09). Lastly, calculate 42 + the carried 6 = 22. The final answer is 2209.

Video tutorial is <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwja9KLZosv1AhXVSmwGHSaFCP4QwqsBegQIBRAB&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DFIyucOnSFrU&usg=AOvVaw3Ri04bwQQo5SlTgPlBYiLI" target="_blank">here</a>.  <br><br>

### Sqaure Roots Mentally

Suppose you want to calculate √53 (this method will give you a mixed number). The interger part will be the square root of the nearest perfect square to 53 that is smaller than 53, in this case, √49 = 7. The denominator will be the the interger part × 2, in this case, 7 × 2 = 14. And lastly, the numerator will be 53 - 49 = 4. The final answer is 7 4/14 = 7 2/7.  <br><br>

### Primality Testing

The Fermat Primality Test says that if n is prime and a is a random interger between 1 and n, an - 1 = 1 (mod n). If n passes this test, you can also test if a(n - 1) ÷ 2 = ±1. If you continue to half the exponent, and the result is always ±1, then n is prime. This is called the Rabin-Miller Primality Test — the Python code is below:
```python
# n is the number to test
# k is the number of rounds
# s is the exponent
# a is the random number

def rabin_miller(n, k):
    s = n - 1
    for _ in range(k):
        a = random.randrange(2, n - 1)
        x = pow(a, s, n)
        if x in [1, -1]:
            continue
        else:
            return False
    return True
```
<br>

### Euclidean Algorithm

The Euclidean Algorithm is a method of finding the greatest common divisor of two numbers very efficiently. Here is an example with gcd(15, 56):

First you divide the larger number by the smaller one, 56 = 15 × 3 + 11. Then you continue to divide the divisor by the remainder is 0.

15 = 11 × 1 + 4  <br>
11 = 4 × 2 + 3  <br>
4 = 3 × 1 + 1  <br>
3 = 1 × 3 + 0  <br>

When the remainder is 0, the remainder of the previous eqaution is the gcd. In this case, 1.  <br><br>

### Extended Euclidean Algorithm

In simple terms, the Extended Euclidean Algorithm (EEA) is the standard [Euclidean Algorithm](#euclidean-algorithm), but backwards. It is used to not only find the GCD of a and b (greatest common divisor), but also [Bezout's Coefficients](#bezouts-coefficients), the first of which is the [Modular Inverse](#modular-multiplicitave-inverse) of a mod b. This is used for the last use case mentioned, in [RSA](#rsa). Below is an example of EEA with 56 and 15:

1. Excecute the [Euclidean Algorithm](#euclidean-algorithm),

    56 = 15 × 3 + 11  <br>
    15 = 11 × 1 + 4  <br>
    11 = 4 × 2 + 3  <br>
    4 = 3 × 1 + 1  <br>

2. Re-write the last eqaution in terms of the GCD, 1 = 4 - 3.
3. Substitute in the eqaution for 4 in terms of 56 and 15.

    11 = 56 - 15 × 3

    4 = 15 - 11
      = 15 - (56 - 15 × 3)

    1 = (15 - (56 - 15 × 3)) - 3

4. Substitute in the eqaution for 3 in terms of 56 and 15.

    3 = 11 - 4 × 2
      = (56 - 15 × 3) - (15 - (56 - 15 × 3)) × 2

    1 = (**15** - (56 - 15 × 3)) - ((56 - 15 × 3) **- (15 - (56 - 15 × 3))** × 2)

5. The numbers in bold are Bezout's Coefficients, the first of which is the [Modular Inverse](#modular-multiplicitave-inverse) of 15 mod 56 (*not* 56 mod 15).  

<a href="https://github.com/BaReinhard/Hacktoberfest-Mathematics/blob/master/algebra/bezout/python/bezout.py" target="_blank">This code</a> helped a lot with understanding how EEA can be put into code.<br><br>

### Modular Multiplicitave Inverse

If AB mod C = 1 (mod C), B is the modular multiplicitave inverse of A mod C — this can be calculated with the [Extended Euclidean Algorithm](#extended-euclidean-algorithm). There is a deeper explanation <a href="https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/modular-inverses" target="_blank">here</a>.  <br><br>

### Bezout's Coefficients

For integers a and b with the gcd of d, there are coefficients x and y such that ax + by = d. These numbers a and b can be calculated very efficiently with the [Extended Euclidean Algorithm](#extended-euclidean-algorithm).  <br><br>

### Euler's Totient Function

Euler's totient function of n (φ(n)) returns all of the positive integers less than n that are relatively prime to n. This is commonly used in cryptographic algorithms such as [RSA](#rsa-encryption), and the [Diffie Hellman Key Exchange](#diffie-hellman-key-exchange).  <br><br>

### RSA Encryption

RSA (named after it's creators, Rivest, Shamir, and Addleman) is a public-key encryption algorithm. Here is a breif explanation:
   
1. Choose two large prime numbers p and q. (1024 bits is recommended)
2. Calculate n, the product of p and q. This will be the second half of the keys — the modulus.
3. Calculate [Euler's Totient](#eulers-totient-function) of n (φ(n)). This can be calculated with (p - 1) × (q - 1).
4. Choose e such that 1 < e < φ(n) and e is coprime to φ(n).
5. Calculate d such that ed = 1 (mod φ(n)). In other words d = e<sup>-1</sup> mod φ(b) — the [Modular Inverse](#modular-inverse).
6. To encrypt a message, for each letter, take the message, m, convert it to a number, and raise it to the power e (mod n).
7. To decrypt a message, do the same proccess used in encrption, but with the cipher, c, and the power of d (mod n).

There is more information about RSA <a href="https://wikipedia.org/wiki/RSA_(cryptosystem)" target="_blank">on Wikipedia</a>, and there are also plenty of good explanations <a href="https://www.youtube.com/results?search_query=rsa+explanation" target="_blank">on YouTube</a>.  <br><br>

### Base 10 to Base 2

Suppose you want to convert 44 (base 10) to base 2. Think of all of the powers of two less that 44 — that is: 32, 16, 8, 4, 2, and 1. Work your way down seeing if they fit in to 44 after being added to the previous power of two. 32 fits into 44, so you append 1 to your base 2 representation. 32 + 16 = 48 does not fit into 44 so you append 0 to your base 2 representation. 32 + 8 = 40 fits into 44 so you append 1 to the base 2 representation. 32 + 8 + 4 = 44 fits into 44 so you add another 1 to your base 2 representation. 32 + 8 + 4 + 2 = 46 does not fit into 44 so you append 0 to your base 2 representation. 32 + 8 + 4 + 1 = 45 does not fit into 44 so you append 0 to your base 2 representation. 44 = 101100.

<a href="https://www.youtube.com/watch?v=NEJXqFw999o" target="_blank">This video</a> gives a good explanation (watch from 1:29 for the shortcut explained above).  <br><br>

<style>
    body, div {
        margin: 25px 50px 25px 50px;
        background-color: white;
        color: black;
    }

    html {
        scroll-behavior: smooth;
    }

    .title {
        color: black !important;
    }

    .title:hover {
        color: grey !important;
    }

    code, pre {
        font-family: monospace !important;
        background-color: white !important;
        font-size: 15px !important;
    }

    code {
        color: black !important;
    }

    a {
        text-decoration: none;
        transition: 0.5s ease;
        color: #00bfff !important;
    }

    a:hover {
        color: #ff4ffb !important;;
        text-decoration: none !important;
        transition: 0.5s ease;
    }

    @media screen and (max-width: 1100px) {
        a:hover {
            color: #00bfff !important;
        }
    }

    @media screen and (max-width: 800px) {
        body, div {
            margin: 20px;
        }
    }
</style>