const getTierColor = (tier) => {
  switch (tier) {
    case 'queen':
      return 'bg-queen';
    case 'king':
      return 'bg-king';
    case 'jack':
      return 'bg-jack';
    case 'joker':
      return 'bg-joker';
    case 'ace':
      return 'bg-ace';
    default:
      return 'bg-dark-500';
  }
};

export default getTierColor;
