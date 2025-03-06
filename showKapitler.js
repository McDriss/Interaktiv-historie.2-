// funktion: viser kapitlerne i spillet

function showKapitel1() {
    background(københavnBillede);
   

    fill("brown");
    noStroke();
    text("Flugten fra København", 700, 100, 400, 100);
    textAlign(CENTER, TOP);
    textSize(30);
    textFont("Georgia");


    fill(255, 255, 255, 100);
    rect(820, 470, 110, 140, 20);
    button1.show();
    button2.show();
    buttonContinue.hide();
    button4.hide();
    button5.hide();
    button3.hide();
    buttonContinue2.hide();
    button6.hide();
    button7.hide();
    button8.hide();
    button9.hide();


}

function showKapitel2() {
    background(københavnBillede);
    fill("brown");
    textAlign(CENTER, TOP);
    textSize(30);
    textFont("Georgia");
    text("Flugten fra København", width / 2, 20);

    // Draw a larger rectangle in the center of the window
    fill(255, 255, 255, 100);
    let rectWidth = width * 0.72; // 72% of the window width
    let rectHeight = height * 0.72; // 72% of the window height
    let rectX = (width - rectWidth) / 2; // Center horizontally
    let rectY = (height - rectHeight) / 2; // Center vertically
    rect(rectX, rectY, rectWidth, rectHeight, 20); // Draw the rectangle

    // Adjust the text to fill the rectangle
    fill("black");
    textAlign(LEFT, TOP);
    textSize(20); // Adjust the text size as needed

    // First text
    let firstText = "Det virker som begyndelsen på slutningen!";
    text(firstText, rectX + 20, rectY + 20, rectWidth - 40);

    // Calculate the height of the first text
    let firstTextHeight = textAscent() + textDescent();

    // Second text
    let secondText = "Eller slutningne på begyndelsen. Uanset hvad havde du alrig nogensinde forestillet dig at skulle forlade dit hjem i smukke København. Allerede i dag kl:12:30, skal du med de andre brogere i din boligblok mødes til kontrolcheck af sundhedsvæsnet. Du har 30 minutter til at pakke en taske med de mest nødvendige ting, inden du skal ud af døren. Hvad gør du?";
    text(secondText, rectX + 20, rectY + 20 + firstTextHeight + 20, rectWidth - 40);

    // Calculate the height of the second text
    let secondTextHeight = (textAscent() + textDescent()) * (secondText.length / (rectWidth - 40) * textWidth('w'));
    console.log(secondTextHeight);
    // Third text
    let thirdText = "A Bruger et øjeblik på at tænke over, de gode minder du har haft i København.";
    text(thirdText, rectX + 20, rectY + 20 + firstTextHeight + 20 + secondTextHeight + 20, rectWidth - 40);

    // Calculate the height of the third text
    let thirdTextHeight = (textAscent() + textDescent()) * (thirdText.length / (rectWidth - 40) * textWidth("w"));

    // Fourth text
    let fourthText = "B Pakker din taske og tager afsted til kontrolchecket.";
    text(fourthText, rectX + 20, rectY + 20 + firstTextHeight + 20 + secondTextHeight + 20 + thirdTextHeight + 20, rectWidth - 40);

    button1.hide();
    button2.hide();

    button4.show();
    button5.show();

    button4.position(850, 500);
    button4.size(50, 25);
    button4.mousePressed(button4event);



    button5.position(850, 550);
    button5.size(50, 25);
    button5.mousePressed(button5event);


}
function button4event() {
    storyState = "slide5";
}
function button5event() {
    storyState = "slide4";
}


function showKapitel4() {
    background(københavnBillede);
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
    let firstText = "På trods af den megget triste situation, er der ikke tid at spilde på nostalgi, især i disse kritiske tider!!";
    text(firstText, rectX + 20, rectY + 20, rectWidth - 40);

    // Calculate the height of the first text
    let firstTextHeight = textAscent() + textDescent();

    // Second text
    let secondText = "Fordi du valgte at pakke dine ting sammen i god tid, har du tid til at organisere og pakke dine ting ordentligt, så du både har det mest nødvendige";
    text(secondText, rectX + 20, rectY + 20 + firstTextHeight + 20, rectWidth - 40);
    button1.hide();
    button2.hide();
    button3.hide();
    button4.hide();
    button5.hide();
    button6.hide();
    button7.hide();
    button8.hide();
    button9.hide();
    
    buttonContinue.show();

    



}

