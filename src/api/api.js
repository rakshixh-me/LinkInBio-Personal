export const fetchImage = async () => {
  const buildType = process.env.REACT_APP_BUILD;
  const imageName =
    process.env[`REACT_APP_${buildType.toUpperCase()}_IMAGE_NAME`];
  const imageURL = `https://raw.githubusercontent.com/${process.env.REACT_APP_GIT_USER_NAME}/${process.env.REACT_APP_GIT_REPO_NAME}/${process.env.REACT_APP_GIT_BRANCH_NAME}/assets/${imageName}`;
  try {
    const response = await fetch(imageURL);
    if (!response.ok) {
      throw new Error("Failed to fetch image");
    }
    // Converting to blob
    const blob = await response?.blob();
    // Convert blob to Base64
    const base64Data = await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader?.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
    return base64Data; // Return Base64 string
  } catch (error) {
    console.error("Error fetching image:", error);
    return null;
  }
};

export const fetchLinksData = async () => {
  const buildType = process.env.REACT_APP_BUILD;
  const jsonName =
    process.env[`REACT_APP_${buildType.toUpperCase()}_JSON_NAME`];
  const jsonURL = `https://raw.githubusercontent.com/${process.env.REACT_APP_GIT_USER_NAME}/${process.env.REACT_APP_GIT_REPO_NAME}/${process.env.REACT_APP_GIT_BRANCH_NAME}/json/${jsonName}`;
  try {
    const response = await fetch(jsonURL);
    if (!response.ok) {
      throw new Error("Failed to fetch JSON");
    }
    // fetch data from json file
    const data = await response?.json();
    return data;
  } catch (error) {
    console.error("Error fetching JSON:", error);
    return error.message;
  }
};

export const fetchComponentData = async () => {
  const jsonName = process.env.REACT_APP_COMPONENT_DATA_JSON_NAME;
  const jsonURL = `https://raw.githubusercontent.com/${process.env.REACT_APP_GIT_USER_NAME}/${process.env.REACT_APP_GIT_REPO_NAME}/${process.env.REACT_APP_GIT_BRANCH_NAME}/json/${jsonName}`;
  try {
    const response = await fetch(jsonURL);
    if (!response.ok) {
      throw new Error("Failed to fetch JSON");
    }
    // fetch data from json file
    const data = await response?.json();
    return data;
  } catch (error) {
    console.error("Error fetching JSON:", error);
    return error.message;
  }
};
