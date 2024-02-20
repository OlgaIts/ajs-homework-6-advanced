export default function setDefaultValue({ special }) {
  const updatedSpecial = special.map((item) => {
    if (!Object.prototype.hasOwnProperty.call(item, 'description')) {
      return { ...item, description: 'Описание недоступно' };
    }
    return item;
  });

  return updatedSpecial;
}
