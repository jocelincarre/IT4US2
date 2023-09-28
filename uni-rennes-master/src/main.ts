/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

// Waiting for the API to be ready
WA.onInit().then(() => {
    console.log('Scripting API ready');
    console.log('Player tags: ',WA.player.tags)

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');

        if(!WA.player.state.tutorialDone){
            WA.ui.modal.openModal({
                title: "Tutorial",
                src: 'https://workadventure.github.io/scripting-api-extra/tutorialv1.html',
                allow: "fullscreen; clipboard-read; clipboard-write",
                allowApi: true,
                position: "right",
            });
        }
    }).catch(e => console.error(e));
}).catch(e => console.error(e));

export {};
