import React, { Component } from 'react';
import _ from 'lodash';
import { TextInput, Select, SelectItem } from 'carbon-components-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { accountInformationDetails } from '../../Redux/actions/accountDetails';
import { accountInformationData } from '../../Redux/actions/accountInformationData';

class AccountInformation extends Component {

    state = {
        options: [
            { name: "Option1", value: "option1" },
            { name: "Option2", value: "option2" },
            { name: "Option3", value: "option3" }
        ],
        // sectorOptions: [
        //     { name: "Communication", value: "communication" },
        //     { name: "Cross Sector", value: "crossSector" },
        //     { name: "Distribution", value: "distribution" },
        //     { name: "FSS", value: "fss" },
        //     { name: "Industrial", value: "industrial" },
        //     { name: "Public Sector", value: "publicSector" },
        // ],
        // communicationOptions: [
        //     { name: "Energy and Utilities", value: "Energy and Utilities" },
        //     { name: "Telco and Media and Entertainment", value: "Telco and Media and Entertainment" },
        // ],
        // crossSectorOptions: [
        //     { name: "Option1", value: "option1" },
        //     { name: "Option2", value: "option2" },
        //     { name: "Option3", value: "option3" }
        // ],
        // distributionOptions: [
        //     { name: "Consumer Industry", value: "Consumer Industry" },
        //     { name: "Retail", value: "Retail" },
        //     { name: "Travel and Transportation", value: "Travel and Transportation" },
        // ],
        // fssOptions: [
        //     { name: "Banking and Financial Markets", value: "Banking and Financial Markets" },
        //     { name: "Insurance", value: "Insurance" },
        // ],
        // industrialOptions: [
        //     { name: "Auto and Aerospace and Defense", value: "Auto and Aerospace and Defense" },
        //     { name: "Chemical and Petroleum", value: "Chemical and Petroleum" },
        //     { name: "Electronics", value: "Electronics" },
        //     { name: "Industrial Products", value: "Industrial Products" },
        // ],
        // publicSectorOptions: [
        //     { name: "Cross Industry", value: "Cross Industry" },
        //     { name: "Government", value: "Government" },
        //     { name: "Health and Lifesciences", value: "Health and Lifesciences" },
        // ],
        sectorOptions: [],
        industryOptions: [],
        growthPlatformOptions: [
            { name: "Cloud Application Innovation", value: "cloudApplicationInnovation" },
            { name: "Cognitive Process Transformation", value: "cognitiveProcessTransformation" },
            { name: "Digital Strategy & iX", value: "digitalStrategyIX" },
        ],
        cloudApplicationInnovationOptions: [
            { name: "CAS Advise, Move & Build", value: "casAdviseMoveBuild" },
            { name: "CAS Manage", value: "casManage" },
            { name: "Next Gen EA", value: "nextGenEA" },
        ],
        cognitiveProcessTransformationOptions: [
            { name: "CBDS", value: "cbds" },
            { name: "CPR", value: "cpr" },
            { name: "CPS", value: "cps" },
        ],
        digitalStrategyIXOptions: [
            { name: "iX", value: "ix" },
            { name: "Digital Strategy", value: "digitalStrategy" },
        ],
        casAdviseMoveBuildOptions: [
            { name: "Cloud Application Development", value: "cloudApplicationDevelopment" },
            { name: "Complex SI & Architecture", value: "complexSIArchitecture" },
            { name: "Migration Factory", value: "cigrationFactory" },

        ],
        casManageOptions: [
            { name: "Automation", value: "automation" },
            { name: "Custom AMS", value: "customAMS" },
            { name: "Dev Sec Ops", value: "devSecOps" },
            { name: "iGNITE (Test Innovation)", value: "iGNITETestInnovation" },
            { name: "Microsoft AMS", value: "microsoftAMS" },
            { name: "Oracle AMS", value: "oracleAMS" },
            { name: "SAP AMS", value: "sapAMS" },
            { name: "ServiceNow", value: "serviceNow" },
        ],
        nextGenEAOptions: [
            { name: "SAP", value: "sap" },
            { name: "Microsoft", value: "microsoft" },
            { name: "Oracle", value: "oracle" },
            { name: "Talent & Transformation Technologies", value: "talentTransformationTechnologies" },
        ],
        cbdsOptions: [
            { name: "Cognitive & Analytics", value: "cognitiveAnalytics" },
            { name: "Data Platform Services", value: "dataPlatformServices" },
            { name: "Intelligent Connected Operations", value: "intelligentConnectedOperations" },
        ],
        cprOptions: [
            { name: "Blockchain", value: "blockchain" },
            { name: "Finance", value: "finance" },
            { name: "Industry Core Processes", value: "industryCoreProcesses" },
            { name: "Supply Chain and Procurement", value: "supplyChainAndProcurement" },
            { name: "Talent & Transformation", value: "talentTransformation" },
        ],
        cpsOptions: [
            { name: "Cognitive Process Automation", value: "cognitiveProcessAutomation" },
            { name: "Finance Process Services", value: "financeProcessServices" },
            { name: "Talent & Transformation Process Services", value: "talentTransformationProcessServices" },
        ],
        ixOptions: [
            { name: "Customer Engagement & Design", value: "customerEngagementDesign" },
            { name: "Digital Commerce", value: "digitalCommerce" },
            { name: "Marketing Platforms", value: "marketingPlatforms" },
            { name: "Mobile", value: "mobile" },
            { name: "Salesforce", value: "salesforce" },
        ],
        digitalStrategyOptions: [
            { name: "Digital Business Strategy", value: "digitalBusinessStrategy" },
            { name: "Technology & Data Strategy", value: "technologyDataStrategy" },
        ],
        serviceLineOpitons: [],
        practiceOptions: [],
        iotOptions: [
            { name: "ASIA PACIFIC", value: "asiaPacific" },
            { name: "EUROPE", value: "europe" },
            { name: "GREATER CHINA GROUP", value: "greatedChinaGroup" },
            { name: "JAPAN", value: "japan" },
            { name: "LATIN AMERICA", value: "latinAmerica" },
            { name: "MEA", value: ",mea" },
            { name: "NORTH AMERICA", value: "northAmerica" },
        ],
        validate: {
            accountName: false,
            sector: false,
            industry: false,
            practice: false,
            deliveredBy: false,
            iot: false,
            growthPlatform: false,
            serviceLine: false
        }
    }

