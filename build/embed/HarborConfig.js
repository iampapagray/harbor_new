////////////////////////////////
// Configuration passed to Unity
///////////////////////////////

function configureUnity() {

    console.log("configure unity");

    var loyaltyConfig = {
        Name: "Loyalty",
        Description: "Description for Loyalty",
        URL: "http://www.google.com",
        ButtonLabel: "Play Now",
        IsButtonActive : true
    };

    var wthConfig = {
        Name: "Whay The Hen!",
        Description: "Description for Whay The Hen!",
        URL: "http://www.google.com",
        ButtonLabel: "Play Now",
        IsButtonActive: false
    };

    var leenasplaceConfig = {
        Name: "Leena's Place",
        Description: "Description for Leena's Place",
        URL: "http://www.google.com",
        ButtonLabel: "Play Now",
        IsButtonActive: true
    };


    var deckConfig = {
        Name: "Deck",
        Description: "Description for Deck",
        URL: "http://www.google.com",
        ButtonLabel: "Open",
        IsButtonActive: true
    };

    var stakingConfig = {
        Name: "Staking",
        Description: "Description for Staking",
        URL: "http://www.google.com",
        ButtonLabel: "Open",
        IsButtonActive: true
    };

    var governanceConfig = {
        Name: "Governance",
        Description: "Description for Governance",
        URL: "http://www.google.com",
        ButtonLabel: "Open",
        IsButtonActive: true
    };

    var marketplaceConfig = {
        Name: "Marketplace",
        Description: "Description for Marketplace",
        URL: "http://www.google.com",
        ButtonLabel: "Open",
        IsButtonActive: true
    };

    var faqConfig = {
        Name: "FAQ",
        Description: "Description for FAQ",
        URL: "http://www.google.com",
        ButtonLabel: "Open",
        IsButtonActive: true
    };



    config = {
        buildings: {
            loyalty: loyaltyConfig,
            wth: wthConfig,
            leenasplace: leenasplaceConfig,
            deck: deckConfig,
            staking: stakingConfig,
            governance: governanceConfig,
            marketplace: marketplaceConfig,
            faq: faqConfig
        }
    };

    myGameInstance.SendMessage('ConfigurationManager', 'Set', JSON.stringify(config));
}
