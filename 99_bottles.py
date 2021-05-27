def	bottle_song(num):
	# write your code here!
	bottle_num = num
	bottle_num_minus_one = bottle_num - 1
	s = 's' if bottle_num > 1 else ''
	bottle_s = 's' if bottle_num_minus_one > 1 else ''
	output = ''
	while bottle_num >= 0:
		if bottle_num > 0:
			output = f"{bottle_num} bottle{s} of beer on the Wall, {bottle_num} bottle{s} of beer.\nTake one down and pass it around, {bottle_num_minus_one} bottle{bottle_s} of beer on the wall."
		else:
			output = f"No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, {num} bottles of beer on the wall."
		print(output)		
		bottle_num = bottle_num - 1
		bottle_num_minus_one = bottle_num_minus_one - 1



bottle_song(10)
