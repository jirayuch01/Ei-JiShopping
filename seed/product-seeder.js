var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/ei-jishopping');

var products = [
    new Product({
        imagePath: 'http://media.moddb.com/images/articles/1/233/232591/15050686003a28e6e6df64dad07606fb.jpg',
        title: 'Gothic',
        description: 'The new astonishing version Chronicles of Myrtana is finally out. The GothicTW Team wishes you a very nice experience with the new 2.1 version!',
        price: 149,
    }),
    new Product({
        imagePath: 'http://cache.gawkerassets.com/assets/images/9/2011/07/contrahead.jpg',
        title: 'The Contra',
        description: 'The Contra (Japanese: 魂斗羅 "Kontora") is a video game series produced by Konami composed primarily of run and gun-style shoot-em-up games. The first game in the series.',
        price: 163,
    }),
    new Product({
        imagePath: 'http://orig06.deviantart.net/3a57/f/2012/029/3/9/double_dragon___title_screen_by_rukasusan-d4nzjd1.jpg',
        title: 'Double Dragon',
        description: 'Double Dragon is still my favourite beat ´em up. Technos Japan made a great effort improving what they did before with Renegade. The graphics, sounds, music',
        price: 169,
    }),
    new Product({
        imagePath: 'http://www.gamerheadlines.com/wp-content/uploads/2015/08/2015-08-05_00001.jpg',
        title: 'Saint Killjoy',
        description: 'My wonderful friends at WayForward allowed me the opportunity to take a sneak peek and play the demo of Shantae Half Genie Hero.',
        price: 124,
    }),
    new Product({
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrSh3UdrMD2O7Lf2POaC9-k18ybTeo-rcHwJ4zSXuW8YAfGWZW',
        title: 'Tales of Vesperia',
        description: 'The mouthpiece of the gaming generation, The Escapist aims to capture and celebrate the contemporary video gaming lifestyle and the diverse global video game culture by way of in-depth features.',
        price: 386,
    }),
    new Product({
        imagePath: 'http://comicsalliance.com/files/2014/06/batman-nes-titlescreen.jpg',
        title: 'Batman',
        description: 'ComicsAlliance takes you on a level-by-level trip through Sunsoft\'s bizarrely entertaining Batman Nintendo game, inspired by the 1989 Tim Burton movie.',
        price: 279,
    }),
    new Product({
        imagePath: 'http://www.game-art-hq.com/wp-content/uploads/2012/11/Star-Fox-Startscreen.jpg',
        title: 'StarFox',
        description: 'StarFox was one of those Super Nintendo games which can still be a ton of fun. While the graphics itself did not age well, they are forgotten after 5 minutes flying a StarWing.',
        price: 299,
    }),
    new Product({
        imagePath: 'https://gamefaqs.akamaized.net/screens/9/4/e/gfs_621249_1_1.jpg',
        title: 'Maldita Castilla',
        description: 'A young witch\'s sorrow has been corrupted by a malicious demon who uses her tears to open a gateway to hell. Now, the kingdom is threatened as evil floods the countryside.',
        price: 163,
    }),
    new Product({
        imagePath: 'http://retrowaretv.com/wp-content/uploads/2016/09/CBTITLE.png',
        title: 'Crash Bandicoot',
        description: 'So far so good with this PSXjin emulator. After the title screen is completed, you have to wait a little while for the prologue cutscene to start.',
        price: 169,
    }),
    new Product({
        imagePath: 'https://cdn.vox-cdn.com/thumbor/nmz2gh5YYX1ADJ-c8PnFH-_igtQ=/800x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/4109134/Tacoma_2015-06-22_12-45-05-35.0.jpg',
        title: 'Tacoma',
        description: 'Like Gone Home, Tacoma is a story about people," Fullbright co-founder Steve Gaynor told Polygon last year. "It\'s about these six people who have been thrown into this situation and about how crisis can pull them together or push them apart. How much details you find out about who they are and what they went through is really up to you as the player.',
        price: 149,
    }),
    new Product({
        imagePath: 'https://cdn.vox-cdn.com/thumbor/Qj7hGXVc5_IOtpBvTA6VQxWZ1rs=/0x0:1024x576/920x613/filters:focal(431x207:593x369)/cdn.vox-cdn.com/uploads/chorus_image/image/55614037/ark_at_e3.0.jpeg',
        title: 'Ark: Survival Evolved',
        description: 'launched via Steam’s Early Access in June 2015 and quickly became one of PC gaming\'s hottest titles. Now, as the team at Studio Wildcard prepares for a full commercial release, Ark\'s price has  jumped to $59.99 from $29.99. Polygon reached out to the developers to ask why.',
        price: 237,
    }),
    new Product({
        imagePath: 'https://cdn.vox-cdn.com/thumbor/ZzzIxFnq8Bocw2wNSKs-bqN6eHc=/283x0:1903x1080/920x613/filters:focal(283x0:1903x1080)/cdn.vox-cdn.com/uploads/chorus_image/image/49363237/LawBreakers_GDC_BlindFire.0.0.jpg',
        title: 'LawBreakers',
        description: 'Polygon went hands-on with LawBreakers in a preview event a year ago. Since then, Boss Key Productions has tuned the game with a private alpha release and two private betas. We participated in one of the betas back in March. LawBreakers is a class-based team shooter from the new studio started by Cliff Bleszinski, the creator of Gears of War. LawBreakers will cost $29.99 — "None of this $60 multiplayer-only bullshit," Bleszinski commented, though multiplayer on PlayStation 4 will require a PlayStation Plus subscription.',
        price: 106,
    }),
    new Product({
        imagePath: 'https://cdn.vox-cdn.com/thumbor/4cKGk7_3vVj5dZ5hcMwUgVftakc=/600x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8271497/DBabs_FINAL.jpg',
        title: 'Agents of Mayhem',
        description: 'meant to be a clean break from the Saints Row series, but it also builds on Volition\'s expertise: an over-the-top, open-world third-person shooter characters who feel superhuman. Also, it\’s full of goofy jokes. Read our feature on the Agents of Mayhem and why it may be 2017\'s sleeper hit.',
        price: 279,
    }),
    new Product({
        imagePath: 'https://cdn.vox-cdn.com/thumbor/QCrnIYnZCLqtgWY5nmithzy6X7E=/0x600/cdn.vox-cdn.com/uploads/chorus_asset/file/7189453/nidhogg-2-chandy_2560.0.jpg',
        title: 'Nidhogg 2',
        description: 'The original Nidhogg was fairly minimalistic, making two fencers try to reach opposite sides of the map. That’s not the case with Nidhogg 2. The sequel has the same goals, and also features like stomping your opponent to death, kicking weapons from their hands and incredibly colorful, surreal backdrops. Here\'s 20 minutes of video, featuring creators Mark Essen and Kristy Norindr from Messhof.',
        price: 399,
    }),
    new Product({
        imagePath: 'https://cdn.vox-cdn.com/thumbor/oZw8CpCBaJivJqggdn-c2Zjde_Y=/800x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8916075/Screen_Shot_2016-06-13_at_3.26.06_PM.0.0.0.jpeg',
        title: 'Observer',
        description: '"What would you do if your fears got hacked and used against you?" Rafal Basaj, with developer Bloober Team, describes Observer as something horrific that takes place in a Eastern European cyberpunk universe "We are focusing on deep narrative and environmental storytelling," he said. "You play as a detective and observer and use your skills to scan the environment and hack player\'s fears."Here is Observer\'s launch trailer and a bit of gameplay.',
        price: 598,
    }),
    new Product({
        imagePath: 'https://cdn.vox-cdn.com/thumbor/bJDCLJgDO8wmT7iYdJLEGxPSW7Q=/800x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8916081/sonic_mania_desert_screenshot_1920.0.0.jpeg',
        title: 'Sonic Mania',
        description: 'Sega’s throwback to its mascot\'s 2D platforming roots, is exciting for longtime Sonic fans, mainly because of its developers\' pedgree. Everyone involved in Sonic Mania has deep roots in the Sonic fan game community. That includes Christian "Taxman" Whitehead, known for his proprietary Retro Engine and phenomenal Sonic 1, 2 and CD remakes, and Simon "Stealth" Thomley, a frequent collaborator with Whitehead who is known for the fan game Sonic Megamix. Here\'s our developer interview from E3 2017.',
        price: 689,
    }),
    new Product({
        imagePath: 'https://cdn.vox-cdn.com/thumbor/Y9RIIsfw9S5RLwPKX_m1QDTiW5I=/0x0:1920x1080/920x613/filters:focal(291x271:597x577)/cdn.vox-cdn.com/uploads/chorus_image/image/53673749/re_revelations.0.jpg',
        title: 'Resident Evil: Revelations',
        description: 'stars series veterans Jill Valentine and Chris Redfield. Set between the events of Resident Evil 4 and Resident Evil 5, Revelations sends players to an abandoned cruise ship, the Queen Zenobia, and the city of Terragrigia where they uncover the truth about the T-Abyss virus and attempt to stop a terrorist group from infecting the Earth\'s oceans.',
        price: 599,
    }),
    new Product({
        imagePath: 'https://cdn.vox-cdn.com/thumbor/K6ha29q8x9wTTyCQRCUGT3T-l2o=/800x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8916171/LiS_BTS_SC2.0.jpeg',
        title: 'Life Is Strange: Before the Storm',
        description: 'The debut trailer for Life is Strange: Before the Storm was shown at Microsoft’s E3 2017 conference. The game will focus on two characters from 2015\'s Life is Strange: Chloe Price and her best friend, Rachel Amber.',
        price: 299,
    }),
    new Product({
        imagePath: 'https://cdn.vox-cdn.com/thumbor/mM2KA26I64Bxuq2jO0jsLopRMhQ=/800x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/9037055/pict09.0.jpg',
        title: 'Yakuza Kiwami ',
        description: 'This is a full remake of the first Yakuza game that came out in 2006 on the PlayStation 2. The story revolves around Kazuma Kiryu, a rising member of the Yakuza crime organization who becomes a fall-man for the sudden murder of a crime boss. After 10 years in prison he\'s finally released only to find out the world has completely changed. Yakuza Kiwami (kiwami means "extreme") will feature an expanded story, a battle system similar to Yakuza 0 and have re-recorded audio.',
        price: 699,
    }),
    new Product({
        imagePath: 'https://cdn.vox-cdn.com/thumbor/L3NyNSKZEz7bCK7ZOCmQ57ScDDI=/800x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8916143/mario_rabbids_kingdom_battle_peach_mario_1920.1497298412.0.jpg',
        title: 'Mario + Rabbids: Kingdom Battle',
        description: 'it\'s like XCOM, but with French Minions, a Roomba and Mario. The game involves a party comprising characters from the Rabbids and Mario canon, adventuring through a Mario-style world. It’s got two phases: exploration and turn-based RPG battles.',
        price: 349,
    }),
    new Product({
        imagePath: 'https://cdn.vox-cdn.com/thumbor/zPywNBvpdYrWfHZGawO5btYekIQ=/0x0:1920x1080/920x613/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/55245919/qwe.0.jpg',
        title: 'Absolver',
        description: 'a hard game to wrap your head around, and thankfully this video goes a long way to explaining its allure. It’s a hand-to-hand fighting game where players collect moves over time, and then string them together to create personalized fighting styles. The development team itself has a few members that are very deeply into mixed martial arts, and the animations show it. Absolver even takes player stances into account, and every move in the game considers which direction the player starts off facing in.',
        price: 368,
    }),
    new Product({
        imagePath: 'https://cdn.vox-cdn.com/thumbor/yDTWocwX2gDwVYc01LIjjRoceq8=/600x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8664143/M18_LS_Devin_Colt_ShakeNBake_WM.png',
        title: 'Madden NFL 18',
        description: 'The newest feature of the annual American football game is a story mode called "Longshot." The protagonist, Devin Wade, a former college star at Texas, has been out of football for several years. Wade will struggle to find a way back into pro football and fulfill his dreams. "Longshot" marks the first appearance for colleges in an EA Sports video game since the label canceled the NCAA Football series in 2013 and settled a lawsuit brought by former players.',
        price: 599,
    }),
    new Product({
        imagePath: 'https://cdn.vox-cdn.com/thumbor/32-VkhY9DfP9RxXDfa_Z3KPnU6E=/600x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/8904529/uncharted_the_lost_legacy_western_ghats_02_3840.jpg',
        title: 'Uncharted: The Lost Legacy',
        description: 'a lesser-than experience starring side characters that people don’t really care about, well, I would be jumping the gun if I laid those fears to rest completely. I’ve only played the game for about 45 minutes. But it doesn’t seem like that will be an issue. Instead, The Lost Legacy feels exactly like a proper Uncharted game — in ways both good and bad.',
        price: 386,
    }),

    new Product({
        imagePath: 'https://boygeniusreport.files.wordpress.com/2017/05/destiny-21.jpg?quality=98&strip=all&strip=all',
        title: 'Destiny 2',
        description: 'I was down on Destiny when it came out in 2014 (you can go back and read my review). It was too linear, the story didn’t make any sense and there simply wasn’t enough content to justify all of the grinding. But as Bungie released expansions, the game improved. In fact, by the time Rise of Iron came out late last year, my opinion of the game changed significantly. It was too late for me to go all in on Destiny at that point, but at the very least, I began to get my hopes up for the sequel. Now Destiny 2 is right around the corner, and based on everything we’ve seen, it looks to improve upon everything Destiny did well and fix the things that were broken.',
        price: 299,
    }),
    new Product({
        imagePath: 'https://boygeniusreport.files.wordpress.com/2017/09/marvel-vs-capcom-infinite.jpg?quality=98&strip=all&strip=all',
        title: 'Marvel vs. Capcom: Infinite',
        description: 'Six years after Marvel vs. Capcom 3 revived a beloved franchise, Capcom is back with another sequel for the latest generation of consoles. Marvel vs. Capcom: Infinite will be the first game in the series to feature two-on-two fights instead of three-on-three fights, and the assists that defined the series have been replaced with tag-based combos. Infinite will also have a greater focus on story that previous games.',
        price: 259,
    }),
    new Product({
        imagePath: 'https://boygeniusreport.files.wordpress.com/2017/09/danganronpa-v3.jpg?quality=98&strip=all&strip=all',
        title: 'Danganronpa V3: Killing Harmony',
        description: 'If you’ve never played Danganronpa, you’re missing out on one of the strangest, most compelling murder mysteries in video game history. In this series, a group of students with ultimate talents are locked in a school together. The only way to escape is to murder a fellow classmate and get away with it. Danganronpa V3: Killing Harmony is the third mainline game in the series, but from what I understand, it doesn’t appear to directly follow Danganronpa and Danganronpa 2. That said, you should still play those two games before you dive into V3, just to make sure you understand the premise and the overall story.',
        price: 239,
    }),
    new Product({
        imagePath: 'https://boygeniusreport.files.wordpress.com/2017/08/cuphead-boss.jpg?quality=98&strip=all&strip=all',
        title: 'Cuphead',
        description: 'After countless delays, the hand-drawn shoot-em-up Cuphead is finally coming to Xbox One and PC this month. I had a chance to go hands on with the game for the first time this summer, and it’s as difficult (and as beautiful) as the screenshots and trailers would suggest. If you’re looking for a great couch co-op game that will make you want to break your controller in half, look no further than Cuphead.',
        price: 335,
    })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}