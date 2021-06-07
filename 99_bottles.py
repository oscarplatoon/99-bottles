def bottle_song(num,original):
	if num==0:
		return (f'No more bottles of beer on the wall, no more bottles of beer.\n'
			f"Go to the store and buy some more, {original} bottles of beer on the wall.")

	elif num==1:
		return('1 more bottle of beer on the wall, 1 more bottle of beer.'
		f'\nTake one down, pass it around, no more bottles of beer on the wall.\n') + bottle_song(num-1,original)
	
	elif num==2:
		return(f'2 more bottles of beer on the wall, 2 more bottles of beer.\n'
		f'Take one down, pass it around, 1 more bottle of beer on the wall.\n') + bottle_song(num-1,original)
	
	else:
		return(f'{num} more bottles of beer on the wall, {num} more bottles of beer\n'
		f'Take one down, pass it around, {num-1} more bottles of beer on the wall.\n') + bottle_song(num-1,original)
	

try:
	num = int(input('How many bottles of beer?\n'))
except:
	print('Error, input must be a positive integer.')
else:
	print(bottle_song(num,num))
