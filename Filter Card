//The card where all the filters are managed

function masterCardBuilder() {
    const userProperties = PropertiesService.getUserProperties();

//Section 0 = Overall Ranking 

    const section0TopDivider = CardService.newDivider();
    
    const section0TextParagraph = CardService.newTextParagraph()
    .setText("1) Ranking Range");


    const section0TextInput0 = CardService.newTextInput()
        .setFieldName("rankingRange")
        .setHint("Enter the number of your lowest desired ranking. Ex: '50' --> The top 50 Schools in the USA");

    const default_rankingRange = userProperties.getProperty('CD_rankingRange');
    if(default_rankingRange && default_rankingRange.length > 0) {
      section0TextInput0.setValue(default_rankingRange);
    }

    const default_checkBox0Status = userProperties.getProperty('CD_checkBox0Status');
    let checkBox0Selected = false;
    if(default_checkBox0Status === 'true') {
      checkBox0Selected = true;
    }

    const section0CheckBox = CardService.newSelectionInput()
              .setType(CardService.SelectionInputType.CHECK_BOX)
              .setFieldName("checkBox0Status")
              .addItem("Don't Include This Filter", "true", checkBox0Selected);
    
    const section0Content = CardService.newCardSection()
        .addWidget(section0TopDivider)
        .addWidget(section0TextParagraph)
        .addWidget(section0TextInput0)
        .addWidget(section0CheckBox);

//Section 1 = Acceptance Rate

    const section1TextParagraph = CardService.newTextParagraph()
    .setText("2) Acceptance Rate");

    const section1TextInput0 = CardService.newTextInput()
        .setFieldName("minAcceptanceRate")
        .setHint("Minimum Acceptance Rate");

    const section1TextInput1 = CardService.newTextInput()
        .setFieldName("maxAcceptanceRate")
        .setHint("Maximum Acceptance Rate");


    const default_minAcceptanceRate = userProperties.getProperty('CD_minAcceptanceRate');
    if(default_minAcceptanceRate && default_minAcceptanceRate.length > 0) {
      section1TextInput0.setValue(default_minAcceptanceRate);
    }

    const default_maxAcceptanceRate = userProperties.getProperty('CD_maxAcceptanceRate');
    if(default_maxAcceptanceRate && default_maxAcceptanceRate.length > 0) {
      section1TextInput1.setValue(default_maxAcceptanceRate);
    }

    const default_checkBox1Status = userProperties.getProperty('CD_checkBox1Status');
    let checkBox1Selected = false;
    if(default_checkBox1Status === 'true') {
      checkBox1Selected = true;
    }

    const section1CheckBox = CardService.newSelectionInput()
              .setType(CardService.SelectionInputType.CHECK_BOX)
              .setFieldName("checkBox1Status")
              .addItem("Don't Include This Filter", "true", checkBox1Selected);

    const section1Content = CardService.newCardSection()
        .addWidget(section1TextParagraph)
        .addWidget(section1TextInput0)
        .addWidget(section1TextInput1)
        .addWidget(section1CheckBox);

//Section 2 = Total Student Body Size

    const section2TextParagraph = CardService.newTextParagraph()
    .setText("3) Total Student Body Size");

    const section2TextInput0 = CardService.newTextInput()
        .setFieldName("minStudentBodySize")
        .setHint("Minimum Student Body Size");

    const section2TextInput1 = CardService.newTextInput()
        .setFieldName("maxStudentBodySize")
        .setHint("Maximum Student Body Size");

    const default_minStudentBodySize = userProperties.getProperty('CD_minStudentBodySize');
    if(default_minStudentBodySize && default_minStudentBodySize.length > 0) {
      section2TextInput0.setValue(default_minStudentBodySize);
    }

    const default_maxStudentBodySize = userProperties.getProperty('CD_maxStudentBodySize');
    if(default_maxStudentBodySize && default_maxStudentBodySize.length > 0) {
      section2TextInput1.setValue(default_maxStudentBodySize);
    }
    
    const default_checkBox2Status = userProperties.getProperty('CD_checkBox2Status');
    let checkBox2Selected = false;
    if(default_checkBox2Status === 'true') {
      checkBox2Selected = true;
    }

    const section2CheckBox = CardService.newSelectionInput()
              .setType(CardService.SelectionInputType.CHECK_BOX)
              .setFieldName("checkBox2Status")
              .addItem("Don't Include This Filter", "true", checkBox2Selected);

    const section2Content = CardService.newCardSection()
        .addWidget(section2TextParagraph)
        .addWidget(section2TextInput0)
        .addWidget(section2TextInput1)
        .addWidget(section2CheckBox);

//Section 3 = SAT

    const section3TextParagraph = CardService.newTextParagraph()
    .setText("4) Average SAT Score");

    const section3TextInput0 = CardService.newTextInput()
        .setFieldName("minSATScore")
        .setHint("Minimum SAT Score");

    const section3TextInput1 = CardService.newTextInput()
        .setFieldName("maxSATScore")
        .setHint("Maximum SAT Score");

    const default_minSATScore = userProperties.getProperty('CD_minSATScore');
    if(default_minSATScore && default_minSATScore.length > 0) {
      section3TextInput0.setValue(default_minSATScore);
    }

    const default_maxSATScore = userProperties.getProperty('CD_maxSATScore');
    if(default_maxSATScore && default_maxSATScore.length > 0) {
      section3TextInput1.setValue(default_maxSATScore);
    }
    
    const default_checkBox3Status = userProperties.getProperty('CD_checkBox3Status');
    let checkBox3Selected = false;
    if(default_checkBox3Status === 'true') {
      checkBox3Selected = true;
    }

    const section3CheckBox = CardService.newSelectionInput()
              .setType(CardService.SelectionInputType.CHECK_BOX)
              .setFieldName("checkBox3Status")
              .addItem("Don't Include This Filter", "true", checkBox3Selected);

    const section3Content = CardService.newCardSection()
        .addWidget(section3TextParagraph)
        .addWidget(section3TextInput0)
        .addWidget(section3TextInput1)
        .addWidget(section3CheckBox);

//Section 4 = ACT

    const section4TextParagraph = CardService.newTextParagraph()
    .setText("5) Average ACT Score");

    const section4TextInput0 = CardService.newTextInput()
        .setFieldName("minACTScore")
        .setHint("Minimum ACT Score");

    const section4TextInput1 = CardService.newTextInput()
        .setFieldName("maxACTScore")
        .setHint("Maximum ACT Score");

    const default_minACTScore = userProperties.getProperty('CD_minACTScore');
    if(default_minACTScore && default_minACTScore.length > 0) {
      section4TextInput0.setValue(default_minACTScore);
    }

    const default_maxACTScore = userProperties.getProperty('CD_maxACTScore');
    if(default_maxACTScore && default_maxACTScore.length > 0) {
      section4TextInput1.setValue(default_maxACTScore);
    }
    
    const default_checkBox4Status = userProperties.getProperty('CD_checkBox4Status');
    let checkBox4Selected = false;
    if(default_checkBox4Status === 'true') {
      checkBox4Selected = true;
    }

    const section4CheckBox = CardService.newSelectionInput()
              .setType(CardService.SelectionInputType.CHECK_BOX)
              .setFieldName("checkBox4Status")
              .addItem("Don't Include This Filter", "true", checkBox4Selected);

    const section4Content = CardService.newCardSection()
        .addWidget(section4TextParagraph)
        .addWidget(section4TextInput0)
        .addWidget(section4TextInput1)
        .addWidget(section4CheckBox);

//Section 5 = State

    const section5TextParagraph = CardService.newTextParagraph()
    .setText("6) States");

    const section5TextInput0 = CardService.newTextInput()
        .setFieldName("stateList")
        .setHint("Enter state abbreviations separated by commas. Ex = 'IL,NY,CA'")
        .setMultiline(true);

    const default_stateList = userProperties.getProperty('CD_stateList');
    if(default_stateList && default_stateList.length > 0) {
      section5TextInput0.setValue(default_stateList);
    }

    const default_checkBox5Status = userProperties.getProperty('CD_checkBox5Status');
    let checkBox5Selected = false;
    if(default_checkBox5Status === 'true') {
      checkBox5Selected = true;
    }

    const section5CheckBox = CardService.newSelectionInput()
              .setType(CardService.SelectionInputType.CHECK_BOX)
              .setFieldName("checkBox5Status")
              .addItem("Don't Include This Filter", "true", checkBox5Selected);


    const section5Content = CardService.newCardSection()
        .addWidget(section5TextParagraph)
        .addWidget(section5TextInput0)
        .addWidget(section5CheckBox);

//Section 6 = Yearly Tuition

    const section6TextParagraph = CardService.newTextParagraph()
    .setText("7) Yearly Tuition");

    const section6TextInput0 = CardService.newTextInput()
        .setFieldName("maxYearlyTution")
        .setHint("Maximum Yearly Tuition");

    const default_maxYearlyTution = userProperties.getProperty('CD_maxYearlyTution');
    if(default_maxYearlyTution && default_maxYearlyTution.length > 0) {
      section6TextInput0.setValue(default_maxYearlyTution);
    }

    const default_checkBox6Status = userProperties.getProperty('CD_checkBox6Status');
    let checkBox6Selected = false;
    if(default_checkBox6Status === 'true') {
      checkBox6Selected = true;
    }


    const section6CheckBox = CardService.newSelectionInput()
              .setType(CardService.SelectionInputType.CHECK_BOX)
              .setFieldName("checkBox6Status")
              .addItem("Don't Include This Filter", "true", checkBox6Selected);

    const section6Content = CardService.newCardSection()
        .addWidget(section6TextParagraph)
        .addWidget(section6TextInput0)
        .addWidget(section6CheckBox);

//Section 7 = Number of Emails to Filter

    const section7TextParagraph = CardService.newTextParagraph()
    .setText("8) How many emails do you want sorted?");


    const section7TextInput0 = CardService.newTextInput()
        .setFieldName("numEmails")
        .setValue("100")
        .setHint("Enter a positive integer");

    const default_numEmails = userProperties.getProperty('CD_numEmails');
    if(default_numEmails && default_numEmails.length > 0) {
      section7TextInput0.setValue(default_numEmails);
    }

    const section7Content = CardService.newCardSection()
        .addWidget(section7TextParagraph)
        .addWidget(section7TextInput0);

//Section 8 = Ignore Specific Domains

    const section8TextParagraph = CardService.newTextParagraph()
    .setText("Email Ignore List");

    const section8TextInput0 = CardService.newTextInput()
        .setFieldName("ignoredEmailsInput")
        .setHint("Enter the email address of any college you do not want us to filter; separate email adresses with commas if you list more than one");

    const default_ignoredEmailsInput = userProperties.getProperty('CD_ignoredEmailsInput');
    if(default_ignoredEmailsInput && default_ignoredEmailsInput.length > 0) {
      section8TextInput0.setValue(default_ignoredEmailsInput);
    }

    const section8Content = CardService.newCardSection()
        .addWidget(section8TextParagraph)
        .addWidget(section8TextInput0);

//Section 9? = School Name (must implement school database lookup feature)

//Final Section = Filter

    const filterButtonAction = CardService.newAction()
        .setFunctionName('onFilterButtonPress');

    const filterButton = CardService.newTextButton()
        .setText('Filter')
        .setOnClickAction(filterButtonAction)
        .setTextButtonStyle(CardService.TextButtonStyle.FILLED);
        
    const finalSectionContent = CardService.newCardSection()
        .addWidget(filterButton);

//Where each filter section is added for building

    const masterCard = CardService.newCardBuilder()
        .addSection(section0Content)
        .addSection(section1Content)
        .addSection(section2Content)
        .addSection(section3Content)
        .addSection(section4Content)
        .addSection(section5Content)
        .addSection(section6Content)
        .addSection(section7Content)
        .addSection(section8Content)
        .addSection(finalSectionContent)
        .build();

   return masterCard;
}

