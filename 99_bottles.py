def bottle_song(num):
	#Placeholder for restart of cadence
	restart = num
	#Check for number greater than zero or is actually a number
	if not num or num <= 0  :
		return print('choose a number')
	#Any input greater than two
	while num > 2:
		print(f'{num} bottles of beer on the wall, {num} bottles of beer.')
		print(f'Take one down and pass it around, {num - 1} bottles of beer on the wall.')
		num -= 1
	#Accounting for bottles turning to bottle
	if num == 2:
		print(f'{num} bottles of beer on the wall, {num} bottles of beer.')
		print(f'Take one down and pass it around, {num - 1} bottle of beer on the wall.')
		num -= 1
	#Defensive return/ Restart cadence
	else:
		num == 1
		print('No more bottles of beer on the wall, no more bottles of beer.')
		return print(f'Go to the store and buy some more, {restart} bottles of beer on the wall.')
		
bottle_song(1)
