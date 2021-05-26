def bottle_song(n):
	# write your code here!
	bottles = n
	while bottles > 1:
		print(f"{bottles} bottles of beer on the wall, {bottles} bottles of beer.")
		bottles -= 1
		if bottles == 1:
			print(f"Take one down and pass it around, {bottles} bottle of beer on the wall.")
			break
		print(f"Take one down and pass it around, {bottles} bottles of beer on the wall.")
	if bottles == 1:
		print(f"{bottles} bottle of beer on the wall, {bottles} bottle of beer.")
		print(f"Take one down and pass it around, no more bottles of beer on the wall.")
		bottles -= 1
	if bottles == 0:
		print(f"No more bottles of beer on the wall, no more bottles of beer.")
		print(f"Go to the store and buy some more, {n} bottles of beer on the wall.")
	


bottle_song(99)

# Take one down and pass it around, 1 bottle of beer on the wall.
# 1 bottle of beer on the wall, 1 bottle of beer.
# Take one down and pass it around, no more bottles of beer on the wall.
# No more bottles of beer on the wall, no more bottles of beer.
# Go to the store and buy some more, 99 bottles of beer on the wall.