    componentDidMount() {
        this.props.accountInformationData();
    }

    onTextChange = event => {
        this.props.accountInformationDetails({ name: event.target.name, value: event.target.value })
    };

    onBlur = event => {

        const accountList = this.props.accountInformation.accountList;
        const details = this.props.accountInformationDetails;

        if (event.target.name === 'accountName') {
            const selectedList = _.filter(accountList, account => account.Global_Client_Name === event.target.value);
            const sectorOptions = _.map(selectedList, list => {
                return ({ name: list.Account_Sector, value: list.Account_Sector})
            });
            const industryOption = _.map(selectedList, list => {
                return ({ name: list.Account_Industry, value: list.Account_Industry})
            })

            this.setState({
                sectorOptions: sectorOptions,
                industryOptions: industryOption
            })

            if (details.sector !== '') {
                this.setState({ sector: true })
                this.props.accountInformationDetails({ name: 'sector', value: '' })
            }

            if (details.industry !== '') {
                this.setState({ industry: true })
                this.props.accountInformationDetails({ name: 'industry', value: '' })
            }


        }

        let validate = this.state.validate;
        validate[event.target.name || event.target.id] = event.target.value === '' ? true : false;
        this.setState({ validate })
    };

    onKeyPress = event => {
        console.log('this is for on key press');
    }

    onChangeSelect = event => {
        const details = this.props.accountInformationDetails;
        if (event.target.id === 'growthPlatform') {
            this.setState({
                serviceLineOpitons: this.state[event.target.value + 'Options']
            })
            if (details.serviceLine !== '') {
                this.setState({ serviceLine: true })
                this.props.accountInformationDetails({ name: 'serviceLine', value: '' })
            }

            if (details.practice !== '') {
                this.setState({ practice: true })
                this.props.accountInformationDetails({ name: 'practice', value: '' })
            }

            if (details.serviceLine !== '' && details.practice !== '') {
                this.setState({ serviceLine: true, practice: true })
                this.props.accountInformationDetails({ name: 'serviceLine', value: '' })
                this.props.accountInformationDetails({ name: 'practice', value: '' })

            }
        } else if (event.target.id === 'serviceLine') {
            this.setState({
                practiceOptions: this.state[event.target.value + 'Options']
            })

            if (details.practice !== '') {
                this.setState({ practice: true })
                this.props.accountInformationDetails({ name: 'practice', value: '' })
            }

        }

        // if (event.target.id === 'sector') {
        //     this.setState({
        //         industryOptions: this.state[event.target.value + 'Options']
        //     })

        //     if (details.industry !== '') {
        //         this.setState({ industry: true })
        //         this.props.accountInformationDetails({ name: 'industry', value: '' })
        //     }
        // }

        this.props.accountInformationDetails({ name: event.target.id, value: event.target.value })
    }

