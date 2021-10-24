console.log('***** Music Collection *****')

// REQUIRED FEATURES

//#1 - Create a variable called collection that starts as an empty array.

    //CODE
    let collection = [];

    //MADE A COMMIT!


//#2 - Add a function named addToCollection. This function should:
    // -Take in the album's title, artist, yearPublished as input parameters
    // -Create a new object having the above properties
    // -Add the new object to the end of the collection array
    // -Return the newly created object

    //CODE
    function addToCollection(title, artist, yearPublished){
      let object = {title, artist, yearPublished};
      collection.push(object);
      return object;
    }

    //COMMENTS
    //I was a little stumped thinking I couldn't use the input parameter name for the object's key name, but it worked!
    //I also console logged the updated collection array to make sure the new object was added to the array.

    //MADE A COMMIT!


//#3 - Test the addToCollection function:
    // -Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
    // -Console.log each album as added using the returned value.
    // -After all are added, console.log the collection array.

    console.log(addToCollection('American Idiot', 'Green Day', 2004));
    console.log(addToCollection('Unplugged', 'Eric Clapton', 1992));
    console.log(addToCollection('Watch the Throne', 'Jay-Z', 2011));
    console.log(addToCollection('Magna Carta Holy Grail', 'Jay-Z', 2013));
    console.log(addToCollection('Extra Texture (Read All About It)', 'George Harrison', 1975));
    console.log(addToCollection('X&Y', 'Coldplay', 2005));
    console.log(collection);

    //MADE A COMMIT!


//#4 - Add a function named showCollection. This function should:
    // -Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
    // -Console.log the number of items in the array.
    // -Loop over the array and console.log each album's information formatted like: TITLE by ARTIST, published in YEAR.

    //CODE
    // function showCollection(array){
    //   console.log(array.length);
    //   for(let i = 0; i < array.length; i++){
    //     console.log(`${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}`);
    //   }
    // }

    function showCollection(array){
      console.log(array.length);
      for(let item of array){
        console.log(`${item.title} by ${item.artist}, published in ${item.yearPublished}`);
      }
    }

    //COMMENTS
    //Attempt #1

    //MADE A COMMIT!


//#5 - Test the showCollection function.

    console.log(showCollection(collection));

    //COMMENTS
    //Checked to make sure it ran on the console

    //MADE A COMMIT!


//#6 - Add a function named findByArtist. This function should:
    // -Take in artist (a string) parameter
    // -Create an array to hold any results, empty to start
    // -Loop through the collection and add any objects with a matching artist to the array.
    // -Return the array with the matching results. If no results are found, return an empty array.

    //CODE
    // function findByArtist(artist){
    //   let results = [];
    //   for(let i = 0; i < collection.length; i++){
    //     if(collection[i].artist === artist){
    //       results.push(artist);
    //     }
    //   }
    //   return results;
    // }

    function findByArtist(artist){
      let results = [];
      for(let album of collection){
        if(album.artist === artist){
          results.push(artist);
        }
      }
      return results;
    }

    //MADE A COMMIT!


//#7 - Test the findByArtist function.
//    Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection.
//    Check that for artists with multiple matches, all are found.

    //CODE
    console.log(findByArtist('Eric Clapton'));
    console.log(findByArtist('Weezer'));
    console.log(findByArtist('Jay-Z'));

    //COMMENTS
    //the console log weezer didn't work initially because I didn't camelcase 'by' in the function name.
    //lesson: gotta pay more attention. maybe drink more coffee too.

    //MADE A COMMIT!

//STRETCH GOALS!!!!!

//#8 - Create a function called search. This function should:
//    -Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
//    -{ artist: 'Ray Charles', year: 1957 }


