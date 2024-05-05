const allNutritions = [
    {
      "ID": 6,
      "Name": "Bulgur",
      "Carb": 76,
      "Fat": 1.3,
      "Protein": 12,
      "Vitamin_C": 0,
      "Calcium": 35,
      "Iron": 2.5,
      "Magnesium": 164,
      "Calories_per_100g": 342,
      "Tag": "Carbohydrate"
    },
    {
      "ID": 7,
      "Name": "Whole Grain Bread",
      "Carb": 41,
      "Fat": 3.4,
      "Protein": 13,
      "Vitamin_C": 0,
      "Calcium": 107,
      "Iron": 2.4,
      "Magnesium": 0,
      "Calories_per_100g": 247,
      "Tag": "Carbohydrate"
    },
    {
      "ID": 11,
      "Name": "Sweet Potato",
      "Carb": 20.1,
      "Fat": 0.1,
      "Protein": 1.6,
      "Vitamin_C": 2.4,
      "Calcium": 30,
      "Iron": 0.7,
      "Magnesium": 25,
      "Calories_per_100g": 86,
      "Tag": "Carbohydrate"
    },
    {
      "ID": 8,
      "Name": "Brown Rice",
      "Carb": 77,
      "Fat": 1.6,
      "Protein": 7,
      "Vitamin_C": 0,
      "Calcium": 1,
      "Iron": 0.8,
      "Magnesium": 43,
      "Calories_per_100g": 123,
      "Tag": "Carbohydrate"
    },
    {
      "ID": 9,
      "Name": "Quinoa",
      "Carb": 21,
      "Fat": 1.9,
      "Protein": 4.4,
      "Vitamin_C": 0,
      "Calcium": 17,
      "Iron": 1.5,
      "Magnesium": 64,
      "Calories_per_100g": 120,
      "Tag": "Carbohydrate"
    },
    {
      "ID": 8,
      "Name": "Potatoes",
      "Carb": 15.4,
      "Fat": 0.1,
      "Protein": 1.9,
      "Vitamin_C": 16.0,
      "Calcium": 10.8,
      "Iron": 0.31,
      "Magnesium": 32,
      "Calories_per_100g": 73.4,
      "Tag": "Carbohydrate"
    },
    {
      "ID": 9,
      "Name": "Corn",
      "Carb": 15,
      "Fat": 0.5,
      "Protein": 2,
      "Vitamin_C": 5.5,
      "Calcium": 4,
      "Iron": 0.4,
      "Magnesium": 16,
      "Calories_per_100g": 64,
      "Tag": "Carbohydrate"
    },
    {
      "ID": 10,
      "Name": "Whole Wheat Pasta",
      "Carb": 26.54,
      "Fat": 0.54,
      "Protein": 5.33,
      "Vitamin_C": 0,
      "Calcium": 15,
      "Iron": 1.06,
      "Magnesium": 0,
      "Calories_per_100g": 124,
      "Tag": "Carbohydrate"
    },
    {
      "ID": 11,
      "Name": "Almonds",
      "Carb": 21.55,
      "Fat": 49.93,
      "Protein": 21.15,
      "Vitamin_C": 1,
      "Calcium": 250,
      "Iron": 4.0,
      "Magnesium": 279,
      "Calories_per_100g": 598,
      "Tag": "Snack"
    },
    {
      "ID": 12,
      "Name": "Walnuts",
      "Carb": 14.0,
      "Fat": 65,
      "Protein": 15,
      "Vitamin_C": 1.3,
      "Calcium": 98,
      "Iron": 2.9,
      "Magnesium": 158,
      "Calories_per_100g": 654,
      "Tag": "Snack"
    },
    {
      "ID": 13,
      "Name": "Peanut Butter",
      "Carb": 20,
      "Fat": 50,
      "Protein": 25,
      "Vitamin_C": 0,
      "Calcium": 43,
      "Iron": 1.9,
      "Magnesium": 154,
      "Calories_per_100g": 588,
      "Tag": "Fats"
    },
    {
      "ID": 14,
      "Name": "Olive Oil",
      "Carb": 0,
      "Fat": 100,
      "Protein": 0,
      "Vitamin_C": 0,
      "Calcium": 1,
      "Iron": 0.6,
      "Magnesium": 0,
      "Calories_per_100g": 884,
      "Tag": "Fats"
    },
    {
      "ID": 15,
      "Name": "Butter",
      "Carb": 0.1,
      "Fat": 81,
      "Protein": 0.9,
      "Vitamin_C": 0,
      "Calcium": 24,
      "Iron": 0.,
      "Magnesium": 2,
      "Calories_per_100g": 716,
      "Tag": "Fats"
    },
    {
      "ID": 16,
      "Name": "Banana",
      "Carb": 23,
      "Fat": 0.3,
      "Protein": 1.1,
      "Vitamin_C": 8.7,
      "Calcium": 0,
      "Iron": 0,
      "Magnesium": 0,
      "Calories_per_100g": 88,
      "Tag": "Fruit"
    },
    {
      "ID": 17,
      "Name": "Apple",
      "Carb": 14,
      "Fat": 0.2,
      "Protein": 0.3,
      "Vitamin_C": 4.6,
      "Calcium": 0,
      "Iron": 0.1,
      "Magnesium": 5,
      "Calories_per_100g": 52,
      "Tag": "Fruit"
    },
    {
      "ID": 18,
      "Name": "Strawberry",
      "Carb": 12.7,
      "Fat": 0.3,
      "Protein": 0.7,
      "Vitamin_C": 58.8,
      "Calcium": 16,
      "Iron": 0.41,
      "Magnesium": 13,
      "Calories_per_100g": 32,
      "Tag": "Fruit"
    },
    {
      "ID": 19,
      "Name": "Orange",
      "Carb": 12,
      "Fat": 0.1,
      "Protein": 0.9,
      "Vitamin_C": 53.2,
      "Calcium": 40,
      "Iron": 0.1,
      "Magnesium": 10,
      "Calories_per_100g": 47,
      "Tag": "Fruit"
    },
    {
      "ID": 20,
      "Name": "Kiwi",
      "Carb": 15,
      "Fat": 0.5,
      "Protein": 1.1,
      "Vitamin_C": 92.7,
      "Calcium": 34,
      "Iron": 0.3,
      "Magnesium": 17,
      "Calories_per_100g": 60,
      "Tag": "Fruit"
    },
    {
      "ID": 1,
      "Name": "Carrot",
      "Carb": 10,
      "Fat": 0.3,
      "Protein": 0.6,
      "Vitamin_C": 7,
      "Calcium": 33,
      "Iron": 0.3,
      "Magnesium": 12,
      "Calories_per_100g": 41,
      "Tag": "Vegetable"
    },
    {
      "ID": 2,
      "Name": "Broccoli",
      "Carb": 7,
      "Fat": 0.4,
      "Protein": 2.8,
      "Vitamin_C": 89,
      "Calcium": 47,
      "Iron": 0.7,
      "Magnesium": 21,
      "Calories_per_100g": 34,
      "Tag": "Vegetable"
    },
    {
      "ID": 3,
      "Name": "Spinach",
      "Carb": 3.6,
      "Fat": 0.4,
      "Protein": 2.9,
      "Vitamin_C": 28,
      "Calcium": 99,
      "Iron": 2.7,
      "Magnesium": 79,
      "Calories_per_100g": 23,
      "Tag": "Vegetable"
    },
    {
      "ID": 4,
      "Name": "Tomato",
      "Carb": 3.9,
      "Fat": 0.2,
      "Protein": 0.9,
      "Vitamin_C": 14,
      "Calcium": 9,
      "Iron": 0.3,
      "Magnesium": 11,
      "Calories_per_100g": 18,
      "Tag": "Vegetable"
    },
    {
      "ID": 5,
      "Name": "Bell Pepper",
      "Carb": 6,
      "Fat": 0.3,
      "Protein": 1,
      "Vitamin_C": 212,
      "Calcium": 10,
      "Iron": 0.4,
      "Magnesium": 10,
      "Calories_per_100g": 31,
      "Tag": "Vegetable"
    }
  ];

  const allProteins = [
    {
      "ID": 1,
      "Name": "Chicken Breast",
      "Carb": 0,
      "Fat": 3.6,
      "Protein": 31,
      "Vitamin_C": 0,
      "Calcium": 15,
      "Iron": 1,
      "Magnesium": 29,
      "Calories_per_100g": 164,
      "Tag": "Protein"
    },
    {
      "ID": 2,
      "Name": "Oatmeal",
      "Carb": 12,
      "Fat": 1.4,
      "Protein": 2.4,
      "Vitamin_C": 0,
      "Calcium": 80,
      "Iron": 6,
      "Magnesium": 26,
      "Calories_per_100g": 67,
      "Tag": "Protein"
    },
    {
      "ID": 3,
      "Name": "Salmon",
      "Carb": 0,
      "Fat": 13,
      "Protein": 20,
      "Vitamin_C": 3.9,
      "Calcium": 9,
      "Iron": 0.3,
      "Magnesium": 27,
      "Calories_per_100g": 208,
      "Tag": "Protein"
    },
    {
      "ID": 4,
      "Name": "Lentils",
      "Carb": 20,
      "Fat": 0.4,
      "Protein": 9,
      "Vitamin_C": 1.5,
      "Calcium": 19,
      "Iron": 3.3,
      "Magnesium": 36,
      "Calories_per_100g": 116,
      "Tag": "Protein"
    },
    {
      "ID": 5,
      "Name": "Eggs",
      "Carb": 1.1,
      "Fat": 11,
      "Protein": 13,
      "Vitamin_C": 0,
      "Calcium": 50,
      "Iron": 1.2,
      "Magnesium": 10,
      "Calories_per_100g": 155,
      "Tag": "Protein"
    },
  ]

