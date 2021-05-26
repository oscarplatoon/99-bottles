def bottle_song(i):
	if (i == 1):
	    objects = 'bottle'
	    objectMinus = 'bottles'
	elif(i == 2):
	    objects = 'bottles'
	    objectMinus = 'bottle'
	else:
	    objects = 'bottles'
	    objectMinus = 'bottles'
	    
	if (i > 0):
		print(str(i) + " " + objects + " of beer on the wall, " + str(i) + " " + objects + " of beer." )
		print("Take one down and pass it around, " + str(i - 1) + " " + objectMinus + " of beer on the wall.")
		print(" ")
		
	elif (i == 0):
		print("No more bottles of beer on the wall, no more bottles of beer.")
		print("Go to the store and buy some more, " + str(i) + " bottles of beer on the wall.")

i = 5

while i >= 0:
	bottle_song(i)
	i -= 1

bottle_song(i)