//    -The returned output from search should meet these requirements:
//      -Return a new array of all items in the collection matching all of the search criteria.
//      -If no results are found, return an empty array.
//      -If there is no search object or an empty search object provided as input, then return all albums in the collection.


    //CODE
    // function search(object){
    //     let match = [];
    //     if(object === undefined || Object.keys(object).length === 0 ){
    //         return collection;
    //     } else {
    //     for(let i = 0; i < collection.length; i++){
    //       if(object.artist === collection[i].artist && object.yearPublished === collection[i].yearPublished){
    //         match.push(collection[i].artist, collection[i].yearPublished);
    //       }
    //   }
    // }
    //   return match;
    // }

    function search(object){
        let match = [];
        if(object === undefined || Object.keys(object).length === 0 ){
            return collection;
        } else {
        for(let album of collection){
          if(object.artist === album.artist && object.yearPublished === album.yearPublished){
            match.push(album.artist, album.yearPublished);
          }
      }
    }
      return match;
    }

    //TEST
    console.log(search({}));
    console.log(search());
    console.log(search(''));
    console.log(search({ artist: 'Ray Charles', yearPublished: 1957 }));
    console.log(search({ artist: 'Green Day', yearPublished: 2004 }));

    //COMMENTS
    //Object.keys(name of object).length --> gives you length of object, which is the number of properties in the object based on keys.
    //source: https://stackoverflow.com/questions/53107864/how-do-i-find-the-length-of-an-object

    //MADE A COMMIT!


//#9 - Add an array of tracks to your album objects. Each track should have a name and duration. You will need to update the functions to support this new property:
//      -Update the addToCollection function to also take an input parameter for the array of tracks.
//      -Update search to allow a trackName search criteria.
//      -Update the showCollection function to display the list of tracks for each album with its name and duration.

//    TITLE by ARTIST, published in YEAR:
//       1. NAME: DURATION
//       2. NAME: DURATION
//       3. NAME: DURATION
//    TITLE by ARTIST, published in YEAR:
//       1. NAME: DURATION
//       2. NAME: DURATION

    //CODE
    //********Updated addToCollection function********
    let newCollection = [];

    function newAddToCollection(title, artist, yearPublished, tracks){
      let newObject = {
        title,
        artist,
        yearPublished,
        tracks
      };
      newCollection.push(newObject);
      return newObject;
    }

    //TEST
    console.log(newAddToCollection('Stadium Acardium', 'RHCP', 2006, [{name:'Dani California', duration:'5:35'}, {name:'Charlie', duration:'4:38'}, {name:'Hump de Bump', duration:'3:33'}]));
    console.log(newAddToCollection('F.A.M.E.', 'Chris Brown', 2011, [{name:'Deuces', duration:'4:36'}, {name:'No BS', duration:'4:07'}, {name:'Right Here', duration:'4:08'}]));
    console.log(newAddToCollection('Live in Japan', 'Rodrigo y Gabriela', 2008, [{name:'OK Tokyo', duration:'5:42'}, {name:'Juan Loco', duration:'5:53'}, {name:'Orion', duration:'2:58'}]));
    console.log(newCollection);

    //********Updated search function********
    // function newSearch(trackName){
    //     let newMatch = [];
    //     for(let i = 0; i < newCollection.length; i++){
    //       for(let k = 0; k < newCollection[i].tracks.length; k++)
    //         if(trackName === newCollection[i].tracks[k].name){
    //           newMatch.push(newCollection[i].tracks[k].name);
    //       }
    //    }
    //   return newMatch;
    // }

    function newSearch(trackName){
        let newMatch = [];
        for(let newAlbum of newCollection){
          for(let name of newAlbum.tracks){
            if(trackName === name.name){
              newMatch.push(name.name);
          }
       }
     }
      return newMatch;
    }

    //TEST
    console.log(newSearch('Dani California'));
    console.log(newSearch('No BS'));
    console.log(newSearch('Look at Me Now'));
    console.log(newSearch('OK Tokyo'));

    //********Updated showCollection function********
    function newShowCollection(array){
      console.log(array.length);
      for(let i = 0; i < array.length; i++){
        console.log(`${array[i].title} by ${array[i].artist}, published in ${array[i].yearPublished}:`);
          for(let k = 0; k < array[i].tracks.length; k++){
                 console.log(`${k + 1}. ${array[i].tracks[k].name}: ${array[i].tracks[k].duration}`);
      }
    }
  }

    //TEST
    console.log(newShowCollection(newCollection));

    //MAKE A COMMIT
