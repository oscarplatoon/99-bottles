def bottle_song(num):
	while num >= 0:
		if num==0:
			print(f'No more bottles of beer on the wall, no more bottles of beer.\n'
				f"Go to the store and buy some more, {num} bottles of beer on the wall.")

		elif num==1:
			print('1 more bottle of beer on the wall, 1 more bottle of beer.')
			print('Take one down, pass it around, no more bottles of beer on the wall.')
		
		elif num==2:
			print(f'2 more bottles of beer on the wall, 2 more bottles of beer.\n'
			f'Take one down, pass it around, 1 more bottle of beer on the wall.')
		
		else:
			print(f'{num} more bottles of beer on the wall, {num} more bottles of beer\n'
			f'Take one down, pass it around, {num-1} more bottle of beer on the wall.')
		num = num - 1
      
bottle_song(5)