function onFilterButtonPress(e) {
    const inputs = e.formInputs;

    const rawStates = inputs.stateList ? inputs.stateList[0] : '';
    let states = [];
    if(rawStates && rawStates.length > 0) {
      const parsedStates = rawStates.split(',');
      for(let i = 0; i < parsedStates.length; i ++) {
        const state = parsedStates[i].trim();
        states.push(state);
      }

    }
    const filters = {
        optOutStatus: {
          useRanking: !inputs.checkBox0Status,
          useAcceptanceRate: !inputs.checkBox1Status,
          useStudentBodySize: !inputs.checkBox2Status,
          useSATScore: !inputs.checkBox3Status,
          useACTScore: !inputs.checkBox4Status,
          useStates: !inputs.checkBox5Status,
          useTution: !inputs.checkBox6Status
        },
        schoolRankings: {
            lowestRanking: inputs.rankingRange ? inputs.rankingRange[0] : null
        },
        studentbodysize: {
            min: inputs.minStudentBodySize ? inputs.minStudentBodySize[0] : null,
            max: inputs.maxStudentBodySize ? inputs.maxStudentBodySize[0] : null
        },
        acceptanceRate: {
            min: inputs.minAcceptanceRate ? inputs.minAcceptanceRate[0] : null,
            max: inputs.maxAcceptanceRate ? inputs.maxAcceptanceRate[0] : null
        },
        sat: {
            min: inputs.minSATScore ? inputs.minSATScore[0] : null,
            max: inputs.maxSATScore ? inputs.maxSATScore[0] : null
        },
        act: {
            min: inputs.minACTScore ? inputs.minACTScore[0] : null,
            max: inputs.maxACTScore ? inputs.maxACTScore[0] : null
        },
        tuition: {
            max: inputs.maxYearlyTution ? inputs.maxYearlyTution[0] : null
        },
        states: states
    }
    
    // save user inputs
    const userProperties = PropertiesService.getUserProperties();
    userProperties.deleteAllProperties(); // clear everything that's already there

    for(const [iKey, iValue] of Object.entries(inputs)) {
      try {
        userProperties.setProperty(`CD_${iKey}`, String(iValue));
      } catch (error) {
        // do nothing
      }
    }




    // for testing

    labelMaker();
    const response = {'admit@elmhurst.edu': false, 'finaid@lmu.edu': false, 'admissions@muhlenberg.edu': false, 'admission@conncoll.edu': true, 'visitus@fordham.edu': true, 'unmlobos@unm.edu': true};

    const rawIgnoredEmails = inputs.ignoredEmailsInput ? inputs.ignoredEmailsInput[0] : '';
    let ignoredEmails = [];
    if(rawIgnoredEmails && rawIgnoredEmails.length > 0) {
      // "email1, email2,email3, email4, ..."
      const parsedIgnoredEmails = rawIgnoredEmails.split(',');
      for(let i = 0; i < parsedIgnoredEmails.length; i ++) {
        const email = parsedIgnoredEmails[i].trim();
        ignoredEmails.push(email);
      }

    }

    // display logs
    // // const log = JSON.stringify(userProperties.getProperties(), null, 2);
    // const log = JSON.stringify(filters, null, 2);
    // // const results = sortEmails(inputs.numEmails, response, ignoredEmails);
    // // const responseCard = resultsCardBuilder(results);
    // const logCard = logCardBuilder(log)
    // let nav = CardService.newNavigation().pushCard(logCard);
    // return CardService.newActionResponseBuilder()
    //     .setNavigation(nav)
    //     .build();

    // display results
    const results = sortEmails(inputs.numEmails, response, ignoredEmails);
    const responseCard = resultsCardBuilder(results);
    let nav = CardService.newNavigation().pushCard(responseCard);
    return CardService.newActionResponseBuilder()
        .setNavigation(nav)
        .build();

    // official
    // const requestBody = {
    //     filters: filters,
    //     domains: getEmails()
    // };
    // // Send request to backend API
    // const apiUrl = "";

    // const options = {
    //   'method' : 'post',
    //   'payload' : requestBody
    // };


    // const response = UrlFetchApp.fetch(apiUrl, options);

    // let responseCard;
    // if(response.getResponseCode() != 200) {
    //   // if something went wrong
    //   responseCard = errorCardBuilder();
    //   let nav = CardService.newNavigation().pushCard(resultsCard);
    //   return CardService.newActionResponseBuilder()
    //     .setNavigation(nav)
    //     .build();
    // }

    // // if nothing went wrong

    // labelMaker();

    // const response_json = JSON.parse(response.getContentText());
    // // const response = {'beahusky@uconn.edu': false, 'University of Connecticut': false, 'smcadmit@stmarys-ca.edu': true};
    // const rawIgnoredEmails = inputs.ignoredEmailsInput;
    // let ignoredEmails = [];
    // if(rawIgnoredEmails && rawIgnoredEmails.length > 0) {
    //   // "email1, email2,email3, email4, ..."
    //   const parsedIgnoredEmails = rawIgnoredEmails.split(',');
    //   for(let i = 0; i < parsedIgnoredEmails.length; i ++) {
    //     const email = parsedIgnoredEmails[i].trim();
    //     ignoredEmails.push(email);
    //   }

    // }
    // const results = sortEmails(inputs.numEmails, response_json, ignoredEmails);
    // responseCard = resultsCardBuilder(results);
    // let nav = CardService.newNavigation().pushCard(responseCard);
    // return CardService.newActionResponseBuilder()
    //     .setNavigation(nav)
    //     .build();
}

