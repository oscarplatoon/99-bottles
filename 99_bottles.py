def bottles(beers):
    #This allows me to refer to any number of beers properly, even during the ending
    if beers == 1:   return str(beers) + " bottle"
    elif beers == 0: return "no more bottles"
    else:            return str(beers) + " bottles"
        
def bottle_song(beers):
    #Remember how many to buy
    shopping_list = beers
    while(beers > 0):
        drinks = bottles(beers)
        print(drinks, "of beer on the wall,", drinks, "of beer.")
        beers -= 1
        drinks = bottles(beers)
        print("Take one down and pass it around,", drinks, "of beer on the wall.")
    #Don't need to worry about bottles() returning lowercase "no more" because this line is unique
    print("No more bottles of beer on the wall, no more bottles of beer.")
    print("Go to the store and buy some more,", bottles(shopping_list), "of beer on the wall.")
bottle_song(1)
