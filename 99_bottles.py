def bottle_song(num_bottles):
	current_num_bottles = num_bottles
	while  current_num_bottles > 1:
		bottles_string = "bottles"

		if current_num_bottles == 2:
			bottles_string = "bottle"

		print(f"{current_num_bottles} bottles of beer on the wall, {current_num_bottles} bottles of beer.")
		print(f"Take one down and pass it around, {current_num_bottles-1} {bottles_string} of beer on the wall.")
		current_num_bottles -= 1

	if current_num_bottles == 1:
		print(f"{current_num_bottles} bottle of beer on the wall, {current_num_bottles} bottle of beer.")
		print(f"Take one down and pass it around, no more bottles of beer on the wall.")
		print(f"Go to the store and buy some more, {num_bottles} bottles of beer on the wall.")
	


bottle_song(99)
