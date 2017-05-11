let flagInitialized = false;
export const initFirebase = () => {
  if (!flagInitialized) {
    flagInitialized = true;
    window.firebase.initializeApp({
      apiKey: 'AIzaSyBp58WE5idGsTaIdG-QZy26qVOwP4yRRPA',
      authDomain: 'blitz-content-review.firebaseapp.com',
      databaseURL: 'https://blitz-content-review.firebaseio.com',
      storageBucket: 'blitz-content-review.appspot.com',
      messagingSenderId: '666275442985'
    });
  }
};