allProteins.map((proteinItem) => {
    if (proteinItem.Name === "Chicken Breast") {

        const grOfMainProtein = (100 * mainProtein) / proteinItem.Protein;
        const calOfMainProtein = (proteinItem.Calories_per_100g * grOfMainProtein) / 100;

        remainingCalories = totalCalorieReq - calOfMainProtein;


        const dataOfProtein = {
            ID: proteinItem.ID,
            Name: proteinItem.Name,
            Carb: proteinItem.Carb,
            Fat: proteinItem.Fat,
            Protein: proteinItem.Protein,
            Vitamin_C: proteinItem.Vitamin_C,
            Calcium: proteinItem.Calcium,
            Iron: proteinItem.Iron,
            Magnesium: proteinItem.Magnesium,
            Calories_per_100g: proteinItem.Calories_per_100g,
            Tag: proteinItem.Tag,
            Gram: grOfMainProtein,
            Calorie: calOfMainProtein
        };

        Nutritions.push(dataOfProtein);
    }
})


const calculateBMR = (userInfo) => {

    if (userInfo.gender == "male") {
      return 88.362 + (13.397 * userInfo.weight) + (4.799 * userInfo.height) - (5.677 * userInfo.age);
    } else {
      return 447.593 + (9.247 * userInfo.weight) + (3.098 * userInfo.height) - (4.330 * userInfo.age);
    }
  }

