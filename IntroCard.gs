function introCardBuilder() {

  let introText0 = CardService.newTextParagraph()
      .setText("Welcome to the College Email Despamifier!");
  
  let introText1 = CardService.newTextParagraph()
      .setText("1) Answer 8 quick questions");
  
  let introText2 = CardService.newTextParagraph()
      .setText("2) We archive college emails in your inbox that don't match the criteria.");

  let introText3 = CardService.newTextParagraph()
      .setText("3) Every time you get more emails, just hit 'filter' again.");

  let goFilterButtonAction = CardService.newAction()
      .setFunctionName('onGoFilterButtonPress');

  let goFilterButton = CardService.newTextButton()
      .setText('Go Filter')
      .setOnClickAction(goFilterButtonAction)
      .setTextButtonStyle(CardService.TextButtonStyle.FILLED);
  
  let introCardDivider = CardService.newDivider();

//  let aiCampLogo = CardService.newImage()
//      .setImageUrl('https://i.imgur.com/4K5x0sP.png')

  let introContent = CardService.newCardSection()
      .addWidget(introText0)
      .addWidget(introText1)
      .addWidget(introText2)
      .addWidget(introText3)
      .addWidget(goFilterButton)
      .addWidget(introCardDivider)
//      .addWidget(aiCampLogo);

  let card = CardService.newCardBuilder()
      .addSection(introContent)


  return card.build();
}


function onGoFilterButtonPress(){
    const masterCard = masterCardBuilder();
    let nav = CardService.newNavigation().pushCard(masterCard);
    return CardService.newActionResponseBuilder()
        .setNavigation(nav)
        .build();

}