function getEmails(){

  const returnedEmailDomains = [];
  const threads = GmailApp.getInboxThreads();

  for(let i = 0; i < inputs.numEmails; i++){
    const message = threads[i].getMessages()[0];

if(message.isUnread() && isCollegeEmail(message.getFrom())){
      let emailaddress = message.getFrom();
      if(message.getFrom().includes('<')) {
        emailaddress = message.getFrom().split("<")[1].split(">")[0];
        returnedEmailDomains.push(emailaddress);
      }

		}
  }
  return returnedEmailDomains;
}


function isCollegeEmail(email){

  const domain = email.substring(email.indexOf('@'), email.length); 
  	
	if(domain.indexOf('.edu') !== -1) {
		return true
	}
	return false;
}

function logCardBuilder(msg) {

  return CardService.newCardBuilder()
  .setHeader(CardService.newCardHeader().setTitle('Log'))
  .addSection(CardService.newCardSection().addWidget(
    CardService.newKeyValue().setContent(msg))
  )
  .build();
}

function errorCardBuilder() {

  const msg = "Oh no! Something went wrong with our api! Make sure your settings were entered correctly!";

  return CardService.newCardBuilder()
  .setHeader(CardService.newCardHeader().setTitle('Error!!!'))
  .addSection(CardService.newCardSection().addWidget(
    CardService.newKeyValue().setContent(msg))
  )
  .build();
}
