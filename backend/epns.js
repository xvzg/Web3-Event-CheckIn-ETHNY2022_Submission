  // EPNS Implementation
    // the private key of the address which you used to create a channel
    const  CHANNEL_PK = '0x0000000000000000000000000000000000000000000000000000000000000fff';

    // Initialise the SDK
    const  epnsSdk = new EpnsSDK(CHANNEL_PK);

    // the private key of the address which you used to create a channel
    const  CHANNEL_PK = '0x0000000000000000000000000000000000000000000000000000000000000fff'; 

    // Initialise the SDK
    const  epnsSdk = new EpnsSDK(CHANNEL_PK);
    
    export function send_notifications()  {
        const tx = await sdk.sendNotification(
        recipientAddress,
        pushNotificationtitle,
        pushNotificationMessage,
        notificationTitle,
        notificationMessage,
        3, //this is the notificationType
        cta, // a url for users to be redirected to
        image ,// an image url, or an empty string
        null, //this can be left as null
      );
    }
