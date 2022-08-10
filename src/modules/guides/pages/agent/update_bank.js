import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Colors from 'common/Colors';
import AgentVideoThumbnail from 'assets/agent-video-thumbnail.png'
import HelpaVideoThumbnail from 'assets/helpa-video-thumbnail.png'
import { PlayArrow, PlayCircleFilled } from '@mui/icons-material';
import { SvgIcon } from '@mui/material';
class UpdateBankAgent extends Component {
    constructor(props) {
        super(props)
    }
    
    renderVideo() {
        const { theme } = this.props;

        return (
            <div style={{
                width: '100%',
                float: 'left',
                height: 500,
                backgroundImage: `url(${theme == 'agent' ? AgentVideoThumbnail : HelpaVideoThumbnail})`,
                alignItems: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100% auto',
                display: 'flex',
                alignContent: 'center',
                justifyContent: 'center'
            }}
                className="active-color-hover full-width-mobile video-player-holder"
            >
                <div style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50px',
                    float: 'left',
                    background: theme == 'agent' ? Colors.agentGray : Colors.helpaPink,
                    alignItems: 'center',
                    alignContent: 'center',
                    display: 'flex',
                    justifyContent: 'center'
                }}
                >
                    <SvgIcon
                        component={PlayArrow}
                        style={{
                            color: Colors.white,
                            fontSize: 60
                        }}
                    />
                </div>
            </div>
        )
    }
    renderContent(){
        return(
            <div>
                <p>To update  your bank details, read the following instructions below:</p>
                <ol type='1'>
                    <li>On Agent’s web application, click your profile icon or photo then a dropdown menu will appear. Choose “Settings” and you will be taken to a new sidebar menu. Click the “Billing” on your sidebar menu and you will be redirected to the “Banking details” page.</li>
                    <li>On your “Banking details” page, you will need to remove your current authorized payment method if you want to replace it with a new one. To do this, just click the red trash icon on the card containing your current bank details.</li>
                    <p>Once you have clicked the red trash icon, it will then be removed and you can now input a new payment method, by filling in the following field:</p>
                    <ul>
                        <li>Card Number</li>
                        <li>Expiry Date (MM/YY)</li>
                        <li>CVC (Card Verification Code)</li>
                    </ul>
                    <p>After completing the details of payment, just click the “Authorize” button to save the new payment method. New payment method will automatically be added and saved once it’s verified to be existing and active.</p>
                </ol>   
                <p><b>Reminders</b>:</p>
                    <ul>
                        <li>Payment logic: Your credit card will be deducted for the amount equal to a one week payment, until the job contract is completed or cancelled.</li>
                        <li>Payments day: On Monday of each week for the duration of the term of the contract the freelancer submits a payment request. The payment is equal to "weekly payment''. Payer receives a notification email of payment due. The payer is not required to take any action unless he/she declines the payment by clicking the decline link.</li>
                        <li>Decline payment: Payer is required to provide reasons for the cancellation of the contract and for declining payment. - A notification is sent to the freelancer for their reply. The payment held in Stripe is held in Keyhelpa's disputed account until the dispute is settled within the terms and conditions.</li>
                    </ul>      
                <p>If you have any concerns or inquiries, please don’t hesitate to <a href='#'>contact us</a>. </p>
            </div>
        )
    }

    render() {
        const { theme } = this.props;
        return (
            <div style={{
                width: '100%',
                float: 'left'
            }}>
                <p style={{
                    color: theme == 'agent' ? Colors.agentTextTitle : Colors.helpaTextTitle
                }}>
Your choice of payment method will be used on payments when making transactions with KeyHelpa. It is important that you keep your account funded enough especially when paying Helpas.                </p>


                {
                    this.renderVideo()
                }
                {
                    this.renderContent()
                }
            </div>
        )
    }
}
const mapStateToProps = (state) => ({ state: state });
const mapDispatchToProps = (dispatch) => {
    const { actions } = require('reduxhandler');
    return {
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UpdateBankAgent));