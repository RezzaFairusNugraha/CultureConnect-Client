import { getUserPreference } from "../api/preferenceServices";

export const hasPreferences = async (userId) => {
  try {
    const preference = await getUserPreference(userId);
    
    // Log to check the structure of the preference
    console.log("User Preferences:", preference);

    const kategori = JSON.parse(preference?.categoryPreference || "[]");
    const uniqueCategories = [...new Set(kategori)];
    
    // Log to check the kategori array
    console.log("Kategori:", kategori, "Unique Categories:", uniqueCategories);

    const isValidPreferences =
      Array.isArray(kategori) &&
      uniqueCategories.length === 3 &&  // Ensure 3 unique categories
      preference?.descriptionPreference &&  // Ensure descriptionPreference exists
      preference?.RatePreference !== undefined && preference?.RatePreference !== null;

    return isValidPreferences;
  } catch (error) {
    console.error("Error checking preferences:", error);
    return false;
  }
};
