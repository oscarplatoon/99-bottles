def bottle_song():
	# write your code here!
	cmd = int(input("How many bottles of beer? "))
	for x in range (cmd,-1,-1):
		print (x)
		if x>=3:
			print (f"{x} bottles of beer on the wall, {x} bottles of beer.")
			print (f"Take one down and pass it around, {(x-1)} bottles of beer on the wall.")
		elif x==2:
			print (f"{x} bottles of beer on the wall, {x} bottles of beer.")
			print (f"Take one down and pass it around, {(x-1)} bottle of beer on the wall.")
		elif x==1:
			print (f"{x} bottle of beer on the wall, {x} bottle of beer.")
			print (f"Take one down and pass it around, no more bottles of beer on the wall.")
		elif x==0:
			print (f"No more bottles of beer on the wall, no more bottles of beer.")
			print (f"Go to the store and buy some more, {cmd} bottles of beer on the wall.")

bottle_song()
