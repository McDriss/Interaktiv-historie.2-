//beskrivelse af de to slutninger spilleren kan opnå.
function showKapitel8() {
    background(GAMEOVERbillede);
    fill("brown");
    text("Flugten fra København", 700, 100, 400, 100);
    textAlign(CENTER, TOP);
    textSize(30);
    textFont("Georgia");

    // Draw a larger rectangle in the center of the window
    fill(255, 255, 255, 100);
    let rectWidth = width * 0.72; // 72% of the window width
    let rectHeight = height * 0.72; // 72% of the window height
    let rectX = (width - rectWidth) / 2; // Center horizontally
    let rectY = (height - rectHeight) / 2; // Center vertically
    rect(rectX, rectY, rectWidth, rectHeight); // Draw the rectangle

    // Adjust the text to fill the rectangle
    fill("black");
    textAlign(LEFT, TOP);
    textSize(20); // Adjust the text size as needed

    // First text
    let firstText = "Hårde tider, hårde valg. Du har valgt at forlade den lillepige. I et forsøg på at finde vej frem til kontrolpointent i den massive menneskemængde, snubler du og du er ikke i tvivl om at du ikke kommer op igen. Af Københavns gader er du kommet, og i Københavns gader skal du blive.";
    text(firstText, rectX + 20, rectY + 20, rectWidth - 40);

    // Calculate the height of the first text
     let firstTextHeight = (textAscent() + textDescent()) * (firstText.length / (rectWidth - 40) * textWidth('w'));

    // Second text
    let secondText = "Du er død!";
    text(secondText, rectX + 20, rectY + 20 + firstTextHeight + 10, rectWidth - 40, rectHeight - 40); // Add 10 pixels of padding between the texts
    button1.hide();
    button2.hide();
    button3.hide();
    button4.hide();
    button5.hide();
    button6.hide();
    button7.hide();
    button8.hide();
    button9.hide();
    buttonContinue.hide();
    buttonContinue2.hide();

    button3.show();
}
function showKapitelSlut1() {
    background(RådhusBillede);
    fill("brown");
    text("Flugten fra København", 700, 100, 400, 100);
    textAlign(CENTER, TOP);
    textSize(30);
    textFont("Georgia");

    // Draw a larger rectangle in the center of the window
    fill(255, 255, 255, 100);
    let rectWidth = width * 0.72; // 72% of the window width
    let rectHeight = height * 0.72; // 72% of the window height
    let rectX = (width - rectWidth) / 2; // Center horizontally
    let rectY = (height - rectHeight) / 2; // Center vertically
    rect(rectX, rectY, rectWidth, rectHeight); // Draw the rectangle

    // Adjust the text to fill the rectangle
    fill("black");
    textAlign(LEFT, TOP);
    textSize(20); // Adjust the text size as needed

    // First text
    let firstText = "På vejen mod kontrolpunktet, er pigen blevet i bedre humør, og viser dig stolt sin bamse frem. En kobamse ved navn Ninus. Ninus og den lille piges glade latter overbeviser dig om at der er håb forude. Men hvad der ventede jer ved kontrolpointen, kunne ingen forberede sig på";
    text(firstText, rectX + 20, rectY + 20, rectWidth - 40);

    // Calculate the height of the first text
    let firstTextHeight = (textAscent() + textDescent()) * (firstText.length / (rectWidth - 40) * textWidth('w'));

    // Second text
    let secondText = "Fortsættelse følger!";
    text(secondText, rectX + 20, rectY + 20 + firstTextHeight + 10, rectWidth - 40, rectHeight - 40); // Add 10 pixels of padding between the texts
    button1.hide();
    button2.hide();
    button4.hide();
    button5.hide();
    button6.hide();
    button7.hide();
    button8.hide();
    button9.hide();
    buttonContinue.hide();
    buttonContinue2.hide();

    button3.show();
}
function showKapitelSlut2() {
    background(GAMEOVERbillede);
    fill("brown");
    text("Flugten fra København", 700, 100, 400, 100);
    textAlign(CENTER, TOP);
    textSize(30);
    textFont("Georgia");

    // Draw a larger rectangle in the center of the window
    fill(255, 255, 255, 100);
    let rectWidth = width * 0.72; // 72% of the window width
    let rectHeight = height * 0.72; // 72% of the window height
    let rectX = (width - rectWidth) / 2; // Center horizontally
    let rectY = (height - rectHeight) / 2; // Center vertically
    rect(rectX, rectY, rectWidth, rectHeight); // Draw the rectangle

    // Adjust the text to fill the rectangle
    fill("black");
    textAlign(LEFT, TOP);
    textSize(20); // Adjust the text size as needed

    // First text
    let firstText = "Forbinding, dåsemad og sågar Airpods finder du inde i butikken, som bliver plyndret... Imens du forsøgte at connecte Airpodse til din telefon, blev du overfaldet af en gruppe unge mænd, som tog alt hvad du havde, inklusiv dit liv!";
    text(firstText, rectX + 20, rectY + 20, rectWidth - 40);

    // Calculate the height of the first text
    let firstTextHeight = (textAscent() + textDescent()) * (firstText.length / (rectWidth - 40) * textWidth('w'));

    // Second text
    let secondText = "Du er død!";
    text(secondText, rectX + 20, rectY + 20 + firstTextHeight + 10, rectWidth - 40, rectHeight - 40); // Add 10 pixels of padding between the
    button1.hide();
    button2.hide();
    button4.hide();
    button5.hide();
    button6.hide();
    button7.hide();
    button8.hide();
    button9.hide();
    buttonContinue.hide();
    buttonContinue2.hide();

    button3.show();
    
}