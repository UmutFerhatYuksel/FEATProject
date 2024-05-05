import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FIREBASE_AUTH } from '../firebase';
import { collection, doc } from 'firebase/firestore';
import tw from 'twrnc';

export default function CreateRecipes() {

    // const BreakfastRecipes = [
    //     {
    //         "Name": "Pan-fried Chicken Breast",
    //         "Carb": 0,
    //         "Fat": 0.8,
    //         "Protein": 27.1,
    //         "Vitamin_C": 6.02,
    //         "Calcium": 26.64,
    //         "Iron": 1.1,
    //         "Magnesium": 36,
    //         "Calories_per_100g": 117.4,
    //         "Tag": "Protein",
    //         "img_url": "https://cdn.ye-mek.net/App_UI/Img/out/650/2021/07/tavuk-gogsu-kizartmasi-resimli-yemek-tarifi(9).jpg",
    //         "recipe": "To make pan-fried chicken breast, start by pounding boneless, skinless chicken breasts to an even thickness, then season them with salt and pepper. Heat olive oil or vegetable oil in a large skillet over medium-high heat, and add the seasoned chicken breasts once the oil is hot. Cook for 6-8 minutes on each side until golden brown and cooked through. Remove the chicken breasts from the skillet and let them rest for a few minutes before serving. Enjoy your delicious pan-fried chicken breasts with your favorite side dishes or sauces.",
    //         "ingredients": [
    //             {
    //                 "Name": "Chicken Breast",
    //                 "Percentage": 1.0
    //             }
    //         ]
    //     },
    //     {
    //         "Name": "Chicken and Rice Pilaf",
    //         "Carb": 24.3,
    //         "Fat": 4.7,
    //         "Protein": 22.6,
    //         "Vitamin_C": 2.1,
    //         "Calcium": 16.8,
    //         "Iron": 1.2,
    //         "Magnesium": 46.3,
    //         "Calories_per_100g": 186.5,
    //         "Tag": "Protein",
    //         "img_url": "https://example.com/tavuklu_pilav.jpg",
    //         "recipe": "Tavuklu pilav yapmak için öncelikle pirinci yıkayıp süzün. Sonra tavuk göğsünü küçük parçalara kesin ve bir tavada pişirin. Başka bir tencerede tereyağı eritin ve ince doğranmış soğanı ekleyip pembeleşene kadar kavurun. Üzerine yıkanmış pirinci ekleyin ve birkaç dakika daha kavurun. Ardından tavuk suyunu ve tuzunu ekleyip karıştırın. Kaynamaya başlayınca ocağın altını kısın, tencerenin kapağını kapatın ve pirinç suyunu çekene kadar pişirin. Pilav piştikten sonra ocaktan alıp demlenmeye bırakın. Demlendikten sonra servis yapın ve yanında salata ile servis edin.",
    //         "ingredients": [
    //             {
    //                 "Name": "Rice",
    //                 "Percentage": 0.4
    //             },
    //             {
    //                 "Name": "Chicken Breast",
    //                 "Percentage": 0.6
    //             }
    //         ]
    //     },
    //     {
    //         "Name": "Grilled Salmon",
    //         "Carb": 0,
    //         "Fat": 13.4,
    //         "Protein": 22.8,
    //         "Vitamin_C": 0,
    //         "Calcium": 9.8,
    //         "Iron": 0.5,
    //         "Magnesium": 31,
    //         "Calories_per_100g": 217,
    //         "Tag": "Protein",
    //         "img_url": "https://example.com/grilled_salmon.jpg",
    //         "recipe": "To grill salmon, start by seasoning the salmon fillets with salt, pepper, and your favorite herbs or spices. Preheat your grill to medium-high heat and lightly oil the grates to prevent sticking. Place the seasoned salmon fillets on the grill, skin-side down, and cook for about 4-5 minutes per side, or until the salmon easily flakes with a fork. Remove the grilled salmon from the heat and let it rest for a few minutes before serving. Serve your delicious grilled salmon with lemon wedges and your favorite side dishes.",
    //         "ingredients": [
    //             {
    //                 "Name": "Salmon Fillet",
    //                 "Percentage": 1.0
    //             }
    //         ]
    //     },
    //     {
    //         "Name": "Beef Stir-Fry",
    //         "Carb": 4.6,
    //         "Fat": 7.1,
    //         "Protein": 15.9,
    //         "Vitamin_C": 12.3,
    //         "Calcium": 17.2,
    //         "Iron": 1.9,
    //         "Magnesium": 25,
    //         "Calories_per_100g": 151.4,
    //         "Tag": "Protein",
    //         "img_url": "https://example.com/beef_stir_fry.jpg",
    //         "recipe": "To make beef stir-fry, start by slicing beef into thin strips and marinating them in a mixture of soy sauce, garlic, ginger, and a splash of sesame oil. Heat oil in a wok or large skillet over high heat, and add the marinated beef strips once the oil is hot. Stir-fry the beef for 2-3 minutes until browned, then remove it from the wok and set it aside. In the same wok, add sliced vegetables such as bell peppers, onions, and broccoli, and stir-fry for 3-4 minutes until tender-crisp. Return the beef to the wok, add any remaining marinade, and stir-fry for another minute. Serve your delicious beef stir-fry hot over steamed rice or noodles.",
    //         "ingredients": [
    //             {
    //                 "Name": "Beef",
    //                 "Percentage": 0.6
    //             },
    //             {
    //                 "Name": "Mixed Vegetables",
    //                 "Percentage": 0.4
    //             }
    //         ]
    //     },
    //     {
    //         "Name": "Vegetable Quinoa Salad",
    //         "Carb": 18.6,
    //         "Fat": 6.2,
    //         "Protein": 4.5,
    //         "Vitamin_C": 19.7,
    //         "Calcium": 3.1,
    //         "Iron": 1.5,
    //         "Magnesium": 59,
    //         "Calories_per_100g": 132.8,
    //         "Tag": "Protein",
    //         "img_url": "https://example.com/vegetable_quinoa_salad.jpg",
    //         "recipe": "To make vegetable quinoa salad, start by cooking quinoa according to package instructions and letting it cool. In a large bowl, combine cooked quinoa with chopped vegetables such as cucumber, cherry tomatoes, bell peppers, and red onion. Add fresh herbs like parsley and mint for extra flavor. In a small bowl, whisk together olive oil, lemon juice, garlic, salt, and pepper to make the dressing. Pour the dressing over the quinoa and vegetables, and toss to coat evenly. Chill the salad in the refrigerator for at least 30 minutes before serving. Enjoy your refreshing vegetable quinoa salad as a light and nutritious meal.",
    //         "ingredients": [
    //             {
    //                 "Name": "Quinoa",
    //                 "Percentage": 0.6
    //             },
    //             {
    //                 "Name": "Mixed Vegetables",
    //                 "Percentage": 0.4
    //             }
    //         ]
    //     },
    //     {
    //         "Name": "Spaghetti Carbonara",
    //         "Carb": 24.8,
    //         "Fat": 12.2,
    //         "Protein": 9.6,
    //         "Vitamin_C": 0.5,
    //         "Calcium": 12.8,
    //         "Iron": 1.5,
    //         "Magnesium": 30,
    //         "Calories_per_100g": 248.7,
    //         "Tag": "Protein",
    //         "img_url": "https://example.com/spaghetti_carbonara.jpg",
    //         "recipe": "To make spaghetti carbonara, start by cooking spaghetti according to package instructions until al dente. While the pasta is cooking, fry diced bacon in a skillet until crispy, then remove it from the skillet and set it aside. In a bowl, whisk together eggs, grated Parmesan cheese, and black pepper to make the sauce. Once the spaghetti is cooked, drain it and immediately add it to the skillet with the bacon grease, tossing to coat. Remove the skillet from the heat and quickly stir in the egg and cheese mixture, allowing the residual heat to cook the eggs and melt the cheese. Serve your delicious spaghetti carbonara hot, garnished with extra Parmesan cheese and chopped parsley if desired.",
    //         "ingredients": [
    //             {
    //                 "Name": "Spaghetti",
    //                 "Percentage": 0.6
    //             },
    //             {
    //                 "Name": "Bacon",
    //                 "Percentage": 0.2
    //             },
    //             {
    //                 "Name": "Eggs",
    //                 "Percentage": 0.1
    //             },
    //             {
    //                 "Name": "Parmesan Cheese",
    //                 "Percentage": 0.1
    //             }
    //         ]
    //     },
    //     {
    //         "Name": "Mediterranean Grilled Vegetables",
    //         "Carb": 6.2,
    //         "Fat": 5.8,
    //         "Protein": 2.1,
    //         "Vitamin_C": 27.5,
    //         "Calcium": 2.4,
    //         "Iron": 0.9,
    //         "Magnesium": 24,
    //         "Calories_per_100g": 90.3,
    //         "Tag": "Protein",
    //         "img_url": "https://example.com/mediterranean_grilled_vegetables.jpg",
    //         "recipe": "To make Mediterranean grilled vegetables, start by slicing your favorite vegetables such as zucchini, bell peppers, eggplant, and cherry tomatoes. Toss the vegetables with olive oil, minced garlic, dried oregano, salt, and pepper. Preheat your grill to medium-high heat, and place the seasoned vegetables on the grill. Grill the vegetables for 5-7 minutes on each side, or until they are tender and slightly charred. Remove the grilled vegetables from the heat and drizzle them with balsamic glaze before serving. Enjoy your flavorful Mediterranean grilled vegetables as a side dish or a light main course.",
    //         "ingredients": [
    //             {
    //                 "Name": "Mixed Vegetables",
    //                 "Percentage": 1.0
    //             }
    //         ]
    //     },
    //     {
    //         "Name": "Tofu Stir-Fry",
    //         "Carb": 5.4,
    //         "Fat": 8.7,
    //         "Protein": 10.1,
    //         "Vitamin_C": 14.2,
    //         "Calcium": 20.3,
    //         "Iron": 2.2,
    //         "Magnesium": 34,
    //         "Calories_per_100g": 147.6,
    //         "Tag": "Protein",
    //         "img_url": "https://example.com/tofu_stir_fry.jpg",
    //         "recipe": "To make tofu stir-fry, start by pressing firm tofu to remove excess moisture, then cut it into cubes. Heat oil in a wok or large skillet over high heat, and add the tofu cubes once the oil is hot. Stir-fry the tofu for 5-7 minutes until golden brown on all sides, then remove it from the wok and set it aside. In the same wok, add sliced vegetables such as broccoli, bell peppers, and carrots, and stir-fry for 3-4 minutes until tender-crisp. Return the tofu to the wok, add soy sauce and any desired seasonings, and stir-fry for another minute. Serve your delicious tofu stir-fry hot over steamed rice or noodles.",
    //         "ingredients": [
    //             {
    //                 "Name": "Tofu",
    //                 "Percentage": 0.6
    //             },
    //             {
    //                 "Name": "Mixed Vegetables",
    //                 "Percentage": 0.4
    //             }
    //         ]
    //     }
    // ]
    // const LunchRecipes = [
    //     {
    //         "Name": "Pan-fried Chicken Breast",
    //         "Carb": 0,
    //         "Fat": 0.8,
    //         "Protein": 27.1,
    //         "Vitamin_C": 6.02,
    //         "Calcium": 26.64,
    //         "Iron": 1.1,
    //         "Magnesium": 36,
    //         "Calories_per_100g": 117.4,
    //         "Tag": "Protein",
    //         "img_url": "https://cdn.ye-mek.net/App_UI/Img/out/650/2021/07/tavuk-gogsu-kizartmasi-resimli-yemek-tarifi(9).jpg",
    //         "recipe": "To make pan-fried chicken breast, start by pounding boneless, skinless chicken breasts to an even thickness, then season them with salt and pepper. Heat olive oil or vegetable oil in a large skillet over medium-high heat, and add the seasoned chicken breasts once the oil is hot. Cook for 6-8 minutes on each side until golden brown and cooked through. Remove the chicken breasts from the skillet and let them rest for a few minutes before serving. Enjoy your delicious pan-fried chicken breasts with your favorite side dishes or sauces.",
    //         "ingredients": [
    //             {
    //                 "Name": "Chicken Breast",
    //                 "Percentage": 1.0
    //             }
    //         ]
    //     },
    //     {
    //         "Name": "Chicken and Rice Pilaf",
    //         "Carb": 24.3,
    //         "Fat": 4.7,
    //         "Protein": 22.6,
    //         "Vitamin_C": 2.1,
    //         "Calcium": 16.8,
    //         "Iron": 1.2,
    //         "Magnesium": 46.3,
    //         "Calories_per_100g": 186.5,
    //         "Tag": "Protein",
    //         "img_url": "https://example.com/tavuklu_pilav.jpg",
    //         "recipe": "Tavuklu pilav yapmak için öncelikle pirinci yıkayıp süzün. Sonra tavuk göğsünü küçük parçalara kesin ve bir tavada pişirin. Başka bir tencerede tereyağı eritin ve ince doğranmış soğanı ekleyip pembeleşene kadar kavurun. Üzerine yıkanmış pirinci ekleyin ve birkaç dakika daha kavurun. Ardından tavuk suyunu ve tuzunu ekleyip karıştırın. Kaynamaya başlayınca ocağın altını kısın, tencerenin kapağını kapatın ve pirinç suyunu çekene kadar pişirin. Pilav piştikten sonra ocaktan alıp demlenmeye bırakın. Demlendikten sonra servis yapın ve yanında salata ile servis edin.",
    //         "ingredients": [
    //             {
    //                 "Name": "Rice",
    //                 "Percentage": 0.4
    //             },
    //             {
    //                 "Name": "Chicken Breast",
    //                 "Percentage": 0.6
    //             }
    //         ]
    //     },
    //     {
    //         "Name": "Grilled Salmon",
    //         "Carb": 0,
    //         "Fat": 13.4,
    //         "Protein": 22.8,
    //         "Vitamin_C": 0,
    //         "Calcium": 9.8,
    //         "Iron": 0.5,
    //         "Magnesium": 31,
    //         "Calories_per_100g": 217,
    //         "Tag": "Protein",
    //         "img_url": "https://example.com/grilled_salmon.jpg",
    //         "recipe": "To grill salmon, start by seasoning the salmon fillets with salt, pepper, and your favorite herbs or spices. Preheat your grill to medium-high heat and lightly oil the grates to prevent sticking. Place the seasoned salmon fillets on the grill, skin-side down, and cook for about 4-5 minutes per side, or until the salmon easily flakes with a fork. Remove the grilled salmon from the heat and let it rest for a few minutes before serving. Serve your delicious grilled salmon with lemon wedges and your favorite side dishes.",
    //         "ingredients": [
    //             {
    //                 "Name": "Salmon Fillet",
    //                 "Percentage": 1.0
    //             }
    //         ]
    //     },
    //     {
    //         "Name": "Beef Stir-Fry",
    //         "Carb": 4.6,
    //         "Fat": 7.1,
    //         "Protein": 15.9,
    //         "Vitamin_C": 12.3,
    //         "Calcium": 17.2,
    //         "Iron": 1.9,
    //         "Magnesium": 25,
    //         "Calories_per_100g": 151.4,
    //         "Tag": "Protein",
    //         "img_url": "https://example.com/beef_stir_fry.jpg",
    //         "recipe": "To make beef stir-fry, start by slicing beef into thin strips and marinating them in a mixture of soy sauce, garlic, ginger, and a splash of sesame oil. Heat oil in a wok or large skillet over high heat, and add the marinated beef strips once the oil is hot. Stir-fry the beef for 2-3 minutes until browned, then remove it from the wok and set it aside. In the same wok, add sliced vegetables such as bell peppers, onions, and broccoli, and stir-fry for 3-4 minutes until tender-crisp. Return the beef to the wok, add any remaining marinade, and stir-fry for another minute. Serve your delicious beef stir-fry hot over steamed rice or noodles.",
    //         "ingredients": [
    //             {
    //                 "Name": "Beef",
    //                 "Percentage": 0.6
    //             },
    //             {
    //                 "Name": "Mixed Vegetables",
    //                 "Percentage": 0.4
    //             }
    //         ]
    //     },
    //     {
    //         "Name": "Vegetable Quinoa Salad",
    //         "Carb": 18.6,
    //         "Fat": 6.2,
    //         "Protein": 4.5,
    //         "Vitamin_C": 19.7,
    //         "Calcium": 3.1,
    //         "Iron": 1.5,
    //         "Magnesium": 59,
    //         "Calories_per_100g": 132.8,
    //         "Tag": "Protein",
    //         "img_url": "https://example.com/vegetable_quinoa_salad.jpg",
    //         "recipe": "To make vegetable quinoa salad, start by cooking quinoa according to package instructions and letting it cool. In a large bowl, combine cooked quinoa with chopped vegetables such as cucumber, cherry tomatoes, bell peppers, and red onion. Add fresh herbs like parsley and mint for extra flavor. In a small bowl, whisk together olive oil, lemon juice, garlic, salt, and pepper to make the dressing. Pour the dressing over the quinoa and vegetables, and toss to coat evenly. Chill the salad in the refrigerator for at least 30 minutes before serving. Enjoy your refreshing vegetable quinoa salad as a light and nutritious meal.",
    //         "ingredients": [
    //             {
    //                 "Name": "Quinoa",
    //                 "Percentage": 0.6
    //             },
    //             {
    //                 "Name": "Mixed Vegetables",
    //                 "Percentage": 0.4
    //             }
    //         ]
    //     },
    //     {
    //         "Name": "Spaghetti Carbonara",
    //         "Carb": 24.8,
    //         "Fat": 12.2,
    //         "Protein": 9.6,
    //         "Vitamin_C": 0.5,
    //         "Calcium": 12.8,
    //         "Iron": 1.5,
    //         "Magnesium": 30,
    //         "Calories_per_100g": 248.7,
    //         "Tag": "Protein",
    //         "img_url": "https://example.com/spaghetti_carbonara.jpg",
    //         "recipe": "To make spaghetti carbonara, start by cooking spaghetti according to package instructions until al dente. While the pasta is cooking, fry diced bacon in a skillet until crispy, then remove it from the skillet and set it aside. In a bowl, whisk together eggs, grated Parmesan cheese, and black pepper to make the sauce. Once the spaghetti is cooked, drain it and immediately add it to the skillet with the bacon grease, tossing to coat. Remove the skillet from the heat and quickly stir in the egg and cheese mixture, allowing the residual heat to cook the eggs and melt the cheese. Serve your delicious spaghetti carbonara hot, garnished with extra Parmesan cheese and chopped parsley if desired.",
    //         "ingredients": [
    //             {
    //                 "Name": "Spaghetti",
    //                 "Percentage": 0.6
    //             },
    //             {
    //                 "Name": "Bacon",
    //                 "Percentage": 0.2
    //             },
    //             {
    //                 "Name": "Eggs",
    //                 "Percentage": 0.1
    //             },
    //             {
    //                 "Name": "Parmesan Cheese",
    //                 "Percentage": 0.1
    //             }
    //         ]
    //     },
    //     {
    //         "Name": "Mediterranean Grilled Vegetables",
    //         "Carb": 6.2,
    //         "Fat": 5.8,
    //         "Protein": 2.1,
    //         "Vitamin_C": 27.5,
    //         "Calcium": 2.4,
    //         "Iron": 0.9,
    //         "Magnesium": 24,
    //         "Calories_per_100g": 90.3,
    //         "Tag": "Protein",
    //         "img_url": "https://example.com/mediterranean_grilled_vegetables.jpg",
    //         "recipe": "To make Mediterranean grilled vegetables, start by slicing your favorite vegetables such as zucchini, bell peppers, eggplant, and cherry tomatoes. Toss the vegetables with olive oil, minced garlic, dried oregano, salt, and pepper. Preheat your grill to medium-high heat, and place the seasoned vegetables on the grill. Grill the vegetables for 5-7 minutes on each side, or until they are tender and slightly charred. Remove the grilled vegetables from the heat and drizzle them with balsamic glaze before serving. Enjoy your flavorful Mediterranean grilled vegetables as a side dish or a light main course.",
    //         "ingredients": [
    //             {
    //                 "Name": "Mixed Vegetables",
    //                 "Percentage": 1.0
    //             }
    //         ]
    //     },
    //     {
    //         "Name": "Tofu Stir-Fry",
    //         "Carb": 5.4,
    //         "Fat": 8.7,
    //         "Protein": 10.1,
    //         "Vitamin_C": 14.2,
    //         "Calcium": 20.3,
    //         "Iron": 2.2,
    //         "Magnesium": 34,
    //         "Calories_per_100g": 147.6,
    //         "Tag": "Protein",
    //         "img_url": "https://example.com/tofu_stir_fry.jpg",
    //         "recipe": "To make tofu stir-fry, start by pressing firm tofu to remove excess moisture, then cut it into cubes. Heat oil in a wok or large skillet over high heat, and add the tofu cubes once the oil is hot. Stir-fry the tofu for 5-7 minutes until golden brown on all sides, then remove it from the wok and set it aside. In the same wok, add sliced vegetables such as broccoli, bell peppers, and carrots, and stir-fry for 3-4 minutes until tender-crisp. Return the tofu to the wok, add soy sauce and any desired seasonings, and stir-fry for another minute. Serve your delicious tofu stir-fry hot over steamed rice or noodles.",
    //         "ingredients": [
    //             {
    //                 "Name": "Tofu",
    //                 "Percentage": 0.6
    //             },
    //             {
    //                 "Name": "Mixed Vegetables",
    //                 "Percentage": 0.4
    //             }
    //         ]
    //     }
    // ]
    // const DinnerRecipes = [
    //     {
    //         "Name": "Pan-fried Chicken Breast",
    //         "Carb": 0,
    //         "Fat": 0.8,
    //         "Protein": 27.1,
    //         "Vitamin_C": 6.02,
    //         "Calcium": 26.64,
    //         "Iron": 1.1,
    //         "Magnesium": 36,
    //         "Calories_per_100g": 117.4,
    //         "Tag": "Protein",
    //         "img_url": "https://cdn.ye-mek.net/App_UI/Img/out/650/2021/07/tavuk-gogsu-kizartmasi-resimli-yemek-tarifi(9).jpg",
    //         "recipe": "To make pan-fried chicken breast, start by pounding boneless, skinless chicken breasts to an even thickness, then season them with salt and pepper. Heat olive oil or vegetable oil in a large skillet over medium-high heat, and add the seasoned chicken breasts once the oil is hot. Cook for 6-8 minutes on each side until golden brown and cooked through. Remove the chicken breasts from the skillet and let them rest for a few minutes before serving. Enjoy your delicious pan-fried chicken breasts with your favorite side dishes or sauces.",
    //         "ingredients": [
    //             {
    //                 "Name": "Chicken Breast",
    //                 "Percentage": 1.0
    //             }
    //         ]
    //     },
    //     {
    //         "Name": "Chicken and Rice Pilaf",
    //         "Carb": 24.3,
    //         "Fat": 4.7,
    //         "Protein": 22.6,
    //         "Vitamin_C": 2.1,
    //         "Calcium": 16.8,
    //         "Iron": 1.2,
    //         "Magnesium": 46.3,
    //         "Calories_per_100g": 186.5,
    //         "Tag": "Protein",
    //         "img_url": "https://example.com/tavuklu_pilav.jpg",
    //         "recipe": "Tavuklu pilav yapmak için öncelikle pirinci yıkayıp süzün. Sonra tavuk göğsünü küçük parçalara kesin ve bir tavada pişirin. Başka bir tencerede tereyağı eritin ve ince doğranmış soğanı ekleyip pembeleşene kadar kavurun. Üzerine yıkanmış pirinci ekleyin ve birkaç dakika daha kavurun. Ardından tavuk suyunu ve tuzunu ekleyip karıştırın. Kaynamaya başlayınca ocağın altını kısın, tencerenin kapağını kapatın ve pirinç suyunu çekene kadar pişirin. Pilav piştikten sonra ocaktan alıp demlenmeye bırakın. Demlendikten sonra servis yapın ve yanında salata ile servis edin.",
    //         "ingredients": [
    //             {
    //                 "Name": "Rice",
    //                 "Percentage": 0.4
    //             },
    //             {
    //                 "Name": "Chicken Breast",
    //                 "Percentage": 0.6
    //             }
    //         ]
    //     },
    //     {
    //         "Name": "Grilled Salmon",
    //         "Carb": 0,
    //         "Fat": 13.4,
    //         "Protein": 22.8,
    //         "Vitamin_C": 0,
    //         "Calcium": 9.8,
    //         "Iron": 0.5,
    //         "Magnesium": 31,
    //         "Calories_per_100g": 217,
    //         "Tag": "Protein",
    //         "img_url": "https://example.com/grilled_salmon.jpg",
    //         "recipe": "To grill salmon, start by seasoning the salmon fillets with salt, pepper, and your favorite herbs or spices. Preheat your grill to medium-high heat and lightly oil the grates to prevent sticking. Place the seasoned salmon fillets on the grill, skin-side down, and cook for about 4-5 minutes per side, or until the salmon easily flakes with a fork. Remove the grilled salmon from the heat and let it rest for a few minutes before serving. Serve your delicious grilled salmon with lemon wedges and your favorite side dishes.",
    //         "ingredients": [
    //             {
    //                 "Name": "Salmon Fillet",
    //                 "Percentage": 1.0
    //             }
    //         ]
    //     },
    //     {
    //         "Name": "Beef Stir-Fry",
    //         "Carb": 4.6,
    //         "Fat": 7.1,
    //         "Protein": 15.9,
    //         "Vitamin_C": 12.3,
    //         "Calcium": 17.2,
    //         "Iron": 1.9,
    //         "Magnesium": 25,
    //         "Calories_per_100g": 151.4,
    //         "Tag": "Protein",
    //         "img_url": "https://example.com/beef_stir_fry.jpg",
    //         "recipe": "To make beef stir-fry, start by slicing beef into thin strips and marinating them in a mixture of soy sauce, garlic, ginger, and a splash of sesame oil. Heat oil in a wok or large skillet over high heat, and add the marinated beef strips once the oil is hot. Stir-fry the beef for 2-3 minutes until browned, then remove it from the wok and set it aside. In the same wok, add sliced vegetables such as bell peppers, onions, and broccoli, and stir-fry for 3-4 minutes until tender-crisp. Return the beef to the wok, add any remaining marinade, and stir-fry for another minute. Serve your delicious beef stir-fry hot over steamed rice or noodles.",
    //         "ingredients": [
    //             {
    //                 "Name": "Beef",
    //                 "Percentage": 0.6
    //             },
    //             {
    //                 "Name": "Mixed Vegetables",
    //                 "Percentage": 0.4
    //             }
    //         ]
    //     },
    //     {
    //         "Name": "Vegetable Quinoa Salad",
    //         "Carb": 18.6,
    //         "Fat": 6.2,
    //         "Protein": 4.5,
    //         "Vitamin_C": 19.7,
    //         "Calcium": 3.1,
    //         "Iron": 1.5,
    //         "Magnesium": 59,
    //         "Calories_per_100g": 132.8,
    //         "Tag": "Protein",
    //         "img_url": "https://example.com/vegetable_quinoa_salad.jpg",
    //         "recipe": "To make vegetable quinoa salad, start by cooking quinoa according to package instructions and letting it cool. In a large bowl, combine cooked quinoa with chopped vegetables such as cucumber, cherry tomatoes, bell peppers, and red onion. Add fresh herbs like parsley and mint for extra flavor. In a small bowl, whisk together olive oil, lemon juice, garlic, salt, and pepper to make the dressing. Pour the dressing over the quinoa and vegetables, and toss to coat evenly. Chill the salad in the refrigerator for at least 30 minutes before serving. Enjoy your refreshing vegetable quinoa salad as a light and nutritious meal.",
    //         "ingredients": [
    //             {
    //                 "Name": "Quinoa",
    //                 "Percentage": 0.6
    //             },
    //             {
    //                 "Name": "Mixed Vegetables",
    //                 "Percentage": 0.4
    //             }
    //         ]
    //     },
    //     {
    //         "Name": "Spaghetti Carbonara",
    //         "Carb": 24.8,
    //         "Fat": 12.2,
    //         "Protein": 9.6,
    //         "Vitamin_C": 0.5,
    //         "Calcium": 12.8,
    //         "Iron": 1.5,
    //         "Magnesium": 30,
    //         "Calories_per_100g": 248.7,
    //         "Tag": "Protein",
    //         "img_url": "https://example.com/spaghetti_carbonara.jpg",
    //         "recipe": "To make spaghetti carbonara, start by cooking spaghetti according to package instructions until al dente. While the pasta is cooking, fry diced bacon in a skillet until crispy, then remove it from the skillet and set it aside. In a bowl, whisk together eggs, grated Parmesan cheese, and black pepper to make the sauce. Once the spaghetti is cooked, drain it and immediately add it to the skillet with the bacon grease, tossing to coat. Remove the skillet from the heat and quickly stir in the egg and cheese mixture, allowing the residual heat to cook the eggs and melt the cheese. Serve your delicious spaghetti carbonara hot, garnished with extra Parmesan cheese and chopped parsley if desired.",
    //         "ingredients": [
    //             {
    //                 "Name": "Spaghetti",
    //                 "Percentage": 0.6
    //             },
    //             {
    //                 "Name": "Bacon",
    //                 "Percentage": 0.2
    //             },
    //             {
    //                 "Name": "Eggs",
    //                 "Percentage": 0.1
    //             },
    //             {
    //                 "Name": "Parmesan Cheese",
    //                 "Percentage": 0.1
    //             }
    //         ]
    //     },
    //     {
    //         "Name": "Mediterranean Grilled Vegetables",
    //         "Carb": 6.2,
    //         "Fat": 5.8,
    //         "Protein": 2.1,
    //         "Vitamin_C": 27.5,
    //         "Calcium": 2.4,
    //         "Iron": 0.9,
    //         "Magnesium": 24,
    //         "Calories_per_100g": 90.3,
    //         "Tag": "Protein",
    //         "img_url": "https://example.com/mediterranean_grilled_vegetables.jpg",
    //         "recipe": "To make Mediterranean grilled vegetables, start by slicing your favorite vegetables such as zucchini, bell peppers, eggplant, and cherry tomatoes. Toss the vegetables with olive oil, minced garlic, dried oregano, salt, and pepper. Preheat your grill to medium-high heat, and place the seasoned vegetables on the grill. Grill the vegetables for 5-7 minutes on each side, or until they are tender and slightly charred. Remove the grilled vegetables from the heat and drizzle them with balsamic glaze before serving. Enjoy your flavorful Mediterranean grilled vegetables as a side dish or a light main course.",
    //         "ingredients": [
    //             {
    //                 "Name": "Mixed Vegetables",
    //                 "Percentage": 1.0
    //             }
    //         ]
    //     },
    //     {
    //         "Name": "Tofu Stir-Fry",
    //         "Carb": 5.4,
    //         "Fat": 8.7,
    //         "Protein": 10.1,
    //         "Vitamin_C": 14.2,
    //         "Calcium": 20.3,
    //         "Iron": 2.2,
    //         "Magnesium": 34,
    //         "Calories_per_100g": 147.6,
    //         "Tag": "Protein",
    //         "img_url": "https://example.com/tofu_stir_fry.jpg",
    //         "recipe": "To make tofu stir-fry, start by pressing firm tofu to remove excess moisture, then cut it into cubes. Heat oil in a wok or large skillet over high heat, and add the tofu cubes once the oil is hot. Stir-fry the tofu for 5-7 minutes until golden brown on all sides, then remove it from the wok and set it aside. In the same wok, add sliced vegetables such as broccoli, bell peppers, and carrots, and stir-fry for 3-4 minutes until tender-crisp. Return the tofu to the wok, add soy sauce and any desired seasonings, and stir-fry for another minute. Serve your delicious tofu stir-fry hot over steamed rice or noodles.",
    //         "ingredients": [
    //             {
    //                 "Name": "Tofu",
    //                 "Percentage": 0.6
    //             },
    //             {
    //                 "Name": "Mixed Vegetables",
    //                 "Percentage": 0.4
    //             }
    //         ]
    //     }
    // ]

    // const ProteinMeal = [
    //     {
    //         "Name": "Pan-fried chicken breast",
    //         "Carb": 0,
    //         "Fat": 0.8,
    //         "Protein": 27.1,
    //         "Vitamin_C": 6.02,
    //         "Calcium": 26.64,
    //         "Iron": 1.1,
    //         "Magnesium": 36,
    //         "Calories_per_100g": 117.4,
    //         "Tag": "Protein",
    //         "img_url": "https://cdn.ye-mek.net/App_UI/Img/out/650/2021/07/tavuk-gogsu-kizartmasi-resimli-yemek-tarifi(9).jpg",
    //         "recipe": " To make pan-fried chicken breast, start by pounding boneless, skinless chicken breasts to an even thickness, then season them with salt and pepper. Heat olive oil or vegetable oil in a large skillet over medium-high heat, and add the seasoned chicken breasts once the oil is hot. Cook for 6-8 minutes on each side until golden brown and cooked through. Remove the chicken breasts from the skillet and let them rest for a few minutes before serving. Enjoy your delicious pan-fried chicken breasts with your favorite side dishes or sauces.",
    //         "ingredients": [
    //             {
    //                 "Name": "chicken Breast",
    //                 "Percentage": 1.0
    //             }
    //         ]
    //     },
    //     {
    //         "Name": "Grilled Salmon",
    //         "Carb": 0,
    //         "Fat": 13.38,
    //         "Protein": 25.72,
    //         "Vitamin_C": 4.1,
    //         "Calcium": 28,
    //         "Iron": 0.91,
    //         "Magnesium": 30,
    //         "Calories_per_100g": 231,
    //         "Tag": "Protein",
    //         "img_url": "https://i.lezzet.com.tr/images-xxlarge-secondary/somonun-pistigi-nasil-anlasilir-d4cc35ac-6b8e-46ca-8ac6-e03144abdefa.jpg",
    //         "recipe": " To prepare grilled salmon, preheat your grill to medium-high heat. Season the salmon fillets with salt, pepper, and desired seasonings like garlic powder or lemon zest. Place the seasoned salmon fillets skin-side down on the grill grates. Grill for approximately 4-6 minutes per side until the salmon is opaque and easily flakes with a fork. Avoid over-flipping to prevent sticking. Once cooked through, remove from the grill and serve immediately. Enjoy your grilled salmon with preferred side dishes such as roasted vegetables or a fresh salad.",
    //         "ingredients": [
    //             {
    //                 "Name": "Salmon",
    //                 "Percentage": 1.0
    //             }
    //         ]

    //     },
    //     {
    //         "Name": "Pan-fried Chicken Breast",
    //         "Carb": 0,
    //         "Fat": 0.8,
    //         "Protein": 27.1,
    //         "Vitamin_C": 6.02,
    //         "Calcium": 26.64,
    //         "Iron": 1.1,
    //         "Magnesium": 36,
    //         "Calories_per_100g": 117.4,
    //         "Tag": "Protein",
    //         "img_url": "https://cdn.ye-mek.net/App_UI/Img/out/650/2021/07/tavuk-gogsu-kizartmasi-resimli-yemek-tarifi(9).jpg",
    //         "recipe": "To make pan-fried chicken breast, start by pounding boneless, skinless chicken breasts to an even thickness, then season them with salt and pepper. Heat olive oil or vegetable oil in a large skillet over medium-high heat, and add the seasoned chicken breasts once the oil is hot. Cook for 6-8 minutes on each side until golden brown and cooked through. Remove the chicken breasts from the skillet and let them rest for a few minutes before serving. Enjoy your delicious pan-fried chicken breasts with your favorite side dishes or sauces.",
    //         "ingredients": [
    //             {
    //                 "Name": "Chicken Breast",
    //                 "Percentage": 1.0
    //             }
    //         ]
    //     },
    //     {
    //         "Name": "Chicken and Rice Pilaf",
    //         "Carb": 24.3,
    //         "Fat": 4.7,
    //         "Protein": 22.6,
    //         "Vitamin_C": 2.1,
    //         "Calcium": 16.8,
    //         "Iron": 1.2,
    //         "Magnesium": 46.3,
    //         "Calories_per_100g": 186.5,
    //         "Tag": "Protein",
    //         "img_url": "https://example.com/tavuklu_pilav.jpg",
    //         "recipe": "To make chicken and rice pilaf, start by rinsing and draining the rice. Then, cut the chicken breast into small pieces and cook them in a pan. In another pot, melt butter and sauté finely chopped onions until golden brown. Add the rinsed rice and sauté for a few more minutes. Then, add chicken broth and salt, and stir. Once it starts boiling, reduce the heat, cover the pot, and let it cook until the rice absorbs the liquid. After the pilaf is cooked, remove it from the heat and let it rest. Serve it with salad on the side.",
    //         "ingredients": [
    //             {
    //                 "Name": "Rice",
    //                 "Percentage": 0.4
    //             },
    //             {
    //                 "Name": "Chicken Breast",
    //                 "Percentage": 0.6
    //             }
    //         ]
    //     },
    //     {
    //         "Name": "Grilled Salmon",
    //         "Carb": 0,
    //         "Fat": 13.4,
    //         "Protein": 22.8,
    //         "Vitamin_C": 0,
    //         "Calcium": 9.8,
    //         "Iron": 0.5,
    //         "Magnesium": 31,
    //         "Calories_per_100g": 217,
    //         "Tag": "Protein",
    //         "img_url": "https://example.com/grilled_salmon.jpg",
    //         "recipe": "To grill salmon, start by seasoning the salmon fillets with salt, pepper, and your favorite herbs or spices. Preheat your grill to medium-high heat and lightly oil the grates to prevent sticking. Place the seasoned salmon fillets on the grill, skin-side down, and cook for about 4-5 minutes per side, or until the salmon easily flakes with a fork. Remove the grilled salmon from the heat and let it rest for a few minutes before serving. Serve your delicious grilled salmon with lemon wedges and your favorite side dishes.",
    //         "ingredients": [
    //             {
    //                 "Name": "Salmon Fillet",
    //                 "Percentage": 1.0
    //             }
    //         ]
    //     },
    //     {
    //         "Name": "Beef Stir-Fry",
    //         "Carb": 4.6,
    //         "Fat": 7.1,
    //         "Protein": 15.9,
    //         "Vitamin_C": 12.3,
    //         "Calcium": 17.2,
    //         "Iron": 1.9,
    //         "Magnesium": 25,
    //         "Calories_per_100g": 151.4,
    //         "Tag": "Protein",
    //         "img_url": "https://example.com/beef_stir_fry.jpg",
    //         "recipe": "To make beef stir-fry, start by slicing beef into thin strips and marinating them in a mixture of soy sauce, garlic, ginger, and a splash of sesame oil. Heat oil in a wok or large skillet over high heat, and add the marinated beef strips once the oil is hot. Stir-fry the beef for 2-3 minutes until browned, then remove it from the wok and set it aside. In the same wok, add sliced vegetables such as bell peppers, onions, and broccoli, and stir-fry for 3-4 minutes until tender-crisp. Return the beef to the wok, add any remaining marinade, and stir-fry for another minute. Serve your delicious beef stir-fry hot over steamed rice or noodles.",
    //         "ingredients": [
    //             {
    //                 "Name": "Beef",
    //                 "Percentage": 0.6
    //             },
    //             {
    //                 "Name": "Mixed Vegetables",
    //                 "Percentage": 0.4
    //             }
    //         ]
    //     },
    //     {
    //         "Name": "Vegetable Quinoa Salad",
    //         "Carb": 18.6,
    //         "Fat": 6.2,
    //         "Protein": 4.5,
    //         "Vitamin_C": 19.7,
    //         "Calcium": 3.1,
    //         "Iron": 1.5,
    //         "Magnesium": 59,
    //         "Calories_per_100g": 132.8,
    //         "Tag": "Protein",
    //         "img_url": "https://example.com/vegetable_quinoa_salad.jpg",
    //         "recipe": "To make vegetable quinoa salad, start by cooking quinoa according to package instructions and letting it cool. In a large bowl, combine cooked quinoa with chopped vegetables such as cucumber, cherry tomatoes, bell peppers, and red onion. Add fresh herbs like parsley and mint for extra flavor. In a small bowl, whisk together olive oil, lemon juice, garlic, salt, and pepper to make the dressing. Pour the dressing over the quinoa and vegetables, and toss to coat evenly. Chill the salad in the refrigerator for at least 30 minutes before serving. Enjoy your refreshing vegetable quinoa salad as a light and nutritious meal.",
    //         "ingredients": [
    //             {
    //                 "Name": "Quinoa",
    //                 "Percentage": 0.6
    //             },
    //             {
    //                 "Name": "Mixed Vegetables",
    //                 "Percentage": 0.4
    //             }
    //         ]
    //     },
    //     {
    //         "Name": "Spaghetti Carbonara",
    //         "Carb": 24.8,
    //         "Fat": 12.2,
    //         "Protein": 9.6,
    //         "Vitamin_C": 0.5,
    //         "Calcium": 12.8,
    //         "Iron": 1.5,
    //         "Magnesium": 30,
    //         "Calories_per_100g": 248.7,
    //         "Tag": "Protein",
    //         "img_url": "https://example.com/spaghetti_carbonara.jpg",
    //         "recipe": "To make spaghetti carbonara, start by cooking spaghetti according to package instructions until al dente. While the pasta is cooking, fry diced bacon in a skillet until crispy, then remove it from the skillet and set it aside. In a bowl, whisk together eggs, grated Parmesan cheese, and black pepper to make the sauce. Once the spaghetti is cooked, drain it and immediately add it to the skillet with the bacon grease, tossing to coat. Remove the skillet from the heat and quickly stir in the egg and cheese mixture, allowing the residual heat to cook the eggs and melt the cheese. Serve your delicious spaghetti carbonara hot, garnished with extra Parmesan cheese and chopped parsley if desired.",
    //         "ingredients": [
    //             {
    //                 "Name": "Spaghetti",
    //                 "Percentage": 0.6
    //             },
    //             {
    //                 "Name": "Bacon",
    //                 "Percentage": 0.2
    //             },
    //             {
    //                 "Name": "Eggs",
    //                 "Percentage": 0.1
    //             },
    //             {
    //                 "Name": "Parmesan Cheese",
    //                 "Percentage": 0.1
    //             }
    //         ]
    //     },
    //     {
    //         "Name": "Mediterranean Grilled Vegetables",
    //         "Carb": 6.2,
    //         "Fat": 5.8,
    //         "Protein": 2.1,
    //         "Vitamin_C": 27.5,
    //         "Calcium": 2.4,
    //         "Iron": 0.9,
    //         "Magnesium": 24,
    //         "Calories_per_100g": 90.3,
    //         "Tag": "Protein",
    //         "img_url": "https://example.com/mediterranean_grilled_vegetables.jpg",
    //         "recipe": "To make Mediterranean grilled vegetables, start by slicing your favorite vegetables such as zucchini, bell peppers, eggplant, and cherry tomatoes. Toss the vegetables with olive oil, minced garlic, dried oregano, salt, and pepper. Preheat your grill to medium-high heat, and place the seasoned vegetables on the grill. Grill the vegetables for 5-7 minutes on each side, or until they are tender and slightly charred. Remove the grilled vegetables from the heat and drizzle them with balsamic glaze before serving. Enjoy your flavorful Mediterranean grilled vegetables as a side dish or a light main course.",
    //         "ingredients": [
    //             {
    //                 "Name": "Mixed Vegetables",
    //                 "Percentage": 1.0
    //             }
    //         ]
    //     },
    //     {
    //         "Name": "Tofu Stir-Fry",
    //         "Carb": 5.4,
    //         "Fat": 8.7,
    //         "Protein": 10.1,
    //         "Vitamin_C": 14.2,
    //         "Calcium": 20.3,
    //         "Iron": 2.2,
    //         "Magnesium": 34,
    //         "Calories_per_100g": 147.6,
    //         "Tag": "Protein",
    //         "img_url": "https://example.com/tofu_stir_fry.jpg",
    //         "recipe": "To make tofu stir-fry, start by pressing firm tofu to remove excess moisture, then cut it into cubes. Heat oil in a wok or large skillet over high heat, and add the tofu cubes once the oil is hot. Stir-fry the tofu for 5-7 minutes until golden brown on all sides, then remove it from the wok and set it aside. In the same wok, add sliced vegetables such as broccoli, bell peppers, and carrots, and stir-fry for 3-4 minutes until tender-crisp. Return the tofu to the wok, add soy sauce and any desired seasonings, and stir-fry for another minute. Serve your delicious tofu stir-fry hot over steamed rice or noodles.",
    //         "ingredients": [
    //             {
    //                 "Name": "Tofu",
    //                 "Percentage": 0.6
    //             },
    //             {
    //                 "Name": "Mixed Vegetables",
    //                 "Percentage": 0.4
    //             }
    //         ]
    //     }
    // ]

    // const DinnerMeal = [
    //     {
    //         "Name": "Spinach Salad",
    //         "Carb": 3.6,
    //         "Fat": 0.4,
    //         "Protein": 2.9,
    //         "Vitamin_C": 28.1,
    //         "Calcium": 9.8,
    //         "Iron": 2.7,
    //         "Magnesium": 23,
    //         "Calories_per_100g": 23.0,
    //         "Tag": "Vegetable",
    //         "img_url": "https://example.com/spinach_salad.jpg",
    //         "recipe": "To make a spinach salad, start by washing fresh spinach leaves thoroughly and drying them. In a bowl, toss the spinach with your choice of toppings, such as cherry tomatoes, sliced cucumbers, and shredded carrots. Drizzle with your favorite dressing and toss to coat. Serve the salad immediately as a refreshing and nutritious side dish.",
    //         "ingredients": [
    //             {
    //                 "Name": "Spinach Leaves",
    //                 "Percentage": 1.0
    //             },
    //             {
    //                 "Name": "Cherry Tomatoes",
    //                 "Percentage": 0.4
    //             },
    //             {
    //                 "Name": "Cucumbers",
    //                 "Percentage": 0.3
    //             },
    //             {
    //                 "Name": "Carrots",
    //                 "Percentage": 0.3
    //             }
    //         ]
    //     },
    //     {
    //         "Name": "Roasted Brussels Sprouts",
    //         "Carb": 9.0,
    //         "Fat": 3.8,
    //         "Protein": 4.1,
    //         "Vitamin_C": 85.0,
    //         "Calcium": 3.4,
    //         "Iron": 1.4,
    //         "Magnesium": 15,
    //         "Calories_per_100g": 43.0,
    //         "Tag": "Vegetable",
    //         "img_url": "https://example.com/roasted_brussels_sprouts.jpg",
    //         "recipe": "To make roasted Brussels sprouts, start by preheating your oven to 400°F (200°C). Trim the ends off of fresh Brussels sprouts and cut them in half. Toss the Brussels sprouts with olive oil, salt, and pepper, then spread them out on a baking sheet. Roast in the preheated oven for 20-25 minutes, or until the Brussels sprouts are tender and caramelized. Serve the roasted Brussels sprouts as a flavorful and nutritious side dish.",
    //         "ingredients": [
    //             {
    //                 "Name": "Brussels Sprouts",
    //                 "Percentage": 1.0
    //             },
    //             {
    //                 "Name": "Olive Oil",
    //                 "Percentage": 0.2
    //             },
    //             {
    //                 "Name": "Salt",
    //                 "Percentage": 0.1
    //             },
    //             {
    //                 "Name": "Pepper",
    //                 "Percentage": 0.1
    //             }
    //         ]
    //     },
    //     {
    //         "Name": "Stir-Fried Broccoli",
    //         "Carb": 6.6,
    //         "Fat": 1.8,
    //         "Protein": 2.8,
    //         "Vitamin_C": 90.2,
    //         "Calcium": 4.2,
    //         "Iron": 0.7,
    //         "Magnesium": 21,
    //         "Calories_per_100g": 34.0,
    //         "Tag": "Vegetable",
    //         "img_url": "https://example.com/stir_fried_broccoli.jpg",
    //         "recipe": "To make stir-fried broccoli, start by cutting fresh broccoli into florets. Heat a wok or large skillet over medium-high heat and add a tablespoon of oil. Add the broccoli florets to the pan and stir-fry for 3-4 minutes, or until the broccoli is bright green and tender-crisp. Season with soy sauce, garlic, and ginger for extra flavor. Serve the stir-fried broccoli as a tasty and nutritious side dish or add it to your favorite stir-fry recipe.",
    //         "ingredients": [
    //             {
    //                 "Name": "Broccoli",
    //                 "Percentage": 1.0
    //             },
    //             {
    //                 "Name": "Oil",
    //                 "Percentage": 0.1
    //             },
    //             {
    //                 "Name": "Soy Sauce",
    //                 "Percentage": 0.1
    //             },
    //             {
    //                 "Name": "Garlic",
    //                 "Percentage": 0.1
    //             },
    //             {
    //                 "Name": "Ginger",
    //                 "Percentage": 0.1
    //             }
    //         ]
    //     },
    //     {
    //         "Name": "Grilled Zucchini",
    //         "Carb": 3.1,
    //         "Fat": 0.4,
    //         "Protein": 1.2,
    //         "Vitamin_C": 17.9,
    //         "Calcium": 2.2,
    //         "Iron": 0.6,
    //         "Magnesium": 14,
    //         "Calories_per_100g": 17.0,
    //         "Tag": "Vegetable",
    //         "img_url": "https://example.com/grilled_zucchini.jpg",
    //         "recipe": "To make grilled zucchini, start by slicing fresh zucchini into long strips or rounds. Preheat your grill to medium-high heat and lightly oil the grates. Place the zucchini slices on the grill and cook for 2-3 minutes per side, or until tender and grill marks appear. Remove from the grill and season with salt, pepper, and a squeeze of lemon juice, if desired. Serve the grilled zucchini as a simple and delicious side dish.",
    //         "ingredients": [
    //             {
    //                 "Name": "Zucchini",
    //                 "Percentage": 1.0
    //             },
    //             {
    //                 "Name": "Oil",
    //                 "Percentage": 0.1
    //             },
    //             {
    //                 "Name": "Salt",
    //                 "Percentage": 0.1
    //             },
    //             {
    //                 "Name": "Pepper",
    //                 "Percentage": 0.1
    //             },
    //             {
    //                 "Name": "Lemon Juice",
    //                 "Percentage": 0.1
    //             }
    //         ]
    //     },
    //     {
    //         "Name": "Mushroom Stir-Fry",
    //         "Carb": 5.0,
    //         "Fat": 2.3,
    //         "Protein": 3.1,
    //         "Vitamin_C": 2.1,
    //         "Calcium": 2.0,
    //         "Iron": 0.5,
    //         "Magnesium": 9,
    //         "Calories_per_100g": 37.0,
    //         "Tag": "Vegetable",
    //         "img_url": "https://example.com/mushroom_stir_fry.jpg",
    //         "recipe": "To make mushroom stir-fry, start by slicing fresh mushrooms and preparing your favorite stir-fry sauce. Heat a wok or large skillet over medium-high heat and add a tablespoon of oil. Add the sliced mushrooms to the pan and stir-fry for 4-5 minutes, or until they are tender and golden brown. Pour in the stir-fry sauce and cook for an additional 1-2 minutes, until heated through. Serve the mushroom stir-fry over rice or noodles for a satisfying and flavorful meal.",
    //         "ingredients": [
    //             {
    //                 "Name": "Mushrooms",
    //                 "Percentage": 1.0
    //             },
    //             {
    //                 "Name": "Oil",
    //                 "Percentage": 0.1
    //             },
    //             {
    //                 "Name": "Stir-Fry Sauce",
    //                 "Percentage": 0.2
    //             },
    //             {
    //                 "Name": "Rice or Noodles",
    //                 "Percentage": 0.5
    //             }
    //         ]
    //     }
    // ];

    const Meal =
        [
            {
                "Name": "Grilled Chicken Caesar Salad",
                "Carb": 6.5,
                "Fat": 12.8,
                "Protein": 26.3,
                "Vitamin_C": 9.7,
                "Calcium": 21.4,
                "Iron": 1.9,
                "Magnesium": 29,
                "Calories_per_100g": 233.6,
                "Tag": "Protein",
                "img_url": "https://example.com/grilled_chicken_caesar_salad.jpg",
                "recipe": "To make grilled chicken caesar salad, start by marinating chicken breasts in a mixture of olive oil, lemon juice, garlic, and Italian seasoning. Preheat your grill to medium-high heat, and grill the chicken for 6-8 minutes per side, or until cooked through. Let the chicken rest for a few minutes, then slice it thinly. In a large bowl, toss together romaine lettuce, croutons, and grated Parmesan cheese. Add the sliced grilled chicken on top, and drizzle with Caesar dressing. Toss the salad until everything is evenly coated with dressing. Serve your delicious grilled chicken caesar salad immediately.",
                "ingredients": [
                    {
                        "Name": "Chicken Breast",
                        "Percentage": 0.4
                    },
                    {
                        "Name": "Romaine Lettuce",
                        "Percentage": 0.4
                    },
                    {
                        "Name": "Croutons",
                        "Percentage": 0.1
                    },
                    {
                        "Name": "Parmesan Cheese",
                        "Percentage": 0.1
                    }
                ]
            },
            {
                "Name": "Whole Wheat Pasta",
                "Carb": 25.0,
                "Fat": 1.3,
                "Protein": 12.5,
                "Vitamin_C": 0.0,
                "Calcium": 1.0,
                "Iron": 1.8,
                "Magnesium": 43,
                "Calories_per_100g": 131.0,
                "Tag": "Carbohydrates",
                "img_url": "https://example.com/whole_wheat_pasta.jpg",
                "recipe": "To cook whole wheat pasta, bring a large pot of salted water to a boil. Add the pasta to the boiling water and cook according to the package instructions, usually around 9-11 minutes for al dente pasta. Drain the cooked pasta and toss with your favorite sauce, such as marinara, pesto, or Alfredo. Serve the whole wheat pasta hot as a nutritious and filling meal.",
                "ingredients": [
                    {
                        "Name": "Whole Wheat Pasta",
                        "Percentage": 1.0
                    }
                ]
            },
            {
                "Name": "Brown Rice",
                "Carb": 77.2,
                "Fat": 1.6,
                "Protein": 7.5,
                "Vitamin_C": 0.0,
                "Calcium": 2.0,
                "Iron": 0.8,
                "Magnesium": 43,
                "Calories_per_100g": 362.0,
                "Tag": "Carbohydrates",
                "img_url": "https://example.com/brown_rice.jpg",
                "recipe": "To cook brown rice, rinse the rice under cold water until the water runs clear. In a saucepan, bring water to a boil and add the rice. Reduce the heat to low, cover, and simmer for 45-50 minutes, or until the rice is tender and the water is absorbed. Fluff the rice with a fork and let it sit for a few minutes before serving. Enjoy the nutty flavor and chewy texture of brown rice as a versatile side dish or base for bowls.",
                "ingredients": [
                    {
                        "Name": "Brown Rice",
                        "Percentage": 1.0
                    }
                ]
            },
            {
                "Name": "Quinoa Salad",
                "Carb": 21.3,
                "Fat": 4.9,
                "Protein": 4.4,
                "Vitamin_C": 4.2,
                "Calcium": 2.0,
                "Iron": 1.5,
                "Magnesium": 64,
                "Calories_per_100g": 143.0,
                "Tag": "Carbohydrates",
                "img_url": "https://example.com/quinoa_salad.jpg",
                "recipe": "To make quinoa salad, rinse the quinoa under cold water and drain well. In a saucepan, combine the quinoa with water or broth and bring to a boil. Reduce the heat to low, cover, and simmer for 15-20 minutes, or until the quinoa is tender and the liquid is absorbed. Let the quinoa cool completely, then fluff it with a fork. In a large bowl, combine the cooked quinoa with chopped vegetables, such as bell peppers, cucumbers, and tomatoes. Drizzle with olive oil and lemon juice, and season with salt and pepper to taste. Toss the salad until everything is evenly coated and serve chilled or at room temperature.",
                "ingredients": [
                    {
                        "Name": "Quinoa",
                        "Percentage": 0.5
                    },
                    {
                        "Name": "Vegetables",
                        "Percentage": 0.5
                    }
                ]
            },
            {
                "Name": "Sweet Potato Mash",
                "Carb": 20.1,
                "Fat": 0.1,
                "Protein": 1.6,
                "Vitamin_C": 2.4,
                "Calcium": 2.0,
                "Iron": 0.4,
                "Magnesium": 21,
                "Calories_per_100g": 86.0,
                "Tag": "Carbohydrates",
                "img_url": "https://example.com/sweet_potato_mash.jpg",
                "recipe": "To make sweet potato mash, peel and dice sweet potatoes into small cubes. In a pot of boiling water, cook the sweet potatoes until tender, about 15-20 minutes. Drain the sweet potatoes and mash them with a fork or potato masher until smooth. Add a splash of milk or cream, a knob of butter, and season with salt and pepper to taste. Stir until everything is well combined and serve hot as a comforting side dish.",
                "ingredients": [
                    {
                        "Name": "Sweet Potatoes",
                        "Percentage": 1.0
                    }
                ]
            },
            {
                "Name": "Oatmeal",
                "Carb": 66.3,
                "Fat": 6.9,
                "Protein": 16.9,
                "Vitamin_C": 0.0,
                "Calcium": 5.0,
                "Iron": 4.7,
                "Magnesium": 177,
                "Calories_per_100g": 389.0,
                "Tag": "Carbohydrates",
                "img_url": "https://example.com/oatmeal.jpg",
                "recipe": "To make oatmeal, bring water or milk to a boil in a saucepan. Stir in rolled oats and reduce heat to medium-low. Cook for 5 minutes, stirring occasionally, until the oats are tender and creamy. Remove from heat and let stand for 2 minutes. Serve hot with your favorite toppings, such as fresh fruit, nuts, seeds, or a drizzle of honey. Enjoy oatmeal as a hearty and nutritious breakfast or snack.",
                "ingredients": [
                    {
                        "Name": "Rolled Oats",
                        "Percentage": 1.0
                    }
                ]
            },
            {
                "Name": "Banana Bread",
                "Carb": 52.1,
                "Fat": 10.0,
                "Protein": 4.3,
                "Vitamin_C": 3.1,
                "Calcium": 2.0,
                "Iron": 1.8,
                "Magnesium": 27,
                "Calories_per_100g": 325.0,
                "Tag": "Carbohydrates",
                "img_url": "https://example.com/banana_bread.jpg",
                "recipe": "To make banana bread, preheat your oven to 350°F (175°C). Grease a loaf pan with butter or cooking spray. In a large bowl, mash ripe bananas with a fork until smooth. Stir in melted butter, sugar, eggs, and vanilla extract until well combined. In a separate bowl, whisk together flour, baking powder, baking soda, salt, and cinnamon. Gradually add the dry ingredients to the wet ingredients, stirring until just combined. Pour the batter into the prepared loaf pan and smooth the top. Bake for 50-60 minutes, or until a toothpick inserted into the center comes out clean. Let the banana bread cool in the pan for 10 minutes, then transfer to a wire rack to cool completely. Slice and serve warm or at room temperature.",
                "ingredients": [
                    {
                        "Name": "Ripe Bananas",
                        "Percentage": 0.4
                    },
                    {
                        "Name": "Flour",
                        "Percentage": 0.3
                    },
                    {
                        "Name": "Butter",
                        "Percentage": 0.2
                    },
                    {
                        "Name": "Sugar",
                        "Percentage": 0.2
                    }
                ]
            },
            {
                "Name": "Mango Smoothie",
                "Carb": 40.0,
                "Fat": 0.6,
                "Protein": 1.8,
                "Vitamin_C": 60.1,
                "Calcium": 2.0,
                "Iron": 0.6,
                "Magnesium": 19,
                "Calories_per_100g": 171.0,
                "Tag": "Carbohydrates",
                "img_url": "https://example.com/mango_smoothie.jpg",
                "recipe": "To make a mango smoothie, combine ripe mango chunks, Greek yogurt, milk, honey, and ice cubes in a blender. Blend until smooth and creamy. Taste and adjust sweetness if needed by adding more honey. Pour the mango smoothie into glasses and serve immediately. Enjoy the tropical flavors of mango in this refreshing and nutritious smoothie.",
                "ingredients": [
                    {
                        "Name": "Ripe Mango Chunks",
                        "Percentage": 0.5
                    },
                    {
                        "Name": "Greek Yogurt",
                        "Percentage": 0.3
                    },
                    {
                        "Name": "Milk",
                        "Percentage": 0.3
                    },
                    {
                        "Name": "Honey",
                        "Percentage": 0.1
                    },
                    {
                        "Name": "Ice Cubes",
                        "Percentage": 0.2
                    }
                ]
            },
            {
                "Name": "Potato Salad",
                "Carb": 13.1,
                "Fat": 9.9,
                "Protein": 2.4,
                "Vitamin_C": 19.6,
                "Calcium": 2.0,
                "Iron": 0.9,
                "Magnesium": 23,
                "Calories_per_100g": 169.0,
                "Tag": "Carbohydrates",
                "img_url": "https://example.com/potato_salad.jpg",
                "recipe": "To make potato salad, start by boiling potatoes until tender. Drain and cool slightly before cutting them into bite-sized pieces. In a bowl, mix together mayonnaise, mustard, vinegar, salt, and pepper to make the dressing. Add chopped celery, onions, and hard-boiled eggs to the potatoes, then pour the dressing over the top. Gently toss everything together until well combined. Cover and refrigerate for at least 1 hour before serving to allow the flavors to meld. Potato salad is a classic side dish perfect for picnics, barbecues, and potlucks.",
                "ingredients": [
                    {
                        "Name": "Potatoes",
                        "Percentage": 0.6
                    },
                    {
                        "Name": "Mayonnaise",
                        "Percentage": 0.2
                    },
                    {
                        "Name": "Mustard",
                        "Percentage": 0.1
                    },
                    {
                        "Name": "Vinegar",
                        "Percentage": 0.1
                    }
                ]
            },
            {
                "Name": "Turkey Avocado Wrap",
                "Carb": 20.1,
                "Fat": 14.5,
                "Protein": 17.9,
                "Vitamin_C": 10.8,
                "Calcium": 10.3,
                "Iron": 1.7,
                "Magnesium": 22,
                "Calories_per_100g": 278.4,
                "Tag": "Protein",
                "img_url": "https://example.com/turkey_avocado_wrap.jpg",
                "recipe": "To make a turkey avocado wrap, start by spreading mashed avocado onto a whole wheat tortilla. Layer sliced turkey breast, lettuce, tomato, and thinly sliced red onion on top of the avocado. Drizzle with ranch dressing or your favorite condiment. Roll up the tortilla tightly, tucking in the sides as you go. Slice the wrap in half diagonally, and serve immediately. Enjoy your tasty and nutritious turkey avocado wrap for lunch!",
                "ingredients": [
                    {
                        "Name": "Whole Wheat Tortilla",
                        "Percentage": 0.4
                    },
                    {
                        "Name": "Turkey Breast",
                        "Percentage": 0.3
                    },
                    {
                        "Name": "Avocado",
                        "Percentage": 0.1
                    },
                    {
                        "Name": "Lettuce",
                        "Percentage": 0.1
                    },
                    {
                        "Name": "Tomato",
                        "Percentage": 0.05
                    },
                    {
                        "Name": "Red Onion",
                        "Percentage": 0.05
                    }
                ]
            },
            {
                "Name": "Quinoa Salad with Roasted Vegetables",
                "Carb": 28.4,
                "Fat": 8.9,
                "Protein": 8.1,
                "Vitamin_C": 17.6,
                "Calcium": 5.2,
                "Iron": 2.3,
                "Magnesium": 62,
                "Calories_per_100g": 215.7,
                "Tag": "Protein",
                "img_url": "https://example.com/quinoa_salad_roasted_vegetables.jpg",
                "recipe": "To make quinoa salad with roasted vegetables, start by cooking quinoa according to package instructions and letting it cool. Meanwhile, chop your favorite vegetables such as bell peppers, zucchini, cherry tomatoes, and red onion. Toss the vegetables with olive oil, salt, pepper, and your favorite herbs, then spread them out on a baking sheet. Roast the vegetables in a preheated oven at 400°F (200°C) for 20-25 minutes, or until tender and slightly caramelized. In a large bowl, combine the cooked quinoa with the roasted vegetables. Add chopped fresh herbs like parsley or basil, and drizzle with balsamic vinaigrette. Toss everything together until well combined. Serve your flavorful quinoa salad with roasted vegetables warm or chilled.",
                "ingredients": [
                    {
                        "Name": "Quinoa",
                        "Percentage": 0.4
                    },
                    {
                        "Name": "Mixed Vegetables",
                        "Percentage": 0.6
                    }
                ]
            },
            {
                "Name": "Salmon and Asparagus Foil Packets",
                "Carb": 3.7,
                "Fat": 15.2,
                "Protein": 25.6,
                "Vitamin_C": 5.4,
                "Calcium": 3.8,
                "Iron": 1.6,
                "Magnesium": 33,
                "Calories_per_100g": 247.1,
                "Tag": "Protein",
                "img_url": "https://example.com/salmon_asparagus_foil_packets.jpg",
                "recipe": "To make salmon and asparagus foil packets, start by preheating your oven to 400°F (200°C). Place salmon fillets on sheets of aluminum foil, and season with salt, pepper, and lemon slices. Trim asparagus spears and place them alongside the salmon. Drizzle everything with olive oil and sprinkle with minced garlic and fresh dill. Fold the edges of the foil to create packets, sealing tightly. Place the packets on a baking sheet and bake for 15-20 minutes, or until the salmon is cooked through and the asparagus is tender. Carefully open the packets and serve your delicious salmon and asparagus straight from the foil.",
                "ingredients": [
                    {
                        "Name": "Salmon Fillet",
                        "Percentage": 0.5
                    },
                    {
                        "Name": "Asparagus",
                        "Percentage": 0.5
                    }
                ]
            },
            {
                "Name": "Caprese Sandwich",
                "Carb": 33.9,
                "Fat": 14.6,
                "Protein": 14.2,
                "Vitamin_C": 7.8,
                "Calcium": 26.9,
                "Iron": 2.1,
                "Magnesium": 35,
                "Calories_per_100g": 301.2,
                "Tag": "Protein",
                "img_url": "https://example.com/caprese_sandwich.jpg",
                "recipe": "To make a Caprese sandwich, start by slicing a baguette or ciabatta roll in half lengthwise. Spread pesto sauce on one half of the bread, and layer sliced fresh mozzarella cheese, ripe tomato slices, and fresh basil leaves on top. Drizzle with balsamic glaze or vinegar, and season with salt and pepper to taste. Place the other half of the bread on top to form a sandwich. Press down gently, then slice the sandwich into individual portions. Serve your delicious Caprese sandwich with a side of mixed greens or chips.",
                "ingredients": [
                    {
                        "Name": "Baguette or Ciabatta Roll",
                        "Percentage": 0.4
                    },
                    {
                        "Name": "Fresh Mozzarella Cheese",
                        "Percentage": 0.2
                    },
                    {
                        "Name": "Tomato",
                        "Percentage": 0.2
                    },
                    {
                        "Name": "Fresh Basil",
                        "Percentage": 0.1
                    },
                    {
                        "Name": "Pesto Sauce",
                        "Percentage": 0.05
                    },
                    {
                        "Name": "Balsamic Glaze",
                        "Percentage": 0.05
                    }
                ]
            },
            {
                "Name": "Greek Salad with Grilled Shrimp",
                "Carb": 9.7,
                "Fat": 15.5,
                "Protein": 21.4,
                "Vitamin_C": 26.9,
                "Calcium": 14.7,
                "Iron": 2.2,
                "Magnesium": 42,
                "Calories_per_100g": 267.8,
                "Tag": "Protein",
                "img_url": "https://example.com/greek_salad_grilled_shrimp.jpg",
                "recipe": "To make Greek salad with grilled shrimp, start by marinating shrimp in olive oil, lemon juice, garlic, and oregano. Preheat your grill to medium-high heat, and grill the shrimp for 2-3 minutes per side, or until pink and opaque. In a large bowl, combine chopped romaine lettuce, sliced cucumber, cherry tomatoes, red onion, and Kalamata olives. Crumble feta cheese over the top. Add the grilled shrimp on top of the salad, and drizzle with Greek dressing. Toss everything together until well combined. Serve your flavorful Greek salad with grilled shrimp immediately.",
                "ingredients": [
                    {
                        "Name": "Shrimp",
                        "Percentage": 0.4
                    },
                    {
                        "Name": "Romaine Lettuce",
                        "Percentage": 0.2
                    },
                    {
                        "Name": "Cucumber",
                        "Percentage": 0.1
                    },
                    {
                        "Name": "Cherry Tomatoes",
                        "Percentage": 0.1
                    },
                    {
                        "Name": "Red Onion",
                        "Percentage": 0.1
                    },
                    {
                        "Name": "Feta Cheese",
                        "Percentage": 0.05
                    },
                    {
                        "Name": "Kalamata Olives",
                        "Percentage": 0.05
                    }
                ]
            },
            {
                "Name": "Vegetable and Hummus Wrap",
                "Carb": 31.2,
                "Fat": 11.5,
                "Protein": 11.8,
                "Vitamin_C": 19.4,
                "Calcium": 8.1,
                "Iron": 2.0,
                "Magnesium": 33,
                "Calories_per_100g": 254.6,
                "Tag": "Protein",
                "img_url": "https://example.com/vegetable_hummus_wrap.jpg",
                "recipe": "To make a vegetable and hummus wrap, start by spreading hummus onto a whole wheat tortilla. Layer thinly sliced vegetables such as cucumber, bell peppers, carrots, and spinach leaves on top of the hummus. Sprinkle with crumbled feta cheese and a dash of black pepper. Roll up the tortilla tightly, tucking in the sides as you go. Slice the wrap in half diagonally, and serve immediately. Enjoy your nutritious and flavorful vegetable and hummus wrap for lunch!",
                "ingredients": [
                    {
                        "Name": "Whole Wheat Tortilla",
                        "Percentage": 0.4
                    },
                    {
                        "Name": "Hummus",
                        "Percentage": 0.3
                    },
                    {
                        "Name": "Mixed Vegetables",
                        "Percentage": 0.2
                    },
                    {
                        "Name": "Feta Cheese",
                        "Percentage": 0.05
                    },
                    {
                        "Name": "Black Pepper",
                        "Percentage": 0.05
                    }
                ]
            },
            {
                "Name": "Egg Salad Sandwich",
                "Carb": 21.8,
                "Fat": 16.3,
                "Protein": 15.7,
                "Vitamin_C": 4.9,
                "Calcium": 9.6,
                "Iron": 2.0,
                "Magnesium": 20,
                "Calories_per_100g": 292.5,
                "Tag": "Protein",
                "img_url": "https://example.com/egg_salad_sandwich.jpg",
                "recipe": "To make an egg salad sandwich, start by hard-boiling eggs and chopping them into small pieces. In a bowl, mix together chopped eggs, mayonnaise, mustard, diced celery, and chopped chives. Season with salt and pepper to taste. Spread the egg salad onto slices of whole wheat bread, and top with lettuce leaves and tomato slices. Place another slice of bread on top to form a sandwich. Press down gently, then slice the sandwich in half. Serve your delicious egg salad sandwich with a side of pickles or chips.",
                "ingredients": [
                    {
                        "Name": "Whole Wheat Bread",
                        "Percentage": 0.4
                    },
                    {
                        "Name": "Hard-boiled Eggs",
                        "Percentage": 0.3
                    },
                    {
                        "Name": "Mayonnaise",
                        "Percentage": 0.2
                    },
                    {
                        "Name": "Mustard",
                        "Percentage": 0.05
                    },
                    {
                        "Name": "Celery",
                        "Percentage": 0.025
                    },
                    {
                        "Name": "Chives",
                        "Percentage": 0.025
                    }
                ]
            },
            {
                "Name": "Mushroom and Spinach Quesadillas",
                "Carb": 33.5,
                "Fat": 12.4,
                "Protein": 17.9,
                "Vitamin_C": 6.7,
                "Calcium": 22.8,
                "Iron": 3.1,
                "Magnesium": 42,
                "Calories_per_100g": 283.2,
                "Tag": "Protein",
                "img_url": "https://example.com/mushroom_spinach_quesadillas.jpg",
                "recipe": "To make mushroom and spinach quesadillas, start by sautéing sliced mushrooms and chopped spinach in a skillet with olive oil, garlic, and diced onion. Cook until the mushrooms are golden brown and the spinach is wilted. Remove the vegetables from the skillet and set aside. Place a large flour tortilla in the skillet, and sprinkle grated cheese over one half of the tortilla. Spoon the cooked mushroom and spinach mixture over the cheese, then fold the other half of the tortilla over the filling to form a half-moon shape. Cook the quesadilla for 2-3 minutes on each side, or until golden and crispy. Remove from the skillet and slice into wedges. Serve your delicious mushroom and spinach quesadillas with salsa and sour cream.",
                "ingredients": [
                    {
                        "Name": "Flour Tortilla",
                        "Percentage": 0.4
                    },
                    {
                        "Name": "Mushrooms",
                        "Percentage": 0.3
                    },
                    {
                        "Name": "Spinach",
                        "Percentage": 0.2
                    },
                    {
                        "Name": "Cheese",
                        "Percentage": 0.1
                    }
                ]
            }
        ]

    const BreakfastMeal =
        [
            {
                "Name": "Scrambled Eggs with Avocado Toast",
                "Carb": 25.7,
                "Fat": 18.3,
                "Protein": 21.5,
                "Vitamin_C": 10.8,
                "Calcium": 7.6,
                "Iron": 2.3,
                "Magnesium": 21,
                "Calories_per_100g": 310.2,
                "Tag": "Protein",
                "img_url": "https://example.com/scrambled_eggs_avocado_toast.jpg",
                "recipe": "To make scrambled eggs with avocado toast, start by cracking eggs into a bowl and whisking them until smooth. Heat a non-stick skillet over medium heat and add the beaten eggs. Cook the eggs, stirring occasionally, until they are just set. In the meantime, toast slices of whole-grain bread until golden brown. Mash ripe avocado onto the toasted bread slices and season with salt and pepper. Serve the scrambled eggs alongside the avocado toast for a delicious and protein-packed breakfast.",
                "ingredients": [
                    {
                        "Name": "Eggs",
                        "Percentage": 0.4
                    },
                    {
                        "Name": "Avocado",
                        "Percentage": 0.3
                    },
                    {
                        "Name": "Whole-Grain Bread",
                        "Percentage": 0.3
                    }
                ]
            },
            {
                "Name": "Greek Yogurt Parfait",
                "Carb": 25.6,
                "Fat": 6.8,
                "Protein": 15.2,
                "Vitamin_C": 7.4,
                "Calcium": 18.9,
                "Iron": 0.9,
                "Magnesium": 24,
                "Calories_per_100g": 189.3,
                "Tag": "Protein",
                "img_url": "https://example.com/greek_yogurt_parfait.jpg",
                "recipe": "To make a Greek yogurt parfait, start by layering Greek yogurt, granola, and fresh fruit in a glass or bowl. Repeat the layers until the glass or bowl is filled. You can use any combination of fruit and granola that you like, such as strawberries, blueberries, raspberries, or bananas. Serve the parfait immediately for a delicious and nutritious breakfast.",
                "ingredients": [
                    {
                        "Name": "Greek Yogurt",
                        "Percentage": 0.4
                    },
                    {
                        "Name": "Granola",
                        "Percentage": 0.3
                    },
                    {
                        "Name": "Fresh Fruit",
                        "Percentage": 0.3
                    }
                ]
            },
            {
                "Name": "Oatmeal with Berries and Nuts",
                "Carb": 28.7,
                "Fat": 10.1,
                "Protein": 8.9,
                "Vitamin_C": 5.6,
                "Calcium": 4.2,
                "Iron": 1.7,
                "Magnesium": 32,
                "Calories_per_100g": 218.6,
                "Tag": "Protein",
                "img_url": "https://example.com/oatmeal_with_berries_nuts.jpg",
                "recipe": "To make oatmeal with berries and nuts, start by cooking rolled oats according to package instructions. Once the oatmeal is cooked, top it with fresh berries such as strawberries, blueberries, or raspberries, and sprinkle with chopped nuts such as almonds, walnuts, or pecans. You can also drizzle honey or maple syrup over the oatmeal for added sweetness if desired. Serve the oatmeal hot for a comforting and nutritious breakfast.",
                "ingredients": [
                    {
                        "Name": "Rolled Oats",
                        "Percentage": 0.5
                    },
                    {
                        "Name": "Fresh Berries",
                        "Percentage": 0.3
                    },
                    {
                        "Name": "Chopped Nuts",
                        "Percentage": 0.2
                    }
                ]
            },
            {
                "Name": "Vegetable Frittata",
                "Carb": 9.4,
                "Fat": 14.7,
                "Protein": 12.5,
                "Vitamin_C": 14.3,
                "Calcium": 9.1,
                "Iron": 1.6,
                "Magnesium": 27,
                "Calories_per_100g": 202.8,
                "Tag": "Protein",
                "img_url": "https://example.com/vegetable_frittata.jpg",
                "recipe": "To make a vegetable frittata, start by sautéing your favorite vegetables such as bell peppers, onions, spinach, and tomatoes in an oven-safe skillet until they are tender. In a bowl, whisk together eggs, milk, salt, and pepper, then pour the egg mixture over the sautéed vegetables in the skillet. Cook the frittata over medium heat until the edges are set, then transfer the skillet to a preheated oven and bake until the frittata is cooked through and golden brown on top. Slice the frittata into wedges and serve hot or at room temperature for a satisfying breakfast.",
                "ingredients": [
                    {
                        "Name": "Eggs",
                        "Percentage": 0.6
                    },
                    {
                        "Name": "Milk",
                        "Percentage": 0.2
                    },
                    {
                        "Name": "Mixed Vegetables",
                        "Percentage": 0.2
                    }
                ]
            },
            {
                "Name": "Whole Wheat Pancakes with Maple Syrup",
                "Carb": 43.5,
                "Fat": 3.6,
                "Protein": 7.9,
                "Vitamin_C": 0.8,
                "Calcium": 6.4,
                "Iron": 1.5,
                "Magnesium": 18,
                "Calories_per_100g": 235.7,
                "Tag": "Carbohydrate",
                "img_url": "https://example.com/whole_wheat_pancakes_maple_syrup.jpg",
                "recipe": "To make whole wheat pancakes, start by whisking together whole wheat flour, baking powder, salt, and milk in a bowl until smooth. Heat a non-stick skillet over medium heat and lightly grease it with oil or cooking spray. Pour the pancake batter onto the skillet, using about 1/4 cup of batter for each pancake. Cook the pancakes for 2-3 minutes on each side, or until they are golden brown and cooked through. Serve the pancakes hot with maple syrup and butter for a classic and delicious breakfast.",
                "ingredients": [
                    {
                        "Name": "Whole Wheat Flour",
                        "Percentage": 0.4
                    },
                    {
                        "Name": "Milk",
                        "Percentage": 0.3
                    },
                    {
                        "Name": "Maple Syrup",
                        "Percentage": 0.3
                    }
                ]
            },
            {
                "Name": "Smoothie Bowl",
                "Carb": 34.2,
                "Fat": 6.8,
                "Protein": 8.5,
                "Vitamin_C": 42.6,
                "Calcium": 16.3,
                "Iron": 1.9,
                "Magnesium": 39,
                "Calories_per_100g": 248.9,
                "Tag": "Carbohydrate",
                "img_url": "https://example.com/smoothie_bowl.jpg",
                "recipe": "To make a smoothie bowl, blend together frozen fruits such as bananas, berries, and mango with Greek yogurt and a splash of milk until smooth and creamy. Pour the smoothie into a bowl and top it with your favorite toppings such as granola, sliced fruit, nuts, seeds, or coconut flakes. Serve the smoothie bowl immediately for a refreshing and nutritious breakfast.",
                "ingredients": [
                    {
                        "Name": "Frozen Fruit",
                        "Percentage": 0.5
                    },
                    {
                        "Name": "Greek Yogurt",
                        "Percentage": 0.3
                    },
                    {
                        "Name": "Toppings (Granola, Fruit, Nuts, Seeds, Coconut Flakes)",
                        "Percentage": 0.2
                    }
                ]
            },
            {
                "Name": "Egg Muffins",
                "Carb": 4.8,
                "Fat": 11.2,
                "Protein": 14.6,
                "Vitamin_C": 8.1,
                "Calcium": 9.7,
                "Iron": 2.1,
                "Magnesium": 19,
                "Calories_per_100g": 180.4,
                "Tag": "Protein",
                "img_url": "https://example.com/egg_muffins.jpg",
                "recipe": "To make egg muffins, start by whisking together eggs, milk, salt, and pepper in a bowl until well combined. Stir in cooked and chopped vegetables such as bell peppers, spinach, onions, and tomatoes, as well as cooked and crumbled breakfast sausage or bacon if desired. Pour the egg mixture into greased muffin tins, filling each tin about 3/4 full. Bake the egg muffins in a preheated oven at 375°F (190°C) for 20-25 minutes, or until they are set and golden brown on top. Let the egg muffins cool slightly before removing them from the muffin tins. Serve the egg muffins warm or at room temperature for a convenient and protein-rich breakfast.",
                "ingredients": [
                    {
                        "Name": "Eggs",
                        "Percentage": 0.6
                    },
                    {
                        "Name": "Milk",
                        "Percentage": 0.2
                    },
                    {
                        "Name": "Mixed Vegetables and/or Cooked Breakfast Sausage/Bacon",
                        "Percentage": 0.2
                    }
                ]
            },
            {
                "Name": "Banana Nut Muffins",
                "Carb": 37.9,
                "Fat": 12.4,
                "Protein": 5.6,
                "Vitamin_C": 3.2,
                "Calcium": 8.1,
                "Iron": 1.8,
                "Magnesium": 26,
                "Calories_per_100g": 272.5,
                "Tag": "Carbohydrate",
                "img_url": "https://example.com/banana_nut_muffins.jpg",
                "recipe": "To make banana nut muffins, start by mashing ripe bananas in a bowl until smooth. Add melted butter, eggs, vanilla extract, and sugar to the mashed bananas and mix until well combined. In a separate bowl, whisk together flour, baking powder, baking soda, salt, and chopped nuts such as walnuts or pecans. Gradually add the dry ingredients to the wet ingredients, stirring until just combined. Pour the muffin batter into greased muffin tins, filling each tin about 3/4 full. Bake the muffins in a preheated oven at 350°F (175°C) for 18-20 minutes, or until they are golden brown and a toothpick inserted into the center comes out clean. Let the muffins cool slightly before removing them from the muffin tins. Serve the banana nut muffins warm or at room temperature for a delicious breakfast or snack.",
                "ingredients": [
                    {
                        "Name": "Ripe Bananas",
                        "Percentage": 0.3
                    },
                    {
                        "Name": "Butter",
                        "Percentage": 0.2
                    },
                    {
                        "Name": "Eggs",
                        "Percentage": 0.2
                    },
                    {
                        "Name": "Flour",
                        "Percentage": 0.2
                    },
                    {
                        "Name": "Chopped Nuts",
                        "Percentage": 0.1
                    }
                ]
            },
            {
                "Name": "Vegetable Omelette",
                "Carb": 5.7,
                "Fat": 12.8,
                "Protein": 16.3,
                "Vitamin_C": 9.6,
                "Calcium": 10.4,
                "Iron": 2.2,
                "Magnesium": 25,
                "Calories_per_100g": 206.9,
                "Tag": "Protein",
                "img_url": "https://example.com/vegetable_omelette.jpg",
                "recipe": "To make a vegetable omelette, start by whisking together eggs, milk, salt, and pepper in a bowl until well combined. Heat butter or oil in a non-stick skillet over medium heat, then pour the egg mixture into the skillet. As the eggs begin to set, gently lift the edges with a spatula and tilt the skillet to allow the uncooked eggs to flow underneath. Once the omelette is mostly set but still slightly runny on top, add cooked and chopped vegetables such as bell peppers, onions, spinach, and mushrooms to one half of the omelette. Fold the other half of the omelette over the vegetables and cook for another minute or until the vegetables are heated through. Slide the omelette onto a plate and serve hot for a satisfying and protein-rich breakfast.",
                "ingredients": [
                    {
                        "Name": "Eggs",
                        "Percentage": 0.6
                    },
                    {
                        "Name": "Milk",
                        "Percentage": 0.2
                    },
                    {
                        "Name": "Butter or Oil",
                        "Percentage": 0.1
                    },
                    {
                        "Name": "Mixed Vegetables",
                        "Percentage": 0.1
                    }
                ]
            }
        ]

    let selectedRecipe = [];

    const handleCreateRecipe = () => {


        const proteinRequirement = 83 * 2.20462262185;
        const BreakfastProtein = proteinRequirement * 0.3;
        const DinnerProtein = proteinRequirement * 0.5;

        const totalCalorieReq = 2000;
        let remainingCalories = totalCalorieReq;
        let remainingProtein = proteinRequirement * 0.2;

        let breakfastFlag = 0;
        let lunchFlag = 0;
        let fruitFlag = 0;
        let dinnerFlag = 0;


        BreakfastMeal.map((item) => {

            if (item.Tag === "Protein" && breakfastFlag !== 1) {
                // 3 e bölünüp bütün öğünlere bölünebilir?
                const grOfMainProtein = ((100 * BreakfastProtein) / item.Protein);
                const calOfMainProtein = (item.Calories_per_100g * grOfMainProtein) / 100;

                remainingCalories = totalCalorieReq - calOfMainProtein;

                const dataOfProtein = {
                    Name: item.Name,
                    Carb: item.Carb,
                    Fat: item.Fat,
                    Protein: item.Protein,
                    Vitamin_C: item.Vitamin_C,
                    Calories_per_100g: item.Calories_per_100g,
                    Tag: item.Tag,
                    img_url: item.img_url,
                    recipe: item.recipe,
                    Ingredients: [],
                    Gram:grOfMainProtein,
                    Calorie:calOfMainProtein,
                };

                item["ingredients"].map((i) => {


                    let IngridientsString = "";

                    IngridientsString += Math.round(i.Percentage * grOfMainProtein) + " gr of " + i.Name;

                    dataOfProtein["Ingredients"].push(IngridientsString);
                })
                selectedRecipe.push(dataOfProtein);
                console.log(selectedRecipe);
                breakfastFlag++;
            }
        })

        Meal.map((item) => {

            if (item.Tag === "Protein" && dinnerFlag !== 1) {
                // 3 e bölünüp bütün öğünlere bölünebilir?
                const grOfMainProtein = ((100 * DinnerProtein) / item.Protein);
                const calOfMainProtein = (item.Calories_per_100g * grOfMainProtein) / 100;

                remainingCalories -= calOfMainProtein;

                const dataOfProtein = {
                    Name: item.Name,
                    Carb: item.Carb,
                    Fat: item.Fat,
                    Protein: item.Protein,
                    Vitamin_C: item.Vitamin_C,
                    Calories_per_100g: item.Calories_per_100g,
                    Tag: item.Tag,
                    img_url: item.img_url,
                    recipe: item.recipe,
                    Ingredients: [],
                    Gram:grOfMainProtein,
                    Calorie:calOfMainProtein,
                };

                item["ingredients"].map((i) => {


                    let IngridientsString = "";

                    IngridientsString += Math.round(i.Percentage * grOfMainProtein) + " gr of " + i.Name;

                    dataOfProtein["Ingredients"].push(IngridientsString);
                })
                selectedRecipe.push(dataOfProtein);
                console.log(selectedRecipe);
                dinnerFlag++;
            }



        })

        Meal.map((item) => {

            const carbCalorie = remainingCalories;


            if (item.Tag === "Carbohydrates" && lunchFlag !== 1) {
                // 3 e bölünüp bütün öğünlere bölünebilir?
                const grOfCarbohydrate = ((100 * carbCalorie) / item.Calories_per_100g);
                const calOfCarbohydrate = (item.Calories_per_100g * grOfCarbohydrate) / 100;

                remainingProtein -= (item.Protein * grOfCarbohydrate) / 100

                remainingCalories -= calOfCarbohydrate;

                const dataOfCarb = {
                    Name: item.Name,
                    Carb: item.Carb,
                    Fat: item.Fat,
                    Protein: item.Protein,
                    Vitamin_C: item.Vitamin_C,
                    Calories_per_100g: item.Calories_per_100g,
                    Tag: item.Tag,
                    img_url: item.img_url,
                    recipe: item.recipe,
                    Ingredients: [],
                    Calorie:calOfCarbohydrate,
                    Gram:grOfCarbohydrate,
                };


                item["ingredients"].map((i) => {


                    let IngridientsString = "";

                    IngridientsString += Math.round(i.Percentage * grOfCarbohydrate) + " gr of " + i.Name;

                    dataOfCarb["Ingredients"].push(IngridientsString);
                })
                selectedRecipe.push(dataOfCarb);
                console.log(selectedRecipe);
                lunchFlag++;
            }

        })





        // const fruitCalorie = remainingCalories * 0.08;

        // DinnerRecipes.map((item) => {

        //     if (item.Tag === "Fruit" && fruitFlag !== 1) {

        //         const grOfFruit = (100 * fruitCalorie) / nutrition.Calories_per_100g;
        //         remainingProtein -= (grOfFruit * nutrition.Protein) / 100;

        //         item["ingredients"].map((i) => {


        //             let IngridientsString = "";

        //             IngridientsString += Math.round(i.Percentage * grOfFruit) + " gr of " + i.Name;

        //             dataOfCarb["Ingredients"].push(IngridientsString);
        //         })

        //         Nutritions.push(dataOfFruit);

        //         fruitFlag++;
        //     }

        //     const vegetableCalorie = remainingCalories * 0.06;


        //     if (item.Tag === "Vegetable" && vegetableFlag !== 1) {

        //         const grOfVegetable = (100 * vegetableCalorie) / nutrition.Calories_per_100g;
        //         remainingProtein -= (grOfVegetable * nutrition.Protein) / 100;

        //         item["ingredients"].map((i) => {

        //             let IngridientsString = "";
        //             IngridientsString += Math.round(i.Percentage * grOfVegetable) + " gr of " + i.Name;
        //             dataOfCarb["Ingredients"].push(IngridientsString);
        //         })

        //         Nutritions.push(dataOfVegetable);

        //         vegetableFlag++;
        //     }
        // })
    }


    return (
        <View>
            <TouchableOpacity style={tw`w-65 h-15 bg-indigo-700  font-bold rounded-full mx-auto mt-8`}
                onPress={handleCreateRecipe}>
                <View style={tw`ml-3 my-auto items-center mr-3`}>
                    <Text>Next</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}