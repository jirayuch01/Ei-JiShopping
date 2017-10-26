var Product = require('../models/product');

var mongoose = require('mongoose');
mongoose.connect('localhost:27017/ei-jishopping');

var products = [
    new Product({
        imagePath: 'http://media.moddb.com/images/articles/1/233/232591/15050686003a28e6e6df64dad07606fb.jpg',
        title: 'Gothic (video game)',
        description: 'The new astonishing version Chronicles of Myrtana is finally out. The GothicTW Team wishes you a very nice experience with the new 2.1 version!',
        price: 250,
    }),
    new Product({
        imagePath: 'http://cache.gawkerassets.com/assets/images/9/2011/07/contrahead.jpg',
        title: 'Title Screens',
        description: 'The Contra (Japanese: 魂斗羅 "Kontora") is a video game series produced by Konami composed primarily of run and gun-style shoot-em-up games. The first game in the series.',
        price: 310,
    }),
    new Product({
        imagePath: 'http://orig06.deviantart.net/3a57/f/2012/029/3/9/double_dragon___title_screen_by_rukasusan-d4nzjd1.jpg',
        title: 'Double Dragon',
        description: 'Double Dragon is still my favourite beat ´em up. Technos Japan made a great effort improving what they did before with Renegade. The graphics, sounds, music',
        price: 285,
    }),
    new Product({
        imagePath: 'http://www.gamerheadlines.com/wp-content/uploads/2015/08/2015-08-05_00001.jpg',
        title: 'Saint Killjoy',
        description: 'My wonderful friends at WayForward allowed me the opportunity to take a sneak peek and play the demo of Shantae Half Genie Hero.',
        price: 419,
    }),
    new Product({
        imagePath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrSh3UdrMD2O7Lf2POaC9-k18ybTeo-rcHwJ4zSXuW8YAfGWZW',
        title: 'Tales of Vesperia',
        description: 'The mouthpiece of the gaming generation, The Escapist aims to capture and celebrate the contemporary video gaming lifestyle and the diverse global video game culture by way of in-depth features.',
        price: 482,
    }),
    new Product({
        imagePath: 'http://comicsalliance.com/files/2014/06/batman-nes-titlescreen.jpg',
        title: 'Batman',
        description: 'ComicsAlliance takes you on a level-by-level trip through Sunsoft\'s bizarrely entertaining Batman Nintendo game, inspired by the 1989 Tim Burton movie.',
        price: 119,
    }),
    new Product({
        imagePath: 'http://www.game-art-hq.com/wp-content/uploads/2012/11/Star-Fox-Startscreen.jpg',
        title: 'StarFox',
        description: 'StarFox was one of those Super Nintendo games which can still be a ton of fun. While the graphics itself did not age well, they are forgotten after 5 minutes flying a StarWing.',
        price: 310,
    }),
    new Product({
        imagePath: 'https://gamefaqs.akamaized.net/screens/9/4/e/gfs_621249_1_1.jpg',
        title: 'Maldita Castilla',
        description: 'A young witch\'s sorrow has been corrupted by a malicious demon who uses her tears to open a gateway to hell. Now, the kingdom is threatened as evil floods the countryside.',
        price: 454,
    }),
    new Product({
        imagePath: 'http://retrowaretv.com/wp-content/uploads/2016/09/CBTITLE.png',
        title: 'Crash Bandicoot',
        description: 'So far so good with this PSXjin emulator. After the title screen is completed, you have to wait a little while for the prologue cutscene to start.',
        price: 145,
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