function showKapitel5() {
    background(københavnBillede);
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
    let firstText = "Du tænker på alle de gode minder, du har haft i København. Du husker de lange sommeraftener ved havnen, de hyggelige caféer og de smukke gader. Du tænker på alle de mennesker, du har mødt, og alle de oplevelser, du har haft. Du tænker på alt det, du vil savne, når du forlader byen.";
    text(firstText, rectX + 20, rectY + 20, rectWidth - 40);

    // Calculate the height of the first text
    let firstTextHeight = textAscent() + textDescent();
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

    buttonContinue2.show();


    
}

function showKapitel6() {
    background(københavnBillede);
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
    let firstText = "Du har nu pakket din taske, og er klar til at forlade dit hjem. Du tager en dyb indånding, og går ud af døren.";
    text(firstText, rectX + 20, rectY + 20, rectWidth - 40);

    // Calculate the height of the first text
    let firstTextHeight = textAscent() + textDescent();

    // Second text
    let secondText = "Da du går ud på vejen, er alt kaos. Gaderne er stoppet til med biler i den ene og anden retning, og folk løber rundt i panik. Du kan høre sirener i det fjerne, og du kan se røg stige op fra bygninger i horisonten. Du får øje på en grædende lillepige, der er blevet væk fra sin familie. Hvad gør du?";
    text(secondText, rectX + 20, rectY + 20 + firstTextHeight + 20, rectWidth - 40);

    // Calculate the height of the second text
    let secondTextHeight = (textAscent() + textDescent()) * (secondText.length / (rectWidth - 40) * textWidth('w'));

    // Third text
    let thirdText = "A Tag pigen i hånden, og følg hende med til kontrolpointet, hvor hendes forældre sikkert leder efter hende.";
    text(thirdText, rectX + 20, rectY + 20 + firstTextHeight + 20 + secondTextHeight + 20, rectWidth - 40);

    // Calculate the height of the third text
    let thirdTextHeight = (textAscent() + textDescent()) * (thirdText.length / (rectWidth - 40) * textWidth('w'));

    // Fourth text
    let fourthText = "B Ignorer pigen, og fortsæt mod kontrolpointet.";
    text(fourthText, rectX + 20, rectY + 20 + firstTextHeight + 20 + secondTextHeight + 20 + thirdTextHeight + 20, rectWidth - 40);

    buttonContinue.hide();
    buttonContinue2.hide();
    button1.hide();
    button2.hide();
    button3.hide();
    button4.hide();
    button5.hide();
    button8.hide();
    button9.hide();
    
    button6.show();
    button7.show();

}
function showKapitel7() {
    background(københavnBillede);
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
    let firstText = "Du tager pigen i hånden, og forsøger at navigere dig vej imod kontrolpointet... Da I går ned af en gade, ser du en gruppe mennesker, der er ved at plyndre en butik. Du kan høre dem råbe og skrige, og du kan se dem smadre vinduerne og tage varer ud af butikken. ´For Søren da Lars! Jeg tror kontrolpointet er den anden vej!' Høre du nogle forbigående sige. Hvad gør du?";
    text(firstText, rectX + 20, rectY + 20, rectWidth - 40);

    // Calculate the height of the first text
    let firstTextHeight = (textAscent() + textDescent()) * (firstText.length / (rectWidth - 40) * textWidth('w'));

    // Second text
    let secondText = "A Ignorer plyndringerne, og fortsætter mod kontrolpointet.?";
    text(secondText, rectX + 20, rectY + 20 + firstTextHeight + 20, rectWidth - 40);

    // Calculate the height of the second text
    let secondTextHeight = (textAscent() + textDescent()) * (secondText.length / (rectWidth - 40) * textWidth('w'));

    // Third text
    let thirdText = "B Se plyndringen som en mulighed for at skaffe dig nogle nødvendige forsyninger?";
    text(thirdText, rectX + 20, rectY + 20 + firstTextHeight + 20 + secondTextHeight + 20, rectWidth - 40);
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

    button8.show();
    button9.show();

}
