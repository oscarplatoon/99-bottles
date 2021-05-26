def bottle_song():
	
	bottles = 99
	plural = "bottles"
	single = "bottle"

	while bottles > 0:
		print(f"{bottles} {single if bottles == 1 else plural} of beer on the wall, {bottles} {single if bottles == 1 else plural} of beer. You take one down, pass it around. {bottles - 1} {single if bottles - 1 == 1 else plural} of beer.")
		bottles = bottles - 1
	
	print("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.")
		


bottle_song()
