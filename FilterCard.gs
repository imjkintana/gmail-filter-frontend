//The card where all the filters are managed

function masterCardBuilder() {

//Section 0 = Overall Ranking 

    let section0TopDivider = CardService.newDivider();
    
    let section0TextParagraph = CardService.newTextParagraph()
    .setText("1) Ranking Range");

    let section0TextInput0 = CardService.newTextInput()
        .setFieldName("rankingRange")
        .setHint("Enter the number of your lowest desired ranking. Ex: '50' --> The top 50 Schools in the USA");

    let section0CheckBox = CardService.newSelectionInput()
              .setType(CardService.SelectionInputType.CHECK_BOX)
              .setFieldName("checkBox0Status")
              .addItem("Don't Include This Filter", "checkBox0", false)

    let section0Content = CardService.newCardSection()
        .addWidget(section0TopDivider)
        .addWidget(section0TextParagraph)
        .addWidget(section0TextInput0)
        .addWidget(section0CheckBox)

//Section 1 = Acceptance Rate

    let section1TextParagraph = CardService.newTextParagraph()
    .setText("2) Acceptance Rate");

    let section1TextInput0 = CardService.newTextInput()
        .setFieldName("minAcceptanceRate")
        .setHint("Minimum Acceptance Rate");

    let section1TextInput1 = CardService.newTextInput()
        .setFieldName("maxAcceptanceRate")
        .setHint("Maximum Acceptance Rate");

    let section1CheckBox = CardService.newSelectionInput()
              .setType(CardService.SelectionInputType.CHECK_BOX)
              .setFieldName("checkBox1Status")
              .addItem("Don't Include This Filter", "checkBox1", false)

    let section1Content = CardService.newCardSection()
        .addWidget(section1TextParagraph)
        .addWidget(section1TextInput0)
        .addWidget(section1TextInput1)
        .addWidget(section1CheckBox)

//Section 2 = Total Student Body Size

    let section2TextParagraph = CardService.newTextParagraph()
    .setText("3) Total Student Body Size");

    let section2TextInput0 = CardService.newTextInput()
        .setFieldName("minStudentBodySize")
        .setHint("Minimum Student Body Size");

    let section2TextInput1 = CardService.newTextInput()
        .setFieldName("maxStudentBodySize")
        .setHint("Maximum Student Body Size");

    let section2CheckBox = CardService.newSelectionInput()
              .setType(CardService.SelectionInputType.CHECK_BOX)
              .setFieldName("checkBox2Status")
              .addItem("Don't Include This Filter", "checkBox2", false)

    let section2Content = CardService.newCardSection()
        .addWidget(section2TextParagraph)
        .addWidget(section2TextInput0)
        .addWidget(section2TextInput1)
        .addWidget(section2CheckBox)

//Section 3 = SAT

    let section3TextParagraph = CardService.newTextParagraph()
    .setText("4) Average SAT Score");

    let section3TextInput0 = CardService.newTextInput()
        .setFieldName("minSATScore")
        .setHint("Minimum SAT Score");

    let section3TextInput1 = CardService.newTextInput()
        .setFieldName("maxSATScore")
        .setHint("Maximum SAT Score");

    let section3CheckBox = CardService.newSelectionInput()
              .setType(CardService.SelectionInputType.CHECK_BOX)
              .setFieldName("checkBox3Status")
              .addItem("Don't Include This Filter", "checkBox3", false)

    let section3Content = CardService.newCardSection()
        .addWidget(section3TextParagraph)
        .addWidget(section3TextInput0)
        .addWidget(section3TextInput1)
        .addWidget(section3CheckBox)

//Section 4 = ACT

    let section4TextParagraph = CardService.newTextParagraph()
    .setText("5) Average ACT Score");

    let section4TextInput0 = CardService.newTextInput()
        .setFieldName("minACTScore")
        .setHint("Minimum ACT Score");

    let section4TextInput1 = CardService.newTextInput()
        .setFieldName("maxACTScore")
        .setHint("Maximum ACT Score");

    let section4CheckBox = CardService.newSelectionInput()
              .setType(CardService.SelectionInputType.CHECK_BOX)
              .setFieldName("checkBox4Status")
              .addItem("Don't Include This Filter", "checkBox4", false)

    let section4Content = CardService.newCardSection()
        .addWidget(section4TextParagraph)
        .addWidget(section4TextInput0)
        .addWidget(section4TextInput1)
        .addWidget(section4CheckBox)

//Section 5 = State

    let section5TextParagraph = CardService.newTextParagraph()
    .setText("6) States");

    let section5TextInput0 = CardService.newTextInput()
        .setFieldName("stateList")
        .setHint("Enter state abbreviations separated by commas. Ex = 'IL,NY,CA'");

    let section5CheckBox = CardService.newSelectionInput()
              .setType(CardService.SelectionInputType.CHECK_BOX)
              .setFieldName("checkBox5Status")
              .addItem("Don't Include This Filter", "checkBox5", false)

    let section5Content = CardService.newCardSection()
        .addWidget(section5TextParagraph)
        .addWidget(section5TextInput0)
        .addWidget(section5CheckBox)

//Section 6 = Yearly Tuition

    let section6TextParagraph = CardService.newTextParagraph()
    .setText("7) Yearly Tuition");

    let section6TextInput0 = CardService.newTextInput()
        .setFieldName("maxYearlyTution")
        .setHint("Maximum Yearly Tuition");

    let section6CheckBox = CardService.newSelectionInput()
              .setType(CardService.SelectionInputType.CHECK_BOX)
              .setFieldName("checkBox6Status")
              .addItem("Don't Include This Filter", "checkBox6", false)

    let section6Content = CardService.newCardSection()
        .addWidget(section6TextParagraph)
        .addWidget(section6TextInput0)
        .addWidget(section6CheckBox)

//Section 7 = Number of Emails to Filter

    let section7TextParagraph = CardService.newTextParagraph()
    .setText("8) How many emails do you want sorted?");

    let section7TextInput0 = CardService.newTextInput()
        .setFieldName("numEmails")
        .setValue("1000")
        .setHint("Enter a positive integer");

    let section7Content = CardService.newCardSection()
        .addWidget(section7TextParagraph)
        .addWidget(section7TextInput0)

//Section 8? = School Name (must implement school database lookup feature)

//Final Section = Filter

    let filterButtonAction = CardService.newAction()
        .setFunctionName('onFilterButtonPress');

    let filterButton = CardService.newTextButton()
        .setText('Filter')
        .setOnClickAction(filterButtonAction)
        .setTextButtonStyle(CardService.TextButtonStyle.FILLED);
        
    let finalSectionContent = CardService.newCardSection()
        .addWidget(filterButton)

//Where each filter section is added for building

    let masterCard = CardService.newCardBuilder()
        .addSection(section0Content)
        .addSection(section1Content)
        .addSection(section2Content)
        .addSection(section3Content)
        .addSection(section4Content)
        .addSection(section5Content)
        .addSection(section6Content)
        .addSection(section7Content)
        .addSection(finalSectionContent)
        .build();

   return masterCard;
}

