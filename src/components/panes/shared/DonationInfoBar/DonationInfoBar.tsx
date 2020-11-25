import { format } from 'path'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { State, PaymentMethod } from '../../../../store/state'
import { BankLogo, PayPalLogo, VippsLogo, InfoBarWrapper, InfoBarText, InfoItemWrapper } from './DonationInfoBar.style'

/**
 * This component renders a header that displays donor name, donation method and donation sum
 * props.sum is optional because it is only needed in DonationPane for continuous updating
 * props.disableName and props.disableSum is used for preventing updating of previous pane when switching panes
 * If sum is not provided through props, it is fetched from global store instead
 */
interface InfoBarProps {
    sum?: number;
    disableName?: boolean;
    disableSum?: boolean
}

export default function DonationInfoBar(props: InfoBarProps) {
    const donationState = useSelector((state: State) => state.donation)
    const currentPaneNumber = useSelector((state: State) => state.layout.paneNumber)
    const donorFirstName = donationState.donor?.name ? donationState.donor?.name.split(' ')[0] : "Anonym"

    // Places a period between every third digit
    function formatCurrency(value: number) { 
        let formattedCurrency = value.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.");
        return formattedCurrency
    }
    
    return (
        <InfoBarWrapper>
            {(currentPaneNumber > 1 && (!props.disableName || props.disableName === undefined)) &&
                <InfoItemWrapper>
                    <svg stroke="currentColor" fill="#FFAA2B" strokeWidth="0" viewBox="0 0 16 16" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path></svg>
                    <InfoBarText>{donorFirstName}</InfoBarText>
                </InfoItemWrapper>
            }
            <InfoItemWrapper>
                {donationState.method === PaymentMethod.BANK && <BankLogo />}
                {donationState.method === PaymentMethod.PAYPAL && <PayPalLogo />}
                {donationState.method === PaymentMethod.VIPPS && <VippsLogo />}
            </InfoItemWrapper>
            {((donationState.method !== PaymentMethod.BANK && currentPaneNumber > 1) && (!props.disableSum || props.disableSum === undefined)) &&
                <InfoItemWrapper>
                    <svg stroke="currentColor" fill="#FFAA2B" strokeWidth="0" viewBox="0 0 512 512" height="30px" width="30px" xmlns="http://www.w3.org/2000/svg"><path d="M258 21.89c-.5 0-1.2 0-1.8.12-4.6.85-10.1 5.1-13.7 14.81-3.8 9.7-4.6 23.53-1.3 38.34 3.4 14.63 10.4 27.24 18.2 34.94 7.6 7.7 14.5 9.8 19.1 9 4.8-.7 10.1-5.1 13.7-14.7 3.8-9.64 4.8-23.66 1.4-38.35-3.5-14.8-10.4-27.29-18.2-34.94-6.6-6.8-12.7-9.22-17.4-9.22zM373.4 151.4c-11 .3-24.9 3.2-38.4 8.9-15.6 6.8-27.6 15.9-34.2 24.5-6.6 8.3-7.2 14.6-5.1 18.3 2.2 3.7 8.3 7.2 20 7.7 11.7.7 27.5-2.2 43-8.8 15.5-6.7 27.7-15.9 34.3-24.3 6.6-8.3 7.1-14.8 5-18.5-2.1-3.8-8.3-7.1-20-7.5-1.6-.3-3-.3-4.6-.3zm-136.3 92.9c-6.6.1-12.6.9-18 2.3-11.8 3-18.6 8.4-20.8 14.9-2.5 6.5 0 14.3 7.8 22.7 8.2 8.2 21.7 16.1 38.5 20.5 16.7 4.4 32.8 4.3 44.8 1.1 12.1-3.1 18.9-8.6 21.1-15 2.3-6.5 0-14.2-8.1-22.7-7.9-8.2-21.4-16.1-38.2-20.4-9.5-2.5-18.8-3.5-27.1-3.4zm160.7 58.1L336 331.7c4.2.2 14.7.5 14.7.5l6.6 8.7 54.7-28.5-14.2-10zm-54.5.1l-57.4 27.2c5.5.3 18.5.5 23.7.8l49.8-23.6-16.1-4.4zm92.6 10.8l-70.5 37.4 14.5 18.7 74.5-44.6-18.5-11.5zm-278.8 9.1a40.33 40.33 0 0 0-9 1c-71.5 16.5-113.7 17.9-126.2 17.9H18v107.5s11.6-1.7 30.9-1.8c37.3 0 103 6.4 167 43.8 3.4 2.1 10.7 2.9 19.8 2.9 24.3 0 61.2-5.8 69.7-9C391 452.6 494 364.5 494 364.5l-32.5-28.4s-79.8 50.9-89.9 55.8c-91.1 44.7-164.9 16.8-164.9 16.8s119.9 3 158.4-27.3l-22.6-34s-82.8-2.3-112.3-6.2c-15.4-2-48.7-18.8-73.1-18.8z"></path></svg>
                    <InfoBarText>{(props.sum !== undefined ? formatCurrency(props.sum) : formatCurrency(donationState.sum))}kr</InfoBarText>
                </InfoItemWrapper>
            }
        </InfoBarWrapper>
    )
}