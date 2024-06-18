// all images imported from images directory
import product_1 from "../Healthy/baingan_bharta.jpg";
import product_2 from "../Healthy/Bajara_whole_moong_and_green_pea_kichadi.png";
import product_3 from "../Healthy/bulgur-wheat-kheer.png";
import product_4 from "../Healthy/caribbean-steamed-fish.jpg";
import product_5 from "../Healthy/carrot_biryani.jpg";
import product_6 from "../Healthy/cauliflower-paneer-pea-curry-.jpg";
import product_7 from "../Healthy/chickpea_curry.jpg";
import product_8 from "../Healthy/crispy-baked-falafel.jpg";
import product_9 from "../Healthy/crispy-potato-tacos.jpg";
import product_10 from "../Healthy/dal_makhani.jpg";
import product_11 from "../Healthy/date-and-walnut-balls.png";
import product_12 from "../Healthy/healthy_fish_chips_with_tartare_sauce.jpg";
import product_13 from "../Healthy/healthy-oats-dosa.png";
import product_14 from "../Healthy/indina_bean_broccoli_carrot_salad.jpg";
import product_15 from "../Healthy/kabocha-squash-red-pepper-pasta.jpg";
import product_16 from "../Healthy/kabuli-chana-biryani.png";
import product_17 from "../Healthy/keto-broccoli-cheddar-soup.jpg";
import product_18 from "../Healthy/lemon_rice.jpg";
import product_19 from "../Healthy/moong-dal-and-spinach-soup.png";
import product_20 from "../Healthy/Rice-noodle-salad.jpg";
import product_21 from "../Unhealthy/SaagPaneer.png";
import product_22 from "../Healthy/slow-cooker-seafood-ramen.jpg";
import product_23 from "../Healthy/superhealthysalmonburgers.jpg";
import product_24 from "../Healthy/turkey-carrot-mushroom-dumplings.jpg";
import product_25 from "../Healthy/vegan_enchiladas_with_lentils_and_sweet_potato.jpg";
import product_26 from "../Healthy/stuffed-nachni-roti.png";
import product_27 from "../Unhealthy/7cheese.png";
import product_28 from "../Unhealthy/alootiki.jpg";
import product_29 from "../Unhealthy/Butter_Chicken.png";
import product_30 from "../Unhealthy/chinsecombo.png";
import product_31 from "../Unhealthy/fafadajalibi.png";
import product_32 from "../Unhealthy/frenchfries.png";
import product_33 from "../Unhealthy/friedegg.png";
import product_34 from "../Unhealthy/Garlic_Naan.png";
import product_35 from "../Unhealthy/gujarati_thali.png";
import product_36 from "../Unhealthy/khachori.png";
import product_37 from "../Unhealthy/LambRoganJosh.png";
import product_38 from "../Unhealthy/lavacake.png";
import product_39 from "../Unhealthy/maggie.png";
import product_40 from "../Unhealthy/masalakichadi.png";
import product_41 from "../Unhealthy/garlicbread.jpg";
import product_42 from "../Unhealthy/misalpav.png";
import product_43 from "../Unhealthy/Pakora.png";
import product_44 from "../Unhealthy/panipuri.png";
import product_45 from "../Unhealthy/Punjabithali.png";
import product_46 from "../Unhealthy/chickennuggets.jpg";
import product_47 from "../Unhealthy/Samosa.png";
import product_48 from "../Unhealthy/vadapav.png";
import product_49 from "../Unhealthy/cholepuri.jpg";
import product_50 from "../Unhealthy/pavbhaji.png";

