import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Colors from "common/Colors";
import VideoCard from "modules/guides/videoCard";
import "./agent.css";
import Data from "modules/guides/data";
import Config from "common/Config";
class ManageSecurityAgent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data.agent,
      url: null,
    };
  }
  componentDidMount() {
    this.handleLoad();
  }
  handleLoad() {
    const { data } = this.state;
    return (
      <div>
        {data.map((item) => {
          if (this.props.history.location.pathname === item.route) {
            this.setState({
              url: item.url,
            });
          }
        })}
      </div>
    );
  }
  renderContent() {
    return (
      <div
        style={{
          marginTop: 30,
        }}
      >
        <p>
          To set securities to your KeyHelpa account for extra protection, read
          the following instructions below:
        </p>
        <ol type="1">
          <li>
            On Agent’s web application, click your profile icon or photo then a
            dropdown menu will appear. Choose “Settings” and you will be taken
            to a new sidebar menu. Click the “Security” on your sidebar menu and
            you will be redirected to the “Two-step verification” page.
          </li>
          <li>
            On your “Two-step verification” page, you can add the following
            extra layer of protections:
          </li>
          <ul>
            <li>
              <b className="b-agent">Text message</b> - You will receive a six
              digit code by text message to confirm it's you when you sign in to
              your KeyHelpa account.
            </li>
            <li>
              <b className="b-agent">Google Authenticator</b> - You will enter a
              code generated by your authenticator app to confirm it's you when
              you sign in to your KeyHelpa account.
            </li>
            <li>
              <b className="b-agent">Security question</b> - You will answer a
              question you choose to confirm it's you when you sign in to your
              KeyHelpa account.
            </li>
          </ul>
          <p>
            All of these layers can be turned on/off by clicking on the toggle
            button on each card layer.
          </p>
          <li>
            When you click to turn on the “Text message”, you will then be
            prompted to add your mobile number. Once you have inputted your
            mobile number, just click the “Next” button to continue and then
            enter your SMS Code once you receive it, then click the “Validate”
            button. Once the code is verified, your “Text message” layer of
            protection will be ON.
          </li>
          <p>
            You may turn OFF your “Text message”, by just switching off the
            toggle button.
          </p>
          <li>
            When you click to turn on the “Google Authenticator”, you will then
            be prompted for “Authenticator verification” where you need to scan
            the QR Code shown on the app to request for the key (you can
            download the authenticator to your phone from App or Google Play
            store). Then, enter the code generated by your authenticator app and
            click the “Save” button. Once the code is verified, your “Google
            Authenticator” layer of protection will be ON.
          </li>
          <p>
            You may turn OFF your “Google Authenticator”, by just switching off
            the toggle button. By switching it off, it means deleting your
            authenticator app will disable authenticator verification and remove
            the extra security on your account, you will then be prompted to a
            “Deleting authenticator app” confirmation modal where you will be
            asked if you are sure you want to delete. If you are sure, just
            click the “Yes, delete” button, otherwise cancel.
          </p>
          <li>
            {" "}
            When you click to turn on the “Security question”, you will then be
            prompted to set your security QUESTIONS and ANSWERS. Once you have
            provided, just click the “Save” button and your “Security question”
            layer of protection will be ON.
          </li>
          <p>
            You may turn OFF your “Security question”, by just switching off the
            toggle button.
          </p>
        </ol>
        <p>
          If you have any concerns or inquiries, please don’t hesitate to{" "}
          <a href="../contact_us">contact us</a>.{" "}
        </p>
      </div>
    );
  }

  render() {
    const { url } = this.state;
    const { theme } = this.props;
    return (
      <div
        style={{
          width: "100%",
          float: "left",
        }}
      >
        <p
          style={{
            color:
              theme == "agent" ? Colors.agentTextTitle : Colors.helpaTextTitle,
            marginBottom: "5%",
          }}
        >
          Security is very important within KeyHelpa, this is why we add a
          two-step verification on our platform for all our users' accounts. Add
          an extra layer of security, now, to block unauthorised access and to
          have an additional protection for your account.{" "}
        </p>

        <VideoCard url={url} />
        {this.renderContent()}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ state: state });
const mapDispatchToProps = (dispatch) => {
  const { actions } = require("reduxhandler");
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ManageSecurityAgent));
