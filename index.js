const Discord = require("discord.js");
const Client = new Discord.Client();
const Default = require("./config.json");

Client.login(Default.token);

Client.on("guildMemberAdd", ()=>{
    let myGuild = Client.guilds.cache.get("685488704160137246");
    let memberCount = myGuild.members.cache.filter(member => !member.user.bot).size;
    if(memberCount <= 100){
        var Role = member.guild.roles.find("id","687814086427148446");
        member.addRole(Role);
    }else if(memberCount > 100 && memberCount <=250){
        var Role = member.guild.roles.find("id","735979973495488532");
        member.addRole(Role);
    }else if(memberCount > 250 && memberCount <=1000){
        var Role = member.guild.roles.find("id","735980073244557322");
        member.addRole(Role);
    }else{
        var Role = member.guild.roles.find("id","735980130513453067");
        member.addRole(Role);
    };
});