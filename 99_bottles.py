def bottle_song(num):
	# write your code here!
    bottles = num
    while (num > 2):
        print(num, "bottles of beer on the wall," ,num, "bottles of beer.")
        print("Take one down, and pass it around," ,num - 1, "bottles of beer on the wall.")
        num -= 1
    print(num, "bottles of beer on the wall" ,num, "of beer." )
    print("Take one down and pass it around, 1 bottle of beer on the wall.")
    print("1 bottle of beer on the wall, 1 bottle of beer.")
    print("Take one down and pass it around, no more bottles of beer on the wall.")
    print("No more bottles of beer on the wall, no more bottles of beer.")
    print("Go to the store and buy some more," ,bottles, "bottles of beer on the wall.")
    
bottle_song(99)