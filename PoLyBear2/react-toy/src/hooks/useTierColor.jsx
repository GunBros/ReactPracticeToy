const useTierColor = (tier) => {
  const getTierColor = (tier) => {
    switch (tier) {
      case 'queen':
        return 'bg-pink-500';
      case 'king':
        return 'bg-purple-500';
      case 'jack':
        return 'bg-blue-500';
      case 'joker':
        return 'bg-red-500';
      case 'ace':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  return getTierColor(tier);
};

export default useTierColor;
