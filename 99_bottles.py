def bottle_song(num):
	# write your code here!
	bottles = num
	
	while bottles > 0:
		if bottles >= 3:
			print(f"{bottles} bottles of beer on the wall, {bottles} bottles of beer.")
			print(f"Take one down and pass it around, {bottles - 1} bottles of beer on the wall.")
			bottles = bottles - 1
		elif bottles == 2:
			print(f"{bottles} bottle of beer on the wall, {bottles} bottle of beer.")
			print(f"Take one down and pass it around, {bottles - 1} bottle of beer on the wall.")
			bottles = bottles - 1
		elif bottles == 1:
			print(f"{bottles} bottle of beer on the wall, {bottles} bottle of beer.")
			print("Take one down and pass it around, no more bottles of beer on the wall.")
			print("No more bottles of beer on the wall, no more bottles of beer.")
			print(f"Go to the store and buy some more, {num} bottles of beer on the wall.")
			bottles = bottles - 1
bottle_song(4)
