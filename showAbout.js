//About page function... beskrivelse af situationen spilleren befinder sig i.
function showKapitelAbout() {
    background(københavnBillede);
    fill("brown");
    text("Flugten fra København", 700, 100, 400, 100);
    textAlign(CENTER, TOP);
    textSize(30);
    textFont("Georgia");


    // Draw a larger rectangle in the center of the window
    fill(255, 255, 255, 100);
    let rectWidth = width * 0.72; // 72% of the window width (20% larger than 60%)
    let rectHeight = height * 0.72; // 72% of the window height (20% larger than 60%)
    let rectX = (width - rectWidth) / 2; // Center horizontally
    let rectY = (height - rectHeight) / 2; // Center vertically
    rect(rectX, rectY, rectWidth, rectHeight); // Draw the rectangle

    // Adjust the text to fill the rectangle
    fill("black");
    textAlign(LEFT, TOP);
    textSize(20); // Adjust the text size as needed

    // First text
    let firstText = "Københavns skal evakueres!";
    text(firstText, rectX + 20, rectY + 20, rectWidth - 40, rectHeight - 40);

    // Calculate the height of the first text
    let firstTextHeight = textAscent() + textDescent();

    // Second text
    let secondText = "Året er 2030, og en katastrofal begivenhed har ramt København. En ukendt virus spreder sig hurtigt, og myndighederne har besluttet at evakuere byen for at forhindre yderligere spredning. Du indtager rollen som en almindelig borger, der skal forsøge at navigere gennem panik og kaos i København, og sammentidig forsøge at træffe svære valg for at overleve og beskytte dine kære.";
    text(secondText, rectX + 20, rectY + 20 + firstTextHeight + 10, rectWidth - 40, rectHeight - 40); // Add 10 pixels of padding between the texts

    button3.show();


    button1.hide();
    button2.hide();


}