allNutritions.sort(() => Math.random() - 0.5);

allNutritions.map((nutrition) => {



    const carbCalorie = (remainingCalories * 0.8) / 4;


    if (nutrition.Tag === "Carbohydrate" && carbFlag !== 4) {
        const grOfCarbohydrate = (100 * carbCalorie) / nutrition.Calories_per_100g;
        remainingProtein -= (grOfCarbohydrate * nutrition.Protein) / 100;


        const dataOfCarb = {
            ID: nutrition.ID,
            Name: nutrition.Name,
            Carb: nutrition.Carb,
            Fat: nutrition.Fat,
            Protein: nutrition.Protein,
            Vitamin_C: nutrition.Vitamin_C,
            Calcium: nutrition.Calcium,
            Iron: nutrition.Iron,
            Magnesium: nutrition.Magnesium,
            Calories_per_100g: nutrition.Calories_per_100g,
            Tag: nutrition.Tag,
            Gram: grOfCarbohydrate,
            Calorie: carbCalorie
        };

        carbFlag++;

        Nutritions.push(dataOfCarb);

    }

    const snackCalorie = (remainingCalories * 0.06) / 2;


    if (nutrition.Tag === "Snack" && snackFlag !== 2) {

        const grOfSnack = (100 * snackCalorie) / nutrition.Calories_per_100g;
        remainingProtein -= (grOfSnack * nutrition.Protein) / 100;

        const dataOfSnack = {
            ID: nutrition.ID,
            Name: nutrition.Name,
            Carb: nutrition.Carb,
            Fat: nutrition.Fat,
            Protein: nutrition.Protein,
            Vitamin_C: nutrition.Vitamin_C,
            Calcium: nutrition.Calcium,
            Iron: nutrition.Iron,
            Magnesium: nutrition.Magnesium,
            Calories_per_100g: nutrition.Calories_per_100g,
            Tag: nutrition.Tag,
            Gram: grOfSnack,
            Calorie: snackCalorie
        };

        Nutritions.push(dataOfSnack);

        snackFlag++;
    }


    const fruitCalorie = remainingCalories * 0.08;


    if (nutrition.Tag === "Fruit" && fruitFlag !== 1) {

        const grOfFruit = (100 * fruitCalorie) / nutrition.Calories_per_100g;
        remainingProtein -= (grOfFruit * nutrition.Protein) / 100;

        const dataOfFruit = {
            ID: nutrition.ID,
            Name: nutrition.Name,
            Carb: nutrition.Carb,
            Fat: nutrition.Fat,
            Protein: nutrition.Protein,
            Vitamin_C: nutrition.Vitamin_C,
            Calcium: nutrition.Calcium,
            Iron: nutrition.Iron,
            Magnesium: nutrition.Magnesium,
            Calories_per_100g: nutrition.Calories_per_100g,
            Tag: nutrition.Tag,
            Gram: grOfFruit,
            Calorie: fruitCalorie
        };

        Nutritions.push(dataOfFruit);

        fruitFlag++;
    }

    const vegetableCalorie = remainingCalories * 0.06;


    if (nutrition.Tag === "Vegetable" && vegetableFlag !== 1) {

        const grOfVegetable = (100 * vegetableCalorie) / nutrition.Calories_per_100g;
        remainingProtein -= (grOfVegetable * nutrition.Protein) / 100;

        const dataOfVegetable = {
            ID: nutrition.ID,
            Name: nutrition.Name,
            Carb: nutrition.Carb,
            Fat: nutrition.Fat,
            Protein: nutrition.Protein,
            Vitamin_C: nutrition.Vitamin_C,
            Calcium: nutrition.Calcium,
            Iron: nutrition.Iron,
            Magnesium: nutrition.Magnesium,
            Calories_per_100g: nutrition.Calories_per_100g,
            Tag: nutrition.Tag,
            Gram: grOfVegetable,
            Calorie: vegetableCalorie
        };

        Nutritions.push(dataOfVegetable);

        vegetableFlag++;
    }



});


