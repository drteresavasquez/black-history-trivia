const catImageUrl = (num) => {
  const obj = {
    1: '369f1dcf-f4d0-4a39-8db8-c68ddb5af860',
    2: '8820bfbb-a0ba-4701-9a32-b9edefccfd60',
    3: '0cd1303c-6d3c-49fc-9427-d006db3728cb',
    4: 'd1b72c20-642b-4a7a-90be-b829f7e37b56',
    5: '3e54b1f8-735f-4756-8e5d-abc42996472e',
    6: 'dc74feb6-9471-43f7-b03f-c6b156f946ff',
    7: 'f346c3a8-1acb-431a-bd7a-6cb769d34c26'
  };
  return `https://firebasestorage.googleapis.com/v0/b/bhm-trivia-app.appspot.com/o/category_images%2F${num}.jpg?alt=media&token=${obj[num]}`;
};

export default catImageUrl;
