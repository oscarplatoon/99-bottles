def bottle_song(num):

    numbottles = num;
    a="bottles"
    b="bottle"
    while numbottles >=1:
        
        print(f"{numbottles} {a if numbottles > 1 else b} of beer on the wall, {numbottles} {a if numbottles > 1 else b} of beer.")
        numbottles = numbottles-1
        
        if numbottles > 0:
            print(f"Take one down and pass it around, {numbottles} bottles of beer on the wall.")
        
        
    
    print('Take one down and pass it around, no more bottles of beer on the wall.')
    print('No more bottles of beer on the wall, no more bottles of beer.')
    print(f"Go to the store and buy some more, {num} bottles of beer on the wall...")


bottle_song(9)
