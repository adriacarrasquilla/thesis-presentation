import {Layout, Txt, makeScene2D} from '@motion-canvas/2d';
import { range, makeRef } from '@motion-canvas/core/lib/utils';

import { waitUntil } from '@motion-canvas/core';

const fullSongLyrics = [
    "We're no strangers to love",
    "You know the rules and so do I (do I)",
    "A full commitment's what I'm thinking of",
    "You wouldn't get this from any other guy",

    "I just wanna tell you how I'm feeling",
    "Gotta make you understand",

    "Never gonna give you up",
    "Never gonna let you down",
    "Never gonna run around and desert you",
    "Never gonna make you cry",
    "Never gonna say goodbye",
    "Never gonna tell a lie and hurt you",

    "We've known each other for so long",
    "Your heart's been aching, but you're too shy to say it (say it)",
    "Inside, we both know what's been going on (going on)",
    "We know the game and we're gonna play it"
];



export default makeScene2D(function* (view) {
    const labels: Txt[] = [];
    yield view.add(
        <Layout gap={10} direction="column" alignItems="start" layout>
        {range(16).map(i => (
        <Txt
            ref={makeRef(labels, i)}
            // fontSize={20}
            // lineHeight={120}
            // alignItems={'center'} // doesn't work, probably need some flexbox
            y={0 + 30 * i}
            text={fullSongLyrics[i]}
        />
        ))},
        </Layout>
    );
    yield* waitUntil('go');

});
