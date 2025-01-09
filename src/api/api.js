export const fetchImage = async () => {
    // const devImageURL = 'https://raw.githubusercontent.com/rakshixh-me/self-hosted-server/main/assets/rakshixhDev.webp';
    const buildType = process.env.REACT_APP_BUILD;
    const imageName = process.env[`REACT_APP_${buildType.toUpperCase()}_IMAGE_NAME`];
    const imageURL = `https://raw.githubusercontent.com/${process.env.REACT_APP_GIT_USER_NAME}/${process.env.REACT_APP_GIT_REPO_NAME}/${process.env.REACT_APP_GIT_BRANCH_NAME}/assets/${imageName}`;
    try {
      const response = await fetch(imageURL);
      if (!response.ok) {
        throw new Error('Failed to fetch image');
      }
      // Converting to blob
      const blob = await response?.blob();
      const objectURL = URL?.createObjectURL(blob);
      return objectURL; // Return the image URL
    } catch (error) {
      console.error('Error fetching image:', error);
      return null;
    }
  };
  
  export const fetchData = async () => {
    // const jsonURL = 'https://raw.githubusercontent.com/rakshixh-me/self-hosted-server/main/json/dev.json';
    const buildType = process.env.REACT_APP_BUILD;
    const jsonName = process.env[`REACT_APP_${buildType.toUpperCase()}_JSON_NAME`];
    const jsonURL = `https://raw.githubusercontent.com/${process.env.REACT_APP_GIT_USER_NAME}/${process.env.REACT_APP_GIT_REPO_NAME}/${process.env.REACT_APP_GIT_BRANCH_NAME}/json/${jsonName}`;
    try {
        const response = await fetch(jsonURL);
        if (!response.ok) {
            throw new Error('Failed to fetch JSON');
        }
        // fetch data from json file
        const data = await response?.json();
        return data;
    } catch (error) {
        console.error('Error fetching JSON:', error);
        return error.message;
    }
};
