////////////////////////////////
// Configuration passed to Unity
///////////////////////////////

function configureUnity() {

    console.log("configure unity");

    var loyaltyConfig = {
        Name: "Loyalty",
        Description: "",
        URL: "/loyalty",
        ButtonLabel: "About",
        IsButtonActive : true,
		VideoURL: "https://www.youtube.com/watch?v=EyfVjLMyf4U"
    };

    var wthConfig = {
        Name: "What The Hen!",
        Description: "",
        URL: "/",
        ButtonLabel: "Coming Soon",
        IsButtonActive: false
    };

    var leenasplaceConfig = {
        Name: "Leena's Place",
        Description: "",
        URL: "/leena",
        ButtonLabel: "About",
        IsButtonActive: true,
		VideoURL: "https://www.youtube.com/watch?v=QtGt8w3dcfE"
    };


    var deckConfig = {
        Name: "Roadmap",
        Description: "Welcome to Harbor! Hop onboard a ship to a magical metaverse of games, characters, and stories.\n\n Explore our plan to build an ecosystem of free-to-play games for all ages and styles. Meet the team that has been building games for over three decades for companies like Disney, Meta, and Pixel Federation.",
        URL: "/roadmap",
        ButtonLabel: "View Roadmap",
        IsButtonActive: true
    };

    var stakingConfig = {
        Name: "Staking",
        Description: "Stake your NFTs and HARBOR token to earn rewards, tokens, rare items, and level up your characters.",
        URL: "/",
        ButtonLabel: "Coming Soon",
        IsButtonActive: false
    };

    var teamConfig = {
        Name: "Governance",
        Description: "The governance of Harbor is done via our HARBOR token. Users can stake HARBOR to earn rewards, upgrade their NFTs, and make decisions to guide the community.",
        URL: "/",
        ButtonLabel: "Coming Soon",
        IsButtonActive: false
    };

    var marketConfig = {
        Name: "Market",
        Description: "The Harbor Marketplace is a decentralized marketplace to buy, sell, and trade your items with other players. Power up your progress and share your treasures with the community!",
        URL: "/",
        ButtonLabel: "Coming Soon",
        IsButtonActive: false
    };

    var AboutConfig = {
        Name: "About",
        Description: "Harbor Games is a passionate team of mobile gaming veterans focused on creating the next generation of GameFi that scales to millions of players. Over the last 15 years our games have reached over 200M players and generated over $150M+ of revenue. Explore the Harbor to learn more about our team, platform, and upcoming titles!",
        URL: "/",
        ButtonLabel: "Coming Soon",
        IsButtonActive: false
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
        },
		use_web_buttons : true,
		intro_delay : 10
    };

    myGameInstance.SendMessage('ConfigurationManager', 'Set', JSON.stringify(config));
}
