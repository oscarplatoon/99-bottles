def bottle_song(num):
	bottles = num
	while (bottles > 2):
		print(bottles, ' bottles of beer on the wall, ', bottles, ' of beer.')
		print('take one down and pass it around, ', (bottles - 1), ' bottles of beer on the wall.')
		bottles -= 1
	print(bottles, ' bottles of beer on the wall, ', bottles, ' of beer.')
	print('Take one down and pass it around, 1 bottle of beer on the wall.')
	print('1 bottle of beer on the wall, 1 bottle of beer.')
	print('take one down and pass it around, no more bottles of beer on the wall.')	
	print('Go to the store and buy some more, ', num , ' bottles of beer on the wall.')	
	

print(bottle_song(5))
