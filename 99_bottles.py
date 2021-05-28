def bottle_song(num_bottles):

	i = num_bottles
	print(i)
	while i >= 0:
		if i >= 2:
			print(f"{i} bottles of beer on the wall, {i} bottles of beer.")
			print(f"take one down, pass it around, {i-1} bottles of beer on the wall.")

		if i == 2:
			print(f"{i} bottles of beer on the wall, {i} bottles of beer.")
			print(f"take one down, pass it around, {i-1} bottle of beer on the wall")
		if i == 1:
			print(f"{i} bottle of beer on the wall, {i} bottle of beer.")
			print(f"take one down and pass it around, no more bottles of beer on the wall.")
		if i == 0:
			print("No more bottles of beer on the wall, nor more bottles of beer.")
			print(f"Go to the store and buy some more, {num_bottles} of beer on the wall.")
			return
		i = i-1

bottle_song(99)