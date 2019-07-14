export const checkForLink = str => {
  if (str.includes("website")) {
    return true;
  }
  if (str.includes("tutorial")) {
    return true;
  }

  if (str.includes("TWiStartup's soundcloud")) {
    return true;
  }

  if (str.includes("Keith Rabois")) {
    return true;
  }

  if (str.includes("product market fit")) {
    return true;
  }

  if (str.includes("Find out more about The Pitch")) {
    return true;
  }
// heavyweights
  if (str.includes("laugh, cry and renew")) {
    return true;
  }
// Dax shepherd
  if (str.includes("Cunning, intelligent, hilarious")) {
    return true;
  }
// crimtown
  if (str.includes("crime drama lovers")) {
    return true;
  }
};

export const checkForPicture = str => {
  if (str.includes("DNP's office")) {
    return true;
  }
  if (str.includes("Here is Google's Headquarters:")) {
    return true;
  }
  if (str.includes("Here is a picture of Reid Hoffman:")) {
    return true;
  }
};

export const returnLinkText = str => {
  if (str.includes("portfolio")) {
    return " jordan-stoddard.com";
  }
  if (str.includes("tutorial")) {
    return " www.rivescript.com/docs/tutorial";
  }

  if (str.includes("TWiStartup's soundcloud")) {
    return " soundcloud.com/twistartups";
  }

  if (str.includes("Keith Rabois")) {
    return " Building world class teams";
  }

  if (str.includes("product market fit")) {
    return " Building an engine for product market fit";
  }

  if (str.includes("Find out more about The Pitch")) {
    return " gimletmedia.com/shows/the-pitch";
  }

  // heavyweights
  if (str.includes("laugh, cry and renew")) {
    return " Heavyweights";
  }
// Dax shepherd
  if (str.includes("Cunning, intelligent, hilarious")) {
    return " Armchair Expert with Dax Shepherd";
  }
// crimtown
  if (str.includes("crime drama lovers")) {
    return " Crimetown";
  }
};

export const returnLink = str => {
  if (str.includes("portfolio")) {
    return "https://jordan-stoddard.com/";
  }
  if (str.includes("tutorial")) {
    return "https://www.rivescript.com/docs/tutorial/";
  }
  if (str.includes("DNP's office")) {
    return "https://42floors.com/images/H262ec5c496a236cb52f4e5f4b152b0a8db11e9d4S780x520W0seB505153O/763bd6436b5848fd30b6ad9eab40e2473030cd0d";
  }
  if (str.includes("Here is Google's Headquarters:")) {
    return "https://www.worldatlas.com/r/w728-h425-c728x425/upload/9c/e1/39/shutterstock-724339942.jpg";
  }

  if (str.includes("Here is a picture of Reid Hoffman:")) {
    return "https://assets.entrepreneur.com/content/3x2/2000/20170417222528-reid-hoffman-cover.jpeg?width=700&crop=2:1";
  }

  if (str.includes("TWiStartup's soundcloud")) {
    return "https://soundcloud.com/twistartups";
  }

  if (str.includes("Keith Rabois")) {
    return "https://soundcloud.com/angellist/interview-with-keith-rabois-building-world-class-teams";
  }

  if (str.includes("product market fit")) {
    return "https://soundcloud.com/firstroundreview/rahul-vohra-on-how-superhuman-built-an-engine-to-find-product-market-fit";
  }

  if (str.includes("Find out more about The Pitch")) {
    return "https://gimletmedia.com/shows/the-pitch";
  }

  // heavyweights
  if (str.includes("laugh, cry and renew")) {
    return "https://gimletmedia.com/shows/heavyweight";
  }
// Dax shepherd
  if (str.includes("Cunning, intelligent, hilarious")) {
    return "https://armchairexpertpod.com/pods";
  }
// crimtown
  if (str.includes("crime drama lovers")) {
    return "https://gimletmedia.com/shows/crimetown";
  }
};