function onFilterButtonPress(e) {
    const inputs = e.formInputs;
    const filters = {
        optStatus: {
          useRanking: inputs.checkBox0Status,
          useAcceptanceRate: inputs.checkBox1Status,
          useStudentBodySize: inputs.checkBox2Status,
          useSATScore: inputs.checkBox3Status,
          useACTScore: inputs.checkBox4Status,
          useStates: inputs.checkBox5Status,
          useTution: inputs.checkBox6Status
        },
        schoolRankings: {
            lowestRanking: inputs.rankingRange
        },
        studentbodysize: {
            min: inputs.minStudentBodySize,
            max: inputs.maxStudentBodySize
        },
        acceptanceRate: {
            min: inputs.minAcceptanceRate,
            max: inputs.maxAcceptanceRate
        },
        sat: {
            min: inputs.minSATScore,
            max: inputs.maxSATScore
        },
        act: {
            min: inputs.minACTScore,
            max: inputs.maxACTScore
        },
        tuition: {
            max: inputs.maxYearlyTution
        }
    }
    
    const domains = returnedEmailDomains;

    const requestBody = {
        filters: filters,
        domains: returnedEmailDomains
    };
}

function getEmails(){
  var returnedEmailDomains = [];
  var threads = GmailApp.getInboxThreads();
  for(var i = 0; i < inputs.numEmails; i++){
    var message = threads[i].getMessages()[0];
    if(!message.isUnread()) continue; // Comment this if you want to filter through entire inbox
    if(isCollegeEmail(message.getFrom())) returnedEmailDomains.push(message.getFromI());
  }
  return returnedEmailDomains;
}

function isCollegeEmail(email){
  email = email.substring(email.indexOf('@'), email.length); // removes everything before the @ symbol
  if(email.indexOf('.edu') != -1) return true;
  return false;
}


