const db = firebase.firestore();

const button_9 = document.getElementById('button-9');
const names_list = document.getElementById('names-list');
const button_new_swatch = document.getElementById('button_new_swatch');



let swatchesRef;

swatchesRef = db.collection('swatches');

canvasesRef = db.collection('canvases');





button_9.onclick = () => {
  const { serverTimestamp } = firebase.firestore.FieldValue;

  swatchesRef.add({
    name: "Fionn",
    answers: [3,9,7,7,3,0,0],
    canvasRef: "canvas-ref",
    createdBy: "",
    createdAt: serverTimestamp()
  });
}

button_new_swatch.onclick = () => {
  const { serverTimestamp } = firebase.firestore.FieldValue;

  canvasesRef.add({
    dates: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    expectedNumberOfSwatches: 6,
    code: "xyz",
    createdBy: "uid",
    createdAt: serverTimestamp()
  });
}


unsubscribe = swatchesRef.onSnapshot(querySnapshot => {
  const items = querySnapshot.docs.map(doc => {
    return `<li>${ doc.data().name } ${ doc.data().answers }</li>`
  });


  names_list.innerHTML = items.join('');
});
