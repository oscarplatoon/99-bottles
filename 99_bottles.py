def bottle_song(x):
    n = x
    while n > 0:
    	if n > 2:
    		print(f"{n} bottles of beer on the wall.")
      		print(f"{n} bottles of beer.")
      		print("Take one down, pass it around,")
      		print(f"{n - 1} bottles of beer on the wall.")
    	elif n > 1:
      		print(f"{n} bottles of beer on the wall.")
      		print(f"{n} bottles of beer.")
      		print("Take one down, pass it around,")
      		print(f"{n - 1} bottle of beer on the wall.")
    	else:
      		print(f"{n} bottle of beer on the wall.")
      		print(f"{n} bottle of beer.")
      		print("Take one down, pass it around,")
      		print("No more bottles of beer on the wall.")
    	n -= 1 
  	print("No more bottles of beer on the wall.")
  	print("No more bottles of beer.")
  	print("Go the store and buy some more,")
  	print(f"{x} bottles of beer on the wall.")


bottle_song(5)
