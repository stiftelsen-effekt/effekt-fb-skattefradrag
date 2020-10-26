import React from 'react';

export default function ReferralPane() {


    function showResult(method: string) {
        switch (method) {
            case "Bank":
                return (
                    <div>
                        <h1>Takk!</h1>
                        <img src="https://storage.googleapis.com/effekt-widget/assets/heart.svg" alt="Thank you heart <3"></img>
                        <p>Du kan nå overføre til oss</p>
                    </div>
                )
            case "PayPal":
                return (
                    <div>
                        <h1>Takk!</h1>
                        <img src="https://storage.googleapis.com/effekt-widget/assets/heart.svg" alt="Thank you heart <3"></img>
                        <p>Vi har nå mottatt din donasjon! Vi har også sendt en kvittering til {"Emailen din"} med mer informasjon. Sjekk søppelpost-mappen om du ikke har mottatt eposten i løpet av noen timer.</p>
                    </div>
                )

            case "Vipps":
                return (
                    <h1>Betal nå med Vipps</h1>
                )
        }
    }

    return (
        <div className="pane">
        </div>
    );
}