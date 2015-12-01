 function inputemail() {
                         navigator.notification.prompt(
                            "Enter email address: ", // the message
                            function( index ) {
                                switch ( index ) {
                                    case 1:
                                        // The first button was pressed
                                        break;
                                    case 2:
                                        // The second button was pressed
                                        break;
                                    case 3:
                                        // The second button was pressed
                                        break;

                                }
                            },
                            "Receive Notifications",     // a title
                            [ "Once", "Always", "Cancel" ], // text of the buttons
                            tresultEmail          // the default text
                        );
     return resultEmail;
 };