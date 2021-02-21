const iconUrl = (num) => {
  const obj = {
    1: '1bbc7955-8299-4cc5-b6da-32e1ddcc41b4',
    2: '811a16d1-8b55-4e3b-854d-47a03958b4d5',
    3: '1a495f44-e92f-4492-a0fd-364ddcb2c5d1',
    4: '4a7638d8-34f4-4d15-a67c-2acdce17e14a',
    5: '4f8a142f-0fd1-4530-ad66-00d468e3a842',
    6: 'b6dc7683-cbfd-4934-b46b-1a1aeadf360f',
    7: 'f33fc7ff-9b61-4ae5-a1d5-ffbd32765d70'
  };
  return `https://firebasestorage.googleapis.com/v0/b/bhm-trivia-app.appspot.com/o/icons%2F${num}.png?alt=media&token=${obj[num]}`;
};

export default iconUrl;
