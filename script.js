//Below is a list of inspirational quotes stored in array named quotes

const quotes = ['"Mistakes  are a fact of life. It is the response to the errors that counts." -- Nikki Giovanni', 
'"If you get tired, Learn to Rest Not to Quit!" --Bansky', 
'"You do not have to be great to start, but you have to start to be great." -- Zig Ziglar', 
'"If people are doubting how far you can go, go so far that you can not hear them anymore" --Michele Ruiz', 
'"Challenges are what make life interesting and overcoming them is what makes life meaningful" --Joshua J. Marine', 
'"Wherever you go, no matter what the weather, always bring your own sunshine." --Anthony J. D Angelo', 
'"In order to love who you are, you cannot hate the experiences that shaped you" --Andrea Dykstra',
'"Out of the mountain of despair, a stone of hope" -- Martin Luther King Jr.',
'"Happiness is a direction, not a place" --Sydney J. Harris',
'"Success is not final; Failure is not fatal: It is the courage to continue that counts." --Winston S. Churchill',
'"The purpose of our journey is to restore ourselves to wholeness." --Debbie Ford',
'"Good, better, best. Never let it rest. Until your good is better and your better is best." --St. Jerome',
'"Ships in harbour are safe, but that is not what ships are built for." --John Shedd',
'"You cannot reach for anything new if your hands are still full of yesterday junk" --Louise Smith',
'"Difficult and meaningful will lways bring more satisfaction than easy and meaningless" --MAxine Lagace',
'"A certain darkness is needed to see the stars." --Osho',
'"Appreciate the struggles as opportunities to wake up." --Jeff Bridges',
'"Effective performance is preceded by painstaking preparation." --Brian Tracy'
];

const randomMsg = (arr) => {
    console.log(arr[Math.floor((Math.random()*arr.length))]);
};
randomMsg(quotes);