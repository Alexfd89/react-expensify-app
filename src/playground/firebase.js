import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDOfjMxDvCfs12JQOpyQD5hVgYy67C4G9Q",
    authDomain: "expensify-c312b.firebaseapp.com",
    databaseURL: "https://expensify-c312b.firebaseio.com",
    projectId: "expensify-c312b",
    storageBucket: "expensify-c312b.appspot.com",
    messagingSenderId: "976665083612"
  };

  firebase.initializeApp(config);

  const database = firebase.database();

  //child removed subsribe
  database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });

  //child_changed subscribe
  database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });

  //child_added
  database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  });

  // const onDataChange = database.ref('expenses').on('value', (snapshot) => {
  //   const expenses = [];

  //     snapshot.forEach((snapshot) => {
  //       expenses.push({
  //         id: snapshot.key,
  //         ...snapshot.val()
  //       });
  //     });
  //     console.log(expenses);
  // });

  // database.ref('expenses')
  //   .once('value')
  //   .then((snapshot) => {
  //     const expenses = [];

  //     snapshot.forEach((childSnapshot) => {
  //       expenses.push({
  //         id: childSnapshot.key,
  //         ...childSnapshot.val()
  //       });
  //     });
  //     console.log(expenses);
  //   });

  //   database.ref('expenses/-LDpEkMz6wGDeDH1SFqe').update({
  //     amount: 13
  //   });
  
  database.ref('expenses').push({
    description: 'Rent',
    note: '',
    amount: 4332,
    createdAt: 3423523
  });


  //subscribe changes
  // const onValueChange = database.ref().on('value', (snapshot) => {
  //   const snp = snapshot.val();
  //   console.log(`${snp.name} is a ${snp.job.title} at ${snp.job.company}`);
  // });

  // setTimeout(() => {
  //   database.ref('name').set('Mike');
  // }, 3000)

  // //Stop Subscribing
  // // setTimeout(() => {
  // //   database.ref().off();
  // // }, 6000)


  // setTimeout(() => {
  //   database.ref('name').set('Andrew');
  // }, 9000)


  //Fatch data
  // database.ref()
  // .once('value')
  // .then((snapshot) => {
  //   const val = snapshot.val();
  //   console.log(val);
  // })
  // .catch((e) => console.log(e));

//   database.ref().set({
//     name: 'Alex Fadeev',
//     age: 28,
//     isSingle: true,
//     stressLevel: 6,
//     job: {
//       title: 'Software Developer',
//       company: 'Google'
//     },
//     location: {
//       city: 'Tel-aviv',
//       countrty: 'Israel'
//     }
//   })
//   .then(() => console.log('Data has been saved'))
//   .catch((e) => console.log(e));

//   database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'New-York'
//   })
// .then(() => console.log('Data has been pdated!'))
// .catch((e) => console.log('Data not updated', e))

  // database.ref().update({
  //   name: 'Mike Anderson',
  //   age: '31',
  //   //job: 'Software Developer', // Adding new data
  //   isSingle: null, //Delete data
  //   'location/city': 'Boston'
  // })
  // .then(() => console.log('Data has been pdated!'))
  // .catch((e) => console.log('Data not updated', e))
  
  //Remove data
  // database.ref('isSingle').remove()
  // .then(() => console.log('Removed success'))
  // .catch((e) => console.log(e));

  // Age update
  // database.ref('age').set(29);
  // database.ref('location/city').set('Petach-Tiqwawa');

  // database.ref('attributes').set({
  //     height: '195',
  //     weight: '104'
  // })
  // .then(() => console.log('Second set call works'))
  // .catch((e) => console.log(e));



 
  