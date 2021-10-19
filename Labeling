function labelMaker() {
    GmailApp.createLabel("College Non-Matches")
    GmailApp.createLabel("College Matches");

}

//Get dictionary from backend that will have all domains and whether or not they should be kept 
//loop through all unread emails in the inbox and then send to labels


function sortEmails(numEmails, collegeResponse, ignoredEmails=[]){
  const threads = GmailApp.getInboxThreads(0, numEmails);
  let labelCount = 0;
  let matchCount = 0;
  let noMatchCount = 0;

  for(let i = 0; i < threads.length; i++) {
    const message = threads[i].getMessages()[0];

		if(message.isUnread() && isCollegeEmail(message.getFrom())){
      let email = message.getFrom();
      if(message.getFrom().includes('<')) {
        email = message.getFrom().split("<")[1].split(">")[0];
      }

      // pre-check to see if we should ignore or not
      if(ignoredEmails.includes(email)) {
        continue; // ignore and continue on
      }
      
      // logic to label
      labelCount ++;
      if(email in collegeResponse) {
        if(collegeResponse[email]){
          const nonMatchLabel = GmailApp.getUserLabelByName("College Non-Matches");

          nonMatchLabel.addToThread(threads[i]);
          noMatchCount ++;

        } else { 

          const matchLabel = GmailApp.getUserLabelByName("College Matches");

          matchLabel.addToThread(threads[i]);

          matchCount ++;
        }          
      } 
		}
  }
  return {labelCount, noMatchCount, matchCount};
}

function resultsCardBuilder(results) {
  const totalSchool = results.labelCount;
  const matchCount = results.matchCount;
  const noMatchCount = results.noMatchCount;

  const msg = `The amount of college emails \n found in our database: ${totalSchool} \n\n The number of matches \n according to your critera: ${matchCount} \n\n The Number of non-matches \n according to your criteria: ${noMatchCount}`;

  return CardService.newCardBuilder()
  .setHeader(CardService.newCardHeader().setTitle('Filter Results'))
  .addSection(CardService.newCardSection().addWidget(
    CardService.newKeyValue().setContent(msg))
  )
  .build();
}
