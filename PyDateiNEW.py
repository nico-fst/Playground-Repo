# das hier behebt den testissue???
#und dasd den zweiten automatisch

def n2_wochenendeAmSee():
    # dicts mit Einzukaufendem
    alice = ["Bananen", "Brot", "Schokolade", "Rotwein"]
    bob = ["Bier", "Bier", "Chips"]
    eve = ["Brot", "Schokolade", "Chips", "Bier", "Wasser"]
    personen = alice + bob + eve

    # in dict Einkäufe unter Namen zählen
    einkaufsliste = {}  # leeres dict erstellen
    for element in personen:  # durch gesamte Liste mit Einkäufen iterieren
        if element not in einkaufsliste:
            einkaufsliste[element] = 1
        elif element in einkaufsliste:
            print("added!")
        else:
            print("changed!!!")

    # Dict printen
    print()
    print("Einkaufsliste:")
    print("-"*10)
    for elements in einkaufsliste:
        print("- " + elements + " x" + str(einkaufsliste[elements]))
    print("-"*10)
    print()
