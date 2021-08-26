module.exports = (client) => {
    client.on("guildMemberAdd", (joinMember) => {
        let welcomeRole = joinMember.guild.roles.cache.find(role => role.name === 'Customers');
        joinMember.roles.add(welcomeRole);
        joinMember.guild.channels.cache.get('809166113669382152').send(`Welcome <@${joinMember.user.id}> to Tescoland!`);
    });
    client.on("guildMemberRemove", (leaveMember) => {
        leaveMember.guild.channels.cache.get('809166113669382153').send(`<@${leaveMember.id}> just left the server`);
    });
  };