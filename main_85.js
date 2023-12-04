menu_list_array = [ "Veg Margherita Pizza","Margherita","Pepperoni Passion","Supreme Delight","Veggie Heaven"
,"The Extravagant Gastronomic Delight of Delectable Disc with a Mosaic of Marvelous Toppings, Featuring a Symphony of Succulent Pepperoni, Luscious Sausage Swirls, Bountiful Mounds of Golden Melted Mozzarella, a Verdant Cascade of Fresh Basil Leaves, a Drizzle of Zesty Garlic-infused Olive Oil, Crispy Crown of Caramelized Onions, Roasted Red Peppers Dancing in Harmony, Sun-kissed Sweet Cherry Tomatoes, and a Final Flourish of Parmesan Snow, All Nestled on a Pillowy Bed of Handcrafted, Wood-fired Crust."                  
 ]; //Add more Pizza item names

function getmenu()
{
    var htmldata="";
    for(var i=0; i<menu_list_array.length; i++)
    {
        htmldata=htmldata+ menu_list_array[i] + '<br>'
    }
    //Give the appropriate id name as display_menu 
    document.getElementById("display_menu").innerHTML = htmldata;
}

function add_suggestion(){
    //Give the appropriate id name as add_item
	var item = document.getElementById("add_item").value;
    //Use the push() function to push the item into menu_list_array
    menu_list_array.push(item);
}

