// 🍽 Recipe Types
const recipeTypes = [
  { val: "", txt: "-- Please select a recipe type --" },
  { val: "appetizers", txt: "Appetizers" },
  { val: "main-dishes", txt: "Main Dishes" },
  { val: "desserts", txt: "Desserts" },
  { val: "snacks", txt: "Snacks" },
  { val: "drinks-beverages", txt: "Drinks & Beverages" },
  { val: "soups-stews", txt: "Soups & Stews" },
  { val: "salads", txt: "Salads" },
  { val: "sauces-dips", txt: "Sauces & Dips" },
  { val: "breakfast-brunch", txt: "Breakfast & Brunch" },
  { val: "side-dishes", txt: "Side Dishes" },
];

// 🌿 Dietary Preferences
const dietaryPreferences = [
  { val: "", txt: "-- Please select a dietary preference --" },
  { val: "vegetarian", txt: "Vegetarian" },
  { val: "vegan", txt: "Vegan" },
  { val: "gluten-free", txt: "Gluten-Free" },
  { val: "dairy-free", txt: "Dairy-Free" },
  { val: "low-carb", txt: "Low-Carb" },
  { val: "keto", txt: "Keto" },
  { val: "paleo", txt: "Paleo" },
  { val: "high-protein", txt: "High-Protein" },
];

// ⏱ Cooking Difficulty / Time
const cookingDifficultyAndTime = [
  { val: "", txt: "-- Please select a difficulty or time --" },
  { val: "quick-easy", txt: "Quick & Easy" },
  { val: "30-minute-meals", txt: "30-Minute Meals" },
  { val: "one-pot-recipes", txt: "One-Pot Recipes" },
  { val: "beginner-friendly", txt: "Beginner Friendly" },
  { val: "advanced-recipes", txt: "Advanced Recipes" },
  { val: "meal-prep", txt: "Meal Prep" },
];

// 🔥 Cooking Methods
const cookingMethods = [
  { val: "", txt: "-- Please select a cooking method --" },
  { val: "baked", txt: "Baked" },
  { val: "grilled", txt: "Grilled" },
  { val: "fried", txt: "Fried" },
  { val: "air-fryer", txt: "Air Fryer" },
  { val: "instant-pot", txt: "Instant Pot" },
  { val: "slow-cooker", txt: "Slow Cooker" },
  { val: "stovetop", txt: "Stovetop" },
];

// 🌎 Cuisines / Regional
const cuisines = [
  { val: "", txt: "-- Please select a cuisine --" },
  { val: "filipino-recipes", txt: "Filipino Recipes" },
  { val: "italian", txt: "Italian" },
  { val: "asian-fusion", txt: "Asian Fusion" },
  { val: "mexican", txt: "Mexican" },
  { val: "american-comfort-food", txt: "American Comfort Food" },
  { val: "indian", txt: "Indian" },
  { val: "mediterranean", txt: "Mediterranean" },
  { val: "middle-eastern", txt: "Middle Eastern" },
];

// 🎉 Occasions / Themes
const occasionsAndThemes = [
  { val: "", txt: "-- Please select an occasion or theme --" },
  { val: "holiday-specials", txt: "Holiday Specials" },
  { val: "weeknight-dinners", txt: "Weeknight Dinners" },
  { val: "family-favorites", txt: "Family Favorites" },
  { val: "kids-friendly-recipes", txt: "Kids-Friendly Recipes" },
  { val: "budget-meals", txt: "Budget Meals" },
  { val: "seasonal-recipes", txt: "Seasonal Recipes" },
  { val: "romantic-dinners", txt: "Romantic Dinners" },
  { val: "party-food", txt: "Party Food" },
];

// 📝 Other Blog Types
const otherBlogTypes = [
  { val: "", txt: "-- Please select a blog topic --" },
  { val: "kitchen-tips", txt: "Kitchen Tips" },
  { val: "cooking-techniques", txt: "Cooking Techniques" },
  { val: "ingredient-spotlight", txt: "Ingredient Spotlight" },
  { val: "product-reviews", txt: "Product Reviews" },
  { val: "pantry-essentials", txt: "Pantry Essentials" },
  { val: "meal-planning", txt: "Meal Planning" },
];

const categoryGroups = {
  recipeTypes,
  dietaryPreferences,
  cookingDifficultyAndTime,
  cookingMethods,
  cuisines,
  occasionsAndThemes,
  otherBlogTypes,
};

export default categoryGroups;
