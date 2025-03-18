PlayerEvents.loggedIn(event => {
    if (!event.player.stages.has('new_join')) {}
    // Define the player as well as the username to the event
    const { player, server, player: { username } } = event
    //Multiple colors version
    let message = Text.of("Hello, ").green().bold()
      .append(Text.of(`${username} `).yellow())
      .append(Text.of(`and welcome to FLoabModpack!`).green());
    player.tell(message);
  
    //Simple version
    //player.tell(`Hello, ${username} and welcome to minecraft!`)
  
    //You can also tell the whole server the message if you wanted to
    //Multiple colors version
    let serverannouncement = Text.of(`${username} `).green().bold()
      //we .append to add another text.of to change the color
      .append(Text.of(`just joined the world!`).green());
    server.tell(serverannouncement);
  
  
  })
  
  // Event listener for player leaving
  PlayerEvents.loggedOut(event => {
    // Define the player as well as the username to the event
    const { player, server, player: { username } } = event
    //Tells server the player left
    let serverannouncement = Text.of(`${username} `).green().bold()
      //we .append to add another text.of to change the color
      .append(Text.of(`has left the world!`).green());
    server.tell(serverannouncement);
  })