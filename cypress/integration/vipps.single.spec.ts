// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="../support/index.d.ts" />
import "cypress-react-selector";
import { API_URL } from "../../src/config/api";

context("Window", () => {
  before(() => {
    cy.visit("http://localhost:3000");
    cy.waitForReact();
  });

  const donationState = () => cy.getState().its("donation");

  it("End-2-End single vipps donation", () => {
    const randomSum = Math.floor(Math.random() * 1000) + 100;

    cy.intercept("POST", `${API_URL}/donations/register`).as(
      "registerDonation"
    );

    cy.pickRecurring(false);
    cy.pickMethod("vipps");
    cy.inputDonorValues();

    cy.get("button").click();
    cy.wait(500);

    cy.react("TextInput", { props: { name: "sum" } }).type(
      randomSum.toString()
    );

    cy.get("button").click();
    cy.wait("@registerDonation")
      .its("response.statusCode")
      .should("be.oneOf", [200, 304]);
    cy.wait(500);

    cy.get("[data-cy=nextReferral]").click();

    donationState()
      .its("paymentProviderURL")
      .should((url: string) => {
        expect(url).to.have.string("vipps.no");
      });
  });
});
