// RECOVOCOLOR //

hideElement("emphasisLeft");
hideElement("emphasisRight");
hideElement("create_underline1");
hideElement("create_underline2");
hideElement("create_underline22");

/*-------------------------MAIN-SCREEN-------------------------*/

onEvent("create_button", "click", function()
{
  setScreen("create_screen");
});

onEvent("profile_button", "click", function()
{
  setScreen("profile_screen");
});

onEvent("donate_button", "click", function()
{
  setScreen("donate_screen");
});

onEvent("backround_main", "mouseover", function()
{
  hideElement("emphasisLeft");
  hideElement("emphasisRight");
});

onEvent("create_button", "mouseover", function()
{
  setProperty("emphasisLeft", "y", 172);
  setProperty("emphasisRight", "y", 172);
  showElement("emphasisLeft");
  showElement("emphasisRight");
});

onEvent("profile_button", "mouseover", function()
{
  setProperty("emphasisLeft", "y", 219);
  setProperty("emphasisRight", "y", 219);
  showElement("emphasisLeft");
  showElement("emphasisRight");
});

onEvent("donate_button", "mouseover", function()
{
  setProperty("emphasisLeft", "y", 266);
  setProperty("emphasisRight", "y", 266);
  showElement("emphasisLeft");
  showElement("emphasisRight");
});

/*------------------------CREATE-SCREEN------------------------*/

onEvent("create_home", "click", function()
{
  setScreen("main_screen");
});

onEvent("create_background", "mouseover", function()
{
  hideElement("create_underline1");
  hideElement("create_underline2");
});

onEvent("create_premadeTitle", "mouseover", function()
{
  hideElement("create_underline2");
  showElement("create_underline1");
});

onEvent("create_communityTitle", "mouseover", function()
{
  hideElement("create_underline1");
  showElement("create_underline2");
});

onEvent("create_premadeTitle", "click", function()
{
  hideElement("create_underline1");
  hideElement("create_underline2");
  hideElement("create_underline22");
  hideElement("create_error");
  showElement("create_img1");
  showElement("create_img1info1");
  showElement("create_img2");
  showElement("create_img2info");
  showElement("create_underline11");
});

onEvent("create_communityTitle", "click", function()
{
  hideElement("create_img1");
  hideElement("create_img1info1");
  hideElement("create_img2");
  hideElement("create_img2info");
  hideElement("create_underline1");
  hideElement("create_underline2");
  hideElement("create_underline11");
  showElement("create_underline22");
  showElement("create_error");
});

onEvent("create_img1", "click", function()
{
  setScreen("color_screen");
});

/*-----------------------PROFILE-SCREEN-----------------------*/

onEvent("profile_home", "click", function()
{
  setScreen("main_screen");
});

/*------------------------DONATE-SCREEN------------------------*/

onEvent("donate_home", "click", function()
{
  setScreen("main_screen");
});

/*------------------------COLOR-SCREEN------------------------*/

onEvent("color_back", "click", function()
{
  setScreen("create_screen");
});

onEvent("color_placeholderButton", "click", function()
{
  setScreen("finish_screen");
});

var animal = "black footed ferret";

onEvent("color_check", "click", function()
{
  if (getText("color_guess") == animal)
  {
    setProperty("color_guessValidation", "text-color", "#87d296");
    setText("color_guessValidation", "Correct! The animal is a black footed ferret. +10 coins");
    showElement("color_guessValidation");
  }
  else
  {
    setProperty("color_guessValidation", "text-color", "#f16060");
    setText("color_guessValidation", "Incorrect, try again :(");
    showElement("color_guessValidation");
  }
});

/*-----------------------FINISH-SCREEN-----------------------*/

onEvent("finish_back", "click", function()
{
  hideElement("create_img1");
  showElement("create_ferret");
  hideElement("create_img1info1");
  showElement("create_img1info2");
  setText("create_img2", "\n\n\n\nunlocked");
  setText("create_levelNum", "1");
  setText("create_xpProgress", "0/200");
  setText("profile_levelNum", "1");
  setText("profile_xpProgress", "0/200");
  setScreen("create_screen");
});