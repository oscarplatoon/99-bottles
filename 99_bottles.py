def bottle_song(num):
	# write your code here!
	bottles = num
	while(bottles > 1):
		print(f'{bottles} bottles of beer on the wall, {bottles} bottles of beer.')
		print(f'Take one down and pass it around, {bottles - 1} bottles of beer on the wall.')
		bottles -= 1

	if (bottles == 1):
		print(f'{bottles} bottle of beer on the wall, {bottles} bottle of beer.')
		print('Take one down and pass it around, no more bottles of beer on the wall.')
		bottles -= 1
	
	if (bottles == 0):
		print('No more bottles of beer on the wall, no more bottles of beer.')
		print('Go to the store and buy some more, 99 bottles of beer on the wall.')
		
# bottle_song(0)
# bottle_song(-1)
# bottle_song(99)
bottle_song(3)
