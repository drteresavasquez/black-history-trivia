const iconUrl = (num) => {
  const obj = {
    1: '1487a9f5-4969-462c-8363-a3a6016ce575',
    2: '70bc4e6a-972e-4875-bd29-71d8f451ed9c',
    3: '1b4f6e1e-b1b5-4ce5-b178-a36a7b02084d',
    4: '5105f7ed-4d78-4099-8bb6-c9e91fbfdf0e',
    5: '8276bf4e-7696-4615-ad2e-cfe50afc2c5b',
    6: '99526212-5728-4cbf-b3ff-130830afee95',
    7: 'ab39e464-7d02-49d1-b550-d593cce2d3bf'
  };
  return `https://firebasestorage.googleapis.com/v0/b/bhm-trivia-app.appspot.com/o/icons%2F${num}.png?alt=media&token=${obj[num]}`;
};

export default iconUrl;
