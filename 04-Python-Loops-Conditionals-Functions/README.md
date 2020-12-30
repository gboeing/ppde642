# Python loops, conditionals, and functions

### Overview:

Today we'll introduce the basics of Python control: using simple loops, conditionals, and functions to control the logic
and flow of your code's execution.

### Readings:

- Chapters 4-7 of [Think Python](http://www.greenteapress.com/thinkpython/) (don't worry, the chapters are only like 8 pages long)
- Two short perspectives on choosing Python as a language:
  - http://lorenabarba.com/blog/why-i-push-for-python/
  - https://www.codefellows.org/blog/5-reasons-why-python-is-powerful-enough-for-google

### Class Session:

Run through the IPython notebook.

### Exercise:

1. You will create your first complete IPython notebook in order to work with loops, conditionals, iteration, and functions. Review Think Python section 4.8 to develop a plan and section 6.2 on incremental development. Also review the code in the IPython notebook from this class session.
2. You will write four functions to work with prime numbers. A prime number is any whole number greater than 1 that has no positive divisors besides 1 and itself. So, a prime number a) must be an integer, b) must be greater than 1, and c) must be divisible only by 1 and itself.
   1. Write a function isPrime(n) that accepts an argument n and returns boolean True if n is a prime number and boolean False if n is not prime. For example, isPrime(11) should return True and isPrime(12) should return False.
   2. Write a function printPrimes(n) that accepts an argument n and prints all the prime numbers between 0 and n (inclusive). This function should call the function you developed in #1. For example, printPrimes(13) should print out: 2 3 5 7 11 13
   3. Write a function countPrimes(n) that accepts an argument n and returns an int count of how many prime numbers there are between 0 and n (inclusive). This function should also call the function you developed in #1. For example, countPrimes(19) should return 8, because there are 8 prime numbers between 0 and 19.
   4. Write a function firstPrimes(n) that accepts an argument n and returns a Python list containing the first n prime numbers. (Hint: use a while loop and append each prime you find to a list.) This function should also call the function you developed in #1. For example, firstPrimes(5) should return the first 5 prime numbers as a list like: [2, 3, 5, 7, 11]
3. Create a new, clean IPython notebook to contain your homework. The first cell in your notebook should be a markdown cell containing a plain-English narrative of the logic you will need to code. Use this narrative to think through how you will tackle each function. Each of the four functions should be in its own IPython notebook cell. At the end of each of these cells, call the function passing in a test value to demonstrate that it is working properly.

Make sure your entire notebook runs properly and without any errors. Click Kernel > Restart > Clear all outputs and restart. This clears your memory and re-initializes your notebook. Then click Cell > Run all and make sure everything behaves properly.