const products = [
  {
    id: "01",
    title: "Baigan Bharta",
    price: 124.0,
    image01: product_1,
    category: "Healthy",

    desc: "Smoky mashed eggplants in a sauteed, tangy, spiced base of onions, tomatoes, garlic, spices ",
  },
  {
    id: "02",
    title: "Bajara whole moong and green peas kichadi",
    price: 150.0,
    image01: product_2,
    category: "Healthy",

    desc: "Bajra,moong,green peas,oil,onions,tomato,garlic,ginger,spices",
  },
  {
    id: "03",
    title: "Fafada jalibi",
    price: 100.0,
    image01: product_31,
    category: "Unhealthy",

    desc: "Gram flour,ajwain,black pepper,Maida,Cardamom powder,corn starch,curd,sugar",
  },
  {
    id: "04",
    title: "Stuffed nachni roti",
    price: 110.0,
    image01: product_26,
    category: "Healthy",

    desc: "Ragi,whole wheat flour,ghee,cauliflower,methi,karela,adrak,green chillie",
  },
  {
    id: "05",
    title: "Aloo tiki Burger",
    price: 115.0,
    image01: product_28,
    category: "Unhealthy",

    desc: "Crispy fired potatoes tikis,spcies,burger buns,Chutney,rice flour",
  },
  {
    id: "06",
    title: "Bulgur Wheat kheer",
    price: 173.0,
    image01: product_3,
    category: "Healthy",

    desc: "Dalia, low fat milk, cornflour, little sugar and elaichi.",
  },
  {
    id: "07",
    title: "Caribbean Steamed Fish",
    price: 123.0,
    image01: product_4,
    category: "Healthy",

    desc: "Red snapper,onion,hot sauce,sprigs of thyme,fish seasoning,red bell pepper,green pepper,orange pepper",
  },
  {
    id: "08",
    title: "Vadapav",
    price: 35.0,
    image01: product_48,
    category: "Unhealthy",

    desc: "Maharashtrian fast food containing of batata vada between the Pav sprinkaled with authentic ghati masala served with fired green chilly",
  },
  {
    id: "09",
    title: "Maggie",
    price: 90.0,
    image01: product_39,
    category: "Unhealthy",

    desc: "Maggie with tadka of onions,tomatoes and green chilies",
  },  
  {
    id: "10",
    title: "Crispy Potato Tacos",
    price: 224.0,
    image01: product_9,
    category: "Healthy",

    desc: "Russet potatos,sour cream,corn tortillas,salsa,cotija cheese",
  },
  {
    id: "11",
    title: "Chickpeas Curry",
    price: 230.0,
    image01: product_7,
    category: "Healthy",

    desc: "Chickpeas,onion,ginger,garlic,tomato,coconut milk",
  },
  {
    id: "12",
    title: "French fries",
    price: 109.0,
    image01: product_32,
    category: "Unhealthy",

    desc: "A popular snack and side dish made from sliced potatoes that have been deep-fried until crispy and then seasoned with salt",
  },
  {
    id: "13",
    title: "Saag Paneer",
    price: 209.0,
    image01: product_21,
    category: "Unhealthy",

    desc: "Panner cubes cooked in spainsh based gravy and indian spices",
  },
  {
    id: "14",
    title: "Dal Makhani",
    price: 200.0,
    image01: product_10,
    category: "Healthy",

    desc: "Whole black lentils slow cooked overnight with aromatic spices and cream",
  },
  {
    id: "15",
    title: "Garlic Naan",
    price: 80.0,
    image01: product_34,
    category: "Unhealthy",

    desc: "Maida,curd,garlic with brushing with some garlic butter",
  },
  {
    id: "16",
    title: "Fish Chips With Tartare Sauce",
    price: 250.0,
    image01: product_12,
    category: "Healthy",

    desc: "Potatoes,white fish fillets,grated zestand lemon juice,all-purpose flour,egg,sweet relish,mayonnaise,mustard,ketchup,lemon",
  },
  {
    id: "17",
    title: "Gujarati Thali",
    price: 219.0,
    image01: product_35,
    category: "Unhealthy",

    desc: "Any 2 sabji (Aloo/veg sabji/kathol/panner)+Any 1(4 Phulka roti/6 poori)+Any 1 Dal(Gujarati/Punjabi)+Steam Rice+Green salad+Achar+Mukvas",
  },
  {
    id: "18",
    title: "kachori",
    price: 35.0,
    image01: product_36,
    category: "Unhealthy",

    desc: "Kachori is a spicy deep fried snak with potato and onion stuffing",
  },
  {
    id: "19",
    title: "Punjabi Thali",
    price: 279.0,
    image01: product_45,
    category: "Unhealthy",

    desc: "Soft melt-in-mouth marinated panner cooked in rich inion-tomato gravy+Choice (4 wheat Tawa butter roti/2 Tandoori Butter Naan)+Achar+salad+green chillies+mukhwas",
  },
  {
    id: "20",
    title: "Lemon Rice",
    price: 109.0,
    image01: product_18,
    category: "Healthy",

    desc: "Rice,lemon juice,urad dal,peanuts,cashews,species",
  },
  {
    id: "21",
    title: "Lamb Rogan Josh",
    price: 250.0,
    image01: product_37,
    category: "Unhealthy",

    desc: "A classic recipe from kashmiri cuisine wherein lamb chunks are slow cooked with spices,herbs and yogurt",
  },
  {
    id: "22",
    title: "Fried Egg",
    price: 229.0,
    image01: product_33,
    category: "Unhealthy",

    desc: "We preapre sunny side in your style eggs fried and served with brown bread toast, Accomplained with tomato sause",
  },
  {
    id: "23",
    title: "Carrot Biryani",
    price: 205.0,
    image01: product_5,
    category: "Healthy",

    desc: "Onion,green chilli,garlic clove,carrots,brown basmati rice,peas,spices",
  },
  {
    id: "24",
    title: "Cauliflower Paneer Peas Curry",
    price: 254.0,
    image01: product_6,
    category: "Healthy",

    desc: "Paneer,cauliflower,onions,garlic cloves,carton passata,peas",
  },
  {
    id: "25",
    title: "Crispy Baked Falafel",
    price: 189.0,
    image01: product_8,
    category: "Healthy",

    desc: "Uncooked dry chickpeas,shallot and garlic,lemon zest,cilantro and parsley",
  },
  {
    id: "26",
    title: "Cheezy-7 Pizza",
    price: 255.0,
    image01: product_27,
    category: "Unhealthy",

    desc: "An exoctic combination of white mozzarilla, cream white cheese ceddar,monterey jack,cream orange cheese,colby, orange cheddar",
  },
  {
    id: "27",
    title: "Chinese Combo",
    price: 299.0,
    image01: product_30,
    category: "Unhealthy",

    desc: "Noodles tossed in a wo with julienne cut vegetables+aromatic rice tossed in a wok with finely chooped vegetables+crispy vegetable balls tossed in giner garlic and soy sauce served with salad",
  },
  {
    id: "28",
    title: "Oats Dosa",
    price: 142.0,
    image01: product_13,
    category: "Healthy",

    desc: "Oats,rice flour,rava/semolina,onion,curd",
  },
  {
    id: "29",
    title: "Indian bean Broccoli Carrot Salad",
    price: 267.0,
    image01: product_14,
    category: "Healthy",

    desc: "Green bean,broccoli,black mustard seed,peas,carrots,sunflower seed",
  },
  {
    id: "30",
    title: "Date and Walnut Balls",
    price: 190.0,
    image01: product_11,
    category: "Healthy",

    desc: "Chopped black seedless date,chooped walnuts,elaichi",
  },
  {
    id: "31",
    title: "Masala khichdi",
    price: 224.0,
    image01: product_40,
    category: "Unhealthy",

    desc: "Comforting homestyle khichdi tempered with perfect blend of spices served with Dahi, Accomplained with papad+onions crisp+achar+salad",
  },
  {
    id: "32",
    title: "Cheesy Garlic Bread",
    price: 140.0,
    image01: product_41,
    category: "Unhealthy",

    desc: "Yummylicious Garlic bread served with dollops of cheese abd topped with veggies",
  },
  {
    id: "33",
    title: "Butter Chicken",
    price: 200.0,
    image01: product_29,
    category: "Unhealthy",

    desc: "Tandoori chicken served in a mild but aromatic curry made and nourised with goodness by our master-chefs",
  },
  {
    id: "34",
    title: "Lava cake",
    price: 129.0,
    image01: product_38,
    category: "Unhealthy",

    desc: "Sweet Temptation of choco lava cake",
  },
  {
    id: "35",
    title: "Salmon Burgers",
    price: 119.0,
    image01: product_23,
    category: "Healthy",

    desc: "Boneless,skinless salmon fillets,thai red curry paste,soy sauce,carrots,white wine vinegar, golden caster sugar,cucumbers",
  },
  {
    id: "36",
    title: "Creamy kabocha Squash Red Pepper Pasta",
    price: 226.0,
    image01: product_15,
    category: "Healthy",

    desc: "Kabocha squash,cauliflower,gluten-free spaghetti noodles,basil,vegetables broth,nutritional yeast,carrot,onion,stalk celery",
  },
  {
    id: "37",
    title: "Rice Noodle Salad",
    price: 132.0,
    image01: product_20,
    category: "Healthy",

    desc: "Thin vermicelli rice noodles,carrots,cucumbers,lime,jalapeno peppers,fresh herbs",
  },
  {
    id: "38",
    title: "kabuli Chana Biryani",
    price: 241.0,
    image01: product_16,
    category: "Healthy",

    desc: "Brown rice,dhania,low fat milk,bolied kabuli chana,whisked low fat curd,tomato gravy",
  },
  {
    id: "39",
    title: "Misalpav",
    price: 120.0,
    image01: product_42,
    category: "Unhealthy",

    desc: "Misal pav is a popular Maharastrian street food consisting of a sprouts curry, topped with onions and farsan, and serve with 2 Pav",
  },
  {
    id: "40",
    title: "Slow Cooker Seafood Ramen",
    price: 124.0,
    image01: product_22,
    category: "Healthy",

    desc: "Ramen noodles,seafood,broth,soy sauce,rice vinegar,onion,garlic,ginger",
  },
  {
    id: "41",
    title: "Pakora",
    price: 180.0,
    image01: product_43,
    category: "Unhealthy",

    desc: "Mix bhajiya plate contains Kanda bhajiya, Potato bhajiya, Dal wada mainly made with gram flour and served with spicy and sweet chutney",
  },
  {
    id: "42",
    title: "Chicken Nuggets",
    price: 219.0,
    image01: product_46,
    category: "Unhealthy",

    desc: "Golden crisp juicy chicken nuggest served with chiptole mayo",
  },
  {
    id: "43",
    title: "Samosa",
    price: 85.0,
    image01: product_47,
    category: "Unhealthy",

    desc: "Samosa comes with a spiced potatoes,onion,and peas serverd with methi chutney and green chutney",
  },
  {
    id: "44",
    title: "Panipuri",
    price: 50.0,
    image01: product_44,
    category: "Unhealthy",
  },
  {
    id: "45",
    title: "Turkey Carrot Mushroom Dumplings",
    price: 24.0,
    image01: product_24,
    category: "Healthy",

    desc: "Carrots,ground turkey,mushrooms,soy sauce,rice wine,onion powder,cornstarch,dumpling wrappers",
  },
  {
    id: "46",
    title: "Moong Dal and Spinach Soup",
    price: 123.0,
    image01: product_19,
    category: "Healthy",

    desc: "Yellow moongdal,chopped spinach,cornflour,low fat milk",
  },
  {
    id: "47",
    title: "Keto Broccoli Cheddar Soup",
    price: 229.0,
    image01: product_17,
    category: "Healthy",

    desc: "Chicken broth,heavy cream,broccoli,chedar cheese,onion and species",
  },
  {
    id: "48",
    title: "Vegan Enchiladas with Lentils and Sweet Potato",
    price: 256.0,
    image01: product_25,
    category: "Healthy",

    desc: "Enchilada Sauce,lentil enchilada filling,corn tortillas,avocado,cilantro,sunflower or pumpkin seeds",
  },
  {
    id: "49",
    title: "Cholepuri",
    price: 200.0,
    image01: product_49,
    category: "Unhealthy",

    desc: "Chole cooked in thick aromatic masala gravy serving with 2 bhatura accoumplained with salad,fired,green chilli and achar",
  },
  {
    id: "50",
    title: "Pav Bhaji",
    price: 179.0,
    image01: product_50,
    category: "Unhealthy",

    desc: "Medium spicy Mashed Vegetables Curry topped with a butter serverd with 2 soft butter pav +salad",
  },

];

export default products;