    render() {
        return (
            <div className="accountInformation">
                <div className="accountInformation__header">
                    <h3>1. Account Information</h3>
                    <p>Fill these fields to capture account specific information.</p>
                </div>
                <div className="accountInformation__fields">
                    <div className="accountInformation__inputRow">
                        <div className="accountInformation__inputField">
                            <TextInput
                                id='accountName'
                                invalid={this.state.validate.accountName}
                                invalidText="A value is required"
                                labelText="Account Name"
                                placeholder="Placeholder text"
                                name="accountName"
                                required
                                defaultValue={this.props.accountInformationDetails.accountName}
                                onChange={event => this.onTextChange(event)}
                                onBlur={this.onBlur}
                                onKeyPress={this.onKeyPress}
                                list="browsers"/
                            >
                            <datalist id="browsers">
                                {this.props.accountInformation.accountNameList}
                            </datalist>
                        </div>
                        <div className="accountInformation__inputField">
                            <Select
                                id="sector"
                                onChange={event => this.onChangeSelect(event)}
                                defaultValue={this.props.accountInformationDetails.sector}
                                required
                                labelText="Sector"
                                invalid={this.state.validate.sector}
                                onBlur={this.onBlur}
                                invalidText="A value is required" >
                                <SelectItem text="Choose an option" value="" />
                                {_.map(this.state.sectorOptions, option => {
                                    return (
                                        <SelectItem
                                            text={option.name}
                                            value={option.value}
                                            key={option.value}
                                        />
                                    )
                                })}
                            </Select>
                        </div>
                    </div>
                    <div className="accountInformation__inputRow">
                        <div className="accountInformation__inputField">
                            <Select
                                id="industry"
                                required
                                onChange={event => this.onChangeSelect(event)}
                                defaultValue={this.props.accountInformationDetails.industry}
                                labelText="Industry"
                                invalid={this.state.validate.industry}
                                onBlur={this.onBlur}
                                invalidText="A value is required" >
                                <SelectItem text="Choose an option" value="" />
                                {_.map(this.state.industryOptions, option => {
                                    return (
                                        <SelectItem
                                            text={option.name}
                                            value={option.value}
                                            key={option.value}
                                        />
                                    )
                                })}
                            </Select>
                        </div>
                        <div className="accountInformation__inputField">
                            <Select
                                id="growthPlatform"
                                required
                                onChange={event => this.onChangeSelect(event)}
                                defaultValue={this.props.accountInformationDetails.growthPlatform}
                                labelText="Growth Platform"
                                invalid={this.state.validate.growthPlatform}
                                onBlur={this.onBlur}
                                invalidText="A value is required" >
                                <SelectItem text="Choose an option" value="" />
                                {_.map(this.state.growthPlatformOptions, option => {
                                    return (
                                        <SelectItem
                                            text={option.name}
                                            value={option.value}
                                            key={option.value}
                                        />
                                    )
                                })}
                            </Select>
                        </div>
                    </div>
                    <div className="accountInformation__inputRow">
                        <div className="accountInformation__inputField">
                            <Select
                                id="serviceLine"
                                required
                                onChange={event => this.onChangeSelect(event)}
                                defaultValue={this.props.accountInformationDetails.serviceLine}
                                labelText="Service Line"
                                invalid={this.state.validate.serviceLine}
                                onBlur={this.onBlur}
                                invalidText="A value is required" >
                                <SelectItem text="Choose an option" value="" />
                                {_.map(this.state.serviceLineOpitons, option => {
                                    return (
                                        <SelectItem
                                            text={option.name}
                                            value={option.value}
                                            key={option.value}
                                        />
                                    )
                                })}
                            </Select>
                        </div>
                        <div className="accountInformation__inputField">
                            <Select
                                id="practice"
                                required
                                onChange={event => this.onChangeSelect(event)}
                                defaultValue={this.props.accountInformationDetails.practice}
                                labelText="Practice"
                                invalid={this.state.validate.practice}
                                onBlur={this.onBlur}
                                invalidText="A value is required" >
                                <SelectItem text="Choose an option" value="" />
                                {_.map(this.state.practiceOptions, option => {
                                    return (
                                        <SelectItem
                                            text={option.name}
                                            value={option.value}
                                            key={option.value}
                                        />
                                    )
                                })}
                            </Select>
                        </div>
                    </div>
                    <div className="accountInformation__inputRow">
                        <div className="accountInformation__inputField">
                            <TextInput
                                id='deliveredBy'
                                invalid={this.state.validate.deliveredBy}
                                invalidText="A value is required"
                                labelText="Delivered By"
                                placeholder="Placeholder text"
                                name="deliveredBy"
                                required
                                defaultValue={this.props.accountInformationDetails.deliveredBy}
                                onChange={event => this.onTextChange(event)}
                                onBlur={this.onBlur}
                                onKeyPress={this.onKeyPress}
                            />
                        </div>
                        <div className="accountInformation__inputField">
                            <Select
                                id="iot"
                                required
                                onChange={event => this.onChangeSelect(event)}
                                defaultValue={this.props.accountInformationDetails.iot}
                                labelText="IOT"
                                invalid={this.state.validate.iot}
                                onBlur={this.onBlur}
                                invalidText="A value is required" >
                                <SelectItem text="Choose an option" value="" />
                                {_.map(this.state.iotOptions, option => {
                                    return (
                                        <SelectItem
                                            text={option.name}
                                            value={option.value}
                                            key={option.value}
                                        />
                                    )
                                })}
                            </Select>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}

const mapStateToProps = state => ({
    accountInformationDetails: state.AccountDetails,
    accountInformation: state.AccountInformationData
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            accountInformationDetails,
            accountInformationData
        },
        dispatch,
    );

export default connect(mapStateToProps, mapDispatchToProps)(AccountInformation);

