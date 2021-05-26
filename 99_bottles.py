def bottle_song(num):
	original = num
	while num > 1:
		print((f'''{num} bottle{'' if num == 1 else 's'} of beer on the wall, {num} bottle{'' if num == 1 else 's'} of beer.
Take one down and pass it around, {num - 1} bottle{'' if num - 1 == 1 else 's'} of beer on the wall.'''))
		num -= 1
	if num == 1:
		print((f'''1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, {original} bottles of beer on the wall.'''))

bottle_song(5)
